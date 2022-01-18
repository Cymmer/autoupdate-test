import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { findByTestAttr } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import TerminalModal from './index';

const ANSWER = {
  id: 1,
  score: 'string',
  percent_score: 1,
  is_perfect: true,
  number: 1,
  time: -2147483648,
  datetime_submitted: '2029-08-24T14:15:22Z',
  submissions: 1,
  question_id: 1,
  student_id: 1,
  result_id: 1,
  programming_language_id: 1,
  programming_language: {
    id: 1,
    name: 'C',
    extension: 'c',
    icon: 'https://www.pinclipart.com/picdir/middle/519-5198165_pepehands-png-clipart.png',
  },
  question: {
    id: 1,
    max_score: 1,
    task_id: 1,
    problem_id: 1,
    problem: {
      test_cases: [
        {
          id: 1,
          inputs: [
            {
              value: 'string',
            },
          ],
          output: 'string',
          is_shown: true,
          hidden: true,
        },
      ],
      creator: {
        id: 1,
        first_name: 'string',
        last_name: 'string',
      },
      inputs: [
        {
          input_name: 'string',
          input_description: 'string',
          input_sample: 'string',
          input_constraints: 'string',
        },
      ],
      output_format: 'string',
      sample_output: 'string',
      problem_type: GLOBALS.PROBLEM_TYPES.INTERACTIVE,
    },
    question_additional_info: {},
  },
  student: {
    id: 1,
    first_name: 'string',
    last_name: 'string',
    display_name: 'string',
  },
  source_codes: [
    {
      id: 1,
      answer_id: 1,
      programming_language_id: 1,
      problem_id: 1,
      code: 'string',
      file_name: 'string',
      file_extension: 'strin',
      programming_language: {
        id: 1,
        name: 'C',
        extension: 'c',
        icon: 'https://www.pinclipart.com/picdir/middle/519-5198165_pepehands-png-clipart.png',
      },
    },
  ],
};

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: () => ({
    pathname: '',
  }),
}));

describe('EVENTS - TerminalModal', () => {
  it('should be able to close the modal', () => {
    const handleCloseFn = jest.fn();
    const component = mount(
      <TerminalModal currentAnswer={ANSWER} handleClose={handleCloseFn} />
    );

    const xterm = findByTestAttr(component, 'xterm');
    xterm.prop('setSocket')({
      close: jest.fn(),
      send: jest.fn(),
    });

    const closeButton = findByTestAttr(component, 'closeButton');

    act(() => {
      closeButton.simulate('click');
    });

    expect(handleCloseFn).toHaveBeenCalled();
  });
});
