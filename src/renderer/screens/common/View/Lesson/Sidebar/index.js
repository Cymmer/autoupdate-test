import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { IconButton, Text } from 'components/elements';
import { iconButtonTypes, textTypes } from 'components/elements/constants';

import { useOnClickOutside, useWindowDimensions } from 'hooks';

import styles from './styles.module.scss';

import LessonObject from './LessonObject';

const Sidebar = ({
  toggleSidebar,
  isSidebarToggled,
  lessonObjectsJsx,
  totalLessonObjects,
  activeLessonObject,
  lessonObjectStatuses,
}) => {
  const ref = useRef();
  useOnClickOutside(ref, () => toggleSidebar(false));
  const { height: windowHeight } = useWindowDimensions();

  const lessonObjectHeight = (windowHeight - 160) / 12;
  const totalLineHeight = totalLessonObjects * lessonObjectHeight;

  // current is an abstract prop:
  // 1) for progressHeightPercentage it means where the user is currently
  // 2) for finishedHeightPercentage it means what the user has already unlocked
  const getLineHeight = (current) =>
    `${(current - 1) * (totalLineHeight / (totalLessonObjects - 1))}px`;

  return (
    <div
      ref={ref}
      className={cn({
        [styles.Sidebar]: !isSidebarToggled,
        [styles.Sidebar___toggled]: isSidebarToggled,
      })}
    >
      <div className={styles.Sidebar_toggle}>
        {isSidebarToggled && (
          <Text type={textTypes.HEADING.XXXS}>Lesson Overview</Text>
        )}
        <IconButton
          icon="list"
          type={iconButtonTypes.SOLID.LG}
          onClick={() => toggleSidebar(!isSidebarToggled)}
        />
      </div>

      <div className={styles.Sidebar_lessonsContainer}>
        <div
          className={styles.Sidebar_lessons}
          style={{
            height: `${totalLineHeight}px`,
          }}
        >
          {lessonObjectsJsx}
          <span
            className={styles.Sidebar_line___progress}
            style={{
              height: getLineHeight(activeLessonObject.order),
            }}
          />
          <span
            className={styles.Sidebar_line___finished}
            style={{
              height: lessonObjectStatuses
                ? getLineHeight(Object.keys(lessonObjectStatuses).length)
                : `${totalLineHeight}px`,
            }}
          />
          <span
            className={styles.Sidebar_line___total}
            style={{ height: `${totalLineHeight}px` }}
          />
        </div>
      </div>
    </div>
  );
};

Sidebar.LessonObject = LessonObject;

Sidebar.defaultProps = {
  lessonObjectStatuses: null,
};

Sidebar.propTypes = {
  // toggles the sidebar
  toggleSidebar: PropTypes.func.isRequired,

  // if true, the sidebar is toggled (shown)
  isSidebarToggled: PropTypes.bool.isRequired,

  // an array of LessonObjects (Topics and/or LessonTasks)
  // of the current lesson being viewed
  lessonObjectsJsx: PropTypes.arrayOf(PropTypes.object),

  // the max number of LessonObjects of all the Lessons
  totalLessonObjects: PropTypes.number.isRequired,

  lessonObjectStatuses: PropTypes.array,
  activeLessonObject: PropTypes.object,
};

export default Sidebar;
