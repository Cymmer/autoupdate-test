import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, InteractiveCompiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { FunFactCard, SampleProblemList, SampleProblemCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="How to Talk"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Upon reading an overview of the C structure, your excitement to learn
        has increased more than ever. With such excitement, you couldn’t wait
        another day and immediately flipped the page to the next chapter of the
        book. From there, it says: <br />
        <br />
        "It is not flexible movements nor is it a perfect human face that makes
        a creature more human-like; it is its ability to speak and communicate
        with other humans. With it, the robot will now be able to talk with
        humans about its name, or even just about the food he likes to eat every
        morning (sipping a glass of gasoline in the morning, I guess?). Hence,
        we will be starting off with C’s own method of speaking – the{' '}
        <strong>printf() function</strong>."
      </Text>
    }
  >
    <Section title="printf() Syntax">
      <Text>
        The <strong>printf()</strong> statement is a built-in output function in
        C that allows the computer to print out on the screen a certain text or
        number. When printing strings (or text), it follows the following
        syntax:
      </Text>
      <Code language={programmingLanguages.C}>printf("dummy string");</Code>
      <Text>
        where the text to be outputted is enclosed with a pair of double quotes
        ("), and all enclosed by parentheses and ending with a semicolon (;).{' '}
        <br />
        <br />
        However, we cannot use the printf() function easily without including
        the header file that we need to be able to use this standard output
        function. Let's try doing just that! <br />
        <br />
        From the previous lesson, we have known that the header file for input
        and output functions is <code>{'<stdio.h>'}</code> and to call it, we
        have to use #include and put the header file name inside a pair of angle
        brackets. Hence, at the top of your code before the <code>main()</code>{' '}
        function, we shall include this in the code:
      </Text>
      <Code language={programmingLanguages.C}>{`#include<stdio.h>`}</Code>
      <Text>
        So, when we want to greet the world using a program in C, we can now do
        this:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n    printf("Hello World!");\n\n    return 0;\n}`,
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
        Run the code above and see the output! Try changing the text inside the
        double quotes to something else and see that it still works perfectly
        fine.
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <>
            <InteractiveCompiler
              initialSourceCodes={[
                {
                  code: `#include<stdio.h>\n\nint main() {\n    printf("Hello World!")\n\n    return 0;\n}`,
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
              To fix the program above, just add a semicolon at the end of the{' '}
              <code>printf</code> line of code. Once you've done that, try
              running the code again and see that there are no more errors.
            </Text>
          </>
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            Almost every single-lined statement in C, except for preprocessor
            directives (the one where we include the libraries), usually ends
            with a semicolon, so don’t ever forget those little punctuations, or
            else you’ll get stressed out over failing to run you code
            successfully due to a syntax error! Here, let me show you what will
            happen if you forget one. Try running the code below.
          </Text>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Hello, Programmer!">
          <Text>
            Let’s try to make Cody emphasize his name when speaking! The code
            needed to do that is already prepared for you. To see the magic
            happen, run the code by clicking on the Run Code button now!
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main() {\n    printf("My name is 'Cody'.");\n\n    return 0;\n}`,
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
