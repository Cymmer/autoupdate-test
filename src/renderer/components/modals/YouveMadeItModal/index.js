import React from 'react';
import PropTypes from 'prop-types';

import GLOBALS from 'codechum-app-globals';
import { buttonTypes } from '../../elements/constants';

import CodyModal from '../CodyModal';

const YouveMadeItModal = ({
  isOpen,
  handleClose,
  reviewAction,
  submitAction,
  isPerfect,
}) => (
  <CodyModal
    isReversed
    actions={
      isPerfect
        ? [
            {
              text: 'Review Your Work',
              type: buttonTypes.PRIMARY.GREEN,
              onClick: reviewAction,
            },
            {
              text: 'Finish Now',
              type: buttonTypes.TERTIARY,
              onClick: submitAction,
            },
          ]
        : [
            {
              text: 'See Progress',
              type: buttonTypes.PRIMARY.GREEN,
              onClick: reviewAction,
            },
          ]
    }
    body={
      isPerfect
        ? 'You have submitted the last problem, do you want to review your work or finish now?'
        : 'You have submitted the last problem, see your progress so far!'
    }
    codyType={GLOBALS.CODY_TYPES.CORRECT}
    handleClose={handleClose}
    isOpen={isOpen}
    parentSelector="#answerTaskModalPortal"
    title="You've Made It!"
  />
);

YouveMadeItModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  reviewAction: PropTypes.func.isRequired,
  submitAction: PropTypes.func.isRequired,
  isPerfect: PropTypes.bool.isRequired,
};

export default YouveMadeItModal;
