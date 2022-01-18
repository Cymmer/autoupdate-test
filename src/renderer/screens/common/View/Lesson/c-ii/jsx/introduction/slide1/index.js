import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide1 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        On your journey to further your knowledge in C, you visited your great
        mentor who taught you the C Programming Basics!
        <br />
        <br /> However, he still looks as sickly as he was before - wearing a
        mask while sweating all over. Just like the last time again, he noticed
        your entrance and greeted as well.
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
