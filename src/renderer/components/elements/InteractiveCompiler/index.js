import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { TerminalModal } from 'components/modals';
import styles from './styles.module.scss';

import Button from '../Button';
import Text from '../Text';
import textTypes from '../Text/constants/textTypes';
import IconButton from '../Button/IconButton';
import iconButtonTypes from '../Button/constants/iconButtonTypes';
import CodeEditor from '../CodeEditor';
import Tooltip from '../Tooltip';
import { tooltipPlacement } from '../Tooltip/constants';
import Tabs from '../Tabs';
import { tabTypes, tabKinds } from '../Tabs/constants';

const EDITOR_OPTIONS = {
  lineNumbers: false,
  scrollBeyondLastLine: false,
};

const InteractiveCompiler = ({
  readOnly,
  className,
  initialSourceCodes,
  languageExtension,
}) => {
  const [sourceCodes, setSourceCode] = useState(initialSourceCodes);
  const [activeSourceCodeIndex, setActiveSourceCodeIndex] = useState(0);

  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);

  const runCodeButtonRef = useRef();
  const codeEditorRef = useRef();

  const tabData = sourceCodes.map((sourceCode, index) => ({
    name: `${sourceCode.file_name}.${sourceCode.file_extension}`,
    value: `${sourceCode.file_name}.${sourceCode.file_extension}`,
    kind: tabKinds.BUTTON,
    action: () => setActiveSourceCodeIndex(index),
    closeAction: null,
  }));

  const currentSourceCode = sourceCodes[activeSourceCodeIndex];

  return (
    <>
      <div className={cn(styles.InteractiveCompiler, className)}>
        {isTerminalModalOpen && (
          <TerminalModal
            currentAnswer={{
              programming_language: {
                id: getLanguageId(languageExtension),
              },
              source_codes: sourceCodes,
            }}
            data-test="terminalModal"
            handleClose={() => {
              setIsTerminalModalOpen(false);
            }}
          />
        )}
        <div className={styles.InteractiveCompiler_editorContainer}>
          {!readOnly && (
            <Text
              className={styles.InteractiveCompiler_label}
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
              type={textTypes.BODY.SM}
            >
              Code
            </Text>
          )}

          <div className={styles.InteractiveCompiler_editor}>
            <div className={styles.InteractiveCompiler_editor_tabs}>
              <Tabs
                activeTab={tabData[activeSourceCodeIndex]?.value}
                data-test="tabs"
                tabClassName={styles.InteractiveCompiler_editor_tabs_tab}
                tabs={tabData}
                type={tabTypes.HORIZONTAL.SM}
              />
              <div className={styles.InteractiveCompiler_editor_tabs_actions}>
                <IconButton
                  className={styles.InteractiveCompiler_editor_tabs_button}
                  data-test="leftTabNavigation"
                  disabled={activeSourceCodeIndex === 0}
                  icon="keyboard_arrow_left"
                  onClick={() => {
                    setActiveSourceCodeIndex(activeSourceCodeIndex - 1);
                  }}
                />
                <IconButton
                  className={styles.InteractiveCompiler_editor_tabs_button}
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

        {!readOnly && (
          <div className={styles.InteractiveCompiler_buttons}>
            <Tooltip
              content="Revert back to the initial code"
              placement={tooltipPlacement.BOTTOM}
            >
              <IconButton
                disabled={isTerminalModalOpen}
                icon="restore"
                type={iconButtonTypes.OUTLINE.MD}
                onClick={() => {
                  codeEditorRef.current.setValue(
                    initialSourceCodes[activeSourceCodeIndex]?.code
                  );
                  setSourceCode(initialSourceCodes);
                }}
              />
            </Tooltip>
            <Button
              className={styles.InteractiveCompiler_run}
              data-test="runCode"
              disabled={
                isTerminalModalOpen ||
                (runCodeButtonRef.current &&
                  window.pageYOffset < runCodeButtonRef.current.offsetY)
              }
              icon="play_arrow"
              onClick={() => {
                setIsTerminalModalOpen(true);
              }}
            >
              Execute Code
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

InteractiveCompiler.defaultProps = {
  readOnly: false,
  className: null,
};

InteractiveCompiler.propTypes = {
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

  // the programming language set for this editor
  languageExtension: PropTypes.oneOf(GLOBALS.LANGUAGE_EXTENSIONS_PROP_TYPES)
    .isRequired,
};

export default InteractiveCompiler;
