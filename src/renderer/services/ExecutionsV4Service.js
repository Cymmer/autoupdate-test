import axios from 'axios';
import { removeUndefined } from 'codechum-app-utils';

export const BASE_URL = '/v1/executions-v4/';
const BASE_URL_EXTENDED = '/v1/executions-v4/extended/';

const ExecutionsV4Service = {
  list: ({
    isExtended = false,
    params: {
      page,
      pageSize,
      answerId,
      studentId,
      taskId,
      potwTaskId,
      isPerfect,
      mode,
      ordering,
    } = {},
  } = {}) =>
    axios.get(isExtended ? BASE_URL_EXTENDED : BASE_URL, {
      params: removeUndefined({
        page,
        page_size: pageSize,
        answer_id: answerId,
        student_id: studentId,
        task_id: taskId,
        potw_task_id: potwTaskId,
        is_perfect: isPerfect,
        mode,
        ordering,
      }),
    }),
};

export default ExecutionsV4Service;
