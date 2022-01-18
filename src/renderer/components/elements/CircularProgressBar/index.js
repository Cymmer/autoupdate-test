import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { getIsNightMode } from '../../../ducks';

const CircularProgressBar = ({
  className,
  value,
  text,
  colorHexCode,
  isNightMode,
}) => (
  <div className={cn(className, styles.CircularProgressBar_container)}>
    <CircularProgressbar
      className={styles.CircularProgressBar}
      strokeWidth={12}
      styles={buildStyles({
        textColor: colorHexCode,
        pathColor: colorHexCode,
        trailColor: isNightMode
          ? GLOBALS.COLOR_HEX_CODES.NEUTRAL['500']
          : GLOBALS.COLOR_HEX_CODES.NEUTRAL['200'],
        textSize: '18px',
      })}
      text={text}
      value={value}
    />
  </div>
);

CircularProgressBar.defaultProps = {
  className: null,
  colorHexCode: GLOBALS.COLOR_HEX_CODES.BLUE['300'],
};

CircularProgressBar.propTypes = {
  className: PropTypes.string,

  // ranges from 1-100, determines how far the progress bar goes
  value: PropTypes.number.isRequired,

  // determines the text to be shown inside the progress bar
  text: PropTypes.string.isRequired,

  colorHexCode: PropTypes.oneOf([
    GLOBALS.COLOR_HEX_CODES.NEUTRAL['900'],
    GLOBALS.COLOR_HEX_CODES.NEUTRAL['800'],
    GLOBALS.COLOR_HEX_CODES.NEUTRAL['700'],
    GLOBALS.COLOR_HEX_CODES.NEUTRAL['600'],
    GLOBALS.COLOR_HEX_CODES.NEUTRAL['500'],
    GLOBALS.COLOR_HEX_CODES.NEUTRAL['400'],
    GLOBALS.COLOR_HEX_CODES.NEUTRAL['300'],
    GLOBALS.COLOR_HEX_CODES.NEUTRAL['200'],
    GLOBALS.COLOR_HEX_CODES.NEUTRAL['100'],
    GLOBALS.COLOR_HEX_CODES.NEUTRAL['50'],
    GLOBALS.COLOR_HEX_CODES.NEUTRAL['0'],
    GLOBALS.COLOR_HEX_CODES.BLUE['500'],
    GLOBALS.COLOR_HEX_CODES.BLUE['300'],
    GLOBALS.COLOR_HEX_CODES.BLUE['100'],
    GLOBALS.COLOR_HEX_CODES.RED['500'],
    GLOBALS.COLOR_HEX_CODES.RED['300'],
    GLOBALS.COLOR_HEX_CODES.RED['100'],
    GLOBALS.COLOR_HEX_CODES.GREEN['500'],
    GLOBALS.COLOR_HEX_CODES.GREEN['300'],
    GLOBALS.COLOR_HEX_CODES.GREEN['100'],
  ]),

  isNightMode: PropTypes.bool.isRequired,
};

const mapStateToProps = (store) => ({
  isNightMode: getIsNightMode(store),
});

export default connect(mapStateToProps, null)(CircularProgressBar);
