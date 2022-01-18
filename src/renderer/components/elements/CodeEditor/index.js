/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  forwardRef,
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import path from 'path';
import './styles.scss';

import Editor, { loader } from '@monaco-editor/react';
import MobileEditor from 'react-simple-code-editor';
import { highlight } from 'prismjs/components/prism-core';
// eslint-disable-next-line no-unused-vars
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-asm6502';
import 'prismjs/themes/prism-solarizedlight.css';

import { getIsNightMode } from 'ducks';

import GLOBALS from 'codechum-app-globals';
import { useWindowDimensions } from 'hooks';
import {
  convertLanguageExtensionToMonacoMode,
  convertLanguageExtensionToMobileEditorMode,
  uriFromPath,
} from './helpers';
import Spinner from '../Spinner';

// fix for exports is not defined error
// https://github.com/suren-atoyan/monaco-react/issues/87#issuecomment-942600539
// eslint-disable-next-line
self.module = undefined;

const CodeEditor = (
  {
    isNightMode,
    sourceCode,
    languageExtension,
    onCodeChange,
    editorOptionsOverride,
    readOnly,
    className,
    height,
  },
  ref
) => {
  const editorRef = useRef();
  const [codeValue, setCodeValue] = useState(sourceCode);

  useEffect(() => {
    console.log('__dirname', __dirname);
    console.log('process.env', process.env);
    
    // '../../../../../../../../node_modules/monaco-editor/min/vs'

    loader.config({
      paths: {
        vs: uriFromPath(
          path.join(__dirname, '../../../dependencies/monaco-editor/min/vs')
        ),
      },
    });
  }, []);

  const handleEditorDidMount = (editor) => {
    editor.focus();
    editor.setValue(sourceCode || '');

    editorRef.current = editor;
    editorRef.current.onDidChangeModelContent(() => {
      onCodeChange(editorRef.current.getValue());
      setCodeValue(editorRef.current.getValue());
    });
  };

  const EDITOR_OPTIONS = {
    readOnly,
    fontFamily: 'Monaco',
    fontSize: 14,
  };

  const mobileEditorRef = useRef(null);

  const highlightWithLineNumbers = (input, language) => {
    if (input && language) {
      return highlight(input, language)
        ?.split('\n')
        .map(
          (line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`
        )
        .join('\n');
    }

    return null;
  };

  const { width: windowWidth } = useWindowDimensions();

  if (mobileEditorRef?.current?._input && readOnly) {
    // since the `react-simple-code-editor` library doesn't
    // expose a `disabled` or `readOnly` property, we manually
    // set its textarea to disabled by finding its `_input` element.
    //
    // NOTE: If the `react-simple-code-editor` library is updated,
    // this may need to be updated as well

    // eslint-disable-next-line
    ReactDOM.findDOMNode(mobileEditorRef?.current?._input).setAttribute(
      'disabled',
      true
    );
  }

  // Handles manual update of the code editor
  // this is usually called by parent component
  useImperativeHandle(
    ref,
    () => ({
      setValue: (value) => {
        // eslint-disable-next-line no-unused-expressions
        editorRef.current?.setValue(value);
        setCodeValue(value);
      },
    }),
    [editorRef]
  );

  return (
    <>
      {windowWidth > 767 ? (
        <Editor
          className={className}
          height={height}
          language={convertLanguageExtensionToMonacoMode(languageExtension)}
          loading={<Spinner />}
          options={{ ...EDITOR_OPTIONS, ...editorOptionsOverride }}
          theme={isNightMode ? 'dark' : 'light'}
          onMount={handleEditorDidMount}
        />
      ) : (
        <MobileEditor
          ref={mobileEditorRef}
          className="MobileEditor"
          data-test="mobileCodeEditor"
          highlight={(code) =>
            highlightWithLineNumbers(
              // so that there is an initial line of code, we should add an empty space
              // if there is no code yet. This space won't actually show in the code editor
              code || ' ',
              convertLanguageExtensionToMobileEditorMode(languageExtension)
            )
          }
          id="mobileCodeEditor"
          padding={12}
          style={{
            fontFamily: '"Monaco", monospace',
            fontSize: 14,
            height: '100%',
            outline: 0,
          }}
          textareaId="codeArea"
          value={codeValue}
          onValueChange={
            !readOnly
              ? (code) => {
                  setCodeValue(code);
                  onCodeChange(code);
                }
              : () => {}
          }
        />
      )}
    </>
  );
};

CodeEditor.defaultProps = {
  sourceCode: '',
  editorOptionsOverride: {},
  onCodeChange: null,
  readOnly: false,
  className: null,
  height: '100%',
};

CodeEditor.propTypes = {
  // the programming language set for this editor
  languageExtension: PropTypes.oneOf(GLOBALS.LANGUAGE_EXTENSIONS_PROP_TYPES)
    .isRequired,

  // the function that'll be called when the code is updated
  onCodeChange: PropTypes.func,

  // the source code currently displayed
  sourceCode: PropTypes.string,

  // true if the theme is night mode
  isNightMode: PropTypes.bool.isRequired,

  readOnly: PropTypes.bool,

  editorOptionsOverride: PropTypes.object,

  className: PropTypes.string,

  height: PropTypes.string,
};

const mapStateToProps = (store) => ({
  isNightMode: getIsNightMode(store),
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(
  forwardRef(CodeEditor)
);
