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
    title="Compound Words"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Your Cody is now close to mastering the art of strings! But there is
        still more to it when expanding the robot’s vocabulary, is it? Wanting
        to learn how to take the robot’s list of words to the next level, you
        tried to look for the answers on the last page of the third chapter of
        the manual, which states:
        <br />
        <br /> "Humans, at an early age, learn some basic words with meanings
        engraved to it, but as they get older by the day, they learn new words
        and discover that combining some words can actually make into a new word
        with a different meaning! For your robot to acquire that ability, you
        must learn how to combine two or more strings to form a new word, and in
        Python, it’s called <strong>concatenating strings</strong>."
      </Text>
    }
  >
    <Section title="The Syntax">
      <Text>
        Before we get on to how it’s done, let us first talk about what it is
        about. Concatenating is the process of joining two or more strings
        together in order to make one combined string. Since it involves joining
        two or more things together, it just makes sense that you have to add
        those things, right? That is why, when concatenating, the only thing you
        need to do between strings is to add them with the addition sign (+).{' '}
        <br />
        <br />
        To elaborate, it follows this kind of syntax: <br />
        <br />
        <i>"string1" + "string2"</i>
        <br />
        <br />
        where string1 and string2 are all texts or characters but could also be
        variables containing strings. <br />
        <br />
        However, just like in normal mathematics in humans, you cannot add a
        number and a word, unless the number is converted into a word or string
        at a certain time (which will be discussed in the next chapter of this
        manual so look forward to it!), hence, adding strings will only work
        with co-strings and characters.
        <br />
        <br /> For example:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`A = "friend"\nB = "ship"\nC = A + B + "!"\nprint(A)`}
      </Code>
      <Text>
        As you can see, you can add more than one string at a time! Just
        remember that when concatenating strings, it would directly concatenate
        it, so if you’d like to have a bit of space between the words, then you
        need to type in the space on the strings, okay?
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `message = "Happy Birthda"\nprint(message + "y"*20 + "!")`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            If you can add strings, you can also multiply them for as many times
            as you want! Well, when multiplying though, you only need one
            string, a multiplication operation (*), and the number of times it
            will be repeated.
            <br />
            <br />
            It’s a great tool if you want your bot to win in a longest "Happy
            Birthday" game, like this!
          </Text>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Lots of Rainbows">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            In elementary, human kids are tasked to write a single word
            repeatedly in order for them to master it, and nowadays, it’s a
            usual thing to do as their homework. But in order for Cody to be
            able to do that, we need you, the programmer, to simplify his
            assignment for us, and that can be done by adding and multiplying
            strings! I’ve already calculated as to how many times it will take
            for Cody to make the paper full of words, and it only needs 20
            "rainbows"! Let’s write some rainbows now!
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `Word1 = "rain"\nWord2 = "bow"\nprint((Word1 + Word2 + " ")*20)`,
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
