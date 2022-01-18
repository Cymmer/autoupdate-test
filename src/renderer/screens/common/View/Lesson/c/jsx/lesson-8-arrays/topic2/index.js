import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, InteractiveCompiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="An Array Element"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody now knows how to make an array of things, just like a normal human!
        But did you know that you can actually access, change, or manipulate any
        item from an array of any data type? To know how to do it, you read the
        second topic of the last chapter of the manual which states: <br />
        <br />
        "Arrays are so efficient that we can put similar things together if we
        need to, like a list of numbers or letters! But when we want to change
        something or know about the contents inside an array, there is one
        method in C where we can do just what we need: through accessing{' '}
        <strong>array indices</strong>."
      </Text>
    }
  >
    <Section title="Adding an Element to an Array">
      <Text>
        Arrays are an ordered group or list of values, and since it is an
        ordered list, each value that is stored inside of it is put in
        corresponding positions inside the array. In technical terms, these
        positions are what we call as <strong>indices</strong> (or index if
        singular).
        <br />
        <br />
        Now, since each value inside an array has its own index position,
        accessing array values is now possible thanks to these array indices!
        Accessing array values using indices is as simple as this syntax below:
      </Text>
      <Code language={programmingLanguages.C}>arrName[index_position];</Code>
      <Text>
        We must always remember though, that an array index always start off
        with 0 and ends with its size - 1. Therefore, in an array of 5 integers,
        we can only access from index 0 - 4, and if we access more than that, we
        can get some random value instead, like this:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int arr[5] = {1, 2, 3, 4, 5};\n\n    printf("%d\\n", arr[0]);\n    printf("%d\\n", arr[1]);\n    printf("%d\\n", arr[2]);\n    printf("%d\\n", arr[3]);\n    printf("%d\\n", arr[4]);\n    printf("OOOPS: %d", arr[5]);\n\n    return 0;\n}`,
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
        Take a look at the output of the last line. Keep rerunning the code and
        you'll notice that the value keeps on changing. This is called a{' '}
        <strong>garbage value</strong> and the reason for this is because we
        access a non-existent index of an array - we accessed index 5 when the
        max index of the array is supposedly index 4.
      </Text>
    </Section>

    <Section>
      <Text>
        Just like in variables, we can also overwrite values in arrays by
        accessing its index position and then assigning it to a new value, like
        this:
      </Text>
      <Code language={programmingLanguages.C}>
        arrName[index_position] = value;
      </Code>
      <Text>
        So if we want to change the value of that certain part of the array, we
        can now easily do so by accessing it using its index position. For
        instance, if we want to change the value found at index 5 of a char
        arary, we can do so like this:
      </Text>
      <Code language={programmingLanguages.C}>myCharArray[5] = 'J';</Code>
      <Text>Here's an actual example that you could play around:</Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int arr[5] = {1, 2, 3, 4, 5};\n\n    printf("Original Value: %d\\n", arr[2]);\n\n    // let’s change 2 into 8 by applying the method above!\n    arr[2] = 8;\n\n    // now when we print it, that will now become 8.\n    printf("New Value: %d", arr[2]);\n\n    return 0;\n}`,
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
  </TopicContainer>
);

export default Topic2;
