import React from 'react';

import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import { SampleProblemList, SampleProblemCard } from 'components';
import { getFileName } from 'codechum-app-utils';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="Until You Say So"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody has successfully acquired his first looping skill using while()
        loops! It really comes in handy when you want to manipulate a number
        repeatedly inside a loop or perform it for a given sequence with the
        help of incrementors. However, thinking about it, how can we loop
        something for an unknown number of times and stop when the user inputs
        something that will falsify its condition? Looking for answers, you find
        yourself reading the 2nd topic of the current chapter which states:
        <br />
        <br /> "If there are while() loops that check the condition of a loop
        before it executes the line of code inside it, also known as a
        pre-checked loop, then there are also post-checked loops in C++, and
        these are what we will be discussing in this chapter: the{' '}
        <strong>do…while() loops.</strong>"
      </Text>
    }
  >
    <Section title="The Do While Syntax">
      <Text>
        A <strong>do…while() loop</strong> serve the same purpose as the while()
        loop, as it will run the code repeatedly until the condition becomes
        false, only that, since this one is a "post-checked loop" (meaning it
        executes the code first and then, checks the condition), it guarantees
        that the code shall be executed at least once.
        <br />
        <br /> By convention, it follows the following syntax:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`do {\n\t// code here will be executed first before the condition\n\t// is checked. And then once the condition is checked and\n\t// it is still true, the code here will be executed again\n} while(condition);`}
      </Code>
      <Text>
        One useful example of this loop is when we wish to ask for some random
        value from the user and loop that action until the user inputs a value
        that falsifies the condition, like this:
      </Text>
      <Compiler
        initialCustomInput={`20\n24\n31\n8\n0`}
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tint num;\n\n\tdo {\n\t\tstd::cin >> num;\n\n\t\tstd::cout << "Inputted number: " << num << std::endl;\n\t} while(num > 0);\n\t\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Sum of Odds">
          <Text>
            Cody's teacher will be giving them a math activity tomorrow on
            addition! The twist to it, though, since their teacher is so fond of
            odd and even distinction, is that the only numbers that you need to
            add together from anything he gives are those that are odd! You stop
            adding, though, when he gives you 0 as given.
            <br />
            <br /> Now, since it doesn't have any fixed number of times to loop
            a thing and we cannot have an initial value first before asking for
            the code, it won't work quite well with while() loops.
            <br />
            <br /> So, since we need to at least ask for the input before
            testing if it isn't zero yet, it means that we have to make use of
            the do…while() loop!
            <br />
            <br /> I've prepared the code for you. Run it and see the magic
            happen!
          </Text>
          <Compiler
            hasInput
            initialCustomInput={`5\n24\n31\n8\n0`}
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tint num;\n\t\n\t// this will hold the sum of all the odd numbers.\n\t// Since we haven't added anything yet, initially,\n\t// the value is 0\n\tint sum = 0;\n\n\tdo {\n\t\tstd::cin >> num;\n\t\t\n\t\t// we check if the num inputted is odd. \n\t\t// If it is, we add it to the sum\n\t\tif(num % 2 == 1) {\n\t\t\tsum += num;\n\t\t}\n\t} while(num != 0);\n\t\n\tstd::cout << "Sum = " << sum;\n\n\treturn 0;\n}`,
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
