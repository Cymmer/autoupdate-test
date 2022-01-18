import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, InteractiveCompiler } from 'components/elements';
import { textTypes } from 'components/elements/constants';

import { SampleProblemList, SampleProblemCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="Traversing the Array"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        You already know how to make and manipulate arrays now, and you might
        think that your C journey has come to an end, but there is actually
        still one more thing you need to learn to program Cody more efficiently
        when it comes to storing and changing arrays repetitively. Excited to
        read the final topic of the final chapter, you took the instruction
        manual and from there, it writes: <br />
        <br />
        "You are now one step away from the goal which you started when you
        first read this manual, are you? Now, let me teach you the art of
        combining arrays and repetitive actions with the use of loops. This will
        be a very important concept especially when adding or manipulating
        values inside the array. Hence, let me introduce you to one final
        concept of array manipulation in C in repetition – the combination of{' '}
        <strong>loops and arrays</strong>."
      </Text>
    }
  >
    <Section title="Add Items to an Array">
      <Text>
        We now know that we can add items to an array either by initializing it
        all together in one single line, but how can we add values in the array
        based on the inputted values from the user, one at a time?
        <br />
        <br />
        This is where loops play an important role in making your task possible.
        For example, when we want to add values one by one, we can incorporate
        the concept of accessing index positions and continuous scanf() in a
        loop, like this:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int arr[10];\n\n    // we start the loop at i = 0 since array index starts at 0\n    for(int i = 0; i < 10; i++) {\n        // we ask for input every iteration\n        // and store it from arr[0] to arr[9] but instead of typing it\n        // everytime, we can efficiently do that through loops:\n        printf("Enter a number: ");\n        scanf("%d", &arr[i]);\n    }\n\n    // now let’s print to see if it really works!\n    for(int i = 0; i < 10; i++) {\n        printf("Value at index %d = %d\\n", i, arr[i]);\n    }\n\n    return 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            programming_language: {
              id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
            },
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <Text>Try running the code above and input 10 numbers.</Text>
    </Section>

    <Section title="Array Manipulation via Loops">
      <Text>
        There are times when you want to change each of the values inside an
        array and it can actually be done manually by accessing the value by
        index position then overwriting it, but it’s quite tiring to do that
        when you have more than 10 items on the list, right?
        <br />
        <br />
        But with loops, doing so have never been easier.
        <br />
        <br />
        For example, when we want to change the values of the array into the
        square of its original value, we can easily do it like this:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int nums[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n\n    for(int i = 0; i < 10; i++) {\n        nums[i] *= nums[i];\n        printf("%d\\n", nums[i]);\n    }\n\n    return 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            programming_language: {
              id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
            },
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Dynamic Sized Array!">
          <Text>
            Say for example we're asked to create a program where its size would
            depend on the user? How do we do that?
            <br />
            <br />
            Well that's easy! Here, I’ve given you a sample code. Try it out!
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    int size;\n\n    // we scan the size first\n    printf("Enter the size: ");\n    scanf("%d", &size);\n\n    // and then we create the array, based on that size\n    int arr[size];\n\n    // now, we take inputs to fill in the array\n    // We loop from 0 to LESS THAN the size because\n    // that's the max index possible\n    for(int i = 0; i < size; i++) {\n        printf("Enter the value for index %d: ", i);\n        scanf("%d", &arr[i]);\n    }\n\n    // let's try printing the values and see\n    // if they're indeed stored in the array\n    for(int i = 0; i < size; i++) {\n        printf("Value at index %d = %d\\n", i, arr[i]);\n    }\n\n    return 0;\n}`,
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
            In the Custom Input above, the first value supplied which is 3 is
            taken in as the size of our array. The three succeeding values after
            that are then taken in as the elements of our array.
          </Text>
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic3;
