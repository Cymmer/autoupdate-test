import React from 'react';

import { Text, Compiler } from 'components/elements';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import { SampleProblemList, SampleProblemCard } from 'components';
import { getFileName } from 'codechum-app-utils';
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
        <br /> "Loops are very handy for doing routines and repetitive actions
        for your bot, right? But oftentimes, when faced with a special
        condition, like an emergency or an exception, humans tend to stop their
        repeated actions or skip something, and that is what we need to teach
        your bot. In order to learn how to stop or skip at certain special
        conditions, we make use of the control statements in C++ that can only
        be mostly used inside loops – <strong>break and continue</strong>."
      </Text>
    }
  >
    <Section title="How To Break">
      <Text>
        Loops normally stop when a condition becomes false. However, when we
        want the loop to immediately stop even if the condition is still true,
        we use the keyword <code>break</code>. This helps when searching through
        values and breaking out from the loop even before it normally
        terminates.
        <br />
        <br /> Remember how the <code>switch()</code> statement utilizes the{' '}
        <code>break</code> keyword to stop it from executing further lines of
        code when it encounters one? It works the same with loops, but for good
        programming practice, it usually has to be inside a conditional
        statement so that when that special condition becomes true, it will
        immediately terminate the loop.
        <br />
        <br /> For example, when we want to stop executing when the counter
        variable's value becomes divisible by 7, we can do it inside a{' '}
        <code>for()</code> loop using the <code>break</code> keyword:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tfor(int ctr = 1; ctr <= 10; ctr++) {\n\t\t// if the value of ctr is already divisible\n\t\t// by 7, we break the loop immediately\n\t\tif(ctr % 7 == 0) {\n\t\t\tbreak;\n\t\t}\n\n\t\tstd::cout << ctr << std::endl;\n\t}\t\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        Using this method instead of looping through the entire string will
        increase efficiency of code and lessen the amount of time it takes the
        code to process everything, but remember to use it only when you need
        it, okay?
      </Text>
    </Section>

    <Section title="How To Continue">
      <Text>
        A <code>break</code> statement is used to immediately stop a loop. But
        what if we just want to ignore or skip a value when a certain condition
        is met and then go on with the loop until it ends (i.e. until the
        condition is actually false)? This is where we use the keyword{' '}
        <code>continue</code>.
        <br />
        <br /> This helps when we want to skip or leave out a certain value from
        becoming part of an execution or when we want to skip out on all other
        parts of code below this keyword before looping again.
        <br />
        <br /> For example, when we don’t want to print out multiples of 3 in
        our code, we can use <code>continue</code> to ignore multiples of 3 and
        then loop again, like this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tfor(int ctr = 1; ctr <= 20; ctr++) {\n\t\t// if the value of ctr is divisible by 3,\n\t\t// we immediately go to the increment part\n\t\t// of the loop\n\t\tif(ctr % 3 == 0) {\n\t\t\tcontinue;\n\t\t}\n\n\t\tstd::cout << ctr << std::endl;\n\t}\t\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        Remember that when the <code>continue</code> statement is encountered,
        it only skips an execution of a loop but it does not fully terminate the
        entire loop unlike the <code>break</code> statement. Instead, it
        proceeds immediately to the <b>increment/decrement</b> part of the loop.
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
            <br /> Now, we have to teach Cody how to complete this assignment
            with the use of our newly-discovered control statement that allows
            skipping – <i>continue</i>!
            <br />
            <br /> Now, try to run the code and see the action happen real-time!
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tfor(int ctr = 1; ctr <= 20; ctr++) {\n\n\t\t// we skip the even values\n\t\tif(ctr % 2 == 0) {\n\t\t\tcontinue;\n\t\t}\n\n\t\tstd::cout << ctr << std::endl;\n\t}\n\n\treturn 0;\n}`,
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

export default Topic4;
