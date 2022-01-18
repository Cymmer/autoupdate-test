import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import Text from '../../../elements/Text';
import textTypes from '../../../elements/Text/constants/textTypes';

const SectionCardAdd = ({ userType }) => (
  <Link
    className={styles.SectionCardAdd_link}
    to={
      userType === GLOBALS.USER_TYPES.STUDENT
        ? '/student/join-class'
        : '/teacher/classes/create'
    }
  >
    <div className={styles.SectionCardAdd}>
      <Text
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['300']}
        type={textTypes.HEADING.XXS}
      >
        + Add Class
      </Text>
    </div>
  </Link>
);

SectionCardAdd.defaultProps = {
  userType: GLOBALS.USER_TYPES.TEACHER,
};

SectionCardAdd.propTypes = {
  userType: PropTypes.oneOf(Object.values(GLOBALS.USER_TYPES)),
};

export default SectionCardAdd;
