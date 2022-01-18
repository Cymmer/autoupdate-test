import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../elements';
import { gridTypes } from '../elements/constants';

import sectionListTypes from './constants/sectionListTypes';
import Preloader from './Preloader';

const SectionList = ({ className, type, isLoading, children }) => (
  <Grid
    className={className}
    type={type === sectionListTypes.LARGE ? gridTypes.THREE : gridTypes.TWO}
  >
    {isLoading ? <Preloader type={type} /> : children}
  </Grid>
);

SectionList.defaultProps = {
  className: null,
  type: sectionListTypes.LARGE,
  isLoading: false,
  children: null,
};

SectionList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf([sectionListTypes.LARGE, sectionListTypes.SMALL]),
  isLoading: PropTypes.bool,
};

export default SectionList;
