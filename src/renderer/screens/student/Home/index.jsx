import GLOBALS from 'codechum-app-globals';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { TaskCardLargeV4Student, TaskList } from 'components';
import { Container, NoResults, Section } from 'components/elements';
import { noResultsTypes } from 'components/elements/constants';
import { getUser } from 'ducks';
import { useStudentTasks, useTimedTasks } from 'hooks';

export const Home = ({ user: { id: studentId } }) => {
  const { isFetching: ongoingTasksIsLoading, data: ongoingTasks } =
    useStudentTasks({
      studentId,
      params: {
        status: 'present,future',
        isCourseActivity: false,
      },
    });

  const { runningTasks: runningOngoingTasks } = useTimedTasks(
    ongoingTasks,
    ongoingTasksIsLoading === true
  );

  return (
    <Container>
      <Section id="ongoingActivitiesStudentHome" title="Ongoing Activities">
        <TaskList isLoading={ongoingTasksIsLoading}>
          {!ongoingTasksIsLoading && runningOngoingTasks?.length === 0 ? (
            <NoResults
              codyType={GLOBALS.CODY_TYPES.OK}
              text="Looks like you don't have any activities to do"
              type={noResultsTypes.SMALL}
            />
          ) : (
            runningOngoingTasks?.map((taskWithDetails) => (
              <TaskCardLargeV4Student
                key={taskWithDetails.id}
                task={taskWithDetails}
              />
            ))
          )}
        </TaskList>
      </Section>
    </Container>
  );
};

Home.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
});

export default connect(mapStateToProps, null)(Home);