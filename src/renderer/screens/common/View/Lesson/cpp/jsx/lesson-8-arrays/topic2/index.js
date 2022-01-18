import React from 'react';

import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import { getFileName } from 'codechum-app-utils';
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
        second topic of the last chapter of the manual which states:
        <br />
        <br />
        "Arrays are so efficient that we can put similar things together if we
        need to, like a list of numbers or letters! But when we want to change
        something or know about the contents inside an array, there is one
        method in C++ where we can do just what we need: through accessing{' '}
        <strong>array indices</strong>."
      </Text>
    }
  >
    <Section title="Accessing an Element">
      <Code language={programmingLanguages.CPP}>arrName[index_position];</Code>
      <Text>
        We must always remember though, that an array index always start off
        with <code>0</code> and ends with its <code>size - 1</code>. Therefore,
        in an array of 5 integers, we can only access from 0 - 4, and if we
        access more than that, although we won't get an error in C++, we can get
        some random value instead.
        <br />
        <br /> Here's an example code where we access the elements of the array
        one by one:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tint arr[5] = {20, 24, 28, 31, 8};\n\n\tstd::cout << "Element at index 0: " << arr[0] << std::endl;\n\tstd::cout << "Element at index 1: " << arr[1] << std::endl;\n\tstd::cout << "Element at index 2: " << arr[2] << std::endl;\n\tstd::cout << "Element at index 3: " << arr[3] << std::endl;\n\tstd::cout << "Element at index 4: " << arr[4] << std::endl;\n\t\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        Try editing the code above by printing what's on index <code>5</code> or
        index <code>6</code> or index <code>99</code> and see the random value.
        <br />
        <br /> How about a string, how do we access its contents? Well, it's
        basically just the same, through the use of indices. Take a look at this
        one below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n#include<string>\n\nint main(void) {\n\tstd::string word = "Cody";\n\n\tstd::cout << "Character at index 0: " << word[0] << std::endl;\n\tstd::cout << "Character at index 1: " << word[1] << std::endl;\n\tstd::cout << "Character at index 2: " << word[2] << std::endl;\n\tstd::cout << "Character at index 3: " << word[3] << std::endl;\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
    </Section>

    <Section title="Setting an Element">
      <Text>
        If we can access an element and print it out, we can also set a value
        for a certain index in the array and it's nothing hard really. Take a
        look at this example below where we are manually setting the values of
        the array:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tint arr[5];\n\n\tarr[0] = 10;\n\tarr[1] = 20;\n\tarr[2] = 30;\t\n\tarr[3] = 40;\n\tarr[4] = 50;\n\n\tstd::cout << "Element at index 0: " << arr[0] << std::endl;\n\tstd::cout << "Element at index 1: " << arr[1] << std::endl;\n\tstd::cout << "Element at index 2: " << arr[2] << std::endl;\n\tstd::cout << "Element at index 3: " << arr[3] << std::endl;\n\tstd::cout << "Element at index 4: " << arr[4] << std::endl;\n\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        We could even create an array with initial values and then change only
        one or a few elements in the array, like this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tdouble arr[5] = {1.5, 3.2, 4.1, -5.5, 0};\n\t\n\t// update the element at index 2\n\tarr[2] = 9999;\n\n\tstd::cout << "Element at index 2: " << arr[2] << std::endl;\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
    </Section>
  </TopicContainer>
);

export default Topic2;
