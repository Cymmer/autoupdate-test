import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { findByTestAttr } from 'codechum-app-utils';
import { wrapWithStoreAndRouter } from 'utils/testing';
import { tabKinds } from 'components/elements/constants';
import { actions as usersActions } from 'ducks/reducers/users';
import { TestCaseWithActualOutput } from 'components';
import GLOBALS from 'codechum-app-globals';
import InputOutput from './index';
import inputOutputTabs from './constants/inputOutputTabs';

const DEFAULT_PROPS = {
  customInput: <div />,
  isExecuting: false,
  isInteractive: false,
};

const ANSWER_ID = 1;

describe('RENDERING - Answer > InputOutput', () => {
  it('should render the latest executions tab if there are latest executions', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <InputOutput
          {...DEFAULT_PROPS}
          latestExecutions={
            <>
              <div>Dummy Child1</div>
              <div>Dummy Child2</div>
            </>
          }
        />
      )
    );

    const tabs = findByTestAttr(component, 'tabs');

    const latestExecutionTab = tabs
      .prop('tabs')
      .find((tab) => tab.value === inputOutputTabs.LATEST_EXECUTIONS.value);
    expect(latestExecutionTab).toBeDefined();

    expect(latestExecutionTab.name).toEqual(
      inputOutputTabs.LATEST_EXECUTIONS.name
    );
    expect(latestExecutionTab.kind).toEqual(tabKinds.BUTTON);
  });

  it('should not render the latest executions tab if there are no latest executions', () => {
    const component = mount(
      wrapWithStoreAndRouter(<InputOutput {...DEFAULT_PROPS} />)
    );

    const tabs = findByTestAttr(component, 'tabs');

    const latestExecutionTab = tabs
      .prop('tabs')
      .find((tab) => tab.value === inputOutputTabs.LATEST_EXECUTIONS.value);
    expect(latestExecutionTab).toBeUndefined();
  });
});

