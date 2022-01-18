import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import { Icon, Text } from 'components/elements';
import { textTypes } from 'components/elements/constants';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';

const ConnectionStatus = ({ isConnected }) => (
  <div className={styles.ConnectionStatus}>
    <Icon
      className={cn(styles.ConnectionStatus_icon, {
        [styles.ConnectionStatus_icon___connected]: isConnected,
        [styles.ConnectionStatus_icon___notConnected]: !isConnected,
      })}
      icon={isConnected ? 'wifi' : 'wifi_off'}
    />
    <Text
      className={styles.ConnectionStatus_text}
      colorClass={
        isConnected
          ? GLOBALS.COLOR_CLASSES.GREEN['300']
          : GLOBALS.COLOR_CLASSES.ORANGE['300']
      }
      type={textTypes.HEADING.XXXS}
    >
      {isConnected ? 'Connected' : 'Not Connected'}
    </Text>
  </div>
);

ConnectionStatus.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

export default ConnectionStatus;
