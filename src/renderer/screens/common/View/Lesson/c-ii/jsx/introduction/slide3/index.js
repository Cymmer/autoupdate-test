import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide4 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        He then took Cody from the side and put on top of the table.
        <br />
        <br />
        "Meet Cody, again! You've had fun times together with him while learning
        the basics, right?
        <br />
        <br />
        How about you work with the bot again to improve his system and your C
        Programming skills, too?""
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
