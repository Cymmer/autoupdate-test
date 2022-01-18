/* eslint-disable camelcase */

import GLOBALS from 'codechum-app-globals';
import {
  determinePassingStatus,
  determinePercentageColorClass,
  formatTotalSecondsToTime,
  getDuration,
  hasNoCode,
  isFeatureLocked,
} from 'codechum-app-utils';
import {
  ExecutionCard,
  TestCaseInteractiveWithActualOutput,
  TestCaseWithActualOutput,
} from 'components';
import {
  Button,
  ControlledTextArea,
  IconButton,
  ScreenLoader,
  Tooltip,
} from 'components/elements';
import {
  buttonTypes,
  iconButtonTypes,
  textAreaTypes,
  tooltipPlacement,
} from 'components/elements/constants';
import { getServerDateTime, getUser } from 'ducks';
import {
  useAnswerCheatingTracker,
  useAnswerCommentsCount,
  useAnswerManagerForRealResults,
  useStudentStartTaskV4,
  useStudentTaskV4,
  useTimedTasks,
} from 'hooks';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  EnrollmentV4Service,
  MixpanelTrackService,
  SectionsV4Service,
} from 'services';
import { finishActivity } from 'utils/results';
import AnswerTask from './AnswerTask';
import { answerScreens } from './constants';
import modals from './constants/modals';
import FullScreenClosedScreen from './FullScreenClosedScreen';
import FullScreenNotApprovedScreen from './FullScreenNotApprovedScreen';
import Info from './Info';
import Navbar from './Navbar';
import MenuButton from './Navigation/MenuButton';
import styles from './styles.module.scss';

const TIMEOUT_BEFORE_REDIRECT_TO_END = 7000;

