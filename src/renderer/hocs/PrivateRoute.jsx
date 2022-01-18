import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { getAccessToken } from '../ducks';

const PrivateRoute = ({ accessToken, ...rest }) => {
  if (accessToken) {
    return <Route {...rest} />;
  }

  return <Route name="Login" render={() => <Redirect to="/" />} />;
};

PrivateRoute.defaultProps = {
  accessToken: null,
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  accessToken: PropTypes.string,
};

const mapStateToProps = (store) => ({
  accessToken: getAccessToken(store),
});

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));
