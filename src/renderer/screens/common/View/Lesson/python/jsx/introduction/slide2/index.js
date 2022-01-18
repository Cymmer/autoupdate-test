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
        I heard you wanted to become a programmer, huh? I must say, you've come
        to the right guy! But I can't teach you personally now since I'm still
        under quarantine and I also feel sick and cold at the moment.
        <br />
        <br />I might have to be away for a long time and I suggest you keep
        some distance from me to not get infected. I'm sorry, kid."
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
