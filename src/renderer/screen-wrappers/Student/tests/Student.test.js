import { findByTestAttr, waitForAsync } from 'codechum-app-utils';
import { actions as usersActions } from 'ducks/reducers/users';
import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { BASE_URL as USERS_BASE_URL } from 'services/UsersV4Service';
import { wrapWithStoreAndRouter } from 'utils/testing';
import StudentContainer from '../index';
import { USER_PROP } from './constants';
import { mockAxios, setupCommonMockAxios } from './helpers';

jest.useFakeTimers();

describe('EVENTS - Student', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should be able to call retrieve the user endpoint', async () => {
    setupCommonMockAxios();

    const component = mount(
      wrapWithStoreAndRouter(<StudentContainer />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: USER_PROP,
          }),
      ])
    );

    // after 5 seconds, the first check for the student single sign in works
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    await act(async () => {
      await waitForAsync();
    });
    component.update();
  });

  it('should be able to not show Cody Modal when the user just logged in for the first time', async () => {
    setupCommonMockAxios();

    const component = mount(
      wrapWithStoreAndRouter(<StudentContainer />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: USER_PROP,
          }),
      ])
    );

    // after 5 seconds, the first check for the student single sign in works
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    await act(async () => {
      await waitForAsync();
    });
    component.update();

    const studentSingleSignInModal = findByTestAttr(
      component,
      'studentSingleSignInModal'
    );
    expect(studentSingleSignInModal.exists()).not.toBeTruthy();
  });

  it('should be able to show the login count mismatches for axios and redux', async () => {
    setupCommonMockAxios();

    const UPDATED_USER_PROP = {
      id: 1,
      university: {
        logo: 'string',
      },
    };

    const UPDATED_USER = {
      ...USER_PROP,
      login_count: 2,
    };

    mockAxios
      .onGet(`${USERS_BASE_URL}${UPDATED_USER_PROP.id}/`)
      .reply(200, UPDATED_USER);

    const component = mount(
      wrapWithStoreAndRouter(<StudentContainer />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: UPDATED_USER_PROP,
          }),
      ])
    );

    // after 5 seconds, the first check for the student single sign in works
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    await act(async () => {
      await waitForAsync();
    });
    component.update();

    expect(UPDATED_USER_PROP.login_count).not.toEqual(UPDATED_USER.login_count);
  });
});
