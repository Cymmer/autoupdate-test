import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { SampleProblemList, SampleProblemCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="A Lot of Things to Listen"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody is now starting to learn how to listen to others! But how would it
        listen to a lot of things at the same time, such as when a teacher
        dictates a given to a mathematics problem? Looking for answers, you
        found yourself looking for the next page of the fifth chapter of the
        instruction manual, and written in it was:
        <br />
        <br /> "Listening to someone about some things one at a time is an easy
        job to do, but what happens when you let your robot take in a lot of
        things at the same time? Fortunately, Python allows us to do so by
        taking in <strong>multiple inputs on a single input() function</strong>.
        To find out how it works, take your time to read this one."
      </Text>
    }
  >
    <Section title="The Syntax">
      <Text>
        Taking multiple inputs from one single line actually follows the same
        principle as taking one input at a time. In this sense, if taking just
        one input requires on variable to store it, then taking multiple inputs
        need… multiple variables! <br />
        <br />
        To clarify, it follows this syntax:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        varname1, varname2, varname3 = input().split()
      </Code>
      <Text>
        Now, as you can see, after the input function, we get to use a familiar
        string function, split(), which enables us to split the one-line input
        based on a splitting indicator. Because of this, the one-line input is
        now divided into different parts, thus distributing it into the multiple
        variables. <br />
        <br />
        By default, when the parentheses is left empty, it will separate the
        value based on white spaces put in the input, but you can actually
        replace it into some other symbol or character as a splitting indicator
        in your input. <br />
        <br />
        For example, in school, the teacher gives out some one-line given to a
        problem, and therefore, you can get the information separately with the
        syntax above, like this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        length, width = input().split()
      </Code>
      <Text>
        Remember that the split() function will only work on strings, that is
        why we cannot typecast the input() function into anything else when
        asking for input.
        <br />
        <br /> However, when you want to change the data type of a variable
        afterwards so you can do some arithmetic operations on it, you can
        always use typecasting methods to do the trick, like this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`length, width = input().split()\nlength = float(length)\nwidth = float(width)\narea = length * width\nprint(area)`}
      </Code>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Quadratic Equation">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            In algebra, one of the basic things that a student has to know is to
            evaluate values, and this time, I want Cody to evaluate the value of
            y in a quadratic equation y = ax^2 + bx + c.
            <br />
            <br /> Now, in order to solve this problem, we have to take three
            inputs from the user – the values of a, b, and c, in one line only,
            and it has to be an integer for it to be solved afterwards.
            <br />
            <br /> I’ve already prepared a simple code for you. You think you
            can do better?
          </Text>
          <Compiler
            hasInput
            initialSourceCodes={[
              {
                code: `a,b,c,x = input().split()\na = int(a)\nb = int(b)\nc = int(c)\nx = int(x)\ny = (a * pow(x,2)) + b * x + c\nprint(y) `,
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

export default Topic2;
