import GLOBALS from 'codechum-app-globals';

export const isProduction = () =>
  process.env.NODE_ENV === GLOBALS.ENVIRONMENTS.PRODUCTION;

export const isLocal = () =>
  process.env.NODE_ENV === GLOBALS.ENVIRONMENTS.DEVELOPMENT;

const apiUrl = 'http://localhost:3000';
const runCodeUrl = 'http://127.0.0.1:40459';

const config = {
  API_URL: apiUrl,
  RUN_CODE_URL: runCodeUrl,
  BASE_URL: window.location.origin,
  GCS_BUCKET_URL: isLocal() ? apiUrl : 'https://storage.googleapis.com',
  INTERACTIVE_CHECKER_URL: 'http://127.0.0.1:40459',
};

export default config;
