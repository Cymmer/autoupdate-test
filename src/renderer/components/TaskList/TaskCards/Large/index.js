import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cn from 'classnames';
import {
  getDuration,
  formatTaskSchedule,
  getRankProgress,
  getRankString,
  getPartsOfSeconds,
  determinePercentageColorHexCode,
  determinePercentageColorName,
} from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import {
  Card,
  Button,
  ButtonLink,
  Text,
  ActionsDropdown,
  SubInfo,
} from '../../../elements';

import {
  buttonTypes,
  textTypes,
  iconButtonTypes,
  actionTypes,
} from '../../../elements/constants';

import { InfoBars } from '../../..';

const generateTimeRemainingString = (totalSeconds) => {
  const { days, hours, minutes, seconds } = getPartsOfSeconds(totalSeconds);

  if (days > 0) {
    return `${days}d ${hours}h`;
  }

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }

  if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  }

  return `${seconds}s`;
};

const generateTeacherSubActions = ({
  setTaskToExtendDuration,
  setTaskToDelete,
  taskId,
}) =>
  [
    setTaskToExtendDuration
      ? {
          type: actionTypes.BUTTON,
          icon: 'alarm_add',
          text: 'Extend Time',
          action: setTaskToExtendDuration,
        }
      : null,
    {
      type: actionTypes.LINK,
      icon: 'play_arrow',
      text: 'Test Problems',
      action: `/teacher/test/${taskId}/question/1`,
    },
    setTaskToDelete
      ? {
          type: actionTypes.BUTTON,
          icon: 'delete',
          text: 'Delete',
          action: setTaskToDelete,
        }
      : null,
  ].filter((action) => action !== null);

const generateStudentSubActions = ({
  sectionId,
  isExamOngoing,
  taskWithDetails: {
    id: taskId,
    is_disabled: isDisabled,
    details: {
      has_submitted_result: hasSubmittedResult,
      is_exempted: isExempted,
    },
  },
}) =>
  hasSubmittedResult || isExempted
    ? [
        {
          type: actionTypes.LINK,
          icon: 'visibility',
          text: 'View Details',
          id: 'viewDetails',
          action: sectionId
            ? `/student/classes/${sectionId}/activities/${taskId}/problems`
            : `/student/activities/${taskId}/problems`,
        },

        {
          type: actionTypes.LINK,
          icon: 'replay',
          text: 'Review Activity',
          action:
            !isDisabled && !isExamOngoing
              ? `/student/review/${taskId}/question/1`
              : null,
          disabled: isDisabled || isExamOngoing,
        },
      ].filter((action) => action !== null)
    : [];

const TaskCardLarge = ({
  taskWithDetails,
  userType,
  setTaskToExtendDuration,
  setTaskToDelete,
  sectionId,
  viewLeaderboard,
  isExamOngoing,
}) => {
  const {
    id: taskId,
    name,
    section: { name: sectionName },
    programming_languages: programmingLanguages,
    start_time: startTime,
    end_time: endTime,
    time_before_start: timeBeforeStart,
    time_before_end: timeBeforeEnd,
    creator,
  } = taskWithDetails;
  const totalSecondsDuration = getDuration(timeBeforeStart, timeBeforeEnd);

  return (
    <Card className={styles.TaskCardLarge}>
      <div
        className={cn({
          [styles[
            `TaskCardLarge_accent___${determinePercentageColorName(
              timeBeforeEnd,
              totalSecondsDuration
            )}`
          ]]: timeBeforeStart <= 0,
          [styles.TaskCardLarge_accent___neutral]: timeBeforeStart > 0,
        })}
      />
      <div className={styles.TaskCardLarge_content}>
        <div className={styles.TaskCardLarge_info}>
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.HEADING.XS}
          >
            {name}
          </Text>
          <SubInfo
            className={styles.TaskCardLarge_subinfo}
            data={[
              {
                icon: 'school',
                text: sectionName,
              },
              {
                icon: 'code',
                text: programmingLanguages
                  .map((language) => language.name)
                  .join(', '),
              },
              {
                icon: 'access_time',
                text: formatTaskSchedule(moment(startTime), moment(endTime)),
              },
            ]}
          />
          <div className={styles.TaskCardLarge_data}>
            {userType === GLOBALS.USER_TYPES.STUDENT && (
              <StudentInfoBars taskWithDetails={taskWithDetails} />
            )}

            {(userType === GLOBALS.USER_TYPES.TEACHER ||
              userType === GLOBALS.USER_TYPES.MANAGER ||
              userType === GLOBALS.USER_TYPES.ADMIN) && (
              <TeacherInfoBars taskWithDetails={taskWithDetails} />
            )}
          </div>
        </div>
        <div className={styles.TaskCardLarge_buttonContainer}>
          {userType === GLOBALS.USER_TYPES.STUDENT && (
            <StudentMainButton
              taskWithDetails={taskWithDetails}
              viewLeaderboard={() => viewLeaderboard(taskWithDetails)}
            />
          )}

          {userType === GLOBALS.USER_TYPES.TEACHER && (
            <TeacherMainButton taskId={taskId} />
          )}

          {userType === GLOBALS.USER_TYPES.MANAGER && (
            <ManagerMainButton
              taskId={taskId}
              teacherId={creator.id}
              universityId={creator.university_id}
            />
          )}

          <ActionsDropdown
            actions={
              userType === GLOBALS.USER_TYPES.TEACHER ||
              userType === GLOBALS.USER_TYPES.MANAGER
                ? generateTeacherSubActions({
                    setTaskToExtendDuration,
                    setTaskToDelete,
                    taskId,
                  })
                : generateStudentSubActions({
                    isExamOngoing,
                    taskWithDetails,
                    sectionId,
                  })
            }
            className={styles.TaskCardLarge_buttonContainer_iconButton}
            iconButtonType={iconButtonTypes.OUTLINE.LG}
          />
        </div>
      </div>
    </Card>
  );
};

