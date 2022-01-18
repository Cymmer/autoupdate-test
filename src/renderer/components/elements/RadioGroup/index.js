import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import Tooltip from '../Tooltip';
import tooltipPlacement from '../Tooltip/constants/tooltipPlacement';
import Text from '../Text';
import Span from '../Text/Span';
import textTypes from '../Text/constants/textTypes';

import ControlledRadio from './Controlled';

import radioTypes from './constants/radioTypes';
import RequiredField from '../RequiredField';

const RadioGroup = ({
  label,
  isRequired,
  className,
  innerClassName,
  options,
  checked,
  disabled,
  type,
  error,
  hasNewBadge,
}) => (
  <div className={cn(styles.RadioGroup_container, className)}>
    {label && (
      <Text
        className={styles.RadioGroup_label}
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
        type={textTypes.BODY.SM}
      >
        {isRequired ? <RequiredField placeholder={label} /> : label}
        {hasNewBadge && (
          <Span className={styles.RadioGroup_newBadge} type={textTypes.DATA.XS}>
            NEW!
          </Span>
        )}
      </Text>
    )}
    <div className={cn(styles.RadioGroup, innerClassName)}>
      {options?.map(
        ({ id, value, label: radioLabel, name, onChange, icon, tooltip }) =>
          tooltip ? (
            <Tooltip content={tooltip} placement={tooltipPlacement.BOTTOM}>
              <ControlledRadio
                key={id}
                checked={checked === value}
                className={styles[`RadioGroup___${type}_radio`]}
                disabled={disabled}
                icon={icon}
                id={id}
                label={radioLabel}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
              />
            </Tooltip>
          ) : (
            <ControlledRadio
              key={id}
              checked={checked === value}
              className={styles[`RadioGroup___${type}_radio`]}
              disabled={disabled}
              icon={icon}
              id={id}
              label={radioLabel}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
            />
          )
      )}
    </div>
    {error && (
      <div className={styles.RadioGroup_helperTextContainer}>
        <Text
          colorClass={GLOBALS.COLOR_CLASSES.RED['500']}
          type={textTypes.BODY.XS}
        >
          {error}
        </Text>
      </div>
    )}
  </div>
);

RadioGroup.defaultProps = {
  className: null,
  innerClassName: null,
  label: null,
  error: null,
  disabled: false,
  type: radioTypes.SMALL,
  checked: null,
  hasNewBadge: false,
};

RadioGroup.propTypes = {
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string,
      name: PropTypes.string,
      onChange: PropTypes.func,
      icon: PropTypes.string,
    })
  ).isRequired,
  checked: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([radioTypes.SMALL, radioTypes.LARGE]),
  hasNewBadge: PropTypes.bool,
  isRequired: PropTypes.bool,
};

export default RadioGroup;
