import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import GLOBALS from 'codechum-app-globals';
import RequiredField from 'components/elements/RequiredField';
import styles from '../styles.module.scss';

import Text from '../../Text';
import textTypes from '../../Text/constants/textTypes';

import { getIsNightMode } from '../../../../ducks';

import dropdownTypes from '../constants/dropdownTypes';
import determineStyles from '../styles/determineStyles';

import CustomOption from '../custom/Option';
import CustomSingleValue from '../custom/SingleValue';
import CustomValueContainer from '../custom/ValueContainer';

/* eslint-disable react/display-name */
const ControlledDropdown = ({
  options,
  isMulti,
  name,
  value,
  error,
  onChange,
  placeholder,
  isRequired,
  helperText,
  className,
  type,
  label,
  isNightMode,
  isClearable,
  disabled,
}) => (
  <div className={cn(className, styles.Dropdown)} id={name}>
    {label && type === dropdownTypes.SLIM && (
      <Text
        className={styles.Dropdown___slim_label}
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
        data-test="dropdownLabel"
        element="label"
        id="dropdownLabel"
        type={textTypes.BODY.MD}
      >
        {isRequired ? <RequiredField placeholder={label} /> : label}
      </Text>
    )}
    <Select
      components={{
        Option: CustomOption,
        SingleValue: CustomSingleValue,
        ValueContainer: (valueContainerProps) => (
          <CustomValueContainer type={type} {...valueContainerProps} />
        ),
        IndicatorSeparator: null,
      }}
      isClearable={isClearable}
      isDisabled={disabled}
      isMulti={isMulti}
      name={name}
      options={options}
      placeholder={
        isRequired ? <RequiredField placeholder={placeholder} /> : placeholder
      }
      styles={determineStyles(type, isNightMode)}
      value={value}
      onChange={onChange}
    />
    {(helperText || error) && (
      <div className={styles.Dropdown_helperTextContainer}>
        {helperText && (
          <Text
            className={styles.Dropdown_helperText}
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
            type={textTypes.BODY.XS}
          >
            {helperText}
          </Text>
        )}
        {error && (
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.RED['500']}
            data-test="inputError"
            type={textTypes.BODY.XS}
          >
            {error}
          </Text>
        )}
      </div>
    )}
  </div>
);

ControlledDropdown.defaultProps = {
  className: null,
  label: null,
  type: dropdownTypes.FORM,
  value: null,
  isMulti: false,
  placeholder: null,
  helperText: null,
  error: null,
  isClearable: false,
  disabled: false,
};

ControlledDropdown.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.oneOf([
    dropdownTypes.FORM,
    dropdownTypes.SLIM,
    dropdownTypes.PLAYGROUND,
    dropdownTypes.LARGE,
  ]),
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.oneOfType([
    // Proptype for the non-grouped options
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        label: PropTypes.string.isRequired,

        // custom icon in each option (a custom component)
        icon: PropTypes.element,
      })
    ),

    // Proptype for the grouped options
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
              .isRequired,
            label: PropTypes.string.isRequired,

            // custom icon in each option (a custom component)
            icon: PropTypes.element,
          })
        ),
      })
    ),
  ]).isRequired,
  isMulti: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,

      // custom icon in each option (a custom component)
      icon: PropTypes.element,
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        label: PropTypes.string.isRequired,

        // custom icon in each option (a custom component)
        icon: PropTypes.element,
      })
    ),
  ]),
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  isNightMode: PropTypes.bool.isRequired,
  isClearable: PropTypes.bool,
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
};

const mapStateToProps = (store) => ({
  isNightMode: getIsNightMode(store),
});

export default connect(mapStateToProps, null)(ControlledDropdown);