/* eslint-disable react/prop-types */
const TeacherInfoBars = ({
  taskWithDetails: {
    time_before_start: timeBeforeStart,
    time_before_end: timeBeforeEnd,
    max_score: maxScore,
    questions,
    details: {
      avg_problems_solved: averageProblemsSolved,
      avg_score: averageScore,
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
                averageProblemsSolved || 0,
                questions.length
              )
            : GLOBALS.COLOR_HEX_CODES.NEUTRAL['200']
        }
        label="Avg. Solved Problems"
        text={`${parseInt(averageProblemsSolved) || 0}/${questions.length}`}
        value={parseInt((averageProblemsSolved / questions.length) * 100)}
      />
      <InfoBars
        className={styles.TaskCardLarge_data_progressBar}
        colorHexCode={
          timeBeforeStart <= 0
            ? determinePercentageColorHexCode(averageScore || 0, maxScore)
            : GLOBALS.COLOR_HEX_CODES.NEUTRAL['200']
        }
        label="Avg. Overall Score"
        text={`${parseInt(averageScore) || 0}/${maxScore}`}
        value={parseInt((averageScore / maxScore) * 100)}
      />
    </>
  );
};

/* eslint-disable react/prop-types */
const TeacherMainButton = ({ taskId }) => (
  <ButtonLink
    className={styles.TaskCardLarge_buttonContainer_button}
    id="viewDetails"
    to={`/teacher/activities/${taskId}/takers`}
    type={buttonTypes.PRIMARY.BLUE}
  >
    View Details
  </ButtonLink>
);

/* eslint-disable react/prop-types */
const ManagerMainButton = ({ universityId, teacherId, taskId }) => (
  <ButtonLink
    className={styles.TaskCardLarge_buttonContainer_button}
    id="viewDetails"
    to={`/teacher/university/${universityId}/teachers/${teacherId}/activities/${taskId}/takers`}
    type={buttonTypes.PRIMARY.BLUE}
  >
    View Details
  </ButtonLink>
);

