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

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="If Not That, Then What?"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody's getting better at making decisions, eh? But there is still more
        than what you have already learned when making decisions, and that is,
        when you encounter multiple options at the same time. Looking for
        answers, you found yourself looking at the third chapter of the book:
        <br />
        <br />
        "Your robot's now able to answer things when faced with a condition that
        can be either true or false, but what needs to be done when it is faced
        with more than one condition and only one has to be met? This calls for
        the help of one other conditional statement that offers the option of
        having another condition if the if() statement's condition is false –
        C's <strong>else if() statement</strong>."
      </Text>
    }
  >
    <Section title="The Else If syntax">
      <Text>
        <strong>Else if() statements</strong> are conditional statements that
        are used to put another condition if the if() statement's condition is
        not met. It quite functions like an if() statement as it can also have a
        condition of its own, but it is also like an else statement that needs
        an if() statement before it. Therefore, else if() statements cannot
        exist without a preceding if() statement.
        <br />
        <br />
        It follows the following syntax:
      </Text>
      <Code language={programmingLanguages.C}>
        {`if(condition1) {\n    // line of code to be executed if condition1 is true\n} else if(condition2) {\n    // line of code to be executed if condition1 is false and condition2 is true\n} else {\n    // line of code to be executed if condition1 and condition2 are false\n}`}
      </Code>
      <Text>
        However, else if() statements can function well without an else
        statement after it, and can even be used multiple times when we need to
        have multiple conditions, like this syntax:
      </Text>
      <Code language={programmingLanguages.C}>
        {`if(condition1) {\n    // line of code\n} else if(condition2) {\n    // line of code\n} else if(condition3) {\n    // line of code\n} else if(condition4) {\n    // line of code\n} else {\n    // line of code\n}`}
      </Code>
      <Text>
        Else if() statements are best used when faced with a problem that needs
        to be evaluated over several conditions, such as evaluating if an
        integer is positive, negative, or zero. In this problem, a mere if()
        else statement would not suffice as there is a special case on zero
        because it is neither negative nor positive. Hence, we have to utilize
        the use of else if() statements for it, like this:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int num;\n\n    printf("Enter a number: ");\n    scanf("%d", &num);\n\n    if(num > 0) {\n        printf("Positive");\n    } else if (num == 0) {\n        printf("Zero");\n    } else {\n        printf("Negative");\n    }\n\n    return 0;\n}`,
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
        Remember that the condition inside an else if() statement will only be
        evaluated if the previous condition from an if() or a preceding else
        if() statement is false. Hence, by understanding this concept, we can
        now avoid repeating conditions that were already eliminated by the
        previous conditions given.
        <br />
        <br />
        For example, in this code:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int num;\n\n    printf("Enter a number: ");\n    scanf("%d", &num);\n\n    if(num > 10) {\n        printf("%d is greater than 10", num);\n    } else if(num > 5) {\n        printf("%d is greater than 5 but lesser than 10", num);\n    } else {\n        printf("%d is lesser than 5", num);\n    }\n\n    return 0;\n}`,
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
        Looking at the conditions in there, if the first condition is evaluated
        as false, that would be the only time that the next condition is
        evaluated. Moreover, when the first condition is false if the number
        inputted is less than 10, we don't have to rewrite a condition that
        tells that the number must be less than 10 since the first condition
        already proves that fact. By understanding that concept, we would now be
        able to make better conditions through these conditional statements.
      </Text>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="The Largest One">
          <Text>
            Today, we need to find out the largest number among all three
            numbers that are to be given by the user. To do that, we have to use
            a lot of conditions, which calls for the help of else if()
            statements! We also need to make use of the logical operators we've
            learned in the previous lessons.
            <br />
            <br />
            I've laid out a simple code for you already. Try it out and see!
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    int a, b, c;\n\n    printf("Enter three numbers: ");\n    scanf("%d %d %d", &a, &b, &c);\n\n    if (a > b && a > c) {\n        printf("%d is the greatest among them all", a);\n    } else if (b > c) {\n        printf("%d is the greatest among them all", b);\n    } else {\n        printf("%d is the greatest among them all", c);\n    }\n\n    return 0;\n}`,
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
            There is also another way to solve this problem by using single if()
            statements only! Just assume that one of them is the largest value
            and then compare them one by one. You might want to try this code
            below:
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    int a, b, c;\n\n    printf("Enter three numbers: ");\n    scanf("%d %d %d", &a, &b, &c);\n\n    int largest = a;\n\n    // checks if b is greater than existing largest\n    if(largest < b) {\n        largest = b;\n    }\n\n    // checks if b is greater than existing largest\n    if(largest < c) {\n        largest = c;\n    }\n\n    printf("Largest = %d", largest);\n\n    return 0;\n}`,
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

export default Topic3;
