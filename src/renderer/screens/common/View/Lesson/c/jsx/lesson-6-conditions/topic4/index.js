import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, InteractiveCompiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { FunFactCard } from 'components';
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
        statement in C, you began reading the last page of the current chapter:{' '}
        <br />
        <br />
        “Your robot's now able to answer things when faced with different types
        of conditions, right? But what could the best solution be if you are
        going to test a single value and run a code if the value is equivalent
        to the condition? Surely, having lots of if(), else if(), and else
        statements would do the trick, but it's just too lengthy, don't you
        think? That is why C offers one other conditional statement alternative
        that allows you to do so: using the <strong>switch() statement</strong>
        ."
      </Text>
    }
  >
    <Section title="The Switch() Syntax">
      <Text>
        Just like any other conditional statements, the{' '}
        <strong>switch() statement</strong> tests a single value on a number of
        conditions. However, the conditions that a switch statement can only
        deal with are those pertaining to equality of a set of values.
        <br />
        <br />
        To put it simply, it allows us to test one value among many alternative
        values. Each of the alternative values that are to be compared with the
        value put under the condition of the switch() statement which we refer
        to as a <strong>case</strong>.
        <br />
        <br />
        To elaborate, it follows the following syntax:
      </Text>
      <Code language={programmingLanguages.C}>
        {`switch(value) {\n    case alt_value1: \n        // line of code \n        break;\n    case alt_value2: \n        // line of code \n        break;\n    case alt_value3: \n        // line of code \n        break;\n    default: \n        // line of code \n        // default case is optional; can be removed\n}`}
      </Code>
      <Text>
        The switch() statement works by comparing the value to the alternative
        values of each case. If the alternative value equals to the value that
        is tested by the switch case, it will then proceed to executing the code
        after the case's colon.
        <br />
        <br />
        If no alternative value equals to the value, it will then execute the
        default case given at the end of the statements. It is good to know,
        however, that a default case is not required to be put in a switch()
        statement since it will work just fine even without it.
        <br />
        <br />
        It is also important to put a break keyword after each case to ensure
        that when the condition is met for one case, it would not execute on the
        proceeding codes anymore, which prevents errors in code. The break
        keyword functions as a stopper to the switch code, so whenever the
        compiler encounters this inside the switch statement, it will stop the
        processes happening inside the switch statement and exit it, then
        proceed to the remaining lines of code after the switch() statement.
      </Text>
      <Text>
        For example, when we want to know the evaluation of a student based on
        its grade in letters, we can make a solution in a more efficient way
        using the switch statement, like this:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    char grade;\n\n    printf("Enter the grade (A, B, C, D, F): ");\n    scanf("%c", &grade);\n\n    switch(grade) {\n        case 'A':\n            printf("Excellent");\n            break;\n        case 'B':\n            printf("Good");\n            break;\n        case 'C':\n            printf("Satisfactory");\n            break;\n        case 'D':\n            printf("Marginal");\n            break;\n        case 'F':\n            printf("Inadequate");\n            break;\n    }\n\n    return 0;\n}`,
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
        It is also important to remember that a switch statement can only
        evaluate a value that can either be a character or an integer. Other
        than that, it cannot work on other data types.
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    int num = 2;\n\n    switch(num) {\n        case 1: printf("1");\n        case 2: printf("2");\n        case 3: printf("3");\n        case 4: printf("4");\n    }\n\n    return 0;\n}`,
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
            When you forget to put the break keyword after every case in a
            switch() statement, any other statements put in other cases after
            the case constant that makes the condition true will also be
            executed!
            <br />
            <br />
            Here's what will clearly happen when you do forget your break;
          </Text>
        }
      />
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Code language={programmingLanguages.C}>
            {`switch(num) {\n\tcase 1: \n\t\t// line of code\n\t\t// line of code\n\t\tbreak;\n\tcase 2: \n\t\t// line of code\n\t\t// line of code\n\t\t// line of code\n\t\tbreak;\n}`}
          </Code>
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            You can actually put more than one statement inside a case constant
            in a switch() statement! Just try to practice good indention to
            neatly see where each statement belongs to, and don't forget the
            break keyword, too!
          </Text>
        }
      />
    </Section>
  </TopicContainer>
);

export default Topic4;
