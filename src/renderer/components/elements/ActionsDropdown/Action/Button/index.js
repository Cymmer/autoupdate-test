import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from '../styles.module.scss';

import Icon from '../../../Icon';
import Tooltip from '../../../Tooltip';
import tooltipPlacement from '../../../Tooltip/constants/tooltipPlacement';

const ActionButton = ({
  action: { id, action, icon, text, tooltip, disabled },
}) =>
  tooltip ? (
    <Tooltip content={tooltip} placement={tooltipPlacement.LEFT}>
      <button
        className={cn(styles.Action, {
          [styles.Action___disabled]: disabled,
          [styles.Action___delete]: icon === 'delete' || icon === 'close',
          [styles.Action___lock]: icon === 'lock',
        })}
        data-test="button"
        disabled={disabled}
        id={id}
        type="button"
        onClick={action}
      >
        <Icon className={styles.Action_icon} icon={icon} />
        {text}
      </button>
    </Tooltip>
  ) : (
    <button
      className={cn(styles.Action, {
        [styles.Action___disabled]: disabled,
        [styles.Action___delete]: icon === 'delete' || icon === 'close',
        [styles.Action___lock]: icon === 'lock',
      })}
      data-test="button"
      disabled={disabled}
      id={id}
      type="button"
      onClick={action}
    >
      <Icon className={styles.Action_icon} icon={icon} />
      {text}
    </button>
  );

ActionButton.propTypes = {
  action: PropTypes.shape({
    action: PropTypes.func,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    tooltip: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ActionButton;
