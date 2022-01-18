import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import { act } from 'react-dom/test-utils';
import { wrapWithStoreAndRouter } from 'utils';
import NoActualOutput from './index';

describe('RENDERING - TestCaseList > TestCases > NoActualOutput', () => {
  it('should render the No Input state if there is no input', () => {
    // let's test the first case of no input where the `inputs`
    // value is still an array but has no contents inside it
    let component = mount(
      wrapWithStoreAndRouter(
        <NoActualOutput
          number={1}
          testCase={{
            inputs: [],
            output: 'Dummy Output',
            is_shown: true,
          }}
        />
      )
    );
    let testcaseButton = findByTestAttr(component, 'testcaseButton');
    act(() => {
      testcaseButton.simulate('click');
    });
    component.update();

    let noInputText = findByTestAttr(component, 'noInputText');
    expect(noInputText.exists()).toEqual(true);
    expect(noInputText.text()).toEqual('No Input');

    // let's now test the other case of no input where the `inputs`
    // value is null
    component = mount(
      wrapWithStoreAndRouter(
        <NoActualOutput
          number={1}
          testCase={{
            inputs: [],
            output: 'Dummy Output',
            is_shown: true,
          }}
        />
      )
    );
    testcaseButton = findByTestAttr(component, 'testcaseButton');
    act(() => {
      testcaseButton.simulate('click');
    });
    component.update();

    noInputText = findByTestAttr(component, 'noInputText');
    expect(noInputText.exists()).toEqual(true);
    expect(noInputText.text()).toEqual('No Input');
  });

  it('should render the With Input state if there is an input', () => {
    const TEST_CASE_INPUT = 'Dummy Input';
    const component = mount(
      wrapWithStoreAndRouter(
        <NoActualOutput
          number={1}
          testCase={{
            inputs: [
              {
                value: TEST_CASE_INPUT,
              },
            ],
            output: 'Dummy Output',
            is_shown: true,
          }}
        />
      )
    );
    const testcaseButton = findByTestAttr(component, 'testcaseButton');
    act(() => {
      testcaseButton.simulate('click');
    });
    component.update();

    const input = findByTestAttr(component, 'input').first();
    expect(input.exists()).toEqual(true);
    expect(input.text()).toEqual(TEST_CASE_INPUT);
  });

  it('should render the No Output state if there is no output', () => {
    const component = mount(
      wrapWithStoreAndRouter(
        <NoActualOutput
          number={1}
          testCase={{
            inputs: [],
            output: '',
            is_shown: true,
          }}
        />
      )
    );
    const testcaseButton = findByTestAttr(component, 'testcaseButton');
    act(() => {
      testcaseButton.simulate('click');
    });
    component.update();

    const noOutputText = findByTestAttr(component, 'noOutputText');
    expect(noOutputText.exists()).toEqual(true);
    expect(noOutputText.text()).toEqual('No Output');
  });

  it('should render the With Output state if there is an output', () => {
    const TEST_CASE_OUTPUT = 'Dummy Output';
    const component = mount(
      wrapWithStoreAndRouter(
        <NoActualOutput
          number={1}
          testCase={{
            inputs: [],
            output: TEST_CASE_OUTPUT,
            is_shown: true,
          }}
        />
      )
    );
    const testcaseButton = findByTestAttr(component, 'testcaseButton');
    act(() => {
      testcaseButton.simulate('click');
    });
    component.update();

    const output = findByTestAttr(component, 'output').first();
    expect(output.exists()).toEqual(true);
    expect(output.text()).toEqual(TEST_CASE_OUTPUT);
  });
});
