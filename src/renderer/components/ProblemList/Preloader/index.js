import React from 'react';
import PropTypes from 'prop-types';

import PreloaderLarge from './Large';
import PreloaderSmall from './Small';

import problemListTypes from '../constants/problemListTypes';

const Preloader = ({ type }) => (
  <>
    {type === problemListTypes.LARGE && (
      <>
        <PreloaderLarge />
        <PreloaderLarge />
        <PreloaderLarge />
      </>
    )}
    {type === problemListTypes.SMALL && (
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
  type: problemListTypes.LARGE,
};

Preloader.propTypes = {
  type: PropTypes.oneOf([problemListTypes.LARGE, problemListTypes.SMALL]),
};

export default Preloader;
