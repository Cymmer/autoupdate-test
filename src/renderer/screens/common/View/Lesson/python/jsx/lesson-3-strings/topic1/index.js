import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Compiler } from 'components/elements';
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

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="Speech Dictionary"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Your Cody’s speaking skills are getting better by the day, huh? But
        you’re still thinking if there’s still more ways to become a better
        talker, like humans. Wondering what it could be, you began to open the
        instruction manual to the third chapter, and read:
        <br />
        <br /> "I bet your robot’s now able to speak as close as humans now. But
        in order to master the art of speaking, you must also be able to master
        the simplest and most basic parts of it. For starters, these are words
        and numbers. First, we shall master that which involve letters or
        symbols put together to make a word or a sentence, and in programming,
        we classify this grouping as strings. But just like a dictionary of
        words, there are also libraries of strings that are already there to be
        used by your robot. To know more about it, we shall discover some of
        Python’s <strong>basic string functions</strong>."
      </Text>
    }
  >
    <Section title="Just the Basics">
      <Text>
        Before everything else, we shall recall about what strings are. Strings
        are arrays or group of characters and/or symbols that make up a word,
        phrase, or a message as a whole. Normally, we identify these as those
        enclosed with a pair of single or double quotes, and are commonly used
        for printing or in human-like sense, speaking. Here are some examples:
        <br />
        <br />
        <i>Examples:</i> "hello world!", ‘Cody’, "CodeChum rocks!"
        <br />
        <br /> But, as some of you may not know, there are actually predefined
        functions that you can use on strings! There are a lot of it, though,
        but in here, we will only be learning about the basic ones but will
        surely come in handy in the future topics.
      </Text>
    </Section>

    <Section>
      <InfoList>
        <InfoCard
          additionalInfo="This function has a counterpart keyword not in, which checks the absence of a text or character in a string (the complete opposite of in)"
          code='print("or" in "Hello World")'
          info="Checks if a certain text or character is present in a string"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="True"
          syntax={['"text1" in "text2"', '"text1" in str_var']}
          title="in"
        />
        <InfoCard
          additionalInfo="When counting the length of a string, it will count everything from the beginning until the end of the string, including white spaces ( )!"
          code='print(len("Hello World"))'
          info="Returns the length of the string"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="11"
          syntax={['len("text")', 'len(str_var)']}
          title="len()"
        />
        <InfoCard
          code='print("Hello World!".upper())'
          info="Returns the string in uppercase format"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="HELLO WORLD!"
          syntax={['"text".upper()', 'str_var.upper()']}
          title=".upper()"
        />
        <InfoCard
          code='print("Hello World!".lower())'
          info="Returns the string in lowercase format"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="hello world!"
          syntax={['"text".lower()', 'str_var.lower()']}
          title=".lower()"
        />
        <InfoCard
          code='print("Hello World!".replace("He", "Yo"))'
          info="Replaces a string (or part of it) by a new string or character"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="Yollo World!"
          syntax={[
            '"text".replace("old text", "new text")',
            'str_var.replace("old text", "new text")',
          ]}
          title=".replace()"
        />
        <InfoCard
          code='print("-".join("Hello World!"))'
          info="Combines strings together, with a joining symbol or text"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="H-e-l-l-o- -W-o-r-l-d-!"
          syntax={['"joiner".join("text")', '"joiner".join(string/s)']}
          title=".join()"
        />
        <InfoCard
          additionalInfo="You can also indicate which side to remove white spaces to! Use .lstrip() to remove whitespaces only at the beginning, and .rstrip() to remove spaces only at the end!"
          code='print("   Hello World !     ".strip())'
          info="Removes whitespaces of a string at the beginning and/or end of it"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="Hello World !"
          syntax={['"string".strip()', 'str_var.strip()']}
          title=".strip()"
        />
        <InfoCard
          additionalInfo="By default, without a separator indicator, this function separates according to white spaces present in the string."
          code='print("Hello World",split("o"))'
          info="Splits a single string into a list of strings based on a separator indicator"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="['Hell', ' W', 'rld!']"
          syntax={[
            '"string".split()',
            'str_var.split()',
            '"string".split("separator")',
          ]}
          title=".split()"
        />
      </InfoList>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <>
            <Compiler
              initialSourceCodes={[
                {
                  code: `botName = "Cody"\nprint("My name is", botName.upper())\nprint("My name is", botName)`,
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
            />
            <br />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              See? Therefore, in order to permanently keep the new value onto
              the variable, you have to overwrite it, like this!
            </Text>
            <Compiler
              initialSourceCodes={[
                {
                  code: `botName = "Cody"\nprint("My name is", botName.upper())\n\nbotName = botName.upper()\nprint("My name is", botName)`,
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
            />
          </>
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            String functions outputs a new value for the string that is
            manipulated. However, unless the manipulated string is assigned to a
            new variable or overwrites the old one, it would not actually change
            the string in the variable! Don’t believe me? Then try it out
            yourself!
          </Text>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Loud and Quiet">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            There are different tones in speaking, in order to express something
            with emotion. For a robot to sound like it has emotions in them, it
            has something to do with how it is written. If it was all in
            uppercase, it would sound loud and angry, and when it is all in
            lowercase, it would definitely sound monotonous and lonely.
            <br />
            <br /> Now, let’s try to let Cody try speaking loud and quiet voices
            with one sentence only! To do that fast, we need to use the basic
            built-in string functions.
            <br />
            <br /> We’ve given the code out for you to try out.
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `botName = "I am Cody."\nprint("Loud:", botName.upper())\nprint("Quiet:", botName.lower())`,
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
