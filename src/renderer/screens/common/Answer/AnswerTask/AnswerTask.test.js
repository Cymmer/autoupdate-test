import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import { wrapWithStoreAndRouter } from 'utils/testing';
import { actions as usersActions } from 'ducks/reducers/users';
import { actions as settingsActions } from 'ducks/reducers/settings';

import GLOBALS from 'codechum-app-globals';
import { answerScreens, modals } from '../constants';

import { USER, TASK, ANSWER, RESULT } from '../tests/constants';

import AnswerTask from './index';

const CHILD_COMPONENT_PROPS = {
  infoNavigationProps: null,
  infoProps: null,
  inputOutputProps: null,
  navbarProps: null,
};

const DATA_PROPS = {
  currentAnswer: ANSWER,
  currentAnswerTestCaseStatuses: null,
  isCodeSaving: false,
  isExecuting: false,
  isInteractive: false,
  isPractice: false,
  result: RESULT({ isInteractive: true }),
  successModal: null,
  task: TASK,
  interactiveData: null,
};

const METHODS_PROPS = {
  createSourceCode: null,
  deleteSourceCode: null,
  finishActivityWrapper: null,
  onLanguageChange: null,
  onSourceCodeChange: null,
  proceedAction: null,
};

const STATE_PROPS = {
  modalToggled: null,
  setModalToggled: null,
  isTaskInfoToggled: null,
  toggleTaskInfo: null,
};

describe('RENDERING - Answer', () => {
  it('should not render navbar in lesson screens', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <AnswerTask
          childComponentProps={CHILD_COMPONENT_PROPS}
          data={DATA_PROPS}
          methods={METHODS_PROPS}
          screen={answerScreens.LESSON_ACTIVITY}
          state={STATE_PROPS}
        />,
        [
          () =>
            usersActions.loginActions.loginUpdate({
              user: USER,
            }),
        ]
      )
    );

    const navbar = findByTestAttr(component, 'navbar');
    expect(navbar.exists()).toBe(false);

    component.unmount();
  });

  it('should display appropriate modals in either student or teacher answer screens', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <AnswerTask
          childComponentProps={CHILD_COMPONENT_PROPS}
          data={DATA_PROPS}
          methods={METHODS_PROPS}
          screen={answerScreens.STUDENT_ANSWER}
          state={{ ...STATE_PROPS, modalToggled: modals.YOUVE_MADE_IT }}
        />,
        [
          () =>
            usersActions.loginActions.loginUpdate({
              user: USER,
            }),
        ]
      )
    );

    const youveMadeItModal = findByTestAttr(component, 'youveMadeItModal');
    expect(youveMadeItModal.exists()).toBeTruthy();

    component.unmount();
  });

  it('should not render info component in playground screen', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <AnswerTask
          childComponentProps={CHILD_COMPONENT_PROPS}
          data={DATA_PROPS}
          methods={METHODS_PROPS}
          screen={answerScreens.PLAYGROUND}
          state={STATE_PROPS}
        />,
        [
          () =>
            usersActions.loginActions.loginUpdate({
              user: USER,
            }),
        ]
      )
    );

    const infoComponent = findByTestAttr(component, 'infoComponent');
    expect(infoComponent.exists()).toBe(false);

    component.unmount();
  });

  it('should render correct code container width in playground screen', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <AnswerTask
          childComponentProps={CHILD_COMPONENT_PROPS}
          data={DATA_PROPS}
          methods={METHODS_PROPS}
          screen={answerScreens.PLAYGROUND}
          state={STATE_PROPS}
        />,
        [
          () =>
            usersActions.loginActions.loginUpdate({
              user: USER,
            }),
        ]
      )
    );

    const codeContainer = findByTestAttr(component, 'codeContainer');
    expect(codeContainer.prop('style')).toEqual({
      width: '100%',
    });

    component.unmount();
  });

  it('should render the correct input output height in interactive playground screen', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <AnswerTask
          childComponentProps={CHILD_COMPONENT_PROPS}
          data={{ ...DATA_PROPS, isInteractive: true }}
          methods={METHODS_PROPS}
          screen={answerScreens.PLAYGROUND}
          state={STATE_PROPS}
        />,
        [
          () =>
            usersActions.loginActions.loginUpdate({
              user: USER,
            }),
          () =>
            settingsActions.uiActions.uiSettingsUpdate({
              answerTaskLayout: GLOBALS.ANSWER_TASK_LAYOUTS.TOP_BOTTOM,
            }),
        ]
      )
    );

    const inputOutput = findByTestAttr(component, 'inputOutput').first();
    expect(inputOutput.prop('style')).toEqual({
      height: 'auto',
    });

    component.unmount();
  });

  it('should enable the correct resizable direction', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <AnswerTask
          childComponentProps={CHILD_COMPONENT_PROPS}
          data={DATA_PROPS}
          methods={METHODS_PROPS}
          screen={answerScreens.PLAYGROUND}
          state={STATE_PROPS}
        />,
        [
          () =>
            usersActions.loginActions.loginUpdate({
              user: USER,
            }),
          () =>
            settingsActions.uiActions.uiSettingsUpdate({
              answerTaskLayout: GLOBALS.ANSWER_TASK_LAYOUTS.TOP_BOTTOM,
            }),
        ]
      )
    );

    const editorResizable = findByTestAttr(
      component,
      'editorResizable'
    ).first();

    expect(editorResizable.prop('enable')).toEqual({
      top: false,
      right: false,
      bottom: true,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false,
    });

    component.unmount();
  });

  it('should render the terminal modal', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <AnswerTask
          childComponentProps={CHILD_COMPONENT_PROPS}
          data={{ ...DATA_PROPS, isExecuting: true }}
          methods={METHODS_PROPS}
          screen={answerScreens.PLAYGROUND}
          state={{ ...STATE_PROPS, modalToggled: modals.TERMINAL }}
        />,
        [
          () =>
            usersActions.loginActions.loginUpdate({
              user: USER,
            }),
        ]
      )
    );

    const terminalModal = findByTestAttr(component, 'terminalModal');

    expect(terminalModal.exists()).toBeTruthy();

    component.unmount();
  });
});
