import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import isEmpty from 'lodash/isEmpty';
import {
  isValidFileName,
  getAvailableExtensions,
  getLanguageMainFileName,
  hasMainFile,
} from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import {
  Modal,
  ModalTitle,
  Text,
  ControlledInput,
  ControlledDropdown,
  Checkbox,
} from '../../elements';
import {
  modalTitleTypes,
  modalSizes,
  buttonTypes,
  textTypes,
  inputTypes,
  dropdownTypes,
} from '../../elements/constants';

const validate = (values, existingSourceCodes) => {
  const errors = {};

  if (!values.file_name) {
    errors.file_name = 'This field is required.';
  } else if (values.file_name > 30) {
    errors.file_name = 'The maximum length of this field is 30 characters.';
  } else if (
    existingSourceCodes.some(
      (sourceCode) =>
        sourceCode.file_name === values.file_name &&
        sourceCode.file_extension === values.file_extension
    )
  ) {
    errors.file_name = 'A file with this name already exists.';
  }

  return errors;
};

const AddFileModal = ({
  isOpen,
  handleClose,
  handleSuccess,
  createSourceCode,
  programmingLanguage,
  existingSourceCodes,
}) => {
  const formRef = useRef(null);

  const [areFieldsDisabled, toggleAreFieldsDisabled] = useState(false);

  const [isCreating, toggleCreating] = useState(false);

  const availableExtensions = getAvailableExtensions(
    programmingLanguage.extension
  );

  return (
    <Modal
      actions={[
        {
          text: 'Create',
          type: buttonTypes.PRIMARY.BLUE,
          disabled: isCreating,
          onClick: () => {
            formRef.current.handleSubmit();
          },
        },
      ]}
      className={styles.AddFileModal}
      handleClose={handleClose}
      isOpen={isOpen}
      parentSelector="#answerTaskModalPortal"
      size={modalSizes.SM}
    >
      <ModalTitle
        className={styles.AddFileModal_title}
        icon="note_add"
        title="Add File"
        type={modalTitleTypes.SMALL}
      />
      <div className={styles.AddFileModal_content}>
        <Formik
          initialValues={{
            file_name: '',
            file_extension: availableExtensions[0],
            is_main_file: false,
          }}
          innerRef={formRef}
          onSubmit={async (values, { setErrors }) => {
            const errors = validate(values, existingSourceCodes);
            if (!isEmpty(errors)) {
              setErrors(errors);
              return;
            }
            toggleCreating(true);

            await createSourceCode(values.file_name, values.file_extension);

            toggleCreating(false);

            handleSuccess();
          }}
        >
          {({ errors, values, handleSubmit, setFieldValue }) => (
            <>
              {!hasMainFile(existingSourceCodes, programmingLanguage) && (
                <Checkbox
                  checked={values.is_main_file}
                  className={styles.AddFileModal_checkbox}
                  label="Is Main File"
                  name="is_main_file"
                  onChange={() => {
                    if (!values.is_main_file) {
                      // if the checkbox's new value is checked,
                      // we set the name of the main file and the
                      // file type in their corresponding fields
                      toggleAreFieldsDisabled(true);

                      setFieldValue(
                        'file_name',
                        getLanguageMainFileName(programmingLanguage.id)
                      );
                      setFieldValue(
                        'file_extension',
                        programmingLanguage.extension
                      );
                    } else {
                      // otherwise, we enable the fields and we clear the
                      // file name input
                      toggleAreFieldsDisabled(false);

                      setFieldValue('file_name', '');
                    }
                    setFieldValue('is_main_file', !values.is_main_file);
                  }}
                />
              )}
              <form
                className={styles.AddFileModal_form}
                onSubmit={handleSubmit}
              >
                <ControlledInput
                  className={styles.AddFileModalModal_input}
                  disabled={areFieldsDisabled}
                  error={errors.file_name}
                  name="file_name"
                  placeholder="Filename*"
                  type={inputTypes.SLIM}
                  value={values.file_name}
                  onChange={(e) => {
                    if (
                      e.target.value === '' ||
                      isValidFileName(e.target.value)
                    ) {
                      setFieldValue('file_name', e.target.value);
                    }
                  }}
                />
                <ControlledDropdown
                  className={styles.AddFileModalModal_dropdown}
                  disabled={areFieldsDisabled}
                  name="file_extension"
                  options={availableExtensions.map((extension) => ({
                    value: extension,
                    label: `.${extension}`,
                  }))}
                  placeholder="Extension"
                  type={dropdownTypes.SLIM}
                  value={{
                    value: values.file_extension,
                    label: `.${values.file_extension}`,
                  }}
                  onChange={(option) =>
                    setFieldValue('file_extension', option.value)
                  }
                />
              </form>
            </>
          )}
        </Formik>
        <Text
          className={styles.AddFileModal_info}
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
          type={textTypes.BODY.SM}
        >
          The available extensions will depend on the currently selected
          language
        </Text>
      </div>
    </Modal>
  );
};

AddFileModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,

  // a callback function that after the SourceCode has been created
  handleSuccess: PropTypes.func.isRequired,

  // the current programming language set
  programmingLanguage: PropTypes.object.isRequired,

  existingSourceCodes: PropTypes.arrayOf(PropTypes.object).isRequired,

  // function that'll create the SourceCode object
  createSourceCode: PropTypes.func.isRequired,
};

export default AddFileModal;
