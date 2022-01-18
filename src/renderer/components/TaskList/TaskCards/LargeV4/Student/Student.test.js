import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import { wrapWithStoreAndRouter } from 'utils/testing';
import Student from './index';

const TASK = {
  id: 1,
  is_leaderboard_hidden: false,
  is_disabled: false,
  name: 'Dummy Task',
  start_time: '03/11/2019 16:00:00 GMT+0000',
  end_time: '03/12/2021 15:59:59 GMT+0000',
  section: {
    id: 1,
    name: 'Dummy Section',
  },
  max_score: 100,
  analytics: {
    result: {
      id: 1,
      datetime_submitted: '2021-05-29T18:22:31.860478+08:00',
      exempted: false,
      score: 75,
    },
    max_rank: 10,
    rank: 5,
    questions_count: 10,
    problems_solved: 5,
  },
  is_delayed_grading: false,
  time_before_start: 0,
  time_before_end: 99999,
  programming_languages: [
    {
      id: 1,
      name: 'C',
    },
  ],
};

const NOT_STARTED_TASK = {
  ...TASK,
  analytics: {
    ...TASK.analytics,
    result: null,
  },
};

const NOT_FINISHED_TASK = {
  ...TASK,
  analytics: {
    ...TASK.analytics,
    result: {
      ...TASK.analytics.result,
      datetime_submitted: null,
    },
  },
};

describe('EVENTS - TaskList > TaskCards > LargeV4 > Student', () => {
  it('should have a start activity button if student has not started activity yet', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <Student task={NOT_STARTED_TASK} viewLeaderboardButton={() => {}} />
      )
    );

    const taskCard = findByTestAttr(component, 'taskCard');
    const mainButton = taskCard.prop('mainButton');
    expect(mainButton.props.children).toEqual('Start Activity');
  });

  it('should have a continue activity button if student has started activity', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <Student task={NOT_FINISHED_TASK} viewLeaderboardButton={() => {}} />
      )
    );

    const taskCard = findByTestAttr(component, 'taskCard');
    const mainButton = taskCard.prop('mainButton');
    expect(mainButton.props.children).toEqual('Continue Activity');
  });

  it('should have a view activity button if student has finished activity', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <Student task={TASK} viewLeaderboardButton={() => {}} />
      )
    );

    const taskCard = findByTestAttr(component, 'taskCard');
    const mainButton = taskCard.prop('mainButton');
    expect(mainButton.props.children).toEqual('View Activity');
  });
});
