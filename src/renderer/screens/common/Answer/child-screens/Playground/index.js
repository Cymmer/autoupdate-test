/* eslint-disable camelcase */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GLOBALS from 'codechum-app-globals';

import {
  usePlayground,
  useAnswerManagerForDummyResults,
  useWindowUnload,
  useMixpanelTrack,
} from 'hooks';
import { textAreaTypes } from 'components/elements/constants';
import { ControlledTextArea, ScreenLoader } from 'components/elements';

import { hasNoCode } from 'codechum-app-utils';

import { getProgrammingLanguages, getPlaygroundResult, getUser } from 'ducks';
import { actions as sessionActions } from 'ducks/reducers/session';

import AnswerTask from '../../AnswerTask';
import { answerScreens, modals } from '../../constants';
import styles from '../../styles.module.scss';

// since this is only for a single problem, the question
// number will always be 1
const QUESTION_NUMBER = 1;

const Playground = ({
  programmingLanguages,
  cachedResult,
  playgroundUpdate,
  user,
}) => {
  document.body.id = 'answerContainer';

  const [modalToggled, setModalToggled] = useState(null);
  const [isInteractive, setIsInteractive] = useState(true);

  // Retrieve Result
  const {
    isLoading: isResultLoading,
    task,
    result: initialResult,
  } = usePlayground({
    programmingLanguages,
    cachedResult,
  });

  useMixpanelTrack({
    body:
      // check if user object exists
      Object.keys(user).length !== 0
        ? {
            event_name: 'Go to Playground',
            event_properties: {},
          }
        : null,
  });

  const {
    isLoading: isAnswerManagerLoading,
    output,
    result,
    isExecuting,
    currentAnswer,
    currentCustomInput,
    executeCode,
    updateInput,
    onSourceCodeChange,
    onLanguageChange,
    createSourceCode,
    deleteSourceCode,
    executeInteractiveCode,
  } = useAnswerManagerForDummyResults({
    task,
    initialResult,
    initialAnswersTestCaseStatuses: {},
    isResultLoading,
    questionNumber: QUESTION_NUMBER,
  });

  // save playground session before leaving the screen
  useWindowUnload(() => {
    playgroundUpdate({ result });
  }, true);

  if (isResultLoading || isAnswerManagerLoading) {
    return <ScreenLoader />;
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
        onChange={(e) => {
          updateInput(currentAnswer.id, e.target.value);
        }}
      />
    ),
    customOutput: output,
    executeCode: !hasNoCode(currentAnswer)
      ? (executionMode) => executeCodeWrapper(executionMode)
      : null,
    isInteractive,
    setIsInteractive,
    hasTestButton: false,
    hasSubmitButton: false,
    isExecuting,
  };

  return (
    <AnswerTask
      childComponentProps={{
        infoNavigationProps: null,
        infoProps: null,
        inputOutputProps,
        navbarProps: null,
      }}
      data={{
        currentAnswer,
        currentAnswerTestCaseStatuses: null,
        isCodeSaving: false,
        isExecuting,
        isInteractive,
        isPractice: false,
        result,
        successModal: null,
        task,
      }}
      data-test="answerTask"
      methods={{
        createSourceCode,
        deleteSourceCode,
        finishActivityWrapper: () => {},
        onLanguageChange,
        onSourceCodeChange,
        proceedAction: () => {},
        saveInteractiveCodeToServer: null,
      }}
      screen={answerScreens.PLAYGROUND}
      state={{
        isTaskInfoToggled: null,
        modalToggled,
        setModalToggled,
        toggleTaskInfo: () => {},
      }}
    />
  );
};

Playground.defaultProps = {
  cachedResult: null,
  // this may be null if the user hasn't logged in
  programmingLanguages: null,
  user: null,
};

Playground.propTypes = {
  programmingLanguages: PropTypes.arrayOf(PropTypes.object),
  cachedResult: PropTypes.object,
  playgroundUpdate: PropTypes.func.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
  programmingLanguages: getProgrammingLanguages(store),
  cachedResult: getPlaygroundResult(store),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ...sessionActions.playgroundActions,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
