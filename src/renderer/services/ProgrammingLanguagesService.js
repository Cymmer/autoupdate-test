import axios from 'axios';

export const BASE_URL = '/v1/programming-languages/';

const ProgrammingLanguagesService = {
  list: () => axios.get(BASE_URL),
};

export default ProgrammingLanguagesService;
