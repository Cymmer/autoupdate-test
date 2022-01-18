import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Image = ({ src, alt }) => (
  <div className={styles.Image_container}>
    <img alt={alt} className={styles.Image} src={src} />
  </div>
);

Image.propTypes = {
  src: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
