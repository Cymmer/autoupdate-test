import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../elements';
import { gridTypes } from '../elements/constants';

const ProblemInputList = ({ className, children }) => (
  <Grid className={className} rowGap={8} type={gridTypes.ONE}>
    {children}
  </Grid>
);

ProblemInputList.defaultProps = {
  className: null,
};

ProblemInputList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ProblemInputList;
