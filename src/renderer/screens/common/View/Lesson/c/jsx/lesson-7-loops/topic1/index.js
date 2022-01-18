import React from 'react';

import GLOBALS from 'codechum-app-globals';
import { Text, Code, InteractiveCompiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="Until It Doesn't Fit"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        At this point, Cody is now able to freely "decide on its own" with your
        application on conditional statements! Now we shall move on to making
        repetitive movements and decisions. In search for the next mission, you
        turned to the second to the last chapter of the manual, which read:{' '}
        <br />
        <br />
        "Don't you wonder how it would be able to repeat something more quickly
        and efficiently? Up until now, the only way you can program your robot
        to do so is by duplicating statements manually. It works just fine, but
        just not when it has to be repeated a hundred or a million times! To
        easily repeat statements requires our program to use a function in C
        that can perform repetitions at a given condition - a function we refer
        to as loops. There are a lot of types of looping structures, but for now
        we shall tackle the first one that deals with repeating steps while a
        condition is still being met, a kind of loop mostly known as a
        pre-checked loop – the <strong>while() loop</strong>."
      </Text>
    }
  >
    <Section title="While Loop Syntax">
      <Text>
        Loops are like car wheels – they continue to turn around unless the
        driver steps on the brake whenever it arrives at the destination, pauses
        for a stoplight, or when a dog unexpectedly walks in front of the car.
        In the same light, loops in C work the same way like the car wheels, in
        which certain steps are done repeatedly until a certain condition is no
        longer met, or until a given sequence of numbers is finished.
        <br />
        <br />
        There are three types of loops that are available in C: the while()
        loop, the do-while() loop, and the for() loop. Each loop in C works
        differently in some ways and are used for different purposes as well. To
        start off, we shall talk about the first type: the while() loop.
        <br />
        <br />A <strong>while() loop</strong> is used to execute lines of code
        inside it repeatedly until the condition it contains becomes false. Also
        known as a pre-checked loop, it functions in a way that it has to test
        if the condition is true first before executing the lines of code inside
        it.
        <br />
        <br />
        This is commonly used when the value you put in the condition statement
        is manipulated inside the loop until it reaches a value that falsifies
        the condition.
        <br />
        <br />
        By convention, it follows the following syntax:
      </Text>
      <Code language={programmingLanguages.C}>
        {`while(condition) {\n\t// line of code to be executed while the condition is still true\n}`}
      </Code>
      <Text>
        Basically, a while() loop's structure looks and functions exactly like
        an if() statement, only that, it is executed repeatedly until it
        falsifies the condition.
        <br />
        <br />
        However, it is important to note that just like an if() statement, when
        you use a variable in the condition of a while() loop, you have to
        declare and initialize it first before you can use it, or else you will
        encounter a name error, since the variable used in the condition does
        not exist yet unless declared.
        <br />
        <br />
        To clearly see how a while() loop works, let us use it to print "I love
        CodeChum" 100 times:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int times = 1;\n\n    while(times <= 100) {\n        printf("%d. Hello World\\n", times);\n\n        times++;\n    }\n\n    return 0;\n}`,
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
        As you can see in the code above, we declared a <code>times</code>{' '}
        variable and initialized its value to 1. Then, it proceeded to check the
        condition, <code>times &lt;= 100</code> and since 1 &lt;= 100, then it
        went inside the body of the while() loop. The printf() statement was
        then executed. Now comes the very important part - the part where we
        increased the value of the <code>times</code> variable by 1. This is
        very important because if we never increase its value, the condition{' '}
        <strong>will always be true</strong> and the loop will never stop
        executing, resulting to something known as the{' '}
        <strong>infinite loop</strong> or <strong>forever loop</strong>.
        Increasing it by 1 everytime we iterate would therefore eventually make
        the condition false, as the value of the <code>times</code> variable is
        continually being increased and will exceed 100.
      </Text>
      <Text>
        Here's another example where we loop through a sequence of even numbers
        from a given range of values from the user:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int lowerLimit, upperLimit;\n\n    printf("Enter the lower limit: ");\n    scanf("%d", &lowerLimit);\n\n    printf("Enter the upper limit: ");\n    scanf("%d", &upperLimit);\n\n    while(lowerLimit <= upperLimit) {\n        if(lowerLimit % 2 == 0) {\n            printf("%d\\n", lowerLimit);\n        }\n\n        lowerLimit++;\n    }\n\n    return 0;\n}`,
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
        Run the code and type in the inputs. The first value that you supply
        (the one for <code>lowerLimit</code>), should be less than or greater
        than the value of <code>upperLimit</code>, because if the value that you
        supplied for <code>lowerLimit</code> is greater than the value that you
        supplied for <code>upperLimit</code>, then the condition would be{' '}
        <strong>immediately false</strong>, and therefore, the code inside the
        while() loop will never be executed. Try it out and see for yourself!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic1;
