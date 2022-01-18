import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide4 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        But before performing any of these labours, we will be sending you to
        Chiron for training! And if you have seen Percy Jackson, you would know
        Chiron is? You are right, a Centaur!
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
