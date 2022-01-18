import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import { STUDENT_ROUTES } from 'screen-wrappers/Student/constants';
import styles from './styles.module.scss';

import { Icon, Tooltip, Spinner } from '..';
import { spinnerSizes } from '../constants';

import buttonTypes from './constants/buttonTypes';

const Button = ({
  innerRef,
  children,
  type,
  kind,
  className,
  wrapperClassName,
  lockedIconClassName,
  iconClassName,
  onClick,
  disabled,
  icon,

  id,
  tabIndex,
  dataTestId,
  isLocked,
  isLoading,
}) => {
  const button = (
    <button
      ref={(e) => {
        if (innerRef) {
          innerRef.current = e;
        }
      }}
      className={cn(className, styles[`Button___${type}`], {
        [styles.Button___withIcon]: icon !== null,
        [styles.Button___disabled]: isLoading,
      })}
      data-test={dataTestId}
      disabled={disabled || isLocked || isLoading}
      id={id}
      tabIndex={tabIndex}
      type={kind}
      onClick={!isLocked ? onClick : () => {}}
    >
      {isLoading ? (
        <Spinner
          colorName={GLOBALS.COLOR_NAMES.WHITE}
          data-test="loadingSpinner"
          size={spinnerSizes.SM}
        />
      ) : (
        <>
          {icon && (
            <Icon
              className={cn(styles.Button___withIcon_icon, iconClassName)}
              icon={icon}
            />
          )}
          {children}
        </>
      )}
    </button>
  );

  return !isLocked ? (
    button
  ) : (
    <span
      className={cn(wrapperClassName, styles.Button_wrapper)}
      data-test={dataTestId}
    >
      {button}
      <Tooltip content={GLOBALS.MESSAGES.PREMIUM_FEATURE_LOCK_MESSAGE}>
        <a href={STUDENT_ROUTES.SHOP} rel="noreferrer" target="_blank">
          <Icon
            className={cn(styles.Button_lockedIcon, lockedIconClassName)}
            icon="lock"
          />
        </a>
      </Tooltip>
    </span>
  );
};

Button.defaultProps = {
  kind: GLOBALS.BUTTON_KINDS.BUTTON,
  type: buttonTypes.PRIMARY.BLUE,
  className: null,
  lockedIconClassName: null,
  wrapperClassName: null,
  disabled: false,
  id: null,
  icon: null,
  tabIndex: 0,
  onClick: () => {},
  isLocked: false,
  dataTestId: null,
  isLoading: false,
};

Button.propTypes = {
  kind: PropTypes.oneOf([
    GLOBALS.BUTTON_KINDS.BUTTON,
    GLOBALS.BUTTON_KINDS.SUBMIT,
    GLOBALS.BUTTON_KINDS.RESET,
  ]),
  type: PropTypes.oneOf([
    buttonTypes.PRIMARY.BLUE,
    buttonTypes.PRIMARY.RED,
    buttonTypes.PRIMARY.GREEN,
    buttonTypes.PRIMARY.YELLOW,
    buttonTypes.PRIMARY.PURPLE,
    buttonTypes.SECONDARY.BLUE,
    buttonTypes.SECONDARY.GREEN,
    buttonTypes.SECONDARY.RED,
    buttonTypes.SECONDARY.YELLOW,
    buttonTypes.SECONDARY.PURPLE,
    buttonTypes.SECONDARY.WHITE,
    buttonTypes.TEXT.BLUE,
    buttonTypes.TEXT.RED,
    buttonTypes.TEXT.GREEN,
    buttonTypes.TEXT.YELLOW,
    buttonTypes.TEXT.PURPLE,
    buttonTypes.TEXT.GRAY,
    buttonTypes.TERTIARY,
  ]),
  innerRef: PropTypes.any,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  icon: PropTypes.string,
  tabIndex: PropTypes.number,
  dataTestId: PropTypes.string,
  isLocked: PropTypes.bool,
  iconClassName: PropTypes.string,

  // these can only have values if `isLocked` is true
  wrapperClassName: PropTypes.string,
  lockedIconClassName: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Button;
