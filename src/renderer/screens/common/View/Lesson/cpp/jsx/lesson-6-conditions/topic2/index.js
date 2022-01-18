import React from 'react';

import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import { SampleProblemList, SampleProblemCard } from 'components';
import { getFileName } from 'codechum-app-utils';
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
        <br /> "Deciding on one thing is easy, especially when you are only
        needed to respond when the condition given is true, but there are times
        when you need to act on something when the condition turns to be false
        as well, because when you are asked by a yes/no question, you can't just
        stare blankly into space when your answer is no, right? Therefore, to
        make Cody act that way like humans do, we also have to teach him how to
        respond on false conditions with the use of C++'s if statement
        counterpart: <strong>the else statement</strong>."
      </Text>
    }
  >
    <Section title="The If Else syntax">
      <Text>
        We already know that when we want to run some lines of code only when
        the condition is true, we use a single <code>if()</code> statement.
        However, when we also have to run some other code if the{' '}
        <code>if()</code> statement's condition is false, we have to add some{' '}
        <code>else</code> statement.
        <br />
        <br /> <code>else</code> statements function just like the{' '}
        <code>if()</code> statement, but it doesn't need its own condition
        because it will only run the codes inside it when the condition of the{' '}
        <code>if()</code> statement is false.
        <br />
        <br /> To elaborate, it follows this syntax where there will always be
        an <code>if()</code> statement before it:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`if(condition) {\n\t// code to be executed if condition is true\n} else {\n\t// code to be executed if condition is false\n}`}
      </Code>
      <Text>
        Thus, since it is dependent to the <code>if()</code> statement's
        condition, the <code>else</code> statement can only function when
        preceded by an <code>if()</code> statement and cannot set a condition of
        its own.
        <br />
        <br />
        So for example, when answering a yes/no question, you are now able to do
        so, like this one, when testing if the number is positive or not:
      </Text>
      <Compiler
        initialCustomInput="-5"
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tint num;\n\n\tstd::cin >> num;\n\n\tif(num > 0) {\n\t\tstd::cout << "Positive";\n\t} else {\n\t\tstd::cout << "Negative";\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        Note that an else statement will only be used when you need to run some
        lines of code when a condition is false. If not needed, then do not
        write it in your code for good programming practice.
        <br />
        <br /> But what if we have three options to consider?
        <br />
        <br /> Like for example, in the above problem, what if the value to be
        inputted is zero? It's neither positive nor negative in nature.
        <br />
        <br /> We shall know what can be done to solve this loophole in your
        code in the next topic ahead, so keep learning!
      </Text>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Odd or Even">
          <Text>
            The last time, Cody was tasked to find a partner with an even number
            as its favorite number. Now, since their math teacher is fond of odd
            and even numbers, he gave them homework on it as well! This time,
            Cody has to write if the number is even or odd based on the given
            number.
            <br />
            <br /> Let's make use of what we've recently learned on the two
            conditional statements!
            <br />
            <br /> I've laid out the code for you already. Try it out and see!
          </Text>
          <Compiler
            initialCustomInput="5"
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tint num;\n\t\n\tstd::cin >> num;\n\t\n\tif(num % 2 == 0) {\n\t\tstd::cout << "Even";\n\t} else {\n\t\tstd::cout << "Odd";\n\t}\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic2;
