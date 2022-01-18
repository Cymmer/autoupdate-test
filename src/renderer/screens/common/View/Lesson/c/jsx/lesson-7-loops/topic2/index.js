import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, InteractiveCompiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { SampleProblemList, SampleProblemCard } from 'components';
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
        yourself reading the 2nd topic of the current chapter which states:{' '}
        <br />
        <br />
        "If there are while() loops that check the condition of a loop before it
        executes the line of code inside it, also known as a pre-checked loop,
        then there are also post-checked loops in C, and these are what we will
        be discussing in this chapter: the <strong>do…while() loops</strong>."
      </Text>
    }
  >
    <Section title="The Do While Syntax">
      <Text>
        A <strong>do…while() loop</strong> serve the same purpose as the while()
        loop, as it will run the code repeatedly until the condition becomes
        false, only that, since this one is a post-checked loop, it{' '}
        <strong>
          executes the code inside the body of the loop first, before checking
          the condition
        </strong>{' '}
        and so it guarantees that the code shall be executed at least once.
        <br />
        <br />
        By convention, it follows the following syntax:
      </Text>
      <Code language={programmingLanguages.C}>
        {`do {\n\t// line of code to be executed repeatedly\n} while(condition);`}
      </Code>
      <Text>
        Hence, since it can execute the code before it tests its condition, we
        can now just declare the variable to be used in the condition without
        initializing it, considering that the value is to be changed inside the
        loop.
        <br />
        <br />
        This is useful when we wish to ask for some random value from the user
        and loop that action until the user inputs a value that falsifies the
        condition, like this:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int num; // no need to initialize value anymore\n    do {\n        printf("Enter a number: ");\n        scanf("%d", &num);\n\n        printf("Inputted: %d\\n\\n", num);\n    } while(num > 0);\n\n    return 0;\n}`,
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
        The code above will continue scanning for inputs while the value
        supplied is still greater than 0 (as you can see in the condition).
        Meaning, if you never input the value that is lesser than or equal to 0,
        the loop will become a forever loop because the condition never becomes
        false.
      </Text>
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
            <br />
            Now, since it doesn't have any fixed number of times to loop a
            thing, it can't be a for loop, right? And since we cannot have an
            initial value first before asking for the code, it won't work quite
            well with while() loops, too. So, since we need to at least ask for
            the input before testing if it isn't zero yet, it means that we have
            to make use of the do…while() loop!
            <br />
            <br />
            I've prepared the code for you. Run it and see the magic happen!
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    int num;\n    // we initialize the sum variable to 0 because we haven't added anything yet\n    int sum = 0;\n\n    do {\n        printf("Enter a number: ");\n        scanf("%d", &num);\n\n        if(num % 2 != 0) {\n            sum += num;\n        }\n    } while(num != 0);\n\n    printf("Sum of all odd numbers = %d", sum);\n\n    return 0;\n}`,
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
            Again, make sure that in the series of inputs that you supply above,
            the last value should be a 0 so that the condition will eventually
            become false.
          </Text>
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic2;
