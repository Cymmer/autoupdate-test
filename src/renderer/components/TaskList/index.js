import PropTypes from 'prop-types';
import React from 'react';
import { Grid } from '../elements';
import { gridTypes } from '../elements/constants';
import taskListTypes from './constants/taskListTypes';
import Preloader from './Preloader';

const TaskList = ({ className, type, isLoading, children }) => (
  <Grid
    className={className}
    type={type === taskListTypes.LARGE ? gridTypes.ONE : gridTypes.TWO}
  >
    {isLoading ? <Preloader type={type} /> : children}
  </Grid>
);

TaskList.defaultProps = {
  className: null,
  type: taskListTypes.LARGE,
  isLoading: false,
  children: null,
};

TaskList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf([taskListTypes.LARGE, taskListTypes.SMALL]),
  isLoading: PropTypes.bool,
};

export default TaskList;
