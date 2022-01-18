import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide4 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        He then took the robot from the sides and put it in front of you.
        <br />
        <br />
        "Here's Cody. He's a new bot that I was planning to work on to make him
        act and speak like a normal kid for an expirement on helping kids in
        education.
        <br />
        <br />
        How about you work on programming him as your training? Robots don't
        count on social distancing measures, right?"
      </Text>
    }
    imageSrc={Image}
    nextAction={nextAction}
    nextText="Next"
    title="Prologue"
  />
);

Slide4.propTypes = {
  // the action for the next button
  nextAction: PropTypes.func.isRequired,
};

export default Slide4;
