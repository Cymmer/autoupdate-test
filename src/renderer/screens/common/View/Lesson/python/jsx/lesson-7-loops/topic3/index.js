import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { SampleProblemList, SampleProblemCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    title="Stop and Skip"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody has acquired the looping ability! Now it just needs a few more
        touches to master it. Looking for the last ingredient in using loops,
        you found what you were looking for in the last topic of the current
        lesson of the instruction manual and began reading: <br />
        <br />
        "Loops are very handy for doing routines and repetitive actions for your
        bot, right? But oftentimes, when faced with a special condition, like an
        emergency or an exception, humans tend to stop their repeated actions or
        skip something, and that is what we need to teach your bot. In order to
        learn how to stop or skip at certain special conditions, we make use of
        the control statements in Python that can only be used inside loops –{' '}
        <strong>break and continue</strong>."
      </Text>
    }
    umber={3}
  >
    <Section title="How to Break">
      <Text>
        Loops normally stop when a condition becomes false (in while loops) or
        when a sequence of values is terminated. However, when we want the loop
        to suddenly stop even without the normal way of terminating it, we use
        the keyword <strong>break</strong>. This helps when searching through
        values and breaking out from the loop even before it normally
        terminates.
        <br />
        <br /> By convention, we always use the break statement inside
        conditional statements so that when that special condition becomes true,
        it will immediately terminate the loop. <br />
        <br />
        For example, when we want to search a string if a certain letter is
        there, we don’t have to complete searching through the entire string if
        it has already been found, and hence, we use break statements for it,
        like this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`text = "CodeChum is awesome"\nfor c in text:\n\tif(c == "a"):\n\t\tbreak\nprint("a is found")`}
      </Code>
      <Text>
        Using this method instead of looping through the entire string will
        increase efficiency of code and lessen run time of your program, but
        remember to use it only when you need it, okay?
      </Text>
    </Section>

    <Section title="How to Continue">
      <Text>
        A break statement is used to stop a loop when it encounters a value that
        makes the condition false, but when we just want to ignore or skip the
        value when it makes the condition false and then go on with the loop
        until it ends, we use the keyword <strong>continue</strong>. This helps
        when we want to skip or leave out a certain value from becoming part of
        an execution or when we want to skip out on all other parts of code
        below this keyword before looping again.
        <br />
        <br /> For example, when we don’t want to print out multiples of 3 in
        our code, we can use continue to ignore multiples of 3 and then loop
        again, like this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`for i in range(1,21):\n\tif i%3 == 0:\n\t\tcontinue;\n\tprint(i)`}
      </Code>
      <Text>
        Remember that the continue statement only skips an execution of a loop
        based on a special condition but it does not fully terminate the entire
        loop unlike the break statement.
      </Text>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Are U There?">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            Cody is given an activity at school to search for a letter U
            (uppercase or lowercase) in a certain sentence dictated by their
            teacher. But the teacher mentions that the fastest one to find a U
            in a sentence would be given additional merit points for efficiency,
            so I want you to help Cody achieve that.
            <br />
            <br /> If we want to search for something, we use loops to see each
            element of the string, and when we do find one, we stop and
            immediately tell the teacher that there is a U in there, so when we
            want to exit a loop immediately, we use break statements, too.{' '}
            <br />
            <br />
            Here, I’ve given you a sample code. Try it out!
          </Text>
          <Compiler
            hasInput
            initialSourceCodes={[
              {
                code: `text = input()\nfor i in text:\n\tif i.upper() == 'U':\n\t\tprint("YES")\n\t\tbreak`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        </SampleProblemCard>
        <SampleProblemCard number={2} title='Don’t "Even" Want to See You'>
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            Cody’s teacher is in a bad mood today with even numbers since it
            reminds him of his ex-partner’s special dates as a couple. To make
            it worse, he gave out an assignment to isolate all even numbers from
            1 to 20. <br />
            <br />
            Now, we have to teach Cody how to complete this assignment with the
            use of our newly-discovered control statement that allows skipping –
            continue! <br />
            <br />
            Now, try to run the code and see the action happen real-time!
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `for i in range(1,21):\n\tif i%2 == 0:\n\t\tcontinue\n\tprint(i)`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic3;
