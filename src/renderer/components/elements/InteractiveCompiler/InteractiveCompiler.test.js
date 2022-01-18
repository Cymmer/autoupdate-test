import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { findByTestAttr } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import InteractiveCompiler from './index';
import { tabKinds } from '../Tabs/constants';

const mockAxios = new MockAdapter(axios);
describe('RENDERING - InteractiveCompiler', () => {
  it('should pass the correct data to the tabs component', () => {
    const sourceCodes = [
      {
        code: 'Test Code 1',
        file_name: 'file1',
        file_extension: 'c',
        programming_language: {
          id: 1,
        },
      },
      {
        code: 'Test Code 2',
        file_name: 'file2',
        file_extension: 'c',
        programming_language: {
          id: 1,
        },
      },
      {
        code: 'Test Code 3',
        file_name: 'file3',
        file_extension: 'h',
        programming_language: {
          id: 1,
        },
      },
    ];
    const component = shallow(
      <InteractiveCompiler
        initialSourceCodes={sourceCodes}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
    );

    const tabsComponent = findByTestAttr(component, 'tabs');

    const correctTabData = sourceCodes.map((sourceCode) => ({
      name: `${sourceCode.file_name}.${sourceCode.file_extension}`,
      value: `${sourceCode.file_name}.${sourceCode.file_extension}`,
      kind: tabKinds.BUTTON,
      action: () => {},
      closeAction: null,
    }));

    tabsComponent.prop('tabs').forEach((tab, index) => {
      expect(JSON.stringify(tab)).toBe(JSON.stringify(correctTabData[index]));
    });

    // since by default, the initial activeSourceCodeIndex is 0, we check
    // the element at index 0 of the correctTabData
    expect(tabsComponent.prop('activeTab')).toBe(correctTabData[0].value);
  });
});

describe('EVENTS - Button', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  afterAll(() => {
    mockAxios.restore();
  });

  it('should correctly enable/disable the tab navigation', () => {
    const sourceCodes = [
      {
        code: 'Test Code 1',
        file_name: 'file1',
        file_extension: 'c',
        programming_language: {
          id: 1,
        },
      },
      {
        code: 'Test Code 2',
        file_name: 'file2',
        file_extension: 'c',
        programming_language: {
          id: 1,
        },
      },
    ];
    const component = shallow(
      <InteractiveCompiler
        initialSourceCodes={sourceCodes}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
    );

    let leftTabNavigation = findByTestAttr(component, 'leftTabNavigation');
    let rightTabNavigation = findByTestAttr(component, 'rightTabNavigation');

    expect(leftTabNavigation.prop('disabled')).toBe(true);
    expect(rightTabNavigation.prop('disabled')).toBe(false);

    // click the right tab navigation to move to index 1 (from index 0)
    act(() => rightTabNavigation.prop('onClick')());

    leftTabNavigation = findByTestAttr(component, 'leftTabNavigation');
    rightTabNavigation = findByTestAttr(component, 'rightTabNavigation');

    expect(leftTabNavigation.prop('disabled')).toBe(false);
    expect(rightTabNavigation.prop('disabled')).toBe(true);
  });

  it('should update the current source code `code` value on codeeditor code change', () => {
    const sourceCodes = [
      {
        code: 'Test Code 1',
        file_name: 'file1',
        file_extension: 'c',
        programming_language: {
          id: 1,
        },
      },
    ];
    const component = shallow(
      <InteractiveCompiler
        initialSourceCodes={sourceCodes}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
        output="Test Output"
      />
    );

    let codeEditor = findByTestAttr(component, 'codeEditor');
    codeEditor.prop('onCodeChange')('new code');

    codeEditor = findByTestAttr(component, 'codeEditor');
    expect(codeEditor.prop('sourceCode')).toBe('new code');
  });
});
