import axios from 'axios';

export const BASE_URL = '/v1/test-case-statuses/';

const TestCaseStatusesService = {
  listAnswerLatestTestCaseStatuses: ({ params: { answerId } = {} } = {}) =>
    axios.get(`${BASE_URL}answers/${answerId}/latest/`, {
      params: {
        answer_id: answerId,
      },
    }),
};

export default TestCaseStatusesService;
