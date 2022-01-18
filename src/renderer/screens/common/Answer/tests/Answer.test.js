import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import GLOBALS from 'codechum-app-globals';
import { findByTestAttr, waitForAsync } from 'codechum-app-utils';
import { actions as usersActions } from 'ducks/reducers/users';
import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { BASE_URL as ANSWER_COMMENTS_BASE_URL } from 'services/AnswerCommentsService';
import { BASE_URL as ANSWERS_BASE_URL } from 'services/AnswersService';
import { BASE_URL as ANSWERS_V4_BASE_URL } from 'services/AnswersV4Service';
import { BASE_URL as CODE_EXECUTIONS_BASE_URL } from 'services/CodeExecutionsService';
import config from 'services/config';
import { BASE_URL as ENROLLMENT_V4_BASE_URL } from 'services/EnrollmentV4Service';
import { BASE_URL as EXECUTIONS_V4_BASE_URL } from 'services/ExecutionsV4Service';
import { BASE_URL as INTERACTIVE_CHECKER_BASE_URL } from 'services/InteractiveService';
import { BASE_URL as MIXPANEL_TRACK_BASE_URL } from 'services/MixpanelTrackService';
import { BASE_URL as RESULTS_BASE_URL } from 'services/ResultsService';
import { BASE_URL as SECTIONS_V4_BASE_URL } from 'services/SectionsV4Service';
import { BASE_URL as SERVER_BASE_URL } from 'services/ServerService';
import { BASE_URL as SOURCE_CODES_BASE_URL } from 'services/SourceCodesService';
import { BASE_URL as TASKS_V4_BASE_URL } from 'services/TasksV4Service';
import { BASE_URL as TEST_CASE_STATUSES_BASE_URL } from 'services/TestCaseStatusesService';
import { wrapWithStoreAndRouter } from 'utils/testing';
import { modals } from '../constants';
import Answer from '../index';
import {
  ANSWER,
  ANSWER_COMMENTS_COUNT,
  EXECUTION_OUTPUT,
  INTERACTIVE_SUBMISSIONS,
  LATEST_EXECUTIONS,
  MATCH,
  RESULT,
  RESULT_OUTPUT,
  SECTION,
  SERVER_EXECUTION_OUTPUT,
  TASK,
  TEST_CASE_STATUSES,
  USER,
} from './constants';

const mockAxios = new MockAdapter(axios);

