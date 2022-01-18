import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Shine = ({ className }) => (
  <div className={cn(styles.Shine, className)} />
);

Shine.defaultProps = {
  className: null,
};

Shine.propTypes = {
  className: PropTypes.string,
};

export default Shine;
