import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, InteractiveCompiler } from 'components/elements';
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
        sixth chapter of the instruction manual, which says: <br />
        <br />
        "Deciding on one thing is easy, especially when you are only needed to
        respond when the condition given is true, but there are times when you
        need to act on something when the condition turns to be false as well,
        because when you are asked by a yes/no question, you can't just stare
        blankly into space when your answer is no, right? Therefore, to make
        Cody act that way like humans do, we also have to teach him how to
        respond on false conditions with the use of C's if statement
        counterpart: the <strong>else statement</strong>."
      </Text>
    }
  >
    <Section title="The If Else syntax">
      <Text>
        We already know that when we want to run some lines of code only when
        the condition is true, we use a single if() statement. However, when we
        also have to run some code even if the if() statement's condition is
        false, we have to add some <strong>else statement</strong>.
        <br />
        <br />
        Else statements function just like the if() statement, but its condition
        is solely dependent on the if() statement's condition; hence, it will
        only run the codes inside it when the condition of the if() statement is
        false.
        <br />
        <br />
        To elaborate, it follows this syntax where there will always be an if()
        statement before it:
      </Text>
      <Code language={programmingLanguages.C}>
        {`if(condition) {\n    // line of code to be executed if the condition is true\n} else {\n    // line of code to be executed if the condition is false\n}`}
      </Code>
      <Text>
        Thus, since it is dependent to the if() statement's condition, the else
        statement can only function when preceded by an if() statement and
        cannot set a condition of its own.
        <br />
        <br />
        So for example, when answering a yes/no question, you are now able to do
        so, like this one, when testing if the number is positive or not:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int num;\n\n    printf("Enter any number: ");\n    scanf("%d", &num);\n\n    if(num > 0) {\n        printf("Yes, %d is positive", num);\n    } else {\n        printf("No, %d is not positive", num);\n    }\n\n    return 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            programming_language: {
              id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
            },
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <Text>
        Note that an else statement will only be used when you need to run some
        lines of code when a condition is false. If not needed, then do not
        write it in your code for good programming practice.
        <br />
        <br />
        But what if the value to be inputted is zero in this case? It's neither
        positive nor negative in nature. We shall know what can be done to solve
        this loophole in your code in the next topic ahead, so keep learning!
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
            <br />
            Let's make use of what we've recently learned on the two conditional
            statements!
            <br />
            <br />
            I've laid out the code for you already. Try it out and see!
          </Text>
          <InteractiveCompiler
            initialCustomInput="5"
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    int num;\n\n    printf("Enter a number: ");\n    scanf("%d", &num);\n\n    if(num % 2 == 0) {\n        printf("%d is Even", num);\n    } else {\n        printf("%d is Odd", num);\n    }\n\n    return 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
                programming_language: {
                  id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
                },
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          />
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic2;
