import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container, Text, SubInfo, Header } from 'components/elements';
import { textTypes } from 'components/elements/constants';
import { useStudentTask } from 'hooks';
import { getUser } from 'ducks';
import {
  formatTaskSchedule,
  determinePercentageColorName,
} from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import Problems from './Problems';

import viewTaskTabs from '../constants/viewTaskTabs';

import Preloader from '../Preloader';

const ViewTask = ({
  match: {
    params: { taskId, sectionId, activeTab },
  },
  user,
}) => {
  const { id: studentId } = user;
  const { isLoading: isTaskLoading, task } = useStudentTask({
    studentId,
    taskId,
  });

  if (isTaskLoading) {
    return <Preloader />;
  }

  const {
    name: taskName,
    section: { name: sectionName },
    start_time: startTime,
    end_time: endTime,
    programming_languages: programmingLanguages,
    max_score: maxScore,
    details: { score },
  } = task;

  return (
    <>
      <Header
        activeTab={activeTab}
        breadcrumbs={
          sectionId
            ? [
                {
                  name: 'My Classes',
                  link: '/student/classes',
                },
                {
                  name: sectionName,
                  link: `/student/classes/${sectionId}/overview`,
                },
                {
                  name: taskName,
                  link: '#',
                },
              ]
            : [
                {
                  name: 'Home',
                  link: '/student/home',
                },
                {
                  name: taskName,
                  link: '#',
                },
              ]
        }
        data-test="viewTaskHeader"
      >
        <div className={styles.ViewTask_info}>
          <div
            className={
              styles[
                `ViewTask_accent___${determinePercentageColorName(
                  score || 0,
                  maxScore
                )}`
              ]
            }
          />
          <div className={styles.ViewTask_text}>
            <div>
              <div className={styles.ViewTask_name}>
                <Text
                  className={styles.ViewTask_name_text}
                  type={textTypes.HEADING.SM}
                >
                  {taskName}
                </Text>
                <Text
                  colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
                  type={textTypes.BODY.LG}
                >
                  ({maxScore} points)
                </Text>
              </div>
              <SubInfo
                data={[
                  {
                    icon: 'people',
                    text: sectionName,
                    link: `/student/classes/${sectionId}/timeline`,
                  },
                  {
                    icon: 'access_time',
                    text: formatTaskSchedule(
                      moment(startTime),
                      moment(endTime)
                    ),
                  },
                  {
                    icon: 'code',
                    text: programmingLanguages
                      .map((language) => language.name)
                      .join(', '),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Header>
      <Container>
        <React.Suspense fallback={<div>loading</div>}>
          <Switch>
            <Route
              name="Task - Problems"
              path={`/student/classes/:sectionId/activities/:taskId/${viewTaskTabs.PROBLEMS.value}`}
              render={(props) => <Problems task={task} {...props} />}
            />
            <Route
              name="Task - Problems"
              path={`/student/activities/:taskId/${viewTaskTabs.PROBLEMS.value}`}
              render={(props) => <Problems task={task} {...props} />}
            />

            <Redirect to="/page-not-found" />
          </Switch>
        </React.Suspense>
      </Container>
    </>
  );
};

ViewTask.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      taskId: PropTypes.string.isRequired,
      activeTab: PropTypes.string.isRequired,
      sectionId: PropTypes.string,
    }),
  }).isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
});

export default connect(mapStateToProps, null)(ViewTask);
