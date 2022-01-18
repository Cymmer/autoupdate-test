import { ResultsService } from '../services';

/**
 * Finishes an activity. This is to be used in
 * the Answer screens in the student side
 * @param {Number} resultId - the id of the Result object of the student
 * @param {Number} taskId - the id of the Task object answered by the student
 * @param {Number} studentId - the id of the User object (or in this case, the student)
 * @param {Boolean} setDateTimeSubmitted - if true, the datetime_submitted of the Result
 *                                         is set to the current time
 * @param {Function} onSuccess - the success handler function
 */
export const finishActivity = ({
  resultId,
  taskId,
  userId,
  setDateTimeSubmitted = true,
  onSuccess = null,
}) => {
  ResultsService.submit({
    resultId,
    params: {
      taskId,
      studentId: userId,
      setDateTimeSubmitted,
    },
  })
    .then(({ data }) => {
      if (onSuccess) {
        onSuccess({
          rank: data.rank,
          // eslint-disable-next-line radix
          score: parseInt(data.score),
        });
      }

      return data;
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.error(e);
    });
};

/**
 * Checks if a Result has already been submitted
 * @param {Object} result - the Result object to be checked
 * @return {Boolean} true if the Result has already been submitted
 */
export const isResultSubmitted = (result) => result?.datetime_submitted != null;
