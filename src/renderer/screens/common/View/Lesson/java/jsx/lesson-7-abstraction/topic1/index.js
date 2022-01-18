import React from 'react';

import { Text, Code } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="What is Abstraction"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Netflix and chill? Or maybe it is just a lazy day and you want to watch
        something on TV? And so you reach out for the remote control (and
        popcorn) and turned the TV on. You do not really care much about how the
        remote control is able to turn the TV on by simply pushing the power
        button. All you needed to know is that that red power button turns the
        TV on. The same goes for increasing the temperature of your air
        conditioning unit because it is getting cold and you are watching TV,
        alone. You need not know how that works but you know that when you press
        on the plus button of the remote control of your AC unit, the
        temperature goes up a notch.
      </Text>
    }
  >
    <Section>
      <Text>
        In your journey, thus far, you have seen this, perhaps unknowingly.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`Television tv = new Television();\nAC ac = new AC();\n\ntv.power();\ntv.volumeUp();\ntv.volumeUp();\n\nac.power();\nac.temperatureUp();\nac.temperatureUp();`}
      </Code>
      <Text>
        When client programs use the classes that you have defined, as shown
        above, they do not necessarily have to know how power was implemented.
        All the client has to know is{' '}
        <strong>
          what methods are available and how they are invoked, and what they do
          (and not worry about the how)
        </strong>
        . This is essentially hiding implementation details from the user, i.e.
        client programs. This is some form of abstraction, a key OOP language
        component.
        <br />
        <br />
        The form of abstraction that you have seen so far is implementation
        level. What we are going to discuss in this section is a higher form of
        abstraction i.e. design level abstraction.
        <br />
        <br />
        In the real world, abstraction is focuses mainly on ideas. What do we
        mean by this? Take appliance, for instance. When you come accross the
        word appliance, there isn't really a specific object that comes to mind.
        As opposed to say, a television, or an air conditioning unit. When you
        come across them, you know exactly what these objects are. And we say
        appliance is the abstraction of a television or an air conditioning unit
        object (the list of appliances is countless, of course). The idea of an
        appliance is that it can be turned on or off. And that when the
        appliance is on, it does something for us - condition a room to a
        desired temperature (AC unit) or show us some moving pictures on surface
        for entertainment (television). The appliance has to be manufactured.
        Maybe, it has a model (as we have seen, most appliances evolve to a
        better version).
        <br />
        <br />
        Wow! We just abstracted the design for an appliance from actual
        appliance objects!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic1;
