import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import RequiredField from 'components/elements/RequiredField';
import styles from '../styles.module.scss';

import Text from '../../Text';
import textTypes from '../../Text/constants/textTypes';
import Icon from '../../Icon';

import textAreaTypes from '../constants/textAreaTypes';

const ControlledTextArea = ({
  id,
  type,
  className,
  inputClassName,
  placeholder,
  isRequired,
  error,
  success,
  name,
  disabled,
  value,
  icon,
  helperText,
  readOnly,
  onChange,
}) => (
  <div className={cn(className, styles.TextArea_container)}>
    <textarea
      className={cn(styles[`TextArea___${type}`], inputClassName, {
        [styles.TextArea___icon]: icon !== null,
        [styles.TextArea___success]: success !== null,
        [styles.TextArea___error]: error !== null,
      })}
      data-test="textArea"
      disabled={disabled}
      id={id}
      name={name}
      placeholder={type !== textAreaTypes.FORM ? placeholder : ''}
      readOnly={readOnly}
      value={value || ''}
      onChange={onChange}
    />

    {placeholder && type === textAreaTypes.FORM && (
      <Text
        className={cn(styles.TextArea___form_placeholder, {
          [styles.TextArea___form_placeholder___active]: value !== '',
        })}
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
        type={textTypes.BODY.MD}
      >
        {isRequired ? <RequiredField placeholder={placeholder} /> : placeholder}
      </Text>
    )}

    {icon && <Icon className={styles.TextArea_icon} icon={icon} />}

    {(helperText || success || error) && (
      <div className={styles.TextArea_helperTextContainer}>
        {helperText && (
          <Text
            className={styles.TextArea_helperText}
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

ControlledTextArea.defaultProps = {
  id: null,
  type: textAreaTypes.FORM,
  className: null,
  inputClassName: null,
  placeholder: null,
  error: null,
  success: null,
  disabled: false,
  value: '',
  helperText: null,
  readOnly: false,
  icon: null,
};

ControlledTextArea.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf([textAreaTypes.CODE, textAreaTypes.FORM]),
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  helperText: PropTypes.string,
  readOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
};

export default ControlledTextArea;
