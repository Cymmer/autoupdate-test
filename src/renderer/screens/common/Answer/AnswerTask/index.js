/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable camelcase */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Resizable } from 're-resizable';
import GLOBALS from 'codechum-app-globals';
import { connect } from 'react-redux';

import { useWindowDimensions } from 'hooks';
import { tabTypes, tabKinds } from 'components/elements/constants';
import { Tabs } from 'components/elements';
import {
  AreYouSureModal,
  ExecutionResultsModal,
  YouveMadeItModal,
  TimesUpModal,
  TerminalModal,
} from 'components/modals';
import { getAnswerTaskLayout } from 'ducks';
import { modals, answerScreens } from '../constants';

import Review from '../Review';
import answerTabs from '../constants/answerTabs';
import MenuButton from '../Navigation/MenuButton';
import InputOutput from '../InputOutput';
import Editor from '../Editor';
import Info from '../Info';
import Navbar from '../Navbar';
import styles from '../styles.module.scss';
import { MOBILE_WINDOW_WIDTH } from '../constants/breakpoints';

const NAVBAR_AND_ACTIONS_HEIGHT = 142;

const isInLessonScreen = (screen) =>
  screen === answerScreens.TEST_LESSON_ACTIVITY ||
  screen === answerScreens.LESSON_ACTIVITY;

const isInStudentTeacherAnswerScreen = (screen) =>
  screen === answerScreens.STUDENT_ANSWER ||
  screen === answerScreens.TEACHER_ANSWER;

const isInScreenWithRealResults = (screen) =>
  screen === answerScreens.STUDENT_ANSWER ||
  screen === answerScreens.LESSON_ACTIVITY;

