import React from 'react';

import { Text, Compiler } from 'components/elements';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import { SampleProblemList, SampleProblemCard } from 'components';
import { getFileName } from 'codechum-app-utils';
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
        think that your C++ journey has come to an end, but there is actually
        still one more thing you need to learn to program Cody more efficiently
        when it comes to storing and changing arrays repetitively. Excited to
        read the final topic of the final chapter, you took the instruction
        manual and from there, it writes:
        <br />
        <br /> "You are now one step away from the goal which you started when
        you first read this manual, are you? Now, let me teach you the art of
        combining arrays and repetitive actions with the use of loops. This will
        be a very important concept especially when adding or manipulating
        values inside the array. Hence, let me introduce you to one final
        concept of array manipulation in C++ in repetition – the combination of{' '}
        <strong>loops and arrays</strong>."
      </Text>
    }
  >
    <Section title="Add Items to Array">
      <Text>
        We now know that we can add items to an array by either initializing it
        all together in one single line, but how can we add values in the array
        based on the inputted values from the user, one at a time?
        <br />
        <br /> This is where loops play an important role in making your task
        possible. For example, when we want to add values one by one, we can
        incorporate the concept of accessing index positions and continuous{' '}
        <code>std::cin</code> in a loop, like this:
      </Text>
      <Compiler
        initialCustomInput={`20\n24\n28\n31\n22`}
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tint arr[5];\n\t\n\t// 1. SCANNING\n\t// we start looping at i = 0 since array index starts at 0\n\tfor(int i = 0; i < 5; i++) {\n\t\tstd::cin >> arr[i];\n\t}\n\n\t\n\t// 2. PRINTING\n\tfor(int i = 0; i < 5; i++) {\n\t\tstd::cout << "arr[" << i << "]: " << arr[i] << std::endl;\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
    </Section>

    <Section title="Array Manipulation via Loops">
      <Text>
        There are times when you want to change each of the values inside an
        array and it can actually be done manually by accessing the value by
        index position then overwriting it, but it’s quite tiring to do that
        when you have more than 10 items on the array, right?
        <br />
        <br /> But with loops, doing so have never been easier.
        <br />
        <br /> For example, when we want to change the values of the array into
        the square of its original value, we can easily do it like this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tint arr[10] = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20};\n\t\n\t// 1. UPDATING ELEMENT VALUES\n\t// we start looping at i = 0 since array index starts at 0\n\tfor(int i = 0; i < 10; i++) {\n\t\tarr[i] = arr[i] * arr[i];\n\t}\n\n\t// 2. PRINTING\n\tfor(int i = 0; i < 10; i++) {\n\t\tstd::cout << "arr[" << i << "]: " << arr[i] << std::endl;\n\t}\n\t\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Factorials">
          <Text>
            To get a factorial of a given number, you have to multiply from 1 to
            the number given to get the desired result. Let’s try doing that on
            values in an array.
            <br />
            <br /> Here, I’ve given you a sample code. Try it out!
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tint nums[3] = {1, 3, 5};\n\t\n\t// 1. COMPUTATION OF THE FACTORIALS\n\tfor(int i = 0; i < 3; i++) {\n\t\t\n\t\t// this will hold the factorial result\n\t\tint factorialResult = 1;\n\t\t\n\t\t// now, we need to do another loop here\n\t\t// to compute for the factorial of the number\n\t\tfor(int ctr = 1; ctr <= nums[i]; ctr++) {\n\t\t\tfactorialResult *= ctr;\n\t\t}\n\n\t\t// finally, we set it as the new value\n\t\tnums[i] = factorialResult;\n\t}\n\t\n\n\t// 2. PRINTING\n\tfor(int i = 0; i < 3; i++) {\n\t\tstd::cout << "arr[" << i << "]: " << nums[i] << std::endl;\n\t}\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
          <br />
          <Text>
            Just a tip by the way! It's usually better to separate the
            computations from the printing. Meaning, it's better to create
            separate loops for each of them so that each loop will do only one
            thing and it'll be easier to debug your code if there are errors.
            <br />
            <br /> This is not always the case though, so try to think if it's
            indeed better to separate them or not. Don't worry if you won't know
            for now because that's perfectly normal as you're still starting to
            learn programming.
            <br />
            <br /> And now, you've come this far. Awesome! Head over to the next
            section for the last activity 🙂
          </Text>
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic3;
