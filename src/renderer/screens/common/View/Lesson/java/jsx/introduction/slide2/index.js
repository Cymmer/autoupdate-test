import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide2 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        And do not dare forget, in this journey, you are the hero! And your
        quest to conquer Java. Remember, sometimes the environment that you will
        be thrust into is familiar, especially if you have had experience with
        C/C++. But most of the time you will find yourself in unfamiliar
        territories. And remember as well, this is not any ordinary adventure.
        There are no perils here that will put your life, or your computer’s, at
        risk. There are no villains here as well. Only quests that will
        ultimately transform you into a JEDI1 Master! <br />
        <br />
        On to your labours! But trust us, this is in no way anything Herculean!
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
