import GLOBALS from 'codechum-app-globals';
import { changeTheme, getSubdomain } from 'codechum-app-utils';
import {
  Button,
  IconButton,
  IconLink,
  NavUser,
  Text
} from 'components/elements';
import {
  buttonTypes,
  iconButtonTypes,
  textTypes
} from 'components/elements/constants';
import { getIsConnected, getIsNightMode } from 'ducks';
import { actions as settingsActions } from 'ducks/reducers/settings';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Logo from '../../../static/images/Logo/icon-dark.svg';
import studentNavLinks from '../constants/studentNavLinks';
import ConnectionStatus from './ConnectionStatus';
import styles from './styles.module.scss';

const determineLogos = () => {
  const subdomain = getSubdomain(window.location.host);

  if (subdomain === GLOBALS.UNIVERSITIES.MCL.SUBDOMAIN) {
    return GLOBALS.UNIVERSITIES.MCL.LOGO.SMALL;
  }

  return Logo;
};

export const StudentNavbar = ({
  uiSettingsUpdate,
  isNightMode,
  isConnected,
  courseTimelineLink,
  isSyncing,
  onSync,
}) => {
  useEffect(() => {
    changeTheme(isNightMode);
  }, [isNightMode]);

  const logo = determineLogos();

  return (
    <nav className={styles.StudentNavbar}>
      <div className={styles.StudentNavbar_nav}>
        {!courseTimelineLink && (
          <>
            <Link to="/student/home">
              <img alt="Cody" data-test="logo" src={logo} />
            </Link>
            {studentNavLinks
              .filter(({ text }) => text)
              .map(({ id, to, text }) => (
                <NavLink
                  key={id}
                  activeClassName={styles.StudentNavbar_link___active}
                  className={styles.StudentNavbar_link}
                  to={to}
                >
                  {text}
                </NavLink>
              ))}
          </>
        )}

        {courseTimelineLink && (
          <div className={styles.StudentNavbar_back}>
            <IconLink
              className={styles.StudentNavbar_back_button}
              icon="keyboard_backspace"
              to={courseTimelineLink}
              type={iconButtonTypes.SOLID.MD}
            />
            <Text
              className={styles.StudentNavbar_back_text}
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
              type={textTypes.BODY.SM}
            >
              Back to Timeline
            </Text>
          </div>
        )}
      </div>
      <div className={styles.StudentNavbar_actions}>
        <Button
          className={styles.StudentNavbar_button_sync}
          disabled={isSyncing}
          icon="sync"
          type={buttonTypes.TEXT.BLUE}
          onClick={onSync}
        >
          {isSyncing ? 'Syncing...' : 'Sync Now'}
        </Button>
        <ConnectionStatus isConnected={isConnected} />
        <IconButton
          className={styles.StudentNavbar_button}
          icon={isNightMode ? 'wb_sunny' : 'brightness_2'}
          iconClassName={styles.StudentNavbar_button_icon}
          type={iconButtonTypes.SOLID.MD}
          onClick={() => uiSettingsUpdate({ isNightMode: !isNightMode })}
        />
        <NavUser userType={GLOBALS.USER_TYPES.STUDENT} />
      </div>
    </nav>
  );
};

StudentNavbar.defaultProps = {
  courseTimelineLink: null,
};

StudentNavbar.propTypes = {
  isNightMode: PropTypes.bool.isRequired,
  // updates the UI settings in the reducer
  uiSettingsUpdate: PropTypes.func.isRequired,
  courseTimelineLink: PropTypes.string,
  isConnected: PropTypes.bool.isRequired,
  isSyncing: PropTypes.bool,
  onSync: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  isNightMode: getIsNightMode(store),
  isConnected: getIsConnected(store),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ...settingsActions.uiActions,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentNavbar);
