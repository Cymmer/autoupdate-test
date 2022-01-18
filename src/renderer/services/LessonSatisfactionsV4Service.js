import axios from 'axios';

export const BASE_URL = '/v1/lesson-satisfactions-v4/';

const LessonSatisfactionsV4Service = {
  create: ({ body }) => axios.post(BASE_URL, body),
};

export default LessonSatisfactionsV4Service;
