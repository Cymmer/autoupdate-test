import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from '../radio.module.scss';

import Icon from '../../Icon';

import Label from '../../Label';

import radioTypes from '../constants/radioTypes';

const ControlledRadio = ({
  name,
  label,
  id,
  checked,
  className,
  onChange,
  disabled,
  value,
  type,
  icon,
}) => (
  <div
    className={cn(className, styles[`Radio___${type}`], {
      [styles[`Radio___${type}___disabled`]]: disabled,
    })}
    id={id ? `${id}Container` : null}
  >
    <input
      checked={checked}
      className={styles[`Radio___${type}_input`]}
      data-test="radio"
      disabled={disabled}
      id={id}
      name={name}
      type="radio"
      value={value}
      onChange={onChange}
    />
    <Label
      className={styles[`Radio___${type}_label`]}
      disabled={disabled}
      htmlFor={id}
    >
      {icon && type === radioTypes.LARGE && (
        <Icon className={styles.Radio___large_icon} icon={icon} />
      )}
      {label}
    </Label>
  </div>
);

ControlledRadio.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  type: radioTypes.SMALL,
  icon: null,
};

ControlledRadio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([radioTypes.SMALL, radioTypes.LARGE]),
  icon: PropTypes.string,
};

export default ControlledRadio;
