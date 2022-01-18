import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { findByTestAttr, waitForAsync } from 'codechum-app-utils';
import { BASE_URL as COURSE_DATA_V4_BASE_URL } from 'services/CourseDataV4Service';
import { BASE_URL as RESULTS_BASE_URL } from 'services/ResultsService';
import { BASE_URL as LESSON_OBJECT_STATUSES_BASE_URL } from 'services/LessonObjectStatusesService';
import { BASE_URL as MIXPANEL_TRACK_BASE_URL } from 'services/MixpanelTrackService';

import { configureStore } from 'configureStore';
import Timeline from './index';

const SECTION = {
  id: 1,
  provide_certificate_method: {
    method_type: 'manual',
    passing_rate: null,
  },
};

const USER = {
  id: 1,
};

const DOWNLOAD_CERTIFICATE_BUTTON = <button type="button">download</button>;

const COURSE_DATA_ID = 1;

const COURSE_DATA = {
  course_objects: [
    {
      id: 15,
      order: 1,
      course_data_id: COURSE_DATA_ID,
      title: 'Introduction',
      is_task: false,
      items_count: 6,
      short_description: null,
      slug: 'introduction',
      is_locked: false,
      has_finished_previous_lesson: true,
      is_introduction: true,
      is_summary: false,
      first_lesson_object: {
        id: 53,
        is_summary: false,
        title: 'Slide 1',
        slug: 'slide-1',
      },
      is_finished: true,
    },
    {
      id: 16,
      order: 2,
      course_data_id: COURSE_DATA_ID,
      title: 'How To Print',
      is_task: false,
      items_count: 5,
      short_description: 'Output',
      slug: 'how-to-print',
      is_locked: false,
      has_finished_previous_lesson: true,
      is_introduction: false,
      is_summary: false,
      first_lesson_object: {
        id: 59,
        is_summary: false,
        title: 'How To Talk',
        slug: 'how-to-talk',
      },
      is_finished: true,
    },
    {
      id: 17,
      order: 3,
      course_data_id: COURSE_DATA_ID,
      title: 'Variables',
      is_task: false,
      items_count: 4,
      short_description: 'Storing Data Into Variables',
      slug: 'variables',
      is_locked: false,
      has_finished_previous_lesson: false,
      is_introduction: false,
      is_summary: false,
      first_lesson_object: {
        id: 64,
        is_summary: false,
        title: 'No Dead Airs',
        slug: 'no-dead-airs',
      },
      is_finished: true,
    },
    {
      id: 18,
      order: 4,
      course_data_id: COURSE_DATA_ID,
      title: 'Strings',
      is_task: false,
      items_count: 5,
      short_description: 'Array Of Characters',
      slug: 'strings',
      is_locked: false,
      has_finished_previous_lesson: false,
      is_introduction: false,
      is_summary: false,
      first_lesson_object: {
        id: 68,
        is_summary: false,
        title: 'Speech Dictionary',
        slug: 'speech-dictionary',
      },
      is_finished: true,
    },
    {
      id: 19,
      order: 5,
      course_data_id: COURSE_DATA_ID,
      title: 'Arithmetic',
      is_task: false,
      items_count: 5,
      short_description: 'Number Manipulation',
      slug: 'arithmetic',
      is_locked: false,
      has_finished_previous_lesson: false,
      is_introduction: false,
      is_summary: false,
      first_lesson_object: {
        id: 73,
        is_summary: false,
        title: 'Basic Math',
        slug: 'basic-math',
      },
      is_finished: true,
    },
    {
      id: 20,
      order: 6,
      course_data_id: COURSE_DATA_ID,
      title: 'Asking For Input',
      is_task: false,
      items_count: 4,
      short_description: 'User Input',
      slug: 'asking-for-input',
      is_locked: false,
      has_finished_previous_lesson: false,
      is_introduction: false,
      is_summary: false,
      first_lesson_object: {
        id: 78,
        is_summary: false,
        title: 'Learn To Listen',
        slug: 'learn-to-listen',
      },
      is_finished: true,
    },
    {
      id: 21,
      order: 6,
      course_data_id: COURSE_DATA_ID,
      title: 'Quiz #1',
      is_task: true,
      items_count: 8,
      task: {
        id: 40,
        name: 'Quiz #1',
        max_score: 80,
        start_time: '2021-09-29T20:26:57+08:00',
        end_time: '2021-09-29T20:29:01+08:00',
        questions_count: 8,
        time_before_start: -1355,
        time_before_end: -1231,
        has_exam_ongoing: false,
        has_submitted: true,
      },
      is_locked: false,
    },
    {
      id: 22,
      order: 7,
      course_data_id: COURSE_DATA_ID,
      title: 'Conditions',
      is_task: false,
      items_count: 7,
      short_description: 'Logical Statements',
      slug: 'conditions',
      is_locked: true,
      has_finished_previous_lesson: false,
      is_introduction: false,
      is_summary: false,
      first_lesson_object: {
        id: 82,
        is_summary: false,
        title: 'Making Decisions',
        slug: 'making-decisions',
      },
      is_finished: false,
    },
  ],
};

const RESULTS = {
  task_id: 1,
};

const mockAxios = new MockAdapter(axios);

const setupMockAxios = () => {
  mockAxios
    .onGet(`${COURSE_DATA_V4_BASE_URL}${COURSE_DATA_ID}/`)
    .reply(200, COURSE_DATA);
  mockAxios.onGet(RESULTS_BASE_URL).reply(200, RESULTS);
  mockAxios.onGet(`${LESSON_OBJECT_STATUSES_BASE_URL}exists/`).reply(200, true);
  mockAxios.onPost(MIXPANEL_TRACK_BASE_URL).reply(200);
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('RENDERING - View > Section > Timeline', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  afterAll(() => {
    mockAxios.restore();
  });

  it('should render the correct number of locked course objects', async () => {
    const store = configureStore();

    setupMockAxios();

    const component = mount(
      <MemoryRouter basename="/">
        <Provider store={store}>
          <Timeline
            courseDataId={COURSE_DATA_ID}
            downloadCertificateButton={DOWNLOAD_CERTIFICATE_BUTTON}
            section={SECTION}
            user={USER}
          />
        </Provider>
      </MemoryRouter>
    );

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    const sectionCourseTimeline = findByTestAttr(
      component,
      'sectionCourseTimeline'
    );

    expect(sectionCourseTimeline.prop('lockedCourseObjectsJsx').length).toEqual(
      6
    );

    component.unmount();
  });
});
