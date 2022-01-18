import React from 'react';

import { Text, Code } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import { InfoList, InfoCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="What Are Classes and Objects"
    titleJsx={
      <Text>
        By now, you are probably itching to get a hold of what classes are. All
        our examples in Chiron’s Training involved a <code>class</code>, the{' '}
        <code>class Main</code>.
        <br />
        <br />
        Java is an <strong>object-oriented programming language</strong>. This
        means that at the heart of the language are objects. So what are objects
        in Java?
        <br />
        <br />
        Let us take a look at a real-world object, first. Look at a Ferrari. A
        Ferrari has features or characteristics. Its manufacturer, the model,
        its type of engine, even the color, its price when it was bought,
        mileage, gasoline level, etc. All these characteristics describe the
        state of the car. The car, for all its intents and purposes, is used for
        driving around and to bring you from point A to point B. And how does
        the car do this? Well, it has different functions. It can be turned on
        or turned off. It can move forward or backward. When it is moving
        forward, it can stop by stepping on the brakes. It can turn on the
        headlights during night-time. And many other functions that the car is
        able to do. All these functions describe the behavior of the car.
      </Text>
    }
  >
    <Section>
      <Text>
        In other words, objects both have <strong>state</strong> and{' '}
        <strong>behavior</strong>. And the same is true for Java objects. You
        have encountered an object from your well-earned training with Chiron.
        Recall this:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        Scanner input = new Scanner(System.in);
      </Code>
      <Text>
        <code>input</code> is actually an object. Apart from objects having both
        state and behavior, it is essentially an instance of a class.{' '}
        <code>input</code> is an instance of a class, the <code>Scanner</code>{' '}
        class to be specific. You remember this as well:
      </Text>
      <br />
      <InfoList>
        <InfoCard info="Reads an int" title="nextInt()" />
        <InfoCard info="Reads a float" title="nextFloat()" />
        <InfoCard info="Reads a double" title="nextDouble()" />
        <InfoCard info="Reads a short" title="nextShort()" />
        <InfoCard info="Reads a long" title="nextLong()" />
        <InfoCard info="Reads a byte" title="nextByte()" />
        <InfoCard info="Reads a boolean" title="nextBoolean()" />
        <InfoCard info="Reads a string" title="nextLine()" />
        <InfoCard info="Reads a word" title="next()" />
      </InfoList>
      <br />
      <br />
      <Text>
        The function of <code>Scanner</code> is to be able to get input. Its
        ability to get different kinds of inputs like an <code>int</code>, a{' '}
        <code>double</code>, etc. are implemented in the different methods
        listed above. Those methods (functions in C/C++) are what defines the
        behavior of input - what it can do.
        <br />
        <br />
        Because being able to create objects, there must be a way to define and
        structure what objects of this type can do, there must be a way to
        define both the state and behavior of an object.
        <br />
        <br />
        This is done by constructing and implementing the class. Essentially,
        the class is the blueprint of objects. It defines and implements what
        the state and behavior of the object are.
        <br />
        <br />
        In the case of input, the object we have from above, it is the class{' '}
        <code>Scanner</code> that defines its behavior via the methods shown
        above, and its state as well.
        <br />
        <br />
        And you have seen this as well. Recall this:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`class Main {\n\tpublic static void main(String args[]) {\n\t\tSystem.out.println("Hello world and here I come Mount Olympus!");\n\t}\n}`}
      </Code>
      <Text>
        Before an object can be constructed, a class must be defined first.
        Although the class <strong>Main</strong> that we have been utilizing
        doesn't do much just yet, except to hold the <strong>main</strong>{' '}
        function so we can test and run some basic Java programs.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic1;
