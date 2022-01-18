import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

import Complete from '../../static/images/Course/complete.png';
import Disassembled from '../../static/images/Course/disassembled.png';

import CourseObjectCard from './CourseObjectCard';
import NextCourseObjectCard from './NextCourseObjectCard';

const SectionCourseTimeline = ({
  introductionLink,
  summaryLink,
  unlockedCourseObjectsJsx,
  lockedCourseObjectsJsx,
  nextCourseObjectJsx,
}) => (
  <div className={styles.SectionCourseTimeline}>
    <div className={styles.SectionCourseTimeline_cody}>
      <Link
        className={styles.SectionCourseTimeline_cody_link}
        to={introductionLink}
      >
        <img
          alt="Cody disassembled"
          className={styles.SectionCourseTimeline_cody_image}
          src={Disassembled}
        />
      </Link>
    </div>

    {unlockedCourseObjectsJsx}
    {nextCourseObjectJsx}
    {lockedCourseObjectsJsx}

    <div className={styles.SectionCourseTimeline_cody}>
      <Link className={styles.SectionCourseTimeline_cody_link} to={summaryLink}>
        <img
          alt="Cody fixed"
          className={styles.SectionCourseTimeline_cody_image}
          src={Complete}
        />
      </Link>
      <div
        className={cn({
          [styles.SectionCourseTimeline_vertical___gray]:
            lockedCourseObjectsJsx.length > 0,
          [styles.SectionCourseTimeline_vertical___blue]:
            lockedCourseObjectsJsx.length === 0,
        })}
      />
    </div>
  </div>
);

SectionCourseTimeline.CourseObjectCard = CourseObjectCard;
SectionCourseTimeline.NextCourseObjectCard = NextCourseObjectCard;

SectionCourseTimeline.defaultProps = {
  nextCourseObjectJsx: null,
};

SectionCourseTimeline.propTypes = {
  introductionLink: PropTypes.string.isRequired,
  summaryLink: PropTypes.string.isRequired,

  unlockedCourseObjectsJsx: PropTypes.node.isRequired,

  // this may be null if all the course objects are
  // already unlocked
  nextCourseObjectJsx: PropTypes.node,
  lockedCourseObjectsJsx: PropTypes.node.isRequired,
};

export default SectionCourseTimeline;
