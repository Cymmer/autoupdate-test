import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import textTypes from './constants/textTypes';

const identifyElement = (type) => {
  switch (type) {
    case 'heading___xxl':
    case 'heading___xl':
    case 'heading___lg':
      return 'h1';
    case 'heading___md':
      return 'h2';
    case 'heading___sm':
      return 'h3';
    case 'heading___xs':
      return 'h4';
    case 'heading___xxs':
      return 'h5';
    case 'heading___xxxs':
      return 'h6';
    case 'code___md':
    case 'code___sm':
      return 'pre';
    default:
      return 'p';
  }
};

const Text = ({ id, children, className, type, colorClass, element }) => {
  const Element = element || identifyElement(type);

  return (
    <Element
      className={cn(
        className,
        styles[`Text___${type}`],
        styles[`Text___${colorClass}`]
      )}
      id={id}
    >
      {children}
    </Element>
  );
};

Text.defaultProps = {
  id: null,
  className: null,
  children: null,
  colorClass: GLOBALS.COLOR_CLASSES.NEUTRAL['700'],
  type: textTypes.BODY.MD,
  element: null,
};

Text.propTypes = {
  id: PropTypes.string,
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
    GLOBALS.COLOR_CLASSES.BLUE['400'],
    GLOBALS.COLOR_CLASSES.BLUE['300'],
    GLOBALS.COLOR_CLASSES.BLUE['100'],
    GLOBALS.COLOR_CLASSES.RED['500'],
    GLOBALS.COLOR_CLASSES.RED['300'],
    GLOBALS.COLOR_CLASSES.RED['100'],
    GLOBALS.COLOR_CLASSES.GREEN['500'],
    GLOBALS.COLOR_CLASSES.GREEN['300'],
    GLOBALS.COLOR_CLASSES.GREEN['100'],
    GLOBALS.COLOR_CLASSES.PURPLE['300'],
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
    textTypes.MISC.BUTTON,
  ]),
  element: PropTypes.string,
};

export default Text;
