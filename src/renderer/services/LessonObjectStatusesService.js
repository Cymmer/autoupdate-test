import axios from 'axios';
import { removeUndefined } from 'codechum-app-utils';

export const BASE_URL = '/v1/lesson-object-statuses/';
export const BASE_URL_EXTENDED = '/v1/lesson-object-statuses/extended/';

const LessonObjectStatusesService = {
  list: ({
    isExtended = false,
    params: {
      page,
      pageSize,
      sectionId,
      lessonObjectId,
      lessonObjectIds,
      studentId,
      studentIds,
    } = {},
  } = {}) =>
    axios.get(isExtended ? BASE_URL_EXTENDED : BASE_URL, {
      params: removeUndefined({
        page,
        page_size: pageSize,
        section_id: sectionId,
        lesson_object_id: lessonObjectId,
        lesson_object_ids: lessonObjectIds,
        student_id: studentId,
        student_ids: studentIds,
      }),
    }),
  create: ({ body }) => axios.post(BASE_URL, body),
  update: ({ lessonObjectStatusId, body }) =>
    axios.patch(`${BASE_URL}${lessonObjectStatusId}/`, body),
  exists: ({ params: { lessonObjectId, studentId } = {} } = {}) =>
    axios.get(`${BASE_URL}exists/`, {
      params: {
        lesson_object_id: lessonObjectId,
        student_id: studentId,
      },
    }),
};

LessonObjectStatusesService.compounded = {
  getOrCreate: async ({
    isExtended = false,
    params: { lessonObjectId, studentId, datetimeStarted } = {},
  } = {}) => {
    const {
      data: { results: lessonObjectStatuses },
    } = await LessonObjectStatusesService.list({
      isExtended,
      params: {
        lessonObjectId,
        studentId,
      },
    });
    const [lessonObjectStatus] = lessonObjectStatuses;

    if (lessonObjectStatus) {
      return {
        data: lessonObjectStatus,
      };
    }

    const { data: createdLessonObjectStatus } =
      await LessonObjectStatusesService.create({
        body: {
          lesson_object_id: lessonObjectId,
          student_id: studentId,
          datetime_started: datetimeStarted,
        },
      });

    return {
      data: createdLessonObjectStatus,
    };
  },
};

export default LessonObjectStatusesService;
