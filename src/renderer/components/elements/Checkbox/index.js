import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import Label from '../Label';
import { Icon, Tooltip } from '..';

const Checkbox = ({
  name,
  label,
  checked,
  className,
  onChange,
  disabled,
  isLocked,
}) => (
  <div
    className={cn(className, styles.Checkbox, {
      [styles.Checkbox___disabled]: disabled,
    })}
  >
    {!isLocked ? (
      <input
        checked={checked}
        className={styles.Checkbox_input}
        data-test="checkbox"
        disabled={disabled}
        id={name}
        name={name}
        type="checkbox"
        onChange={onChange}
      />
    ) : (
      <Tooltip content={GLOBALS.MESSAGES.TEACHER_PREMIUM_FEATURE_LOCK_MESSAGE}>
        <Icon
          className={styles.Checkbox_lockedIcon}
          data-test="lockedIcon"
          icon="lock"
        />
      </Tooltip>
    )}
    <Label
      className={cn({
        [styles.Checkbox_label]: !isLocked,
      })}
      disabled={disabled}
      htmlFor={name}
      id={`${name}-label`}
    >
      {label}
    </Label>
  </div>
);

Checkbox.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  isLocked: false,
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  checked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isLocked: PropTypes.bool,
};

export default Checkbox;
