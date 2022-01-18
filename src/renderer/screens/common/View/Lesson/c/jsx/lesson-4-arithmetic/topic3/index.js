import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, InteractiveCompiler } from 'components/elements';
import { textTypes } from 'components/elements/constants';

import { SampleProblemList, SampleProblemCard } from 'components';
import IntroImage from './intro-image.png';
import Infographic from './infographic.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';
import Image from '../../../../Image';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="Which to Solve First?"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody is now one more step away from mastering number manipulation! Eager
        to know the last recipe to mastering this, you turned to the last page
        of the current chapter, which writes: <br />
        <br />
        "Just like ordinary mathematics' PEMDAS rule, C also follows a similar
        order of priority when calculating. This concept is a vital part of
        mastering number manipulation since it would greatly affect the results
        of calculations if this was not properly understood. Therefore, we must
        understand which operation need to be solved first, and in programming,
        we call this the <strong>order of precedence</strong>."
      </Text>
    }
  >
    <Section title="The Order">
      <Text>
        Just like ordinary math, C also follows a similar order of precedence
        when performing the operations. To illustrate, we visualize the order as
        a staircase that needs to be taken step by step before being able to go
        to the bottom part, like this:
      </Text>
      <Image alt="Mathematical Order Graph" src={Infographic} />
      <Text>
        Keep in mind that as shown in the illustration, those in the same box
        are of the same ranking in the order of precedence, that is, when faced
        with those operations in one event, the computer will read it directly
        from left to right (unless enclosed by a parentheses).
      </Text>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Guess the Answer">
          <Text>
            Let's try the usual math tricks using the combination of arithmetic
            operations and have a try at how the order of precedence works!{' '}
            <br />
            <br />
            The rule is to pick any integer from 1-9 and perform the following:
            <br />
            a) Multiply it by 2
            <br />
            b) Add six to the result
            <br />
            c) Divide the result by 2
            <br />
            d) Subtract the result by the original number you have chosen.
            <br />
            <br />
            And magically, it will always result to the number 3! However, it is
            important to not that we can only do this if we follow the method
            step by step, especially since the third step involves division,
            which is of higher precedence than the second step, addition. In
            here comes the great use of parentheses, like this one below:
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    int num = 4; // an example\n\n    printf("Result = %d", (num * 2 + 6) / 2 - num);\n\n    return 0;\n}`,
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
            Try changing the value of <code>num</code> above and the answer will
            still be 3. Awesome right?
          </Text>
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic3;
