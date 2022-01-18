import React from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { Icon, Text } from '../../../../../components/elements';

const Cooldown = ({ current, max, text }) => (
  <div className={styles.Cooldown}>
    <div className={styles.Cooldown_title}>
      <Icon className={styles.Cooldown_icon} icon="check" />
      <Text className={styles.Cooldown_text} color={GLOBALS.COLOR_NAMES.WHITE}>
        {text}
      </Text>
    </div>
    <progress className={styles.Cooldown_bar} max={max} value={current} />
  </div>
);

Cooldown.defaultProps = {
  text: null,
};

Cooldown.propTypes = {
  current: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  text: PropTypes.string,
};

export default Cooldown;
