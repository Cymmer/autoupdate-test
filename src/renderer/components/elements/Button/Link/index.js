import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';

import { Tooltip } from 'components/elements';
import { STUDENT_ROUTES } from 'screen-wrappers/Student/constants';

import styles from '../styles.module.scss';

import Icon from '../../Icon';
import buttonTypes from '../constants/buttonTypes';

const ButtonLink = ({
  children,
  type,
  className,
  to,
  icon,
  id,
  tabIndex,
  disabled,
  onClick,
  isLocked,
}) => {
  const allChildren = (
    <>
      {icon && (
        <Icon
          className={styles.Button___withIcon_icon}
          data-test="icon"
          icon={icon}
        />
      )}
      {children}
    </>
  );

  const link = to.startsWith('http') ? (
    <a
      className={cn(
        className,
        styles.Button___link,
        styles[`Button___${type}`],
        {
          [styles.Button___withIcon]: icon !== null,
          [styles.Button___disabled]: isLocked || disabled,
        }
      )}
      data-test="nativeAnchor"
      href={to}
      id={id}
      rel="noreferrer"
      tabIndex={tabIndex}
      target="_blank"
      onClick={onClick}
    >
      {allChildren}
    </a>
  ) : (
    <Link
      className={cn(
        className,
        styles.Button___link,
        styles[`Button___${type}`],
        {
          [styles.Button___withIcon]: icon !== null,
          [styles.Button___disabled]: isLocked || disabled,
        }
      )}
      data-test="reactRouterLink"
      id={id}
      tabIndex={tabIndex}
      to={to}
      onClick={onClick}
    >
      {allChildren}
    </Link>
  );

  return !isLocked ? (
    link
  ) : (
    <span className={styles.Button_wrapper}>
      {link}
      <Tooltip content={GLOBALS.MESSAGES.PREMIUM_FEATURE_LOCK_MESSAGE}>
        <a href={STUDENT_ROUTES.SHOP} rel="noreferrer" target="_blank">
          <Icon className={styles.Button_lockedIcon} icon="lock" />
        </a>
      </Tooltip>
    </span>
  );
};

ButtonLink.defaultProps = {
  type: buttonTypes.PRIMARY.BLUE,
  className: null,
  id: null,
  icon: null,
  tabIndex: 0,
  disabled: false,
  onClick: null,
  isLocked: false,
};

ButtonLink.propTypes = {
  type: PropTypes.oneOf([
    buttonTypes.PRIMARY.BLUE,
    buttonTypes.PRIMARY.RED,
    buttonTypes.PRIMARY.GREEN,
    buttonTypes.SECONDARY.BLUE,
    buttonTypes.SECONDARY.GREEN,
    buttonTypes.SECONDARY.RED,
    buttonTypes.TEXT.BLUE,
    buttonTypes.TEXT.RED,
    buttonTypes.TEXT.GREEN,
    buttonTypes.TERTIARY,
  ]),
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  id: PropTypes.string,
  icon: PropTypes.string,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  isLocked: PropTypes.bool,
};

export default ButtonLink;
