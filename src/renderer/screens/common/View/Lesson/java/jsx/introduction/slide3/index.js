import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide3 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        Java is an object-oriented programming language similar to C++. And when
        we say that a language is object-oriented, it tries to mimic real-world
        objects. This means it tries to model real-world objects that have both
        state and behavior. Easy there, young padawan. You will slay
        state-and-behavior in one of your early labours! <br />
        <br /> Java achieves this by implementing Abstraction, Encapsulation,
        Inheritance, and Polymorphism. Your four labours! See, not Herculean. He
        had 12!
      </Text>
    }
    imageSrc={Image}
    nextAction={nextAction}
    nextText="Next"
    title="Prologue"
  />
);

Slide3.propTypes = {
  // the action for the next button
  nextAction: PropTypes.func.isRequired,
};

export default Slide3;
