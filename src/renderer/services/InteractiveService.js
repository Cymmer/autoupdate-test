import axios from 'axios';
import config from './config';

export const BASE_URL = '/v1/interactive/';

const InteractiveService = {
  execute: ({ body }) =>
    axios.post(`${config.INTERACTIVE_CHECKER_URL}${BASE_URL}checker`, body),
  nonInteractivePlayground: ({ body }) =>
    axios.post(
      `${config.INTERACTIVE_CHECKER_URL}${BASE_URL}non-interactive-playground`,
      body
    ),
};

export default InteractiveService;
