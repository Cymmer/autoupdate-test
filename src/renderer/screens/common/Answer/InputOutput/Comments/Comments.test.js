import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { BASE_URL as ANSWER_COMMENTS_BASE_URL } from 'services/AnswerCommentsService';
import { waitForAsync } from 'codechum-app-utils';
import Comments from './index';

const ANSWER_COMMENTS = [
  {
    id: 1,
    datetime_created: '2019-08-24T14:15:22Z',
    posted_by: {
      first_name: 'Male',
      last_name: 'Teacher',
      profile_pic: 'http://example.com',
    },
    comment: 'Good job',
  },
];

const ANSWER_ID = 1;

const mockAxios = new MockAdapter(axios);

describe('EVENTS - Comments', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  afterAll(() => {
    mockAxios.restore();
  });

  it('should be able to post a comment', async () => {
    const getRequestSpy = jest.spyOn(axios, 'get');
    mockAxios
      .onGet(ANSWER_COMMENTS_BASE_URL)
      .reply(200, { results: ANSWER_COMMENTS });

    const component = mount(<Comments answerId={ANSWER_ID} />);

    await act(async () => {
      await waitForAsync();
    });
    component.update();

    expect(getRequestSpy).toHaveBeenCalled();
  });
});
