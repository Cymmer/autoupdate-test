import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';

import { Tooltip } from 'components/elements';
import { STUDENT_ROUTES } from 'screen-wrappers/Student/constants';
import styles from '../icon.module.scss';

import Icon from '../../Icon';
import iconButtonTypes from '../constants/iconButtonTypes';

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

const handleClickIfLocked = (e) => {
  e.preventDefault();
};

const IconLink = ({
  icon,
  className,
  iconClassName,
  colorName,
  style,
  to,
  type,
  tabIndex,
  disabled,
  onClick,
  isLocked,
}) => {
  const link = (
    <Link
      className={cn(className, styles[`IconButton___${type}`], {
        [styles.IconButton___disabled]: isLocked || disabled,
        [styles[`IconButton___${colorName}`]]: isTypeOutline(type),
      })}
      data-test="link"
      tabIndex={tabIndex}
      to={to}
      onClick={isLocked ? handleClickIfLocked : onClick}
    >
      <Icon
        className={cn(styles.IconButton_icon, iconClassName)}
        icon={icon}
        style={style}
      />
    </Link>
  );
  return !isLocked ? (
    link
  ) : (
    <span className={styles.IconButton_wrapper}>
      {link}
      <Tooltip content={GLOBALS.MESSAGES.PREMIUM_FEATURE_LOCK_MESSAGE}>
        <a href={STUDENT_ROUTES.SHOP} rel="noreferrer" target="_blank">
          <Icon className={styles.IconButton_lockedIcon} icon="lock" />
        </a>
      </Tooltip>
    </span>
  );
};

IconLink.defaultProps = {
  className: null,
  style: null,
  to: null,
  iconClassName: null,
  type: iconButtonTypes.SOLID.SM,
  tabIndex: 0,
  disabled: false,
  colorName: GLOBALS.COLOR_NAMES.BLUE,
  onClick: null,
};

IconLink.propTypes = {
  type: PropTypes.oneOf([
    iconButtonTypes.SOLID.LG,
    iconButtonTypes.SOLID.MD,
    iconButtonTypes.SOLID.SM,
    iconButtonTypes.OUTLINE.LG,
    iconButtonTypes.OUTLINE.MD,
    iconButtonTypes.OUTLINE.SM,
  ]),
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  style: PropTypes.object,
  to: PropTypes.string,
  iconClassName: PropTypes.string,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  colorName: PropTypes.oneOf([
    GLOBALS.COLOR_NAMES.BLUE,
    GLOBALS.COLOR_NAMES.RED,
    GLOBALS.COLOR_NAMES.GREEN,
  ]),
  onClick: PropTypes.func,
  isLocked: PropTypes.bool,
};

export default IconLink;
