import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic4 = () => (
  <TopicContainer
    image={IntroImage}
    number={4}
    title="Do-While Loop"
    titleJsx={
      <>
        <Text>
          The do-while loop, on the hand, achieves repetition by "doing" or
          executing the statements in the loop <strong>first</strong>, before
          checking the condition ("do" the statements first), unlike the
          while-loop and the for-loop where the condition is checked first
          before executing statements in the loop. This way,{' '}
          <strong>
            it is guaranteed that the statements in the loop get executed at
            least once
          </strong>
          !
          <br />
          <br />
          This is how the do-while loop looks like:
        </Text>
        <Code language={programmingLanguages.JAVA}>
          {`do {\n\tstatement;\n} while(<condition>);`}
        </Code>
      </>
    }
  >
    <Section>
      <Text>
        <strong>Chiron tidbit:</strong> Use the do-while loop when you know for
        sure that the statements in the loop{' '}
        <strong>should be executed at least once.</strong>
        <br />
        <br />
        In the summation problem for instance, how do we make sure that the user
        only enters a positive value for <strong>n</strong>? This means making
        sure that we let the user re-enter the input every time n is not
        positive. Check it below:
      </Text>
      <Compiler
        initialCustomInput={`-1\n0\n-8\n-3\n5`}
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\t\tint n = 0;\n\n\t\tdo {\n\t\t\tn = input.nextInt();\n\t\t} while(n < 1);\n\n\t\tint sum = 0;\n\n\t\tfor(int iter = 1; iter <= n; iter++)\n\t\t\tsum = sum + iter;\n\n\t\tSystem.out.println("The sum from 1 to " + n + " is " + sum + ".");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        By utilizing a do-while loop in asking for the upper bound,{' '}
        <code>n</code> is assured to be positive when the program begins
        computing for the summation from 1 to <code>n</code>. The do-while loop
        is the most appropriate loop construct for this since at the very least,
        the asking for the input gets executed once!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic4;
