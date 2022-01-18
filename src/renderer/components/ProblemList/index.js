import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../elements';
import { gridTypes } from '../elements/constants';

import problemListTypes from './constants/problemListTypes';
import Preloader from './Preloader';

const ProblemList = ({ children, className, isLoading, type }) => (
  <Grid
    className={className}
    type={type === problemListTypes.LARGE ? gridTypes.THREE : gridTypes.ONE}
  >
    {isLoading ? <Preloader type={type} /> : children}
  </Grid>
);

ProblemList.defaultProps = {
  actionsDisabled: null,
  children: null,
  className: null,
  isLoading: false,
  type: problemListTypes.LARGE,
};

ProblemList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf([problemListTypes.LARGE, problemListTypes.SMALL]),
  isLoading: PropTypes.bool,

  // an object that keeps track of the disabled actions
  actionsDisabled: PropTypes.shape({
    // if true, the view action is disabled
    view: PropTypes.bool,

    // if true, the edit action is disabled
    edit: PropTypes.bool,

    // if true, the delete action is disabled
    delete: PropTypes.bool,
  }),
};

export default ProblemList;
