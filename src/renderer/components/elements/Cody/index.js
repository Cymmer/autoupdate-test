import React from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';

// images
import CodyOkay from 'static/images/Cody/okay.svg';
import CodyPerfect from 'static/images/Cody/perfect.svg';
import CodyPerfectTransparent from 'static/images/Cody/perfect-transparent.svg';
import CodyError from 'static/images/Cody/error.svg';
import CodyCorrect from 'static/images/Cody/correct-flipped.svg';
import CodyThinking from 'static/images/Cody/thinking.svg';
import CodyWelcome from 'static/images/Cody/welcome.svg';
import CodyFail from 'static/images/Cody/fail.svg';
import CodyFailFlipped from 'static/images/Cody/fail-flipped.svg';

const determineImage = (type) => {
  switch (type) {
    case GLOBALS.CODY_TYPES.WELCOME:
      return CodyWelcome;
    case GLOBALS.CODY_TYPES.ERROR:
      return CodyError;
    case GLOBALS.CODY_TYPES.OK:
      return CodyOkay;
    case GLOBALS.CODY_TYPES.PERFECT:
      return CodyPerfect;
    case GLOBALS.CODY_TYPES.PERFECT_TRANSPARENT:
      return CodyPerfectTransparent;
    case GLOBALS.CODY_TYPES.CORRECT:
      return CodyCorrect;
    case GLOBALS.CODY_TYPES.THINKING:
      return CodyThinking;
    case GLOBALS.CODY_TYPES.FAIL:
      return CodyFail;
    case GLOBALS.CODY_TYPES.FAIL_FLIPPED:
      return CodyFailFlipped;
    default:
      return CodyError;
  }
};

const Cody = ({ src, type, className }) => (
  <img
    alt="Cody"
    className={className}
    data-test="image"
    src={src || determineImage(type)}
  />
);

Cody.defaultProps = {
  src: null,
  className: null,
  type: null,
};

Cody.propTypes = {
  className: PropTypes.string,

  // an override source
  src: PropTypes.any,

  type: PropTypes.oneOf(Object.values(GLOBALS.CODY_TYPES)),
};

export default Cody;