describe('EVENTS - Answer > InputOutput', () => {
  it('should be able to switch to the latest executions tab', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <InputOutput
          {...DEFAULT_PROPS}
          latestExecutions={
            <>
              <div>Dummy Child1</div>
              <div>Dummy Child2</div>
            </>
          }
        />
      )
    );

    let tabs = findByTestAttr(component, 'tabs');
    let latestExecutionList = findByTestAttr(component, 'latestExecutionList');
    const latestExecutionTab = tabs
      .prop('tabs')
      .find((tab) => tab.value === inputOutputTabs.LATEST_EXECUTIONS.value);
    expect(latestExecutionList.exists()).not.toBeTruthy();

    // at this time, the active tab should be the default tab (the Custom Input tab)
    expect(tabs.prop('activeTab')).toEqual(inputOutputTabs.CUSTOM_INPUT.value);

    // we click the tab to switch to that tab
    act(() => {
      latestExecutionTab.action();
    });
    component.update();

    // this time, the active tab should be the latest execution tab
    tabs = findByTestAttr(component, 'tabs');
    expect(tabs.prop('activeTab')).toEqual(
      inputOutputTabs.LATEST_EXECUTIONS.value
    );
    latestExecutionList = findByTestAttr(component, 'latestExecutionList');
    expect(latestExecutionList.exists()).toBeTruthy();
  });

  it('should be able to switch to the comments tab', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <InputOutput
          {...DEFAULT_PROPS}
          answerCommentsCount={1}
          answerId={ANSWER_ID}
        />
      )
    );

    let tabs = findByTestAttr(component, 'tabs');
    const commentsTab = tabs
      .prop('tabs')
      .find((tab) => tab.value === inputOutputTabs.COMMENTS.value);

    // at this time, the active tab should be the default tab (the Custom Input tab)
    expect(tabs.prop('activeTab')).toEqual(inputOutputTabs.CUSTOM_INPUT.value);

    // we click the tab to switch to that tab
    act(() => {
      commentsTab.action();
    });
    component.update();

    // this time, the active tab should be the comments tab
    tabs = findByTestAttr(component, 'tabs');
    expect(tabs.prop('activeTab')).toEqual(inputOutputTabs.COMMENTS.value);
    const comments = findByTestAttr(component, 'comments');
    expect(comments.exists()).toBeTruthy();
  });

  it('should have a locked run tests button if student has not subscribed to that feature', () => {
    const NOT_SUBSCRIBED_USER = {
      features: [
        {
          product_key: GLOBALS.USER_FEATURES.RUN_TESTS,
          datetime_expiry: '2000-06-27 12:02:11',
        },
      ],
      user_type: GLOBALS.USER_TYPES.STUDENT,
    };

    const component = mount(
      wrapWithStoreAndRouter(
        <InputOutput
          {...DEFAULT_PROPS}
          answerCommentsCount={1}
          answerId={ANSWER_ID}
          testCases={
            <TestCaseWithActualOutput
              id={1}
              number={1}
              testCaseStatus={{
                test_case: {
                  input: 'test',
                  output: 'test',
                  is_shown: true,
                },
              }}
            />
          }
        />,
        [
          () =>
            usersActions.loginActions.loginUpdate({
              user: NOT_SUBSCRIBED_USER,
            }),
        ]
      )
    );

    // switch to the test cases tab to see the Run Tests button
    const tabs = findByTestAttr(component, 'tabs');
    const testCasesTab = tabs
      .prop('tabs')
      .find((tab) => tab.value === inputOutputTabs.TEST_CASES.value);

    // we click the tab to switch to that tab
    act(() => {
      testCasesTab.action();
    });
    component.update();

    const runTestsButton = findByTestAttr(component, 'runTestsButton');
    expect(runTestsButton.prop('isLocked')).toEqual(true);
  });

  it('should have an unlocked run tests button if student has not subscribed to that feature', () => {
    const SUBSCRIBED_USER = {
      features: [
        {
          product_key: GLOBALS.USER_FEATURES.RUN_TESTS,
          datetime_expiry: '2099-06-27 12:02:11',
        },
      ],
    };

    const component = mount(
      wrapWithStoreAndRouter(
        <InputOutput
          {...DEFAULT_PROPS}
          answerCommentsCount={1}
          answerId={ANSWER_ID}
          testCases={
            <TestCaseWithActualOutput
              id={1}
              number={1}
              testCaseStatus={{
                test_case: {
                  input: 'test',
                  output: 'test',
                  is_shown: true,
                },
              }}
            />
          }
        />,
        [
          () =>
            usersActions.loginActions.loginUpdate({
              user: SUBSCRIBED_USER,
            }),
        ]
      )
    );

    // switch to the test cases tab to see the Run Tests button
    const tabs = findByTestAttr(component, 'tabs');
    const testCasesTab = tabs
      .prop('tabs')
      .find((tab) => tab.value === inputOutputTabs.TEST_CASES.value);

    // we click the tab to switch to that tab
    act(() => {
      testCasesTab.action();
    });
    component.update();

    const runTestsButton = findByTestAttr(component, 'runTestsButton');
    expect(runTestsButton.prop('isLocked')).toEqual(false);
  });

  it('should have test cases tab as the active tab if the problem is interactive', () => {
    const SUBSCRIBED_USER = {
      features: [
        {
          product_key: GLOBALS.USER_FEATURES.RUN_TESTS,
          datetime_expiry: '2099-06-27 12:02:11',
        },
      ],
    };

    const component = mount(
      wrapWithStoreAndRouter(
        <InputOutput
          {...DEFAULT_PROPS}
          isInteractive
          answerCommentsCount={1}
          answerId={ANSWER_ID}
          testCases={
            <TestCaseWithActualOutput
              id={1}
              number={1}
              testCaseStatus={{
                test_case: {
                  input: 'test',
                  output: 'test',
                  is_shown: true,
                },
              }}
            />
          }
        />,
        [
          () =>
            usersActions.loginActions.loginUpdate({
              user: SUBSCRIBED_USER,
            }),
        ]
      )
    );

    // switch to the test cases tab to see the Run Tests button
    const testCaseList = findByTestAttr(component, 'testCaseList');
    expect(testCaseList.exists()).toBeTruthy();
  });
});
