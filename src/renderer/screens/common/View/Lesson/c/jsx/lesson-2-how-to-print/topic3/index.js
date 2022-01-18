import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, InteractiveCompiler } from 'components/elements';
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

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="Reading the Situation"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        The robot you've programmed, Cody, now learns how to speak and pause
        like a human kiddo! But you notice that there is still something else
        missing in order to complete his speaking ability. Eager to find out
        what it is, you then turned to the last page of the current chapter of
        the manual: <br />
        <br />
        "Speaking and learning to pause are two essential skills that your robot
        needs to be able to talk like human, but there is one last recipe that
        completes the basic human-like speaking skills, and that is the ability
        to readily choose what things are best to talk about in a situation,
        whether it be a number or a string. To be able to do that in C, we need
        to use format codes, or commonly known as <strong>placeholders</strong>
        ."
      </Text>
    }
  >
    <Section title="Definition">
      <Text>
        A <strong>placeholder</strong> is basically a formatting specifier that
        will be replaced by a value corresponding to its data type. Basically,
        it's like a blank that needs to be filled up with a value. When using
        placeholders in <code>printf()</code> statements, it follows the
        following syntax:
      </Text>
      <Code language={programmingLanguages.C}>
        printf("placeholder", value);
      </Code>
      <Text>
        Where the placeholder indicates the format specifier to be used,
        followed by a comma (,) that connects it to the value that substitutes
        the placeholder. Hang in there, it's gonna make sense in a while!
      </Text>
    </Section>

    <Section title="Types">
      <Text>
        There are six (6) basic types of placeholders that you can use in C, and
        these are the following:
      </Text>
      <InfoList>
        <InfoCard
          additionalInfo={`Characters are always enclosed with a pair of single quotes (' ') as it is how C differentiates them from strings which are enclosed in double quotes (" ").`}
          info="Represents a single letter or symbol. Examples: 'a', 'A', '-', '.'"
          initialSourceCodes={[
            {
              code: `print("%c", 'a');`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output="a"
          title="%c"
        />
        <InfoCard
          info='Represents a group of characters. Examples: "dummy text value", "prog is awesome"'
          initialSourceCodes={[
            {
              code: `print("%s", "hello");`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output="hello"
          title="%s"
        />
        <InfoCard
          info="Represents a whole number (up to ±32767). Examples: 4, 32767, 1, 0, -5, -1, -32767"
          initialSourceCodes={[
            {
              code: `print("%d", "12");`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output="12"
          title="%d"
        />
        <InfoCard
          info="Represents a whole number (like integers), but in a more extended range (up to ±2147483647). Examples: 2147483646, 1234562, 32768, -123456, -23458751"
          initialSourceCodes={[
            {
              code: `print("%ld", "1234562");`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output="1234562"
          title="%ld"
        />
        <InfoCard
          info="Represents a number with decimal points (only up to 7 decimal points). Examples: 3.241, 100.25, 3.3333333"
          initialSourceCodes={[
            {
              code: `print("%f", "3.241");`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output="3.241"
          title="%f"
        />
        <InfoCard
          info="Represents a number with decimal points (just like floating point values), but in a more extended range of values (up to 15 decimal points). Examples: 3.1412345678, 0.00000000000001"
          initialSourceCodes={[
            {
              code: `print("%lf", "3.1412345678");`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          output="3.1412345678"
          title="%lf"
        />
      </InfoList>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <>
            <InteractiveCompiler
              initialSourceCodes={[
                {
                  code: `#include<stdio.h>\n\nint main(void) {\n    printf("The robot's name is %s\\n", "Cody");\n    printf("The first letter of Cody's name is %c\\n", 'C');\n    printf("Its age is already %d\\n", 4);\n    printf("His owner is earning at least %f a month", 7500.00);\n\n    return 0;\n}`,
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
                  programming_language: {
                    id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
                  },
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
            />
            <Text>
              Try running the code above and you'll notice something odd. Found
              it? That's right, the last value where we used %f printed out a
              number with 6 decimal places. Just how do we format that so that
              there's only two decimal places in the output?
            </Text>
          </>
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            You can combine texts and placeholders in a printf() statement! Just
            type the placeholder normally as part of the entire string, but
            don't forget to give it a value to be substituted, okay?
            <br />
            <br /> If you feel like experimenting, try this now!
          </Text>
        }
      />
    </Section>

    <Section>
      <Text>
        You can print fractional values (like float and double) with limited
        decimal places, too! By default, float and double floating point values
        will be displayed with 6 decimals, but that's just lame and too long if
        it wasn't need right?
        <br />
        <br />
        Just use the syntax ("%.2f") for float or ("%.2lf") for double where the
        ".2" represents how many decimals will only be shown when printed.
        <br />
        <br /> Note that when you wish to print a number in C with lesser
        decimals than it already has, it will automatically round off the number
        to the nearest least printed decimal.
        <br />
        <br />
        Try it out yourself!
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    printf("Pi is equivalent to %.3f", 3.1415926);\n    return 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            programming_language: {
              id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
            },
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
    </Section>

    <Section>
      <Text>
        Now, placeholders aren't just meant to be used alone. You can also use
        two or more placeholders in one <code>printf()</code> statement! Just
        arrange the values according to the placeholder it will be substituting,
        separated by a comma. <br />
        <br />
        Say for example, we want the robot to introduce itself in front of the
        class by telling its name and age. With this, we will be using two
        placeholders in one statement, just like this:
      </Text>
      <Code language={programmingLanguages.C}>
        {`#include<stdio.h>\n\nint main(void) {\n    printf("Hi! My name is %s and I am %d years old from the date of my creation.", "Cody", 2);\n\n    return 0;\n}`}
      </Code>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    printf("%03d\\n", 7);\n    printf("%03d", 700000);\n\n    return 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
                programming_language: {
                  id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
                },
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          />
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            You can indicate at least how many digits an integer is to be
            displayed using placeholders! By writing ("%03d"), you would control
            the display of a single digit into triple digits by adding zero to
            the lacking digits! (but of course, the value would not change, just
            the display)
            <br />
            <br />
            However, it is good to note that this function would only indicate
            the minimum number of digits that is to be outputted. If there comes
            a six-digit number passing through this placeholder, it would output
            the same number since it exceeds the minimum number of digits to be
            displayed.
            <br />
            <br /> Still don't believe me? Then have a go at it!
          </Text>
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
            the amount of money in 6 decimal places, right? <br />
            <br />
            You can do this by simply using placeholders! In this case, since
            the value is a number with decimals, we need to use %f, and then
            limit it to two decimals, therefore resulting to a %.2f placeholder.{' '}
            <br />
            <br />
            Let's see how it works!
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n\tprintf("An apple costs P%.2f", 20.2525);\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
                programming_language: {
                  id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
                },
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          />
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic3;
