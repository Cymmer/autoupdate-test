import React from 'react';
import PropTypes from 'prop-types';

import PreloaderLarge from './Large';
import PreloaderSmall from './Small';

import taskListTypes from '../constants/taskListTypes';

const Preloader = ({ type }) => (
  <>
    {type === taskListTypes.LARGE && (
      <>
        <PreloaderLarge />
        <PreloaderLarge />
      </>
    )}
    {type === taskListTypes.SMALL && (
      <>
        <PreloaderSmall />
        <PreloaderSmall />
        <PreloaderSmall />
        <PreloaderSmall />
      </>
    )}
  </>
);

Preloader.defaultProps = {
  type: taskListTypes.LARGE,
};

Preloader.propTypes = {
  type: PropTypes.oneOf([taskListTypes.LARGE, taskListTypes.SMALL]),
};

export default Preloader;
