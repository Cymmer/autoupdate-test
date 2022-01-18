import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import { Provider } from 'react-redux';
import { configureStore } from 'configureStore';
import { actions as settingsActions } from 'ducks/reducers/settings';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Code from './index';

describe('RENDERING - Code', () => {
  it('should render a label', () => {
    const store = configureStore();

    const component = mount(
      <Provider store={store}>
        <Code label="Test">print("test")</Code>
      </Provider>
    );

    const label = findByTestAttr(component, 'label').first();
    expect(label).toBeTruthy();
  });

  it('should render in night mode', () => {
    const store = configureStore();
    store.dispatch(
      settingsActions.uiActions.uiSettingsUpdate({ isNightMode: true })
    );

    const component = mount(
      <Provider store={store}>
        <Code>print("test")</Code>
      </Provider>
    );

    const highlighter = findByTestAttr(component, 'highlighter').first();
    expect(highlighter.prop('style')).toEqual(tomorrow);
  });
});
