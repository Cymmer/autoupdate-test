import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { configureStore } from '../../../../configureStore';
import Controlled from './index';
import dropdownTypes from '../constants/dropdownTypes';

describe('RENDERING - Dropdown > Controlled', () => {
  it('should render with default props', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <Controlled name="test" options={[]} onChange={() => {}} />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the label if it has a label and it is of type SLIM', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <Controlled
          label="Test"
          name="test"
          options={[]}
          type={dropdownTypes.SLIM}
          onChange={() => {}}
        />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should not render the label if it has a label and it is not of type SLIM', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <Controlled
          label="Test"
          name="test"
          options={[]}
          type={dropdownTypes.LARGE}
          onChange={() => {}}
        />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the helper text if it has a helper text', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <Controlled
          helperText="Test"
          name="test"
          options={[]}
          onChange={() => {}}
        />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the error message if it has an error message', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <Controlled error="Test" name="test" options={[]} onChange={() => {}} />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
