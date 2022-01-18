import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';

import styles from '../styles.module.scss';

import { Card, Text, Icon, Code } from '../../../elements';
import { textTypes } from '../../../elements/constants';

const TestCaseWithActualOutput = ({
  id,
  executionStatus,
  testCaseStatus: {
    test_case: { inputs, output, is_shown: isShown },
    actual_output: actualOutput,
  },
  number,
}) => {
  const [isToggled, toggle] = useState(false);

  return (
    <Card className={styles.TestCase}>
      <button
        className={cn({
          [styles.TestCase_title]: isShown,
          [styles.TestCase_title___disabled]: !isShown,
        })}
        disabled={!isShown}
        type="button"
        onClick={() => toggle(!isToggled)}
      >
        <div className={styles.TestCase_text} id={id}>
          {executionStatus && (
            <Icon
              className={cn({
                [styles.TestCase_icon___passed]:
                  executionStatus === GLOBALS.EXECUTION_STATUSES.PASSED.value,
                [styles.TestCase_icon___failed]:
                  executionStatus === GLOBALS.EXECUTION_STATUSES.FAILED.value ||
                  executionStatus ===
                    GLOBALS.EXECUTION_STATUSES.TIMED_OUT.value,
              })}
              icon={
                executionStatus === GLOBALS.EXECUTION_STATUSES.PASSED.value
                  ? 'check_circle'
                  : 'cancel'
              }
            />
          )}
          {!executionStatus && (
            <Icon
              className={styles.TestCase_icon___empty}
              icon="radio_button_unchecked"
            />
          )}
          <Text
            className={cn(styles.TestCase_text, {
              [styles[`TestCase___${executionStatus}`]]:
                executionStatus !== null,
              [styles.TestCase___hidden]: !isShown,
            })}
            type={textTypes.HEADING.XXXS}
          >
            Test Case {number}
          </Text>
        </div>
        {isShown && (
          <Icon
            className={styles.TestCase_caret}
            icon={isToggled ? 'expand_less' : 'expand_more'}
          />
        )}
      </button>
      {isToggled && (
        <div className={styles.TestCase_content}>
          <div className={styles.TestCase_group}>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
              type={textTypes.BODY.SM}
            >
              Input
            </Text>
            {inputs?.length > 0 && inputs[0].value ? (
              <Code>{inputs[0].value}</Code>
            ) : (
              <Text type={textTypes.BODY.SM}>No Input</Text>
            )}
          </div>
          <div className={styles.TestCase_group}>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
              type={textTypes.BODY.SM}
            >
              Your Output
            </Text>
            {actualOutput ? (
              <Code>{actualOutput}</Code>
            ) : (
              <Text type={textTypes.BODY.SM}>No Output</Text>
            )}
          </div>
          <div className={styles.TestCase_group}>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
              type={textTypes.BODY.SM}
            >
              Expected Output
            </Text>
            {output ? (
              <Code>{output}</Code>
            ) : (
              <Text type={textTypes.BODY.SM}>No Output</Text>
            )}
          </div>
        </div>
      )}
    </Card>
  );
};

TestCaseWithActualOutput.defaultProps = {
  id: null,
  executionStatus: null,
};

TestCaseWithActualOutput.propTypes = {
  id: PropTypes.string,
  executionStatus: PropTypes.oneOf([
    GLOBALS.EXECUTION_STATUSES.PASSED.value,
    GLOBALS.EXECUTION_STATUSES.FAILED.value,
    GLOBALS.EXECUTION_STATUSES.TIMED_OUT.value,
  ]),
  testCaseStatus: PropTypes.shape({
    test_case: PropTypes.shape({
      inputs: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string,
        })
      ),
      output: PropTypes.string,
      is_shown: PropTypes.bool,
    }),
    actual_output: PropTypes.string,
  }).isRequired,
  number: PropTypes.number.isRequired,
};

export default TestCaseWithActualOutput;
