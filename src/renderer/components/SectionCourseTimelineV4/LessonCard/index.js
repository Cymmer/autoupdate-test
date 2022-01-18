import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { MixpanelTrackService } from 'services';

import {
  Card,
  Text,
  Span,
  ButtonLink,
  Button,
  Tooltip,
} from 'components/elements';
import {
  textTypes,
  buttonTypes,
  actionTypes,
} from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';
import styles from '../lesson.module.scss';

import lessonTypes from '../constants/lessonTypes';
import LessonImage from './Image';

const determineButtonType = (type, text) => {
  switch (type) {
    case lessonTypes.LOCKED:
      return buttonTypes.TERTIARY;
    case lessonTypes.UNLOCKED:
      return buttonTypes.SECONDARY.BLUE;
    case lessonTypes.NEXT:
      return text === 'Unlock Lesson'
        ? buttonTypes.PRIMARY.GREEN
        : buttonTypes.SECONDARY.GREEN;
    default:
      return buttonTypes.TERTIARY;
  }
};

const determineTopicText = (itemsCount) =>
  `${itemsCount} Topic${itemsCount !== 1 ? 's' : ''}`;

const LessonCard = ({
  className,
  type,
  lesson: {
    id,
    course_data_id: courseDataId,
    title,
    short_description: shortDescription,
    items_count: itemsCount,
    lesson_image: lessonImage,
    students_progress: studentsProgress,
    is_finished: isFinished,
  },
  actions,
  userType,
}) => (
  <Card className={cn(className, styles[`LessonCard___${type}`])}>
    <LessonImage
      className={styles[`LessonCard___${type}_image`]}
      colorName={
        type !== lessonTypes.LOCKED
          ? GLOBALS.COLOR_NAMES.BLUE
          : GLOBALS.COLOR_NAMES.GRAY
      }
      image={lessonImage}
    />
    <div className={styles[`LessonCard___${type}_content___lesson`]}>
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
          {title}
        </Text>
        <Text
          colorClass={
            type === lessonTypes.LOCKED
              ? GLOBALS.COLOR_CLASSES.NEUTRAL['400']
              : GLOBALS.COLOR_CLASSES.NEUTRAL['500']
          }
          type={textTypes.BODY.SM}
        >
          {`${shortDescription} ${
            type !== lessonTypes.NEXT
              ? `· ${determineTopicText(itemsCount)}`
              : ''
          }`}
        </Text>
        {type === lessonTypes.NEXT && (
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
            type={textTypes.BODY.SM}
          >
            {determineTopicText(itemsCount)}
          </Text>
        )}
        {isFinished && (
          <div
            className={styles.LessonCard_finished_container}
            data-test="finishedTag"
          >
            <Span className={styles.LessonCard_finished}>Completed</Span>
          </div>
        )}
        {type === lessonTypes.UNLOCKED && studentsProgress != null && (
          <Text
            className={styles.LessonCard_progress}
            colorClass={
              studentsProgress.finished_count ===
              studentsProgress.total_students
                ? GLOBALS.COLOR_CLASSES.GREEN['300']
                : GLOBALS.COLOR_CLASSES.BLUE['300']
            }
            type={textTypes.BODY.SM}
          >
            <Span type={textTypes.DATA.SM}>
              {parseInt(
                (studentsProgress.finished_count /
                  studentsProgress.total_students) *
                  100
              )}
              %
            </Span>{' '}
            of students have finished
          </Text>
        )}
      </div>
      <div
        className={cn({
          [styles.LessonCard_buttonContainer]: actions.length === 1,
          [styles.LessonCard_buttonContainer___multiple]: actions.length === 2,
        })}
      >
        {actions.map((action, index) => {
          const buttonProps = {
            innerRef: action.ref,
            type: determineButtonType(type, action.text),
            className: cn(styles.LessonCard_buttonContainer_button, {
              [styles.LessonCard_buttonContainer_button___active_onboarding]:
                action?.isActiveOnboarding,
            }),
            onClick: async () => {
              action.action();

              if (userType === GLOBALS.USER_TYPES.STUDENT) {
                await MixpanelTrackService.create({
                  body: {
                    event_name: `Clicked View Lesson (${
                      isFinished
                        ? 'Already completed by the student'
                        : 'Not completed by the student'
                    })`,
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

LessonCard.defaultProps = {
  className: null,
};

LessonCard.propTypes = {
  lesson: PropTypes.object.isRequired,

  type: PropTypes.oneOf([
    lessonTypes.LOCKED,
    lessonTypes.UNLOCKED,
    lessonTypes.NEXT,
  ]).isRequired,

  className: PropTypes.string,

  actions: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.object,
      type: PropTypes.oneOf([actionTypes.BUTTON, actionTypes.LINK]),
      action: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      text: PropTypes.string,
      tooltip: PropTypes.string,
      disabled: PropTypes.bool,
      isActiveOnboarding: PropTypes.bool,
    }).isRequired
  ),
  userType: PropTypes.oneOf([
    GLOBALS.USER_TYPES.STUDENT,
    GLOBALS.USER_TYPES.TEACHER,
  ]).isRequired,
};

export default LessonCard;