export const Answer = ({
  match: {
    params: { taskId, questionNumber },
  },
  user,
  isPractice,
  serverDateTime,
}) => {
  document.body.id = 'answerContainer';
  const history = useHistory();
  const maximizableElement = useRef(null);

  const { id: studentId } = user;

  const [isTaskInfoToggled, toggleTaskInfo] = useState(false);
  const [modalToggled, setModalToggled] = useState(null);

  // Retrieve Task
  const {
    isLoading: isTaskLoading,
    task: startedTask,
    taskStatuses,
  } = useStudentTaskV4({
    taskId,
    studentId,
  });

  const { runningTasks, stoppedTasks } = useTimedTasks(
    startedTask ? [startedTask] : []
  );

  const task = runningTasks[0] || stoppedTasks[0];

  // Retrieve Result
  const {
    isLoading: isResultLoading,
    isResultSubmitted,
    result: initialResult,
  } = useStudentStartTaskV4({
    task,
    studentId,
    isPractice,
  });

  const {
    isLoading: isAnswerManagerLoading,
    result,
    currentAnswerTestCaseStatuses,
    currentAnswerLatestExecutions,
    output,
    isExecuting,
    isCodeSaving,
    currentAnswer,
    currentCustomInput,
    submitCooldown,
    executeCode,
    executeInteractiveCode,
    updateInput,
    onSourceCodeChange,
    onLanguageChange,
    createSourceCode,
    deleteSourceCode,
    restoreSourceCodes,
    saveInteractiveCodeToServer,
  } = useAnswerManagerForRealResults({
    initialResult,
    isPractice,
    isResultLoading,
    questionNumber: parseInt(questionNumber),
    task,
  });

  const {
    isFullScreen,
    isFullScreenApproved,
    setIsFullScreen,
    toggleIsFullScreenApproved,
  } = useAnswerCheatingTracker({
    isEnabled: task?.is_exam === true && !isPractice && result != null,
    maximizableElement,
    result,
  });

  const { answerCommentsCount } = useAnswerCommentsCount({
    answerId: currentAnswer?.id,
  });

  const finishActivityWrapper = ({ setDateTimeSubmitted = true } = {}) => {
    finishActivity({
      resultId: result.id,
      taskId: task.id,
      userId: user.id,
      setDateTimeSubmitted,
      onSuccess: ({ rank: finalRank, score: finalScore }) => {
        if (task.is_course_task) {
          const sectionId = task.section.id;

          SectionsV4Service.retrieve({
            sectionId,
          }).then(({ data: retrievedSection }) => {
            if (retrievedSection.provide_certificate_method !== null) {
              const {
                provide_certificate_method: {
                  method_type: methodType,
                  passing_rate: passingRate,
                },
              } = retrievedSection;

              if (
                methodType === GLOBALS.CERTIFICATION_METHODS.AUTOMATIC_2.name &&
                determinePassingStatus(finalScore, passingRate, task.max_score)
              ) {
                EnrollmentV4Service.createCertificate({ sectionId, studentId });
              }
            }
          });
        }

        history.push({
          pathname: '/student/task-result',
          state: {
            task,
            rank: finalRank,
            score: finalScore,
          },
        });
      },
    });
  };

  // for task time's up (only applicable if not practice)
  useEffect(() => {
    if (!isPractice && stoppedTasks.length > 0) {
      // show times up modal if task is finished
      setModalToggled(modals.TIMES_UP);

      setTimeout(() => {
        finishActivityWrapper({ setDateTimeSubmitted: false });
      }, TIMEOUT_BEFORE_REDIRECT_TO_END);
    }
  }, [stoppedTasks.length]);

  // for reseting state every question change
  useEffect(() => {
    // everytime the question number changes we close all the modals
    setModalToggled(null);

    // we also close the sidebar navigation (or the TaskInfo component)
    toggleTaskInfo(false);
  }, [questionNumber]);

  if (isTaskLoading || isResultLoading || isAnswerManagerLoading) {
    return <ScreenLoader />;
  }

  const isInteractive =
    currentAnswer.question.problem.problem_type ===
    GLOBALS.PROBLEM_TYPES.INTERACTIVE;

  const executeCodeWrapper = async (executionMode) => {
    if (isInteractive) {
      if (executionMode === GLOBALS.EXECUTION_MODES.RUN) {
        setModalToggled(modals.TERMINAL);
      } else {
        await executeInteractiveCode(executionMode);
      }
    } else {
      await executeCode(executionMode);
    }

    if (executionMode === GLOBALS.EXECUTION_MODES.SUBMIT) {
      setModalToggled(modals.EXECUTION_RESULTS);
    }
  };

  const isReviewTaskLocked = isFeatureLocked(
    GLOBALS.USER_FEATURES.REVIEW_TASK,
    user,
    serverDateTime
  );

  if (
    // the task is invalid and can't be answered by the student
    taskStatuses.isInvalid ||
    // the task hasn't started yet
    taskStatuses.isNotStarting ||
    // this is not in review mode and the task has already ended
    (!isPractice && taskStatuses.isFinished) ||
    // this is not in review mode and the student has already
    // submitted his result (i.e. already finished the activity)
    (!isPractice && isResultSubmitted) ||
    // the student is trying to review this already finished
    // task but they haven't subscribed to this review task feature
    (isPractice && taskStatuses.isFinished && isReviewTaskLocked)
  ) {
    history.goBack();
    return null;
  }

  const proceedAction = () => {
    const hasNoScoreYet = (answer) =>
      !answer.score || parseInt(answer.score) === 0;

    let problemWithoutAnswerIndex = null;
    if (parseInt(questionNumber) < result.answers.length) {
      for (let i = parseInt(questionNumber); i < result.answers.length; i++) {
        if (hasNoScoreYet(result.answers[i])) {
          problemWithoutAnswerIndex = i;
          break;
        }
      }
    } else {
      for (let i = 0; i < parseInt(questionNumber) - 1; i++) {
        if (hasNoScoreYet(result.answers[i])) {
          problemWithoutAnswerIndex = i;
          break;
        }
      }
    }

    if (problemWithoutAnswerIndex !== null) {
      history.push(
        `/student/answer/${taskId}/question/${problemWithoutAnswerIndex + 1}`
      );
    } else {
      setModalToggled(modals.YOUVE_MADE_IT);
    }
  };

  // for the cover screen for exam tasks
  let coverScreen = null;
  if (!isPractice && task.is_exam && !isFullScreen && setIsFullScreen != null) {
    coverScreen = isFullScreenApproved ? (
      // if the full screen was closed while the exam is ongoing
      <FullScreenClosedScreen handleFullScreenChange={setIsFullScreen} />
    ) : (
      // upon starting the exam. This screen asks for the student's
      // approval to go to full screen
      <FullScreenNotApprovedScreen
        handleFullScreenChange={setIsFullScreen}
        toggleIsFullScreenApproved={toggleIsFullScreenApproved}
      />
    );
  }

  const isMustBePerfectShown =
    !isPractice &&
    currentAnswer?.question?.problem?.must_be_perfect === true &&
    parseInt(currentAnswer?.score) === 0 &&
    currentAnswerTestCaseStatuses?.filter(
      ({ executionStatus }) =>
        executionStatus === GLOBALS.EXECUTION_STATUSES.PASSED.value
    ).length > 0;

  const navbarProps = {
    info: (
      <>
        {!isPractice && (
          <Navbar.Info
            colorClass={determinePercentageColorClass(
              task.time_before_end,
              getDuration(task.time_before_start, task.time_before_end)
            )}
            label="Time Left"
            value={formatTotalSecondsToTime(task.time_before_end)}
          />
        )}
        {task.is_delayed_grading ? (
          <Tooltip
            content="Your teacher has chosen to check your work manually. Your score will be available once your teacher is finished grading your work."
            placement={tooltipPlacement.BOTTOM}
          >
            <Navbar.Info
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
              label={!isPractice ? 'Overall Score' : 'Final Score'}
              value={`-/${task.max_score}`}
            />
          </Tooltip>
        ) : (
          <Navbar.Info
            colorClass={determinePercentageColorClass(
              parseInt(result.score),
              task.max_score
            )}
            label={!isPractice ? 'Overall Score' : 'Final Score'}
            value={`${parseInt(result.score)}/${task.max_score}`}
          />
        )}
      </>
    ),
    isCodeSaving,
  };

  const infoProps = {
    questionInfo: !isTaskInfoToggled ? (
      <Info.QuestionInfo
        answer={currentAnswer}
        isInteractive={isInteractive}
        number={
          result.answers.findIndex((answer) => answer.id === currentAnswer.id) +
          1
        }
      />
    ) : null,
    score: !isTaskInfoToggled ? (
      <Info.Score
        answer={currentAnswer}
        isMustBePerfectShown={isMustBePerfectShown}
      />
    ) : null,
    taskInfo: isTaskInfoToggled ? (
      <Info.TaskInfo
        problemLinks={result.answers.map((answer, index) => (
          <Info.TaskInfo.ProblemLink
            key={answer.id}
            answer={answer}
            link={`/student/${!isPractice ? 'answer' : 'review'}/${
              task.id
            }/question/${index + 1}`}
            number={index + 1}
            onClick={async () => {
              toggleTaskInfo(false);

              await MixpanelTrackService.create({
                body: {
                  event_name: 'Clicked Problem Link',
                  event_properties: {
                    'Task ID': taskId,
                    'Answer ID': currentAnswer?.id,
                  },
                },
              });
            }}
          />
        ))}
        task={task}
      />
    ) : null,
  };

  const infoNavigationProps = {
    submitButton:
      !isPractice && isTaskInfoToggled ? (
        <Button
          icon="done_all"
          type={buttonTypes.TERTIARY}
          onClick={() => setModalToggled(modals.ARE_YOU_SURE)}
        >
          Finish Activity
        </Button>
      ) : null,
    menuButton: (
      <MenuButton
        disabled={isExecuting || isCodeSaving}
        isToggled={isTaskInfoToggled}
        onClick={async () => {
          toggleTaskInfo(!isTaskInfoToggled);

          if (!isTaskInfoToggled) {
            await MixpanelTrackService.create({
              body: {
                event_name: 'Clicked Overview button',
                event_properties: {
                  'Task ID': taskId,
                  'Answer ID': currentAnswer?.id,
                },
              },
            });
          }
        }}
      />
    ),
    navigationText: !isTaskInfoToggled
      ? `${questionNumber}/${task.analytics.questions_count}`
      : null,
    leftButton: !isTaskInfoToggled ? (
      <IconButton
        disabled={parseInt(questionNumber) === 1 || isExecuting || isCodeSaving}
        icon="keyboard_arrow_left"
        type={iconButtonTypes.OUTLINE.MD}
        onClick={async () => {
          history.push(
            `/student/${!isPractice ? 'answer' : 'review'}/${taskId}/question/${
              parseInt(questionNumber) - 1
            }`
          );

          await MixpanelTrackService.create({
            body: {
              event_name: 'Clicked Back Problem button',
              event_properties: {
                'Task ID': taskId,
                'Answer ID': currentAnswer?.id,
              },
            },
          });
        }}
      />
    ) : null,
    rightButton: !isTaskInfoToggled ? (
      <IconButton
        disabled={
          parseInt(questionNumber) === task.analytics.questions_count ||
          isExecuting ||
          isCodeSaving
        }
        icon="keyboard_arrow_right"
        type={iconButtonTypes.OUTLINE.MD}
        onClick={async () => {
          history.push(
            `/student/${!isPractice ? 'answer' : 'review'}/${taskId}/question/${
              parseInt(questionNumber) + 1
            }`
          );

          await MixpanelTrackService.create({
            body: {
              event_name: 'Clicked Next Problem button',
              event_properties: {
                'Task ID': taskId,
                'Answer ID': currentAnswer?.id,
              },
            },
          });
        }}
      />
    ) : null,
  };

  const inputOutputProps = {
    'data-test': 'inputOutput',
    customInput: (
      <ControlledTextArea
        className={styles.Answer_inputOutput_textArea}
        inputClassName={styles.Answer_inputOutput_textArea}
        name="custom_input"
        placeholder="Enter custom input here"
        type={textAreaTypes.CODE}
        value={currentCustomInput}
        onChange={(e) => updateInput(currentAnswer.id, e.target.value)}
      />
    ),
    customOutput: output,
    testCases: currentAnswer.question.problem.test_cases.map(
      (testCase, index) => {
        const status =
          currentAnswerTestCaseStatuses?.find(
            (s) => s.test_case_id === testCase.id
          ) || null;

        const props = {
          testCaseStatus: {
            test_case: !isPractice
              ? testCase
              : {
                  ...testCase,
                  is_shown: true,
                },
            actual_output: status?.actual_output,
          },
          executionStatus: status?.executionStatus,
          number: index + 1,
        };

        return isInteractive ? (
          <TestCaseInteractiveWithActualOutput
            key={testCase.id}
            inputs={currentAnswer.question.problem.inputs}
            {...props}
          />
        ) : (
          <TestCaseWithActualOutput key={testCase.id} {...props} />
        );
      }
    ),
    latestExecutions: currentAnswerLatestExecutions?.map((execution) => (
      <ExecutionCard
        key={execution.id}
        execution={execution}
        restoreCode={restoreSourceCodes}
      />
    )),
    executeCode: !hasNoCode(currentAnswer)
      ? (executionMode) => executeCodeWrapper(executionMode)
      : null,
    submitCooldown,
    hasSubmitButton: isPractice === false,
    isExecuting: isExecuting || !currentAnswerTestCaseStatuses,
    answerId: currentAnswer?.id,
    answerCommentsCount,
    userType: user.user_type,
    isInteractive,
  };

  return (
    <>
      {coverScreen}
      <div ref={maximizableElement} className={styles.Answer_container}>
        <AnswerTask
          childComponentProps={{
            infoNavigationProps,
            infoProps,
            inputOutputProps,
            navbarProps,
          }}
          data={{
            currentAnswer,
            currentAnswerTestCaseStatuses,
            isCodeSaving,
            isExecuting,
            isInteractive,
            isPractice,
            result,
            successModal: null,
            task,
            isMustBePerfectShown,
          }}
          data-test="answerTask"
          methods={{
            createSourceCode,
            deleteSourceCode,
            finishActivityWrapper,
            onLanguageChange,
            onSourceCodeChange,
            proceedAction,
            saveInteractiveCodeToServer,
          }}
          screen={answerScreens.STUDENT_ANSWER}
          state={{
            isTaskInfoToggled,
            modalToggled,
            setModalToggled,
            toggleTaskInfo,
          }}
        />
      </div>
    </>
  );
};

Answer.propTypes = {
  match: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  isPractice: PropTypes.bool.isRequired,
  serverDateTime: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
  serverDateTime: getServerDateTime(store),
});

export default connect(mapStateToProps, null)(Answer);
