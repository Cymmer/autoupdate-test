import { useState, useEffect } from 'react';
import { isTaskHasntStarted, isTaskFinished } from 'codechum-app-utils';
import { TasksService } from '../services';

const DEFAULT_TASK_STATUSES = {
  isInvalid: false,
  isNotStarting: false,
  isFinished: false,
};

const useStudentTask = ({ taskId, studentId, params }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [task, setTask] = useState(null);
  const [taskStatuses, setTaskStatuses] = useState({
    ...DEFAULT_TASK_STATUSES,
  });

  useEffect(() => {
    const retrieveTask = async () => {
      const statuses = { ...DEFAULT_TASK_STATUSES };

      const {
        data: { results: retrievedTasks },
      } = await TasksService.compounded.listStudentTasksWithDetails({
        params: {
          ids: taskId,
          studentId,
          includeAssociatedToLessonTasks: true,
          status: 'past,present,future',
          ...params,
        },
      });
      const retrievedTask = retrievedTasks[0];
      const retrievedTaskBirthDate = new Date();

      if (!retrievedTask) {
        statuses.isInvalid = true;
      }
      if (retrievedTask && isTaskHasntStarted(retrievedTask)) {
        statuses.isNotStarting = true;
      }
      if (retrievedTask && isTaskFinished(retrievedTask)) {
        statuses.isFinished = true;
      }
      setTaskStatuses(statuses);

      if (statuses.isInvalid) {
        setIsLoading(false);
        return;
      }

      // the purpose of computing and subtracting this is because
      // other requests made to the server might take time. While
      // they are ongoing, we need to "simulate" the countdown
      // of the task time as if it were ticking down immediately
      // after it was retrieved from the DB
      const retrievedTaskDieDate = new Date();
      const retrievedTaskAgeInSeconds = Math.round(
        (retrievedTaskDieDate - retrievedTaskBirthDate) / 1000
      );
      setTask({
        ...retrievedTask,
        time_before_end:
          retrievedTask.time_before_end - retrievedTaskAgeInSeconds,
        time_before_start:
          retrievedTask.time_before_start - retrievedTaskAgeInSeconds,
      });

      setIsLoading(false);
    };

    retrieveTask();
  }, [taskId]);

  return { isLoading, taskStatuses, task };
};

export default useStudentTask;
