import axios from 'axios';

export const BASE_URL = '/v1/enrollment-v4/';

const EnrollmentV4Service = {
  createCertificate: ({ sectionId, studentId }) =>
    axios.post(`${BASE_URL}create-certificate/`, {
      section_id: sectionId,
      student_id: studentId,
    }),
};

export default EnrollmentV4Service;