const setupMockAxios = ({ isInteractive }) => {
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
    .onGet(`${TASKS_V4_BASE_URL}${TASK.id}/students/${USER.id}/start/`)
    .reply(200, RESULT({ isInteractive }));
  mockAxios
    .onGet(`${TASKS_V4_BASE_URL}${TASK.id}/students/${USER.id}/practice/`)
    .reply(200, RESULT({ isInteractive }));
  mockAxios
    .onGet(`${ANSWER_COMMENTS_BASE_URL}count/`)
    .reply(200, ANSWER_COMMENTS_COUNT);

  mockAxios
    .onGet(`${SERVER_BASE_URL}time/`)
    .reply(200, '12/12/12 12:12:12 GMT+0000');
  mockAxios
    .onGet(`${TEST_CASE_STATUSES_BASE_URL}answers/${ANSWER.id}/latest/`, {
      params: {
        answer_id: RESULT({ isInteractive }).answers[0].id,
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
    .onPost(`${RESULTS_BASE_URL}${RESULT({ isInteractive }).id}/submit/`)
    .reply(200, RESULT_OUTPUT);
  mockAxios
    .onGet(`${SECTIONS_V4_BASE_URL}${TASK.section.id}/`)
    .reply(200, SECTION);
  mockAxios.onPost(`${ENROLLMENT_V4_BASE_URL}create-certificate/`).reply(200);
  mockAxios
    .onPost(
      `${config.INTERACTIVE_CHECKER_URL}${INTERACTIVE_CHECKER_BASE_URL}checker`
    )
    .reply(200, {
      submissions: INTERACTIVE_SUBMISSIONS,
    });
  mockAxios.onPost(MIXPANEL_TRACK_BASE_URL).reply(200);

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

jest.setTimeout(10000);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('RENDERING - Answer', () => {
  it('should display the initial latest executions', async () => {
    setupMockAxios({ isInteractive: false });

    const component = mount(
      wrapWithStoreAndRouter(<Answer isPractice={false} match={MATCH} />, [
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

    // additional waitForAsync call to make sure all the endpoints are done loading
    await act(async () => {
      await waitForAsync();
    });

    component.update();

    // mutate the latest executions to add execution number to each of them
    for (let i = 0; i < LATEST_EXECUTIONS.length; i++) {
      LATEST_EXECUTIONS[i].execution_number = LATEST_EXECUTIONS.length - i;
    }

    const inputOutput = findByTestAttr(component, 'inputOutput').first();
    expect(inputOutput.prop('latestExecutions')).toHaveLength(
      LATEST_EXECUTIONS.length
    );

    const latestExecutionsProp = inputOutput.prop('latestExecutions');
    for (let i = 0; i < LATEST_EXECUTIONS.length; i++) {
      const executionCard = latestExecutionsProp[i];
      expect(executionCard.props.execution).toEqual(LATEST_EXECUTIONS[i]);
    }
  });

  it('should not be able to navigate here if student has not subscribed to the review task feature', async () => {
    setupMockAxios({ isInteractive: false });

    mockAxios
      .onGet(`${TASKS_V4_BASE_URL}students/${USER.id}/`, {
        params: {
          ids: '1',
          include_associated_to_lesson_tasks: true,
          status: 'past,present,future',
        },
      })
      .reply(200, {
        results: [
          {
            ...TASK,
            // set a negative time for this value
            // to indicate that this is a past task
            time_before_end: -20,
          },
        ],
      });

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
      wrapWithStoreAndRouter(<Answer isPractice match={MATCH} />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: NOT_SUBSCRIBED_USER,
          }),
      ])
    );

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    // additional waitForAsync call to make sure all the endpoints are done loading
    await act(async () => {
      await waitForAsync();
    });

    component.update();

    expect(window.location.pathname).toEqual('/');
  });
});

describe('EVENTS - Answer', () => {
  it('should call create certificate endpoint', async () => {
    setupMockAxios({ isInteractive: false });

    const postRequestSpy = jest.spyOn(axios, 'post');

    const component = mount(
      wrapWithStoreAndRouter(<Answer isPractice={false} match={MATCH} />, [
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

    // additional waitForAsync call to make sure all the endpoints are done loading
    await act(async () => {
      await waitForAsync();
    });

    component.update();

    // in order for the code to be submitted, we need to run the executeCode()
    // function, and since it is passed as a prop in <InputOutput />, we can
    // find the component and get its prop
    const inputOutput = findByTestAttr(component, 'inputOutput').first();

    // call the function and wait for all the asynchronous calls that are
    // associated with it
    await act(async () => {
      await inputOutput.prop('executeCode')(GLOBALS.EXECUTION_MODES.SUBMIT);

      await waitForAsync();
    });

    component.update();

    // we get the execution results modal in order to use its prop to
    // proceed to the next step
    const executionResultsModal = findByTestAttr(
      component,
      'executionResultsModal'
    );

    await act(async () => {
      await executionResultsModal.prop('proceedAction')();

      await waitForAsync();
    });

    component.update();

    // we get the you've made it modal so we can use its submitAction prop
    // to submit the answer
    const youveMadeItModal = findByTestAttr(component, 'youveMadeItModal');

    await act(async () => {
      await youveMadeItModal.prop('submitAction')();

      await waitForAsync();
    });

    // we check if the Create Certificate V4 endpoint was called after submitting
    expect(postRequestSpy).toHaveBeenCalledWith(
      `${ENROLLMENT_V4_BASE_URL}create-certificate/`,
      {
        section_id: TASK.section.id,
        student_id: USER.id,
      }
    );
  });

  it('should update the latest executions list properly if there are currently less than 20 executions', async () => {
    setupMockAxios({ isInteractive: false });

    const component = mount(
      wrapWithStoreAndRouter(
        <Answer isPractice={false} match={MATCH} user={USER} />,
        [
          () =>
            usersActions.loginActions.loginUpdate({
              user: USER,
            }),
        ]
      )
    );

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    // additional waitForAsync call to make sure all the endpoints are done loading
    await act(async () => {
      await waitForAsync();
    });

    component.update();

    // mutate the latest executions to add execution number to each of them
    for (let i = 0; i < LATEST_EXECUTIONS.length; i++) {
      LATEST_EXECUTIONS[i].execution_number = LATEST_EXECUTIONS.length - i;
    }

    // let's submit the code
    let inputOutput = findByTestAttr(component, 'inputOutput').first();
    await act(async () => {
      await inputOutput.prop('executeCode')(GLOBALS.EXECUTION_MODES.SUBMIT);
      await waitForAsync();
    });
    component.update();

    inputOutput = findByTestAttr(component, 'inputOutput').first();
    expect(inputOutput.prop('latestExecutions')).toHaveLength(
      LATEST_EXECUTIONS.length + 1
    );

    // check if the latest execution has the correct execution number
    expect(
      inputOutput.prop('latestExecutions')[0].props.execution.execution_number
    ).toEqual(LATEST_EXECUTIONS.length + 1);
  });

  it('should update the latest executions list properly if there is currently 20 executions', async () => {
    setupMockAxios({ isInteractive: false });

    // to not create a lot of dummy stuff, let's just spread the
    // latest executions 5 times since each of them contains 4
    // executions
    const LATEST_EXECUTIONS_20 = [
      ...LATEST_EXECUTIONS,
      ...LATEST_EXECUTIONS,
      ...LATEST_EXECUTIONS,
      ...LATEST_EXECUTIONS,
      ...LATEST_EXECUTIONS,
    ];

    // then, we re-mock the List Executions endpoint
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
        count: LATEST_EXECUTIONS_20.length,
        results: LATEST_EXECUTIONS_20,
      });

    const component = mount(
      wrapWithStoreAndRouter(
        <Answer isPractice={false} match={MATCH} user={USER} />,
        [
          () =>
            usersActions.loginActions.loginUpdate({
              user: USER,
            }),
        ]
      )
    );

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    // additional waitForAsync call to make sure all the endpoints are done loading
    await act(async () => {
      await waitForAsync();
    });

    component.update();

    // mutate the latest executions to add execution number to each of them
    for (let i = 0; i < LATEST_EXECUTIONS_20.length; i++) {
      LATEST_EXECUTIONS_20[i].execution_number =
        LATEST_EXECUTIONS_20.length - i;
    }

    // let's submit the code
    let inputOutput = findByTestAttr(component, 'inputOutput').first();
    await act(async () => {
      await inputOutput.prop('executeCode')(GLOBALS.EXECUTION_MODES.SUBMIT);
      await waitForAsync();
    });
    component.update();

    // the length should not change (i.e. it should still remain 20)
    inputOutput = findByTestAttr(component, 'inputOutput').first();
    expect(inputOutput.prop('latestExecutions')).toHaveLength(
      LATEST_EXECUTIONS_20.length
    );

    // check if the latest execution has the correct execution number
    expect(
      inputOutput.prop('latestExecutions')[0].props.execution.execution_number
    ).toEqual(LATEST_EXECUTIONS_20.length + 1);
  });

  // NOTE: Test for the code restoration can be improved:
  //  1. Case where the execution code restored is the language of the current answer
  //  2. Case where the current answer has an existing code with the same programming
  //      language as the code restored
  it('should be able to restore the code of a latest execution', async () => {
    setupMockAxios({ isInteractive: false });

    const component = mount(
      wrapWithStoreAndRouter(
        <Answer isPractice={false} match={MATCH} user={USER} />,
        [
          () =>
            usersActions.loginActions.loginUpdate({
              user: USER,
            }),
        ]
      )
    );

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    // additional waitForAsync call to make sure all the endpoints are done loading
    await act(async () => {
      await waitForAsync();
    });

    component.update();

    // mutate the latest executions to add execution number to each of them
    for (let i = 0; i < LATEST_EXECUTIONS.length; i++) {
      LATEST_EXECUTIONS[i].execution_number = LATEST_EXECUTIONS.length - i;
    }

    let editor = findByTestAttr(component, 'editor');
    let currentAnswer = editor.prop('answer');

    const inputOutput = findByTestAttr(component, 'inputOutput').first();

    // let's try to restore the source code of the latest execution
    const latestExecutionsProp = inputOutput.prop('latestExecutions');
    const [latestExecution] = latestExecutionsProp;

    // all existing code of that programming language should be deleted
    for (let i = 0; i < ANSWER.source_codes.length; i++) {
      const sourceCode = ANSWER.source_codes[i];

      if (
        sourceCode.programming_language_id ===
        latestExecution.props.execution.programming_language.id
      ) {
        mockAxios
          .onDelete(`${SOURCE_CODES_BASE_URL}${sourceCode.id}/`)
          .reply(200);
      }
    }

    // new source codes will then be created
    for (
      let i = 0;
      i < latestExecution.props.execution.source_codes.length;
      i++
    ) {
      const sourceCode = latestExecution.props.execution.source_codes[i];
      mockAxios
        .onPost(SOURCE_CODES_BASE_URL, {
          code: sourceCode.code,
          answer_id: currentAnswer.id,
          programming_language_id:
            latestExecution.props.execution.programming_language.id,
          file_name: sourceCode.file_name,
          file_extension: sourceCode.file_extension,
        })
        .reply(200, {
          id: 2,
          answer_id: currentAnswer.id,
          programming_language_id:
            latestExecution.props.execution.programming_language.id,
          problem_id: 1,
          code: sourceCode.code,
          file_name: sourceCode.file_name,
          file_extension: sourceCode.file_extension,
          programming_language: {
            id: latestExecution.props.execution.programming_language.id,
            name: 'C#', // this is C# because the latest execution language in our dummy data is in C#
            extension: 'cs',
            icon: 'https://www.pinclipart.com/picdir/middle/519-5198165_pepehands-png-clipart.png',
          },
        });
    }

    await act(async () => {
      await latestExecution.props.restoreCode(
        latestExecution.props.execution.source_codes,
        latestExecution.props.execution.programming_language
      );
    });

    // language of answer should switch to that programming language restored
    mockAxios.onPatch(`${SOURCE_CODES_BASE_URL}${currentAnswer.id}`);

    component.update();
    editor = findByTestAttr(component, 'editor');
    currentAnswer = editor.prop('answer');

    // get the newly created source code
    const newSourceCode = currentAnswer.source_codes.find((sc) => sc.id === 2);

    expect(newSourceCode.answer_id).toEqual(currentAnswer.id);
    expect(newSourceCode.programming_language_id).toEqual(
      latestExecution.props.execution.programming_language.id
    );
    expect(newSourceCode.code).toEqual(
      latestExecution.props.execution.source_codes[0].code
    );
    expect(newSourceCode.file_name).toEqual(
      latestExecution.props.execution.source_codes[0].file_name
    );
    expect(newSourceCode.file_extension).toEqual(
      latestExecution.props.execution.source_codes[0].file_extension
    );
  });

  it('should open terminal modal when executing execute code if the problem is interactive', async () => {
    setupMockAxios({ isInteractive: true });

    const SUBSCRIBED_USER = {
      ...USER,
      features: [
        {
          datetime_expiry: '2099-06-27 12:02:11',
          product_key: GLOBALS.USER_FEATURES.LEADERBOARD,
        },
      ],
    };
    const component = mount(
      wrapWithStoreAndRouter(<Answer isPractice={false} match={MATCH} />, [
        () =>
          usersActions.loginActions.loginUpdate({
            user: SUBSCRIBED_USER,
          }),
      ])
    );

    await act(async () => {
      await waitForAsync();
    });

    component.update();

    // additional waitForAsync call to make sure all the endpoints are done loading
    await act(async () => {
      await waitForAsync();
    });

    component.update();

    let inputOutput = findByTestAttr(component, 'inputOutput').first();
    expect(inputOutput.prop('isInteractive')).toEqual(true);

    let answerTask = findByTestAttr(component, 'answerTask').first();

    act(() => {
      answerTask.prop('methods').onSourceCodeChange(1, 'code');
    });

    component.update();

    inputOutput = findByTestAttr(component, 'inputOutput').first();

    act(() => {
      inputOutput.prop('executeCode')(
        GLOBALS.EXECUTION_MODES.RUN,
        GLOBALS.PROBLEM_TYPES.INTERACTIVE
      );
    });

    component.update();

    answerTask = findByTestAttr(component, 'answerTask').first();
    expect(answerTask.prop('state').modalToggled).toEqual(modals.TERMINAL);
  });

  // commented out since it currently only works intermittently
  // it('should open execution results modal when submitting code if the problem is interactive', async () => {
  //   const SUBSCRIBED_USER = {
  //     ...USER,
  //     features: [
  //       {
  //         datetime_expiry: '2099-06-27 12:02:11',
  //         product_key: GLOBALS.USER_FEATURES.LEADERBOARD,
  //       },
  //     ],
  //   };
  //   const component = mount(
  //     wrapWithStoreAndRouter(<Answer match={MATCH} isPractice={false} />, [
  //       () =>
  //         usersActions.loginActions.loginUpdate({
  //           user: SUBSCRIBED_USER,
  //         }),
  //     ])
  //   );

  //   await act(async () => {
  //     await waitForAsync();
  //   });

  //   component.update();

  //   // additional waitForAsync call to make sure all the endpoints are done loading
  //   await act(async () => {
  //     await waitForAsync();
  //   });

  //   component.update();

  //   let inputOutput = findByTestAttr(component, 'inputOutput').first();
  //   expect(inputOutput.prop('isInteractive')).toEqual(true);

  //   let answerTask = findByTestAttr(component, 'answerTask').first();

  //   act(() => {
  //     answerTask.prop('methods').onSourceCodeChange(1, 'code');
  //   });

  //   component.update();

  //   inputOutput = findByTestAttr(component, 'inputOutput').first();

  //   await act(() => {
  //     inputOutput.prop('executeCode')(
  //       GLOBALS.EXECUTION_MODES.SUBMIT,
  //       GLOBALS.PROBLEM_TYPES.INTERACTIVE
  //     );
  //   });

  //   component.update();

  //   await act(async () => {
  //     await waitForAsync();
  //   });

  //   component.update();

  //   answerTask = findByTestAttr(component, 'answerTask').first();
  //   expect(answerTask.prop('state').modalToggled).toEqual(
  //     modals.EXECUTION_RESULTS
  //   );
  // });
});
