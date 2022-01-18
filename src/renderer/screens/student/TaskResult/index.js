import GLOBALS from 'codechum-app-globals';
import {
  determinePercentageColorClass,
  determineRankColorClass,
  getRankString,
  isFeatureLocked,
} from 'codechum-app-utils';
import {
  Button,
  Cody,
  Container,
  Icon,
  Span,
  Text,
  Tooltip,
} from 'components/elements';
import { buttonTypes, textTypes } from 'components/elements/constants';
import { getServerDateTime, getUser } from 'ducks';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { STUDENT_ROUTES } from 'screen-wrappers/Student/constants';
import { MixpanelTrackService } from 'services';
import styles from './styles.module.scss';

const determineScreenValues = (score, maxScore) => {
  let headingColor = GLOBALS.COLOR_CLASSES.RED['300'];
  let heading = 'You Failed';
  let scoreDescription =
    "but unfortunately you fell a bit short. Don't worry! Just do better next time.";
  let codyType = GLOBALS.CODY_TYPES.FAIL;

  if (score === maxScore) {
    headingColor = GLOBALS.COLOR_CLASSES.GREEN['300'];
    heading = 'Perfect Score!';
    scoreDescription = 'and you got a perfect score. Great Job!';
    codyType = GLOBALS.CODY_TYPES.PERFECT;
  } else if (score / maxScore >= 0.5) {
    headingColor = GLOBALS.COLOR_CLASSES.BLUE['300'];
    heading = 'You Passed';
    scoreDescription = 'and you passed. Great Job!';
    codyType = GLOBALS.CODY_TYPES.OK;
  }

  return {
    headingColor,
    heading,
    scoreDescription,
    codyType,
  };
};

const TaskResult = ({ location, user, serverDateTime }) => {
  const history = useHistory();

  const [isLeaderboardToggled, toggleLeaderboard] = useState(false);

  if (!location?.state?.task) {
    history.push('/student/home');
    return null;
  }

  const {
    state: { task, rank, score },
  } = location;
  const { headingColor, heading, scoreDescription, codyType } =
    determineScreenValues(score, task.max_score);

  const isRankLocked = isFeatureLocked(
    GLOBALS.USER_FEATURES.LEADERBOARD,
    user,
    serverDateTime
  );

  return (
    <>
      {/* {!task.is_leaderboard_hidden && (
        <LeaderboardModal
          handleClose={() => toggleLeaderboard(false)}
          isOpen={isLeaderboardToggled === true}
          task={task}
        />
      )} */}

      <div className={styles.TaskResult}>
        <Container className={styles.TaskResult_container}>
          <div className={styles.TaskResult_info}>
            <div className={styles.TaskResult_dataGroup}>
              <div>
                <Text
                  className={styles.TaskResult_label}
                  colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
                  type={textTypes.BODY.MD}
                >
                  Score
                </Text>
                <Text
                  colorClass={
                    task.is_delayed_grading
                      ? GLOBALS.COLOR_CLASSES.NEUTRAL['500']
                      : determinePercentageColorClass(score, task.max_score)
                  }
                  type={textTypes.HEADING.LG}
                >
                  {task.is_delayed_grading ? '-' : score}
                  <Span colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
                    /{task.max_score}
                  </Span>
                </Text>
              </div>
              {!task.is_leaderboard_hidden && !task.is_delayed_grading && (
                <div>
                  <Text
                    className={styles.TaskResult_label}
                    colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
                    type={textTypes.BODY.MD}
                  >
                    Rank
                  </Text>
                  <Text
                    className={styles.TaskResult_rank}
                    colorClass={
                      !isRankLocked
                        ? determineRankColorClass(rank)
                        : GLOBALS.COLOR_CLASSES.NEUTRAL['200']
                    }
                    data-test="rankString"
                    type={textTypes.HEADING.LG}
                  >
                    {!isRankLocked ? getRankString(rank) : '???'}
                    {isRankLocked && (
                      <Tooltip
                        content={GLOBALS.MESSAGES.PREMIUM_FEATURE_LOCK_MESSAGE}
                      >
                        <a
                          href={STUDENT_ROUTES.SHOP}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <Icon
                            className={styles.TaskResult_rank_lockedIcon}
                            icon="lock"
                          />
                        </a>
                      </Tooltip>
                    )}
                  </Text>
                </div>
              )}
            </div>
            <Text
              className={styles.TaskResult_heading}
              colorClass={
                task.is_delayed_grading
                  ? GLOBALS.COLOR_CLASSES.NEUTRAL['500']
                  : headingColor
              }
              type={textTypes.HEADING.MD}
            >
              {task.is_delayed_grading ? 'Score Pending' : heading}
            </Text>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              You just completed{' '}
              <Span type={textTypes.DATA.MD}>{task.name}</Span>
              {task.is_delayed_grading
                ? '! However, your teacher has chosen to check your work manually. Your score will be available once your teacher is finished grading your work.'
                : ` ${scoreDescription}`}
            </Text>
            <div className={styles.TaskResult_buttons}>
              {!task.is_leaderboard_hidden && !task.is_delayed_grading && (
                <Button
                  className={styles.TaskResult_viewLeaderboardsButton}
                  data-test="viewLeaderboardsButton"
                  isLocked={isRankLocked}
                  onClick={async () => {
                    toggleLeaderboard(true);

                    await MixpanelTrackService.create({
                      body: {
                        event_name: 'View Leaderboard (Task Result)',
                        event_properties: {
                          'Task ID': task.id,
                        },
                      },
                    });
                  }}
                >
                  View Leaderboards
                </Button>
              )}
              <Button
                type={buttonTypes.TERTIARY}
                onClick={() => history.push('/student/home')}
              >
                Back to Home
              </Button>
            </div>
          </div>
          <Cody className={styles.TaskResult_cody} type={codyType} />
        </Container>
      </div>
    </>
  );
};

TaskResult.defaultProps = {
  location: null,
};

TaskResult.propTypes = {
  // the only time the user can go to this screen
  // is if he/she was programmatically redirected
  // from the Answer Task screen. If the user
  // arrived in this screen in any other way
  // (e.g. manually typing the URL for this screen),
  // he/she will be redirected to the home page
  location: PropTypes.shape({
    state: PropTypes.shape({
      task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        max_score: PropTypes.number.isRequired,
        is_leaderboard_hidden: PropTypes.bool.isRequired,
        is_delayed_grading: PropTypes.bool.isRequired,
      }).isRequired,
      rank: PropTypes.number.isRequired,
      score: PropTypes.number.isRequired,
    }),
  }),

  user: PropTypes.object.isRequired,
  serverDateTime: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
  serverDateTime: getServerDateTime(store),
});

export default connect(mapStateToProps, null)(TaskResult);
