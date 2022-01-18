import axios from 'axios';

export const BASE_URL = '/v1/server/';

const ServerService = {
  getServerTime: () => axios.get(`${BASE_URL}time/`),
};

export default ServerService;
