import GLOBALS from 'codechum-app-globals';
import { TaskCardLargeV4Student, TaskList } from 'components';
import { NoResults, Section } from 'components/elements';
import { noResultsTypes } from 'components/elements/constants';
import { getUser } from 'ducks';
import { useStudentTasks, useTimedTasks } from 'hooks';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

export const Activities = ({
  section: { id: sectionId },
  user: { id: studentId },
}) => {
  // ongoing and future tasks
  const { isLoading: ongoingTasksIsLoading, data: ongoingTasks } =
    useStudentTasks({
      studentId,
      params: {
        status: 'present,future',
        sectionId,
        isCourseActivity: false,
      },
    });

  const { runningTasks: runningOngoingTasks } = useTimedTasks(ongoingTasks);

  return (
    <Section id="ongoingActivitiesStudentSection" title="Ongoing Activities">
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
  );
};

Activities.propTypes = {
  section: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
});

export default connect(mapStateToProps, null)(Activities);
