import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../elements';
import { gridTypes } from '../elements/constants';

import Preloader from './Preloader';

const LatestExecutionList = ({ className, isLoading, children }) => (
  <Grid className={className} type={gridTypes.ONE}>
    {isLoading ? <Preloader /> : children}
  </Grid>
);

LatestExecutionList.defaultProps = {
  className: null,
  isLoading: false,
};

LatestExecutionList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default LatestExecutionList;
