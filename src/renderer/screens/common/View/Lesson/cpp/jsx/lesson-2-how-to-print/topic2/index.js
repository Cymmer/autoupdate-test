import React from 'react';

import { Text, Compiler } from 'components/elements';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import {
  SampleProblemList,
  SampleProblemCard,
  InfoList,
  InfoCard,
} from 'components';
import { getFileName } from 'codechum-app-utils';
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
        Feeling happy about your learning on how to print using C++, you then
        turned to the next page on the instruction manual. From there, it
        writes:
        <br />
        <br /> "Speaking is indeed a great skill of a robot and takes it a bit
        closer to being more human-like. However, humans get tired of speaking,
        too, and needs some time to pause or take a break before getting back to
        the topic. As such, if the robot talks endlessly for a long period of
        time, surely, it will sound monotonous and boring to others, and we
        wouldn't want that to happen, do we?
        <br />
        <br />
        Therefore, in order to let the robot learn how to take a break while
        speaking, we will program him with the use of C++'s{' '}
        <strong>basic escape sequences</strong>."{' '}
      </Text>
    }
  >
    <Section title="Definition">
      <Text>
        Before we go on about the kinds of escape sequences, let us describe
        what it does first.
        <br />
        <br />
        <b>Escape sequences</b> are special characters characterized by a
        backslash (\) and a letter or symbol beside it. It is used in{' '}
        <code>std::cout</code> statements to show spaces, new lines, or show
        symbols that cannot be outputted using the normal way of printing.
        <br />
        <br />
        There are a lot of escape sequences available in C++, but we will only
        be tackling about the most basic ones.
      </Text>
    </Section>

    <Section title="Types">
      <Text>
        Each escape sequence has its own function when used in printing. Here
        are some basic ones that are made available for use in C++:
      </Text>
      <InfoList>
        <InfoCard
          code='std::cout << "Hello\tWorld";'
          info="Prints a horizontal tab space:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          output="Hello    World"
          title="\t"
        />
        <InfoCard
          code='std::cout << "Hello\nWorld";'
          info="Prints the proceeding text to a new line."
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          output={`Hello\nWorld!`}
          title="\n"
        />
        <InfoCard
          code='std::cout << "\\";'
          info="Prints a backslash"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          output="\"
          title="\\"
        />
        <InfoCard
          code='std::cout << "\"";'
          info="Prints a double quote inside texts enclosed in double quotes."
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          output='"'
          title='\"'
        />
      </InfoList>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Give me Some Space!">
          <Text>
            When you want to let your words breathe when speaking, and to avoid
            sounding like a robot (even if you already are), you have to give
            your words some space, even just a little. But if you'd like to take
            longer pauses when speaking, you could use some help with the{' '}
            <b>tab escape sequence.</b>
            <br />
            <br /> Say, for example, you want to announce something, and you'd
            like to put some excitement with pauses, you do it like this!
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tstd::cout << "Are you ready \\t to be the next \\t Coding Hero?";\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
        </SampleProblemCard>
        <SampleProblemCard number={2} title="Making a Haiku">
          <Text>
            You know what's the good thing about being human-like? Being
            creative! And one proof of being creative is writing a poem. For
            starters, let's teach Cody how to make a haiku! It's a 5-7-5
            syllable poem composing of three lines. Oh! Speaking of lines, we
            need something to create them, and this calls for, the{' '}
            <b>new line escape sequences</b>!
            <br />
            <br /> Run the code to see the magic!
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tstd::cout << "I love my Cody\\nIt's part of my family\\nIt makes me happy.";\t\t\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic2;
