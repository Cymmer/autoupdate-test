import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import PropTypes from 'prop-types';

import { Icon, Tooltip } from 'components/elements';
import { STUDENT_ROUTES } from 'screen-wrappers/Student/constants';
import styles from '../tabs.module.scss';

import IconButton from '../../Button/IconButton';
import iconButtonTypes from '../../Button/constants/iconButtonTypes';
import tabTypes from '../constants/tabTypes';

const handleClickIfLocked = (e) => {
  e.preventDefault();
};

const TabLink = ({
  className,
  children,
  type,
  active,
  to,
  closeAction,
  id,
  hasNewData,
  isLocked,
}) => {
  const link = (
    <Link
      className={cn(className, {
        [styles[`Tab___${type}___active`]]: active,
        [styles[`Tab___${type}`]]: !active,
        [styles[`Tab___${type}___hasNewData`]]: hasNewData,
        [styles.Tab___withClose]: closeAction && active,
        [styles.Tab___locked]: isLocked,
      })}
      data-test="tabLink"
      id={id}
      to={to}
      onClick={isLocked ? handleClickIfLocked : null}
    >
      {children}
      {closeAction && active && (
        <IconButton
          className={styles.Tab_close}
          data-test="closeButton"
          icon="close"
          type={iconButtonTypes.SOLID.XS}
          onClick={closeAction}
        />
      )}
    </Link>
  );

  return !isLocked ? (
    link
  ) : (
    <span className={styles.Tab_linkWrapper}>
      <Tooltip content={GLOBALS.MESSAGES.PREMIUM_FEATURE_LOCK_MESSAGE}>
        <a href={STUDENT_ROUTES.SHOP} rel="noreferrer" target="_blank">
          <Icon className={styles.Tab_lockedIcon} icon="lock" />
        </a>
      </Tooltip>
      {link}
    </span>
  );
};

TabLink.defaultProps = {
  className: null,
  active: false,
  type: tabTypes.HORIZONTAL.LG,
  to: '#',
  closeAction: null,
  id: null,
  hasNewData: false,
  isLocked: false,
};

TabLink.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    tabTypes.HORIZONTAL.LG,
    tabTypes.HORIZONTAL.SM,
    tabTypes.VERTICAL.LG,
    tabTypes.VERTICAL.SM,
  ]),
  closeAction: PropTypes.func,
  id: PropTypes.string,
  hasNewData: PropTypes.bool,
  isLocked: PropTypes.bool,
};

export default TabLink;
