import GLOBALS from 'codechum-app-globals';
import NoAuthRoute from 'hocs/NoAuthRoute';
import * as queryString from 'query-string';
import React from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { Login } from '../../screens/public';
import Watermark from '../../static/images/Logo/watermark.svg';
import Sidebar from './Sidebar';
import './styles.global.scss';
import styles from './styles.module.scss';

const LoginSignupContainer = () => {
  document.body.id = 'loginSignupContainer';

  const location = useLocation();
  const { source } = queryString.parse(location.search);

  return (
    <div className={styles.LoginSignupContainer}>
      <Sidebar
        color={GLOBALS.COLOR_THEMES.DEFAULT}
        data-test="sidebar"
        watermark={Watermark}
      />

      <section className={styles.LoginSignupContainer_container}>
        <div className={styles.LoginSignupContainer_accent} />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <NoAuthRoute
              name="Login"
              path="/"
              render={(props) => <Login source={source} {...props} />}
            />
          </Switch>
        </React.Suspense>
      </section>
    </div>
  );
};

export default LoginSignupContainer;
