/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { connect } from 'react-redux';

import {
  Tabs,
  Card,
  Button,
  Spinner,
  Code,
  Switch,
  Text,
  Icon,
  Tooltip,
  Span,
} from 'components/elements';
import {
  tabTypes,
  tabKinds,
  buttonTypes,
  codeSizes,
  textTypes,
  tooltipPlacement,
} from 'components/elements/constants';

import { LatestExecutionList, TestCaseList } from 'components';
import { MixpanelTrackService } from 'services';

import { formatTotalSecondsToTime, isFeatureLocked } from 'codechum-app-utils';
import { getAnswerTaskLayout, getServerDateTime, getUser } from 'ducks';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import inputOutputTabs from './constants/inputOutputTabs';
import Comments from './Comments';
import Cooldown from './Cooldown';
import useHotkeys from './hooks/useHotkeys';
import { MOBILE_WINDOW_WIDTH } from '../constants/breakpoints';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

const InputOutput = ({
  answerCommentsCount,
  answerId,
  customInput,
  customOutput,
  executeCode,
  hasSubmitButton,
  hasTestButton,
  isExecuting,
  isExecuteCodeDisabled,
  isInteractive,
  latestExecutions,
  serverDateTime,
  setIsInteractive,
  style,
  submitButtonTextOverride,
  submitCooldown,
  testCases,
  user,
  userType,

  answerTaskLayout,

  customInputTabRef,
  outputTabRef,
  testCasesTabRef,
  runCodeRef,
  submitCodeRef,

  mainActiveOnboarding,
  runCodeActiveOnboarding,
  submitCodeActiveOnboarding,
}) => {
  // NOTE: We need to set the layout to its default value (Top-Bottom) for mobile users
  // so that the layout will not get messed up on mobile view
  const { width: windowWidth } = useWindowDimensions();
  answerTaskLayout =
    windowWidth <= MOBILE_WINDOW_WIDTH
      ? GLOBALS.ANSWER_TASK_LAYOUTS.TOP_BOTTOM
      : answerTaskLayout;

  const [activeTab, changeTab] = useState(
    isInteractive
      ? inputOutputTabs.TEST_CASES.value
      : inputOutputTabs.CUSTOM_INPUT.value
  );

  useEffect(() => {
    if (isInteractive) {
      changeTab(inputOutputTabs.TEST_CASES.value);
    } else {
      changeTab(inputOutputTabs.CUSTOM_INPUT.value);
    }
  }, [isInteractive]);

  const executeCodeWrapper =
    executeCode !== null
      ? (executionMode) => {
          if (executionMode === GLOBALS.EXECUTION_MODES.RUN && !isInteractive) {
            changeTab(inputOutputTabs.OUTPUT.value);
          } else if (
            executionMode === GLOBALS.EXECUTION_MODES.TEST ||
            executionMode === GLOBALS.EXECUTION_MODES.SUBMIT
          ) {
            changeTab(inputOutputTabs.TEST_CASES.value);
          }
          executeCode(executionMode);
        }
      : null;

  const runCodeAction = async () => {
    executeCodeWrapper(GLOBALS.EXECUTION_MODES.RUN);

    if (userType === GLOBALS.USER_TYPES.STUDENT) {
      await MixpanelTrackService.create({
        body: {
          event_name: 'Clicked Run Code Button',
          event_properties: {
            'Answer ID': answerId,
          },
        },
      });
    }
  };

  useHotkeys({
    runCodeAction:
      !isExecuting && executeCodeWrapper !== null ? runCodeAction : null,
  });

  const changeTabFn = async (tab) => {
    changeTab(tab.value);

    if (userType === GLOBALS.USER_TYPES.STUDENT) {
      await MixpanelTrackService.create({
        body: {
          event_name: `Clicked ${tab.name} Tab`,
          event_properties: {
            'Answer ID': answerId,
          },
        },
      });
    }
  };

  const isRunTestsLocked =
    user.user_type === GLOBALS.USER_TYPES.STUDENT &&
    isFeatureLocked(GLOBALS.USER_FEATURES.RUN_TESTS, user, serverDateTime);

  const runTestProps = {
    icon: 'low_priority',
    onClick: async () => {
      executeCodeWrapper(GLOBALS.EXECUTION_MODES.TEST);

      if (userType === GLOBALS.USER_TYPES.STUDENT) {
        await MixpanelTrackService.create({
          body: {
            event_name: 'Clicked Run Tests Button',
            event_properties: {
              'Answer ID': answerId,
            },
          },
        });
      }
    },
    disabled: isExecuting || executeCodeWrapper === null,
  };

  const isInPlayground = !hasTestButton && !hasSubmitButton;

  return (
    <div className={styles.InputOutput} style={style}>
      {((isInPlayground && !isInteractive) || !isInPlayground) && (
        <Card
          className={cn(styles.InputOutput_main, {
            [styles.InputOutput_main___active_onboarding]: mainActiveOnboarding,
            [styles.InputOutput_main___sideBySide]:
              answerTaskLayout === GLOBALS.ANSWER_TASK_LAYOUTS.SIDE_BY_SIDE,
          })}
        >
          <div
            className={cn(styles.InputOutput_tabs, {
              [styles.InputOutput_tabs___loading]: isExecuting,
            })}
          >
            <Tabs
              activeTab={activeTab}
              data-test="tabs"
              tabs={[
                !isInteractive
                  ? {
                      ref: customInputTabRef,
                      name: inputOutputTabs.CUSTOM_INPUT.name,
                      value: inputOutputTabs.CUSTOM_INPUT.value,
                      kind: tabKinds.BUTTON,
                      action: () => changeTabFn(inputOutputTabs.CUSTOM_INPUT),
                    }
                  : null,
                !isInteractive
                  ? {
                      ref: outputTabRef,
                      name: inputOutputTabs.OUTPUT.name,
                      value: inputOutputTabs.OUTPUT.value,
                      kind: tabKinds.BUTTON,
                      action: () => changeTabFn(inputOutputTabs.OUTPUT),
                    }
                  : null,
                testCases
                  ? {
                      ref: testCasesTabRef,
                      name: inputOutputTabs.TEST_CASES.name,
                      value: inputOutputTabs.TEST_CASES.value,
                      kind: tabKinds.BUTTON,
                      action: () => changeTabFn(inputOutputTabs.TEST_CASES),
                    }
                  : null,
                latestExecutions
                  ? {
                      name: inputOutputTabs.LATEST_EXECUTIONS.name,
                      value: inputOutputTabs.LATEST_EXECUTIONS.value,
                      kind: tabKinds.BUTTON,
                      action: () =>
                        changeTabFn(inputOutputTabs.LATEST_EXECUTIONS),
                    }
                  : null,
                answerCommentsCount > 0
                  ? {
                      name: inputOutputTabs.COMMENTS.name,
                      value: inputOutputTabs.COMMENTS.value,
                      kind: tabKinds.BUTTON,
                      action: () => changeTabFn(inputOutputTabs.COMMENTS),
                      hasNewData: true,
                    }
                  : null,
              ].filter((tab) => tab !== null)}
              type={tabTypes.HORIZONTAL.SM}
            />
            <div className={styles.InputOutput_tabs_actions}>
              {answerTaskLayout === GLOBALS.ANSWER_TASK_LAYOUTS.TOP_BOTTOM &&
                activeTab === inputOutputTabs.TEST_CASES.value &&
                hasTestButton && (
                  <>
                    <Button
                      className={styles.InputOutput_tabs_button}
                      data-test="runTestsButton"
                      id="runTestsButton"
                      isLocked={isRunTestsLocked}
                      lockedIconClassName={
                        styles.InputOutput_tabs_button_lockedIcon
                      }
                      wrapperClassName={styles.InputOutput_tabs_button_wrapper}
                      {...runTestProps}
                    >
                      Run Tests
                    </Button>
                  </>
                )}
            </div>
          </div>
          {((isInPlayground && !isInteractive) || !isInPlayground) && (
            <div
              className={cn(styles.InputOutput_content, {
                [styles.InputOutput_content___loading]: isExecuting,
              })}
            >
              {isExecuting && (
                <div className={styles.InputOutput_loader}>
                  <Spinner className={styles.InputOutput_loader_spinner} />
                </div>
              )}
              <div
                className={cn(styles.InputOutput_content_body, {
                  [styles.InputOutput___loading]: isExecuting,
                })}
              >
                {activeTab === inputOutputTabs.CUSTOM_INPUT.value &&
                  customInput}
                {activeTab === inputOutputTabs.OUTPUT.value && (
                  <Code
                    className={styles.InputOutput_code}
                    codeClassName={styles.InputOutput_code}
                    size={codeSizes.MD}
                  >
                    {customOutput}
                  </Code>
                )}
                {activeTab === inputOutputTabs.TEST_CASES.value && (
                  <>
                    {answerTaskLayout ===
                      GLOBALS.ANSWER_TASK_LAYOUTS.SIDE_BY_SIDE &&
                      hasTestButton && (
                        <div
                          className={
                            styles.InputOutput_tabs_button___sideBySideContainer
                          }
                        >
                          <Button
                            className={cn(
                              styles.InputOutput_tabs_button,
                              styles.InputOutput_tabs_button___sideBySide
                            )}
                            data-test="runTestsButton"
                            id="runTestsButton"
                            isLocked={isRunTestsLocked}
                            lockedIconClassName={
                              styles.InputOutput_tabs_button_lockedIcon
                            }
                            wrapperClassName={
                              styles.InputOutput_tabs_button_wrapper
                            }
                            {...runTestProps}
                          >
                            Run Tests
                          </Button>
                        </div>
                      )}

                    <TestCaseList
                      className={styles.InputOutput_testCases}
                      data-test="testCaseList"
                    >
                      {testCases}
                    </TestCaseList>
                  </>
                )}
                {activeTab === inputOutputTabs.LATEST_EXECUTIONS.value && (
                  <LatestExecutionList
                    className={styles.InputOutput_latestExecutions}
                    data-test="latestExecutionList"
                  >
                    {latestExecutions}
                  </LatestExecutionList>
                )}
                {activeTab === inputOutputTabs.COMMENTS.value &&
                  answerCommentsCount > 0 && (
                    <Comments answerId={answerId} data-test="comments" />
                  )}
              </div>
            </div>
          )}
        </Card>
      )}
      <Card
        className={cn(styles.InputOutput_actions, {
          [styles.InputOutput_actions___sideBySide]:
            answerTaskLayout === GLOBALS.ANSWER_TASK_LAYOUTS.SIDE_BY_SIDE,
        })}
      >
        <div>
          {setIsInteractive && (
            <div className={styles.InputOutput_switch}>
              <Switch
                checked={isInteractive}
                name="is_interactive"
                onChange={() => setIsInteractive(!isInteractive)}
              />
              <Text
                className={styles.InputOutput_switch_label}
                type={textTypes.BODY.XS}
              >
                {isInteractive ? 'Interactive Mode' : 'Non-interactive Mode'}
              </Text>
              <Tooltip
                className={styles.InputOutput_switch_helper}
                content={
                  isInteractive
                    ? 'Selecting this will let you answer using the “terminal” method, where you will go through the code inputs and outputs consecutively via a terminal.'
                    : 'Selecting this will let you answer using the “inputs first” method, where you will need to type in all needed inputs before running the code.'
                }
                placement={tooltipPlacement.TOP}
              >
                <Icon icon="help" />
              </Tooltip>
            </div>
          )}
        </div>
        <div className={styles.InputOutput_actions_buttonsContainer}>
          <Button
            className={cn(styles.InputOutput_actions_button, {
              [styles.InputOutput_actions_button___active_onboarding]:
                runCodeActiveOnboarding,
            })}
            disabled={
              isExecuting ||
              isExecuteCodeDisabled ||
              executeCodeWrapper === null
            }
            id="runCodeButton"
            innerRef={runCodeRef}
            type={buttonTypes.TERTIARY}
            onClick={() => {
              window.scrollTo(0, 0);
              runCodeAction();
            }}
          >
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
              type={textTypes.MISC.BUTTON}
            >
              Execute Code{' '}
              <Span className={styles.InputOutput_actions_button_hotkey}>
                [F10]
              </Span>
            </Text>
          </Button>
          {hasSubmitButton && (
            <>
              {submitCooldown > 0 ? (
                <Cooldown
                  current={submitCooldown}
                  max={GLOBALS.COOLDOWNS.SUBMIT}
                  text={`Cooldown: ${formatTotalSecondsToTime(submitCooldown)}`}
                />
              ) : (
                <Button
                  className={cn(styles.InputOutput_actions_button, {
                    [styles.InputOutput_actions_button___active_onboarding]:
                      submitCodeActiveOnboarding,
                  })}
                  disabled={isExecuting || executeCodeWrapper === null}
                  id="submitCodeButton"
                  innerRef={submitCodeRef}
                  type={buttonTypes.PRIMARY.GREEN}
                  onClick={async () => {
                    executeCodeWrapper(GLOBALS.EXECUTION_MODES.SUBMIT);

                    if (userType === GLOBALS.USER_TYPES.STUDENT) {
                      await MixpanelTrackService.create({
                        body: {
                          event_name: 'Clicked Submit Button',
                          event_properties: {
                            'Answer ID': answerId,
                          },
                        },
                      });
                    }
                  }}
                >
                  {submitButtonTextOverride || 'Submit Code'}
                </Button>
              )}
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

InputOutput.defaultProps = {
  answerCommentsCount: null,
  answerId: null,
  customOutput: null,
  executeCode: null,
  hasSubmitButton: true,
  hasTestButton: true,
  isInteractive: false,
  isExecuteCodeDisabled: false,
  latestExecutions: null,
  setIsInteractive: null,
  style: null,
  submitButtonTextOverride: null,
  submitCooldown: 0,
  testCases: null,
  userType: null,
};

InputOutput.propTypes = {
  style: PropTypes.object,

  // a JSX component of type ControlledTextArea
  customInput: PropTypes.node.isRequired,

  // a JSX component of type <span>
  customOutput: PropTypes.string,

  // a JSX component which contains an array of
  // TestCaseWithActualOutput components
  testCases: PropTypes.node,

  // a JSX component which contains an array of
  // ExecutionCard components
  latestExecutions: PropTypes.node,

  // this is null if there's an execution going on
  executeCode: PropTypes.func,

  // the number of cooldown seconds for the submit button
  submitCooldown: PropTypes.number,

  // if true, the submit button will be shown
  hasSubmitButton: PropTypes.bool,

  isInteractive: PropTypes.bool,
  setIsInteractive: PropTypes.func,

  // if true, the test button will be shown
  hasTestButton: PropTypes.bool,

  // true if the code is still executing
  isExecuting: PropTypes.bool.isRequired,

  isExecuteCodeDisabled: PropTypes.bool,

  // the text override for the submit button
  submitButtonTextOverride: PropTypes.string,

  answerId: PropTypes.number,

  answerCommentsCount: PropTypes.number,

  userType: PropTypes.oneOf([
    GLOBALS.USER_TYPES.STUDENT,
    GLOBALS.USER_TYPES.TEACHER,
  ]),

  user: PropTypes.object.isRequired,
  serverDateTime: PropTypes.object.isRequired,
  answerTaskLayout: PropTypes.oneOf(Object.values(GLOBALS.ANSWER_TASK_LAYOUTS))
    .isRequired,

  // refs
  customInputTabRef: PropTypes.object,
  outputTabRef: PropTypes.object,
  testCasesTabRef: PropTypes.object,
  runCodeRef: PropTypes.object,
  submitCodeRef: PropTypes.object,

  // onboarding active status
  mainActiveOnboarding: PropTypes.bool,
  runCodeActiveOnboarding: PropTypes.bool,
  submitCodeActiveOnboarding: PropTypes.bool,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
  serverDateTime: getServerDateTime(store),
  answerTaskLayout: getAnswerTaskLayout(store),
});

export default connect(mapStateToProps, null)(InputOutput);
