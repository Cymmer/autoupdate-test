import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, InteractiveCompiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { FunFactCard, InfoList, InfoCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="C Anatomy"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Upon reaching your home, you cleaned up the place, took out the manual,
        and opened it. Surprisingly, the book came with a preface before the
        actual lesson. From there, it writes: <br />
        <br />
        "Before you learn how to code in C, you must first learn its foundations
        in order to fully understand how it works. For this reason, I, the
        author of this book, would like to introduce to you C's parts and pieces
        that make it function as a whole:{' '}
        <strong>C's basic program structure</strong>."
      </Text>
    }
  >
    <Section title="The Basic C Structure">
      <Text>
        Before we get on to the different functions and statements used to
        program in C, we have to first understand the basic structure of the
        code that we need to make for it to run. <br />
        <br />
        This is what a basic C program looks like:
      </Text>
      <Code language={programmingLanguages.C}>
        {`#include<stdio.h>\n\nint main(void) {\n\n\treturn 0;\n}`}
      </Code>
      <Text>
        Now don't get overwhelmed in there, it's actually simple and easy to
        understand! Let's breakdown the different lines of code:
        <li>
          <code>{'#include<stdio.h>'}</code> - This line of code "includes" (or
          uses) the <code>{'<stdio.h>'}</code> library. A library is a set of
          built-in functions, created by the programmers of the C programming
          language. We use these built-in functions in making our own C programs
          (more on this later).
        </li>
        <br />
        <li>
          <code>int main(void)</code> - For now, just ignore the{' '}
          <code>int</code> and the <code>void</code>. Just focus on the{' '}
          <code>main</code>. The main part of code is the code that is called by
          the compiler to execute the program. Hence, any code that is typed
          inside the main function's curly braces ({`{}`}) is where the program
          execution begins. If your whole program is a room, then the{' '}
          <code>main()</code> function is the door - the entry point.
        </li>
        <br />
        <li>
          <code>return 0;</code> - This is the exit status code of our program.
          On most operating systems, returning 0 is a success status which means
          the program worked fine until the end, without errors. So don't forget
          to put return 0 at the end of your code, okay?
        </li>
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <>
            <InteractiveCompiler
              initialSourceCodes={[
                {
                  code: `int main() {\n    return 0;\n}`,
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
              Press the Execute Code button above and see that there are no
              errors in the output. More specifically, the output will only say
              "Program Terminated" and that's because we didn't have a code
              above that prints something to the screen. All we have is an empty{' '}
              <code>main()</code> code. How do we print something to the screen?
              Stay tuned in the upcoming lessons!
            </Text>
          </>
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            You can actually write the main() function without putting the word
            void inside its parentheses, and it will still work the same, like
            this syntax:
          </Text>
        }
      />
    </Section>

    <Section title="Header Files">
      <Text>
        C has a lot of built-in header files which can be useful when coding,
        but these can only function if we include it using the{' '}
        <code>#include</code> directive. <br />
        <br />
        In programming, a library is a set of functions that we can use to write
        our own programs easily. Think of a library as a toolbox which contains
        a lot of tools inside that we can use to construct our own programs.
        <br />
        <br />
        There are a lot of different libraries in C, each containing their own
        functions. Before we are able to use any function in C, we have to
        identify first which library is needed to use the function. Here are
        some of the most basic ones available:
      </Text>
      <InfoList>
        <InfoCard
          info="Standard Input/Output Functions. For printing to the screen our taking user inputs."
          title="<stdio.h>"
        />
        <InfoCard
          info="Mathematical Functions. For mathematical functions."
          title="<math.h>"
        />
        <InfoCard
          info="String Functions. For string/word functions."
          title="<string.h>"
        />
        <InfoCard
          info="Character Handling Functions. For single character handling functions."
          title="<ctype.h>"
        />
      </InfoList>
      <br />
      <Text>
        It is important to note that header files always end with a .h (from the
        "h" in the word "header file") to indicate that it is indeed a header
        file. Moreover, built-in header files are always enclosed in angle
        brackets ({`<>`}), so keep this in mind whenever you need to use one,
        okay?
        <br />
        <br />
        This lesson only gives you an overview of the common library/header
        files that are used in C, but we will get to know more about each of
        these libraries in the future lessons, like when and how to use them, so
        just continue learning and keep going!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic1;
