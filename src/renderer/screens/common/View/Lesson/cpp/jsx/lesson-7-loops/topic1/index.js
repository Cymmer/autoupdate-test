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
        turned to the second-last chapter of the manual, which read:
        <br />
        <br /> "Don't you wonder how it would be able to repeat something more
        quickly and efficiently? Up until now, the only way you can program your
        robot to do so is by duplicating statements manually. It works just
        fine, but just not when it has to be repeated a hundred times. To easily
        repeat statements requires our program to use a function in C++ that can
        perform repetitions at a given condition - a function we refer to as
        loops. There are a lot of types of looping structures, but for now we
        shall tackle the first one that deals with repeating steps until a
        condition is met, a kind of loop mostly known as a pre-checked loop –
        the <strong>while() loop</strong>."
      </Text>
    }
  >
    <Section title="While Loop Syntax">
      <Text>
        Loops are like car wheels – they continue to turn around unless the
        driver steps on the brake whenever it arrives at the destination, pauses
        for a stoplight, or when a dog unexpectedly walks in front of the car.
        In the same light, loops in C++ work the same way like the car wheels,
        in which certain steps are done repeatedly until a certain condition is
        no longer met, or until a given sequence of numbers is finished.
        <br />
        <br /> There are three types of loops that are available in C++: the
        while() loop, the do-while() loop, and the for() loop. Each loop in C++
        works differently in some ways and are used for different purposes as
        well. To start off, we shall talk about the first type: the while()
        loop.
        <br />
        <br /> A <strong>while() loop</strong> is used to execute lines of code
        inside it repeatedly until the condition it contains becomes false. Also
        known as a pre-checked loop, it functions in a way that it has to test
        if the condition is true before executing the lines of code inside it.
        <br />
        <br /> This is commonly used when the value you put in the condition
        statement is manipulated inside the loop until it reaches a value that
        falsifies the condition.
        <br />
        <br /> By convention, it follows the following syntax:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`while(condition) {\n\t// code here will be repeatedly executed\n\t// until the 'condition' is false\n}`}
      </Code>
      <Text>
        Basically, a <code>while()</code> loop's structure looks and functions
        exactly like an <code>if()</code> statement, only that, it is{' '}
        <strong>executed repeatedly</strong> until the condition becomes false.
        <br />
        <br /> To clearly see how a <code>while()</code> loop works, let us use
        it to print the string, <code>"Hello World"</code> 10 times:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tint times = 0;\n\n\twhile(times < 10) {\n\t\tstd::cout << "Hello World" << std::endl;\n\n\t\ttimes++;\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        In the code above, we created a <code>times</code> variable which will
        keep track of how many times we have already printed the message. By
        default, it is initialized to <code>0</code> because we haven't started
        printing the message yet.
        <br />
        <br /> Then, the condition inside the <code>while</code> is checked: is{' '}
        <code>{`times < 10`}</code> true? Since it is (because <code>0</code> is
        less than <code>10</code>), the execution went inside the while loop and{' '}
        <code>"Hello World"</code> is printed once.
        <br />
        <br /> Finally, we incremented the <code>times</code> variable by 1
        because if we don't, then the value of <code>times</code> will always be{' '}
        <code>0</code> and the condition will always be true. This will result
        to an <strong>infinite loop</strong> or a <strong>forever loop.</strong>{' '}
        Try removing the <code>times++</code> in the code above and run the code
        to see what happens.
      </Text>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="While True, I Love You">
          <Text>
            Cody is a robot, but who's to say the robot's are not capable of
            love?
            <br />
            <br /> Just as we all love Cody, Cody actually also loves us! But
            since he's still a robot, we need to supply him with an integer so
            that he will be able to love us.
            <br />
            <br /> Take a look at this code below:
          </Text>
          <Compiler
            initialCustomInput="100"
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tint n;\n\t\n\tstd::cin >> n;\n\t\n\twhile(n > 0) {\n\t\tstd::cout << n << ".) I love you!" << std::endl;\n\t\n\t\tn--;\n\t}\n\n\treturn 0;\n}`,
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

export default Topic1;