export const AnswerTask = ({
  childComponentProps: {
    infoNavigationProps,
    infoProps,
    inputOutputProps,
    navbarProps,
  },
  data: {
    currentAnswer,
    currentAnswerTestCaseStatuses,
    isCodeSaving,
    isExecuting,
    isInteractive,
    isPractice,
    result,
    successModal,
    lessonSurveyModal,
    lessonSurveyThanksModal,
    task,
    isMustBePerfectShown,
  },
  methods: {
    createSourceCode,
    deleteSourceCode,
    finishActivityWrapper,
    saveInteractiveCodeToServer,
    onLanguageChange,
    onSourceCodeChange,
    proceedAction,
  },
  state: { modalToggled, setModalToggled, isTaskInfoToggled, toggleTaskInfo },
  screen,
  answerTaskLayout,
}) => {
  document.body.id = 'answerContainer';

  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const [infoWidth, setInfoWidth] = useState(windowWidth * 0.3);
  const [codeEditorHeight, setCodeEditorHeight] = useState(windowHeight * 0.6);
  const [codeEditorWidth, setCodeEditorWidth] = useState(windowWidth * 0.35);

  // NOTE: We need to set the layout to its default value (Top-Bottom) for mobile users
  // so that the layout will not get messed up on mobile view
  answerTaskLayout =
    windowWidth <= MOBILE_WINDOW_WIDTH
      ? GLOBALS.ANSWER_TASK_LAYOUTS.TOP_BOTTOM
      : answerTaskLayout;

  // for mobile tabs
  const [activeTab, changeTab] = useState(
    screen !== answerScreens.PLAYGROUND
      ? answerTabs.DETAILS.value
      : answerTabs.CODE.value
  );

  const isTerminalModalOpen = modalToggled === modals.TERMINAL;

  // props for <Editor /> component
  const editorProps = {
    task,
    answer: currentAnswer,
    onSourceCodeChange,
    onLanguageChange,
    createSourceCode,
    deleteSourceCode,
    isInteractive,
  };

  const mobileMenuButton = (
    <MenuButton
      disabled={isExecuting || isCodeSaving}
      isToggled={isTaskInfoToggled}
      onClick={() => {
        toggleTaskInfo(!isTaskInfoToggled);
        changeTab(answerTabs.DETAILS.value);
      }}
    />
  );

  const getEditorResizableProps = useCallback(() => {
    const editorResizableProps = {
      enable: {
        top: false,
        right: false,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      },
    };

    const isInteractiveAndPlayground =
      isInteractive && screen === answerScreens.PLAYGROUND;

    if (answerTaskLayout === GLOBALS.ANSWER_TASK_LAYOUTS.TOP_BOTTOM) {
      editorResizableProps.size = {
        width: '100%',
        height: isInteractiveAndPlayground ? '100%' : codeEditorHeight,
      };
      editorResizableProps.minHeight = 200;
      editorResizableProps.maxHeight = isInteractiveAndPlayground
        ? windowHeight - NAVBAR_AND_ACTIONS_HEIGHT
        : windowHeight * 0.6;

      editorResizableProps.enable.bottom =
        !isInteractive || screen !== answerScreens.PLAYGROUND;
      editorResizableProps.handleClasses = { bottom: styles.Answer_handle };
    } else if (answerTaskLayout === GLOBALS.ANSWER_TASK_LAYOUTS.SIDE_BY_SIDE) {
      editorResizableProps.size = {
        width: isInteractiveAndPlayground ? '100%' : codeEditorWidth,
        height: '100%',
      };

      editorResizableProps.minWidth = 300;
      editorResizableProps.maxWidth = isInteractiveAndPlayground
        ? windowWidth
        : windowWidth * 0.5;
      editorResizableProps.maxHeight = windowHeight - NAVBAR_AND_ACTIONS_HEIGHT;

      editorResizableProps.enable.right =
        !isInteractive || screen !== answerScreens.PLAYGROUND;
      editorResizableProps.handleClasses = {
        right: cn(styles.Answer_handle, styles.Answer_handle___sideBySide),
      };
    }

    return editorResizableProps;
  }, [
    answerTaskLayout,
    screen,
    windowHeight,
    codeEditorWidth,
    codeEditorHeight,
    isInteractive,
  ]);

  const getInputOutputSize = useCallback(() => {
    const style = {};

    if (answerTaskLayout === GLOBALS.ANSWER_TASK_LAYOUTS.TOP_BOTTOM) {
      style.height =
        isInteractive && screen === answerScreens.PLAYGROUND
          ? 'auto'
          : `calc(100% - ${codeEditorHeight}px)`;
    } else if (answerTaskLayout === GLOBALS.ANSWER_TASK_LAYOUTS.SIDE_BY_SIDE) {
      style.width = `calc(100% - ${codeEditorWidth}px)`;
      style.height = windowHeight - NAVBAR_AND_ACTIONS_HEIGHT;
    }

    return style;
  }, [
    answerTaskLayout,
    screen,
    codeEditorWidth,
    codeEditorHeight,
    isInteractive,
  ]);

  return (
    <>
      <div id="answerTaskModalPortal" />

      {!isPractice &&
        modalToggled === modals.EXECUTION_RESULTS &&
        screen !== answerScreens.PLAYGROUND && (
          <ExecutionResultsModal
            answer={currentAnswer}
            data-test="executionResultsModal"
            handleClose={() => setModalToggled(null)}
            isMustBePerfectShown={isMustBePerfectShown}
            isOpen={modalToggled === modals.EXECUTION_RESULTS}
            proceedAction={proceedAction}
            proceedActionTextOverride={
              screen === answerScreens.TEST_PROBLEM ? 'Back to Main Page' : null
            }
            task={task}
            testCaseStatuses={currentAnswerTestCaseStatuses}
          />
        )}

      {!isPractice &&
        modalToggled === modals.YOUVE_MADE_IT &&
        isInStudentTeacherAnswerScreen(screen) && (
          <YouveMadeItModal
            data-test="youveMadeItModal"
            handleClose={() => setModalToggled(null)}
            isOpen={modalToggled === modals.YOUVE_MADE_IT}
            isPerfect={parseInt(result.score) === task.max_score}
            reviewAction={() => setModalToggled(modals.REVIEW)}
            submitAction={() => finishActivityWrapper()}
          />
        )}

      {!isPractice &&
        modalToggled === modals.ARE_YOU_SURE &&
        isInStudentTeacherAnswerScreen(screen) && (
          <AreYouSureModal
            handleClose={() => setModalToggled(null)}
            isOpen={modalToggled === modals.ARE_YOU_SURE}
            submitAction={() => finishActivityWrapper()}
            task={task}
          />
        )}

      {!isPractice &&
        modalToggled === modals.TIMES_UP &&
        isInStudentTeacherAnswerScreen(screen) && (
          <TimesUpModal
            handleClose={() => setModalToggled(null)}
            isOpen={modalToggled === modals.TIMES_UP}
            viewScoreAction={() => {
              finishActivityWrapper({ setDateTimeSubmitted: false });
            }}
          />
        )}

      {isTerminalModalOpen && (
        <TerminalModal
          currentAnswer={currentAnswer}
          data-test="terminalModal"
          handleClose={() => setModalToggled(null)}
          onCodeSave={
            isInScreenWithRealResults(screen) && saveInteractiveCodeToServer
              ? async ({ inputs, output }) =>
                  saveInteractiveCodeToServer({
                    inputs,
                    output,
                    executionMode: GLOBALS.EXECUTION_MODES.RUN,
                  })
              : null
          }
        />
      )}

      {successModal}

      {lessonSurveyModal}

      {lessonSurveyThanksModal}

      {!isInLessonScreen(screen) && (
        <Navbar data-test="navbar" {...navbarProps} />
      )}

      {!isPractice &&
        modalToggled === modals.REVIEW &&
        isInStudentTeacherAnswerScreen(screen) && (
          <Review
            answers={result.answers}
            backAction={() => setModalToggled(null)}
            generateProblemLink={(linkQuestionNumber) =>
              `/student/answer/${task.id}/question/${linkQuestionNumber}`
            }
            submitAction={() => finishActivityWrapper()}
            task={task}
          />
        )}

      {/* DESKTOP VERSION */}
      {windowWidth > MOBILE_WINDOW_WIDTH && modalToggled !== modals.REVIEW && (
        <>
          <div className={styles.Answer_body}>
            {screen !== answerScreens.PLAYGROUND && (
              <Resizable
                enable={{
                  top: false,
                  right: true,
                  bottom: false,
                  left: false,
                  topRight: false,
                  bottomRight: false,
                  bottomLeft: false,
                  topLeft: false,
                }}
                handleClasses={{ right: styles.Answer_handle }}
                maxWidth={700}
                minWidth={350}
                size={{ width: infoWidth, height: '100%' }}
                onResize={(e, direction, ref) => {
                  setInfoWidth(ref.clientWidth);
                }}
              >
                <Info
                  data-test="infoComponent"
                  {...infoProps}
                  navigation={
                    screen !== answerScreens.TEST_PROBLEM ? (
                      <Info.Navigation {...infoNavigationProps} />
                    ) : null
                  }
                />
              </Resizable>
            )}

            <div
              className={cn(styles.Answer_code, {
                [styles.Answer_code___toggled]: isTaskInfoToggled,
                [styles.Answer_code___sideBySide]:
                  answerTaskLayout === GLOBALS.ANSWER_TASK_LAYOUTS.SIDE_BY_SIDE,
              })}
              data-test="codeContainer"
              style={{
                width:
                  screen !== answerScreens.PLAYGROUND
                    ? `calc(100% - ${infoWidth}px)`
                    : '100%',
              }}
            >
              <Resizable
                data-test="editorResizable"
                onResize={(e, direction, ref) => {
                  if (direction === 'right') {
                    setCodeEditorWidth(ref.clientWidth);
                  } else if (direction === 'bottom') {
                    setCodeEditorHeight(ref.clientHeight);
                  }
                }}
                {...getEditorResizableProps()}
              >
                <div className={styles.Answer_editorWrapper}>
                  <Editor
                    // the reason why these 2 values are the key are the following:
                    // 1. `interactive` || `nonInteractive` - added to rerender
                    //    immediately after switching between modes
                    // 2. `answerTaskLayout` - added to rerender everytime the
                    //    view mode is changed
                    // 3. `codeEditorWidth` - added to rerender everytime the
                    //    <Resizable /> component is resized
                    // 4. `codeEditorHeight` - added to rerender everytime the
                    //    <Resizable /> component is resized
                    key={
                      (isInteractive ? 'interactive' : 'nonInteractive') +
                      answerTaskLayout +
                      codeEditorWidth +
                      codeEditorHeight
                    }
                    data-test="editor"
                    {...editorProps}
                  />
                </div>
              </Resizable>

              <InputOutput
                data-test="inputOutput"
                isExecuteCodeDisabled={isTerminalModalOpen}
                style={getInputOutputSize()}
                {...inputOutputProps}
              />
            </div>
          </div>
        </>
      )}

      {/* MOBILE VERSION */}
      {windowWidth <= MOBILE_WINDOW_WIDTH && modalToggled !== modals.REVIEW && (
        <>
          {screen !== answerScreens.PLAYGROUND && (
            <Tabs
              activeTab={activeTab}
              className={styles.Answer_tabContainer}
              tabClassName={styles.Answer_tabContainer_tab}
              tabs={[
                {
                  name: answerTabs.DETAILS.name,
                  value: answerTabs.DETAILS.value,
                  kind: tabKinds.BUTTON,
                  action: () => changeTab(answerTabs.DETAILS.value),
                },
                {
                  name: answerTabs.CODE.name,
                  value: answerTabs.CODE.value,
                  kind: tabKinds.BUTTON,
                  action: () => changeTab(answerTabs.CODE.value),
                },
              ]}
              type={tabTypes.HORIZONTAL.LG}
            />
          )}

          <div
            className={styles.Answer_info___mobile}
            // instead of conditionally rendering the component,
            // we do this to support the must be perfect feature.
            // As of the time of this implementation, the student
            // needs to go to the "Code" tab to submit the code.
            // If not all the test cases are correct and the must
            // be perfect notification needs to be shown, the
            // student needs to go to this tab, the "Details" tab.
            // However, if this tab was conditionally rendered
            // instead of just hidden via CSS, it won't display
            // the must be perfect notification because it is still
            // in its initialization state
            style={{
              display:
                activeTab === answerTabs.DETAILS.value &&
                screen !== answerScreens.PLAYGROUND
                  ? 'block'
                  : 'none',
            }}
          >
            <Info {...infoProps} />
          </div>

          <div
            className={styles.Answer_code___mobile}
            style={{
              display: activeTab === answerTabs.CODE.value ? 'block' : 'none',
            }}
          >
            <div className={styles.Answer_editorWrapper}>
              <Editor
                className={styles.Answer_editorWrapper_editor}
                data-test="editor"
                {...editorProps}
              />
            </div>
            <InputOutput
              data-test="inputOutput"
              isExecuteCodeDisabled={isTerminalModalOpen}
              {...inputOutputProps}
            />
          </div>

          {screen !== answerScreens.PLAYGROUND &&
            screen !== answerScreens.TEST_PROBLEM &&
            (isInLessonScreen(screen) ? (
              <Info.Navigation
                {...infoNavigationProps}
                className={styles.Answer_navigation___mobile___lesson}
                menuButton={mobileMenuButton}
              />
            ) : (
              <Info.Navigation
                className={styles.Answer_navigation___mobile}
                {...infoNavigationProps}
                menuButton={mobileMenuButton}
              />
            ))}
        </>
      )}
    </>
  );
};

