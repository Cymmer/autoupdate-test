import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from '../styles.module.scss';

import { Card, Text, Icon, Code } from '../../../elements';
import { textTypes } from '../../../elements/constants';

const InteractiveNoActualOutput = ({
  testCase: { output, is_shown: isShown },
  number,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Card className={styles.TestCase}>
      <button
        className={styles.TestCase_title}
        data-test="testCaseButton"
        id="testCaseButton"
        type="button"
        onClick={() => setIsOpened(!isOpened)}
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
          icon={isOpened ? 'expand_less' : 'expand_more'}
        />
      </button>
      {isOpened && (
        <div className={styles.TestCase_content___vertical} data-test="content">
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
      )}
    </Card>
  );
};

InteractiveNoActualOutput.propTypes = {
  testCase: PropTypes.shape({
    id: PropTypes.number.isRequired,
    inputs: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        problem_input: PropTypes.shape({
          id: PropTypes.number.isRequired,
          input_name: PropTypes.string.isRequired,
        }).isRequired,
      })
    ),
    output: PropTypes.string.isRequired,
    is_shown: PropTypes.bool.isRequired,
  }).isRequired,

  // this is 1-based
  number: PropTypes.number.isRequired,
};

export default InteractiveNoActualOutput;
