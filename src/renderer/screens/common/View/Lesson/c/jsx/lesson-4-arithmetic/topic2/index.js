import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, InteractiveCompiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import {
  SampleProblemList,
  SampleProblemCard,
  InfoList,
  InfoCard,
  FunFactCard,
} from 'components';
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
        for help in the manual and found your answer on the fourth chapter's
        second topic: <br />
        <br />
        "If C has its ready-to-use basic operations, then there should also be
        built-in complex math operations as well! C does have some built-in
        functions that a scientific calculator has, all in one library.
        Therefore, today we shall learn how to let the robot access this library
        and use some <strong>basic math operations</strong>."
      </Text>
    }
  >
    <Section title="The math.h file">
      <Text>
        Before we can use some of the functions that are found on a scientific
        calculator, we have to include the library where those functions are
        contained, into the code. C has tons of header files in store that can
        actually be used when needed (we already talked about the most common
        ones on the first chapter, remember?).
        <br />
        <br />
        Let us first recall how to include a built-in header file into the C
        code. To do that, we shall write it just like including the{' '}
        <code>{`<stdio.h>`}</code> library, like this:
      </Text>
      <Code language={programmingLanguages.C}>{`#include<stdio.h>`}</Code>
      <Text>
        And in our case, since we need some mathematical functions to be made
        available for use in C, based on the five basic header files mentioned
        in the first chapter, it has to be <strong>{`<math.h>`}</strong>. Hence:
      </Text>
      <Code language={programmingLanguages.C}>{`#include<math.h>`}</Code>
      <Text>
        With this, you can now use mathematical functions in your code!
        <br />
        <br />
        When including header files in your code, it is good to note that we
        should only do so on the topmost part of the code by convention. Once
        it's already typed in there, then it is good to use! We shall also only
        include header files only if we use them for good programming practice.
      </Text>
    </Section>

    <Section title="Basic Math Functions">
      <Text>
        The <strong>math.h</strong> header file contains a lot of advanced math
        functions that can be used for specific purposes. But for starters, here
        are some basic ones that are commonly used:
      </Text>
      <InfoList>
        <InfoCard
          code={`printf("%lf", fabs(-3.2));`}
          info="Returns the absolute/positive value of num"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output="3.200000"
          syntax={['fabs(float)']}
          title="fabs()"
        />
        <InfoCard
          code={`printf("%lf", pow(2, 5));`}
          info="Returns the value of the left operand (base) raised to the power of the right operand (exponent)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output="32.000000"
          syntax={['pow(base, exponent)']}
          title="pow()"
        />
        <InfoCard
          code={`printf("%lf", sqrt(64));`}
          info="Returns the square root of a number"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output="8.000000"
          syntax={['sqrt(num)']}
          title="sqrt()"
        />
        <InfoCard
          code={`printf("%lf", floor(3.5));`}
          info="Rounds down a number to the largest integer less than or equal to the number"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output="3.000000"
          syntax={['floor(num)']}
          title="floor()"
        />
        <InfoCard
          code={`printf("%lf", ceil(3.5));`}
          info="Rounds up the number to the smallest integer greater than or equal to the number"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output="4.000000"
          syntax={['ceil(num)']}
          title="ceil()"
        />
      </InfoList>
      <Text>
        Always remember that all results generated by these mathematical
        functions are double floating-point values, so don't forget to use %lf
        when trying to print them out or store it in a double variable when
        needed, okay?
        <br />
        <br />
        However, if you need to convert the result to <code>int</code> because
        you're only interested in the whole number, you can do so by assigning
        it to an <code>int</code> variable, like this:
        <br />
        <br />
        <Code language={programmingLanguages.C}>int result = pow(5, 2);</Code>
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n#include<math.h>\n\nint main(void) {\n    double a = pow(2, 3);\n\n    // now, let's typecast the value into an integer!\n    printf("Typecasted value = %d", (int) a);\n\n    return 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
                programming_language: {
                  id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
                },
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          />
        }
        mainTextJsx={
          <>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              The values generated by math.h functions are of data type double
              by default. However, if you wish to transform that value into some
              other data type, like making it an integer to perform math
              calculations and more, you can use <strong>typecasting</strong>,
              like this:
            </Text>
            <Code language={programmingLanguages.C}>(data_type) value</Code>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              Just change the data_type in the syntax into the data type you
              wish to transform the value into, like int, float, char, or str!
              This is incredibly useful when we want to print out the results
              from math.h functions that are double by default, into integers!
              Come one, why don't we try that out?
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Exploring Exponents">
          <Text>
            Let's try out exponents this time! Are there wonders in this one as
            well? <br />
            <br />
            You see, all mathematical operations used here are what is applied
            in human math. Therefore, when talking about exponents, when we
            raise it to 0, no matter the base, the value will always return 1.
            Moreover, if a number is raised by 1, then the result will always be
            the value of the base.
            <br />
            <br />
            In addition, when we put a negative number on the base side, it will
            return the same value as it was just a normal value, and will carry
            out the sign of the number as positive (when exponent is even) and
            negative (when exponent is odd). Yet, remember to always put your
            base in a parentheses, or else, it will always return a negative
            value.
            <br />
            <br />
            When putting negative numbers on the exponent side, on the other
            hand, it means that entire result (regardless of signs) is put as a
            denominator of a fraction with numerator 1 (1/n).
            <br />
            <br />
            We've given the code out for you to try out.
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n#include<math.h>\n\nint main(void) {\n    printf("4^0 = %.0lf\\n", pow(4, 0));\n    printf("4^1 = %.0lf\\n", pow(4, 1));\n    printf("-4^1 = %.0lf\\n", pow(-4, 1));\n    printf("4^-2 = %.0lf", pow(4, -2));\n\n    return 0;\n}`,
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

export default Topic2;
