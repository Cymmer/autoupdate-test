import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cn from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatTaskSchedule, isFeatureLocked } from 'codechum-app-utils';
import { MixpanelTrackService } from 'services';
import { getServerDateTime, getUser } from 'ducks';
import { Card, IconLink, Text, Tooltip } from 'components/elements';
import { textTypes, tooltipPlacement } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';
import StudentSideData from './StudentSideData';

const TaskCardSmall = ({ link, userType, task, user, serverDateTime }) => {
  const {
    id,
    name,
    start_time: startTime,
    end_time: endTime,
    is_disabled: isDisabled,
    section: { name: sectionName },
    max_score: maxScore,
    analytics: { result },
  } = task;

  const isReviewTaskLocked = isFeatureLocked(
    GLOBALS.USER_FEATURES.REVIEW_TASK,
    user,
    serverDateTime
  );

  return (
    <Card className={styles.TaskCardSmall}>
      <Link className={styles.TaskCardSmall_link} to={link}>
        {userType === GLOBALS.USER_TYPES.STUDENT && (
          <StudentSideData
            maxScore={maxScore}
            score={parseInt(result?.score || 0)}
          />
        )}

        <div
          className={cn({
            [styles.TaskCardSmall_content___student]:
              userType === GLOBALS.USER_TYPES.STUDENT,
            [styles.TaskCardSmall_content___teacher]:
              userType === GLOBALS.USER_TYPES.TEACHER,
          })}
        >
          <div>
            <Text
              className={styles.TaskCardSmall_title}
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
              type={textTypes.HEADING.XXS}
            >
              {name}
            </Text>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
              type={textTypes.BODY.SM}
            >
              {formatTaskSchedule(moment(startTime), moment(endTime))}
              {userType === GLOBALS.USER_TYPES.TEACHER && ` · ${sectionName}`}
            </Text>
          </div>
        </div>
      </Link>

      {userType === GLOBALS.USER_TYPES.STUDENT && (
        <div className={styles.TaskCardSmall_buttonContainer}>
          {(() => {
            const reviewTaskLink = (
              <IconLink
                className={styles.TaskCardSmall_buttonContainer_button}
                data-test="reviewTaskButton"
                disabled={isDisabled}
                icon="replay"
                isLocked={isReviewTaskLocked}
                to={!isDisabled ? `/student/review/${id}/question/1` : '#'}
                onClick={async () => {
                  await MixpanelTrackService.create({
                    body: {
                      event_name: 'Review Button (Previous Activity)',
                      event_properties: {
                        'Task ID': task.id,
                      },
                    },
                  });
                }}
              />
            );
            if (!isReviewTaskLocked) {
              return (
                <Tooltip
                  content="Review"
                  data-test="reviewTaskButtonTooltip"
                  placement={tooltipPlacement.BOTTOM}
                >
                  {reviewTaskLink}
                </Tooltip>
              );
            }

            return reviewTaskLink;
          })()}
        </div>
      )}
    </Card>
  );
};

TaskCardSmall.propTypes = {
  // the link when this card is clicked
  link: PropTypes.string.isRequired,

  userType: PropTypes.oneOf([
    GLOBALS.USER_TYPES.STUDENT,
    GLOBALS.USER_TYPES.TEACHER,
  ]).isRequired,

  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    is_leaderboard_hidden: PropTypes.bool.isRequired,
    is_disabled: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    section: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    max_score: PropTypes.number,
    analytics: PropTypes.shape({
      avg_score: PropTypes.number,
      result: PropTypes.shape({
        score: PropTypes.string,
      }),
    }),
  }).isRequired,

  // this will only have a value if user type is student
  viewLeaderboard: PropTypes.func,

  user: PropTypes.oneOfType([PropTypes.object]).isRequired,
  serverDateTime: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
  serverDateTime: getServerDateTime(store),
});

export default connect(mapStateToProps, null)(TaskCardSmall);
