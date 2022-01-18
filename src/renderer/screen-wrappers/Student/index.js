/* eslint-disable react-hooks/exhaustive-deps */
import cn from 'classnames';
import { Spinner, Text } from 'components/elements';
import { textTypes } from 'components/elements/constants';
import { getSyncCount, getUser } from 'ducks';
import { actions as sessionActions } from 'ducks/reducers/session';
import { actions as settingsActions } from 'ducks/reducers/settings';
import useNetwork from 'hooks/useNetwork';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  Home,
  Sections,
  ViewLesson,
  ViewSection,
  ViewTask
} from 'screens/student';
import { viewSectionTabs } from 'screens/student/constants';
import { SyncService } from 'services';
import { STUDENT_ROUTES } from './constants';
import Navbar from './Navbar';
import styles from './styles.module.scss';
import GLOBALS from 'codechum-app-globals';
import {
  buttonTypes,
  iconButtonTypes,
  textTypes
} from 'components/elements/constants';
import TaskResult from 'screens/student/TaskResult';

const getSectionIdInPath = (pathname) => {
  const pathTokens = pathname.split('/').filter((token) => token !== '');

  const classesStringPathIndex = pathTokens.findIndex(
    (token) => token === 'classes'
  );

  if (
    classesStringPathIndex === -1 ||
    classesStringPathIndex === pathTokens.length - 1
  ) {
    return null;
  }

  return pathTokens[classesStringPathIndex + 1];
};

const isInViewLessonScreen = (pathname) => {
  const pathTokens = pathname.split('/').filter((token) => token !== '');

  const timelineStringPathIndex = pathTokens.findIndex(
    (token) => token === viewSectionTabs.TIMELINE.value
  );

  return (
    timelineStringPathIndex !== -1 &&
    timelineStringPathIndex !== pathTokens.length - 1
  );
};

const StudentContainer = ({
  user,
  internetSettingsUpdate,
  sessionUpdate,
  syncCount,
}) => {
  document.body.id = 'studentContainer';

  const history = useHistory();

  const [isSycning, setIsSyncing] = useState(false);
  const [syncErrorMessage, setSyncErrorMessage] = useState(null);

  const { pathname } = useLocation();
  const sectionId = getSectionIdInPath(pathname);

  const { data } = useNetwork();

  useEffect(() => {
    internetSettingsUpdate({ isConnected: data });
  }, [data]);

  const onSync = () => {
    setIsSyncing(true);
    setSyncErrorMessage(null);

    SyncService.sync()
    .catch(e => {
      setSyncError(e.response.data);
    }).finally(() => {
      history.go(0);
      setIsSyncing(false);
      sessionUpdate({
        syncCount: syncCount + 1,
      });
    });
  };

  const onCloseModal = () => {
    setSyncErrorMessage(null);
  }

  return (
    <div className={styles.StudentContainer}>
      {
        isSycning && (
          <div className={styles.StudentContainer_spinner}>
            <Spinner />
            <Text className={styles.StudentContainer_spinner_text} type={textTypes.BODY.XS}>
              Hang in there as we are syncing your data. This may take a few minutes.
            </Text>
          </div>
        )
      }
  
      { syncErrorMessage &&  (<CodyModal
          actions={[
            { text: 'Retry', type: buttonTypes.PRIMARY.GREEN, onClick: onSync },
          ]}
          body={syncErrorMessage}
          codyType={GLOBALS.CODY_TYPES.ERROR}
          handleClose={onCloseModal}
          isOpen
          title="Uh oh"
        />)
      }
      
      <Navbar
        courseTimelineLink={
          isInViewLessonScreen(pathname)
            ? `/student/classes/${sectionId}/timeline`
            : null
        }
        isSyncing={isSycning}
        onSync={onSync}
      />
      <div
        className={cn({
          [styles.StudentContainer_container]: !isInViewLessonScreen(pathname),
          [styles.StudentContainer_container___lesson]:
            isInViewLessonScreen(pathname),
        })}
      >
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              name="Home"
              path={STUDENT_ROUTES.HOME}
              render={(props) => <Home {...props} />}
            />

            <Route
              exact
              name="Classes"
              path={STUDENT_ROUTES.CLASSES}
              render={(props) => <Sections {...props} />}
            />

            <Route
              name="View Lesson"
              path={STUDENT_ROUTES.VIEW_LESSON_SUMMARY}
              render={(props) => <ViewLesson {...props} />}
            />
            <Route
              name="View Lesson"
              path={STUDENT_ROUTES.VIEW_LESSON}
              render={(props) => <ViewLesson {...props} />}
            />

            <Route
              name="View Activity"
              path={STUDENT_ROUTES.VIEW_CLASS_ACTIVITY}
              render={(props) => <ViewTask {...props} />}
            />

            <Route
              name="View Activity"
              path={STUDENT_ROUTES.VIEW_ACTIVITY}
              render={(props) => <ViewTask {...props} />}
            />

            <Route
              name="View Class"
              path={STUDENT_ROUTES.VIEW_CLASS}
              render={(props) => <ViewSection {...props} />}
            />

            <Route
              name="Task Result"
              path={STUDENT_ROUTES.TASK_RESULT}
              render={(props) => (
                <>
                  <TaskResult {...props} />
                </>
              )}
            />

            <Redirect to={STUDENT_ROUTES.HOME} />
          </Switch>
        </React.Suspense>
        {user?.university?.logo && (
          <img
            alt="University Watermark"
            className={styles.StudentContainer_watermark}
            src={user.university.logo}
          />
        )}
      </div>
    </div>
  );
};

StudentContainer.propTypes = {
  user: PropTypes.shape({
    university: PropTypes.shape({
      logo: PropTypes.string,
    }),
  }).isRequired,
  internetSettingsUpdate: PropTypes.func.isRequired,
  syncCount: PropTypes.number.isRequired,
  sessionUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
  syncCount: getSyncCount(store),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ...settingsActions.internetActions,
      ...sessionActions.sessionActions,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);
