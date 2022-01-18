import React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { findByTestAttr } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import ExecutionCard from './index';

import { configureStore } from '../../../configureStore';

const EXECUTION = {
  execution_number: 1,
  mode: GLOBALS.EXECUTION_MODES.TEST,
  run_score: '10.000',
  perfect_score: 10,
  source_codes: [
    {
      file_extension: 'c',
      code: 'testcode',
    },
  ],
  programming_language: {
    id: 1,
  },
};

describe('RENDERING - LatestExecutionList > ExecutionCard', () => {
  it('should render with default props', () => {
    const component = shallow(
      <ExecutionCard execution={EXECUTION} restoreCode={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the correct execution number text', () => {
    let component = mount(
      <ExecutionCard execution={EXECUTION} restoreCode={() => {}} />
    );
    let executionNumberText = findByTestAttr(component, 'executionNumberText');
    expect(executionNumberText.text()).toEqual(
      `Execution ${EXECUTION.execution_number}`
    );

    // just to make sure, let's try again with another execution number
    component = mount(
      <ExecutionCard
        execution={{
          ...EXECUTION,
          execution_number: 2,
        }}
        restoreCode={() => {}}
      />
    );
    executionNumberText = findByTestAttr(component, 'executionNumberText');
    expect(executionNumberText.text()).toEqual('Execution 2');
  });

  it('should render the correct execution mode text', () => {
    // this should be "Test" because the execution is a TEST execution
    let component = mount(
      <ExecutionCard execution={EXECUTION} restoreCode={() => {}} />
    );
    let executionModeText = findByTestAttr(component, 'executionModeText');
    expect(executionModeText.text()).toEqual('Test');

    // this should be "Submit" because the execution is a SUBMIT execution
    component = mount(
      <ExecutionCard
        execution={{
          ...EXECUTION,
          mode: GLOBALS.EXECUTION_MODES.SUBMIT,
        }}
        restoreCode={() => {}}
      />
    );
    executionModeText = findByTestAttr(component, 'executionModeText');
    expect(executionModeText.text()).toEqual('Submit');
  });

  it('should render the correct execution mode text color', () => {
    // this should be GREEN because it is TEST
    let component = mount(
      <ExecutionCard execution={EXECUTION} restoreCode={() => {}} />
    );
    let executionModeText = findByTestAttr(component, 'executionModeText');
    expect(executionModeText.prop('colorClass')).toEqual(
      GLOBALS.COLOR_CLASSES.BLUE['300']
    );

    // this should be BLUE because it is SUBMIT
    component = mount(
      <ExecutionCard
        execution={{
          ...EXECUTION,
          mode: GLOBALS.EXECUTION_MODES.SUBMIT,
        }}
        restoreCode={() => {}}
      />
    );
    executionModeText = findByTestAttr(component, 'executionModeText');
    expect(executionModeText.prop('colorClass')).toEqual(
      GLOBALS.COLOR_CLASSES.GREEN['300']
    );
  });

  it('should render the correct execution score/total text', () => {
    const component = mount(
      <ExecutionCard execution={EXECUTION} restoreCode={() => {}} />
    );

    const executionScoreTotalText = findByTestAttr(
      component,
      'executionScoreTotalText'
    );
    expect(executionScoreTotalText.text()).toEqual(
      `${parseInt(EXECUTION.run_score)}/${parseInt(EXECUTION.perfect_score)}`
    );
  });

  it('should render the correct execution score/total color', () => {
    // this should be GREEN because it is PERFECT
    let component = mount(
      <ExecutionCard execution={EXECUTION} restoreCode={() => {}} />
    );
    let executionScoreTotalText = findByTestAttr(
      component,
      'executionScoreTotalText'
    );
    expect(executionScoreTotalText.prop('colorClass')).toEqual(
      GLOBALS.COLOR_CLASSES.GREEN['300']
    );

    // this should now be BLUE because it is greater than 50%
    component = mount(
      <ExecutionCard
        execution={{
          ...EXECUTION,
          run_score: '6.000',
        }}
        restoreCode={() => {}}
      />
    );
    executionScoreTotalText = findByTestAttr(
      component,
      'executionScoreTotalText'
    );
    expect(executionScoreTotalText.prop('colorClass')).toEqual(
      GLOBALS.COLOR_CLASSES.BLUE['300']
    );

    // this should now be RED because it is less than 50%
    component = mount(
      <ExecutionCard
        execution={{
          ...EXECUTION,
          run_score: '3.000',
        }}
        restoreCode={() => {}}
      />
    );
    executionScoreTotalText = findByTestAttr(
      component,
      'executionScoreTotalText'
    );
    expect(executionScoreTotalText.prop('colorClass')).toEqual(
      GLOBALS.COLOR_CLASSES.RED['300']
    );
  });
});

describe('EVENTS - CourseList > CourseCard > Add', () => {
  it('should be able to toggle the main code', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <ExecutionCard execution={EXECUTION} restoreCode={() => {}} />
      </Provider>
    );
    let caret = findByTestAttr(component, 'caret');
    let mainCode = findByTestAttr(component, 'mainCode');

    // check for the values for the closed state
    expect(caret.prop('icon')).toEqual('expand_more');
    expect(mainCode.exists()).not.toBeTruthy();

    // we simulate the opening of the card
    findByTestAttr(component, 'cardTitleButton').simulate('click');
    component.update();

    // so we now check for the opened state
    caret = findByTestAttr(component, 'caret');
    mainCode = findByTestAttr(component, 'mainCode');
    expect(caret.prop('icon')).toEqual('expand_less');
    expect(mainCode.exists()).toBeTruthy();
  });

  it('should be able to show the restore code confirmation modal', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <ExecutionCard execution={EXECUTION} restoreCode={() => {}} />
      </Provider>
    );

    // initially, it shouldn't exist yet
    let confirmationRestoreModal = findByTestAttr(
      component,
      'confirmationRestoreModal'
    );
    expect(confirmationRestoreModal.exists()).not.toBeTruthy();

    // we click the restore code button that will open the confirmation restore modal
    findByTestAttr(component, 'restoreCodeButton').simulate('click');
    component.update();

    // it should now exist
    confirmationRestoreModal = findByTestAttr(
      component,
      'confirmationRestoreModal'
    );
    expect(confirmationRestoreModal.exists()).toBeTruthy();
  });

  it('should be able to close the restore code confirmation modal', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <ExecutionCard execution={EXECUTION} restoreCode={() => {}} />
      </Provider>
    );

    // initially, it shouldn't exist yet
    let confirmationRestoreModal = findByTestAttr(
      component,
      'confirmationRestoreModal'
    );
    expect(confirmationRestoreModal.exists()).not.toBeTruthy();

    // we click the restore code button that will open the confirmation restore modal
    findByTestAttr(component, 'restoreCodeButton').simulate('click');
    component.update();

    // it should now exist
    confirmationRestoreModal = findByTestAttr(
      component,
      'confirmationRestoreModal'
    );
    expect(confirmationRestoreModal.exists()).toBeTruthy();

    // now, let's close the confirmation modal
    act(() => {
      confirmationRestoreModal.prop('actions')[1].onClick();
    });
    component.update();

    // so it should not exist now
    confirmationRestoreModal = findByTestAttr(
      component,
      'confirmationRestoreModal'
    );
    expect(confirmationRestoreModal.exists()).not.toBeTruthy();
  });

  it('should be able to proceed with the restore code', async () => {
    const restoreCodeFn = jest.fn();

    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <ExecutionCard execution={EXECUTION} restoreCode={restoreCodeFn} />
      </Provider>
    );

    // initially, it shouldn't exist yet
    let confirmationRestoreModal = findByTestAttr(
      component,
      'confirmationRestoreModal'
    );
    expect(confirmationRestoreModal.exists()).not.toBeTruthy();

    // we click the restore code button that will open the confirmation restore modal
    findByTestAttr(component, 'restoreCodeButton').simulate('click');
    component.update();

    // it should now exist
    confirmationRestoreModal = findByTestAttr(
      component,
      'confirmationRestoreModal'
    );
    expect(confirmationRestoreModal.exists()).toBeTruthy();

    // now, let's actually proceed with the process
    await act(async () => {
      await confirmationRestoreModal.prop('actions')[0].onClick();
    });
    component.update();

    expect(restoreCodeFn).toHaveBeenCalledWith(
      EXECUTION.source_codes,
      EXECUTION.programming_language
    );

    // the modal should be closed as well
    confirmationRestoreModal = findByTestAttr(
      component,
      'confirmationRestoreModal'
    );
    expect(confirmationRestoreModal.exists()).not.toBeTruthy();
  });
});
