import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide1 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        If you are familiar with C or have had experience with C++, then this
        course on Java will be a breeze for you! But if you haven’t, fear not!
        Learning Java is not rocket science, and we will be with you throughout
        your adventure.
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
