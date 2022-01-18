import axios from 'axios';

export const BASE_URL = '/v1/users-v4/';

const UsersService = {
  retrieve: ({ userId, params = {} }) =>
    axios.get(`${BASE_URL}${userId}/`, { params }),
};

export default UsersService;
