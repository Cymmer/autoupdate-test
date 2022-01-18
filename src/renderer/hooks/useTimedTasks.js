/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import {
  isTaskFinished,
  isTaskHasntStarted,
  isTaskStarting,
} from 'codechum-app-utils';
import { useInterval } from '.';

const useTimedTasks = (tasks, isPaused = false) => {
  const [runningTasks, setRunningTasks] = useState([]);
  const [stoppedTasks, setStoppedTasks] = useState([]);

  useEffect(() => {
    if (isPaused) {
      setRunningTasks([]);
      return;
    }

    if (tasks?.length >= 0) {
      setRunningTasks(tasks);
    }
  }, [tasks?.length, isPaused]);
  
  useInterval(() => {
    if (runningTasks?.length > 0) {
      const updatedTasks = runningTasks.map((task) => ({
        ...task,
        time_before_end: task.time_before_end - 1,
        time_before_start: task.time_before_start - 1,
      }));

      setStoppedTasks(updatedTasks.filter((task) => isTaskFinished(task)));

      setRunningTasks(
        updatedTasks.filter(
          (task) => isTaskStarting(task) || isTaskHasntStarted(task)
        )
      );
    }
  }, 1000);

  return { runningTasks, stoppedTasks };
};

export default useTimedTasks;
