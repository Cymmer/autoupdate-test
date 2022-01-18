/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  useStudentStartTaskV4,
  useAnswerManagerForRealResults,
  useStudentTask,
} from 'hooks';
import {
  textAreaTypes,
  iconButtonTypes,
  buttonTypes,
} from 'components/elements/constants';
import {
  ControlledTextArea,
  ScreenLoader,
  IconButton,
  Button,
} from 'components/elements';
import {
  TestCaseWithActualOutput,
  TestCaseInteractiveWithActualOutput,
} from 'components';
import { getUser } from 'ducks';
import { hasNoCode } from 'codechum-app-utils';
import { finishActivity } from 'utils/results';
import {
  AnswerLessonActivitySuccessModal,
  LessonSurveyModal,
  LessonSurveyThanksModal,
} from 'components/modals';
import GLOBALS from 'codechum-app-globals';
import styles from '../../styles.module.scss';

import Info from '../../Info';

import AnswerTask from '../../AnswerTask';
import { answerScreens, modals } from '../../constants';
import { viewSectionTabs } from '../../../../student/constants';

const AnswerLessonActivity = ({
  match: {
    params: { sectionId, lessonSlug, lessonObjectSlug, questionNumber },
  },
  user,
  taskId,
  lesson,
  onSuccessfullyAnsweredAllProblems,
  nextLessonObjectLink,
}) => {
  document.body.id = 'answerContainer';

  const history = useHistory();

  const { id: studentId } = user;

  const [isTaskInfoToggled, toggleTaskInfo] = useState(false);
  const [modalToggled, setModalToggled] = useState(null);

  // Retrieve Task
  const {
    isLoading: isTaskLoading,
    task,
    taskStatuses,
  } = useStudentTask({
    taskId,
    studentId,
    params: {
      isCourseTask: true,
    },
  });

  // Retrieve Result
  const { isLoading: isResultLoading, result: initialResult } =
    useStudentStartTaskV4({
      task,
      studentId,
    });

  const {
    isLoading: isAnswerManagerLoading,
    result,
    currentAnswerTestCaseStatuses,
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
    saveInteractiveCodeToServer,
  } = useAnswerManagerForRealResults({
    initialResult,
    isPractice: false,
    isResultLoading,
    questionNumber: parseInt(questionNumber),
    task,
    user,
  });

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

  if (taskStatuses?.isInvalid) {
    window.location.href = `/student/classes/${sectionId}/${viewSectionTabs.TIMELINE.value}/`;
    return;
  }

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

  const proceedAction = (latestResult) => {
    const hasNoScoreYet = (answer) =>
      !answer.score || parseInt(answer.score) === 0;

    let problemWithoutAnswerIndex = null;
    if (parseInt(questionNumber) < latestResult.answers.length) {
      for (
        let i = parseInt(questionNumber);
        i < latestResult.answers.length;
        i++
      ) {
        if (hasNoScoreYet(latestResult.answers[i])) {
          problemWithoutAnswerIndex = i;
          break;
        }
      }
    } else {
      for (let i = 0; i < parseInt(questionNumber) - 1; i++) {
        if (hasNoScoreYet(latestResult.answers[i])) {
          problemWithoutAnswerIndex = i;
          break;
        }
      }
    }

    if (problemWithoutAnswerIndex !== null) {
      history.push(
        `/student/classes/${sectionId}/${
          viewSectionTabs.TIMELINE.value
        }/lessons/${lessonSlug}/${lessonObjectSlug}/question/${
          problemWithoutAnswerIndex + 1
        }/`
      );
    } else if (
      hasNoScoreYet(latestResult.answers[parseInt(questionNumber) - 1])
    ) {
      setModalToggled(null);
    } else if (lesson.satisfactionExists) {
      onSuccessfullyAnsweredAllProblems();
      setModalToggled(modals.YOUVE_MADE_IT);
    } else {
      onSuccessfullyAnsweredAllProblems();
      setModalToggled(modals.LESSON_SURVEY);
    }
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
        isMustBePerfectShown={
          currentAnswer?.question?.problem?.must_be_perfect === true &&
          parseInt(currentAnswer?.score) === 0 &&
          currentAnswerTestCaseStatuses?.filter(
            ({ executionStatus }) =>
              executionStatus === GLOBALS.EXECUTION_STATUSES.PASSED.value
          ).length > 0
        }
      />
    ) : null,
    taskInfo: isTaskInfoToggled ? (
      <Info.TaskInfo
        problemLinks={result.answers.map((answer, index) => (
          <Info.TaskInfo.ProblemLink
            key={answer.id}
            answer={answer}
            link={`/student/classes/${sectionId}/${
              viewSectionTabs.TIMELINE.value
            }/lessons/${lessonSlug}/${lessonObjectSlug}/question/${index + 1}/`}
            number={index + 1}
            onClick={() => toggleTaskInfo(false)}
          />
        ))}
        task={task}
      />
    ) : null,
  };

  const infoNavigationProps = {
    menuButton: (
      <Button
        disabled={isExecuting || isCodeSaving}
        icon={!isTaskInfoToggled ? 'menu' : 'close'}
        type={buttonTypes.SECONDARY.BLUE}
        onClick={() => toggleTaskInfo(!isTaskInfoToggled)}
      >
        {!isTaskInfoToggled ? 'Overview' : 'Close'}
      </Button>
    ),
    navigationText: !isTaskInfoToggled
      ? `${questionNumber}/${task.questions.length}`
      : null,
    leftButton: !isTaskInfoToggled ? (
      <IconButton
        disabled={parseInt(questionNumber) === 1 || isExecuting || isCodeSaving}
        icon="keyboard_arrow_left"
        type={iconButtonTypes.OUTLINE.MD}
        onClick={() => {
          history.push(
            `/student/classes/${sectionId}/${
              viewSectionTabs.TIMELINE.value
            }/lessons/${lessonSlug}/${lessonObjectSlug}/question/${
              parseInt(questionNumber) - 1
            }/`
          );
        }}
      />
    ) : null,
    rightButton: !isTaskInfoToggled ? (
      <IconButton
        disabled={
          parseInt(questionNumber) === task.questions.length ||
          isExecuting ||
          isCodeSaving
        }
        icon="keyboard_arrow_right"
        type={iconButtonTypes.OUTLINE.MD}
        onClick={() => {
          history.push(
            `/student/classes/${sectionId}/${
              viewSectionTabs.TIMELINE.value
            }/lessons/${lessonSlug}/${lessonObjectSlug}/question/${
              parseInt(questionNumber) + 1
            }/`
          );
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
            test_case: testCase,
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
    executeCode: !hasNoCode(currentAnswer)
      ? (executionMode) => executeCodeWrapper(executionMode)
      : null,
    submitCooldown,
    isExecuting: isExecuting || !currentAnswerTestCaseStatuses,
    isInteractive,
  };

  const successModal = modalToggled === modals.YOUVE_MADE_IT && (
    <AnswerLessonActivitySuccessModal
      data-test="answerLessonActivitySuccessModal"
      handleClose={() => setModalToggled(null)}
      isOpen={modalToggled === modals.YOUVE_MADE_IT}
      nextLessonObjectLink={nextLessonObjectLink}
      reviewAction={() => setModalToggled(modals.REVIEW)}
      submitAction={() => {
        finishActivity({
          resultId: result.id,
          taskId: task.id,
          userId: user.id,
        });
      }}
    />
  );

  const lessonSurveyModal = modalToggled === modals.LESSON_SURVEY && (
    <LessonSurveyModal
      data-test="lessonSurveyModal"
      handleProceed={() => {
        setModalToggled(modals.LESSON_SURVEY_THANKS);

        setTimeout(() => {
          history.push(nextLessonObjectLink);
        }, 5000);
      }}
      lessonId={lesson.id}
      lessonTitle={lesson.title}
    />
  );

  const lessonSurveyThanksModal = modalToggled ===
    modals.LESSON_SURVEY_THANKS && <LessonSurveyThanksModal />;

  return (
    <AnswerTask
      childComponentProps={{
        infoNavigationProps,
        infoProps,
        inputOutputProps,
        navbarProps: null,
      }}
      data={{
        currentAnswer,
        currentAnswerTestCaseStatuses,
        isCodeSaving,
        isExecuting,
        isInteractive,
        isPractice: false,
        result,
        successModal,
        lessonSurveyModal,
        lessonSurveyThanksModal,
        task,
      }}
      data-test="answerTask"
      methods={{
        createSourceCode,
        deleteSourceCode,
        finishActivityWrapper: () => {},
        onLanguageChange,
        onSourceCodeChange,
        proceedAction: () => proceedAction(result),
        saveInteractiveCodeToServer,
      }}
      screen={answerScreens.LESSON_ACTIVITY}
      state={{
        isTaskInfoToggled,
        modalToggled,
        setModalToggled,
        toggleTaskInfo,
      }}
    />
  );
};

AnswerLessonActivity.propTypes = {
  match: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  taskId: PropTypes.number.isRequired,
  lesson: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    satisfactionExists: PropTypes.bool,
  }),

  // the function that'll be called when the student has
  // successfully answered all problems
  onSuccessfullyAnsweredAllProblems: PropTypes.func.isRequired,

  // the link to the next lesson object
  nextLessonObjectLink: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
});

export default connect(mapStateToProps, null)(AnswerLessonActivity);
