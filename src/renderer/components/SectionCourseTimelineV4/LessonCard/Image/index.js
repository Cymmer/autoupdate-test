import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

const LessonImage = ({ className, colorName, image }) => (
  <div
    className={cn(
      styles.LessonImage,
      styles[`LessonImage___${colorName}`],
      className
    )}
    style={{ backgroundImage: `url(${image})` }}
  />
);

LessonImage.defaultProps = {
  className: null,
};

LessonImage.propTypes = {
  className: PropTypes.string,
  colorName: PropTypes.oneOf(Object.values(GLOBALS.COLOR_NAMES)),
  image: PropTypes.string,
};

export default LessonImage;
