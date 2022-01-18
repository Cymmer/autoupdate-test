import axios from 'axios';

export const BASE_URL = '/v1/answers-v4/';

const AnswersService = {
  execute: ({ answerId, body }) =>
    axios.post(`${BASE_URL}${answerId}/executev2/`, body),
};

export default AnswersService;
