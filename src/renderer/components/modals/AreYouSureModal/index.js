import React from 'react';
import PropTypes from 'prop-types';

import GLOBALS from 'codechum-app-globals';
import { Span } from '../../elements';
import { buttonTypes, textTypes } from '../../elements/constants';

import CodyModal from '../CodyModal';

const AreYouSureModal = ({ isOpen, handleClose, task, submitAction }) => (
  <CodyModal
    isReversed
    actions={[
      {
        text: 'Proceed',
        type: buttonTypes.PRIMARY.BLUE,
        onClick: submitAction,
      },
      {
        text: 'Back',
        type: buttonTypes.TERTIARY,
        onClick: handleClose,
      },
    ]}
    body={
      <>
        Continue submitting <Span type={textTypes.DATA.SM}>{task.name}</Span>
      </>
    }
    codyType={GLOBALS.CODY_TYPES.OK}
    handleClose={handleClose}
    isOpen={isOpen}
    parentSelector="#answerTaskModalPortal"
    title="Are You Sure?"
  />
);

AreYouSureModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  submitAction: PropTypes.func.isRequired,
};

export default AreYouSureModal;
