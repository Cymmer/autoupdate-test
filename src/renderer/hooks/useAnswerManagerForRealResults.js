import GLOBALS from 'codechum-app-globals';
import {
  getExecutionStatus,
  getFileName,
  removeNullOnString,
} from 'codechum-app-utils';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import {
  AnswersService,
  AnswersV4Service,
  ExecutionsService,
  InteractiveService,
  ServerService,
  SourceCodesService,
  TestCaseStatusesService,
} from 'services';
import { useDebouncedCallback } from 'use-debounce/lib';
import { useAnswerSaveTimeSpent, useForceUpdate } from '.';
import { generateInitialSourceCode } from '../screens/common/Answer/helpers';

const getExecutionTypeNumber = (executionMode) => {
  if (executionMode === GLOBALS.EXECUTION_MODES.TEST) {
    return 0;
  }

  if (executionMode === GLOBALS.EXECUTION_MODES.RUN) {
    return 1;
  }

  if (executionMode === GLOBALS.EXECUTION_MODES.SUBMIT) {
    return 2;
  }

  return -1;
};

/**
 * retrieves the latest test case statuses of an Answer object
 * @param {Object} answer - the Answer object from the server
 * @return {Object[]} an array of test case statuses
 */
const retrieveAnswersTestCaseStatuses = async (answer) => {
  const { data: answerTestCaseStatuses } =
    await TestCaseStatusesService.listAnswerLatestTestCaseStatuses({
      params: { answerId: answer.id },
    });

  // mutate the `exeuctionStatus` values of all of the
  // test case statuses to match what we have been
  // using here in the front end
  for (let j = 0; j < answerTestCaseStatuses.length; j++) {
    answerTestCaseStatuses[j].executionStatus = answerTestCaseStatuses[j]
      .correct
      ? GLOBALS.EXECUTION_STATUSES.PASSED.value
      : GLOBALS.EXECUTION_STATUSES.FAILED.value;
  }

  return answerTestCaseStatuses;
};

/**
 * retrieves the latest executions of an Answer object
 * @param {Object} answer - the Answer object from the server
 * @return {Object[]} an array of executions
 */
const retrieveAnswersLatestExecutions = async (answer) => {
  const {
    data: { count, results: latestExecutions },
  } = await ExecutionsService.list({
    isExtended: false,
    params: {
      pageSize: 20,
      answerId: answer.id,
      ordering: '-id',
      mode: 'test,submit',
    },
  });

  return latestExecutions.map((execution, index) => ({
    ...execution,
    execution_number: count - index,
  }));
};

