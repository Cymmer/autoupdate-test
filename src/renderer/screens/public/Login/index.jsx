import * as Yup from 'yup';

import {
  Button,
  ControlledInput,
  Spinner,
  Text
} from '../../../components/elements';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import {
  buttonTypes,
  inputKinds,
  inputTypes,
  spinnerSizes,
  textTypes
} from '../../../components/elements/constants';

import GLOBALS from 'codechum-app-globals';
import Logo from '../../../static/images/Logo/horizontal.svg';
import { PropTypes } from 'prop-types';
import { UsersService } from '../../../services';
import { bindActionCreators } from 'redux';
import { changeTheme } from 'codechum-app-utils';
import cn from 'classnames';
import { connect } from 'react-redux';
import { actions as programmingLanguagesActions } from '../../../ducks/reducers/programmingLanguages';
import { shell } from 'electron';
import styles from './styles.module.scss';
import { useHistory } from 'react-router-dom';
import { actions as usersActions } from '../../../ducks/reducers/users';

export const Login = ({ loginUpdate, listProgrammingLanguagesSuccess }) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const history = useHistory();

  changeTheme(false);

  return (
    <>
      <div className={styles.Login}>
        <div className={styles.Login_imageContainer}>
          <img alt="CodeChum Logo" src={Logo} />
        </div>
        <Text className={styles.Login_text} type={textTypes.HEADING.MD}>
          Welcome! Update 7
        </Text>
        <Formik
          initialValues={{ login: '', password: '', overall: null }}
          validationSchema={Yup.object().shape({
            login: Yup.string().required().label('Username'),
            password: Yup.string().required().label('Password'),
          })}
          onSubmit={(values, { setErrors }) => {
            setIsLoggingIn(true);

            UsersService.login({
              body: {
                login: values.login,
                password: values.password,
              },
            })
              .then(async (loginResponse) => {
                const { user, token } = loginResponse.data;

                if (user.user_type === GLOBALS.USER_TYPES.STUDENT) {
                  listProgrammingLanguagesSuccess({
                    programmingLanguages:
                      loginResponse.data.programming_languages,
                  });

                  loginUpdate({
                    access_token: token,
                    user,
                  });

                  history.replace('/student');
                } else {
                  setErrors({
                    overall: 'Only students can login in this application',
                  });
                }

                return null;
              })
              .catch((e) => {
                setErrors({
                  overall: e?.response?.data?.detail,
                });
              })
              .finally(() => {
                setIsLoggingIn(false);
              });
          }}
        >
          {({ errors, touched, values, setFieldValue }) => (
            <Form>
              <div>
                <ControlledInput
                  className={cn(styles.Login_input, {
                    [styles.Login_input___error]: errors.overall != null,
                  })}
                  data-test="loginInput"
                  error={errors.login}
                  name="login"
                  placeholder="Username/Email"
                  touched={touched.login}
                  type={inputTypes.FORM}
                  value={values.login}
                  onChange={(e) => setFieldValue('login', e.target.value)}
                />
                <ControlledInput
                  className={cn(styles.Login_input, {
                    [styles.Login_input___error]: errors.overall != null,
                  })}
                  data-test="passwordInput"
                  error={errors.password}
                  kind={inputKinds.PASSWORD}
                  name="password"
                  placeholder="Password"
                  touched={touched.password}
                  type={inputTypes.FORM}
                  value={values.password}
                  onChange={(e) => setFieldValue('password', e.target.value)}
                />
                {errors.overall && (
                  <Text
                    className={styles.Login_errorMessage}
                    colorClass={GLOBALS.COLOR_CLASSES.RED['500']}
                    data-test="overallError"
                    type={textTypes.BODY.XS}
                  >
                    {errors.overall}
                  </Text>
                )}
              </div>
              <div className={styles.Login_buttonGroup}>
                <Button
                  data-test="signinButton"
                  disabled={isLoggingIn}
                  id="signinButton"
                  kind={GLOBALS.BUTTON_KINDS.SUBMIT}
                  type={buttonTypes.PRIMARY.BLUE}
                  onClick={() => {}}
                >
                  <span className={styles.Login_buttonText}>
                    Sign In
                    {isLoggingIn && (
                      <Spinner
                        className={styles.Login_spinner}
                        colorName={GLOBALS.COLOR_NAMES.WHITE}
                        size={spinnerSizes.XS}
                      />
                    )}
                  </span>
                </Button>
                <Button
                  disabled={isLoggingIn}
                  id="signupButton"
                  type={buttonTypes.SECONDARY.BLUE}
                  onClick={() => {
                    shell.openExternal(
                      'https://app.codechum.com/signup?source=desktop'
                    );
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

Login.propTypes = {
  listProgrammingLanguagesSuccess: PropTypes.func.isRequired,
  loginUpdate: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ...usersActions.loginActions,
      ...programmingLanguagesActions.listActions,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(Login);
