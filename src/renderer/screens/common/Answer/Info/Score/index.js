import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  determinePercentageColorName,
  determinePercentageColorClass,
} from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import {
  Card,
  Text,
  Span,
  Tooltip,
  Icon,
} from '../../../../../components/elements';
import {
  textTypes,
  tooltipPlacement,
} from '../../../../../components/elements/constants';
import { useInterval } from '../../../../../hooks';

const COOLDOWN_SECONDS = 25;

const Score = ({ answer, isMustBePerfectShown, task }) => {
  const [pulsatingCountdown, setPulsatingCountdown] = useState(0);
  const [initialSubmissions, setInitialSubmissions] = useState(null);

  const {
    score,
    question: { max_score: maxScore },
    submissions,
  } = answer || {};

  useEffect(() => {
    if (!initialSubmissions) {
      // we do this to prevent the tooltip from showing on load
      setInitialSubmissions(submissions);
    } else if (submissions != null && isMustBePerfectShown) {
      setPulsatingCountdown(COOLDOWN_SECONDS);
    }
  }, [submissions]);

  useInterval(() => {
    if (pulsatingCountdown > 0) {
      setPulsatingCountdown(pulsatingCountdown - 1);
    }
  }, 1000);

  return (
    <Card className={styles.Score}>
      <div className={styles.Score_info}>
        <Text className={styles.Score_text} type={textTypes.DATA.LG}>
          Score:{' '}
          {task?.is_delayed_grading ? (
            <Tooltip
              content="Your teacher has chosen to check your work manually. Your score will be available once your teacher is finished grading your work."
              placement={tooltipPlacement.RIGHT}
            >
              <Span colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
                -/{maxScore}
              </Span>
            </Tooltip>
          ) : (
            <Span
              colorClass={determinePercentageColorClass(
                parseInt(score),
                maxScore
              )}
            >
              {parseInt(score)}/{maxScore}
            </Span>
          )}
        </Text>
        {pulsatingCountdown > 0 && (
          <Tooltip
            className={styles.Score_tooltip}
            content={
              <span className={styles.Score_tooltip_content}>
                All test cases must be correct for this problem in order for
                your score to be recorded
              </span>
            }
            placement="right"
            theme="danger"
          >
            <Icon isPulsating className={styles.Score_dangerIcon} icon="info" />
          </Tooltip>
        )}
      </div>
      <progress
        className={
          styles[
            `Score_progress___${determinePercentageColorName(
              parseInt(score),
              maxScore
            )}`
          ]
        }
        max={maxScore}
        value={parseInt(score)}
      />
    </Card>
  );
};

Score.defaultProps = {
  answer: null,
  isMustBePerfectShown: false,
};

Score.propTypes = {
  answer: PropTypes.object,
  task: PropTypes.object,

  // if true, the must be perfect notice will be shown
  isMustBePerfectShown: PropTypes.bool,
};

export default Score;
