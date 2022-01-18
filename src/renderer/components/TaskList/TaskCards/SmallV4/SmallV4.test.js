import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import { wrapWithStoreAndRouter } from 'utils/testing';
import { actions as usersActions } from 'ducks/reducers/users';
import GLOBALS from 'codechum-app-globals';
import SmallV4 from './index';

const TASK = {
  id: 1,
  is_leaderboard_hidden: false,
  is_disabled: false,
  name: 'Dummy Task',
  start_time: '03/11/2019 16:00:00 GMT+0000',
  end_time: '03/12/2021 15:59:59 GMT+0000',
  section: {
    name: 'Dummy Section',
  },
  max_score: 100,
  analytics: {
    avg_score: 50,
    result: {
      score: 75,
    },
  },
};

describe('(STUDENT) EVENTS - TaskList > TaskCards > SmallV4', () => {
  it('should have a locked review button if student has not subscribed to that feature', () => {
    const NOT_SUBSCRIBED_USER = {
      features: [
        {
          product_key: GLOBALS.USER_FEATURES.REVIEW_TASK,
          datetime_expiry: '2000-06-27 12:02:11',
        },
      ],
    };

    const component = mount(
      wrapWithStoreAndRouter(
        <SmallV4
          link="/dummy/link/"
          task={TASK}
          userType={GLOBALS.USER_TYPES.STUDENT}
        />,
        [
          () =>
            usersActions.loginActions.loginUpdate({
              user: NOT_SUBSCRIBED_USER,
            }),
        ]
      )
    );

    const reviewTaskButton = findByTestAttr(component, 'reviewTaskButton');
    expect(reviewTaskButton.prop('isLocked')).toEqual(true);

    const reviewTaskButtonTooltip = findByTestAttr(
      component,
      'reviewTaskButtonTooltip'
    );
    expect(reviewTaskButtonTooltip.exists()).toEqual(false);
  });

  it('should have an unlocked review button if student has subscribed to that feature', () => {
    const SUBSCRIBED_USER = {
      features: [
        {
          product_key: GLOBALS.USER_FEATURES.REVIEW_TASK,
          datetime_expiry: '2099-06-27 12:02:11',
        },
      ],
    };
    const component = mount(
      wrapWithStoreAndRouter(
        <SmallV4
          link="/dummy/link/"
          task={TASK}
          userType={GLOBALS.USER_TYPES.STUDENT}
        />,
        [
          () =>
            usersActions.loginActions.loginUpdate({
              user: SUBSCRIBED_USER,
            }),
        ]
      )
    );

    const reviewTaskButton = findByTestAttr(component, 'reviewTaskButton');
    expect(reviewTaskButton.prop('isLocked')).toEqual(false);

    const reviewTaskButtonTooltip = findByTestAttr(
      component,
      'reviewTaskButtonTooltip'
    );
    expect(reviewTaskButtonTooltip.exists()).toEqual(true);
  });
});
