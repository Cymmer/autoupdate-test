import React from 'react';
import { mount } from 'enzyme';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import MockAdapter from 'axios-mock-adapter';
import { waitForAsync, findByTestAttr } from 'codechum-app-utils';
import { wrapWithStoreAndRouter } from 'utils';
import { BASE_URL as SECTIONS_V4_BASE_URL } from 'services/SectionsV4Service';
import { BASE_URL as UNIVERSITIES_BASE_URL } from 'services/UniversitiesService';
import { BASE_URL as LESSONS_BASE_URL } from 'services/LessonsV4Service';
import { BASE_URL as LESSON_SATISFACTIONS_V4_BASE_URL } from 'services/LessonSatisfactionsV4Service';
import { BASE_URL_EXTENDED as LESSON_OBJECT_STATUSES_BASE_URL_EXTENDED } from 'services/LessonObjectStatusesService';

import { Lesson } from './index';

const USER = {
  id: 1,
  email: 'male.student@codechum.com',
  username: 'MaleStudent',
  datetime_created: '2021-05-06T02:23:11.714597+08:00',
  last_login: '05/07/2021 17:01:08 GMT+0800',
  first_name: 'Male',
  last_name: 'Student',
  display_name: null,
  profile_pic: null,
  gender: 'M',
  contact_number: '+639876543210',
  blackboard_username: null,
  user_type: 'S',
  university_id: null,
  program_id: 1,
  original_university_id: null,
  is_verified: true,
  datetime_premium_expiry: null,
  has_filled_up_form: false,
};

const SECTION = {
  id: 1,
  course_id: 1,
  course_data_id: 1,
  course: {
    id: 1,
    code: 'C 1',
    name: 'Free C Course',
    description:
      'This course provides you with the foundational skill set required to write computer programs in C.',
    icon: null,
    parent_course_id: null,
    university_id: null,
    programming_language_id: 1,
    is_trial: true,
    is_guided: true,
    parent_course: null,
    programming_language: {
      id: 1,
      name: 'Python',
      extension: 'py',
      icon: null,
    },
  },
};

const UNIVERSITY = {
  id: 1,
  preferences: null,
};

const LESSON = {
  id: 1,
  order: 1,
  title: 'Variables',
  short_description: 'Storing Data Into Variables',
  is_locked: false,
  is_introduction: false,
  is_summary: false,
  lesson_image:
    'http://127.0.0.1:8000/media/courses/lesson/images/1-4-c-lesson3.png',
  course_data_id: 1,
  slug: 'variables',
  lesson_objects_count: 2,
  lesson_objects: [
    {
      id: 1,
      order: 1,
      slug: 'no-dead-airs',
      title: 'No Dead Airs',
      is_summary: false,
    },
    {
      id: 2,
      order: 2,
      slug: 'no-dead-airs',
      title: 'No Dead Airs',
      is_summary: false,
    },
  ],
  next_lesson: {
    slug: 'arithmetic',
    is_summary: false,
    first_lesson_object: {
      id: 2,
      slug: 'basic-math',
    },
  },
};

const LESSON_OBJECT_STATUS = {
  id: 1,
  datetime_started: '01/09/2021 17:48:13 GMT+0800',
  datetime_finished: '01/09/2021 17:48:22 GMT+0800',
  lesson_object_id: 1,
  lesson_object_lesson_id: LESSON.id,
  student_id: USER.id,
  student: USER,
  lesson_object: LESSON.lesson_objects[0],
  lesson_object_lesson: LESSON,
};

const COMPONENT_PROPS = {
  match: {
    params: {
      sectionId: SECTION.id,
      lessonSlug: LESSON_OBJECT_STATUS.lesson_object_lesson.slug,
      lessonObjectSlug: LESSON_OBJECT_STATUS.lesson_object.slug,
      activeTab: null,
    },
  },
  user: USER,
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

jest.useFakeTimers();

const mockAxios = new MockAdapter(axios);

const setupMockAxios = () => {
  mockAxios
    .onGet(`${SECTIONS_V4_BASE_URL}${SECTION.id}/extended/`)
    .reply(200, SECTION);

  mockAxios
    .onGet(`${UNIVERSITIES_BASE_URL}${UNIVERSITY.id}/`)
    .reply(200, UNIVERSITY);

  mockAxios
    .onGet(
      `${LESSONS_BASE_URL}${LESSON_OBJECT_STATUS.lesson_object_lesson.slug}/extended/`,
      {
        params: {
          course_data_id: LESSON.course_data_id,
        },
      }
    )
    .reply(200, LESSON);
  mockAxios
    .onGet(LESSON_OBJECT_STATUSES_BASE_URL_EXTENDED, {
      params: {
        lesson_object_ids: LESSON.lesson_objects
          .map((lessonObject) => lessonObject.id)
          .join(','),
        student_id: USER.id,
      },
    })
    .reply(200, { results: [LESSON_OBJECT_STATUS] });
  mockAxios
    .onGet(LESSON_OBJECT_STATUSES_BASE_URL_EXTENDED, {
      params: {
        lesson_object_id: LESSON_OBJECT_STATUS.lesson_object_id,
        student_id: USER.id,
      },
    })
    .reply(200, { results: [LESSON_OBJECT_STATUS] });

  mockAxios
    .onGet(`${LESSON_SATISFACTIONS_V4_BASE_URL}exists/`)
    .reply(200, true);
};

describe('RENDERING - Student > View > Lesson', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  afterAll(() => {
    mockAxios.restore();
  });

  it('should render even if student does not have university id', async () => {
    setupMockAxios();

    const component = mount(
      wrapWithStoreAndRouter(<Lesson {...COMPONENT_PROPS} />)
    );

    await act(async () => {
      await waitForAsync();
    });
    component.update();

    const lessonContainer = findByTestAttr(component, 'lessonContainer');
    expect(lessonContainer.exists()).toBeTruthy();
  });
});
