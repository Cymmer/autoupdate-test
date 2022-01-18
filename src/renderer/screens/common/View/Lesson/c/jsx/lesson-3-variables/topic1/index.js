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

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="No Dead Airs"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Just a few days ago, your Cody acquired its human-like speaking ability!
        But what would happen if the robot is prompted to speak about common
        things, like its name or age? Wandering in thoughts, you took the manual
        from your side and began reading the third chapter. Starting off, it
        says: <br />
        <br />
        "Being able to speak is one thing that makes a robot close to being
        human, but to speak instantly on basic things like its name, age, or an
        answer to a yes/no question, without taking too much time for such a
        thing, takes your robot to the next level at being human-like. But this
        cannot be achieved by merely typing in the data manually (that's
        exhausting, you know), so this calls for the help of the "containers" of
        data in C – <strong>variables</strong>."
      </Text>
    }
  >
    <Section title="Variable Declaration">
      <Text>
        <strong>Variables</strong> are objects that are used to store values. As
        an object, they act as containers or buckets where the data will be put
        into and stored. In C, declaring a variable uses this kind of syntax:
      </Text>
      <Code language={programmingLanguages.C}>data_type variableName;</Code>
      <Text>
        Variable declaration in C requires 3 parts: (1) the data type it will
        possess, (2) the variable name of your choice, and (3) a semicolon at
        the end.
        <br />
        <br />
        Unlike other languages that allow their variables to change data types
        whenever the programmer wants to, C's variable data types are defined
        upon declaration and will always hold that data type afterwards.
        Meaning, a data type of a variable is final. <br />
        <br />
        There are tons of data types available in C, but here are the basic ones
        that you can use in variable declaration:
      </Text>
      <InfoList>
        <InfoCard
          info="Character (a single letter, symbol, or white space)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          title="char"
        />
        <InfoCard
          info="Integer (whole number ranging between ±32767)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          title="int"
        />
        <InfoCard
          info="Long integer (whole numbers ranging between ±2147483647)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          title="long int"
        />
        <InfoCard
          info="Floating point values (real numbers that can handle up to 7 decimals)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          title="float"
        />
        <InfoCard
          info="Double floating point values (real numbers that can handle up to 15 decimals)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          title="double"
        />
      </InfoList>
    </Section>

    <Section>
      <Text>
        So for example, we want to create an <code>int</code> variable that will
        represent an age, we do it like this:
      </Text>
      <Code language={programmingLanguages.C}>int age;</Code>
      <Text>
        Or if we want to create a variable that will represent your love for
        your crush, then we need to create a variable with a data type that can
        hold very big numbers:
      </Text>
      <Code language={programmingLanguages.C}>double loveForMyCrush;</Code>
    </Section>

    <Section>
      <Text>
        We can also declare a variable and directly assign it to a value using
        the assignment operator, the equal sign (=), like this:
      </Text>
      <Code language={programmingLanguages.C}>
        data_type variableName = value;
      </Code>
      <Text>
        So going back to our age variable earlier, we can declare it and give it
        a value immediately like this:
      </Text>
      <Code language={programmingLanguages.C}>int age = 24;</Code>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    int num1 = 4, num2 = 5;\n    printf("Num1 = %d, Num2 = %d", num1, num2);\n\n    return 0;\n}`,
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
          <>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              If you wish to declare multiple variables of the same data type,
              you can actually just use one line declaration and separate each
              variable name with a comma, like this:
            </Text>
            <Code language={programmingLanguages.C}>
              data_type variable1, variable2;
            </Code>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              Or even initialize its values to your liking!
            </Text>
            <Code language={programmingLanguages.C}>
              data_type variable1 = value, variable2 = value;
            </Code>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              Don't believe me? Then let's try it in a real code!
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <Text>
        Note that a variable's data type remains as it is once declared, so when
        you try to assign a letter to an integer variable, the character value
        will be converted into its integer equivalent. The same thing happens
        when you assign a float to an integer variable, since it will only take
        the whole number from the assigned value.
        <br />
        <br /> To elaborate, here's what happens when you do those things:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int age = 'C';\n\n    // it will print out the integer equivalent of the uppercase C instead\n    // and since the integer equivalent of uppercase A is 65, \n    // then counting from there, uppercase C will be 67, like this:\n    printf("Age = %d\\n", age);\n\n    int gravity = 9.8;\n\n    // for float values assigned to ints, it will print out only the whole number portion instead\n    printf("Gravity = %d\\n", gravity);\n\n    return 0;\n}`,
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
        To get a clearer view on the use of variables, let us take this one for
        example:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int age = 4;\n\n    // let us try to use the variable in a sentence using placeholders, like this:\n    printf("I'm Cody and I am already %d years old\\n", age);\n    printf("It has also been %d years since I have seen the world.", age);\n\n    return 0;\n}`,
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
        As you can see, we can now reuse a variable as much as we want to! It is
        a very efficient way to use the same word over and over in different
        contexts without typing the word manually! It is important to remember
        though, that variables can only be printed using the{' '}
        <code>printf()</code> function using placeholders. <br />
        <br />
        And what's more, if you ever decide to change the age number on thousand
        lines of code, you will only change the value of the variable, and not
        each statement now! Efficient, ain't it?
      </Text>
      <Code language={programmingLanguages.C}>
        {`#include<stdio.h>\n\nint main(void) {\n    int age = 4;\n\n    /* when you want to change the age you print, \n    you just need to change the value in the code above\n    instead of changing them one by one on tons\n    of lines like those below! */\n    printf("%d\\n", age);\n    printf("%d\\n", age);\n    printf("%d\\n", age);\n    printf("%d\\n", age);\n\n    return 0;\n}`}
      </Code>
    </Section>

    <Section>
      <FunFactCard
        mainTextJsx={
          <>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              The texts after double slashes (//) and those in between a pair of
              slash asterisks (/*) that you see in the code above will not be
              read by the code, and these are what we call as{' '}
              <strong>comments</strong>.
              <br />
              <br /> Comments are very useful as they serve as guides to the
              code especially when you want to look at your code again after a
              long time, or if someone else tries to read the code you've
              written, it would easily be understood by anyone who looks at it
              again. <br />
              <br />
              So try documenting your code once in a while to maintain your code
              for the future!
            </Text>
            <InteractiveCompiler
              initialSourceCodes={[
                {
                  code: `#include<stdio.h>\n\nint main(void) {\n    int age = 3;\n    // This will not be executed since it is written as comment\n    // printf("Current Age: %d", age); \n    // Only the code below will be:\n    printf("%d is my age", age);\n\n    return 0;\n}`,
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
                  programming_language: {
                    id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
                  },
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
            />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              It can also be used to conceal parts of your code instead of
              erasing it completely when testing other parts of code when
              debugging.
            </Text>
          </>
        }
      />
    </Section>

    <Section title="Changing Variable Values">
      <Text>
        Just like in other programming languages, we can change and overwrite
        the value assigned in C variables as well! The only thing we have to do
        is to follow the same syntax as when declaring a variable with an
        assigned value using the assignment operator, but without typing in the
        data type anymore, like this syntax:
      </Text>
      <Code language={programmingLanguages.C}>variableName = newValue;</Code>
      <Text>
        For example, when we want to update the age that was initially assigned
        to the variable, we can do it like this:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int age = 3;\n    printf("Current age: %d\\n", age); \n\n    age = 4;\n    printf("Age a year after: %d", age);\n\n    return 0;\n}`,
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
      <FunFactCard
        childrenJsx={
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n// making a constant using the preprocessor directive\n#define PI 3.1415926\n\nint main(void) {\n    // making a constant using the const keyword\n    const float GRAVITY = 9.8;\n\n    printf("Both %f and %f are constant values", PI, GRAVITY);\n\n    return 0;\n}`,
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
          <>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              You can also declare constant variables as well, using the{' '}
              <code>const</code> keyword! Declaring a constant variable using
              that follows this syntax:
            </Text>
            <Code language={programmingLanguages.C}>
              const data_type CONSTANT_NAME = value;
            </Code>
            <br />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              Making constants can also be done using preprocessor directives!
              Just type in the <code>#define</code> directive, the name of the
              variable, and its value, together with other preprocessor
              directives before the main program, like this:
            </Text>
            <Code language={programmingLanguages.C}>
              #define CONSTANTNAME value
            </Code>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              By convention, the name of the constant variable must always be in
              uppercase letters to easily identify that the variable is indeed a
              constant. <br />
              <br />
              These are mostly used when indicating fixed sizes or mathematical
              values, like PI or the value of gravity. Let's try making
              constants now!
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `int main(void) {\n    const float GRAVITY = 9.8;\n    GRAVITY = 10.2;\n    return 0;\n}`,
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
            You can't change the value of a constant after you've declared them
            the first time in either of the methods that is mentioned above!
            <br />
            <br /> It is because it is treated as a constant in C, which means
            that it cannot be changed all throughout the code and will now be
            treated as a read-only variable. <br />
            <br />
            If you indeed try to change it, you'll encounter an error like the
            one below, so keep that in mind, okay?
          </Text>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="First Day of Class">
          <Text>
            Let's think about the time when Cody will now be able to blend in
            with humans, and speak just like a human kid. Since children of its
            age (from the time it was created) needs to go to school, we need to
            let it prepare for its introductory message on the start of classes!
            But to give it a twist, it only has to tell the first letter of its
            name and age. <br />
            <br />
            Let's try that out by using variables! Set his age and first letter
            of his name, and put it together with some cliché introductory
            statements, like this:
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    char firstLetter = 'C';\n    int age = 4;\n\n    printf("The first letter of my name is %c and I am %d years old.", firstLetter, age);\n\n    return 0;\n}`,
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

export default Topic1;
