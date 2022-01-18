import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import Span from '../Text/Span';
import Icon from '../Icon';

const Badge = ({ className, icon, id, text, colorName }) => (
  <div className={cn(className, styles[`Badge___${colorName}`])} id={id}>
    {icon && <Icon className={styles.Badge_icon} icon={icon} />}
    <Span
      className={cn({
        [styles.Badge_text___withIcon]: icon,
        [styles.Badge_text___noIcon]: !icon,
      })}
      id={id}
    >
      {text}
    </Span>
  </div>
);

Badge.defaultProps = {
  className: null,
  text: null,
  icon: null,
  id: null,
};

Badge.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  colorName: PropTypes.oneOf([
    GLOBALS.COLOR_NAMES.GREEN,
    GLOBALS.COLOR_NAMES.BLUE,
    GLOBALS.COLOR_NAMES.RED,
    GLOBALS.COLOR_NAMES.YELLOW,
    GLOBALS.COLOR_NAMES.DARK_YELLOW,
    GLOBALS.COLOR_NAMES.DARK_GREEN,
    GLOBALS.COLOR_NAMES.DARK_BLUE,
    GLOBALS.COLOR_NAMES.GRAY,
  ]).isRequired,
  text: PropTypes.string,
};

export default Badge;
