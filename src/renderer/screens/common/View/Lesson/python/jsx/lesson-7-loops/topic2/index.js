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

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="Until It Doesn’t Fit"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Your Cody already knows how to repeat things until a sequence is
        finished, but how about repeating things until a condition is false?
        Eager to learn about the second form of loop, you turned to the second
        chapter of the current lesson which states:
        <br />
        <br /> "You now know that for loops are used when you want to loop
        through a sequence of strings or numbers, but when you want to repeat
        something up until it falsifies the condition, we need some other loop
        to do just the trick. This calls for the help of Python’s second loop
        structure – <strong>while loops</strong>."
      </Text>
    }
  >
    <Section title="The While Syntax">
      <Text>
        A <strong>while loop</strong> is used to execute lines of code inside it
        repeatedly until the condition becomes false. This is commonly used when
        you ask for an input inside the loop until the given input satisfies the
        condition given to terminate the loop. By convention, it follows the
        following syntax:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`while condition:\n\t# lines of code`}
      </Code>
      <Text>
        Basically, a while loop’s structure looks and functions exactly like an
        if statement, but is done repeatedly until it falsifies the condition.
        It also needs to have at least one line of code for it to work as well,
        just like if statements! <br />
        <br />
        For example, when you want to ask the user to type in numbers repeatedly
        and print it until it encounters a zero, you can do it using while loop:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`ans = 1\nwhile ans != 0:\n\tans = int(input())\n\tprint(ans)`}
      </Code>
      <Text>
        However, it is important to note that when you use a variable in a
        condition of a while loop, you have to initialize it first before you
        can use it, or else you will encounter a name error, since the variable
        used in the condition does not exist yet unless declared.
        <br />
        <br /> To show you how it goes wrong when you forget these things, let
        us try this code below:
      </Text>
      <Compiler
        hasInput
        initialSourceCodes={[
          {
            code: `while ans != 0:\n\tans = int(input())\n\tprint(ans)`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
      />
      <br />
      <Text>
        Also remember that the value you will assign to the variable upon
        declaration must not falsify the condition given in the while loop for
        it to work.
        <br />
        <br />
        Here is a scenario where your while loop will not be executed since you
        have declared the variable with a value that falsifies the condition
        given in the loop:
      </Text>
      <Code
        language={programmingLanguages.PYTHON}
      >{`ans = 0\nwhile ans != 0:\n\tans = int(input())\n\tprint(ans)\n\n‘’’\nnothing will print here since we’ve declared ans as 0, which falsifies the condition of the while loop that runs only when ans is not 0.\n‘’’`}</Code>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialCustomInput={`3\n2\n5\n0`}
            initialSourceCodes={[
              {
                code: `ans = 1\nwhile ans != 0:\n\tans = int(input())\n\tprint(ans)\nelse:\n\tprint("The loop ends here.")`,
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
              Since it acts like a looping if statement, you can also add in an
              else statement to execute some lines of code when the condition of
              the while loop is false, just like in for loops as well!
              <br />
              <br /> Just add in some else statement after the usual while
              syntax like this:
            </Text>
            <Code language={programmingLanguages.PYTHON}>
              {`while condition:\n\t# lines of code\n\t# lines of code\nelse:\n\t# lines of code\n\t# lines of code`}
            </Code>
            <br />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              Try it out!
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <Text>
        While loops have testing conditions then loop before termination as its
        main purpose, it can actually be used like for loops too! The key to
        doing this is by using an increment variable in the condition and
        increasing the value of it inside the loop, like this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`i = 0\nwhile i < 10:\n\tprint(i)\n\t# now we must increase the value of i to prevent infinite loops\n\ti+=1`}
      </Code>
      <Text>
        Now, notice that we have an unfamiliar code "i+=1" there. Those
        combinations of arithmetic operators and an equal sign are what we call
        as shorthand assignment operators. Basically, they work like a shorter
        version of a combination of an assignment operator and an arithmetic
        operator, where the value is directly overwritten after some performing
        the given arithmetic operation, but in a shorter code. <br />
        <br />
        There are lots of increment operations, and here are the following:
      </Text>
      <InfoList>
        <InfoCard
          info="var = var + value"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['var+=value']}
          title="+="
        />
        <InfoCard
          info="var = var - value"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['var-=value']}
          title="-="
        />
        <InfoCard
          info="var = var * value"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['var*=value']}
          title="*="
        />
        <InfoCard
          info="var = var / value"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['var/=value']}
          title="/="
        />
        <InfoCard
          info="var = var // value"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['var//=value']}
          title="//="
        />
        <InfoCard
          info="var = var % value"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['var%=value']}
          title="%="
        />
        <InfoCard
          info="var = var ** value"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          syntax={['var**=value']}
          title="**="
        />
      </InfoList>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Head Count">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            It’s an emergency! Well, sort of, since it’s an earthquake drill
            afterall. Nonetheless, when under a drill or a real scenario,
            students need to do a head count to ensure that the entire class is
            completely gathered in the area. <br />
            <br />
            As the assigned class leader, Cody has to ask each one to tell their
            names and since it’s a proper noun, the name’s first letter has to
            be in capital letters, or else, it must report that someone is
            missing in class!
            <br />
            <br />
            To do so, we can use the while loop to ask for their names until
            someone types in a non-capitalized name (e.g. emma instead of Emma).
            <br />
            <br /> I’ve prepared the code for you. Run it and see the magic
            happen!
          </Text>
          <Compiler
            hasInput
            initialSourceCodes={[
              {
                code: `name = "A"\nwhile name[0].isupper() != 0:\n\tname = input()\nelse:\n\tprint("Wait, someone’s missing!")`,
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
