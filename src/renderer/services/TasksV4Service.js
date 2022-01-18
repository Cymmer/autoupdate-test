import axios from 'axios';

export const BASE_URL = '/v1/tasks-v4/';

const TasksV4Service = {
  studentStartTask: ({ taskId, studentId }) =>
    axios.get(`${BASE_URL}${taskId}/students/${studentId}/start/`),
  studentPracticeTask: ({ taskId, studentId }) =>
    axios.get(`${BASE_URL}${taskId}/students/${studentId}/practice/`),
};

export default TasksV4Service;
