/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Switch = ({ name, checked, onChange }) => (
  <div className={styles.Switch}>
    <input
      checked={checked}
      className={styles.Switch_input}
      id={name}
      name={name}
      type="checkbox"
      onChange={onChange}
    />
    <label className={styles.Switch_slider} htmlFor={name} />
  </div>
);

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Switch;
