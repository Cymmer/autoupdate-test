import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import { wrapWithStoreAndRouter } from 'utils/testing';
import { actions as usersActions } from 'ducks/reducers/users';
import GLOBALS from 'codechum-app-globals';
import TaskResult from './index';

const LOCATION = {
  state: {
    task: {
      id: 1,
      name: 'Dummy Task',
      max_score: 100,
      is_leaderboard_hidden: false,
      is_delayed_grading: false,
    },
    rank: 1,
    score: 50,
  },
};

const USER = {
  id: 1,
};

describe('RENDERING - TaskResult', () => {
  it('should not render the rank and lock the leaderboard button if the student has not subscribed to that feature', () => {
    const NOT_SUBSCRIBED_USER = {
      ...USER,
      features: [
        {
          product_key: GLOBALS.USER_FEATURES.LEADERBOARD,
          datetime_expiry: '2000-06-27 12:02:11',
        },
      ],
    };
    const component = mount(
      wrapWithStoreAndRouter(<TaskResult location={LOCATION} />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: NOT_SUBSCRIBED_USER,
          }),
      ])
    );
    const rankString = findByTestAttr(component, 'rankString');
    // the "lock" part in the string
    expect(rankString.text()).toEqual('???lock');

    const viewLeaderboardsButton = findByTestAttr(
      component,
      'viewLeaderboardsButton'
    );
    expect(viewLeaderboardsButton.prop('isLocked')).toEqual(true);
  });

  it('should render the rank and unlock the leaderboard button if the student has subscribed to that feature', () => {
    const SUBSCRIBED_USER = {
      ...USER,
      features: [
        {
          product_key: GLOBALS.USER_FEATURES.LEADERBOARD,
          datetime_expiry: '2099-06-27 12:02:11',
        },
      ],
    };
    const component = mount(
      wrapWithStoreAndRouter(<TaskResult location={LOCATION} />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: SUBSCRIBED_USER,
          }),
      ])
    );
    const rankString = findByTestAttr(component, 'rankString');
    expect(rankString.text()).toEqual('1st');

    const viewLeaderboardsButton = findByTestAttr(
      component,
      'viewLeaderboardsButton'
    );
    expect(viewLeaderboardsButton.prop('isLocked')).toEqual(false);
  });
});
