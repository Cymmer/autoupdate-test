import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import {
  FunFactCard,
  SampleProblemList,
  SampleProblemCard,
  InfoList,
  InfoCard,
} from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="Friends Lingo"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        After last time, Cody’s speaking vocabulary has definitely widened! But
        you felt suddenly that there is still more to it than just that. Curious
        about what could be next, you opened the manual and read the next page
        of the third chapter: <br />
        <br />
        "Your robot has mastered the basic skills to speaking formally! But
        sometimes, when a human speaks to someone close to them, then the way
        they interact with those people would definitely change (and it’s not
        going to be the formal one). That is why, in order to imitate some of
        their friendly phrases and words, your robot should also learn how to
        shorten its words, and to do that in Python, we have to learn how to{' '}
        <strong>access string indices</strong>."
      </Text>
    }
  >
    <Section title="Indices">
      <Text>
        A string is an array of characters, and as an array, its elements have
        corresponding indices, or positions of each character in a string. It
        can be usually accessed by simply typing a pair of square brackets ([ ])
        beside the name of the string variable, and inside it, the index
        position where you want to access.
        <br />
        <br /> When accessing string characters by its index position, it
        follows this syntax:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        str_var[index position]
      </Code>
      <Text>
        Just remember that the highest index position that you can access on a
        string is one minus the total length of it.
        <br />
        <br />
        For example, in this string:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`message = "Cody is awesome"\nprint(len(message))`}
      </Code>
      <Text>
        Since the length of the string is 15, as shown in the code above, the
        highest possible index position that you can access to is one minus 15,
        or in simpler terms, 14. If we print it out, it would output the last
        character of the string, ‘e’, like this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`message = "Cody is awesome"\nprint(message[14])`}
      </Code>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `botName = "I am Cody"\nprint(botName[0])\nprint(len(botName))\nprint(botName[8])`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            All arrays, strings or numbers or lists, have indices starting with
            0, and ending with one minus the total length of the array.
            <br />
            <br /> Don’t trust me? Then see it to believe it!
          </Text>
        }
      />
    </Section>

    <Section title="String Indexing">
      <InfoList>
        <InfoCard
          code={`name="Cody"\nprint(name[0])`}
          info="Accesses strings starting from the beginning of the string (leftmost part)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="C"
          title="str_var[whole num]"
        />
        <InfoCard
          additionalInfo="When doing negative indexing, the count will always start with -1 (and not 0 since zero cannot be a negative number in this sense)."
          code={`name="Cody"\nprint(name[-1])`}
          info="Accesses strings starting from the end of the string (rightmost part)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="y"
          title="str_var[negative numb]"
        />
      </InfoList>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `botName = "I am Cody"\nbotName[0] = "A"`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            You are allowed to access strings based on their index position, but
            you cannot overwrite its value through indexing! Don’t trust me?
            Then see it to believe it!
          </Text>
        }
      />
    </Section>

    <Section title="String Slicing">
      <InfoList>
        <InfoCard
          additionalInfo="The end range is exclusive – meaning, the range will include up until the position before the end position e.g. if end position is 6, it will only return up to the 5th position."
          code={`name="Cody Awesome"\nprint(name[1:10])`}
          info="Returns a range of characters from a string starting from left to right [start:end]"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="ody Aweso"
          title="str_var[whole num:whole num]"
        />
        <InfoCard
          additionalInfo="The end range is also exclusive here, but since it will get the range starting from the right, the end position is the left side of the colon in the square bracket e.g. [end: start]"
          code={`name="Cody Awesome"\nprint(name[-8: -1])`}
          info="Returns a range of characters from a string starting from right to left [end:start]"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="Awesom"
          title="str_var[negative num: negative num]"
        />
      </InfoList>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `botName = "I am Cody"\nprint("Original:", botName)\nprint("Sliced starting at 5th position from left (no end limit):", botName[5:])\nprint("Sliced ending at 9th position from left (no start limit):", botName[:9])\nprint("Sliced starting at 1st position from right (no end limit):", botName[:-1])\nprint("Sliced ending at 5th position from right (no start limit):", botName[-5:])\nprint("Slicing with no limits: ", botName[:])`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            When slicing strings, you can actually leave one side of the colon
            empty and it will work just fine! <br />
            <br />
            Just note that an unspecified number indicates that it will go up
            until the last part of a string (from the very beginning/until the
            very end). <br />
            <br /> And, if you leave both sides of the semicolon empty, like
            this, [:], it will normally print out the original string!
            <br />
            <br /> Here, see for yourself!
          </Text>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Casual Greeting">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            Sometimes, when you talk to your friends, greetings sound a little
            bit closer, and shorter, since you’ll get pumped up with all the
            other things that you would talk to with your friends. Now, we would
            like Cody to speak casually to his friends soon in order for him to
            fit in the atmosphere. And for that, we have to shorten the usual
            formal greeting into a shorter one with the use of slicing strings.
            Try the code below!
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `greeting = "Good morning to you!"\nprint(greeting[5:11])\n\n# and it also works using negative indexing!\nprint(greeting[-15:-9])`,
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

export default Topic2;
