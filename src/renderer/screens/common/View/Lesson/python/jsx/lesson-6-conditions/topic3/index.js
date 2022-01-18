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

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="If not That, then What?"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody’s getting better at making decisions, eh? But there still is
        something more than that. Remembering that there is still one other type
        of conditional statement in Python, you began reading the last page of
        the current chapter: <br />
        <br />
        "Your robot’s now able to answer things when faced with a condition that
        can be either true or false, but what needs to be done when it is faced
        with more than one condition and only one has to be met? This calls for
        the help of the last conditional statement that offers the option of
        having another condition if the <i>if</i> statement’s condition is false
        – Python’s <i>elif</i> statement."
      </Text>
    }
  >
    <Section title="The If Elif Syntax">
      <Text>
        <strong>
          <i>Elif</i> statements
        </strong>{' '}
        are conditional statements that are used to put another condition if the{' '}
        <i>if</i> statement’s condition is not met. It quite functions like an{' '}
        <i>if</i> statement as it can also have a condition of its own, but it
        is also like an else statement that is dependent on an if statement.
        Therefore, <i>elif</i> statements cannot exist without a preceding{' '}
        <i>if</i> statement.
        <br />
        <br />
        It follows the following syntax:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`if condition:\n\t# Line of code\nelif condition:\n\t# Line of code\nelse:\n\t# Line of code`}
      </Code>
      <Text>
        However, elif statements can function well without an else statement
        after it, and can even be used multiple times when we need to have
        multiple conditions, like this syntax:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`If condition:\n\t# Line of code\nelif condition:\n\t# Line of code\nelif condition:\n\t# Line of code\nelif condition:\n\t# Line of code\nelif condition:\n\t# Line of code\nelse:\n\t# Line of code`}
      </Code>
      <Text>
        Or even have multiple conditions inside each statement as well! Just
        don’t forget to observe proper indentation for the program to identify
        where it really belongs, like this syntax:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`if condition:\n\t# Line of code\n\t# Line of code\nelif condition:\n\t# Line of code\nelif condition:\n\t# Line of code\n\t# Line of code\n\t# Line of code\n\t# Line of code\nelse:\n\t# Line of code\n\t# Line of code\n\t# Line of code\n`}
      </Code>
      <Text>
        <i>Elif</i> statements are best used when faced with a problem that
        needs to be evaluated over several conditions, such as evaluating if an
        integer is positive, negative, or zero. In this problem, a mere if-else
        statement would not suffice as there is a special case on zero because
        it is neither negative nor positive. Hence, we have to utilize the use
        of <i>elif</i> statements for it, like this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`num = int(input())\nif num > 0:\n\tprint("Positive")\nelif num == 0:\n\tprint("Zero")\nelse:\n\tprint("Negative")`}
      </Code>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="The Largest One">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            Today, we need to find out the largest number among all three
            numbers that are to be given by the user. To do that, we have to use
            a lot of conditions, which calls for the help of elif statements!
            <br />
            <br /> I’ve laid out a simple code for you already. Try it out and
            see!
          </Text>
          <Compiler
            hasInput
            initialSourceCodes={[
              {
                code: `a,b,c= input().split()\na = int(a)\nb = int(b)\nc = int(c)\n\nif a > b and a > c:\n\tprint(a)\nelif b > a and b > c:\n\tprint(b)\nelse:\n\tprint(c)\n`,
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

export default Topic3;
