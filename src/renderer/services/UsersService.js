import axios from 'axios';

export const BASE_URL = '/v1/users/';

const UsersService = {
  login: ({ body }) => axios.post(`${BASE_URL}login/`, body),
};

export default UsersService;
