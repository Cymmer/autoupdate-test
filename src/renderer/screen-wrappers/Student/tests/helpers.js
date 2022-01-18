import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BASE_URL as USERS_BASE_URL } from 'services/UsersV4Service';
import { BASE_URL as TASKS_V4_BASE_URL } from 'services/TasksV4Service';
import { BASE_URL as SECTIONS_BASE_URL } from 'services/SectionsV4Service';
import { BASE_URL as LESSONS_V4_BASE_URL } from 'services/LessonsV4Service';
import { BASE_URL as LESSON_OBJECT_STATUSES_SERVICE } from 'services/LessonObjectStatusesService';

import {
  LESSON,
  LESSON_SLUG,
  SECTION,
  SECTION_ID,
  TASKS,
  USER_FOR_HOME,
  USER_PROP,
} from './constants';

export const mockAxios = new MockAdapter(axios);

export const setupCommonMockAxios = () => {
  mockAxios
    .onGet(`${USERS_BASE_URL}${USER_PROP.id}/`)
    .reply(200, USER_FOR_HOME);
  mockAxios
    .onGet(`${TASKS_V4_BASE_URL}students/${USER_PROP.id}/`, {
      params: {
        status: 'present,future',
        is_course_activity: false,
      },
    })
    .reply(200, {
      results: TASKS,
    });

  mockAxios
    .onGet(`${TASKS_V4_BASE_URL}students/${USER_PROP.id}/`, {
      params: {
        page_size: 4,
        ordering: '-end_time',
        status: 'past',
        is_course_activity: false,
      },
    })
    .reply(200, {
      results: TASKS,
    });
};

export const setupMockAxiosInViewLessonScreen = () => {
  setupCommonMockAxios();

  mockAxios
    .onGet(`${SECTIONS_BASE_URL}${SECTION_ID}/extended/`)
    .reply(200, SECTION);
  mockAxios
    .onGet(`${LESSONS_V4_BASE_URL}${LESSON_SLUG}/extended/`, {
      params: {
        course_data_id: SECTION.course_data_id,
      },
    })
    .reply(200, LESSON);
  mockAxios
    .onGet(`${LESSON_OBJECT_STATUSES_SERVICE}extended/`, {
      params: {
        lesson_object_ids: LESSON.lesson_objects
          .map((lessonObject) => lessonObject.id)
          .join(','),
        student_id: USER_PROP.id,
      },
    })
    .reply(200, {
      results: [],
    });
  mockAxios
    .onGet(`${LESSON_OBJECT_STATUSES_SERVICE}extended/`, {
      params: {
        lesson_object_id: LESSON.lesson_objects[0].id,
        student_id: USER_PROP.id,
      },
    })
    .reply(200, {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          id: 33,
          datetime_started: '06/27/2021 17:49:18 GMT+0800',
          datetime_finished: '06/27/2021 17:49:37 GMT+0800',
          lesson_object_id: 59,
          lesson_object_lesson_id: 16,
          lesson_object: {
            id: 59,
            title: 'C Anatomy',
            is_summary: false,
            order: 1,
            slug: 'c-anatomy',
          },
        },
      ],
    });
};
