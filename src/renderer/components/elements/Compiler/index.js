import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import { getLanguageId, prepareJudge0Data } from 'codechum-app-utils';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { InteractiveService } from '../../../services';
import Button from '../Button';
import iconButtonTypes from '../Button/constants/iconButtonTypes';
import IconButton from '../Button/IconButton';
import Code from '../Code';
import CodeEditor from '../CodeEditor';
import Tabs from '../Tabs';
import { tabKinds, tabTypes } from '../Tabs/constants';
import Text from '../Text';
import textTypes from '../Text/constants/textTypes';
import { textAreaTypes } from '../TextArea/constants';
import ControlledTextArea from '../TextArea/Controlled';
import Tooltip from '../Tooltip';
import { tooltipPlacement } from '../Tooltip/constants';
import styles from './styles.module.scss';

const EDITOR_OPTIONS = {
  lineNumbers: false,
  scrollBeyondLastLine: false,
};

const Compiler = ({
  readOnly,
  className,
  initialSourceCodes,
  initialCustomInput,
  initialOutput,
  languageExtension,
  hasInput,
}) => {
  const [sourceCodes, setSourceCode] = useState(initialSourceCodes);
  const [customInput, setCustomInput] = useState(initialCustomInput);
  const [isExecuting, toggleIsExecuting] = useState(false);
  const [output, setOutput] = useState(null);
  const [activeSourceCodeIndex, setActiveSourceCodeIndex] = useState(0);

  const codeEditorRef = useRef();

  const executeCode = async () => {
    toggleIsExecuting(true);

    const judge0Data = prepareJudge0Data({
      executionMode: GLOBALS.EXECUTION_MODES.RUN,
      sourceCodes,
      programmingLanguage: {
        id: getLanguageId(languageExtension),
        extension: languageExtension,
      },
      customInput,
    });

    let submissions = null;
    try {
      const { data } = await InteractiveService.nonInteractivePlayground({
        body: judge0Data,
      });

      submissions = data.submissions;
    } catch (error) {
      console.log('Error calling CodeExecutionsService.execute', error);
      toggleIsExecuting(false);
      return;
    }

    setOutput(submissions.compile_output || submissions.stdout);
    toggleIsExecuting(false);
  };

  const tabData = sourceCodes.map((sourceCode, index) => ({
    name: `${sourceCode.file_name}.${sourceCode.file_extension}`,
    value: `${sourceCode.file_name}.${sourceCode.file_extension}`,
    kind: tabKinds.BUTTON,
    action: () => setActiveSourceCodeIndex(index),
    closeAction: null,
  }));

  const currentSourceCode = sourceCodes[activeSourceCodeIndex];

  return (
    <div className={cn(styles.Compiler, className)}>
      <div className={styles.Compiler_editorContainer}>
        {!readOnly && (
          <Text
            className={styles.Compiler_label}
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
            type={textTypes.BODY.SM}
          >
            Code
          </Text>
        )}

        <div className={styles.Compiler_editor}>
          <div className={styles.Compiler_editor_tabs}>
            <Tabs
              activeTab={tabData[activeSourceCodeIndex]?.value}
              data-test="tabs"
              tabClassName={styles.Compiler_editor_tabs_tab}
              tabs={tabData}
              type={tabTypes.HORIZONTAL.SM}
            />
            <div className={styles.Compiler_editor_tabs_actions}>
              <IconButton
                className={styles.Compiler_editor_tabs_button}
                data-test="leftTabNavigation"
                disabled={activeSourceCodeIndex === 0}
                icon="keyboard_arrow_left"
                onClick={() => {
                  setActiveSourceCodeIndex(activeSourceCodeIndex - 1);
                }}
              />
              <IconButton
                className={styles.Compiler_editor_tabs_button}
                data-test="rightTabNavigation"
                disabled={activeSourceCodeIndex === sourceCodes.length - 1}
                icon="keyboard_arrow_right"
                onClick={() => {
                  setActiveSourceCodeIndex(activeSourceCodeIndex + 1);
                }}
              />
            </div>
          </div>
          <CodeEditor
            key={`${currentSourceCode.file_name}.${currentSourceCode.file_extension}`}
            ref={codeEditorRef}
            data-test="codeEditor"
            editorOptionsOverride={EDITOR_OPTIONS}
            height="320px"
            languageExtension={languageExtension}
            readOnly={readOnly}
            sourceCode={currentSourceCode.code}
            onCodeChange={(newSourceCode) => {
              setSourceCode(
                sourceCodes.map((sourceCode, index) =>
                  index === activeSourceCodeIndex
                    ? {
                        ...sourceCode,
                        code: newSourceCode,
                      }
                    : sourceCode
                )
              );
            }}
          />
        </div>
      </div>

      {(initialCustomInput || hasInput) && (
        <div>
          <Text
            className={styles.Compiler_label}
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
            type={textTypes.BODY.SM}
          >
            Custom Input
          </Text>

          <ControlledTextArea
            data-test="customInput"
            name="custom_input"
            placeholder="Enter custom input here"
            type={textAreaTypes.CODE}
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
          />
        </div>
      )}

      {!readOnly && (output !== null || initialOutput) && (
        <div>
          <Text
            className={styles.Compiler_label}
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
            type={textTypes.BODY.SM}
          >
            Output
          </Text>
          {(output !== null || initialOutput) && (
            <Code data-test="output">
              {output || initialOutput || 'No Output'}
            </Code>
          )}
        </div>
      )}

      {!readOnly && (
        <div className={styles.Compiler_buttons}>
          <Tooltip
            content="Revert back to the initial code"
            placement={tooltipPlacement.BOTTOM}
          >
            <IconButton
              disabled={isExecuting}
              icon="restore"
              type={iconButtonTypes.OUTLINE.MD}
              onClick={() => {
                codeEditorRef.current.setValue(
                  initialSourceCodes[activeSourceCodeIndex]?.code
                );
                setSourceCode(initialSourceCodes);
                setOutput(null);
              }}
            />
          </Tooltip>
          <Button
            className={styles.Compiler_run}
            data-test="runCode"
            disabled={isExecuting}
            icon="play_arrow"
            onClick={executeCode}
          >
            Execute Code
          </Button>
        </div>
      )}
    </div>
  );
};

Compiler.defaultProps = {
  readOnly: false,
  className: null,
  initialCustomInput: null,
  initialOutput: null,
  hasInput: false,
};

Compiler.propTypes = {
  // if true, the code can't be edited
  readOnly: PropTypes.bool,

  // the CSS classname override
  className: PropTypes.string,

  // the initial source code/s. This must have at least
  // 1 source code object inside
  initialSourceCodes: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      file_name: PropTypes.string.isRequired,
      file_extension: PropTypes.string.isRequired,
    })
  ).isRequired,

  initialCustomInput: PropTypes.string,

  initialOutput: PropTypes.string,

  // the programming language set for this editor
  languageExtension: PropTypes.oneOf(GLOBALS.LANGUAGE_EXTENSIONS_PROP_TYPES)
    .isRequired,

  hasInput: PropTypes.bool,
};

export default Compiler;
