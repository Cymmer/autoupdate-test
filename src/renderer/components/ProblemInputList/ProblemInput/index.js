import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import { Code, Text } from 'components/elements';
import { textTypes } from 'components/elements/constants';
import styles from './styles.module.scss';

const ProblemInput = ({ number, input }) => (
  <div
    className={cn(styles.ProblemInput, {
      [styles.ProblemInput___hasContent]:
        input.input_description ||
        input.input_constraints ||
        input.input_sample,
    })}
  >
    <Text
      className={styles.ProblemInput_title}
      data-test="problemInputName"
      type={textTypes.BODY.MD}
    >
      {`${number}. ${input.input_name}`}
    </Text>

    {input.input_description && (
      <div>
        <Text
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
          type={textTypes.BODY.SM}
        >
          Description
        </Text>
        <Text
          className={styles.ProblemInput_description}
          data-test="problemInputDescription"
          type={textTypes.BODY.SM}
        >
          {input.input_description}
        </Text>
      </div>
    )}

    {input.input_constraints && (
      <div>
        <Text
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
          type={textTypes.BODY.SM}
        >
          Constraints
        </Text>
        <Text data-test="problemInputConstraints" type={textTypes.BODY.SM}>
          {input.input_constraints}
        </Text>
      </div>
    )}

    {input.input_sample && (
      <div>
        <Text
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
          type={textTypes.BODY.SM}
        >
          Sample
        </Text>
        <Code data-test="problemInputSample">
          <div
            dangerouslySetInnerHTML={{
              __html: input.input_sample
                .split(' ')
                .join('<span class="midDot">·</span>'),
            }}
          />
        </Code>
      </div>
    )}
  </div>
);

ProblemInput.propTypes = {
  number: PropTypes.number.isRequired,
  input: PropTypes.shape({
    input_name: PropTypes.string.isRequired,
    input_description: PropTypes.string,
    input_constraints: PropTypes.string,
    input_sample: PropTypes.string,
  }).isRequired,
};

export default ProblemInput;
