import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import { STUDENT_ROUTES } from 'screen-wrappers/Student/constants';

import styles from './styles.module.scss';

import { CircularProgressBar, Icon, Tooltip } from '../elements';

const InfoBars = ({
  className,
  label,
  value,
  text,
  colorHexCode,
  isLocked,
}) => (
  <div className={cn(className, styles.InfoBars)}>
    <CircularProgressBar
      colorHexCode={colorHexCode}
      text={text}
      value={value}
    />
    <p className={styles.InfoBars_label}>{label}</p>
    {isLocked && (
      <Tooltip content={GLOBALS.MESSAGES.PREMIUM_FEATURE_LOCK_MESSAGE}>
        <a href={STUDENT_ROUTES.SHOP} rel="noreferrer" target="_blank">
          <Icon
            className={styles.InfoBars_lockedIcon}
            data-test="lockedIcon"
            icon="lock"
          />
        </a>
      </Tooltip>
    )}
  </div>
);

InfoBars.defaultProps = {
  className: null,
  isLocked: false,
};

InfoBars.propTypes = {
  className: PropTypes.string,

  // determines the text to be shown under the progress bar
  label: PropTypes.string.isRequired,

  // ranges from 1-100, determines how far the progress bar goes
  value: PropTypes.number.isRequired,

  // determines the text to be shown inside the progress bar
  text: PropTypes.string.isRequired,

  colorHexCode: PropTypes.oneOf([
    GLOBALS.COLOR_HEX_CODES.RED['300'],
    GLOBALS.COLOR_HEX_CODES.GREEN['300'],
    GLOBALS.COLOR_HEX_CODES.BLUE['300'],
    GLOBALS.COLOR_HEX_CODES.NEUTRAL['200'],
  ]).isRequired,

  // if true, a lock icon will be rendered
  isLocked: PropTypes.bool,
};

export default InfoBars;
