import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Label = ({ children, htmlFor, disabled, className, id }) => (
  <label
    className={cn(className, {
      [styles.Label]: !disabled,
      [styles.Label___disabled]: disabled,
    })}
    htmlFor={htmlFor}
    id={id}
    type="radio"
  >
    {children}
  </label>
);

Label.defaultProps = {
  disabled: false,
  className: null,
  id: null,
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Label;
