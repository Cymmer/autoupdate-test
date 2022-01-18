import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { findByTestAttr } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import Compiler from './index';
import { tabKinds } from '../Tabs/constants';

import { BASE_URL as CodeExecutionsServiceBaseUrl } from '../../../services/CodeExecutionsService';
import config from '../../../services/config';

const mockAxios = new MockAdapter(axios);
describe('RENDERING - Compiler', () => {
  it('should render with default props', () => {
    const component = shallow(
      <Compiler
        initialSourceCodes={[
          {
            code: 'Test Code 1',
            file_name: 'file1',
            file_extension: 'c',
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render a "Code" label and action buttons if not readOnly', () => {
    const component = shallow(
      <Compiler
        initialSourceCodes={[
          {
            code: 'Test Code 1',
            file_name: 'file1',
            file_extension: 'c',
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
        readOnly={false}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the custom input field if it has initialCustomInput', () => {
    let component = shallow(
      <Compiler
        initialCustomInput="Test Input"
        initialSourceCodes={[
          {
            code: 'Test Code 1',
            file_name: 'file1',
            file_extension: 'c',
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
    );
    expect(component).toMatchSnapshot();

    component = shallow(
      <Compiler
        readOnly
        initialCustomInput="Test Input"
        initialSourceCodes={[
          {
            code: 'Test Code 1',
            file_name: 'file1',
            file_extension: 'c',
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the custom input field if hasInput is true', () => {
    let component = shallow(
      <Compiler
        hasInput
        initialSourceCodes={[
          {
            code: 'Test Code 1',
            file_name: 'file1',
            file_extension: 'c',
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
    );
    expect(component).toMatchSnapshot();

    component = shallow(
      <Compiler
        hasInput
        readOnly
        initialSourceCodes={[
          {
            code: 'Test Code 1',
            file_name: 'file1',
            file_extension: 'c',
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the output display if not readonly and has output', () => {
    const component = shallow(
      <Compiler
        initialSourceCodes={[
          {
            code: 'Test Code 1',
            file_name: 'file1',
            file_extension: 'c',
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
        output="Test Output"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the output display if not readonly and has initial output', () => {
    const component = shallow(
      <Compiler
        initialOutput="Test Output"
        initialSourceCodes={[
          {
            code: 'Test Code 1',
            file_name: 'file1',
            file_extension: 'c',
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should not render the output display if readonly and has output', () => {
    const component = shallow(
      <Compiler
        initialSourceCodes={[
          {
            code: 'Test Code 1',
            file_name: 'file1',
            file_extension: 'c',
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
        output="Test Output"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should not render the output display if readonly and has initial output', () => {
    const component = shallow(
      <Compiler
        readOnly
        initialOutput="Test Output"
        initialSourceCodes={[
          {
            code: 'Test Code 1',
            file_name: 'file1',
            file_extension: 'c',
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should pass the correct data to the tabs component', () => {
    const sourceCodes = [
      {
        code: 'Test Code 1',
        file_name: 'file1',
        file_extension: 'c',
      },
      {
        code: 'Test Code 2',
        file_name: 'file2',
        file_extension: 'c',
      },
      {
        code: 'Test Code 3',
        file_name: 'file3',
        file_extension: 'h',
      },
    ];
    const component = shallow(
      <Compiler
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
      },
      {
        code: 'Test Code 2',
        file_name: 'file2',
        file_extension: 'c',
      },
    ];
    const component = shallow(
      <Compiler
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
      },
    ];
    const component = shallow(
      <Compiler
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

  it('should update the custom input value', () => {
    const sourceCodes = [
      {
        code: 'Test Code 1',
        file_name: 'file1',
        file_extension: 'c',
      },
    ];
    const component = shallow(
      <Compiler
        hasInput
        initialSourceCodes={sourceCodes}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
        output="Test Output"
      />
    );

    let customInput = findByTestAttr(component, 'customInput');
    customInput.prop('onChange')({ target: { value: 'new input' } });

    customInput = findByTestAttr(component, 'customInput');
    expect(customInput.prop('value')).toBe('new input');
  });

  it('should prioritize to display the output after executing', async () => {
    mockAxios
      .onPost(`${config.RUN_CODE_URL}${CodeExecutionsServiceBaseUrl}execute/`)
      .reply(200, {
        submissions: [
          {
            stdout: 'SGVsbG8gV29ybGQK\n',
            time: 0.05,
            memory: 14132.0,
            stderr: null,
            token: 'a96c293f-93d8-46da-9785-f27f88e9fd66',
            compile_output: null,
            message: null,
            status: { id: 3, description: 'Accepted' },
          },
        ],
      });

    const component = shallow(
      <Compiler
        initialSourceCodes={[
          {
            code: 'print("Hello World")',
            file_name: 'script',
            file_extension: 'py',
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
      />
    );

    const runCode = findByTestAttr(component, 'runCode');
    await act(async () => {
      runCode.simulate('click');
    });

    const output = findByTestAttr(component, 'output');
    expect(output.text()).toBe(`Hello World\n`);
  });
});
