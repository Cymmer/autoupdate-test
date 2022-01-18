import React from 'react';
import PropTypes from 'prop-types';
import { formatSectionSchedule, formatTeacherName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { CardLink, Text } from '../../../elements';
import { textTypes } from '../../../elements/constants';

import SectionImage from '../Image';
import sectionListTypes from '../../constants/sectionListTypes';

import sectionIcons from '../../constants/sectionIcons';
import sectionColors from '../../constants/sectionColors';

const SectionCardLarge = ({
  id,
  link,
  userType,
  section: { name, icon, color, schedules, course, teacher },
}) => (
  <CardLink className={styles.SectionCardLarge} id={id} tabIndex={0} to={link}>
    <SectionImage
      className={styles.SectionCardLarge_image}
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
      size={sectionListTypes.LARGE}
    />
    <div className={styles.SectionCardLarge_info}>
      <Text
        className={styles.SectionCardLarge_title}
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL[700]}
        type={textTypes.HEADING.XS}
      >
        {name}
      </Text>
      <Text
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL[400]}
        type={textTypes.BODY.SM}
      >
        {userType === GLOBALS.USER_TYPES.STUDENT
          ? course?.code?.concat(' · ', formatTeacherName(teacher))
          : course?.code?.concat(' · ', formatSectionSchedule(schedules))}
      </Text>
    </div>
  </CardLink>
);

SectionCardLarge.propTypes = {
  id: PropTypes.string.isRequired,
  // the link after this card is clicked
  link: PropTypes.string.isRequired,

  // the type of user this card is for
  userType: PropTypes.oneOf(Object.values(GLOBALS.USER_TYPES)).isRequired,

  // section object from List Sections API
  section: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default SectionCardLarge;
