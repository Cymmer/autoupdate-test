import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import Text from '../Text';
import textTypes from '../Text/constants/textTypes';

import dataSizes from './constants/dataSizes';

const determineType = (type, size) => {
  if (type === 'data') {
    switch (size) {
      case dataSizes.SM:
        return textTypes.DATA.SM;
      case dataSizes.MD:
        return textTypes.DATA.MD;
      case dataSizes.LG:
        return textTypes.DATA.LG;
      default:
        return textTypes.DATA.MD;
    }
  } else if (type === 'body') {
    switch (size) {
      case dataSizes.SM:
        return textTypes.BODY.XS;
      case dataSizes.MD:
        return textTypes.BODY.SM;
      case dataSizes.LG:
        return textTypes.BODY.MD;
      default:
        return textTypes.BODY.SM;
    }
  }
};

const Data = ({
  id,
  className,
  colorClass,
  children,
  label,
  labelColorClass,
  size,
}) => (
  <div className={cn(className, styles.Data)} id={id}>
    <Text
      className={styles.Data_text}
      colorClass={colorClass}
      id={id}
      type={determineType('data', size)}
    >
      {children}
    </Text>
    <Text
      className={styles.Data_text}
      colorClass={labelColorClass}
      type={determineType('body', size)}
    >
      {label}
    </Text>
  </div>
);

Data.defaultProps = {
  id: null,
  className: null,
  colorClass: GLOBALS.COLOR_CLASSES.NEUTRAL['700'],
  labelColorClass: GLOBALS.COLOR_CLASSES.NEUTRAL['400'],
  size: dataSizes.MD,
};

Data.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
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
  ]),
  labelColorClass: PropTypes.oneOf([
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
  ]),
  size: PropTypes.oneOf([dataSizes.LG, dataSizes.MD, dataSizes.SM]),
};

export default Data;
