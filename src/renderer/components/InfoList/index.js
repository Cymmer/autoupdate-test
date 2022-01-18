import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../elements';
import { gridTypes } from '../elements/constants';

const InfoList = ({ className, children }) => (
  <Grid className={className} type={gridTypes.ONE}>
    {children}
  </Grid>
);

InfoList.defaultProps = {
  className: null,
};

InfoList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default InfoList;
