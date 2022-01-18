import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import GLOBALS from 'codechum-app-globals';
import { buttonTypes } from '../../elements/constants';

import CodyModal from '../CodyModal';

const TestTaskSuccessModal = ({ isOpen, handleClose }) => {
  const history = useHistory();

  return (
    <CodyModal
      isReversed
      actions={[
        {
          id: 'goToHomePageButton',
          text: 'Go To Home Page',
          type: buttonTypes.PRIMARY.GREEN,
          onClick: () => {
            history.push(GLOBALS.ROUTE.TEACHER.MAIN_PAGE);
          },
        },
        {
          id: 'continueTestingButton',
          text: 'Continue Testing',
          type: buttonTypes.TERTIARY,
          onClick: handleClose,
        },
      ]}
      body="You have successfully
      tested the last problem for
      this activity. Do you want
      to go to home page or
      continue testing?"
      codyType={GLOBALS.CODY_TYPES.CORRECT}
      handleClose={handleClose}
      isOpen={isOpen}
      parentSelector="#answerTaskModalPortal"
      title="Test Success!"
    />
  );
};

TestTaskSuccessModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TestTaskSuccessModal;
