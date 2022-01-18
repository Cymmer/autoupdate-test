import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import GLOBALS from 'codechum-app-globals';
import { findByTestAttr } from 'codechum-app-utils';
import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router';
import { BASE_URL as USERS_BASE_URL } from '../../../services/UsersV4Service';
import { Login } from './index';

const USER = {
  id: 1,
  email: 'user@example.com',
  username: 'string',
  datetime_created: '2019-08-24T14:15:22Z',
  last_login: '2019-08-24T14:15:22Z',
  first_name: 'string',
  last_name: 'string',
  display_name: 'string',
  profile_pic: 'http://example.com',
  gender: 'string',
  contact_number: 'string',
  blackboard_username: 'string',
  codechum_coins_balance: 0,
  user_type: GLOBALS.USER_TYPES.STUDENT,
  university_id: 'string',
  program_id: 1,
  old_password: 'string',
  new_password: 'string',
  original_university_id: 1,
  is_verified: true,
  datetime_premium_expiry: '2019-08-24T14:15:22Z',
  program: {
    id: 1,
    code: 'string',
    name: 'string',
  },
  university: {
    id: 1,
    name: 'string',
    logo: 'http://example.com',
    watermark: 'http://example.com',
    preferences: {
      has_optional_lesson_activities: true,
    },
  },
  original_university: {
    id: 1,
    name: 'string',
    logo: 'http://example.com',
    watermark: 'http://example.com',
    preferences: {
      has_optional_lesson_activities: true,
    },
  },
};

const TAGS = [
  {
    id: 1,
    name: 'string',
    slug: 'string',
  },
];

const DIFFICULTIES = [
  {
    key: 'string',
    name: 'string',
  },
];

const PROGRAMMING_LANGUAGES = [
  {
    id: 0,
    name: 'string',
    extension: 'string',
    icon: 'http://example.com',
  },
];

const mockAxios = new MockAdapter(axios);

describe('EVENTS - Login', () => {
  it('should be able to fill up the login and password inputs', async () => {
    const component = mount(
      <MemoryRouter basename="/">
        <Login
          listDifficultiesSuccess={() => {}}
          listProgrammingLanguagesSuccess={() => {}}
          listTagsSuccess={() => {}}
          loginUpdate={() => {}}
          notificationUpdate={() => {}}
          serverDateTime={{}}
        />
      </MemoryRouter>
    );

    let loginInput = findByTestAttr(component, 'loginInput');
    let passwordInput = findByTestAttr(component, 'passwordInput');
    const NEW_LOGIN_VALUE = 'newLoginValue';
    const NEW_PASSWORD_VALUE = 'newPasswordValue';
    await act(async () => {
      loginInput.prop('onChange')({
        target: {
          value: NEW_LOGIN_VALUE,
        },
      });
      passwordInput.prop('onChange')({
        target: {
          value: NEW_PASSWORD_VALUE,
        },
      });
    });
    component.update();

    loginInput = findByTestAttr(component, 'loginInput');
    expect(loginInput.prop('value')).toEqual(NEW_LOGIN_VALUE);
    passwordInput = findByTestAttr(component, 'passwordInput');
    expect(passwordInput.prop('value')).toEqual(NEW_PASSWORD_VALUE);
  });

  it('should be able to submit the form successfully', async () => {
    const postRequestSpy = jest.spyOn(axios, 'post');

    mockAxios.onPost(`${USERS_BASE_URL}login/`).reply(200, {
      user: USER,
      tags: TAGS,
      difficulties: DIFFICULTIES,
      programming_languages: PROGRAMMING_LANGUAGES,
    });

    const component = mount(
      <MemoryRouter basename="/">
        <Login
          listDifficultiesSuccess={() => {}}
          listProgrammingLanguagesSuccess={() => {}}
          listTagsSuccess={() => {}}
          loginUpdate={() => {}}
          notificationUpdate={() => {}}
          serverDateTime={{}}
        />
      </MemoryRouter>
    );

    const loginInput = findByTestAttr(component, 'loginInput');
    const passwordInput = findByTestAttr(component, 'passwordInput');
    const NEW_LOGIN_VALUE = 'newLoginValue';
    const NEW_PASSWORD_VALUE = 'newPasswordValue';
    await act(async () => {
      loginInput.prop('onChange')({
        target: {
          value: NEW_LOGIN_VALUE,
        },
      });
      passwordInput.prop('onChange')({
        target: {
          value: NEW_PASSWORD_VALUE,
        },
      });
    });
    component.update();

    const signinButton = findByTestAttr(component, 'signinButton');
    await act(async () => {
      signinButton.simulate('submit');
    });

    expect(postRequestSpy).toHaveBeenCalledWith(`${USERS_BASE_URL}login/`, {
      login: NEW_LOGIN_VALUE,
      password: NEW_PASSWORD_VALUE,
    });
  });

  it('should be able to show the error if the login/password is/are invalid', async () => {
    const postRequestSpy = jest.spyOn(axios, 'post');

    const SERVER_ERROR_MESSAGE = 'Username, email, or password is invalid.';
    mockAxios
      .onPost(`${USERS_BASE_URL}login/`)
      .reply(400, SERVER_ERROR_MESSAGE);

    const component = mount(
      <Login
        listDifficultiesSuccess={() => {}}
        listProgrammingLanguagesSuccess={() => {}}
        listTagsSuccess={() => {}}
        loginUpdate={() => {}}
        notificationUpdate={() => {}}
        serverDateTime={{}}
      />
    );

    const loginInput = findByTestAttr(component, 'loginInput');
    const passwordInput = findByTestAttr(component, 'passwordInput');
    const NEW_LOGIN_VALUE = 'newLoginValue';
    const NEW_PASSWORD_VALUE = 'newPasswordValue';
    await act(async () => {
      loginInput.prop('onChange')({
        target: {
          value: NEW_LOGIN_VALUE,
        },
      });
      passwordInput.prop('onChange')({
        target: {
          value: NEW_PASSWORD_VALUE,
        },
      });
    });
    component.update();

    const signinButton = findByTestAttr(component, 'signinButton');
    await act(async () => {
      await signinButton.simulate('submit');
    });
    component.update();

    expect(postRequestSpy).toHaveBeenCalledWith(`${USERS_BASE_URL}login/`, {
      login: NEW_LOGIN_VALUE,
      password: NEW_PASSWORD_VALUE,
    });

    const overallError = findByTestAttr(component, 'overallError');
    expect(overallError.text()).toEqual(SERVER_ERROR_MESSAGE);
  });
});
