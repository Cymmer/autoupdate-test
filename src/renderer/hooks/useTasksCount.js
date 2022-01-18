import { useState, useEffect } from 'react';

import { TasksService } from '../services';

const useTasksCount = ({ params, isPaused = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(null);

  useEffect(() => {
    const countTasks = async () => {
      const { data: retrievedCount } = await TasksService.count({
        params,
      });

      setCount(retrievedCount);

      setIsLoading(false);
    };

    if (!isPaused) {
      countTasks();
    }
  }, [...Object.keys(params).map((key) => params[key]), isPaused]);

  return { isLoading, count };
};

export default useTasksCount;
