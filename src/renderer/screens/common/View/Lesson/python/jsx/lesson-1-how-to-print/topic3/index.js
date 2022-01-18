import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Compiler, Code } from 'components/elements';
import { programmingLanguages, textTypes } from 'components/elements/constants';

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

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="Reading the Situation"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        The robot you’ve programmed, Cody, now learns how to speak and pause
        like a human kiddo! But you notice that there is still something else
        missing in order to complete his speaking ability. Eager to find out
        what it is, you then turned to the last page of the current chapter of
        the manual: <br /> <br /> "Speaking and learning how to pause are two
        essential skills that your robot needs to talk like human, but there is
        one last recipe that completes those set of skills, and that is the
        ability to readily choose what things are best to talk about in a
        situation, whether it be a number or a string. To be able to do that in
        Python, we need to use format codes, or commonly known as{' '}
        <strong>placeholders.</strong> "
      </Text>
    }
  >
    <Section title="Definition">
      <Text>
        A placeholder is basically a formatting specifier that will be replaced
        by a value corresponding to its data type. Basically, it’s like a blank
        that needs to be filled up with a value. When using placeholders in
        print() statements, it follows the following syntax:
      </Text>
      <Text>
        Where the placeholder indicates the format specifier to be used,
        followed by a percent sign (%) that connects it to the value that
        substitutes the placeholder.
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        print("placeholder" % &lt;value_here&gt;)
      </Code>
    </Section>

    <Section title="Types">
      <Text>
        There are four (4) basic types of placeholders that you can use in
        Python, and these are the following:
      </Text>
      <InfoList>
        <InfoCard
          code='print("%c" % "a")'
          info="Represents a single letter or symbol"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="a"
          title="%c"
        />
        <InfoCard
          code='print("%s" % "I love programming")'
          info="Represents a group of characters"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="I love programming"
          title="%s"
        />
        <InfoCard
          code='print("%d" % 22)'
          info="Represents a whole number"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="22"
          title="%d"
        />
        <InfoCard
          code='print("%f" % 3.41)'
          info="Represents a number with decimal points"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="3.41"
          title="%f"
        />
      </InfoList>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: 'print("The first letter of Cody’s name is %c" % "C")',
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            You can combine texts and placeholders in a print() statement! Just
            type the placeholder normally as part of the entire string, but
            don’t forget to give it a value to be substituted, okay? <br />{' '}
            <br /> If you feel like experimenting, try this now!
          </Text>
        }
      />
    </Section>

    <Section>
      <Text>
        Placeholders aren’t just meant to be used alone. You can also use two or
        more placeholders in one print() statement! Just enclose all the values
        in parentheses (and it should be arranged according to the placeholder
        it will be substituting), separated by a comma.
        <br />
        <br /> Say for example, we want the robot to introduce itself in front
        of the class by telling its name and age. With this, we will be using
        two placeholders in one statement, just like this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        print("Hi! My name is %s and I am %d years old from the date of my
        creation." % ("Cody", 2))
      </Code>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <>
            <Compiler
              initialSourceCodes={[
                {
                  code: 'print("%03d" % 7)',
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
            />
            <br />
            <Compiler
              initialSourceCodes={[
                {
                  code: 'print("%03d" % 700000)',
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
            You can indicate at least how many digits an integer is to be
            displayed using placeholders! By writing ("%03d"), you would control
            the display of a single digit into triple digits by adding zero to
            the lacking digits! (but of course, the value would not change)
            <br />
            However, it is good to note that this function would only indicate
            the minimum number of digits that is to be outputted. If there comes
            a six-digit number passing through this placeholder, it would output
            the same number since it exceeds the minimum number of digits to be
            displayed.
            <br />
            <br />
            Still don’t believe me? Then have a go at it!
          </Text>
        }
      />
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `print("The first letter of Cody’s name is %c" % 'C')`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        }
        mainTextJsx={
          <>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              You can print numbers with limited decimal places, too! By
              default, floating point values will be displayed with 6 decimals,
              but that’s just lame!
              <br /> Just use ("%.2f") where the ".2" represents how many
              decimals will only be shown when printed.
              <br /> Try it out yourself!
            </Text>
            <Code language={programmingLanguages.PYTHON}>
              print("Pi is equivalent to %.2f" % 3.1415926)
            </Code>
          </>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="How Much?">
          <Text>
            There will come a time where Cody will need to buy something at a
            grocery or a convenience store with his human friends in the future,
            and for it to be able to recognize the money format with cents in
            the country, he has to learn to limit his digits into two decimal
            places, since it would be weird if he would just directly blurt out
            the amount of money in 6 decimal places, right?
            <br /> <br /> You can do this by simply using placeholders! In this
            case, since the value is a number with decimals, we need to use %f,
            and then limit it to two decimals, therefore resulting to a %.2f
            placeholder. <br /> <br /> Let’s see how it works!
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: 'print("An apple costs P%.2f" % 20.2525)',
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
