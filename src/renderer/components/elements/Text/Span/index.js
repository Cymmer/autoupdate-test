import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import styles from '../styles.module.scss';

import textTypes from '../constants/textTypes';

const Span = ({ children, className, type, colorClass }) => (
  <span
    className={cn(className, {
      [styles[`Text___${colorClass}`]]: colorClass !== null,
      [styles[`Text___${type}`]]: type !== null,
    })}
  >
    {children}
  </span>
);

Span.defaultProps = {
  className: null,
  children: null,
  colorClass: null,
  type: null,
};

Span.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  colorClass: PropTypes.oneOf([
    GLOBALS.COLOR_CLASSES.NEUTRAL['900'],
    GLOBALS.COLOR_CLASSES.NEUTRAL['800'],
    GLOBALS.COLOR_CLASSES.NEUTRAL['700'],
    GLOBALS.COLOR_CLASSES.NEUTRAL['600'],
    GLOBALS.COLOR_CLASSES.NEUTRAL['500'],
    GLOBALS.COLOR_CLASSES.NEUTRAL['400'],
    GLOBALS.COLOR_CLASSES.NEUTRAL['300'],
    GLOBALS.COLOR_CLASSES.NEUTRAL['200'],
    GLOBALS.COLOR_CLASSES.NEUTRAL['100'],
    GLOBALS.COLOR_CLASSES.NEUTRAL['50'],
    GLOBALS.COLOR_CLASSES.NEUTRAL['0'],
    GLOBALS.COLOR_CLASSES.BLUE['500'],
    GLOBALS.COLOR_CLASSES.BLUE['300'],
    GLOBALS.COLOR_CLASSES.BLUE['100'],
    GLOBALS.COLOR_CLASSES.RED['500'],
    GLOBALS.COLOR_CLASSES.RED['300'],
    GLOBALS.COLOR_CLASSES.RED['100'],
    GLOBALS.COLOR_CLASSES.GREEN['500'],
    GLOBALS.COLOR_CLASSES.GREEN['300'],
    GLOBALS.COLOR_CLASSES.GREEN['100'],
    GLOBALS.COLOR_CLASSES.YELLOW['400'],
  ]),
  type: PropTypes.oneOf([
    textTypes.HEADING.XXL,
    textTypes.HEADING.XL,
    textTypes.HEADING.LG,
    textTypes.HEADING.MD,
    textTypes.HEADING.SM,
    textTypes.HEADING.XS,
    textTypes.HEADING.XXS,
    textTypes.HEADING.XXXS,
    textTypes.BODY.LG,
    textTypes.BODY.MD,
    textTypes.BODY.SM,
    textTypes.BODY.XS,
    textTypes.STRONG.LG,
    textTypes.STRONG.MD,
    textTypes.STRONG.SM,
    textTypes.STRONG.XS,
    textTypes.DATA.LG,
    textTypes.DATA.MD,
    textTypes.DATA.SM,
    textTypes.DATA.XS,
    textTypes.CODE.MD,
    textTypes.CODE.SM,
  ]),
};

export default Span;
