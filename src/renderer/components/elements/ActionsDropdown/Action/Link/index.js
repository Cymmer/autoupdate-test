import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from '../styles.module.scss';

import Icon from '../../../Icon';
import Tooltip from '../../../Tooltip';
import tooltipPlacement from '../../../Tooltip/constants/tooltipPlacement';

const ActionLink = ({
  action: { id, action, icon, text, tooltip, disabled },
}) =>
  tooltip ? (
    <Tooltip content={tooltip} placement={tooltipPlacement.LEFT}>
      <Link
        className={cn(styles.Action, {
          [styles.Action___disabled]: disabled,
          [styles.Action___delete]: icon === 'delete' || icon === 'close',
        })}
        id={id}
        to={action}
      >
        <Icon className={styles.Action_icon} icon={icon} />
        {text}
      </Link>
    </Tooltip>
  ) : (
    <Link
      className={cn(styles.Action, {
        [styles.Action___disabled]: disabled,
        [styles.Action___delete]: icon === 'delete' || icon === 'close',
      })}
      id={id}
      to={action}
    >
      <Icon className={styles.Action_icon} icon={icon} />
      {text}
    </Link>
  );

ActionLink.propTypes = {
  action: PropTypes.shape({
    action: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    tooltip: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default ActionLink;
