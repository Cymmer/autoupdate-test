import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect, Route } from 'react-router-dom';
import { getAccessToken } from '../ducks';

const NoAuthRoute = ({ accessToken, location, ...rest }) => {
  // redirect the student to the Student homepage
  if (accessToken) {
    return <Route name="Student" render={() => <Redirect to="/student" />} />;
  }

  return <Route {...rest} />;
};

NoAuthRoute.defaultProps = {
  exact: true,
  accessToken: null,
};

NoAuthRoute.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,

  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  accessToken: PropTypes.string,
};

const mapStateToProps = (store) => ({
  accessToken: getAccessToken(store),
});

export default withRouter(connect(mapStateToProps, null)(NoAuthRoute));
