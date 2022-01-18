import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Tooltip } from 'components/elements';
import GLOBALS from 'codechum-app-globals';

import { STUDENT_ROUTES } from 'screen-wrappers/Student/constants';

import Icon from '../../Icon';
import iconButtonTypes from '../constants/iconButtonTypes';

import styles from '../icon.module.scss';

const isTypeOutline = (type) => {
  switch (type) {
    case iconButtonTypes.OUTLINE.XS:
    case iconButtonTypes.OUTLINE.SM:
    case iconButtonTypes.OUTLINE.MD:
    case iconButtonTypes.OUTLINE.LG:
      return true;
    default:
      return false;
  }
};

const IconButton = ({
  icon,
  className,
  iconClassName,
  colorName,
  style,
  onClick,
  disabled,
  type,
  tabIndex,
  kind,
  id,
  isLocked,
}) => {
  const button = (
    <button
      className={cn(className, styles[`IconButton___${type}`], {
        [styles[`IconButton___${colorName}`]]: isTypeOutline(type),
      })}
      // eslint-disable-next-line
      data-test="button"
      disabled={isLocked || disabled}
      id={id}
      tabIndex={tabIndex}
      type={kind}
      onClick={disabled === false ? onClick || (() => {}) : null}
    >
      <Icon
        className={cn(styles.IconButton_icon, iconClassName)}
        icon={icon}
        style={style}
      />
    </button>
  );

  return !isLocked ? (
    button
  ) : (
    <span className={styles.IconButton_wrapper}>
      {button}
      <Tooltip content={GLOBALS.MESSAGES.PREMIUM_FEATURE_LOCK_MESSAGE}>
        <a href={STUDENT_ROUTES.SHOP} rel="noreferrer" target="_blank">
          <Icon className={styles.IconButton_lockedIcon} icon="lock" />
        </a>
      </Tooltip>
    </span>
  );
};

IconButton.defaultProps = {
  className: null,
  style: null,
  onClick: null,
  iconClassName: null,
  disabled: false,
  type: iconButtonTypes.SOLID.SM,
  kind: GLOBALS.BUTTON_KINDS.BUTTON,
  tabIndex: 0,
  id: null,
  colorName: GLOBALS.COLOR_NAMES.BLUE,
  isLocked: false,
};

IconButton.propTypes = {
  type: PropTypes.oneOf([
    iconButtonTypes.SOLID.LG,
    iconButtonTypes.SOLID.MD,
    iconButtonTypes.SOLID.SM,
    iconButtonTypes.SOLID.XS,
    iconButtonTypes.OUTLINE.LG,
    iconButtonTypes.OUTLINE.MD,
    iconButtonTypes.OUTLINE.SM,
    iconButtonTypes.OUTLINE.XS,
  ]),
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
  iconClassName: PropTypes.string,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  kind: PropTypes.oneOf([
    GLOBALS.BUTTON_KINDS.BUTTON,
    GLOBALS.BUTTON_KINDS.SUBMIT,
    GLOBALS.BUTTON_KINDS.RESET,
  ]),
  id: PropTypes.string,
  colorName: PropTypes.oneOf([
    GLOBALS.COLOR_NAMES.BLUE,
    GLOBALS.COLOR_NAMES.RED,
    GLOBALS.COLOR_NAMES.GREEN,
  ]),
  isLocked: PropTypes.bool,
};

export default IconButton;
