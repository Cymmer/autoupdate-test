import { ActionsDropdown, ButtonLink } from 'components/elements';
import {
  actionTypes,
  buttonTypes,
  iconButtonTypes,
} from 'components/elements/constants';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { STUDENT_ROUTES } from 'screen-wrappers/Student/constants';
import { MixpanelTrackService } from 'services';
import { isResultSubmitted } from 'utils/results';
import TaskCardLargeV4 from '../index';
import styles from '../styles.module.scss';
import StudentInfoBars from './InfoBars';

const TaskCardLargeV4Student = ({ task }) => {
  const history = useHistory();

  const viewClassLink = task.section.id
    ? `${STUDENT_ROUTES.CLASSES}/${task.section.id}/activities/${task.id}/problems`
    : `${STUDENT_ROUTES.ACTIVITIES}/${task.id}/problems`;

  return (
    <TaskCardLargeV4
      actionsDropdown={
        <ActionsDropdown
          actions={
            isResultSubmitted(task.analytics.result) ||
            task.analytics.result?.exempted
              ? [
                  {
                    type: actionTypes.BUTTON,
                    icon: 'replay',
                    text: 'Review Activity',
                    action: async () => {
                      await MixpanelTrackService.create({
                        body: {
                          event_name: 'Review Button (Ongoing Activity)',
                          event_properties: {
                            'Task ID': task.id,
                          },
                        },
                      });
                      if (!task.is_disabled) {
                        history.push(`/student/review/${task.id}/question/1`);
                      }
                    },
                    disabled: task.is_disabled,
                  },
                ]
              : []
          }
          className={styles.TaskCardLarge_buttonContainer_iconButton}
          iconButtonType={iconButtonTypes.OUTLINE.LG}
          id="taskCardActions"
        />
      }
      data-test="taskCard"
      infoBars={<StudentInfoBars task={task} />}
      mainButton={(() => {
        // student hasn't started answering yet and is not exempted
        if (!task.analytics.result) {
          return (
            <ButtonLink
              className={styles.TaskCardLarge_buttonContainer_button}
              disabled={task.time_before_start > 0}
              to={`/student/answer/${task.id}/question/1`}
              type={buttonTypes.PRIMARY.BLUE}
            >
              Start Activity
            </ButtonLink>
          );
        }

        // student has already started answering and has submitted his answers
        // or is exempted from the activity
        if (
          isResultSubmitted(task.analytics.result) ||
          task.analytics.result.exempted
        ) {
          return (
            <ButtonLink
              className={styles.TaskCardLarge_buttonContainer_button}
              to={viewClassLink}
              type={buttonTypes.PRIMARY.BLUE}
            >
              View Activity
            </ButtonLink>
          );
        }

        // student has already started answering but hasn't submitted yet
        return (
          <ButtonLink
            className={styles.TaskCardLarge_buttonContainer_button}
            to={`/student/answer/${task.id}/question/1`}
            type={buttonTypes.PRIMARY.BLUE}
          >
            Continue Activity
          </ButtonLink>
        );
      })()}
      task={task}
    />
  );
};

TaskCardLargeV4Student.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    section: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    programming_languages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
    max_score: PropTypes.number.isRequired,
    time_before_start: PropTypes.number,
    time_before_end: PropTypes.number,
    is_disabled: PropTypes.bool.isRequired,
    is_leaderboard_hidden: PropTypes.bool.isRequired,
    is_delayed_grading: PropTypes.bool.isRequired,
    analytics: PropTypes.shape({
      result: PropTypes.shape({
        id: PropTypes.number.isRequired,
        datetime_submitted: PropTypes.string,
        exempted: PropTypes.bool.isRequired,
        score: PropTypes.string,
      }),
      max_rank: PropTypes.number.isRequired,
      rank: PropTypes.number,
      questions_count: PropTypes.number.isRequired,
      problems_solved: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default TaskCardLargeV4Student;
