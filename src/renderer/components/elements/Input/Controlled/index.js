import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import RequiredField from 'components/elements/RequiredField';
import styles from '../styles.module.scss';

import Text from '../../Text';
import textTypes from '../../Text/constants/textTypes';
import Icon from '../../Icon';

import inputKinds from '../constants/inputKinds';
import inputTypes from '../constants/inputTypes';

const ControlledInput = ({
  id,
  type,
  kind,
  className,
  placeholder,
  isRequired,
  error,
  success,
  name,
  label,
  disabled,
  value,
  onChange,
  icon,
  maxLength,
  autoComplete,
  helperText,
  step,
  tabIndex,
  min,
  max,
}) => (
  <div className={cn(className, styles.Input_container)}>
    {label && type !== inputTypes.FORM && (
      <Text
        className={styles[`Input___${type}_label`]}
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
        element="label"
        type={textTypes.BODY.MD}
      >
        {isRequired ? <RequiredField placeholder={label} /> : label}
      </Text>
    )}

    <input
      autoComplete={autoComplete}
      className={cn(styles[`Input___${type}`], {
        [styles[`Input___${type}___icon`]]: icon !== null,
        [styles.Input___success]: success !== null,
        [styles.Input___error]: error !== null,
      })}
      data-test="input"
      disabled={disabled}
      id={id || name}
      max={max}
      maxLength={maxLength}
      min={min}
      name={name}
      placeholder={type !== inputTypes.FORM && placeholder ? placeholder : null}
      step={step}
      tabIndex={tabIndex}
      type={kind}
      value={value || ''}
      onChange={onChange}
    />

    {placeholder && type === inputTypes.FORM && (
      <Text
        className={cn(styles.Input___form_label, {
          [styles.Input___form_label___active]: value !== '',
        })}
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
        type={textTypes.BODY.MD}
      >
        {isRequired ? <RequiredField placeholder={placeholder} /> : placeholder}
      </Text>
    )}

    {icon && <Icon className={styles[`Input___${type}_icon`]} icon={icon} />}

    {(helperText || success || error) && (
      <div className={styles.Input_helperTextContainer}>
        {helperText && (
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
            type={textTypes.BODY.XS}
          >
            {helperText}
          </Text>
        )}

        {error && (
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.RED['500']}
            type={textTypes.BODY.XS}
          >
            {error}
          </Text>
        )}

        {success && (
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.GREEN['500']}
            type={textTypes.BODY.XS}
          >
            {success}
          </Text>
        )}
      </div>
    )}
  </div>
);

ControlledInput.defaultProps = {
  id: null,
  type: inputTypes.SLIM,
  kind: inputKinds.TEXT,
  className: null,
  placeholder: null,
  error: null,
  success: null,
  label: null,
  disabled: false,
  value: '',
  maxLength: null,
  autoComplete: null,
  helperText: null,
  icon: null,
  step: null,
  tabIndex: null,
  min: null,
  max: null,
};

ControlledInput.propTypes = {
  type: PropTypes.oneOf([inputTypes.FORM, inputTypes.SLIM, inputTypes.CODE]),
  kind: PropTypes.oneOf([
    inputKinds.NUMBER,
    inputKinds.PASSWORD,
    inputKinds.TEXT,
  ]),
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  maxLength: PropTypes.number,
  autoComplete: PropTypes.string,
  helperText: PropTypes.string,
  step: PropTypes.number,
  tabIndex: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  isRequired: PropTypes.bool,
};

export default ControlledInput;
