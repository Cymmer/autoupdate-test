import React from 'react';
import { Link } from 'react-router-dom';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import {
  FunFactCard,
  SampleProblemList,
  SampleProblemCard,
  InfoList,
  InfoCard,
} from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="Learn to Listen"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        After days of programming your Cody, he has finally mastered human
        speech! (with your code, of course) However, as a human quote say, there
        is something better than speaking, and that is…what the fifth chapter is
        about, which you opened and read aloud:
        <br />
        <br /> "Speaking is one great human ability, but in order to live a
        harmonious life together in the world, it would be strange if every
        human just talk and do nothing else, right? That is why, as social
        beings, there is also another important ability that lets humans
        understand other human beings – listening. And luckily, we have just the
        thing that we need to in Python: the input() function."
      </Text>
    }
  >
    <Section title="The Syntax">
      <Text>
        The input() function works just like listening to another person in
        humans, such that it receives what the other person says. Similarly, in
        Python, this function will allow the user to type in something that is
        asked by the robot. <br />
        <br />
        By convention, it is always assigned to a variable for the value that is
        inputted by the user to be stored and kept, and it looks like this
        syntax below:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        varName = input("prompt text")
      </Code>
      <Text>
        The string of text inside the parentheses of the input() function will
        be outputted in the screen to enable the user to identify what is asked
        by the program, so that he/she will not be confused as to what your
        program is asking, right?
        <br />
        <br /> To show the usage of putting a message prompt, here is an
        example:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        age = input("How old are you? ")
      </Code>
      <Text>
        By doing so, the user would be able to know that the data that you want
        them to type in is its age. This will be an important tool when you let
        your robot converse with humans and ask about something while listening
        afterwards. <br />
        <br />
        However, you can actually leave the parentheses of the input() function
        empty, and it will still work the same way! This type of input syntax is
        what works best in CodeChum’s coding environment since the values to be
        inputted must be typed in the input code area first before running the
        code. <br />
        <br />
        To explain further on CodeChum’s input mechanism, here’s a simple guide
        example on how it works:
      </Text>
      <Compiler
        initialCustomInput="Cody"
        initialOutput="My name is Cody"
        initialSourceCodes={[
          {
            code: `name = input()\nprint("My name is", name)`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
      />
      <br />
      <Text>
        Should you wish to experiment and explore on Codechum’s way of taking
        inputs, feel free to change the inputted values or write your own input
        code in our{' '}
        <Link target="_blank" to="/playground">
          Playground
        </Link>
        !
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialCustomInput={`Cody\n16`}
            initialSourceCodes={[
              {
                code: `botName = input()\nprint("My name is %s" % botName)\n\n# typecast input into int to make it a number\nage = int(input())\nprint("Ah, so 10 years from now, you’d already be %d years old!" % (age + 10))`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        }
        mainTextJsx={
          <>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              The values stored from an input() function is of data type string
              by default. However, if you want to transform the inputted values
              into some other data type, such as an integer to perform math
              calculations and stuff, you can use typecasting, like this:
            </Text>
            <Code language={programmingLanguages.PYTHON}>
              varName = int(input())
            </Code>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              You can also turn your input value into some other data type, too,
              with the correct typecasting syntax. Here are some of them:
            </Text>
            <br />
            <InfoList>
              <InfoCard
                info="Turns a value into a string"
                languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
                title="str(value)"
              />
              <InfoCard
                info="Turns a value into an integer"
                languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
                title="int(value)"
              />
              <InfoCard
                info="Turns a value into a floating point value"
                languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
                title="float(value)"
              />
            </InfoList>
            <br />
            <Text>
              With this, you can now turn an inputted string of numbers into
              real integers! It would also play an important role in performing
              math on different data types, such as concatenating strings and
              numbers, perhaps? <br />
              <br /> For now, let’s try this out first!
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Code Names">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            Have you ever heard of Manito Manita? On Christmas parties, human
            kids like to give presents to their classmates but to give some
            mystery and surprise, they like to randomly select who they give a
            present to!
            <br />
            <br /> To keep the real name as a secret when handing out presents,
            a code name is given to each person, which comprises of their
            favorite color and the day they were born. And for this task, I want
            Cody to spearhead on this human-like celebration!
            <br />
            <br />
            Now, in order for Cody to ask for something, we use the input()
            function! But we are going to take on two things: a color (string),
            and a number (integer). For that, we also need to use typecasting
            methods. Now, let’s try it out!
          </Text>
          <Compiler
            hasInput
            initialSourceCodes={[
              {
                code: `color = input()\nbirth_day = int(input())\n# now we need to add the two to make codenames\n# but we can’t concatenate different data types, right?\n# so let’s typecast it! like this:\ncode_name = color + str(birth_day)\nprint("Your codename will be: %s" % code_name)`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic1;
