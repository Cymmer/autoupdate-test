import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../elements';
import { gridTypes } from '../elements/constants';

const SampleProblemList = ({ children }) => (
  <Grid type={gridTypes.ONE}>{children}</Grid>
);

SampleProblemList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SampleProblemList;
