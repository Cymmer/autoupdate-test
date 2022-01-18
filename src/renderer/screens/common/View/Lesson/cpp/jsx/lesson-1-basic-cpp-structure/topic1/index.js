import React from 'react';

import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import { FunFactCard, InfoList, InfoCard } from 'components';
import { getFileName } from 'codechum-app-utils';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="C++ Anatomy"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Upon reaching your home, you cleaned up the place, took out the manual,
        and opened it. Surprisingly, the book came with a preface before the
        actual lesson. From there, it writes: <br />
        <br />
        "Before you learn how to code in C++, you must first learn its
        foundations in order to fully understand how it works. For this reason,
        I, the author of this book, would like to introduce to you C++'s parts
        and pieces that make it function as a whole: <br />
        <br />
        <strong>C++'s basic program structure</strong>.
      </Text>
    }
  >
    <Section title="The Basic C++ Structure">
      <Text>
        Before we get on to the different functions and statements used to
        program in C++, we have to first understand the basic structure of the
        code that we need to make for it to run. <br />
        <br /> This is how a basic C++ program looks like:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`#include<iostream>\n\nint main(void) {\n\t\n\treturn 0;\n}`}
      </Code>
      <Text>
        Let's break the different parts of the code above:
        <br />
        <br /> {'\u2B24'} <code>{`#include<iostream>`}</code> -{' '}
        <code>iostream</code> is a "library" in C++. Think of a library as a
        toolbox. Inside a toolbox, just like in real life, lies many tools that
        you can use. Similarly, <code>iostream</code> is a toolbox developed by
        the programmers of the C++ language which contains "functions" that we
        could use in our own program (more on this later). By saying{' '}
        <code>{`#include<iostream>`}</code> we're basically saying that we're
        going to use the <code>iostream</code> toolbox in the program that we're
        about to make.
        <br />
        <br /> {'\u2B24'} <code>int main(void)</code> - for now, just don't mind
        the <code>int</code> and the <code>void</code> (in the future
        programs/codes that you'll be making in this course, just add them). The{' '}
        <code>main</code> basically is the <b>entrypoint of your program</b>. If
        we were to imagine that our whole program is a room, the{' '}
        <code>main</code> is basically the "door" of our program. So when our
        code is executed by the computer, it'll find the <code>main</code> and
        will start executing all the code inside it (the ones inside the curly
        braces). For now, as you can see, there's only one line of code inside
        the curly braces of the <code>main</code> which is the{' '}
        <code>return 0;</code>
        <br />
        <br /> {'\u2B24'} <code>return 0;</code> - again, for now, just do this
        for the programs that you'll be making in this course, but basically,
        this line of code is the <b>exit status</b> of our application. If we
        return <code>0</code> as the exit status, that means that our program
        worked fine until the end, without errors.
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <>
            <Compiler
              initialSourceCodes={[
                {
                  code: `#include<iostream>\n\nint main() {\n\t\n\treturn 0;\n}`,
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
            />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              However, although it can be removed, it's always better to place
              the <code>void</code> inside the parentheses for clarity and
              readability.
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
        C++ has a standard library that contains tons of built-in header files
        which can be useful when coding, but these can only function if we call
        it using the <code>#include</code> directive.
        <br />
        <br />
        Before we are able to use any function in C++, we have to identify first
        which library is needed to use the function. Here are some of the most
        basic ones available:
      </Text>
      <InfoList>
        <InfoCard
          info="Contains standard input-output stream functions. These functions are for taking inputs from the user and displaying output to the user."
          title="<iostream>"
        />
        <InfoCard
          info="Contains output manipulators. These functions are used to manipulate the output of our program (e.g. formatting a decimal number to only display its 2 decimal places)"
          title="<iomanip>"
        />
        <InfoCard
          info="Contains common mathematical operations. These functions are for doing mathematical operations such as <code>sqrt</code> (squareroot), <code>pow</code> (power/exponent), <code>cos</code> (cosine), etc."
          title="<cmath>"
        />
        <InfoCard
          info="Contains functions to classify and transform individual characters."
          title="<cctype>"
        />
        <InfoCard
          info='Contains functions to manipulate "strings". Strings are just multiple characters combined together such as words, phrases, and sentences.'
          title="<cstring>"
        />
      </InfoList>
      <br />
      <Text>
        There are still a lot of header files in C++ and you'll get to know them
        as you continue learning. Don't worry if you won't be able to memorize
        them for now because this lesson only gives you an overview of the
        common library/header files that are used in C++. We will be getting to
        know more about each of these libraries in the future lessons, like when
        and how to use them, so just continue learning and keep going!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic1;
