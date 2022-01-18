import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { SampleProblemList, SampleProblemCard } from 'components';
import IntroImage from './intro-image.png';
import Info from './info.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';
import Image from '../../../../Image';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="How to Make a List"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody has learned a lot of things that humans usually do – from speaking,
        to listening, to mastering strings and numbers, deciding for itself, and
        even repeating things efficiently. But to complete the package of skills
        that will allow him to become perfectly ready to engage into human
        society, he has to learn one last basic concept. You then opened the
        instruction manual to its final chapter and read: <br />
        <br />
        "You are finally close to preparing Cody for the human world and also
        close to being a real Python programmer! Now, we shall talk of one of
        the most important concepts in Python that will be instrumental in
        making efficient programs and in optimizing Cody to function better as a
        human-like kid. When humans want to jot down things and store them for
        reuse in the future, they often write it down as a list of items.
        Similarly, in order to store strings or numbers as a group, we have to
        get hold of Python’s flexible multi-container of values:{' '}
        <strong>lists</strong>."
      </Text>
    }
  >
    <Section title="Describing a List">
      <Text>
        As far as we have known, when we want to store multiple values in a
        program, we can make multiple variables to store each of them, but it
        would be unimaginable to do so when we have to store a hundred of values
        in one sitting, right? What’s more, it would also cause a big headache
        when maintaining the code and having to change something from hundreds
        of variables. What solves this problem is by storing these values into a
        single container to save space and lengthiness of code, and this is what
        lists are for.
        <br />
        <br />A <strong>list</strong> is basically an ordered collection of
        values, or an array of values, to be specific. It functions like a big
        container, which has sub-containers that store each value that is put
        inside it. Therefore, we can think of lists as something like this:
      </Text>
      <br />
      <Image alt="Table describing lists" src={Info} />
    </Section>

    <Section title="Making a List">
      <Text>
        Normally, lists are created by declaring it like a variable and
        assigning it with values separated by commas and fully enclosed by a
        pair of square brackets. To illustrate, the most common way to make a
        list is by doing this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        list_name = [value1, value2, value3, value4]
      </Code>
      <Text>
        However, you can also make a list by just simply assigning it to empty
        brackets like this as well!
      </Text>
      <Code language={programmingLanguages.PYTHON}>list_name = []</Code>
      <Text>
        Or, use the list() function to assign it to a the list variable! The
        list() function works such that it will tell the program that the
        variable declared is a list, and then creates an empty list, just like
        the second way of making lists! Like this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>list_name = list()</Code>
      <Text>
        You can also create a list from taking in multiple inputs and then
        splitting them and assigning them all into one variable, like this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        list_name = input().split()
      </Code>
      <Text>
        What’s great about Python’s lists is that it’s not data-discriminating!
        Therefore, you can put in numbers or strings into a list without minding
        about its data type! Just remember that when storing strings or
        characters, enclose it with single or double quotes, and when storing
        numbers, simply type it in, and separate each value with a comma, okay?
      </Text>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="To-Do List">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            When humans go to buy groceries for a weekly food supply, they tend
            to make lists of what they want to buy in order to not forget them.
            In the same way, I want you to teach Cody how to make a list of
            grocery items! Just list down whatever I dictate to you later.{' '}
            <br />
            <br />
            Let’s apply what we’ve learned so far in creating lists! For this
            one, we shall use the list creation method that utilizes the use of
            input() and split() functions to initialize the contents of the
            list.
            <br />
            <br />
            Let’s try this code below!
          </Text>
          <Compiler
            initialCustomInput="apples oranges bananas"
            initialSourceCodes={[
              {
                code: `grocery = input().split()\n\n# Now, let’s print out the contents of the list using a for loop to put each items in one line!\n\nfor items in grocery:\n\tprint(items)\n\n# but if we just want to directly print it, we can just do this:\n\nprint(grocery)\n\n'''\nbut this would print out the list in its true form, with square brackets and quotation marks and commas.\n'''`,
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

export default Topic1;
