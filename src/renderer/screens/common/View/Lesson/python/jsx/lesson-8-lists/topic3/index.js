import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { FunFactCard, SampleProblemList, SampleProblemCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="Listing One at A Time"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        You already know how to make and manipulate lists now, and you might
        think that your Python journey has come to an end, but there is actually
        still one more thing you need to learn to program Cody more efficiently
        when it comes to storing and changing lists repetitively. Excited to
        read the final topic of the final chapter, you took the instruction
        manual and from there, it writes:
        <br />
        <br /> "You are now one step away from the goal which you started when
        you first read this manual, are you? Now, let me teach you the art of
        combining lists and repetitive actions with the use of loops. This will
        be a very important concept especially when manipulating values inside
        lists. Hence, let me introduce you to one final concept of list
        manipulation in Python in repetition – the use of{' '}
        <strong>loops and lists</strong>."
      </Text>
    }
  >
    <Section title="Add Items to List">
      <Text>
        We now know that we can add items to a list with different built-in
        functions in Python, but it’s inefficient to write those statements all
        over again if we want to add 20 items to it, right?
        <br />
        <br /> This is where loops play an important role in making your task
        easier. For example, when we want to add values one by one, but we want
        to add every value at the beginning of string, we can do so by using
        insert() and a loop, like this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`fruits = []\nfor i in range(5):\n\tfruits.insert(0,input())\n\nprint(fruits)`}
      </Code>
    </Section>

    <Section title="List Manipulation by Loops">
      <Text>
        There are times when you want to change each of the values inside a list
        and it can actually be done manually by accessing the value by index
        position then overwriting it, but it’s quite tiring to do that when you
        have more than 10 items on the list, right?
        <br />
        <br /> But with loops, doing so have never been easier.
        <br />
        <br /> For example, when we want to change the values of the list into
        the square of its original value, we can easily do it like this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`nums = [1,2,3,4,5,6,7,8,9,10]\nfor i in range(len(nums)):\n\tnums[i] **=2\nprint(nums)`}
      </Code>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <>
            <Compiler
              initialSourceCodes={[
                {
                  code: `nums = [1,2,3,4,5,6,7,8,9,10]\nnums = [x**2 for x in nums]\nprint(nums)`,
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
            />
            <br />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              With list comprehensions, for loops can now be executed using one
              line of code, and it will work the same way too! There are also
              other ways to use list comprehension so try to search for it if
              you have time!
            </Text>
          </>
        }
        mainTextJsx={
          <>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              There is actually a shortcut when using loops and lists for
              manipulation purposes. <strong>List comprehension</strong>, as its
              name goes by, is a comprehensive or short-hand version of a list
              and loop combination when it comes to manipulating values.
              <br />
              <br /> Normally, it follows the following syntax:
            </Text>
            <Code>[expression loop_statement]</Code>
            <Text>
              Let us try to use list comprehension using the example above:
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Factorials">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            To get a factorial of a given number, you have to multiply from 1 to
            the number given to get the desired result. Let’s try doing that on
            values in a list.
            <br />
            <br /> Here, I’ve given you a sample code. Try it out!
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `nums = [1,3,5]\nfor i in range(len(nums)):\n\tres = 1\n\tfor num in range(1, nums[i]+1):\n\t\tres *= num\n\tnums[i] = res\nprint(nums)`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic3;
