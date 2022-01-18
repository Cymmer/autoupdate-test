import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide5 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        Now then, are you ready to start your journey into the realms of Java
        and Object-Oriented Programming?
      </Text>
    }
    imageSrc={Image}
    nextAction={nextAction}
    nextText="Let's Go!"
    title="Prologue"
  />
);

Slide5.propTypes = {
  // the action for the next button
  nextAction: PropTypes.func.isRequired,
};

export default Slide5;
