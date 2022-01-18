import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import CircularProgressBar from './index';
import { configureStore } from '../../../configureStore';
import { actions as settingsActions } from '../../../ducks/reducers/settings';

describe('RENDERING - CircularProgressBar', () => {
  it('should render with default props', () => {
    const store = configureStore();

    const component = mount(
      <Provider store={store}>
        <CircularProgressBar text="20/100" value={20} />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render in night mode', () => {
    const store = configureStore();
    store.dispatch(
      settingsActions.uiActions.uiSettingsUpdate({ isNightMode: true })
    );

    const component = mount(
      <Provider store={store}>
        <CircularProgressBar text="20/100" value={20} />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
