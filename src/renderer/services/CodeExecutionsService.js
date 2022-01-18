import axios from 'axios';
import config from './config';

export const BASE_URL = '/v1/interactive/';

const CodeExecutionsService = {
  execute: ({ body }) =>
    axios.post(
      `${config.RUN_CODE_URL}${BASE_URL}non-interactive-playground`,
      body
    ),
};

export default CodeExecutionsService;
