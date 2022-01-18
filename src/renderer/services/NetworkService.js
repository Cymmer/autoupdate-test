import axios from 'axios';

export const BASE_URL = '/v1/network';

const NetworkService = {
  retrieve: () => axios.get(`${BASE_URL}/`),
};

export default NetworkService;
