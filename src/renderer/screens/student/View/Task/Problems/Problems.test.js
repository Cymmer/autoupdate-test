import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr, waitForAsync } from 'codechum-app-utils';
import { wrapWithStoreAndRouter } from 'utils/testing';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { actions as usersActions } from 'ducks/reducers/users';
import { act } from 'react-dom/test-utils';
import { BASE_URL as RESULTS_BASE_URL } from 'services/ResultsService';
import { BASE_URL as SECTIONS_V4_BASE_URL } from 'services/SectionsV4Service';
import { BASE_URL as TASKS_BASE_URL } from 'services/TasksService';
import GLOBALS from 'codechum-app-globals';
import Problems from './index';

const USER = {
  id: 1,
};

const TASK = {
  id: 1,
  is_randomized: false,
  is_disabled: false,
  questions: [
    {
      id: 1,
      problem: {
        id: 1,
        name: 'Dummy Problem',
        tags: [
          {
            id: 1,
            name: 'Dummy Tag',
          },
        ],
      },
      max_score: 10,
    },
  ],
};

const mockAxios = new MockAdapter(axios);

const RESULTS = [];

const SECTIONS = [
  {
    id: 1,
    name: 'Normal Class',
  },
];

const setupMockAxios = () => {
  mockAxios
    .onGet(`${RESULTS_BASE_URL}extended/`, {
      params: {
        task_id: TASK.id,
        student_id: USER.id,
      },
    })
    .reply(200, { results: RESULTS });
  mockAxios
    .onGet(SECTIONS_V4_BASE_URL, {
      params: {
        is_active: true,
        is_onboarding: false,
        has_student_id: USER.id,
      },
    })
    .reply(200, { results: SECTIONS });
  mockAxios
    .onGet(`${TASKS_BASE_URL}count/`, {
      params: {
        status: 'present',
        is_exam: true,
        include_empty: true,
        section_ids: SECTIONS.map((section) => section.id).join(','),
      },
    })
    .reply(200, 0);
};

describe('EVENTS - View > Task > Problems', () => {
  it('should have a locked review task links if student has not subscribed to that feature', async () => {
    setupMockAxios();

    const NOT_SUBSCRIBED_USER = {
      ...USER,
      features: [
        {
          product_key: GLOBALS.USER_FEATURES.REVIEW_TASK,
          datetime_expiry: '2000-06-27 12:02:11',
        },
      ],
    };

    const component = mount(
      wrapWithStoreAndRouter(<Problems task={TASK} />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: NOT_SUBSCRIBED_USER,
          }),
      ])
    );

    await act(async () => {
      await waitForAsync();

      component.update();
    });

    const reviewTaskLink = findByTestAttr(component, 'reviewTaskLink');
    expect(reviewTaskLink.prop('isLocked')).toEqual(true);

    TASK.questions.forEach((question) => {
      const problemCard = findByTestAttr(
        component,
        `problemCard-${question.id}`
      );
      expect(problemCard.prop('onClick')).toEqual(null);
    });
  });

  it('should have an unlocked review task links if student has subscribed to that feature', async () => {
    setupMockAxios();

    const SUBSCRIBED_USER = {
      ...USER,
      features: [
        {
          product_key: GLOBALS.USER_FEATURES.REVIEW_TASK,
          datetime_expiry: '2099-06-27 12:02:11',
        },
      ],
    };

    const component = mount(
      wrapWithStoreAndRouter(<Problems task={TASK} />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: SUBSCRIBED_USER,
          }),
      ])
    );

    await act(async () => {
      await waitForAsync();

      component.update();
    });

    const reviewTaskLink = findByTestAttr(component, 'reviewTaskLink');
    expect(reviewTaskLink.prop('isLocked')).toEqual(false);

    TASK.questions.forEach((question) => {
      const problemCard = findByTestAttr(
        component,
        `problemCard-${question.id}`
      );
      expect(problemCard.prop('onClick')).not.toEqual(null);
    });
  });
});
