import React from 'react';
import PropTypes from 'prop-types';
import { isCourseQuiz } from 'codechum-app-utils';
import { actionTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';
import styles from '../styles.module.scss';

import LessonCard from '../LessonCard';
import QuizCard from '../QuizCard';
import lessonTypes from '../constants/lessonTypes';

const NextCourseObjectCard = ({ courseObject, actions, userType }) => (
  <div className={styles.SectionCourseTimeline_lesson___next}>
    {isCourseQuiz(courseObject) ? (
      <QuizCard
        actions={actions}
        className={styles.SectionCourseTimeline_card}
        quiz={courseObject}
        type={lessonTypes.NEXT}
        userType={userType}
      />
    ) : (
      <LessonCard
        actions={actions}
        className={styles.SectionCourseTimeline_card}
        lesson={courseObject}
        type={lessonTypes.NEXT}
        userType={userType}
      />
    )}
    <div className={styles.SectionCourseTimeline_vertical___blue} />
  </div>
);

NextCourseObjectCard.propTypes = {
  courseObject: PropTypes.object.isRequired,
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

export default NextCourseObjectCard;