AnswerTask.propTypes = {
  childComponentProps: PropTypes.shape({
    infoNavigationProps: PropTypes.node,
    infoProps: PropTypes.node,
    inputOutputProps: PropTypes.node,
    navbarProps: PropTypes.node,
  }).isRequired,
  data: PropTypes.shape({
    currentAnswer: PropTypes.object,
    currentAnswerTestCaseStatuses: PropTypes.array,
    isCodeSaving: PropTypes.bool,
    isExecuting: PropTypes.bool,
    isInteractive: PropTypes.bool,
    isPractice: PropTypes.bool,
    result: PropTypes.object,
    successModal: PropTypes.node,
    lessonSurveyModal: PropTypes.node,
    lessonSurveyThanksModal: PropTypes.node,
    task: PropTypes.object,
    isMustBePerfectShown: PropTypes.bool,
  }),
  methods: PropTypes.shape({
    finishActivityWrapper: PropTypes.func,
    proceedAction: PropTypes.func,
    onSourceCodeChange: PropTypes.func,
    onLanguageChange: PropTypes.func,
    createSourceCode: PropTypes.func,
    deleteSourceCode: PropTypes.func,
    saveInteractiveCodeToServer: PropTypes.func,
  }),
  state: PropTypes.shape({
    isTaskInfoToggled: PropTypes.bool,
    modalToggled: PropTypes.string,
    setModalToggled: PropTypes.func,
    toggleTaskInfo: PropTypes.func,
  }),
  screen: PropTypes.string.isRequired,
  answerTaskLayout: PropTypes.oneOf(Object.values(GLOBALS.ANSWER_TASK_LAYOUTS))
    .isRequired,
};

const mapStateToProps = (store) => ({
  answerTaskLayout: getAnswerTaskLayout(store),
});

export default connect(mapStateToProps, null)(AnswerTask);
