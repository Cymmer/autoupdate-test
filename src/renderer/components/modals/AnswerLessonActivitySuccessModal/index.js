import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import GLOBALS from 'codechum-app-globals';
import { buttonTypes } from '../../elements/constants';

import CodyModal from '../CodyModal';

const AnswerLessonActivitySuccessModal = ({
  isOpen,
  handleClose,
  nextLessonObjectLink,
}) => {
  const history = useHistory();

  return (
    <CodyModal
      isReversed
      actions={[
        {
          text: 'Go To Next Topic',
          type: buttonTypes.PRIMARY.GREEN,
          onClick: () => {
            history.push(nextLessonObjectLink);
          },
        },
        {
          text: 'Analyze Code',
          type: buttonTypes.TERTIARY,
          onClick: handleClose,
        },
      ]}
      body="You have successfully
      answered the last problem for
      this activity. Do you want
      to go to the next topic or
      analyze your code some more?"
      codyType={GLOBALS.CODY_TYPES.CORRECT}
      handleClose={handleClose}
      isOpen={isOpen}
      parentSelector="#answerTaskModalPortal"
      title="You've Made It!"
    />
  );
};

AnswerLessonActivitySuccessModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,

  // the link to the next lesson object
  nextLessonObjectLink: PropTypes.func.isRequired,
};

export default AnswerLessonActivitySuccessModal;
