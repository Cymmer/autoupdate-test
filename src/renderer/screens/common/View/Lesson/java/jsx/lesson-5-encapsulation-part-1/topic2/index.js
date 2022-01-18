import React from 'react';

import { Text, Code } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="Instance Variables"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Before dealing with something as complex as a car, let us begin small.
        And if you have noticed, most the examples you were introduced to during
        Chiron's training, they were all about numbers. Let's focus on integers
        for now.
        <br />
        <br />
        What are the characteristics of an integer?
        <br />
        <br />
        Let's keep this really simple and specify just a few.
        <ul>
          <li>Integers have signs.</li>
          <li>They are either positive, negative or neither (zero).</li>
          <li>
            If integers are positive, then they can either be odd or even
            (parity).
          </li>
          <li>Finally, they may be prime or composite (primality).</li>
        </ul>
        And what can numbers do?
        <ul>
          <li>We can add two numbers</li>
          <li>Subtract one from another</li>
          <li>Perform multiplication on them</li>
          <li>Divide one by another</li>
          <li>And compute the remainder when one is divided by another</li>
        </ul>
        We keep the methods this few and this simple. This should let us
        understand what methods are and how they define the behavior of objects.
      </Text>
    }
  >
    <Section title="Defining a Class">
      <Text>
        Let's define a class called <code>Number</code>. By convention, the
        first letter of Java class names are capitalized. We should have the
        following:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`class Number {\n\n\n}`}
      </Code>
      <Text>
        How do we define the state of an object? The state of an object is
        defined through its <strong>member data or instance variables</strong>.
        These are variables declared inside the class. For our{' '}
        <code>Number</code>, we need to have variables for the actual integer,
        sign, parity, and primality. For the sign, we need 3 value
        representations for this. Let's use -1 for negative, 0 for zero, and 1
        for positive. For parity, we only need 2 values for this, and let's use
        0 for even, and one for odd. And finally, for primality, we need 3 value
        representations here, 1 for prime, 2 for composite, and 0 for neither
        (since negative numbers cannot be prime or composite).
        <br />
        <br />
        Let's update our class Number to include the member data or more
        instance variables - again, they define the state of an object.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`class Number {\n\t// instance variables\n\tint value; // represents the actual integer value\n\tint sign;\n\tint parity;\n\tint primality;\n}`}
      </Code>
    </Section>
  </TopicContainer>
);

export default Topic2;
