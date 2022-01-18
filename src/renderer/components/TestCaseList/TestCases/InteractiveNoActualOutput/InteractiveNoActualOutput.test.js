import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import { wrapWithStoreAndRouter } from 'utils';
import InteractiveNoActualOutput from './index';

const DUMMY_TEST_CASE = {
  id: 1,
  inputs: [
    {
      problem_input: {
        id: 1,
        input_name: 'Input 1',
      },
      value: 'Test 1',
    },
    {
      problem_input: {
        id: 2,
        input_name: 'Input 2',
      },
      value: 'Test 1 1',
    },
  ],
  output: 'Test 1',
  is_shown: true,
};

describe('RENDERING - TestCaseList > TestCases > InteractiveNoActualOutput', () => {
  it('should render the expected output if there is an expected output', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <InteractiveNoActualOutput number={1} testCase={DUMMY_TEST_CASE} />
      )
    );

    const testCaseButton = findByTestAttr(component, 'testCaseButton');
    testCaseButton.simulate('click');
    component.update();

    const expectedOutput = findByTestAttr(component, 'expectedOutput').first();
    expect(expectedOutput.text()).toEqual(DUMMY_TEST_CASE.output);
  });

  it('should render the no output state if there is no expected output', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <InteractiveNoActualOutput
          number={1}
          testCase={{
            ...DUMMY_TEST_CASE,
            output: '',
          }}
        />
      )
    );

    const testCaseButton = findByTestAttr(component, 'testCaseButton');
    testCaseButton.simulate('click');
    component.update();

    const noOutputMessage = findByTestAttr(component, 'noOutputMessage');
    expect(noOutputMessage.exists()).toEqual(true);
    expect(noOutputMessage.text()).toEqual('No Output');
  });
});

describe('EVENTS - TestCaseList > TestCases > InteractiveNoActualOutput', () => {
  it('should be able to open and close the card', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <InteractiveNoActualOutput number={1} testCase={DUMMY_TEST_CASE} />
      )
    );

    // initially, its content is closed
    let content = findByTestAttr(component, 'content');
    expect(content.exists()).toEqual(false);

    // let's open its content
    const testCaseButton = findByTestAttr(component, 'testCaseButton');
    testCaseButton.simulate('click');
    component.update();
    content = findByTestAttr(component, 'content');
    expect(content.exists()).toEqual(true);

    // now, let's close its
    testCaseButton.simulate('click');
    component.update();

    content = findByTestAttr(component, 'content');
    expect(content.exists()).toEqual(false);
  });
});
