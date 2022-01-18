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
} from 'components';
import { getFileName } from 'codechum-app-utils';
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
        fourth chapter which says:
        <br />
        <br /> "Words are enough for speaking, but when solving problems in
        school or in life in the future years, a robot must have the ability to
        do basic math and handle numbers! Well, computers are actually capable
        of simple and complex calculations, but it won’t ever work if the
        programmer does not know how to code it! Hence, in order for your learn
        math basics, we have to get familiar with some{' '}
        <strong>basic arithmetic operations</strong> in C++."
      </Text>
    }
  >
    <Section title="The Symbols">
      <Text>
        Just like your elementary mathematics, C++ also has its similar set of
        math operations, with an addition of some other set of symbols for
        specified purposes. Here are the following:
      </Text>
      <InfoList>
        <InfoCard
          code={`int a = 5;\nint b = 10;\nint total1 = a + b;\nstd::cout << total1; // output would be 15\n\n// we could also add a variable with a number\nint total2 = a + 20;\nstd::cout << total2; // output would be 25\n\n// we could also print immediately the sum\nstd::cout << 100 + 100; // output would be 200`}
          info="Adds numbers on both sides of the operator. Examples:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          title="+"
        />
        <InfoCard
          code={`int a = 5;\nint b = 10;\nint total1 = a - b;\nstd::cout << total1; // output would be -5\n\n// we could also subtract a variable with a number\nint total2 = a - 1;\nstd::cout << total2; // output would be 4\n\n// we could also print immediately the difference\nstd::cout << 100 - 50; // output would be 50`}
          info="Subtracts the right operand from the left operand. Examples:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          title="-"
        />
        <InfoCard
          code={`int a = 5;\nint b = 10;\nint total1 = a * b;\nstd::cout << total1; // output would be 50\n\n// we could also multiply a variable with a number\nint total2 = a * 5;\nstd::cout << total2; // output would be 25\n\n// we could also print immediately the product\nstd::cout << 100 * 50; // output would be 5000`}
          info="Multiplies numbers on both sides of the operator. Examples:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          title="*"
        />
        <InfoCard
          code={`int a = 10;\nint b = 5;\nint total1 = a / b;\nstd::cout << total1; // output would be 2\n\na = 13\nb = 4;\nint total2 = a / b;\nstd::cout << total2; // output would only be 3 (the decimal part is discarded)\n\ndouble c = 13;\ndouble d = 4;\ndouble total3 = c / d;\nstd::cout << total3; // output would be 3.25\n\n// we could also print immediately the quotient\nstd::cout << 100 / 50; // output would be 50`}
          info="Divides the left operand by the right operand. If the holder of the result is an int, the decimal part is discarded. Examples:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          title="/"
        />
        <InfoCard
          code={`int a = 10;\nint b = 3;\nint total1 = a % b;\nstd::cout << total1; // output would be 1\n\n// we could also use the operator with a variable and a number\nint total2 = a % 5;\nstd::cout << total2; // output would be 0\n\n// we could also print immediately the remainder\nstd::cout << 100 % 51; // output would be 49\n\n// this one below would result to an error because\n// the right operand is a double\nint c = 5;\ndouble d = 5.2;\ndouble total3 = c % d; // ERROR!\n\n// even if the value of the double is a whole number,\n// it still won't work\nint e = 5;\ndouble f = 5;\ndouble total4 = e % f; // ERROR!`}
          info="This is the <strong>modulo operator</strong>. Gets the remainder of the division (not the quotient). This operator only works if both the left and the right operands are integers. Examples:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          title="%"
        />
      </InfoList>
    </Section>

    <Section title="Shortcuts in Overriding">
      <Text>
        Now, there are times when we wish to perform calculations on the value
        of a variable and then overwrite the value of the variable by the result
        it garnered. Normally, we can do so by doing these:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`varName = varName + value;\nvarName = varName - value;\nvarName = varName * value;\nvarName = varName / value;\nvarName = varName % value;`}
      </Code>
      <Text>
        But there is actually a shortcut to writing these codes, and that is
        through directly typing together the assignment operator and arithmetic
        operator to be used, like these:
      </Text>
      <InfoList>
        <InfoCard
          info="This is an equivalent of var = var + value."
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          syntax={['var += value;']}
          title="+="
        />
        <InfoCard
          info="This is an equivalent of var = var - value."
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          syntax={['var -= value;']}
          title="-="
        />
        <InfoCard
          info="This is an equivalent of var = var * value."
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          syntax={['var *= value;']}
          title="*="
        />
        <InfoCard
          info="This is an equivalent of var = var / value."
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          syntax={['var /= value;']}
          title="/="
        />
        <InfoCard
          info="This is an equivalent of var = var % value."
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          syntax={['var %= value;']}
          title="%="
        />
      </InfoList>
    </Section>

    <Section title="Increment and Decrement Operators">
      <Text>
        Incrementing a number is basically increasing it by 1. Decrementing on
        the other hand is decreasing it by 1.
        <br />
        <br /> In C++, you can do it by doing:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`varname = varname + 1;\nvarname = varname - 1;`}
      </Code>
      <Text>
        But that's not so cool, isn't it? There's actually an increment and
        decrement operator in C++ and it looks like this:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`varname++;\nvarname--;`}
      </Code>
      <Text>
        The first line above is the same as varname = varname + 1 and the second
        line above is the same as varname = varname - 1;
      </Text>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Paycheck">
          <Text>
            I want Cody to help me evenly divide my PHP 143,000 salary into 3
            people. However, it is good to remember that money will only contain
            2 decimals as centavos in Philippine Peso.
            <br />
            <br /> Now, we need to recall again how to format the number of
            decimal places. Still remember that?
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n#include<iomanip>\n\nint main(void) {\n\t\n\tdouble salary = 143000;\n\tdouble numberOfPeople = 3;\n\n\tdouble sharePerPerson = salary / numberOfPeople;\n\n\tstd::cout << "Share per person = P" << std::fixed << std::setprecision(2) << sharePerPerson;\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
        </SampleProblemCard>
        <SampleProblemCard number={2} title="Area of Triangle">
          <Text>
            In mathematics, there are lots of formulas that you need to
            remember, especially in perimeters, areas, and volumes. For now,
            let’s train Cody to master how to get the area of a triangle with
            one decimal place!
            <br />
            <br /> It’s actually simple, though, if you know the formula, and
            here it is!
            <br />
            <br />
            <strong>Area of Triangle</strong> = (base*height)/2
            <br />
            <br /> In this case, the base and height can be a decimal so it has
            to be a <strong>double</strong> or a <strong>float</strong>. It also
            cannot be negative (that’s impossible for shapes to exist), but if
            it comes to that situation, always remember that multiplying and
            dividing values of the same sign returns a positive value, while
            those of opposite signs returns a negative one.
            <br />
            <br /> For the meantime, study the code below and try running it:
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n#include<iomanip>\n\nint main(void) {\n\t\n\tdouble base = 10;\n\tdouble height = 2.5;\n\n\tdouble area = (base * height) / 2;\n\n\tstd::cout << "Area of the triangle: " << std::fixed << std::setprecision(1) << area;\n\n\treturn 0;\n}`,
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
