import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide1 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        After months of struggling and coding, you have finally completed your
        advanced C programming training!
        <br />
        <br />A little while later, the previouslly ill mentor, now healthy and
        well, has come to visit you and waved hello.
      </Text>
    }
    imageSrc={Image}
    nextAction={nextAction}
    nextText="Next"
    title="Epilogue"
  />
);

Slide1.propTypes = {
  // the action for the next button
  nextAction: PropTypes.func.isRequired,
};

export default Slide1;
