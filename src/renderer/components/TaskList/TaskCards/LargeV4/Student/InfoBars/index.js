import GLOBALS from 'codechum-app-globals';
import {
  determinePercentageColorHexCode,
  generateTimeRemainingString,
  getDuration,
} from 'codechum-app-utils';
import { InfoBars } from 'components';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../styles.module.scss';

const determineScoreValue = ({
  isExempted,
  isDelayedGrading,
  scoreValues: { score, maxScore },
} = {}) => {
  if (isDelayedGrading) return 0;
  if (isExempted) return 100;

  return parseInt(((score || 0) / maxScore) * 100);
};

const determineScoreText = ({
  isExempted,
  isDelayedGrading,
  scoreValues: { score, maxScore },
} = {}) => {
  if (isDelayedGrading) return `-/${maxScore}`;
  if (isExempted) return `${maxScore}/${maxScore}`;

  return `${parseInt(score || 0)}/${maxScore}`;
};

const StudentInfoBars = ({
  task: {
    time_before_start: timeBeforeStart,
    time_before_end: timeBeforeEnd,
    is_delayed_grading: isDelayedGrading,
    max_score: maxScore,
    analytics: {
      result,
      questions_count: questionsCount,
      problems_solved: problemsSolved,
    },
  },
}) => {
  const totalSecondsDuration = getDuration(timeBeforeStart, timeBeforeEnd);

  return (
    <>
      {timeBeforeStart <= 0 && (
        <InfoBars
          className={styles.TaskCardLarge_data_progressBar}
          colorHexCode={determinePercentageColorHexCode(
            timeBeforeEnd,
            totalSecondsDuration
          )}
          data-test="timeRemaining"
          label="Time Remaining"
          text={generateTimeRemainingString(timeBeforeEnd)}
          value={parseInt((timeBeforeEnd / totalSecondsDuration) * 100)}
        />
      )}

      <InfoBars
        className={styles.TaskCardLarge_data_progressBar}
        colorHexCode={
          timeBeforeStart <= 0
            ? determinePercentageColorHexCode(
                result?.exempted ? questionsCount : problemsSolved || 0,
                questionsCount
              )
            : GLOBALS.COLOR_HEX_CODES.NEUTRAL['200']
        }
        data-test="solvedProblems"
        label="Solved Problems"
        text={
          result?.exempted
            ? `${questionsCount}/${questionsCount}`
            : `${problemsSolved || 0}/${questionsCount}`
        }
        value={
          result?.exempted
            ? 100
            : parseInt((problemsSolved / questionsCount) * 100)
        }
      />

      <InfoBars
        className={styles.TaskCardLarge_data_progressBar}
        colorHexCode={
          timeBeforeStart <= 0 && !isDelayedGrading
            ? determinePercentageColorHexCode(
                result?.exempted ? maxScore : parseInt(result?.score) || 0,
                maxScore
              )
            : GLOBALS.COLOR_HEX_CODES.NEUTRAL['200']
        }
        data-test="overallScore"
        label="Overall Score"
        text={determineScoreText({
          isExempted: result?.exempted,
          isDelayedGrading,
          scoreValues: {
            score: result?.score,
            maxScore,
          },
        })}
        value={determineScoreValue({
          isExempted: result?.exempted,
          isDelayedGrading,
          scoreValues: {
            score: result?.score,
            maxScore,
          },
        })}
      />
    </>
  );
};

StudentInfoBars.propTypes = {
  task: PropTypes.shape({
    time_before_start: PropTypes.number,
    time_before_end: PropTypes.number,
    is_delayed_grading: PropTypes.bool,
    max_score: PropTypes.number.isRequired,
    analytics: PropTypes.shape({
      result: PropTypes.shape({
        exempted: PropTypes.bool.isRequired,
        score: PropTypes.string,
      }),
      questions_count: PropTypes.number.isRequired,
      problems_solved: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default StudentInfoBars;
