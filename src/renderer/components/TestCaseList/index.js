import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../elements';
import { gridTypes } from '../elements/constants';

import Preloader from './Preloader';

const TestCaseList = ({ className, isLoading, children }) => (
  <Grid className={className} type={gridTypes.ONE}>
    {isLoading ? <Preloader /> : children}
  </Grid>
);

TestCaseList.defaultProps = {
  className: null,
  isLoading: false,
};

TestCaseList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default TestCaseList;
