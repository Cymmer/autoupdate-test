import axios from 'axios';

export const BASE_URL = '/v1/answer-comments/';

const AnswerCommentsService = {
  list: ({ answerId }) =>
    axios.get(BASE_URL, {
      params: {
        answer_id: answerId,
      },
    }),
  count: ({ answerId }) =>
    axios.get(`${BASE_URL}count/`, {
      params: {
        answer_id: answerId,
      },
    }),
};

export default AnswerCommentsService;
