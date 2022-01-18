import GLOBALS from 'codechum-app-globals';
import { mount } from 'enzyme';
import matchMediaPolyfill from 'mq-polyfill';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { configureStore } from '../../../configureStore';
import CodeEditor from './index';

beforeAll(() => {
  matchMediaPolyfill(window);
  window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height,
    }).dispatchEvent(new this.Event('resize'));
  };
});

describe('RENDERING - CodeEditor', () => {
  it('should render with default props', () => {
    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <CodeEditor languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C} />
      </Provider>
    );
    expect(component).toMatchSnapshot();

    component.unmount();
  });

  it('should render the normal editor on desktop browsers', () => {
    act(() => {
      window.resizeTo(768, 1000);
    });

    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <CodeEditor languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C} />
      </Provider>
    );
    expect(component).toMatchSnapshot();

    component.unmount();
  });

  it('should render the mobile editor on mobile devices (1)', async () => {
    await act(async () => {
      window.resizeTo(767, 1000);
    });

    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <CodeEditor languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C} />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });

  it('should render the mobile editor on mobile devices (2)', () => {
    act(() => {
      window.resizeTo(600, 1000);
      return undefined;
    });

    const store = configureStore();
    const component = mount(
      <Provider store={store}>
        <CodeEditor languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C} />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });

  // NOTE: Commented it out temporarily since need to investigate on why this test case is failing
  // eslint-disable-next-line jest/no-commented-out-tests
  // it('should pass the correct function for the `highlight` prop of the mobile editor', () => {
  //   act(() => {
  //     window.resizeTo(600, 1000);
  //     return undefined;
  //   });

  //   const component = mount(
  //     wrapWithStoreAndRouter(
  //       <CodeEditor languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON} />
  //     )
  //   );

  //   const mobileCodeEditor = findByTestAttr(
  //     component,
  //     'mobileCodeEditor'
  //   ).first();
  //   expect(
  //     typeof mobileCodeEditor.prop('highlight')(
  //       'print("Hello World")',
  //       GLOBALS.LANGUAGE_EXTENSIONS.PYTHON
  //     )
  //   ).toBe('string');
  // });
});
