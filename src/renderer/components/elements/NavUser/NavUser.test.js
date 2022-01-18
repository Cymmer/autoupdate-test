import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { findByTestAttr } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import NavUser from './index';
import { configureStore } from '../../../configureStore';

describe('RENDERING - NavUser', () => {
  it('should render with default props', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <BrowserRouter basename="/">
          <NavUser />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should have the proper links for the user type student', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <BrowserRouter basename="/">
          <NavUser userType={GLOBALS.USER_TYPES.STUDENT} />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should have the proper links for the user type teacher', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <BrowserRouter basename="/">
          <NavUser userType={GLOBALS.USER_TYPES.TEACHER} />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should have the proper links for the user type manager', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <BrowserRouter basename="/">
          <NavUser userType={GLOBALS.USER_TYPES.MANAGER} />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should have the proper links for the user type admin', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <BrowserRouter basename="/">
          <NavUser userType={GLOBALS.USER_TYPES.ADMIN} />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should update the classes on dropdown toggled on desktop', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <BrowserRouter basename="/">
          <NavUser />
        </BrowserRouter>
      </Provider>
    );

    findByTestAttr(component, 'dropdownButton').simulate('click');
    component.update();
    expect(component).toMatchSnapshot();
  });
});
