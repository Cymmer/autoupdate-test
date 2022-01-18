import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide2 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        "Hey There!
        <br />
        <br />
        I heard you wanted to learn more about C, huh? Wise choice, young
        programmer! But just like the last time, little one, I'm cold and sick,
        still.
        <br />
        <br />
        But if you still wish to learn despite the difficulty, perhaps you might
        want to learn with little Cody again?"
      </Text>
    }
    imageSrc={Image}
    nextAction={nextAction}
    nextText="Next"
    title="Prologue"
  />
);

Slide2.propTypes = {
  // the action for the next button
  nextAction: PropTypes.func.isRequired,
};

export default Slide2;
