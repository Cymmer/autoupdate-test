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
    title="Torn Between the Two"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        You have now "taught" Cody on how to make a decision when faced with one
        true condition! But how can he respond quickly on a situation where the
        condition is not true? To find out how, you flipped the next page of the
        sixth chapter of the instruction manual, which says:
        <br />
        <br />
        "Deciding on one thing is easy, especially when you are only needed to
        respond when the condition given is true, but there are times when you
        need to act on something when the condition turns to be false as well,
        because when you are asked by a yes/no question, you can’t just stare
        blankly into space when your answer is no, right? Therefore, to make
        Cody act that way like humans do, we also have to teach him how to
        respond on false conditions with the use of Python’s <i>if</i> statement
        counterpart: the <strong>else statement</strong>."
      </Text>
    }
  >
    <Section title="The If Else Syntax">
      <Text>
        We already know that when we want to run some lines of code only when
        the condition is true, we use a single <i>if</i> statement. However,
        when we also have to run some code even if the <i>if</i> statement’s
        condition is false, we have to add some <strong>else statement</strong>.
        <br />
        <br /> Else statements function just like the <i>if</i> statement, but
        its condition is solely dependent on the <i>if</i>
        statement’s condition wherein it will only run when the condition of the
        <i>if</i> statement is false. <br />
        <br />
        To elaborate, it follows this syntax where there will always be an{' '}
        <i>if</i> statement before it:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`if condition:\n\t# Line of code\nelse:\n\t# Line of code`}
      </Code>
      <Text>
        Thus, since it is dependent to the if statement’s condition, the else
        statement can only function when preceded by an if statement and will
        not possess a condition enclosed by a parentheses on its own.
        <br />
        <br />
        For example, when answering a yes/no question, you are now able to do
        so, like this one:
      </Text>
      <Compiler
        initialCustomInput="Red"
        initialOutput="No, it’s not red."
        initialSourceCodes={[
          {
            code: `fave_color = input()\nfave_color = fave_color.lower()\n\nif fave_color == "blue":\n\tprint("Yes, it’s", fave_color)\nelse:\n\tprint("No, it’s not", fave_color)`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
      />
      <br />
      <Text>
        Note that an else statement will only be used when you need to run some
        lines of code when a condition is false. If not needed, then do not
        write it in your code or else you’ll be faced with a syntax error.
      </Text>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Odd or Even">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            The last time, Cody was tasked to find a partner with an even number
            as its favorite number. Now, since their math teacher is fond of odd
            and even numbers, he gave them homework on it as well! This time,
            Cody has to write if the number is even or odd based on the given
            number.
            <br />
            <br /> Let’s make use of what we’ve recently learned on the two
            conditional statements! <br />
            <br />
            I’ve laid out the code for you already. Try it out and see!
          </Text>
          <Compiler
            hasInput
            initialSourceCodes={[
              {
                code: `num = int(input())\nif (num % 2) == 0:\n\tprint("even")\nelse:\n\tprint("odd")\n`,
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
