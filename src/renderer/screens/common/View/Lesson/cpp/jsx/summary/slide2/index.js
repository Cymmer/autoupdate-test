import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide2 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        "Hey Bud! Congrats on making it till the end of your basic C++ training
        and thank you for taking good care of Cody while I was away!
        <br />
        <br />
        Your C++ journey with CodeChum might have ended, but your programming
        journey continues! There's still more to it than meets the eye so go,
        explore, and never stop coding!"
        <br />
        <br />
        &copy; CodeChum 2021. All Rights Reserved.
      </Text>
    }
    imageSrc={Image}
    nextAction={nextAction}
    nextText="Finish"
    title="Epilogue"
  />
);

Slide2.propTypes = {
  // the action for the next button
  nextAction: PropTypes.func.isRequired,
};

export default Slide2;