/* eslint-disable react/prop-types */
const StudentInfoBars = ({
  taskWithDetails: {
    time_before_start: timeBeforeStart,
    time_before_end: timeBeforeEnd,
    max_score: maxScore,
    questions,
    details: {
      problems_solved: problemsSolved,
      is_exempted: isExempted,
      rank,
      score,
      max_rank: maxRank,
    },
  },
}) => {
  const totalSecondsDuration = getDuration(timeBeforeStart, timeBeforeEnd);
  const actualRank = rank || maxRank;

  return (
    <>
      {timeBeforeStart <= 0 && (
        <InfoBars
          className={styles.TaskCardLarge_data_progressBar}
          colorHexCode={determinePercentageColorHexCode(
            timeBeforeEnd,
            totalSecondsDuration
          )}
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
                isExempted ? questions.length : problemsSolved || 0,
                questions.length
              )
            : GLOBALS.COLOR_HEX_CODES.NEUTRAL['200']
        }
        label="Solved Problems"
        text={
          isExempted
            ? `${questions.length}/${questions.length}`
            : `${problemsSolved || 0}/${questions.length}`
        }
        value={
          isExempted ? 100 : parseInt((problemsSolved / questions.length) * 100)
        }
      />
      <InfoBars
        className={styles.TaskCardLarge_data_progressBar}
        colorHexCode={
          timeBeforeStart <= 0
            ? determinePercentageColorHexCode(
                isExempted ? maxScore : parseInt(score) || 0,
                maxScore
              )
            : GLOBALS.COLOR_HEX_CODES.NEUTRAL['200']
        }
        label="Overall Score"
        text={
          isExempted
            ? `${maxScore}/${maxScore}`
            : `${parseInt(score) || 0}/${maxScore}`
        }
        value={isExempted ? 100 : parseInt((parseInt(score) / maxScore) * 100)}
      />
      <InfoBars
        className={styles.TaskCardLarge_data_progressBar}
        colorHexCode={
          timeBeforeStart <= 0 && !isExempted
            ? determinePercentageColorHexCode(maxRank + 1 - actualRank, maxRank)
            : GLOBALS.COLOR_HEX_CODES.NEUTRAL['200']
        }
        label="Current Rank"
        text={isExempted ? 'Exempt' : getRankString(actualRank)}
        value={isExempted ? 0 : getRankProgress(actualRank, maxRank)}
      />
    </>
  );
};

/* eslint-disable react/prop-types */
const StudentMainButton = ({
  taskWithDetails: {
    id: taskId,
    time_before_start: timeBeforeStart,
    is_leaderboard_hidden: isLeaderboardHidden,
    details: {
      has_result: hasResult,
      has_submitted_result: hasSubmittedResult,
      is_exempted: isExempted,
    },
  },
  viewLeaderboard,
}) => {
  // student hasn't started answering yet and is not exempted
  if (!hasResult && !isExempted) {
    return (
      <ButtonLink
        className={styles.TaskCardLarge_buttonContainer_button}
        disabled={timeBeforeStart > 0}
        to={`/student/answer/${taskId}/question/1`}
        type={buttonTypes.PRIMARY.BLUE}
      >
        Start Activity
      </ButtonLink>
    );
  }

  // student has already started answering and has submitted his answers
  // or is exempted from the activity
  if (hasSubmittedResult || isExempted) {
    return (
      <Button
        className={styles.TaskCardLarge_buttonContainer_button}
        disabled={isLeaderboardHidden === true}
        type={buttonTypes.PRIMARY.BLUE}
        onClick={!isLeaderboardHidden ? viewLeaderboard : () => {}}
      >
        View Leaderboard
      </Button>
    );
  }

  // student has already started answering but hasn't submitted yet
  return (
    <ButtonLink
      className={styles.TaskCardLarge_buttonContainer_button}
      to={`/student/answer/${taskId}/question/1`}
      type={buttonTypes.PRIMARY.BLUE}
    >
      Continue Activity
    </ButtonLink>
  );
};

TaskCardLarge.defaultProps = {
  setTaskToExtendDuration: null,
  setTaskToDelete: null,
  sectionId: null,
  viewLeaderboard: () => {},
  isExamOngoing: false,
};

TaskCardLarge.propTypes = {
  // task object from List Tasks API with associated
  // details from List Student Tasks API or
  // List Teachers API depending on the userType
  taskWithDetails: PropTypes.oneOfType([PropTypes.object]).isRequired,

  // the type of user this card is for
  userType: PropTypes.oneOf([
    GLOBALS.USER_TYPES.STUDENT,
    GLOBALS.USER_TYPES.TEACHER,
    GLOBALS.USER_TYPES.MANAGER,
    GLOBALS.USER_TYPES.ADMIN,
  ]).isRequired,

  // toggles the extend duration modal for this task
  setTaskToExtendDuration: PropTypes.func,

  // toggles the delete modal for this task
  setTaskToDelete: PropTypes.func,

  // if this ProblemCard was rendered in a "Section context" (i.e. from a
  // View Section), then it'll have the id of that section in its props
  sectionId: PropTypes.number,

  // opens the leaderboard modal for this task
  viewLeaderboard: PropTypes.func,

  // true if there's currently an exam ongoing
  isExamOngoing: PropTypes.bool,
};

export default TaskCardLarge;
