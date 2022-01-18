import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';

import { ProblemInputList, ProblemInput } from 'components';
import { Text, Code, Card, Span, ButtonLink } from 'components/elements';
import { buttonTypes, textTypes } from 'components/elements/constants';
import styles from './styles.module.scss';

const getActualCreatorName = (creator) => {
  if (creator.first_name) {
    return `${creator.first_name} ${creator.last_name}`;
  }

  return 'CodeChum';
};

const QuestionInfo = ({
  answer,
  number,
  showProblemSolution,
  descriptionRef,
  inputRef,
  outputRef,
  descriptionActiveOnboarding,
  inputActiveOnboarding,
  outputActiveOnboarding,
  isInteractive,
}) => {
  const { question } = answer || {};

  const {
    problem: {
      creator,
      name: problemName,
      description,
      inputs,
      output_format: outputFormat,
      sample_output: sampleOutput,
      creator_name_override: creatorNameOverride,
      problem_solution: problemSolution,
    },
    question_additional_info: questionAdditionalInfo,
  } = question || {};

  return (
    <Card className={styles.QuestionInfo}>
      <div
        ref={descriptionRef}
        className={cn({
          [styles.QuestionInfo___active_onboarding]:
            descriptionActiveOnboarding,
        })}
      >
        <div className={styles.QuestionInfo_head}>
          <div>
            <Text type={textTypes.HEADING.XS}>
              <Span colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}>
                {number}.
              </Span>{' '}
              {problemName}
            </Text>
            <Text
              className={styles.QuestionInfo_creator}
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
              type={textTypes.BODY.SM}
            >
              by {creatorNameOverride || getActualCreatorName(creator)}
            </Text>
          </div>
          {showProblemSolution && problemSolution && (
            <ButtonLink
              data-test="viewSolutionLink"
              icon="launch"
              to={problemSolution}
              type={buttonTypes.TEXT.BLUE}
            >
              View Solution
            </ButtonLink>
          )}
        </div>

        <div className={styles.QuestionInfo_description}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          {questionAdditionalInfo?.instruction != null && (
            <div className={styles.QuestionInfo_instructions}>
              <Text
                className={styles.QuestionInfo_label}
                colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
                type={textTypes.BODY.SM}
              >
                Instructions
              </Text>
              <div
                dangerouslySetInnerHTML={{
                  __html: questionAdditionalInfo.instruction,
                }}
              />
            </div>
          )}
        </div>
      </div>

      {inputs?.length > 0 && isInteractive && (
        <div
          ref={inputRef}
          className={cn(styles.QuestionInfo_format, {
            [styles.QuestionInfo___active_onboarding]: inputActiveOnboarding,
          })}
          data-test="interactiveInput"
        >
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
            type={textTypes.BODY.SM}
          >
            Input
          </Text>
          <ProblemInputList>
            {inputs.map((input, index) => (
              <ProblemInput
                key={`${input.input_name}-${index}`}
                data-test={`problemInput-${input.input_name}`}
                input={input}
                number={index + 1}
              />
            ))}
          </ProblemInputList>
        </div>
      )}

      {inputs?.length > 0 && !isInteractive && inputs[0]?.input_sample && (
        <div
          ref={inputRef}
          className={cn(styles.QuestionInfo_format, {
            [styles.QuestionInfo___active_onboarding]: inputActiveOnboarding,
          })}
          data-test="nonInteractiveInput"
        >
          <div>
            <Text
              className={styles.QuestionInfo_label}
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
              type={textTypes.BODY.SM}
            >
              Input
            </Text>
            <Text
              className={styles.QuestionInfo_inputOutputFormat}
              type={textTypes.BODY.SM}
            >
              {inputs[0]?.input_description}
            </Text>
          </div>
          <Code>
            <div
              dangerouslySetInnerHTML={{
                __html: inputs[0]?.input_sample
                  .split(' ')
                  .join('<span class="midDot">·</span>'),
              }}
            />
          </Code>
        </div>
      )}

      <div
        ref={outputRef}
        className={cn(styles.QuestionInfo_format, {
          [styles.QuestionInfo___active_onboarding]: outputActiveOnboarding,
        })}
      >
        <div>
          <Text
            className={styles.QuestionInfo_label}
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
            type={textTypes.BODY.SM}
          >
            Output
          </Text>
          <Text
            className={styles.QuestionInfo_inputOutputFormat}
            type={textTypes.BODY.SM}
          >
            {outputFormat}
          </Text>
        </div>
        {sampleOutput ? (
          <Code>
            <div
              dangerouslySetInnerHTML={{
                __html: sampleOutput
                  .split(' ')
                  .join('<span class="midDot">·</span>'),
              }}
            />
          </Code>
        ) : (
          <Text type={textTypes.BODY.SM}>No Output</Text>
        )}
      </div>
    </Card>
  );
};

QuestionInfo.defaultProps = {
  showProblemSolution: false,
  isInteractive: false,
};

QuestionInfo.propTypes = {
  answer: PropTypes.shape({
    question: PropTypes.shape({
      problem: PropTypes.shape({
        creator: PropTypes.shape({
          first_name: PropTypes.string,
          last_name: PropTypes.string,
        }),
        name: PropTypes.string,
        description: PropTypes.string,
        input_format: PropTypes.string,
        sample_input: PropTypes.string,
        output_format: PropTypes.string,
        sample_output: PropTypes.string,
        creator_name_override: PropTypes.string,
        problem_solution: PropTypes.string,
      }),
      question_additional_info: PropTypes.shape({
        instruction: PropTypes.string,
      }),
    }),
  }).isRequired,
  number: PropTypes.number.isRequired,

  showProblemSolution: PropTypes.bool,

  // refs
  descriptionRef: PropTypes.object.isRequired,
  inputRef: PropTypes.object.isRequired,
  outputRef: PropTypes.object.isRequired,

  // onboarding active status
  descriptionActiveOnboarding: PropTypes.bool,
  inputActiveOnboarding: PropTypes.bool,
  outputActiveOnboarding: PropTypes.bool,

  isInteractive: PropTypes.bool,
};

export default QuestionInfo;
