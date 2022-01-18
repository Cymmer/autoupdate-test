import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { Icon } from '../../../../../../components/elements';

const LessonObject = ({
  link,
  text,
  type,
  state,
  isActive,
  isShapeFilled,
  isToggled,
}) => (
  <Link
    className={cn({
      [styles.LessonObject]: !isToggled,
      [styles.LessonObject___toggled]: isToggled,
      [styles.LessonObject___locked]:
        state === GLOBALS.LESSON_OBJECT_STATES.LOCKED,
    })}
    to={link}
  >
    <div
      className={cn(styles.LessonObject_topic, {
        [styles.LessonObject_topic___active]: isActive,
      })}
    >
      {state === GLOBALS.LESSON_OBJECT_STATES.LOCKED && (
        <Icon className={styles.LessonObject_lock} icon="lock" />
      )}
      <span>{text}</span>
    </div>

    {type === GLOBALS.LESSON_OBJECT_TYPES.TOPIC && (
      <svg height="20" width="20">
        <circle
          className={cn({
            [styles.LessonObject_shape___locked]:
              state === GLOBALS.LESSON_OBJECT_STATES.LOCKED,
            [styles.LessonObject_shape___unlocked]:
              state === GLOBALS.LESSON_OBJECT_STATES.UNLOCKED && !isShapeFilled,
            [styles.LessonObject_shape___active]:
              state === GLOBALS.LESSON_OBJECT_STATES.UNLOCKED && isShapeFilled,
          })}
          cx="10"
          cy="10"
          r="10"
        />
      </svg>
    )}

    {type === GLOBALS.LESSON_OBJECT_TYPES.ACTIVITY && (
      <svg height="20" style={{ transform: 'rotate(45deg)' }} width="20">
        <rect
          className={cn({
            [styles.LessonObject_shape___locked]:
              state === GLOBALS.LESSON_OBJECT_STATES.LOCKED,
            [styles.LessonObject_shape___unlocked]:
              state === GLOBALS.LESSON_OBJECT_STATES.UNLOCKED && !isShapeFilled,
            [styles.LessonObject_shape___active]:
              state === GLOBALS.LESSON_OBJECT_STATES.UNLOCKED && isShapeFilled,
          })}
          height="20"
          width="20"
        />
      </svg>
    )}

    {type === GLOBALS.LESSON_OBJECT_TYPES.SUMMARY && (
      <svg height="20" width="20">
        <circle
          className={cn({
            [styles.LessonObject_shape___locked]:
              state === GLOBALS.LESSON_OBJECT_STATES.LOCKED,
            [styles.LessonObject_shape___unlocked]:
              state === GLOBALS.LESSON_OBJECT_STATES.UNLOCKED && !isShapeFilled,
            [styles.LessonObject_shape___active]:
              state === GLOBALS.LESSON_OBJECT_STATES.UNLOCKED && isShapeFilled,
          })}
          cx="10"
          cy="10"
          r="10"
        />
        <circle
          className={cn(styles.LessonObject_shape_stroke, {
            [styles.LessonObject_shape___locked]:
              state === GLOBALS.LESSON_OBJECT_STATES.LOCKED,
            [styles.LessonObject_shape___unlocked]:
              state === GLOBALS.LESSON_OBJECT_STATES.UNLOCKED && !isShapeFilled,
            [styles.LessonObject_shape___active]:
              state === GLOBALS.LESSON_OBJECT_STATES.UNLOCKED && isShapeFilled,
          })}
          cx="10"
          cy="10"
          r="6"
          strokeWidth="2"
        />
      </svg>
    )}
  </Link>
);

LessonObject.propTypes = {
  link: PropTypes.string.isRequired,

  text: PropTypes.string.isRequired,

  // determines the shape of the marker
  type: PropTypes.oneOf([
    GLOBALS.LESSON_OBJECT_TYPES.SUMMARY,
    GLOBALS.LESSON_OBJECT_TYPES.TOPIC,
    GLOBALS.LESSON_OBJECT_TYPES.ACTIVITY,
  ]),

  // determines whether you can press the link or not
  state: PropTypes.oneOf([
    GLOBALS.LESSON_OBJECT_STATES.LOCKED,
    GLOBALS.LESSON_OBJECT_STATES.UNLOCKED,
  ]),

  // true if this is the currently active lesson object
  isActive: PropTypes.bool.isRequired,

  // if true, the shape is filled with the color
  isShapeFilled: PropTypes.bool.isRequired,

  // true if the sidebar is toggled (shown)
  isToggled: PropTypes.bool.isRequired,
};

export default LessonObject;
