import React from 'react';

import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import {
  SampleProblemList,
  SampleProblemCard,
  InfoList,
  InfoCard,
  FunFactCard,
} from 'components';
import { getFileName } from 'codechum-app-utils';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="Like a Scientific Calculator"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Being able to perform basic math would let Cody keep up with early
        elementary kids, but what would happen if it were to face complex math
        involving exponents, square roots, and the like? Surely, there must be
        some way. Pumped up from the piled-up curiosity in you, you then looked
        for help in the manual and found your answer on the third chapter's
        second topic:
        <br />
        <br /> "If C++ has its ready-to-use basic operations, then there should
        also be built-in complex math operations as well! C++ does have some
        built-in functions that a scientific calculator has, all in one library.
        Therefore, today we shall learn how to let the robot access this library
        and use some basic math operations."
      </Text>
    }
  >
    <Section title="The cmath Header File">
      <Text>
        Before we can use some of the functions that are found on a scientific
        calculator, we have to include the library where those functions are
        contained, into the code. C++ has tons of header files in store that can
        actually be used when needed (we already talked about the most common
        ones on the first chapter, remember?).
        <br />
        <br /> Let us first recall how to include a built-in header file into
        the C++ code. To do that, we shall write it just like including the{' '}
        <code>iostream</code> library, like this:
      </Text>
      <Code language={programmingLanguages.CPP}>{`#include<iostream>`}</Code>
      <Text>
        And in our case, since we need some mathematical functions to be made
        available for use in C++, we're going to use <code>cmath</code>, just
        like this:
      </Text>
      <Code language={programmingLanguages.CPP}>{`#include<cmath>`}</Code>
      <Text>
        With this, you can now use mathematical functions in your code!
        <br />
        <br /> When including header files in your code, it is good to note that
        we should only do so on the topmost part of the code by convention. Once
        it's already typed in there, then it is good to use! We shall also only
        include header files only if we use them for good programming practice.
      </Text>
    </Section>

    <Section title="Basic Math Functions">
      <Text>
        The <code>cmath</code> header file contains a lot of advanced math
        functions that can be used for specific purposes. But for starters, here
        are some basic ones that are commonly used:
      </Text>
      <InfoList>
        <InfoCard
          code={`#include<iostream>\n#include<cmath>\n\nint main(void) {\n\tstd::cout << pow(2, 3) << std::endl;\n\tstd::cout << pow(8, 2) << std::endl;\n\tstd::cout << pow(2.5, 4) << std::endl;\n\n\treturn 0;\n}`}
          info="Returns the value of the left operand (base) raised to the power of the right operand (exponent). Example:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          output={`8\n64\n39.0625`}
          syntax={['pow(base, exponent)']}
          title="pow()"
        />
        <InfoCard
          code={`#include<iostream>\n#include<cmath>\n\nint main(void) {\n\tstd::cout << sqrt(9) << std::endl;\n\tstd::cout << sqrt(25) << std::endl;\n\tstd::cout << sqrt(3) << std::endl;\n\n\treturn 0;\n}`}
          info="Returns the square root of a number. Example:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          output={`3\n5\n1.73205`}
          syntax={['sqrt(num)']}
          title="sqrt()"
        />
        <InfoCard
          code={`#include<iostream>\n#include<cmath>\n\nint main(void) {\n\tstd::cout << floor(3.3) << std::endl;\n\tstd::cout << floor(7.5) << std::endl;\n\tstd::cout << floor(2.9) << std::endl;\n\tstd::cout << floor(10) << std::endl;\n\n\treturn 0;\n}`}
          info="Rounds down a number to the largest integer less than or equal to the number. Example:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          output={`3\n7\n2\n10`}
          syntax={['floor(num)']}
          title="floor()"
        />
        <InfoCard
          code={`#include<iostream>\n#include<cmath>\n\nint main(void) {\n\tstd::cout << ceil(3.3) << std::endl;\n\tstd::cout << ceil(7.5) << std::endl;\n\tstd::cout << ceil(2.9) << std::endl;\n\tstd::cout << ceil(10) << std::endl;\n\n\treturn 0;\n}`}
          info="The opposite of <code>floor</code>. Rounds up the number to the smallest integer greater than or equal to the number"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          output={`4\n8\n3\n10`}
          syntax={['ceil(num)']}
          title="ceil()"
        />
        <InfoCard
          code={`#include<iostream>\n#include<cmath>\n\nint main(void) {\n\tstd::cout << fabs(-3.2) << std::endl;\n\tstd::cout << fabs(5.9) << std::endl;\n\tstd::cout << fabs(-15) << std::endl;\t\n\n\treturn 0;\n}`}
          info="Returns the absolute, positive value of num. Example:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          output={`3.2\n5.9\n15`}
          syntax={['fabs(num)']}
          title="fabs()"
        />
      </InfoList>
      <Text>
        <br /> These are just some of the functions found in the{' '}
        <code>cmath</code> library. There's actually a lot more and if you want,
        you can just google the <code>cmath</code> library.
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n#include<cmath>\n\nint main(void) {\n\tdouble squareRootResult = sqrt(9.3);\n\tdouble powerResult = pow(5.5, 2);\n\t\n\tstd::cout << squareRootResult << std::endl;\n\tstd::cout << powerResult << std::endl;\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
        }
        mainTextJsx={
          <>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              The values generated by <code>cmath</code> functions are of data
              type double by default. That means that you need to use{' '}
              <code>double</code> variables to store their results. See this one
              below:
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <Text>
        However, if you wish to transform that value into some other data type,
        like making it an integer to perform math calculations and more, you can{' '}
        <strong>typecast</strong> the result into an integer, like this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n#include<cmath>\n\nint main(void) {\n\tint squareRootResult = (int) sqrt(9);\n\tint powerResult = (int) pow(5.5, 2);\n\t\n\t// check the output here and compare them with \n\t// the ones above from the previous code\n\tstd::cout << squareRootResult << std::endl;\n\tstd::cout << powerResult << std::endl;\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Exploring Exponents">
          <Text>
            Let's try out exponents this time! Are there wonders in this one as
            well?
            <br />
            <br /> You see, all mathematical operations used here are what is
            applied in human math. Therefore, when talking about exponents, when
            we raise it to 0, no matter the base, the value will always return
            1. Moreover, if a number is raised by 1, then the result will always
            be the value of the base.
            <br />
            <br /> In addition, when we put a negative number on the base side,
            it will return the same value as it was just a normal value, and
            will carry out the sign of the number as positive when exponent is
            even and negative when exponent is odd.
            <br />
            <br /> When putting negative numbers on the exponent side, on the
            other hand, it means that entire result (regardless of signs) is put
            as a denominator of a fraction with numerator 1 (1/n).
            <br />
            <br /> We've given the code out for you to try out:
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n#include<cmath>\n\nint main(void) {\n\t\n\tstd::cout << "4^0 = " << pow(4, 0) << std::endl;\n\tstd::cout << "4^1 = " << pow(4, 1) << std::endl;\n\tstd::cout << "-4^0 = " << pow(-4, 0) << std::endl;\n\tstd::cout << "4^-2 = " << pow(4, -2) << std::endl;\n\n\treturn 0;\n}`,
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

export default Topic2;
