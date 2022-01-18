import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from '../styles.module.scss';

import { Card, Text, Icon, Code } from '../../../elements';
import { textTypes } from '../../../elements/constants';

const TestCaseNoActualOutput = ({
  testCase: { inputs, output, is_shown: isShown },
  number,
}) => {
  const [isToggled, toggle] = useState(false);

  return (
    <Card className={styles.TestCase}>
      <button
        className={styles.TestCase_title}
        data-test="testcaseButton"
        id="testcaseButton"
        type="button"
        onClick={() => toggle(!isToggled)}
      >
        <Text
          className={cn(styles.TestCase_text, {
            [styles.TestCase___hidden]: isShown === false,
          })}
          type={textTypes.HEADING.XXXS}
        >
          Test Case {number}
        </Text>
        <Icon
          className={styles.TestCase_caret}
          icon={isToggled ? 'expand_less' : 'expand_more'}
        />
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
            {inputs?.length > 0 && inputs[0]?.value ? (
              <Code data-test="input">{inputs[0].value}</Code>
            ) : (
              <Text data-test="noInputText" type={textTypes.BODY.SM}>
                No Input
              </Text>
            )}
          </div>
          <div className={styles.TestCase_group}>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
              type={textTypes.BODY.SM}
            >
              Expected
            </Text>
            {output ? (
              <Code data-test="output">{output}</Code>
            ) : (
              <Text data-test="noOutputText" type={textTypes.BODY.SM}>
                No Output
              </Text>
            )}
          </div>
        </div>
      )}
    </Card>
  );
};

TestCaseNoActualOutput.propTypes = {
  testCase: PropTypes.shape({
    inputs: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
      })
    ),

    // the expected output of the test case
    output: PropTypes.string,

    // true if the test case is shown (i.e. not hidden)
    is_shown: PropTypes.bool,
  }).isRequired,
  number: PropTypes.number.isRequired,
};

export default TestCaseNoActualOutput;
