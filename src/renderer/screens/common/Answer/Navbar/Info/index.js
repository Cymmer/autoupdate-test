import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Text, Span, Icon, Tooltip } from 'components/elements';
import { textTypes } from 'components/elements/constants';
import { STUDENT_ROUTES } from 'screen-wrappers/Student/constants';
import GLOBALS from 'codechum-app-globals';
import styles from '../styles.module.scss';

const Info = ({ label, colorClass, value, isLocked }) => (
  <Text
    className={styles.Navbar_info_text}
    colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
    type={textTypes.BODY.SM}
  >
    <Span
      className={cn(styles.Navbar_info_text_label, {
        [styles.Navbar_info_text_label___locked]: isLocked,
      })}
    >
      {label}
      {': '}
    </Span>
    {!isLocked ? (
      <Span colorClass={colorClass} type={textTypes.DATA.SM}>
        {' '}
        {value}
      </Span>
    ) : (
      <Tooltip content={GLOBALS.MESSAGES.PREMIUM_FEATURE_LOCK_MESSAGE}>
        <a
          className={styles.Navbar_info_text_lockedIcon_link}
          href={STUDENT_ROUTES.SHOP}
          rel="noreferrer"
          target="_blank"
        >
          <Icon className={styles.Navbar_info_text_lockedIcon} icon="lock" />
        </a>
      </Tooltip>
    )}
  </Text>
);

Info.defaultProps = {
  isLocked: false,
};

Info.propTypes = {
  label: PropTypes.string.isRequired,
  colorClass: PropTypes.oneOf([
    GLOBALS.COLOR_CLASSES.RED['300'],
    GLOBALS.COLOR_CLASSES.BLUE['300'],
    GLOBALS.COLOR_CLASSES.GREEN['300'],
    GLOBALS.COLOR_CLASSES.NEUTRAL['500'],
  ]).isRequired,
  value: PropTypes.string.isRequired,
  isLocked: PropTypes.bool,
};

export default Info;
