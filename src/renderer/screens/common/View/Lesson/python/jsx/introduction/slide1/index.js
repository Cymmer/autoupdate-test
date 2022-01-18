import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide1 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        On your search to find the greatest mentor that could teach you how to
        program Python, you finally found the guy you were looking for after so
        many years! <br />
        <br /> Then, as you went in to his work area, the guy, in his lab,
        looking ill, and wearing a mask, noticed your entrance and greeted.
      </Text>
    }
    imageSrc={Image}
    nextAction={nextAction}
    nextText="Next"
    title="Prologue"
  />
);

Slide1.propTypes = {
  // the action for the next button
  nextAction: PropTypes.func.isRequired,
};

export default Slide1;
