import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide3 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        Turning back to his workspace, he then caught a glance at a little white
        robot and said with enthusiasm:
        <br />
        <br />
        "Ah! It seems there is one other way I could train you despite this
        social distancing situation"
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
