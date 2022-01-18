import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import QuestionInfo from './index';

const NUMBER = 1;

const ANSWER_WITH_SOLUTION = {
  question: {
    problem: {
      creator: {
        first_name: 'Male',
        last_name: 'Teacher',
      },
      name: 'Sample Problem',
      description: '<p>Sample description!</p>',
      inputs: [
        {
          input_sample: '1',
          input_description: 'This is a problem description',
          input_name: 'Length of width',
          input_constraints: '',
        },
      ],
      output_format: '1',
      sample_output: '1',
      creator_name_override: null,
      problem_solution: 'https://www.codechum.com/pdf-file.pdf',
    },
  },
};

const ANSWER_WITHOUT_SOLUTION = {
  ...ANSWER_WITH_SOLUTION,
  question: {
    problem: {
      ...ANSWER_WITH_SOLUTION.question.problem,
      problem_solution: null,
    },
  },
};

describe('RENDERING - QuestionInfo', () => {
  it('should render the view solution link if there is a solution and it is shown', () => {
    const component = shallow(
      <QuestionInfo
        showProblemSolution
        answer={ANSWER_WITH_SOLUTION}
        number={NUMBER}
      />
    );

    const viewSolutionLink = findByTestAttr(component, 'viewSolutionLink');
    expect(viewSolutionLink.exists()).toBeTruthy();

    // also check if the link is correct
    expect(viewSolutionLink.prop('to')).toEqual(
      ANSWER_WITH_SOLUTION.question.problem.problem_solution
    );
  });

  it('should render the view solution link if there is a solution and it is not shown', () => {
    const component = shallow(
      <QuestionInfo
        answer={ANSWER_WITH_SOLUTION}
        number={NUMBER}
        showProblemSolution={false}
      />
    );

    const viewSolutionLink = findByTestAttr(component, 'viewSolutionLink');
    expect(viewSolutionLink.exists()).not.toBeTruthy();
  });

  it('should not render the view solution link if there is no solution', () => {
    const component = shallow(
      <QuestionInfo
        showProblemSolution
        answer={ANSWER_WITHOUT_SOLUTION}
        number={NUMBER}
      />
    );

    const viewSolutionLink = findByTestAttr(component, 'viewSolutionLink');
    expect(viewSolutionLink.exists()).not.toBeTruthy();
  });

  it('should render interactive inputs if problem is interactive', () => {
    const component = shallow(
      <QuestionInfo
        isInteractive
        showProblemSolution
        answer={ANSWER_WITHOUT_SOLUTION}
        number={NUMBER}
      />
    );

    const interactiveInput = findByTestAttr(component, 'interactiveInput');
    expect(interactiveInput.exists()).toBeTruthy();
  });

  it('should render non-interactive inputs if problem is not interactive', () => {
    const component = shallow(
      <QuestionInfo
        showProblemSolution
        answer={ANSWER_WITHOUT_SOLUTION}
        isInteractive={false}
        number={NUMBER}
      />
    );

    const nonInteractiveInput = findByTestAttr(
      component,
      'nonInteractiveInput'
    );
    expect(nonInteractiveInput.exists()).toBeTruthy();
  });
});
