import React from 'react';
import PropTypes from 'prop-types';
import { formatSectionSchedule, formatTeacherName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { CardLink, Text } from '../../../elements';
import { textTypes } from '../../../elements/constants';

import sectionIcons from '../../constants/sectionIcons';
import sectionColors from '../../constants/sectionColors';
import sectionListTypes from '../../constants/sectionListTypes';

import SectionImage from '../Image';

const SectionCardSmall = ({
  link,
  userType,
  section: {
    name,
    icon,
    color,
    schedules,
    course: { code: courseCode },
    teacher,
  },
}) => (
  <CardLink className={styles.SectionCardSmall} to={link}>
    <SectionImage
      className={styles.SectionCardSmall_image}
      color={
        color
          ? sectionColors[
              [...Object.keys(sectionColors)].find(
                (c) => sectionColors[c].value === color
              )
            ]
          : sectionColors.GREEN
      }
      icon={
        icon
          ? sectionIcons[
              [...Object.keys(sectionIcons)].find(
                (i) => sectionIcons[i].value === icon
              )
            ]
          : sectionIcons.CODY
      }
      size={sectionListTypes.SMALL}
    />
    <div className={styles.SectionCardSmall_info}>
      <Text
        className={styles.SectionCardLarge_title}
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
        type={textTypes.HEADING.XS}
      >
        {name}
      </Text>
      <Text
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['300']}
        type={textTypes.BODY.SM}
      >
        {userType === GLOBALS.USER_TYPES.STUDENT
          ? courseCode.concat(' · ', formatTeacherName(teacher))
          : courseCode.concat(' · ', formatSectionSchedule(schedules))}
      </Text>
    </div>
  </CardLink>
);

SectionCardSmall.propTypes = {
  // the link after this card is clicked
  link: PropTypes.string.isRequired,

  // the type of user this card is for
  userType: PropTypes.oneOf(Object.values(GLOBALS.USER_TYPES)).isRequired,

  // section object from List Sections API
  section: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default SectionCardSmall;