/* eslint-disable camelcase */
const useAnswerManagerForRealResults = ({
  task,
  initialResult,
  isResultLoading,
  questionNumber,
  isPractice,
}) => {
  const [debounceCreateOrUpdateSourceCodeOnServer] = useDebouncedCallback(
    ({ sourceCodeId, createBody, updateBody, callback }) =>
      SourceCodesService.compounded
        .createOrUpdate({
          sourceCodeId,
          createBody,
          updateBody,
        })
        .then(callback),
    500
  );
  const [debounceUpdateAnswerOnServer] = useDebouncedCallback(
    (answerId, body) => AnswersService.update({ answerId, body }),
    500
  );

  const forceUpdate = useForceUpdate();

  const [isExecuting, setIsExecuting] = useState(false);

  const [isInitializing, setIsInitializing] = useState(false);
  const [result, setResult] = useState(null);
  const [answersTestCaseStatuses, setAnswersTestCaseStatuses] = useState({});
  const [answersLatestExecutions, setAnswersLatestExecutions] = useState({});
  const [output, setOutput] = useState(null);

  const [customInputs, setCustomInputs] = useState([]);

  const [isCodeSaving, toggleCodeSaving] = useState(false);

  const [serverMillisecondsOffset, setServerMillisecondsOffset] =
    useState(null);

  const resultRef = useRef(null);
  const currentAnswerRef = useRef(null);

  // computed values
  const currentCustomInput = customInputs?.[currentAnswerRef.current?.id];
  const currentAnswerTestCaseStatuses =
    answersTestCaseStatuses?.[currentAnswerRef.current?.id];
  const currentAnswerLatestExecutions =
    answersLatestExecutions?.[currentAnswerRef.current?.id];
  const scorePerTestCase =
    currentAnswerRef.current?.question?.max_score /
    currentAnswerRef.current?.question?.problem?.test_cases?.length;

  useEffect(() => {
    if (!result) {
      return;
    }

    resultRef.current = result;
    currentAnswerRef.current = result.answers[questionNumber - 1];

    // everytime the answer changes and there is no
    // answer test case statuses yet for the current answer,
    // we retrieve them all
    const retrieveAnswerTestCaseStatusesWrapper = async (a) => {
      const initialAnswerTestCaseStatuses =
        await retrieveAnswersTestCaseStatuses(a);
      setAnswersTestCaseStatuses({
        ...answersTestCaseStatuses,
        [a.id]: initialAnswerTestCaseStatuses,
      });
    };
    if (!answersTestCaseStatuses?.[currentAnswerRef.current?.id]) {
      retrieveAnswerTestCaseStatusesWrapper(currentAnswerRef.current);
    }

    // everytime the answer changes and there is no
    // latest executions yet for the current answer,
    // we retrieve them all
    const retrieveLatestExecutionsWrapper = async (a) => {
      const initialAnswerLatestExecutions =
        await retrieveAnswersLatestExecutions(a);
      setAnswersLatestExecutions({
        ...answersLatestExecutions,
        [a.id]: initialAnswerLatestExecutions,
      });
    };
    if (!answersLatestExecutions[currentAnswerRef.current?.id]) {
      retrieveLatestExecutionsWrapper(currentAnswerRef.current);
    }

    // updating the ref doesn't trigger a re-render of the hook
    // so we do a force update instead
    forceUpdate();
  }, [result, questionNumber]);

  const updateAnswer = (data) => {
    if (!resultRef.current) {
      return;
    }

    const currentAnswer = currentAnswerRef.current;

    setResult({
      ...resultRef.current,
      answers: resultRef.current.answers.map((a) =>
        a.id === currentAnswer.id
          ? {
              ...a,
              ...data,
            }
          : a
      ),
    });
  };

  useEffect(() => {
    if (result) {
      setResult(null);
      setCustomInputs([]);
      setAnswersTestCaseStatuses(null);
    }
  }, [initialResult?.id]);

  // initialization of states
  useEffect(() => {
    const initializeResult = async () => {
      setIsInitializing(true);
      const { data: serverTime } = await ServerService.getServerTime();
      const computedServerMillisecondsOffset = moment(serverTime).diff(
        new Date()
      );

      setServerMillisecondsOffset(computedServerMillisecondsOffset);

      const answerCustomInputs = {};
      for (let i = 0; i < initialResult.answers.length; i++) {
        customInputs[initialResult.answers[i].id] = '';
      }

      setResult(initialResult);
      setCustomInputs(answerCustomInputs);

      forceUpdate();

      setIsInitializing(false);
    };

    if (initialResult && !isInitializing && !isResultLoading && !result) {
      initializeResult();
    }
  }, [initialResult?.id, isResultLoading, result]);

  // eslint-disable-next-line
  const _saveToServer = async ({ submissions, executionMode }) => {
    const currentAnswer = currentAnswerRef.current;

    const body = {
      source_codes: currentAnswer.source_codes.filter(
        (sc) =>
          sc.programming_language.id === currentAnswer.programming_language.id
      ),
      execution_type: getExecutionTypeNumber(executionMode),
      compilation: {
        warnings: [],
        errors: [],
      },
      programming_language_id: currentAnswer.programming_language.id,
      is_practice: isPractice,
    };

    if (executionMode === GLOBALS.EXECUTION_MODES.RUN) {
      body.custom = {
        inputs: [removeNullOnString(currentCustomInput)],
        output: submissions.compile_output || submissions.stdout,
      };
    }

    if (
      executionMode === GLOBALS.EXECUTION_MODES.TEST ||
      executionMode === GLOBALS.EXECUTION_MODES.SUBMIT
    ) {
      body.test_cases = submissions?.map((data, index) => ({
        id: currentAnswer.question.problem.test_cases[index].id,
        inputs:
          currentAnswer.question.problem.test_cases[index].inputs?.map(
            (input) => ({
              problem_input_id:
                input.problem_input_id || input.problem_input?.id,
              value: input.value,
            })
          ) || [],
        output: data[index].compile_output || data[index].stdout,
        status: data[index].status,
      }));
    }

    let latestExecution = null;

    // call the Execute Answer API
    latestExecution = await AnswersV4Service.execute({
      answerId: currentAnswer.id,
      body,
    }).catch(async () => {
      // try again one more time if the first
      // one was an error
      latestExecution = await AnswersV4Service.execute({
        answerId: currentAnswer.id,
        body,
      }).catch(() => {
        // if it still errors, don't catch it anymore
      });
    });

    return latestExecution?.data;
  };

  const saveInteractiveCodeToServer = async ({
    submissions,
    executionMode,
    inputs,
    output: interactiveOutput,
  }) => {
    const currentAnswer = currentAnswerRef.current;

    const body = {
      source_codes: currentAnswer.source_codes.filter(
        (sc) =>
          sc.programming_language.id === currentAnswer.programming_language.id
      ),
      execution_type: getExecutionTypeNumber(executionMode),
      compilation: {
        warnings: [],
        errors: [],
      },
      programming_language_id: currentAnswer.programming_language.id,
      is_practice: isPractice,
      memory_taken: 0,
      execution_time: 0,
    };

    if (executionMode === GLOBALS.EXECUTION_MODES.RUN) {
      body.custom = {
        inputs,
        output: interactiveOutput,
      };
    }

    if (
      executionMode === GLOBALS.EXECUTION_MODES.TEST ||
      executionMode === GLOBALS.EXECUTION_MODES.SUBMIT
    ) {
      body.test_cases = submissions?.map((data, index) => ({
        id: currentAnswer.question.problem.test_cases[index].id,
        inputs:
          currentAnswer.question.problem.test_cases[index].inputs?.map(
            (input) => ({
              problem_input_id:
                input.problem_input_id || input.problem_input?.id,
              value: input.value,
            })
          ) || [],
        output:
          removeNullOnString(data[index].compile_output) ||
          removeNullOnString(data[index].stdout),
        status: data[index].status,
        execution_time: data[index].time || 0,
        memory_taken: data[index].memory || 0,
      }));
    }

    let latestExecution = null;

    try {
      latestExecution = await AnswersV4Service.execute({
        answerId: currentAnswer.id,
        body,
      });
    } catch (e) {
      latestExecution = await AnswersV4Service.execute({
        answerId: currentAnswer.id,
        body,
      });
    }

    return latestExecution?.data;
  };

  const getSubmitCooldown = () => {
    const currentAnswer = currentAnswerRef.current;

    const timeRemainingSeconds = task?.time_before_end;

    if (
      isPractice ||
      !currentAnswer ||
      !currentAnswer.datetime_submitted ||
      !serverMillisecondsOffset ||
      timeRemainingSeconds < 300
    ) {
      return 0;
    }

    const currentDateTimeMoment = moment().add(
      'milliseconds',
      serverMillisecondsOffset
    );
    const difference = currentDateTimeMoment.diff(
      currentAnswer.datetime_submitted,
      'seconds'
    );

    return difference > GLOBALS.COOLDOWNS.SUBMIT
      ? 0
      : GLOBALS.COOLDOWNS.SUBMIT - difference;
  };

  const executeCode = async (executionMode) => {
    const currentAnswer = currentAnswerRef.current;

    setIsExecuting(true);

    let newTestCaseStatuses = [];

    // clearing up previous output or test case statuses
    if (executionMode === GLOBALS.EXECUTION_MODES.RUN) {
      setOutput(null);
    } else {
      setAnswersTestCaseStatuses({
        ...answersTestCaseStatuses,
        [currentAnswer.id]: newTestCaseStatuses,
      });
    }

    // const judge0Data = prepareJudge0Data({
    //   executionMode,
    //   sourceCodes: currentAnswer.source_codes.filter(
    //     (sc) =>
    //       sc.programming_language.id === currentAnswer.programming_language.id
    //   ),
    //   programmingLanguage: {
    //     ...currentAnswer.programming_language,
    //     id: currentAnswer.programming_language.online_id,
    //   },
    //   testCases: currentAnswer?.question?.problem?.test_cases,
    //   customInput: currentCustomInput,
    //   shownCasesOnly:
    //     executionMode === GLOBALS.EXECUTION_MODES.TEST && isPractice === false,
    // });

    let submissions = null;
    try {
      if (executionMode === GLOBALS.EXECUTION_MODES.RUN) {
        const { data } = await InteractiveService.nonInteractivePlayground({
          body: {
            programming_language_id:
              currentAnswer.programming_language.online_id,
            source_codes: currentAnswer.source_codes
              .filter(
                (sc) =>
                  sc.programming_language.id ===
                  currentAnswer.programming_language.id
              )
              .map((sc) => ({
                code: sc.code,
                file_name: sc.file_name,
                file_extension: sc.file_extension,
              })),
            custom: {
              input: currentCustomInput,
            },
          },
        });
        submissions = data.submissions;
      } else {
        const { data } = await InteractiveService.execute({
          body: {
            test_cases: currentAnswer?.question?.problem?.test_cases?.map(
              (testCase, index) => ({
                [index]: testCase.inputs?.map((input) => input.value) || [],
              })
            ),
            programming_language_id:
              currentAnswer.programming_language.online_id,
            source_codes: currentAnswer.source_codes
              .filter(
                (sc) =>
                  sc.programming_language.id ===
                  currentAnswer.programming_language.id
              )
              .map((sc) => ({
                code: sc.code,
                file_name: sc.file_name,
                file_extension: sc.file_extension,
              })),
            mode: 'non-interactive',
          },
        });
        submissions = data.submissions;
      }
    } catch (error) {
      console.log('Error calling CodeExecutionsService.execute', error);
      setIsExecuting(false);
      return;
    }

    let latestExecution = await _saveToServer({
      submissions,
      executionMode,
    });

    // saving the new output or test case statuses
    if (executionMode === GLOBALS.EXECUTION_MODES.RUN) {
      // extract the actual output from the submission data
      setOutput(submissions.compile_output || submissions.stdout);
    } else {
      newTestCaseStatuses = submissions.map((data, index) => {
        const actualOutput = data[index].compile_output || data[index].stdout;
        const testCaseId =
          currentAnswer?.question?.problem?.test_cases?.[index]?.id;

        return {
          test_case_id: testCaseId,
          executionStatus: getExecutionStatus({
            submissionData: {
              ...data,
              status: {
                id: data[index].status,
              },
            },
            output: currentAnswer.question.problem.test_cases.find(
              (tc) => tc.id === testCaseId
            ).output,
            actualOutput,
          }),
          actual_output: actualOutput,
        };
      });

      setAnswersTestCaseStatuses({
        ...answersTestCaseStatuses,
        [currentAnswer.id]: newTestCaseStatuses,
      });

      if (latestExecution) {
        latestExecution = {
          ...latestExecution,
          execution_number:
            (currentAnswerLatestExecutions?.[0]?.execution_number || 0) + 1,
        };
        setAnswersLatestExecutions({
          ...answersLatestExecutions,
          [currentAnswer.id]:
            currentAnswerLatestExecutions.length === 20
              ? [latestExecution, ...currentAnswerLatestExecutions.slice(0, -1)]
              : [latestExecution, ...currentAnswerLatestExecutions],
        });
      }
    }

    if (executionMode === GLOBALS.EXECUTION_MODES.SUBMIT) {
      // check if this problem must be perfect in order
      // to get a score. If it is, check if the number
      // of test cases passed is equal to the total
      // number of test cases of this question
      const casesPassed = newTestCaseStatuses.filter(
        (status) =>
          status.executionStatus === GLOBALS.EXECUTION_STATUSES.PASSED.value
      ).length;
      const mustBePerfectCheckFailed =
        currentAnswer.question.problem.must_be_perfect &&
        casesPassed < currentAnswer.question.problem.test_cases.length;

      const answerScore = mustBePerfectCheckFailed
        ? 0
        : casesPassed * scorePerTestCase;
      updateAnswer({
        score: answerScore,
        datetime_submitted: moment().add(
          'milliseconds',
          serverMillisecondsOffset
        ),
        submissions: currentAnswer.submissions + 1,
      });
    }

    setIsExecuting(false);
  };

  const executeInteractiveCode = async (executionMode) => {
    const currentAnswer = currentAnswerRef.current;

    const sourceCodes = currentAnswer.source_codes
      .filter(
        (sc) =>
          sc.programming_language.id === currentAnswer.programming_language.id
      )
      .map((sc) => ({
        code: sc.code,
        file_name: sc.file_name,
        file_extension: sc.file_extension,
      }));

    setIsExecuting(true);

    let newTestCaseStatuses = [];

    setAnswersTestCaseStatuses({
      ...answersTestCaseStatuses,
      [currentAnswer.id]: newTestCaseStatuses,
    });

    const testCases =
      executionMode === GLOBALS.EXECUTION_MODES.SUBMIT
        ? currentAnswer?.question?.problem?.test_cases
        : currentAnswer?.question?.problem?.test_cases?.filter(
            (testCase) => testCase.is_shown
          );

    const body = {
      test_cases: testCases.map((testCase, index) => ({
        [index]: testCase.inputs?.map((input) => input.value) || [],
      })),
      programming_language_id: currentAnswer.programming_language.online_id,
      source_codes: sourceCodes,
      mode: 'interactive',
    };

    let submissions = null;
    try {
      const { data } = await InteractiveService.execute({ body });
      submissions = data.submissions;
    } catch (error) {
      console.log('Error calling InteractiveService.execute', error);
      setIsExecuting(false);
      return;
    }

    let latestExecution = await saveInteractiveCodeToServer({
      submissions,
      executionMode,
    });

    newTestCaseStatuses = submissions.map((data, index) => {
      const actualOutput = data[index].compile_output || data[index].stdout;
      const testCaseId = testCases[index].id;

      return {
        test_case_id: testCaseId,
        executionStatus: getExecutionStatus({
          submissionData: {
            status: {
              id: data[index].status,
            },
          },
          output: currentAnswer.question.problem.test_cases.find(
            (tc) => tc.id === testCaseId
          ).output,
          actualOutput,
        }),
        actual_output: actualOutput,
      };
    });

    setAnswersTestCaseStatuses({
      ...answersTestCaseStatuses,
      [currentAnswer.id]: newTestCaseStatuses,
    });

    if (latestExecution) {
      latestExecution = {
        ...latestExecution,
        execution_number:
          (currentAnswerLatestExecutions?.[0]?.execution_number || 0) + 1,
      };
      setAnswersLatestExecutions({
        ...answersLatestExecutions,
        [currentAnswer.id]:
          currentAnswerLatestExecutions.length === 20
            ? [latestExecution, ...currentAnswerLatestExecutions.slice(0, -1)]
            : [latestExecution, ...currentAnswerLatestExecutions],
      });
    }

    if (executionMode === GLOBALS.EXECUTION_MODES.SUBMIT) {
      // check if this problem must be perfect in order
      // to get a score. If it is, check if the number
      // of test cases passed is equal to the total
      // number of test cases of this question
      const casesPassed = newTestCaseStatuses.filter(
        (status) =>
          status.executionStatus === GLOBALS.EXECUTION_STATUSES.PASSED.value
      ).length;
      const mustBePerfectCheckFailed =
        currentAnswer.question.problem.must_be_perfect &&
        casesPassed < currentAnswer.question.problem.test_cases.length;

      const answerScore = mustBePerfectCheckFailed
        ? 0
        : casesPassed * scorePerTestCase;
      updateAnswer({
        score: answerScore,
        datetime_submitted: moment().add(
          'milliseconds',
          serverMillisecondsOffset
        ),
        submissions: currentAnswer.submissions + 1,
      });
    }

    setIsExecuting(false);
  };

  const updateInput = (answerId, newValue) => {
    setCustomInputs({
      ...customInputs,
      [answerId]: newValue,
    });
  };

  const onSourceCodeChange = (sourceCodeId, newCodeValue) => {
    const currentAnswer = currentAnswerRef.current;

    toggleCodeSaving(true);

    updateAnswer({
      source_codes: currentAnswer.source_codes.map((sourceCode) =>
        sourceCode.id === sourceCodeId
          ? {
              ...sourceCode,
              code: newCodeValue,
            }
          : sourceCode
      ),
    });

    debounceCreateOrUpdateSourceCodeOnServer({
      sourceCodeId,
      updateBody: {
        code: newCodeValue,
      },
      callback: () => {
        toggleCodeSaving(false);
      },
    });
  };

  const onLanguageChange = (newLanguageValue) => {
    const currentAnswer = currentAnswerRef.current;

    toggleCodeSaving(true);

    const newProgrammingLanguage = task.programming_languages.find(
      (language) => language.id === newLanguageValue
    );
    updateAnswer({
      programming_language: newProgrammingLanguage,
      programming_language_id: newProgrammingLanguage.id,
    });
    debounceUpdateAnswerOnServer(currentAnswer.id, {
      programming_language_id: newLanguageValue,
    });
    // check if there's already a Source Code for this language
    if (
      currentAnswer.source_codes.some(
        (sc) => sc.programming_language_id === newLanguageValue
      )
    ) {
      toggleCodeSaving(false);
      return;
    }

    // if we are in the AnswerTask, we actually create
    // the Source Code object and store it in the DB
    debounceCreateOrUpdateSourceCodeOnServer({
      sourceCodeId: null,
      createBody: {
        code: generateInitialSourceCode(newLanguageValue),
        answer_id: currentAnswer.id,
        programming_language_id: newLanguageValue,
        file_name: getFileName(newProgrammingLanguage.extension),
        file_extension: newProgrammingLanguage.extension,
      },
      callback: ({ data }) => {
        currentAnswer.source_codes.push({
          ...data.source_code,
          programming_language: newProgrammingLanguage,
        });
        toggleCodeSaving(false);
      },
    });
  };

  const overallScoreDependencies = result?.answers
    ?.map((answer) => parseInt(answer.score))
    .join('');

  // everytime a score of an answer changes, recompute the overall
  // score of the result
  useEffect(() => {
    if (result) {
      setResult({
        ...result,
        score:
          result.answers.reduce((acc, curr) => acc + parseInt(curr.score), 0) ||
          0,
      });
    }
  }, [overallScoreDependencies]);

  useAnswerSaveTimeSpent({
    answer: currentAnswerRef.current,
    updateAnswer,
    isSaving: isPractice === false,
  });

  const createSourceCode = async (fileName, fileExtension) => {
    const currentAnswer = currentAnswerRef.current;

    // create a SourceCode object
    const { data: newSourceCode } = await SourceCodesService.create({
      body: {
        code: '',
        answer_id: currentAnswer.id,
        programming_language_id: currentAnswer.programming_language.id,
        file_name: fileName,
        file_extension: fileExtension,
      },
    });

    currentAnswer.source_codes.push({
      ...newSourceCode,
      programming_language: {
        ...currentAnswer.programming_language,
      },
    });
  };

  const deleteSourceCode = async (sourceCodeId) => {
    const currentAnswer = currentAnswerRef.current;

    await SourceCodesService.delete({ sourceCodeId });

    currentAnswer.source_codes = currentAnswer.source_codes.filter(
      (sc) => sc.id !== sourceCodeId
    );
  };

  const restoreSourceCodes = async (
    newSourceCodes,
    executionProgrammingLanguage
  ) => {
    const currentAnswer = currentAnswerRef.current;

    // delete all existing source code
    for (let i = 0; i < currentAnswer.source_codes.length; i++) {
      const sourceCode = currentAnswer.source_codes[i];

      // but we only delete the source codes that have the
      // same programming language as of the passed new
      // source codes
      if (
        sourceCode.programming_language_id === executionProgrammingLanguage.id
      ) {
        await SourceCodesService.delete({
          sourceCodeId: sourceCode.id,
        });
        currentAnswer.source_codes = currentAnswer.source_codes.filter(
          (sc) => sc.id !== sourceCode.id
        );
      }
    }

    // create new source codes
    for (let i = 0; i < newSourceCodes.length; i++) {
      const sourceCode = newSourceCodes[i];
      const { data: newSourceCode } = await SourceCodesService.create({
        body: {
          code: sourceCode.code,
          answer_id: currentAnswer.id,
          programming_language_id: executionProgrammingLanguage.id,
          file_name: sourceCode.file_name,
          file_extension: sourceCode.file_extension,
        },
      });

      currentAnswer.source_codes.push({
        ...newSourceCode,
        programming_language: {
          ...executionProgrammingLanguage,
        },
      });
    }

    if (
      currentAnswer.programming_language.id !== executionProgrammingLanguage.id
    ) {
      // update the answer's programming language
      onLanguageChange(executionProgrammingLanguage.id);
    }

    forceUpdate();
  };

  return {
    createSourceCode,
    currentAnswer: currentAnswerRef.current,
    currentAnswerLatestExecutions: currentAnswerLatestExecutions || [],
    currentAnswerTestCaseStatuses: currentAnswerTestCaseStatuses || [],
    currentCustomInput,
    deleteSourceCode,
    executeCode,
    executeInteractiveCode,
    saveInteractiveCodeToServer,
    isCodeSaving,
    isExecuting,
    isLoading: !result || !currentAnswerRef.current,
    onLanguageChange,
    onSourceCodeChange,
    output,
    restoreSourceCodes,
    result,
    submitCooldown: getSubmitCooldown(),
    updateInput,
  };
};

export default useAnswerManagerForRealResults;
