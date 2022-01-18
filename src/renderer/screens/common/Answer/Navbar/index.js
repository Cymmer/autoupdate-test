import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GLOBALS from 'codechum-app-globals';
import { changeTheme } from 'codechum-app-utils';

import Logo from 'static/images/Logo/icon-dark.svg';

import { actions as settingsActions } from 'ducks/reducers/settings';
import { getIsNightMode, getUser, getAnswerTaskLayout } from 'ducks';

import {
  IconLink,
  IconButton,
  Span,
  Icon,
  Text,
  ControlledDropdown,
} from 'components/elements';
import {
  iconButtonTypes,
  textTypes,
  dropdownTypes,
} from 'components/elements/constants';

import styles from './styles.module.scss';

import Info from './Info';

const Navbar = ({
  info,
  isNightMode,
  uiSettingsUpdate,
  isCodeSaving,
  user: { user_type: userType },
  answerTaskLayout,
}) => {
  useEffect(() => {
    changeTheme(isNightMode);
  }, [isNightMode]);

  return (
    <nav className={styles.Navbar}>
      <div className={styles.Navbar_left}>
        <Link
          to={
            userType === GLOBALS.USER_TYPES.STUDENT
              ? '/student/home'
              : GLOBALS.ROUTE.TEACHER.MAIN_PAGE
          }
        >
          <img alt="Cody" className={styles.Navbar_cody} src={Logo} />
        </Link>
        <div className={styles.Navbar_back}>
          <IconLink
            icon="arrow_back"
            to={
              userType === GLOBALS.USER_TYPES.STUDENT
                ? '/student/home'
                : GLOBALS.ROUTE.TEACHER.MAIN_PAGE
            }
            type={iconButtonTypes.SOLID.MD}
          />
          <Text
            className={styles.Navbar_back_text}
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
            type={textTypes.BODY.SM}
          >
            {userType === GLOBALS.USER_TYPES.STUDENT && 'Back to Home'}
            {(userType === GLOBALS.USER_TYPES.TEACHER ||
              userType === GLOBALS.USER_TYPES.MANAGER ||
              userType === GLOBALS.USER_TYPES.ADMIN) &&
              'Back to Main Page'}

            {userType == null && 'Go to Login'}
          </Text>
        </div>
      </div>
      <div className={styles.Navbar_info}>{info}</div>
      <div className={styles.Navbar_right}>
        <div className={styles.Navbar_answerTaskLayout}>
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.BLUE[300]}
            type={textTypes.HEADING.XXXS}
          >
            Layout:
          </Text>
          <ControlledDropdown
            className={styles.Navbar_answerTaskLayout_dropdown}
            data-test="asnwerTaskLayoutDropdown"
            name="answerTaskLayout"
            options={Object.values(GLOBALS.ANSWER_TASK_LAYOUTS).map(
              (value) => ({
                label: value,
                value,
              })
            )}
            type={dropdownTypes.SLIM}
            value={{
              value: answerTaskLayout,
              label: answerTaskLayout,
            }}
            onChange={(val) =>
              uiSettingsUpdate({ answerTaskLayout: val.value })
            }
          />
        </div>

        <div
          className={cn({
            [styles.Navbar_saveIndicator___saving]: isCodeSaving,
            [styles.Navbar_saveIndicator___saved]: !isCodeSaving,
          })}
        >
          {isCodeSaving === true && (
            <>
              <Icon
                className={styles.Navbar_saveIndicator_icon}
                icon="hourglass_empty"
              />
              <Span
                className={styles.Navbar_saveIndicator_text}
                type={textTypes.BODY.SM}
              >
                Saving...
              </Span>
            </>
          )}
          {isCodeSaving === false && (
            <>
              <Icon className={styles.Navbar_saveIndicator_icon} icon="check" />
              <Span
                className={styles.Navbar_saveIndicator_text}
                type={textTypes.BODY.SM}
              >
                Saved
              </Span>
            </>
          )}
        </div>

        <IconButton
          className={styles.Navbar_button}
          icon={isNightMode ? 'wb_sunny' : 'brightness_2'}
          iconClassName={styles.Navbar_button_icon}
          type={iconButtonTypes.SOLID.MD}
          onClick={() => uiSettingsUpdate({ isNightMode: !isNightMode })}
        />
      </div>
    </nav>
  );
};

Navbar.Info = Info;

Navbar.defaultProps = {
  info: null,
  isCodeSaving: null,
};

Navbar.propTypes = {
  // a JSX element that contains all the Navbar.Info elements. All
  // of the Navbar.Info elements should be grouped by a single
  // container element (e.g. <div>, <React.Fragment>, etc)
  info: PropTypes.node,

  isCodeSaving: PropTypes.bool,

  isNightMode: PropTypes.bool.isRequired,

  user: PropTypes.object.isRequired,

  answerTaskLayout: PropTypes.oneOf(Object.values(GLOBALS.ANSWER_TASK_LAYOUTS))
    .isRequired,

  // updates the UI settings in the reducer
  uiSettingsUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  isNightMode: getIsNightMode(store),
  user: getUser(store),
  answerTaskLayout: getAnswerTaskLayout(store),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ...settingsActions.uiActions,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
