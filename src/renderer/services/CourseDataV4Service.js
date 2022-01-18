import axios from 'axios';

export const BASE_URL = '/v1/course-data-v4/';

const CourseDataService = {
  retrieve: ({ courseDataId }) => axios.get(`${BASE_URL}${courseDataId}/`),
};

export default CourseDataService;
