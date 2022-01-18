import GLOBALS from 'codechum-app-globals';
import {
  getExecutionStatus,
  getFileName,
  getSubmissionOutput,
  prepareJudge0Data,
  removeNullOnString,
} from 'codechum-app-utils';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import { generateInitialSourceCode } from 'screens/common/Answer/helpers';
import { InteractiveService } from 'services';
import { useForceUpdate } from '.';

/* eslint-disable camelcase */
const useAnswerManagerForDummyResults = ({
  task,
  initialResult,
  initialAnswersTestCaseStatuses,
  isResultLoading,
  questionNumber,
}) => {
  const forceUpdate = useForceUpdate();

  const [isCodeSaving, toggleCodeSaving] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);

  const [isInitializing, setIsInitializing] = useState(false);
  const [result, setResult] = useState(null);
  const [answersTestCaseStatuses, setAnswersTestCaseStatuses] = useState(null);
  const [output, setOutput] = useState(null);

  const [customInputs, setCustomInputs] = useState([]);

  const resultRef = useRef(null);
  const currentAnswerRef = useRef(null);

  // computed values
  const currentCustomInput = customInputs?.[currentAnswerRef.current?.id];
  const currentAnswerTestCaseStatuses =
    answersTestCaseStatuses?.[currentAnswerRef.current?.id];
  const scorePerTestCase =
    currentAnswerRef.current?.question?.max_score /
    currentAnswerRef.current?.question?.problem?.test_cases?.length;

  useEffect(() => {
    if (!result) {
      return;
    }

    resultRef.current = result;
    currentAnswerRef.current = result.answers[questionNumber - 1];

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
  }, [task?.id]);

  // initialization of states
  useEffect(() => {
    const initializeResult = async () => {
      setIsInitializing(true);

      setResult(initialResult);

      const answerCustomInputs = {};
      for (let i = 0; i < initialResult.answers.length; i++) {
        customInputs[initialResult.answers[i].id] = '';
      }
      setCustomInputs(answerCustomInputs);

      setIsInitializing(false);
    };

    if (
      initialResult &&
      task &&
      !isInitializing &&
      !isResultLoading &&
      !result
    ) {
      initializeResult();
    }

    if (
      initialAnswersTestCaseStatuses &&
      task &&
      !isInitializing &&
      !answersTestCaseStatuses
    ) {
      setAnswersTestCaseStatuses(initialAnswersTestCaseStatuses);
    }
  }, [
    initialAnswersTestCaseStatuses,
    initialResult?.id,
    isResultLoading,
    result,
    task?.id,
  ]);

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

    const judge0Data = prepareJudge0Data({
      executionMode,
      sourceCodes: currentAnswer.source_codes.filter(
        (sc) =>
          sc.programming_language.id === currentAnswer.programming_language.id
      ),
      programmingLanguage: currentAnswer.programming_language,
      testCases: currentAnswer?.question?.problem?.test_cases,
      customInput: currentCustomInput,
      shownCasesOnly: false,
    });

    let submissions = null;
    try {
      const { data } = await InteractiveService.nonInteractivePlayground({
        body: {
          programming_language_id: currentAnswer.programming_language.online_id,
          source_codes: currentAnswer.source_codes.filter(
            (sc) =>
              sc.programming_language.id ===
              currentAnswer.programming_language.id
          ),
          custom: {
            input: currentCustomInput,
          },
        },
      });
      submissions = data.submissions;
    } catch (error) {
      console.log('Error calling CodeExecutionsService.execute', error);
      setIsExecuting(false);
      return;
    }

    // saving the new output or test case statuses
    if (executionMode === GLOBALS.EXECUTION_MODES.RUN) {
      // extract the actual output from the submission data
      setOutput(submissions.compile_output || submissions.stdout);
    } else {
      newTestCaseStatuses = submissions.map((data, index) => {
        const actualOutput = removeNullOnString(getSubmissionOutput(data));
        const testCaseId = judge0Data.test_cases[index].id;

        return {
          test_case_id: testCaseId,
          executionStatus: getExecutionStatus({
            submissionData: data,
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
        datetime_submitted: moment(),
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

    const body = {
      test_cases: currentAnswer?.question?.problem?.test_cases?.map(
        (testCase, index) => ({
          [index]: testCase.inputs?.map((input) => input.value),
        })
      ),
      programming_language_id: currentAnswer.programming_language.online_id,
      source_codes: sourceCodes,
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

    newTestCaseStatuses = submissions.map((data, index) => {
      const actualOutput = data[index].compile_output || data[index].stdout;
      const testCaseId = currentAnswer.question.problem.test_cases[index].id;

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
        datetime_submitted: moment(),
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

  const onSourceCodeChange = async (sourceCodeId, newCodeValue) => {
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

    toggleCodeSaving(false);
  };

  const onLanguageChange = async (newLanguageValue) => {
    const currentAnswer = currentAnswerRef.current;

    toggleCodeSaving(true);

    const newProgrammingLanguage = task.programming_languages.find(
      (language) => language.id === newLanguageValue
    );
    updateAnswer({
      programming_language: newProgrammingLanguage,
      programming_language_id: newProgrammingLanguage.id,
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

    const newSourceCode = {
      id: currentAnswer.source_codes.length + 1,
      answer_id: currentAnswer.id,
      file_name: getFileName(newProgrammingLanguage.extension),
      file_extension: newProgrammingLanguage.extension,
      programming_language_id: newProgrammingLanguage.id,
      programming_language: {
        ...newProgrammingLanguage,
      },
      code: generateInitialSourceCode(newLanguageValue),
    };

    currentAnswer.source_codes.push(newSourceCode);
    toggleCodeSaving(false);
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

  const createSourceCode = async (fileName, fileExtension) => {
    const currentAnswer = currentAnswerRef.current;

    // create a SourceCode object
    const newSourceCode = {
      id: currentAnswer.source_codes.length + 1,
      answer_id: currentAnswer.id,
      file_name: fileName,
      file_extension: fileExtension,
      programming_language_id: currentAnswer.programming_language.id,
      programming_language: {
        ...currentAnswer.programming_language,
      },
      code: '',
    };

    // create a SourceCode object and add it to the list of source codes
    currentAnswer.source_codes.push(newSourceCode);
  };

  const deleteSourceCode = async (sourceCodeId) => {
    const currentAnswer = currentAnswerRef.current;

    currentAnswer.source_codes = currentAnswer.source_codes.filter(
      (sc) => sc.id !== sourceCodeId
    );
  };

  return {
    isLoading: !result || !answersTestCaseStatuses || !currentAnswerRef.current,
    result,
    currentAnswerTestCaseStatuses,
    output,
    isExecuting,
    isCodeSaving,
    currentAnswer: currentAnswerRef.current,
    currentCustomInput,
    executeCode,
    updateInput,
    onSourceCodeChange,
    onLanguageChange,
    createSourceCode,
    deleteSourceCode,
    executeInteractiveCode,
  };
};

export default useAnswerManagerForDummyResults;
