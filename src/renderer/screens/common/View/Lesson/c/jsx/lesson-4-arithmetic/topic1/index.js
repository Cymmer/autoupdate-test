import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, InteractiveCompiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import {
  FunFactCard,
  SampleProblemList,
  SampleProblemCard,
  InfoList,
  InfoCard,
} from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="Basic Math"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody has finally stepped up on acting and sounding more human-like than
        from when he started! Now it shall master another basic element of
        speaking: numbers! And so, you opened the instructions manual to its
        fourth chapter which says: <br />
        <br />
        "Words are enough for speaking, but when solving problems in school or
        in life in the future years, a robot must have the ability to do basic
        math and handle numbers! Well, computers are actually capable of simple
        and complex calculations, but it won’t ever work if the programmer does
        not know how to code it! Hence, in order for your learn math basics, we
        have to get familiar with some{' '}
        <strong>basic arithmetic operations</strong> in C."
      </Text>
    }
  >
    <Section title="The Symbols">
      <Text>
        Just like your elementary mathematics, C also has its similar set of
        math operations, with an addition of some other set of symbols for
        specified purposes. Here are the following:
      </Text>
      <InfoList>
        <InfoCard
          code='printf("%d", 2 + 4);'
          info="Adds numbers on either side of the operator"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output="6"
          title="+"
        />
        <InfoCard
          code='printf("%d", 2 - 4);'
          info="Subtracts the left operand from the right operand"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output="-2"
          title="-"
        />
        <InfoCard
          code='printf("%d", 2 * 4);'
          info="Multiplies numbers on either side of the operator"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output="8"
          title="*"
        />
        <InfoCard
          code={`printf("%f\\n", 2.0 / 4.0);\nprintf("%d", 5 / 2);`}
          info="Divides the left operand by the right operand (with 6 decimals if the numbers are floating point values and only the whole number if both are integers)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output={`0.500000\n2`}
          title="/"
        />
        <InfoCard
          additionalInfo="Note: This modulo operator only works if both operands are integers (whole numbers)."
          code='printf("%d", 4 % 3);'
          info="Divides left operand by right operand and returns the remainder"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output="1"
          title="%"
        />
      </InfoList>
    </Section>

    <Section>
      <Text>
        Now, there are times when we wish to perform calculations on the value
        of a variable and then overwrite the value of the variable by the result
        it garnered. Normally, we can do so by doing these: <br />
        <br />
        varName = varName + value;
        <br />
        varName = varName - value;
        <br />
        varName = varName * value;
        <br />
        varName = varName / value;
        <br />
        varName = varName % value;
        <br />
        <br />
        But there is actually a shortcut to writing these codes, and that is
        through directly typing together the assignment operator and arithmetic
        operator to be used, like these:
      </Text>
      <InfoList>
        <InfoCard
          info="How it really works: var = var + value"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          syntax={['var += value;']}
          title="+="
        />
        <InfoCard
          info="How it really works: var = var - value"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          syntax={['var -= value;']}
          title="-="
        />
        <InfoCard
          info="How it really works: var = var * value"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          syntax={['var *= value;']}
          title="*="
        />
        <InfoCard
          info="How it really works: var = var / value"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          syntax={['var /= value;']}
          title="/="
        />
        <InfoCard
          info="How it really works: var = var % value"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          syntax={['var %= value;']}
          title="%="
        />
      </InfoList>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    int a = 4;\n    a++;\n    printf("Value of 'a' after incrementing = %d\\n", a);\n\n    a--;\n    printf("Value of 'a' after decrementing = %d", a);\n\n    return 0;\n}`,
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
              When you wish to directly overwrite a variable while adding or
              subtracting one from it at the same time, you can use some help
              from increment and decrement operators! Instead of writing it like
              this:
            </Text>
            <Code language={programmingLanguages.C}>
              {`varname = varname + 1;\nvarname = varname – 1;`}
            </Code>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              You can now just type it like any of these!
            </Text>
            <Code language={programmingLanguages.C}>
              {`varname++; // directly adds one to the varname value after this line of code\nvarname--; // directly subtracts one to the varname value after this line of code\n`}
            </Code>
            <br />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              With these, you can code with lesser words, right? Let’s test this
              code below to see if this really works!
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Paycheck">
          <Text>
            I want Cody to help me evenly divide my PHP 143,000 salary into 3
            people. However, it is good to remember that money will only contain
            2 decimals as centavos in Philippine Peso. <br />
            <br />
            It is important to note that the result of a normal division will
            always be treated as a floating-point value, hence, having 6
            decimals as default. Therefore, to shorten it, we use placeholders
            at the same time! Still remember that? <br />
            <br />
            Run the code and see the magic.
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    float salary = 143000.00;\n    float share = salary / 3;\n    printf("Fair Share = %.2f", share);\n\n    return 0;\n}`,
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
        <SampleProblemCard number={2} title="Area of Triangle">
          <Text>
            In mathematics, there are lots of formulas that you need to
            remember, especially in perimeters, areas, and volumes. For now,
            let’s train Cody to master how to get the area of a triangle! <br />
            <br />
            It’s actually simple, though, if you know the formula, and here it
            is! <br />
            <br />
            Area of Triangle = (base * height) / 2
            <br />
            <br />
            In this case, the base and height can be a decimal so it has to be a
            float. It also cannot be negative (that’s impossible for shapes to
            exist), but if it comes to that situation, always remember that
            multiplying and dividing values of the same sign returns a positive
            value, while those of opposite signs returns a negative one.
            <br />
            <br />
            For the meantime, why not try this one out?
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    float base = 10;\n    float height = 2.5;\n    float area = (base * height) / 2;\n    printf("Area of the triangle: %f", area);\n\n    return 0;\n}`,
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
        <SampleProblemCard number={3} title="What Remains?">
          <Text>
            Normally, when dividing in the calculator, we don’t normally see how
            much really remains from a value as an integer, but rather in
            decimals of fractions only.
            <br />
            <br />
            However, with a modulo operator, we can actually know how many of
            the number remains after dividing it! Just remember that it only
            works on integers, though. <br />
            <br />
            Moreover, it is important to know that if the left operand is lesser
            than the right operand when using this operator, then the result
            will always be the value of the left operand.
            <br />
            <br />
            Now, why don’t we try out the code below?
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    printf("10 % 3 = %d\\n", 10 % 3);\n    printf("3 % 10 = %d", 3 % 10); \n\n    return 0;\n}`,
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
