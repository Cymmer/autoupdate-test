import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide5 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        "Oh! Don't worry about having no knowledge on programming at all. I'll
        be giving you a manual with instructions on what to do and how to
        program Cody using the programming language, C.
        <br />
        <br />
        So, are you up for this training?"
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
