import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/elements';
import Image from './image.png';
import Slide from '../../../../CoverSlides/Slide';

const Slide6 = ({ nextAction }) => (
  <Slide
    bodyJsx={
      <Text>
        With excitement and a little bit of fear from failing, you accepted the
        challenge.
        <br />
        <br />
        And from here, your programming journey with Cody...
        <br />
        <br />
        <br />
        <br />
        <strong>begins.</strong>
      </Text>
    }
    imageSrc={Image}
    nextAction={nextAction}
    nextText="Let's Go!"
    title="Prologue"
  />
);

Slide6.propTypes = {
  // the action for the next button
  nextAction: PropTypes.func.isRequired,
};

export default Slide6;
