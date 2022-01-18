import React from 'react';

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
    title="Making Decisions"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody is now able to speak and listen to humans, and that means that he
        is quite geared up to blend in the human society! But he is not
        fully-equipped though, since there are still a lot of things that he
        needs to learn, like making its own decisions based on certain
        circumstances. But how would that be possible for a robot to decide on
        its own? Looking for answers, you opened the instruction manual again
        and began reading the sixth chapter which wrote: <br />
        <br />
        "Robots have the capacity to follow what the programmer has told it to
        do, but never the ability to decide solely without the programmer’s
        guidance. However, there is one other way to make decision-making
        possible for robots to do, and that is by preparing a set of conditions
        on its program given the situation it is faced with. To be able to do
        that, we have to begin with exploring Python’s methods in making{' '}
        <strong>conditional statements</strong>."
      </Text>
    }
  >
    <Section title="Conditional Operators">
      <Text>
        Before we head on to the different types of conditional statements
        available in Python, we have to learn on some operators to be used
        first. <br />
        <br />
        There are actually different kinds of operators in Python. To recall, we
        have already encountered the assignment operator (=) and the arithmetic
        operators (+,-,*,/,//,%,**). However, there are two other important
        operators which will be widely used in making conditions in your
        program, and those are called comparison operators and logical
        operators. <br />
        <br />
        <strong>Comparison operators</strong> are used to evaluate certain
        conditions if they are true or false. In Python, the supported
        comparison operators are the following:
      </Text>
      <InfoList>
        <InfoCard
          info="Returns True if value1 and value2 are equal"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['value1 == value2']}
          title="=="
        />
        <InfoCard
          info="Returns True if value1 is greater than value2"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['value1 > value2']}
          title=">"
        />
        <InfoCard
          info="Returns True if value1 is greater than or equal to value2"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['value1 >= value2']}
          title=">="
        />
        <InfoCard
          info="Returns True if value1 is less than value2"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['value1 < value2']}
          title="<"
        />
        <InfoCard
          info="Returns True if value1 is less than or equal to value2"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['value1 <= value2']}
          title="<="
        />
        <InfoCard
          info="Returns True if value1 and value2 are not equal"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['value1 != value2']}
          title="!="
        />
      </InfoList>
      <br />
      <br />
      <Text>
        On the other hand, <strong>logical operators</strong> are useful when we
        need to evaluate two or more conditions before a code is proven to be
        true or not. Here are the following:
      </Text>
      <InfoList>
        <InfoCard
          info="Returns TRUE if the condition is false"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['not condition']}
          title="not"
        />
        <InfoCard
          info="Returns TRUE only if both conditions are true"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['condition1 and condition2']}
          title="and"
        />
        <InfoCard
          info="Returns TRUE if at least one of the conditions is true"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['condition1 or condition2']}
          title="or"
        />
      </InfoList>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <>
            <Compiler
              initialSourceCodes={[
                {
                  code: `print(10 > 5)`,
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
            />
            <br />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              You can also assign a Boolean value to a variable as well! Just
              remember to type in <strong>True</strong> or{' '}
              <strong>False</strong> with their first letters capitalized, or
              else it will just be regarded as a string unenclosed with
              quotation marks, and will return an error instead.
              <br />
              <br />
              So, let’s try assigning boolean values and compare them with the
              use of some logical operators too!
            </Text>
            <br />
            <Compiler
              initialSourceCodes={[
                {
                  code: `a = True   #'T' must be capitalized\nb = False  #'F' must be capitalized too\n\nprint(a)\nprint(b)\nprint(a or b)\nprint(a and b)\nprint(not a)\nprint(not b)`,
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
            />
          </>
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            Every condition used in Python works by the concept of Boolean
            values, which can only result as either be True or False.
            <br />
            <br /> To test if it really is the case, let us use some conditional
            operators and print is result!
            <br />
            <br /> I’ve already made some samples for you, so feel free to try
            it out!
          </Text>
        }
      />
    </Section>

    <Section title="The If Syntax">
      <Text>
        When you want to decide on two options and your motive is just to act on
        either of the two, then the <i>if</i> statement is right for the
        situation.
        <strong>
          <i>If</i> statements
        </strong>{' '}
        are conditional statements that involve only one condition to be met in
        order for the code inside it to be performed.
        <br />
        <br /> This type of conditional statement follows the following syntax:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`if condition:\n\t# line of code`}
      </Code>
      <Text>
        Note that the line of code indented inside the <i>if</i> statement will
        only be run if the condition put inside the parentheses is true; else,
        it will just skip those lines of code.
        <br />
        <br />
        For example:
      </Text>
      <Compiler
        initialCustomInput="17"
        initialOutput="Sorry, no beer for you yet, bud."
        initialSourceCodes={[
          {
            code: `age = int(input())\nif age < 18:\n\tprint("Sorry, no beer for you yet, bud.")`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Only When It's Even">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            You set Cody’s favorite number to be an even number. Then, in its
            class in math, they were tasked to find a classmate with the same
            type of favorite number and pair up with him/her for an activity.
            When it finds that one, it has to shout in uppercase letters, the
            words "I FOUND YOU [name]!". It’s now time to test your knowledge on
            the past lessons we’ve covered in here.
            <br />
            <br /> For this task, we have to take the other person’s name and
            favorite number and then evaluate if its favorite number is even.
            Only then will it be shouting something in uppercase. This calls in
            for the combination of an if statement, arithmetic and conditional
            operations, and string functions!
            <br />
            <br /> I’ve prepared the code for you. Run it and see the magic
            happen!
          </Text>
          <Compiler
            hasInput
            initialSourceCodes={[
              {
                code: `name = input()\nfaveNum = int(input())\n\nif (faveNum % 2) == 0:\n\tprint("I FOUND YOU %s!!" % (name.upper()))`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        </SampleProblemCard>
      </SampleProblemList>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <>
            <Compiler
              initialCustomInput="17"
              initialOutput="No beer for you yet, bud."
              initialSourceCodes={[
                {
                  code: `age = int(input())\nif age < 18:\n\tprint("No beer for you yet, bud.")`,
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
            />
            <br />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              Also, if a conditional statement is made without indented lines of
              code inside, it will return a syntax error, so remember to make
              some conditional statements only if you need it to run some code
              at a given condition, okay?
              <br />
              <br /> Because if you forget this concept, it’ll turn out like
              this! (try out leaving the space after the if statement empty and
              see what happens)
            </Text>
            <br />
            <Compiler
              initialCustomInput="17"
              initialSourceCodes={[
                {
                  code: `age = int(input())\nif age < 18:\n\tprint("No beer for you yet, bud.")`,
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
            />
          </>
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            For Python to identify that the lines of code are dependent on some
            condition, it has to be indented inside the statement with
            conditions. If not indented, Python will then treat it as a normal
            line of code and execute it regardless of the conditions that are
            supposed to enclose it.
            <br />
            <br /> Try to change some lines of code on this one and see for
            yourself!
          </Text>
        }
      />
    </Section>
  </TopicContainer>
);

export default Topic1;
