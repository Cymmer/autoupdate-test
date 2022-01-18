import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import {
  FunFactCard,
  SampleProblemList,
  SampleProblemCard,
  InfoList,
  InfoCard,
} from 'components';
import { Text, Compiler } from 'components/elements';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="When to Pause"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Feeling happy about your new learning on printing, you then turned to
        the next page on the instruction manual. From there, it writes:
        <br />
        “Speaking is indeed a great skill of a robot and takes it a bit closer
        to being more human-like. However, humans get tired of speaking, too,
        and needs some time to pause or take a break before getting back to the
        topic. As such, if the robot talks endlessly for a long period of time,
        surely, it will sound monotonous and boring to others, and we wouldn’t
        want that to happen, do we?
        <br />
        Therefore, in order to let the robot learn how to take a break while
        speaking, we will program him with the use of Python’s{' '}
        <strong>basic escape sequences.</strong>“
      </Text>
    }
  >
    <Section title="Definition">
      <Text>
        Before we go on about the kinds of escape sequences, let us describe
        what it does first. Escape sequences are special characters
        characterized by a backslash (\) and letter or symbol beside it. It is
        used in print() statements to show spaces, new lines, or show symbols
        that cannot be outputted using the normal way of printing. <br />
        There are a lot of escape sequences available in Python, but we will
        only be tackling about the most basic ones.
      </Text>
    </Section>

    <Section title="Types">
      <Text>
        Each escape sequence has its own function when used in printing. To
        elaborate, here are some basic ones:
      </Text>
      <InfoList>
        <InfoCard
          code='print("Hello\tWorld!")'
          info="Prints a horizontal tab space"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="Hello     World!"
          title="\t"
        />
        <InfoCard
          code='print("Hello\nWorld!")'
          info="Prints the proceeding text to a new line"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output={`Hello\nWorld!`}
          title="\n"
        />
        <InfoCard
          info="Prints a single quote inside texts enclosed in double quotes"
          initialSourceCodes={[
            {
              code: "print('Hello \\'World\\'!')",
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="Hello 'World'!"
          title="\'"
        />
        <InfoCard
          info="Prints a double quote inside texts enclosed in double quotes"
          initialSourceCodes={[
            {
              code: 'print("\\"Hello World!\\"")',
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output='"Hello World!"'
          title='\"'
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
                  code: `print("This is Line 1")\nprint("This is Line 2")`,
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
            />
            <br />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              And this code prints the same format, too!
            </Text>
            <Compiler
              initialSourceCodes={[
                {
                  code: `print('''This is Line 1\nThis is Line 2''')`,
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
            At the end of each print() statement, a new line is automatically
            placed there, so if you put multiple print() statements, they will
            always be put on separate lines! But what’s even better is that, you
            can print multiple lines using only one print() statement by using
            triple single quotes or double quotes! Just type it inside those
            triple quotation marks just like it already has a new line in it.
            <br />
            <br />
            Don’t believe me? Try it out yourself!
          </Text>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Give me Some Space!">
          <Text>
            When you want to let your words breathe when speaking, and to avoid
            sounding like a robot (even if you already are), you have to give
            your words some space, even just a little. But if you’d like to take
            longer pauses when speaking, you could use some help with the tab
            escape sequence. <br /> <br /> Say, for example, you want to
            announce something, and you’d like to put some excitement with
            pauses, you do it like this!
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: 'print("Are you ready\\t to be the next\\t Coding Hero?")',
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        </SampleProblemCard>
        <SampleProblemCard number={2} title="Making a Haiku">
          <Text>
            You know what’s the good thing about being human-like? Being
            creative! And one proof of being creative is writing a poem. For
            starters, let’s teach Cody how to make a haiku! It’s a 5-7-5
            syllable poem composing of three lines. Oh! Speaking on lines, we
            need something to create them, and this calls for, the new line
            escape sequences! <br /> <br /> Run to code to see the magic! <br />{' '}
            <br />
            P.S. There are other ways of printing new lines too. Experiment all
            you want!
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: 'print("I love my Cody\\nIt’s part of my family\\nIt makes me happy.")',
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
