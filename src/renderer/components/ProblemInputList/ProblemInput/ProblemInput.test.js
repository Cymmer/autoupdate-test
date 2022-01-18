import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import { wrapWithStoreAndRouter } from 'utils';
import ProblemInput from './index';

const DUMMY_INPUT_NUMBER = 1;

const DUMMY_INPUT = {
  input_name: 'Test',
  input_description: 'Test description',
  input_constraints: 'Test constraints',
  input_sample: '45',
};

describe('RENDERING - ProblemInputList > ProblemInput', () => {
  it('should render the name of the input', () => {
    const component = mount(
      wrapWithStoreAndRouter(<ProblemInput input={DUMMY_INPUT} number={1} />)
    );

    const problemInputName = findByTestAttr(component, 'problemInputName');
    expect(problemInputName.text()).toEqual(
      `${DUMMY_INPUT_NUMBER}. ${DUMMY_INPUT.input_name}`
    );
  });

  it('should render the description of the input if there is a description', () => {
    const component = mount(
      wrapWithStoreAndRouter(<ProblemInput input={DUMMY_INPUT} />)
    );

    const problemInputDescription = findByTestAttr(
      component,
      'problemInputDescription'
    );

    expect(problemInputDescription.text()).toEqual(
      DUMMY_INPUT.input_description
    );
  });

  it('should not render the desription message of the input if there is no description', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <ProblemInput
          input={{
            ...DUMMY_INPUT,
            input_description: '',
          }}
        />
      )
    );

    const problemInputDescription = findByTestAttr(
      component,
      'problemInputDescription'
    );

    expect(problemInputDescription.exists()).toEqual(false);
  });

  it('should render the constraints of the input if there is a constraints', () => {
    const component = mount(
      wrapWithStoreAndRouter(<ProblemInput input={DUMMY_INPUT} />)
    );

    const problemInputConstraints = findByTestAttr(
      component,
      'problemInputConstraints'
    );

    expect(problemInputConstraints.text()).toEqual(
      DUMMY_INPUT.input_constraints
    );
  });

  it('should not render the constraints message of the input if there is no constraints', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <ProblemInput
          input={{
            ...DUMMY_INPUT,
            input_constraints: '',
          }}
        />
      )
    );

    const problemInputConstraints = findByTestAttr(
      component,
      'problemInputConstraints'
    );

    expect(problemInputConstraints.exists()).toEqual(false);
  });

  it('should render the input sample of the input if there is a input sample', () => {
    const component = mount(
      wrapWithStoreAndRouter(<ProblemInput input={DUMMY_INPUT} />)
    );

    const problemInputSample = findByTestAttr(
      component,
      'problemInputSample'
    ).first();

    expect(problemInputSample.text()).toEqual(DUMMY_INPUT.input_sample);
  });

  it('should render the no input sample message of the input if there is no input sample', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <ProblemInput
          input={{
            ...DUMMY_INPUT,
            input_sample: '',
          }}
        />
      )
    );

    const problemInputSample = findByTestAttr(
      component,
      'problemInputSample'
    ).first();

    expect(problemInputSample.exists()).toEqual(false);
  });
});
