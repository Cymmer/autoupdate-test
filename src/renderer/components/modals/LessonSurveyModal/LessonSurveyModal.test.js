import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { findByTestAttr } from 'codechum-app-utils';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { BASE_URL as LESSON_SATISFACTIONS_V4_BASE_URL } from 'services/LessonSatisfactionsV4Service';
import surveyAnswers from './constants/surveyAnswers';
import LessonSurveyModal from './index';

const mockAxios = new MockAdapter(axios);

const LESSON = {
  title: 'Dummy Lesson',
  id: 1,
};

describe('RENDER - LessonSurveyModal', () => {
  it('should be able to render lesson title', async () => {
    const component = shallow(
      <LessonSurveyModal
        handleProceed={() => {}}
        lessonId={LESSON.id}
        lessonTitle={LESSON.title}
      />
    );

    const lessonTitle = findByTestAttr(component, 'lessonTitle');
    expect(lessonTitle.text()).toBe(LESSON.title);
  });
});

describe('EVENTS - LessonSurveyModal', () => {
  it('should be able to proceed after answering survey', async () => {
    const postRequestSpy = jest.spyOn(axios, 'post');
    mockAxios.onPost(LESSON_SATISFACTIONS_V4_BASE_URL).reply(201);

    const handleProceedFn = jest.fn();
    const component = mount(
      <LessonSurveyModal
        handleProceed={handleProceedFn}
        lessonId={LESSON.id}
        lessonTitle={LESSON.title}
      />
    );

    const btnAnswerYes = findByTestAttr(component, 'btnAnswerYes');
    const btnAnswerNo = findByTestAttr(component, 'btnAnswerNo');

    // Click 'Yes' answer
    act(() => {
      btnAnswerYes.props().onClick();
    });
    component.update();

    expect(postRequestSpy).toHaveBeenCalledWith(
      LESSON_SATISFACTIONS_V4_BASE_URL,
      {
        lesson_id: LESSON.id,
        is_satisfied: surveyAnswers.YES,
      }
    );

    // Click 'No' answer
    act(() => {
      btnAnswerNo.props().onClick();
    });
    component.update();

    expect(postRequestSpy).toHaveBeenCalledWith(
      LESSON_SATISFACTIONS_V4_BASE_URL,
      {
        lesson_id: LESSON.id,
        is_satisfied: surveyAnswers.NO,
      }
    );

    expect(handleProceedFn).toHaveBeenCalled();
  });
});
