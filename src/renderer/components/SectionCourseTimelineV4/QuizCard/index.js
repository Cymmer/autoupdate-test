import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cn from 'classnames';
import { generateTaskDurationString } from 'codechum-app-utils';
import { MixpanelTrackService } from 'services';

import { Card, Text, ButtonLink, Button, Tooltip } from 'components/elements';
import {
  textTypes,
  buttonTypes,
  actionTypes,
} from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';
import styles from '../lesson.module.scss';

import lessonTypes from '../constants/lessonTypes';

const determineButtonType = (type, text) => {
  switch (type) {
    case lessonTypes.LOCKED:
      return buttonTypes.TERTIARY;
    case lessonTypes.UNLOCKED:
      return buttonTypes.SECONDARY.BLUE;
    case lessonTypes.NEXT:
      return text === 'Start Quiz'
        ? buttonTypes.PRIMARY.GREEN
        : buttonTypes.SECONDARY.GREEN;
    default:
      return buttonTypes.TERTIARY;
  }
};

const QuizCard = ({
  className,
  type,
  quiz: {
    id,
    course_data_id: courseDataId,
    task: {
      name,
      start_time: startTime,
      end_time: endTime,
      max_score: maxScore,
      questions_count: questionsCount,
    },
  },
  actions,
  userType,
}) => (
  <Card className={cn(className, styles[`LessonCard___${type}`])}>
    <div className={styles[`LessonCard___${type}_accent`]} />
    <div className={styles[`LessonCard___${type}_content___quiz`]}>
      <div>
        <Text
          className={styles.LessonCard_title}
          colorClass={
            type === lessonTypes.LOCKED
              ? GLOBALS.COLOR_CLASSES.NEUTRAL['500']
              : GLOBALS.COLOR_CLASSES.NEUTRAL['700']
          }
          type={
            type === lessonTypes.NEXT
              ? textTypes.HEADING.XS
              : textTypes.HEADING.XXS
          }
        >
          {name}
        </Text>
        <Text
          colorClass={
            type === lessonTypes.LOCKED
              ? GLOBALS.COLOR_CLASSES.NEUTRAL['400']
              : GLOBALS.COLOR_CLASSES.NEUTRAL['500']
          }
          type={textTypes.BODY.SM}
        >
          {[
            startTime
              ? generateTaskDurationString(moment(startTime), moment(endTime))
              : null,
            `Max Score: ${maxScore}pts`,
            `${questionsCount} Item${questionsCount !== 1 ? 's' : ''}`,
          ]
            .filter((val) => val !== null)
            .join(' · ')}
        </Text>
      </div>
      <div
        className={cn({
          [styles.LessonCard_buttonContainer]: actions.length === 1,
          [styles.LessonCard_buttonContainer___multiple]: actions.length === 2,
        })}
      >
        {actions.map((action, index) => {
          const buttonProps = {
            type: determineButtonType(type, action.text),
            className: styles.LessonCard_buttonContainer_button,
            onClick: async () => {
              action.action();

              if (userType === GLOBALS.USER_TYPES.STUDENT) {
                await MixpanelTrackService.create({
                  body: {
                    event_name: `Clicked ${action.text}`,
                    event_properties: {
                      'Course Data ID': courseDataId,
                      'Course Object ID': id,
                    },
                  },
                });
              }
            },
            disabled: action.disabled,
          };

          return (
            <Fragment key={index}>
              {action.type === actionTypes.BUTTON && (
                <>
                  {action.tooltip ? (
                    <Tooltip content={action.tooltip}>
                      <Button {...buttonProps}>{action.text}</Button>
                    </Tooltip>
                  ) : (
                    <Button {...buttonProps}>{action.text}</Button>
                  )}
                </>
              )}

              {action.type === actionTypes.LINK && (
                <>
                  {action.tooltip ? (
                    <Tooltip content={action.tooltip}>
                      <ButtonLink {...buttonProps}>{action.text}</ButtonLink>
                    </Tooltip>
                  ) : (
                    <ButtonLink {...buttonProps}>{action.text}</ButtonLink>
                  )}
                </>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  </Card>
);

QuizCard.defaultProps = {
  className: null,
};

QuizCard.propTypes = {
  quiz: PropTypes.shape({
    id: PropTypes.number.isRequired,
    course_data_id: PropTypes.number.isRequired,
    task: PropTypes.shape({
      name: PropTypes.string.isRequired,
      start_time: PropTypes.string,
      end_time: PropTypes.string,
      max_score: PropTypes.number.isRequired,
      questions_count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,

  type: PropTypes.oneOf([
    lessonTypes.LOCKED,
    lessonTypes.UNLOCKED,
    lessonTypes.NEXT,
  ]).isRequired,

  className: PropTypes.string,

  actions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf([actionTypes.BUTTON, actionTypes.LINK]),
      action: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      text: PropTypes.string,
      tooltip: PropTypes.string,
      disabled: PropTypes.bool,
    }).isRequired
  ),
  userType: PropTypes.oneOf([
    GLOBALS.USER_TYPES.STUDENT,
    GLOBALS.USER_TYPES.TEACHER,
  ]).isRequired,
};

export default QuizCard;
