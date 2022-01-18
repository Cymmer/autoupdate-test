import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';
import { tagColors } from './constants';

const Tag = ({ id, children, className, color, withIcon }) => (
  <span
    className={cn(className, styles.Tag, {
      [styles.Tag___withIcon]: withIcon,
      [styles[`Tag___${color}`]]: color !== null,
    })}
    id={id}
  >
    {children}
  </span>
);

Tag.defaultProps = {
  className: null,
  withIcon: false,
  color: null,
};

Tag.propTypes = {
  id: PropTypes.string,
  withIcon: PropTypes.bool,
  color: PropTypes.oneOf([tagColors.BLUE, tagColors.LIGHT_BLUE]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Tag;
