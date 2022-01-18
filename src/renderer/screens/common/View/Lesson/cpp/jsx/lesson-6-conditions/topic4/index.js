import React from 'react';

import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import { FunFactCard } from 'components';
import { getFileName } from 'codechum-app-utils';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic4 = () => (
  <TopicContainer
    image={IntroImage}
    number={4}
    title="Finding the One"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody's almost at the peak of mastering making decisions (with the help
        of your code, of course)! But there is still something more than meets
        the eye. Remembering that there is still one other type of conditional
        statement in C++, you began reading the last page of the current
        chapter:
        <br />
        <br /> “Your robot's now able to answer things when faced with different
        types of conditions, right? But what could the best solution be if you
        are going to test a single value and run a code if the value is
        equivalent to the condition? Surely, having lots of <code>
          if()
        </code>, <code>else if()</code>, and <code>else</code> statements would
        do the trick, but it's just too lengthy, don't you think? That is why
        C++ offers one other conditional statement alternative that allows you
        to do so: using the <code>switch()</code> statement."
      </Text>
    }
  >
    <Section title="The Switch() Syntax">
      <Text>
        Just like any other conditional statements, the <code>switch()</code>{' '}
        statement tests a single value on a number of conditions. However, the
        conditions that a switch statement can only deal with are those
        pertaining to equality of a set of values.
        <br />
        <br /> To put it simply, it allows us to test one value among many
        alternative values. Each of the alternative values that are to be
        compared with the value put under the condition of the{' '}
        <code>switch()</code> statement which we refer to as a{' '}
        <strong>case</strong>.
        <br />
        <br /> To elaborate, it follows the following syntax:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`switch(n) {\n\tcase value1:\n\t\t// code here will be executed if n is equal to value1\n\t\tbreak;\n\tcase value2:\n\t\t// code here will be executed if n is equal to value2\n\t\tbreak;\n\tcase value3:\n\t\t// code here will be executed if n is equal to value3\n\t\tbreak;\n\tdefault:\n\t\t// code here will be executed if n is not equal to\n\t\t// value1, value2, and value3\n}`}
      </Code>
      <Text>
        The <code>switch()</code> statement works by comparing the value to the
        alternative values of each case. If the alternative value equals to the
        value that is tested by the switch case, it will then proceed to
        executing the code after the case's colon.
        <br />
        <br /> If no alternative value equals to the value, it will then execute
        the default case given at the end of the statements. It is good to know,
        however, that <strong>a default case is not required</strong> to be put
        in a <code>switch()</code> statement since it will work just fine even
        without it.
        <br />
        <br /> It is also important to put a <code>break</code> keyword after
        each case to ensure that when the condition is met for one case, it
        would not execute on the proceeding cases anymore.
        <br />
        <br /> The <code>break</code> keyword functions as a stopper to the
        switch code, so whenever the compiler encounters this inside the switch
        statement, it will stop the processes happening inside the switch
        statement and exit it, then proceed to the remaining lines of code after
        the <code>switch()</code> statement.
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tint num = 2;\n\n\tswitch(num) {\n\t\tcase 1:\n\t\t\tstd::cout << "1";\n\t\tcase 2:\n\t\t\tstd::cout << "2";\n\t\tcase 3:\n\t\t\tstd::cout << "3";\n\t\tcase 4:\n\t\t\tstd::cout << "4";\n\t}\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            When you don't put the <strong>break</strong> keyword after every
            case in a <strong>switch()</strong> statement, any other statements
            put in other cases after the case constant that makes the condition
            true will also be executed (even though the value checked does not
            match the other cases)!
            <br />
            <br /> Here's what will clearly happen when you do forget your
            break;
          </Text>
        }
      />
    </Section>

    <Section>
      <Text>
        Take a look at this another example. We want to know the evaluation of a
        student based on its grade in letters, we can make a solution in a more
        efficient way using the switch statement, like this:
      </Text>
      <Compiler
        initialCustomInput="B"
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tchar grade;\n\n\tstd::cin >> grade;\n\n\tswitch(grade) {\n\t\tcase 'A':\n\t\t\tstd::cout << "Excellent";\n\t\t\tbreak;\n\t\tcase 'B':\n\t\t\tstd::cout << "Good";\n\t\t\tbreak;\n\t\tcase 'C':\n\t\t\tstd::cout << "Satisfactory";\n\t\t\tbreak;\n\t\tcase 'D':\n\t\t\tstd::cout << "Marginal";\n\t\t\tbreak;\n\t\tcase 'F':\n\t\t\tstd::cout << "Inadequate";\n\t\t\tbreak;\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        It is also important to remember that a switch statement can only
        evaluate a value that can either be a character or an integer. Other
        than that, it cannot work on other data types.
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Code language={programmingLanguages.CPP}>
            {`switch(num) {\n\tcase 1: \n\t\t// line of code\n\t\t// line of code\n\t\tbreak;\n\tcase 2: \n\t\t// line of code\n\t\t// line of code\n\t\t// line of code\n\t\tbreak;\n}`}
          </Code>
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            You can actually put more than one statement inside a case constant
            in a <strong>switch()</strong> statement! Just try to practice good
            indention to neatly see where each statement belongs to, and don't
            forget the break keyword, too! The syntax looks like this:
          </Text>
        }
      />
    </Section>
  </TopicContainer>
);

export default Topic4;
