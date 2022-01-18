import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, InteractiveCompiler } from 'components/elements';
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
        Cody is now able to speak and listen to humans, which means that he is
        now quite geared up to blend in to human society! But Cody is not
        fully-equipped though, since there are still a lot of things that it
        needs to learn, like making its own decisions based on certain
        circumstances. But how would it be possible for a robot to decide on its
        own? Looking for answers, you opened the instruction manual again and
        began reading the sixth chapter which wrote: <br />
        <br />
        "Robots have the capacity to follow what the programmer has told it to
        do, but never the ability to decide solely without the programmer's
        guidance. However, there is one other way to make decision-making
        possible for robots to do, and that is by preparing a set of conditions
        on its program, given the situation that it is faced with. To be able to
        do that, we have to begin with exploring C's methods in making{' '}
        <strong>conditional statements</strong>."
      </Text>
    }
  >
    <Section title="Conditional Operators">
      <Text>
        Before we head on to the different types of conditional statements
        available in C, we have to learn on some operators to be used first.
        <br />
        <br />
        There are actually different kinds of operators in C. To recall, we have
        already encountered the assignment operator (=) and the arithmetic
        operators (+, -, *, /, %), as well as the address operator (&).
        <br />
        <br />
        However, there are two other important operators which will be widely
        used in making conditions in your program, and those are called
        conditional operators and logical operators.
        <br />
        <br />
        <strong>Conditional operators</strong> are used to evaluate certain
        conditions if they are true or false. In C, the supported conditional
        operators are the following:
      </Text>
      <InfoList>
        <InfoCard
          info="Returns TRUE if value1 and value2 are equal"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          syntax={['value1 == value2']}
          title="=="
        />
        <InfoCard
          info="Returns TRUE if value1 is greater than value2"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          syntax={['value1 > value2']}
          title=">"
        />
        <InfoCard
          info="Returns TRUE if value1 is greater than or equal to value2"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          syntax={['value1 >= value2']}
          title=">="
        />
        <InfoCard
          info="Returns TRUE if value1 is less than value2"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          syntax={['value1 < value2']}
          title="<"
        />
        <InfoCard
          info="Returns TRUE if value1 is less than or equal to value2"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          syntax={['value1 <= value2']}
          title="<="
        />
        <InfoCard
          info="Returns TRUE if value1 and value2 are not equal"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          syntax={['value1 != value2']}
          title="!="
        />
      </InfoList>
      <Text>
        <br />
        <br />
        On the other hand, <strong>logical operators</strong> are useful when we
        need to evaluate two or more conditions before a code is proven to be
        true or not. Here are the following:
      </Text>
      <InfoList>
        <InfoCard
          info="Returns TRUE if the condition is false"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          syntax={['!condition']}
          title="!"
        />
        <InfoCard
          info="Returns TRUE only if both conditions are true. Meaning, if the first condition is false, then the second condition is not checked anymore."
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          syntax={['condition1 && condition2']}
          title="&&"
        />
        <InfoCard
          info="Returns TRUE if at least one of the conditions is true. Meaning, if the first condition is true already, then the second condition is not checked anymore."
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          syntax={['condition1 || condition2']}
          title="||"
        />
      </InfoList>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    int a = 1, b = 0;\n\n    printf("a && b = %d\\n", a && b);\n    printf("a || b = %d\\n", a || b);\n    printf("!a = %d\\n", !a);\n    printf("!b = %d", !b);\n\n    return 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
                programming_language: {
                  id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
                },
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          />
        }
        mainTextJsx={
          <>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              Every condition used in C works by the concept of Boolean values,
              which can only result as either 1 (True) or 0 (False). In some
              cases, any non-zero value is also regarded as True.
              <br />
              <br /> To test if it really is the case, let us use some
              conditional operators and print its result! <br />
              <br />
              For example, this one below will print <code>1</code> because 10
              is indeed greater than 5.
            </Text>
            <Code
              language={programmingLanguages.C}
            >{`printf("%d", 10 > 5);`}</Code>
            <br />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              I've made some more samples for you to test out below. Run the
              code and see their corresponding outputs.
            </Text>
          </>
        }
      />
    </Section>

    <Section title="The If() Syntax">
      <Text>
        When you want to decide on two options and your motive is just to act on
        either of the two, then the if() statement is right for the situation.{' '}
        <strong>If() statements</strong> are conditional statements that involve
        only one condition to be met in order for the code inside it to be
        performed.
        <br />
        <br />
        This type of conditional statement follows the following syntax:
      </Text>
      <Code language={programmingLanguages.C}>
        {`if(condition) {\n    // line of code to be executed if the condition is true\n}`}
      </Code>
      <Text>
        Note that the line/s of code inside the curly braces of the if()
        statement will only be run if the condition put inside the parentheses
        is 1 (true); else, it will just skip those lines of code. Moreover, we
        must also remember to put our conditions in parentheses or else, we will
        encounter an error in our code! <br />
        <br />
        For now, let us try out coding using this conditional statement. Read
        and understand the code below. Run the code and try putting a value
        lesser than 18 first. Then, run the code again and try putting a value
        that is greater than or equal to 18. Notice that the second time you ran
        the code, there was no more output. That is because the code inside the
        if statement wasn't executed because the condition was false.
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int age;\n\n    printf("Enter an age: ");\n    scanf("%d", &age);\n\n    if(age < 18) {\n        printf("Sorry, no beer for you yet, bud.");\n    }\n\n    return 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            programming_language: {
              id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
            },
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        But what if we wanted to say something if the if() statement's condition
        turns false? Watch out for another conditional statement in the next
        topic, and keep moving forward!
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    int a = 0, b = 2;\n\n    if(a > b)\n        printf("YES\\n"); // the only statement that will be affected by the condition if no curly braces are put\n        printf("GREATER"); // no matter if the condition is true or false, this will always be executed\n\n    return 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
                programming_language: {
                  id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
                },
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          />
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            You can actually remove the curly braces of the if() statement and
            it will work the same way! But there's a catch to it though, since
            the condition would only apply to the first line after the if()
            statement. If there are multiple lines of code that should be run
            only when the condition is true, then it is required to put those
            curly braces when you code, or else, the only statement that will be
            affected by the condition is the first line after it. So it's good
            programming practice to always put curly braces no matter how many
            lines in order to avoid logical errors!
            <br />
            <br />
            Let's consider this as an example to show you what I mean:
          </Text>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Only When It's Even">
          <Text>
            You set Cody's favorite number to be an even number. Then, in its
            class in math, they were tasked to find a classmate with the same
            type of favorite number and pair up with him/her for an activity.
            When it finds that one, it has to shout in uppercase letters, the
            words "I found you!". It's now time to test your knowledge on the
            past lessons we've covered in here.
            <br />
            <br />
            For this task, we have to take the other person's favorite number
            and then evaluate if it is even. Only then will it be saying the
            phrase. This calls in for the combination of if() statements and the
            arithmetic and conditional operations!
            <br />
            <br />
            I've prepared the code for you. Run it and see the magic happen!
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    int faveNum;\n    printf("Enter the other person's favorite number: ");\n    scanf("%d", &faveNum);\n\n    if(faveNum % 2 == 0) {\n        // if a number divided by 2 has no remainder, it is even\n        printf("I found you!");\n    }\n\n    return 0;\n}`,
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

export default Topic1;
