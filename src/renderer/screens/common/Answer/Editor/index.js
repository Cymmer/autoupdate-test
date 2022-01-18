import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import {
  Tabs,
  Card,
  ControlledDropdown,
  CodeEditor,
  IconButton,
} from 'components/elements';
import {
  tabTypes,
  tabKinds,
  dropdownTypes,
  buttonTypes,
} from 'components/elements/constants';
import { AddFileModal, CodyModal } from 'components/modals';
import { MixpanelTrackService } from 'services';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

const MAX_FILES = 6;

/* eslint-disable camelcase */
const Editor = ({
  task: { id, programming_languages: programmingLanguages },
  answer,
  onSourceCodeChange,
  onLanguageChange,
  createSourceCode,
  deleteSourceCode,
  languagesRef,
  languagesActiveOnboarding,
  className,
  isInteractive,
}) => {
  const [isAddFileModalToggled, toggleAddFileModal] = useState(false);

  const [sourceCodeToBeDeleted, setSourceCodeToBeDeleted] = useState(null);
  const [isDeletingSourceCode, toggleDeletingSourceCode] = useState(false);

  const [activeSourceCodeIndex, setActiveSourceCodeIndex] = useState(0);

  useEffect(() => {
    // everytime the answer or programming language changes,
    // we reset the active source code index to the first
    // one (i.e. the one at index 0)
    if (!answer?.id && !answer?.programming_language?.id) {
      return;
    }

    setActiveSourceCodeIndex(0);
  }, [answer?.id, answer?.programming_language?.id]);

  const { source_codes: sourceCodes } = answer;
  const filteredSourceCodes = sourceCodes.filter(
    (sourceCode) =>
      sourceCode.programming_language.id === answer.programming_language.id
  );

  const tabData = filteredSourceCodes.map((sourceCode, index) => ({
    name: `${sourceCode.file_name}.${sourceCode.file_extension}`,
    value: sourceCode.id,
    kind: tabKinds.BUTTON,
    action: () => setActiveSourceCodeIndex(index),
    closeAction:
      index !== 0
        ? () => {
            setSourceCodeToBeDeleted({
              sourceCode,
              index,
            });
          }
        : null,
  }));

  const currentSourceCode = filteredSourceCodes[activeSourceCodeIndex];

  const filteredProgrammingLanguagesOptions = isInteractive
    ? programmingLanguages
        .filter(
          (language) =>
            language.id !== GLOBALS.PROGRAMMING_LANGUAGE_IDS.ASSEMBLY
        )
        .map((language) => ({
          value: language.id,
          label: language.name,
        }))
    : programmingLanguages.map((language) => ({
        value: language.id,
        label: language.name,
      }));

  return (
    <>
      {sourceCodeToBeDeleted !== null && (
        <CodyModal
          actions={[
            {
              text: 'Delete',
              type: buttonTypes.PRIMARY.RED,
              onClick: async () => {
                toggleDeletingSourceCode(true);

                // delete this SourceCode object
                await deleteSourceCode(sourceCodeToBeDeleted.sourceCode.id);

                // set the active source code index to
                // the previous one
                setActiveSourceCodeIndex(sourceCodeToBeDeleted.index - 1);

                toggleDeletingSourceCode(false);
                setSourceCodeToBeDeleted(null);
              },
              disabled: isDeletingSourceCode,
            },
            {
              text: 'Back',
              type: buttonTypes.TERTIARY,
              onClick: () => setSourceCodeToBeDeleted(null),
            },
          ]}
          body={`Are you sure you want to delete ${sourceCodeToBeDeleted.sourceCode.file_name}.${sourceCodeToBeDeleted.sourceCode.file_extension}?`}
          codyType={GLOBALS.CODY_TYPES.ERROR}
          handleClose={() => setSourceCodeToBeDeleted(null)}
          isOpen={sourceCodeToBeDeleted !== null}
          parentSelector="#answerTaskModalPortal"
          title="Delete?"
        />
      )}

      {isAddFileModalToggled && (
        <AddFileModal
          createSourceCode={createSourceCode}
          existingSourceCodes={filteredSourceCodes}
          handleClose={() => toggleAddFileModal(false)}
          handleSuccess={() => {
            toggleAddFileModal(false);

            setActiveSourceCodeIndex(filteredSourceCodes.length);
          }}
          isOpen={isAddFileModalToggled}
          programmingLanguage={answer.programming_language}
        />
      )}

      <Card className={cn(styles.Editor, className)}>
        <div className={styles.Editor_tabs}>
          <Tabs
            activeTab={tabData[activeSourceCodeIndex]?.value}
            tabClassName={styles.Editor_tabs_tab}
            tabs={tabData}
            type={tabTypes.HORIZONTAL.SM}
          />
          <div className={styles.Editor_tabs_actions}>
            <IconButton
              className={styles.Editor_tabs_button}
              disabled={activeSourceCodeIndex === 0}
              icon="keyboard_arrow_left"
              onClick={() =>
                setActiveSourceCodeIndex(activeSourceCodeIndex - 1)
              }
            />
            <IconButton
              className={styles.Editor_tabs_button}
              disabled={
                activeSourceCodeIndex === filteredSourceCodes.length - 1
              }
              icon="keyboard_arrow_right"
              onClick={() =>
                setActiveSourceCodeIndex(activeSourceCodeIndex + 1)
              }
            />
            <IconButton
              className={styles.Editor_tabs_button}
              disabled={filteredSourceCodes.length === MAX_FILES}
              icon="add"
              onClick={async () => {
                toggleAddFileModal(true);
                await MixpanelTrackService.create({
                  body: {
                    event_name: 'Add File',
                    event_properties: {
                      'Task ID': id,
                      'Answer ID': answer?.id,
                    },
                  },
                });
              }}
            />

            <div ref={languagesRef}>
              <ControlledDropdown
                className={cn(styles.Editor_tabs_dropdown, {
                  [styles.Editor_tabs_dropdown___active_onboarding]:
                    languagesActiveOnboarding,
                })}
                data-test="languagesDropdown"
                name="language"
                options={filteredProgrammingLanguagesOptions}
                type={dropdownTypes.PLAYGROUND}
                value={{
                  value: currentSourceCode?.programming_language?.id,
                  label: currentSourceCode?.programming_language?.name,
                }}
                onChange={async (newLanguage) => {
                  onLanguageChange(newLanguage.value);
                  await MixpanelTrackService.create({
                    body: {
                      event_name: 'Changed Language',
                      event_properties: {
                        'Task ID': id,
                        'Answer ID': answer?.id,
                      },
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
        <CodeEditor
          key={`${answer.id}-${answer.programming_language.id}-${currentSourceCode?.id}`}
          languageExtension={answer.programming_language.extension}
          sourceCode={currentSourceCode?.code}
          onCodeChange={(newSourceCode) => {
            onSourceCodeChange(currentSourceCode?.id, newSourceCode);
          }}
        />
      </Card>
    </>
  );
};

Editor.defaultProps = {
  className: null,
  isInteractive: false,
};

Editor.propTypes = {
  task: PropTypes.object.isRequired,
  answer: PropTypes.object.isRequired,
  onSourceCodeChange: PropTypes.func.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
  createSourceCode: PropTypes.func.isRequired,
  deleteSourceCode: PropTypes.func.isRequired,
  className: PropTypes.string,

  // refs
  languagesRef: PropTypes.object.isRequired,

  // onboarding active status
  languagesActiveOnboarding: PropTypes.bool,

  isInteractive: PropTypes.bool,
};

export default Editor;
