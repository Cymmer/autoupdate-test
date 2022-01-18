import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide5 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        "Don't worry! I'll still be providing you a manual that will contain
        guides, topics, and all the other things that you need to level up your
        skills in C programming. FOllow along the manual and don't skip any of
        it, alright?
        <br />
        <br />
        So, are you up for a new challenge?"
      </Text>
    }
    imageSrc={Image}
    nextAction={nextAction}
    nextText="Yes!"
    title="Prologue"
  />
);

Slide5.propTypes = {
  // the action for the next button
  nextAction: PropTypes.func.isRequired,
};

export default Slide5;
