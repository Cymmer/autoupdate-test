import React from 'react';
import PropTypes from 'prop-types';

import PreloaderLarge from './Large';
import PreloaderSmall from './Small';

import sectionListTypes from '../constants/sectionListTypes';

const Preloader = ({ type }) => (
  <>
    {type === sectionListTypes.LARGE && (
      <>
        <PreloaderLarge />
        <PreloaderLarge />
        <PreloaderLarge />
      </>
    )}
    {type === sectionListTypes.SMALL && (
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
  type: sectionListTypes.LARGE,
};

Preloader.propTypes = {
  type: PropTypes.oneOf([sectionListTypes.LARGE, sectionListTypes.SMALL]),
};

export default Preloader;
