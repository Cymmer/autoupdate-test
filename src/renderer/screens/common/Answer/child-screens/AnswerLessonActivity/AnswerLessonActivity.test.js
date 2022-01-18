import React from 'react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mount } from 'enzyme';
import { cloneDeep } from 'lodash';

import GLOBALS from 'codechum-app-globals';
import { findByTestAttr, waitForAsync } from 'codechum-app-utils';

import config from 'services/config';
import { actions as usersActions } from 'ducks/reducers/users';
import { wrapWithStoreAndRouter } from 'utils/testing';
import { BASE_URL as ANSWERS_BASE_URL } from 'services/AnswersService';
import { BASE_URL as ANSWERS_V4_BASE_URL } from 'services/AnswersV4Service';
import { BASE_URL as CODE_EXECUTIONS_BASE_URL } from 'services/CodeExecutionsService';
import { BASE_URL as ENROLLMENT_V4_BASE_URL } from 'services/EnrollmentV4Service';
import { BASE_URL as EXECUTIONS_V4_BASE_URL } from 'services/ExecutionsV4Service';
import { BASE_URL as INTERACTIVE_CHECKER_BASE_URL } from 'services/InteractiveService';
import { BASE_URL as MIXPANEL_TRACK_BASE_URL } from 'services/MixpanelTrackService';
import { BASE_URL as RESULTS_BASE_URL } from 'services/ResultsService';
import { BASE_URL as SECTIONS_V4_BASE_URL } from 'services/SectionsV4Service';
import { BASE_URL as SERVER_BASE_URL } from 'services/ServerService';
import { BASE_URL as TASKS_BASE_URL } from 'services/TasksService';
import { BASE_URL as TASKS_V4_BASE_URL } from 'services/TasksV4Service';
import { BASE_URL as TEST_CASE_STATUSES_BASE_URL } from 'services/TestCaseStatusesService';

import { modals } from '../../constants';
import {
  ANSWER,
  EXECUTION_OUTPUT,
  INTERACTIVE_SUBMISSIONS,
  LATEST_EXECUTIONS,
  RESULT,
  RESULT_OUTPUT,
  SECTION,
  SERVER_EXECUTION_OUTPUT,
  STUDENT_TASK,
  STUDENT_TASK_DETAILS,
  TASK,
  TEST_CASE_STATUSES,
  USER,
} from '../../tests/constants';
import AnswerLessonActivity from './index';

const PROPS = {
  match: {
    params: {
      sectionId: STUDENT_TASK.section_id,
      lessonSlug: 'lesson',
      lessonObjectSlug: 'activity-1',
      questionNumber: '1',
    },
  },
  user: USER,
  taskId: TASK.id,
  onSuccessfullyAnsweredAllProblems: () => {},
  nextLessonObjectLink: '#',
  lesson: {
    id: 1,
    title: 'Dummy Title',
    satisfactionExists: true,
  },
};

const mockAxios = new MockAdapter(axios);

