import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import Placeholder from '../../../static/images/placeholder.svg';

const UserImage = ({ className, imageClassName, image, id }) => (
  <div className={className}>
    <img
      alt="User"
      className={cn(styles.UserImage_image, imageClassName)}
      data-test="image"
      id={id}
      src={image || Placeholder}
    />
  </div>
);

UserImage.defaultProps = {
  image: null,
  className: null,
  imageClassName: null,
  id: null,
};

UserImage.propTypes = {
  image: PropTypes.any,
  className: PropTypes.string,
  imageClassName: PropTypes.string,
  id: PropTypes.string,
};

export default UserImage;
