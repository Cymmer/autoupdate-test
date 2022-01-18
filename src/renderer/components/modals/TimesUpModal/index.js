import React from 'react';
import PropTypes from 'prop-types';

import GLOBALS from 'codechum-app-globals';
import { buttonTypes } from '../../elements/constants';

import CodyModal from '../CodyModal';

const TimesUpModal = ({ isOpen, handleClose, viewScoreAction }) => (
  <CodyModal
    isReversed
    actions={[
      {
        text: 'View My Score',
        type: buttonTypes.PRIMARY.RED,
        onClick: viewScoreAction,
      },
    ]}
    body="Sadly, you have run out
    of the allotted time."
    codyType={GLOBALS.CODY_TYPES.ERROR}
    handleClose={handleClose}
    isOpen={isOpen}
    parentSelector="#answerTaskModalPortal"
    title="Time's Up"
  />
);

TimesUpModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  viewScoreAction: PropTypes.func.isRequired,
};

export default TimesUpModal;
