import axios from 'axios';

export const BASE_URL = '/v1/answers/';

const AnswersService = {
  update: ({ answerId, body }) => axios.patch(`${BASE_URL}${answerId}/`, body),
};

export default AnswersService;