const setupMockAxios = () => {
  mockAxios
    .onGet(`${TASKS_BASE_URL}students/${USER.id}/`, {
      params: {
        ids: STUDENT_TASK.id,
        student_id: USER.id,
        status: 'past,present,future',
        include_empty: true,
        is_course_task: true,
        include_associated_to_lesson_tasks: true,
      },
    })
    .reply(200, { results: [STUDENT_TASK], count: 1 });

  mockAxios
    .onGet(`${TASKS_BASE_URL}students/${USER.id}/details/`, {
      params: {
        ids: `${STUDENT_TASK.id}`,
      },
    })
    .reply(200, { results: [STUDENT_TASK_DETAILS] });

  mockAxios
    .onGet(`${TASKS_V4_BASE_URL}${TASK.id}/students/${USER.id}/start/`)
    .reply(200, RESULT({ isInteractive: true }));

  mockAxios
    .onGet(`${TASKS_V4_BASE_URL}students/${USER.id}/`, {
      params: {
        ids: '1',
        include_associated_to_lesson_tasks: true,
        status: 'past,present,future',
      },
    })
    .reply(200, { results: [TASK] });
  mockAxios
    .onGet(`${SERVER_BASE_URL}time/`)
    .reply(200, '12/12/12 12:12:12 GMT+0000');
  mockAxios
    .onGet(`${TEST_CASE_STATUSES_BASE_URL}answers/${ANSWER.id}/latest/`, {
      params: {
        answer_id: RESULT({ isInteractive: true }).answers[0].id,
      },
    })
    .reply(200, TEST_CASE_STATUSES);
  mockAxios.onPatch(`${ANSWERS_BASE_URL}${ANSWER.id}/`).reply(200);
  mockAxios
    .onPost(`${config.RUN_CODE_URL}${CODE_EXECUTIONS_BASE_URL}execute/`)
    .reply(200, EXECUTION_OUTPUT);
  mockAxios
    .onPost(`${ANSWERS_V4_BASE_URL}${ANSWER.id}/executev2/`)
    .reply(200, SERVER_EXECUTION_OUTPUT);
  mockAxios
    .onPost(`${RESULTS_BASE_URL}${RESULT({ isInteractive: true }).id}/submit/`)
    .reply(200, RESULT_OUTPUT);
  mockAxios
    .onGet(`${SECTIONS_V4_BASE_URL}${TASK.section.id}/`)
    .reply(200, SECTION);
  mockAxios.onPost(`${ENROLLMENT_V4_BASE_URL}create-certificate/`).reply(200);

  mockAxios.onPost(MIXPANEL_TRACK_BASE_URL).reply(200);

  mockAxios
    .onPost(
      `${config.INTERACTIVE_CHECKER_URL}${INTERACTIVE_CHECKER_BASE_URL}checker`
    )
    .reply(200, {
      submissions: INTERACTIVE_SUBMISSIONS,
    });

  mockAxios
    .onGet(`${EXECUTIONS_V4_BASE_URL}extended/`, {
      params: {
        page_size: 20,
        answer_id: ANSWER.id,
        ordering: '-id',
        mode: 'test,submit',
      },
    })
    .reply(200, {
      count: LATEST_EXECUTIONS.length,
      results: LATEST_EXECUTIONS,
    });
};

describe('RENDERING - AnswerLessonActivity', () => {
  beforeEach(() => {
    setupMockAxios();
  });

  it('should open terminal modal on execute code if problem is interactive', async () => {
    const component = mount(
      wrapWithStoreAndRouter(<AnswerLessonActivity {...PROPS} />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: USER,
          }),
      ])
    );

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    let inputOutput = findByTestAttr(component, 'inputOutput').first();
    expect(inputOutput.prop('isInteractive')).toEqual(true);

    let answerTask = findByTestAttr(component, 'answerTask').first();

    await act(() => {
      answerTask.prop('methods').onSourceCodeChange(1, 'code');
    });

    component.update();

    inputOutput = findByTestAttr(component, 'inputOutput').first();

    await act(() => {
      inputOutput.prop('executeCode')(GLOBALS.EXECUTION_MODES.RUN);
    });

    component.update();

    answerTask = findByTestAttr(component, 'answerTask').first();
    expect(answerTask.prop('state').modalToggled).toEqual(modals.TERMINAL);

    component.unmount();
  });

  it('should open lesson survey after completing lesson and student has not answered yet.', async () => {
    const props = cloneDeep(PROPS);
    props.lesson.satisfactionExists = false;

    const component = mount(
      wrapWithStoreAndRouter(<AnswerLessonActivity {...props} />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: USER,
          }),
      ])
    );

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    const answerTask = findByTestAttr(component, 'answerTask').first();

    await act(() => {
      answerTask.prop('methods').proceedAction();
    });

    component.update();

    const lessonSurveyModal = findByTestAttr(component, 'lessonSurveyModal');
    const answerLessonActivitySuccessModal = findByTestAttr(
      component,
      'answerLessonActivitySuccessModal'
    ).first();

    expect(lessonSurveyModal.exists()).toBe(true);
    expect(answerLessonActivitySuccessModal.exists()).toBe(false);

    component.unmount();
  });

  it("should open you've made it modal after completing lesson and student has already answered lesson survey.", async () => {
    const component = mount(
      wrapWithStoreAndRouter(<AnswerLessonActivity {...PROPS} />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: USER,
          }),
      ])
    );

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    const answerTask = findByTestAttr(component, 'answerTask').first();

    await act(() => {
      answerTask.prop('methods').proceedAction();
    });

    component.update();

    const lessonSurveyModal = findByTestAttr(component, 'lessonSurveyModal');
    const answerLessonActivitySuccessModal = findByTestAttr(
      component,
      'answerLessonActivitySuccessModal'
    ).first();

    expect(lessonSurveyModal.exists()).toBe(false);
    expect(answerLessonActivitySuccessModal.exists()).toBe(true);

    component.unmount();
  });
});
