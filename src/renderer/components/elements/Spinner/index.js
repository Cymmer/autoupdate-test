import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import spinnerSizes from './constants/spinnerSizes';

const Spinner = ({ className, colorName, size }) => (
  <div className={cn(styles.Spinner_container, className)}>
    <svg className={styles[`Spinner___${size}`]} viewBox="25 25 50 50">
      <circle
        className={styles[`Spinner_circle___${colorName}`]}
        cx="50"
        cy="50"
        r="20"
      />
    </svg>
  </div>
);

Spinner.defaultProps = {
  className: null,
  colorName: GLOBALS.COLOR_NAMES.BLUE,
  size: spinnerSizes.LG,
};

Spinner.propTypes = {
  className: PropTypes.string,
  colorName: PropTypes.oneOf([
    GLOBALS.COLOR_NAMES.GRAY,
    GLOBALS.COLOR_NAMES.BLUE,
    GLOBALS.COLOR_NAMES.WHITE,
  ]),
  size: PropTypes.oneOf([
    spinnerSizes.LG,
    spinnerSizes.MD,
    spinnerSizes.SM,
    spinnerSizes.XS,
  ]),
};

export default Spinner;
