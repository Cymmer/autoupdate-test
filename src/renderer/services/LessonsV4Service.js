import axios from 'axios';

export const BASE_URL = '/v1/lessons-v4/';

const LessonsV4Service = {
  retrieve: ({ isExtended, lessonSlug, courseDataId }) =>
    axios.get(
      isExtended
        ? `${BASE_URL}${lessonSlug}/extended/`
        : `${BASE_URL}${lessonSlug}/`,
      {
        params: {
          course_data_id: courseDataId,
        },
      }
    ),
};

export default LessonsV4Service;
