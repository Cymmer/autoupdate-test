import React from 'react';

import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import { FunFactCard, SampleProblemList, SampleProblemCard } from 'components';
import { getFileName } from 'codechum-app-utils';
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
        Upon reading an overview of the C++ structure, your excitement to learn
        has increased more than ever. With such excitement, you couldn’t wait
        another day and immediately flipped the page to the next chapter of the
        book. From there, it says: <br />
        <br />
        "It is not flexible movements nor is it a perfect human face that makes
        a creature more human-like; it is its ability to speak and communicate
        with other humans. With it, the robot will now be able to talk with
        humans about its name, or even just about the food he likes to eat every
        morning (sipping a glass of gasoline in the morning, I guess?). Hence,
        we will be starting off with C++’s own method of speaking – the{' '}
        <strong>std::cout</strong> function."
      </Text>
    }
  >
    <Section title="std::cout Syntax">
      <Text>
        The <code>std::cout</code> statement is a built-in output function in
        C++ that allows the computer to print out on the screen a certain text
        or number. When printing strings (or text), it follows the following
        syntax:
      </Text>
      <Code
        language={programmingLanguages.CPP}
      >{`std::cout << "Hello World";`}</Code>
      <Text>
        The text to be outputted is enclosed with a pair of double quotes (")
        and the whole line of code ends with a semicolon (;). <br />
        <br />
        However, we cannot use the <code>std::cout</code> function immediately
        without including the header file that we need to use these standard
        input/output functions. To do that, we have to make use of the built-in
        library! <br />
        <br />
        From the previous lesson, we have known that the header file for input
        and output functions is <code>iostream</code> and to call it, we have to
        use <code>#include</code> and put the header file name inside a pair of
        angle brackets. Hence, at the top of your code before the{' '}
        <code>main()</code> function, we shall include this in the code:
      </Text>
      <Code language={programmingLanguages.CPP}>{`#include<iostream>`}</Code>
      <Text>
        So, when we want to greet the world using a program in C++, we can now
        do this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tstd::cout << "Hello World";\t\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <Text>
        Click the Execute Code above and see the output of our program!
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\t\n\tstd::cout << "Hello World"\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            Every single-lined statement in C++, except for preprocessor
            directives, will always end with a semicolon, so don’t ever forget
            those little punctuations, or else you’ll get stressed out over
            failing to run you code successfully due to a syntax error! Here,
            let me show you what will happen if you forget one. Try running the
            code below:
          </Text>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Hello, Programmer!">
          <Text>
            Let’s try to make Cody emphasize his name when speaking!
            <br />
            <br />
            The code needed to do that is already prepared for you. To see the
            magic happen, run the code by clicking on the Execute Code button
            now!
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\t\n\tstd::cout << "My name is 'Cody'.";\n\n\treturn 0;\n}`,
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
