import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, InteractiveCompiler } from 'components/elements';
import { textTypes } from 'components/elements/constants';

import { SampleProblemList, SampleProblemCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic4 = () => (
  <TopicContainer
    image={IntroImage}
    number={4}
    title="Stop and Skip"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody has acquired the looping ability! Now it just needs a few more
        touches to master it. Looking for the last ingredient in using loops,
        you found what you were looking for in the last topic of the current
        lesson of the instruction manual and began reading:
        <br />
        <br />
        "Loops are very handy for doing routines and repetitive actions for your
        bot, right? But oftentimes, when faced with a special condition, like an
        emergency or an exception, humans tend to stop their repeated actions or
        skip something, and that is what we need to teach your bot. In order to
        learn how to stop or skip at certain special conditions, we make use of
        the control statements in C that can only be mostly used inside loops –{' '}
        <strong>break</strong> and <strong>continue</strong>."
      </Text>
    }
  >
    <Section title="How To Break">
      <Text>
        Loops normally stop when a condition becomes false (while and do..while
        loops) or when a sequence of values is terminated (for loops). However,
        when we want the loop to suddenly stop even without the normal way of
        terminating it, we use the keyword <strong>break.</strong> This helps
        when searching through values and breaking out from the loop even before
        it normally terminates (i.e. before the condition becomes false).
        <br />
        <br />
        Remember how the switch() statement utilizes the break keyword to stop
        it from executing further lines of code when it encounters one? It works
        the same with loops, but usually, it has to be inside a conditional
        statement so that when that special condition becomes true, it will
        immediately terminate the loop.
        <br />
        <br />
        For example, when we write a program where we find the first number that
        is divisible by 142 between 1000 and 10000 and then stop executing
        immediately, we can do it inside a for() loop using the break keyword:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    \n    for(int ctr = 1000; ctr <= 10000; ctr++) {\n        if(ctr % 142 == 0) {\n            printf("Found the number - %d", ctr);\n            break;\n        }\n    }\n\n    return 0;\n}`,
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
        Note that we use <code>break</code> here because we're only looking for
        the first number that is divisible by 142. After we've found it, there's
        no point in continuing the loop right?
        <br />
        <br /> Using this method instead of looping through the entire range
        will increase efficiency of code and lessen the amount of time it takes
        the code to process everything, but remember to use it only when you
        need it, okay?
      </Text>
    </Section>

    <Section title="How To Continue">
      <Text>
        A break statement is used to stop a loop when it encounters a value that
        makes the condition false, but when we just want to ignore or skip the
        value when it makes the condition true and then go on with the loop
        until it ends, we use the keyword <i>continue.</i> This helps when we
        want to skip or leave out a certain value from becoming part of an
        execution or when we want to skip out on all other parts of code below
        this keyword before looping again.
        <br />
        <br />
        For example, when we don’t want to print out multiples of 3 in our code,
        we can use continue to ignore multiples of 3 and then loop again, like
        this:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    \n    for(int i = 0; i < 20; i++) {\n        if(i % 3 == 0) {\n            continue;\n        }\n\n        printf("%d ", i);\n    }\n\n    return 0;\n}`,
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
        When the <code>continue</code> line of code is executed, it proceeds
        immediately to the incrementor/decrementor part of the loop, and that's
        why in the program above, if the number is divisibly by 3, it is not
        printed.
        <br />
        <br />
        Just remember that the <code>continue</code> statement only skips an
        execution of a loop based on a special condition but it does not fully
        terminate the entire loop unlike the <code>break</code> statement.
      </Text>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title={`Don't "Even" Want To See You`}>
          <Text>
            Cody's teacher is in a bad mood today with even numbers since it
            reminds him of his ex-partner's special dates as a couple. To make
            it worse, he gave out an assignment to isolate all even numbers from
            1 to 20.
            <br />
            <br />
            Now, we have to teach Cody how to complete this assignment with the
            use of our newly-discovered control statement that allows skipping –{' '}
            <i>continue</i>!
            <br />
            <br />
            Now, try to run the code and see the action happen real-time!
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    for(int i = 1; i <= 20; i++) {\n        if(i % 2 == 0) {\n            continue;\n        }\n\n        printf("%d ", i);\n    }\n\n    return 0;\n}`,
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

export default Topic4;
