import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Compiler } from 'components/elements';
import { textTypes } from 'components/elements/constants';

import {
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
        Cody has finally mastered the art of words—I mean, strings! And now it
        shall master the other basic element of speaking: numbers! And so, you
        opened the instructions manual to its fourth chapter which says: <br />
        <br />
        "Words are enough for speaking, but when solving problems in school or
        in life in the future years, a robot must have the ability to do basic
        math and handle numbers! Well, computers are actually capable of simple
        and complex calculations, but it won’t ever work if the programmer does
        not know how to code it! Hence, in order for your learn math basics, we
        have to get familiar with some{' '}
        <strong>basic arithmetic operations</strong> in Python."
      </Text>
    }
  >
    <Section title="The Symbols">
      <Text>
        Just like your elementary mathematics, Python also has its similar set
        of math operations, with an addition of some others for specified
        purposes. Here are the following:
      </Text>
      <InfoList>
        <InfoCard
          code="print(2+4)"
          info="Adds numbers on either side of the operator (works on strings, too!)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="6"
          title="+"
        />
        <InfoCard
          code="print(2-4)"
          info="Subtracts the left operand from the right operand"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="-2"
          title="-"
        />
        <InfoCard
          code="print(2*4)"
          info="Multiplies numbers on either side of the operator (works on strings, too!)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="8"
          title="*"
        />
        <InfoCard
          code="print(2/4)"
          info="Divides the left operand by the right operand (with 6 decimals, regardless if the result is a whole number)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="0.500000"
          title="/"
        />
        <InfoCard
          code="print(2//4)"
          info="Divides the left operand by the right operand and rounds it down to return an integer"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="0"
          title="//"
        />
        <InfoCard
          code="print(2%4)"
          info="Divides left operand by right operand and returns the remainder"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="2"
          title="%"
        />
        <InfoCard
          code="print(2**4)"
          info="Returns the exponential value of the base (left operand) and exponent (right operand)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="16"
          title="**"
        />
      </InfoList>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Paycheck">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            I want Cody to help me evenly divide my PHP 143,000 salary into 3
            people. However, it is good to remember that money will only contain
            2 decimals as centavos in Philippine Peso. <br />
            <br />
            It is important to note that the result of a normal division will
            always be treated as a floating-point value, hence, having 6
            decimals as default. Therefore, to shorten it, we use placeholders
            at the same time! Still remember that?
            <br />
            <br /> Run the code and see the magic.
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `salary = 143000\nprint("Fair Share = %.2f" % (salary/3))`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        </SampleProblemCard>
        <SampleProblemCard number={2} title="Area of a Triangle">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            In mathematics, there are lots of formulas that you need to
            remember, especially in perimeters, areas, and volumes. For now,
            let’s train Cody to master how to get the area of a rectangle!
            <br />
            <br />
            It’s actually simple, though, if you know the formula, and here it
            is! <br />
            <br />
            Area of Triangle = (base*height)/2 <br />
            <br />
            We only need two operations on this: multiplication and division.
            But we should also not forget that there is a pair of parentheses in
            the formula, so it means it will be solved first. <br />
            <br />
            In this case, the base and height cannot be negative (that’s
            impossible for shapes to exist), but if it comes to that situation,
            always remember that multiplying and dividing values of the same
            sign returns a positive value, while those of opposite signs returns
            a negative one.
            <br />
            <br /> For the meantime, why not try this one out?
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `base = 4\nheight = 5\narea = (base * height) / 2\nprint("Area of the triangle: ", area)`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        </SampleProblemCard>
        <SampleProblemCard number={3} title="Exploring Exponents">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            Let’s try out exponents this time! Are there wonders in this one as
            well? <br />
            <br />
            You see, all mathematical operations used here are what is applied
            in human math. Therefore, when talking about exponents, when we
            raise it to 0, no matter the base, the value will always return 1.
            Moreover, if a number is raised by 1, then the result will always be
            the value of the base.
            <br />
            <br /> In addition, when we put a negative number on the base side,
            it will return the same value as it was just a normal value, and
            will carry out the sign of the number as positive (when exponent is
            even) and negative (when exponent is odd). Yet, remember to always
            put your base in a parentheses, or else, it will always return a
            negative value.
            <br />
            <br />
            When putting negative numbers on the exponent side, on the other
            hand, it means that entire result (regardless of signs) is put as a
            denominator of a fraction with numerator 1 (1/n). <br />
            <br />
            We’ve given the code out for you to try out.
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `num = 5\nprint(num**0)\nprint(num**2)\nprint((-num)**2) \nprint(num**-2)`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        </SampleProblemCard>
        <SampleProblemCard number={4} title="What Remains?">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            Normally, when dividing in the calculator, we don’t normally see how
            much really remains from a value as an integer, but rather in
            decimals of fractions only.
            <br />
            <br /> However, with this, we can actually know how many of the
            number remains after dividing it! <br />
            <br />
            However, it is important to know that if the left operand is lesser
            than the right operand when using this operator, the result will
            always be the value of the left operand. <br />
            <br />
            Now, why don’t we try out the code below?
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `print(10%3)\nprint(3%10)`,
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

export default Topic1;
