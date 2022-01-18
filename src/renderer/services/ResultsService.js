import axios from 'axios';
import { removeUndefined } from 'codechum-app-utils';

export const BASE_URL = '/v1/results/';
export const BASE_URL_EXTENDED = '/v1/results/extended/';

const ResultsService = {
  list: ({
    isExtended = false,
    params: {
      page,
      pageSize,
      taskId,
      taskIds,
      studentId,
      isRanked,
      isPractice,
    } = {},
  } = {}) =>
    axios.get(isExtended ? BASE_URL_EXTENDED : BASE_URL, {
      params: removeUndefined({
        page,
        page_size: pageSize,
        task_id: taskId,
        task_ids: taskIds,
        student_id: studentId,
        is_ranked: isRanked,
        is_practice: isPractice,
      }),
    }),
  submit: ({ resultId, params: { taskId, studentId, setDateTimeSubmitted } }) =>
    axios.post(`${BASE_URL}${resultId}/submit/`, {
      task_id: taskId,
      student_id: studentId,
      set_datetime_submitted: setDateTimeSubmitted,
    }),
};

export default ResultsService;
