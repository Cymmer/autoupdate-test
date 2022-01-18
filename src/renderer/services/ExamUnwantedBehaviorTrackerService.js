import axios from 'axios';

export const BASE_URL = '/v1/exam-unwanted-behavior-trackers/';

const ExamUnwantedBehaviorTrackerService = {
  updateCount: ({ examUnwantedBehaviorTrackerId, body }) =>
    axios.post(
      `${BASE_URL}${examUnwantedBehaviorTrackerId}/update-count/`,
      body
    ),
};

export default ExamUnwantedBehaviorTrackerService;
