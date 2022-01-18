import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import { FunFactCard, SampleProblemList, SampleProblemCard } from 'components';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="How to Talk"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Upon reaching your home, you cleaned up the place, took out the manual,
        and opened it. On the first chapter it says: <br />
        <br />
        "It is not flexible movements nor is it a perfect human face that makes
        a creature more human-like; it is its ability to speak and communicate
        with other humans. With it, the robot will now be able to talk with
        humans about what its name is, or even just about the food he likes to
        eat every morning. Hence, we will be starting off with Python's method
        of speaking - <strong>the print() function.</strong>"
      </Text>
    }
  >
    <Section title="Syntax On Strings">
      <Text>
        The print() statement is a built-in function in Python that allows the
        computer to output a certain text or number. When printing strings (or
        text), it follows the following syntax:
      </Text>
      <Code language={programmingLanguages.PYTHON}>print("dummy string")</Code>
      <Text>Or we can also use this one:</Text>
      <Code language={programmingLanguages.PYTHON}>print('dummy string')</Code>
      <Text>
        As you can see, when printing strings in Python, you can enclose the
        text with a pair of either single quotes (') or double quotes (").
        Whichever you choose, it will directly print out the text you put inside
        it. Cool, right?
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `print("Cody says he 'loves' CodeChum!")`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            You could also print single quotes inside double quotes, and even in
            the other way around, too! Just simply type in your text as well as
            the single quotes and enclose it all with a double quote (and vice
            versa)! Here, try it out yourself!
          </Text>
        }
      />
    </Section>

    <Section title="Syntax On Numbers">
      <Text>
        However, when it comes to numbers, we do not need quotation marks to
        print it out. Just by simply putting the number inside the parentheses
        of the print() statement, you will be able to output the value you want,
        just like this integer:
      </Text>
      <Code language={programmingLanguages.PYTHON}>print(3.1415926)</Code>
      <Text>And the same goes with numbers having decimal points, too!</Text>
      <Code language={programmingLanguages.PYTHON}>print(10)</Code>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Word Emphasis">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            After learning how to print like a human kid, Cody must also learn
            when to stress or emphasize words in his speech. This is where "
            inside ' (or vice versa) comes in handy. In Python, you can directly
            print out single quotes inside a pair of double quotes, and even the
            other way around.
            <br />
            <br />
            Now let's try letting Cody emphasize his name when speaking! The
            code needed is already prepared for you. To see the magic happens,
            run the code by clicking the execute code button.
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `print("My name is 'Cody'.")`,
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
