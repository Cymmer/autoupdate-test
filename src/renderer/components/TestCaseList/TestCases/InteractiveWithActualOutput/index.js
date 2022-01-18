import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from '../styles.module.scss';

import { Card, Text, Icon, Code } from '../../../elements';
import { textTypes } from '../../../elements/constants';

const InteractiveWithActualOutput = ({
  id,
  executionStatus,
  testCaseStatus: {
    test_case: { output, is_shown: isShown },
    actual_output: actualOutput,
  },
  number,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Card className={styles.TestCase}>
      <button
        className={cn({
          [styles.TestCase_title]: isShown,
          [styles.TestCase_title___disabled]: !isShown,
        })}
        data-test="testCaseButton"
        disabled={!isShown}
        id="testCaseButton"
        type="button"
        onClick={() => setIsOpened(!isOpened)}
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
            icon={isOpened ? 'expand_less' : 'expand_more'}
          />
        )}
      </button>
      {isOpened && (
        <div>
          <div
            className={styles.TestCase_content___vertical}
            data-test="content"
          >
            <div>
              <Text
                className={styles.TestCase_content___vertical_title}
                colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
                type={textTypes.HEADING.XXXS}
              >
                Your Output
              </Text>
              {actualOutput ? (
                <Code data-test="actualOutput">{actualOutput}</Code>
              ) : (
                <Text type={textTypes.BODY.SM}>No Output</Text>
              )}
            </div>
            <div>
              <Text
                className={styles.TestCase_content___vertical_title}
                colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
                type={textTypes.HEADING.XXXS}
              >
                Expected Output
              </Text>
              {output ? (
                <Code data-test="expectedOutput">{output}</Code>
              ) : (
                <Text data-test="noOutputMessage" type={textTypes.BODY.SM}>
                  No Output
                </Text>
              )}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

InteractiveWithActualOutput.propTypes = {
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

export default InteractiveWithActualOutput;
