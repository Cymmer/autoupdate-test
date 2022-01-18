import axios from 'axios';

export const BASE_URL = '/v1/university/';

const UniversitiesService = {
  retrieve: ({ universityId }) => axios.get(`${BASE_URL}${universityId}/`),
};

export default UniversitiesService;
