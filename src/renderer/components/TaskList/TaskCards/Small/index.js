import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import moment from 'moment';
import {
  formatTaskSchedule,
  determinePercentageColorName,
} from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import {
  Card,
  IconButton,
  Text,
  Data,
  Tooltip,
  IconLink,
} from '../../../elements';

import {
  textTypes,
  iconButtonTypes,
  tooltipPlacement,
} from '../../../elements/constants';

const TaskCardSmall = ({
  id,
  taskWithDetails,
  userType,
  link,
  viewLeaderboard,
  isExamOngoing,
}) => {
  const {
    name,
    is_disabled: isDisabled,
    start_time: startTime,
    end_time: endTime,
    is_leaderboard_hidden: isLeaderboardHidden,
    section: { name: sectionName } = {},
  } = taskWithDetails;

  return (
    <Card className={styles.TaskCardSmall} id={id}>
      <Link className={styles.TaskCardSmall_link} to={link}>
        {userType === GLOBALS.USER_TYPES.STUDENT && (
          <StudentSideData taskWithDetails={taskWithDetails} />
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
          <Tooltip content="Review" placement={tooltipPlacement.BOTTOM}>
            <IconLink
              className={styles.TaskCardSmall_buttonContainer_button}
              disabled={!isDisabled || !isExamOngoing}
              icon="replay"
              to={
                !isDisabled && !isExamOngoing
                  ? `/student/review/${taskWithDetails.id}/question/1`
                  : '#'
              }
            />
          </Tooltip>

          <Tooltip
            content="View Leaderboard"
            placement={tooltipPlacement.BOTTOM}
          >
            <IconButton
              className={styles.TaskCardSmall_buttonContainer_button}
              disabled={isLeaderboardHidden === true}
              icon="assessment"
              iconButtonTypes={iconButtonTypes.SOLID.SM}
              onClick={(e) => {
                e.stopPropagation();
                if (!isLeaderboardHidden) {
                  viewLeaderboard(taskWithDetails);
                }
              }}
            />
          </Tooltip>
        </div>
      )}
    </Card>
  );
};

/* eslint-disable react/prop-types */
const StudentSideData = ({
  taskWithDetails: {
    max_score: maxScore,
    details: { score },
  },
}) => (
  <div
    className={
      styles[
        `TaskCardSmall_accent___${determinePercentageColorName(
          parseInt(score),
          maxScore
        )}`
      ]
    }
  >
    <Data
      className={styles.TaskCardSmall_data}
      colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['0']}
      label="Score"
      labelColorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['0']}
    >
      {parseInt(score) || 0}/{maxScore}
    </Data>
  </div>
);

TaskCardSmall.defaultProps = {
  id: null,
  viewLeaderboard: () => {},
  isExamOngoing: false,
};

TaskCardSmall.propTypes = {
  id: PropTypes.string,
  // task object from List Tasks API
  // details from List Student Tasks API
  taskWithDetails: PropTypes.oneOfType([PropTypes.object]).isRequired,

  // the type of user this card is for
  userType: PropTypes.oneOf([
    GLOBALS.USER_TYPES.STUDENT,
    GLOBALS.USER_TYPES.TEACHER,
  ]).isRequired,

  // the link where the user will be redirected when this is clicked
  link: PropTypes.string.isRequired,

  // opens the leaderboard modal for this task
  viewLeaderboard: PropTypes.func,

  // true if there's currently an exam ongoing
  isExamOngoing: PropTypes.bool,
};

export default TaskCardSmall;
