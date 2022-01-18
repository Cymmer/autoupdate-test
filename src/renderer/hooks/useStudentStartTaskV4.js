import { useState, useEffect } from 'react';

import { TasksV4Service } from 'services';

/**
 * sort the Answer objects base on the number ONLY if the task is randomized.
 * NOTE: this mutates the Result object passed
 * @param {Object} task - the Task object from the server
 * @param {Result} result - the Result object from the server
 */
const sortAnswersIfTaskIsRandomized = (task, result) => {
  // if the task is not randomized, we will just exit immediately
  // as there is no need to sort the order of the answers
  if (!task.is_randomized) {
    return;
  }

  result.answers = result.answers.sort((a, b) => a.number - b.number);
};

/* eslint-disable camelcase */
const useStudentStartTaskV4 = ({ task, studentId, isPractice }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isResultSubmitted, setIsResultSubmitted] = useState(false);
  const [result, setResult] = useState(null);

  const startTask = async () => {
    setIsLoading(true);
    // retrieve the Result of the student for this Task by calling
    // the Student Start Task API if it is not a practice session
    let retrievedResult = null;
    if (!isPractice) {
      const { data } = await TasksV4Service.studentStartTask({
        taskId: task.id,
        studentId,
      });
      retrievedResult = data;
    } else {
      // otherwise, if it is a practice session, we call the
      // Student Practice Task API
      const { data } = await TasksV4Service.studentPracticeTask({
        taskId: task.id,
        studentId,
      });
      retrievedResult = data;
    }

    sortAnswersIfTaskIsRandomized(task, retrievedResult);
    setResult(retrievedResult);

    // if Result is already submitted we stop
    // this function immediately
    if (!isPractice && retrievedResult.datetime_submitted) {
      setIsResultSubmitted(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (task && !isLoading) {
      setResult(null);

      startTask();
    }
  }, [task?.id]);

  return {
    isLoading,
    isResultSubmitted,
    result,
  };
};

export default useStudentStartTaskV4;
