import React from 'react';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import Icon from '../Icon';
import Text from '../Text';
import textTypes from '../Text/constants/textTypes';

const Locked = () => (
  <div className={styles.Locked}>
    <Icon className={styles.Locked_icon} icon="lock" />
    <Text
      className={styles.Locked_text}
      colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
      type={textTypes.HEADING.XXS}
    >
      {GLOBALS.MESSAGES.TEACHER_PREMIUM_FEATURE_LOCK_MESSAGE}
    </Text>
  </div>
);

export default Locked;
