import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { isCourseQuiz } from 'codechum-app-utils';
import { actionTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';
import styles from '../styles.module.scss';
import QuizCard from '../QuizCard';
import LessonCard from '../LessonCard';
import { lessonTypes } from '../constants';

const CourseObjectCard = ({
  courseObject,
  hasEvenPosition,
  actions,
  userType,
}) => {
  const containerStyle = hasEvenPosition
    ? styles.SectionCourseTimeline_lesson___even
    : styles.SectionCourseTimeline_lesson___odd;

  const lineStyle = hasEvenPosition
    ? styles.SectionCourseTimeline_horizontal___left
    : styles.SectionCourseTimeline_horizontal___right;

  return (
    <div className={cn(containerStyle, styles.SectionCourseTimeline_lesson)}>
      {isCourseQuiz(courseObject) ? (
        <QuizCard
          actions={actions}
          className={styles.SectionCourseTimeline_card}
          quiz={courseObject}
          type={
            courseObject.is_locked ? lessonTypes.LOCKED : lessonTypes.UNLOCKED
          }
          userType={userType}
        />
      ) : (
        <LessonCard
          actions={actions}
          className={styles.SectionCourseTimeline_card}
          lesson={courseObject}
          type={
            courseObject.is_locked ? lessonTypes.LOCKED : lessonTypes.UNLOCKED
          }
          userType={userType}
        />
      )}
      <div
        className={cn({
          [styles.SectionCourseTimeline_vertical___gray]:
            courseObject.is_locked === true,
          [styles.SectionCourseTimeline_vertical___blue]:
            courseObject.is_locked === false,
        })}
      />
      <div
        className={cn(
          {
            [styles.SectionCourseTimeline_horizontal___gray]:
              courseObject.is_locked === true,
            [styles.SectionCourseTimeline_horizontal___blue]:
              courseObject.is_locked === false,
          },
          lineStyle
        )}
      />
    </div>
  );
};

CourseObjectCard.propTypes = {
  courseObject: PropTypes.object.isRequired,

  // true if this course object appeared in an even
  // position from the list of course objects
  hasEvenPosition: PropTypes.bool.isRequired,

  actions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf([actionTypes.BUTTON, actionTypes.LINK]),
      action: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      text: PropTypes.string,
      disabled: PropTypes.bool,
    }).isRequired
  ),
  userType: PropTypes.oneOf([
    GLOBALS.USER_TYPES.STUDENT,
    GLOBALS.USER_TYPES.TEACHER,
  ]).isRequired,
};

export default CourseObjectCard;
