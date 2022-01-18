import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { InfoList, InfoCard } from 'components';
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
        involving square roots, logarithmic equations, and the like? Surely,
        there must be some way. Pumped up from the piled-up curiosity in you,
        you then looked for help in the manual and found your answer on the
        fourth chapter’s second topic:
        <br />
        <br /> "If Python has its ready-to-use basic operations, then there
        should also be like that on complex math as well! And yes, you’re right!
        Python does have some built-in functions that a scientific calculator
        has, all in one library. Therefore, today we shall learn how to let the
        robot access this library and use some{' '}
        <strong>basic math functions</strong>."
      </Text>
    }
  >
    <Section title="The Math Library">
      <Text>
        Before we can use some of the functions that are found on a scientific
        calculator, we have to import the library where those functions are
        contained. Python has tons of libraries that can actually be used when
        needed (you can search them to know more about them!).
        <br />
        <br /> Let us first learn how to import a library into your code. To do
        that, we need to follow this syntax:
      </Text>
      <Code language={programmingLanguages.PYTHON}>import library_name</Code>
      <Text>
        And in our case, the library name that we need would be{' '}
        <strong>math</strong>. Therefore:
      </Text>
      <Code language={programmingLanguages.PYTHON}>import math</Code>
      <Text>
        When importing libraries, it is good to note that we should only do so
        on the topmost part of the code by convention. Once it’s already typed
        in there, then the library is good to use! We shall also only import
        libraries only if we use them to practice good programming practice.
        <br />
        <br />
        The Math library contains a lot of advanced math functions that can be
        used for specific purposes. But for starters, here are some basic ones
        that are commonly used:
      </Text>
      <InfoList>
        <InfoCard
          info="Returns the absolute/positive value of an integer"
          initialSourceCodes={[
            {
              code: `import math\nprint(math.abs(-4))`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="4"
          syntax={['math.abs(int)']}
          title="abs()"
        />
        <InfoCard
          code={`import math\nprint(math.fabs(-4.35))`}
          info="Returns the absolute/positive value of a floating point value"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="4.35"
          syntax={['math.fabs(float)']}
          title="fabs()"
        />
        <InfoCard
          code={`import math\nprint(math.sqrt(4))`}
          info="Returns the square root of a number"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="2.0"
          syntax={['math.sqrt(num)']}
          title="sqrt()"
        />
        <InfoCard
          code={`import math\nprint(math.floor(-4.35))`}
          info="Rounds down a number to the largest integer less than or equal to the number"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="-5"
          syntax={['math.floor(num)']}
          title="floor()"
        />
        <InfoCard
          code={`import math\nprint(math.ceil(-4.35))`}
          info="Rounds up the number to the smallest integer greater than or equal to the number"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="-4"
          syntax={['math.ceil(num)']}
          title="ceil()"
        />
      </InfoList>
      <br />
      <Text>
        However, in order to use these functions from the math library we
        imported, we shall follow the following syntax:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        library_name.function(num)
      </Code>
      <Text>
        Therefore, in our case, in order to use the square root function, for
        example, we shall follow that format, such as the one shown below:
      </Text>
      <Code language={programmingLanguages.PYTHON}>print(math.sqrt(4))</Code>
    </Section>
  </TopicContainer>
);

export default Topic2;
