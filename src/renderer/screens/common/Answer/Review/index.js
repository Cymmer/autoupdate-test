import React from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';

import { Text, Button, Cody, Container } from 'components/elements';
import { textTypes, buttonTypes } from 'components/elements/constants';
import styles from './styles.module.scss';

import ProblemLink from '../Info/TaskInfo/ProblemLink';

const Review = ({
  answers,
  submitAction,
  backAction,
  generateProblemLink,
  task,
}) => (
  <div className={styles.Review}>
    <Container className={styles.Review_container}>
      <div>
        <Text type={textTypes.HEADING.MD}>Review Your Work</Text>
        <div className={styles.Review_problems}>
          {answers.map((answer, index) => (
            <ProblemLink
              key={answer.id}
              answer={answer}
              link={generateProblemLink(index + 1)}
              number={index + 1}
              task={task}
              onClick={backAction}
            />
          ))}
        </div>
        <div className={styles.Review_buttons}>
          <Button onClick={submitAction}>Submit Work</Button>
          <Button type={buttonTypes.TERTIARY} onClick={backAction}>
            Back to Activity
          </Button>
        </div>
      </div>
      <Cody className={styles.Review_cody} type={GLOBALS.CODY_TYPES.THINKING} />
    </Container>
  </div>
);

Review.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  submitAction: PropTypes.func.isRequired,
  backAction: PropTypes.func.isRequired,
  task: PropTypes.object,

  // function that accepts 1 parameter which is the question number
  // and will return a link to that question
  generateProblemLink: PropTypes.func.isRequired,
};

export default Review;
