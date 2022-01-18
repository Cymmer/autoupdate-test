import React from 'react';

import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import {
  FunFactCard,
  SampleProblemList,
  SampleProblemCard,
  InfoList,
  InfoCard,
} from 'components';
import { getFileName } from 'codechum-app-utils';
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
        from your side and began reading the second chapter. Starting off, it
        says: <br />
        <br />
        "Being able to speak is one thing that makes a robot close to being
        human, but to speak instantly on basic things like its name, age, or an
        answer to a yes/no question, without taking too much time for such a
        thing, takes your robot to the next level at being human-like. But this
        cannot be achieved by merely typing in the data manually (that's
        exhausting, you know), so this calls for the help of the "containers" of
        data in C++ – variables."
      </Text>
    }
  >
    <Section title="Variable Declaration">
      <Text>
        <strong>Variables</strong> are objects that are used to store values. As
        an object, they act as containers or buckets where the data will be put
        into and stored. In C++, declaring a variable uses this kind of syntax:
      </Text>
      <Code language={programmingLanguages.CPP}>data_type variable_name;</Code>
      <Text>
        Variable declaration in C++ requires 3 parts:
        <br /> {'\u2B24'} the data type it will possess
        <br /> {'\u2B24'} the variable name of your choice, and
        <br /> {'\u2B24'} a semicolon at the end
        <br />
        <br />
        Unlike other languages that allow their variables to change data types
        whenever the programmer wants to, C++'s variable data types are defined
        upon declaration and will always hold that data type afterwards. There
        are tons of data types available in C++, but here are the basic ones
        that you can use in variable declaration:
      </Text>
      <InfoList>
        <InfoCard
          code={`char letter = 'A';`}
          info="Character (a letter, symbol, or white space). This should be enclosed in single quotes. Example:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          title="char"
        />
        <InfoCard
          code={`int a = 5;\nint b = -10;`}
          info="Integer (whole number ranging between ±32767). Example:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          title="int"
        />
        <InfoCard
          code={`float a = 5.5f;\nfloat b = 10.3f;`}
          info="Floating point values (real numbers that can handle up to 7 decimals). To indicate that it is float, you should add an `f` at the end of the value. Example:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          title="float"
        />
        <InfoCard
          code={`double a = 1000.5356;\ndouble b = 5134995;`}
          info="Double floating point values (real numbers that can handle up to 15 decimals). Double is just the same as a Float but can hold larger numbers. Example:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          title="double"
        />
        <InfoCard
          code={`bool a = true;\nbool b = false;`}
          info="Truth values (true/false). Example:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          title="bool"
        />
      </InfoList>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\n\tint n = 5.92;\n\n\tstd::cout << n;\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
        }
        mainTextJsx={
          <>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              If you wish to declare multiple variables of the same data type,
              you can actually just use one line declaration and separate each
              variable name with a comma, like this:
            </Text>
            <Code language={programmingLanguages.CPP}>
              data_type varname1, varname2;
            </Code>
            <br />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              Or even initialize its values to your liking:
            </Text>
            <Code language={programmingLanguages.CPP}>
              data_type varname1 = value, varname2 = value;
            </Code>
            <br />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              Don't believe me? Then let's try it in a real code! See this one
              below:
            </Text>
            <Code language={programmingLanguages.CPP}>
              {`#include<iostream>\n\nint main(void) {\n\n\tint num1 = 5, num2 = 10, num3 = 15;\n\tdouble val1 = 3.3, val2 = 4.4;\n\tbool val3 = true, val4 = false;\n\n\treturn 0;\n}`}
            </Code>
            <br />
            <Text>
              Note that a variable's data type remains as it is once declared,
              so when you try to assign a letter to an integer variable, the
              character value will be converted into its integer equivalent. The
              same thing happens when you assign a float to an integer variable,
              it will only take the whole number from the assigned value.
              <br />
              <br /> To elaborate, try running the code below and see what's the
              output:
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <Text>
        As you can see, the output is just <code>5</code> instead of{' '}
        <code>5.92</code>. That's because the data type of <code>n</code> is{' '}
        <code>int</code> and <code>int</code>'s can only hold integer (whole
        number) values, that's why the decimal part was discarded.
        <br />
        <br /> Let's try another one below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\n\tint letter_value = 'A';\n\n\tstd::cout << letter_value;\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
    </Section>

    <Section>
      <>
        <Text>
          As you can see in the code above, we tried to assign the{' '}
          <strong>character</strong> <code>'A'</code> to the variable{' '}
          <code>letter_value</code> which is an <code>int</code>. When we tried
          running the code, the output became <code>65</code> and not{' '}
          <code>A</code>, why is that?
          <br />
          <br /> That's because the character <code>A</code> was converted to
          its integer equivalent <strong>ASCII</strong> value, which is{' '}
          <code>65</code>. All the characters (and by all, I mean including the
          spaces, the weird characters, the emojis), have their equivalent ASCII
          values. The capital <code>A</code> is 65, the capital <code>B</code>{' '}
          is 66. The small <code>a</code> is 97, the small <code>b</code> is 98.
          <br />
          <br /> If you want to know the equivalent ASCII values of all the
          characters, you can just look it up on every programmer's best friend,
          Google! Just type, "ASCII Table" and you'll see a lot of references in
          there.
        </Text>
      </>
    </Section>

    <Section title="Using Variables With Strings">
      <Text>
        To get a clearer view on the use of variables, let us take this one for
        example:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\t\n\t// We create an int variable to represent age and assign 4 to it.\n\tint age = 4;\n\t\n\tstd::cout << "I'm Cody and I am already " << age << " years old." << std::endl;\n\tstd::cout << "It has been " << age << " years since I have first seen the world." << std::endl;\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
    </Section>

    <Section>
      <Text>
        As you can see, we can now reuse a variable as much as we want to! It is
        a very efficient way to use the same word/value over and over in
        different contexts without manually typing it over and over again.
        <br />
        <br /> Imagine if we were printing the <code>age</code> in the above
        code 10000 times and then we decided to change the value of{' '}
        <code>age</code> to <code>5</code> (because Cody just had his
        birthday!), then we only need to change one line of code, not 10000
        lines of code! Efficient, ain't it?
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\t\n\t// haha, I can write anything here and\n\t// my code will not crash. I am so\n\t// AWEEEESOOOMEEEEEE!!! :D\n\n\tstd::cout << "Hello World!";\n\t\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            The text <strong>after double slashes (//)</strong> that you see in
            the code above will not be executed because this is just a{' '}
            <strong>comment</strong>.
            <br />
            <br /> <strong>Comments</strong> are very useful as they serve as
            guides to the code especially when you want to look at your code
            again after a long time, or if someone else tries to read the code
            you've written, it would easily be understood by anyone who looks at
            it again.
            <br />
            <br /> Let's see it again in action below:
          </Text>
        }
      />
    </Section>

    <Section>
      <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
        Now, the comment with the double slashes (//) is called a{' '}
        <strong>single line comment</strong>. There's another type of comment,
        and that is the <strong>multiline comment</strong>. Check this one out:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\t\n\t/*\n\t\thaha, I can write anything here and\n\t\tmy code will not crash. I am so\n\t\tAWEEEESOOOMEEEEEE!!! :D\n\t*/\n\n\tstd::cout << "Hello World!";\n\t\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
    </Section>

    <Section>
      <Text>
        As you can see, multiline comments are done with the use of{' '}
        {/* eslint-disable-next-line */}
        <code>/*</code> and <code>*/</code>. Basically, anything in between them
        are comments so you don't have to keep on typing double slashes in each
        line of code.
        <br />
        <br /> Comments are helpful because they help explain what your code
        does. They can also be used to conceal parts of your code instead of
        erasing it completely when testing other parts of code when debugging.
        <br />
        {/* eslint-disable-next-line */}
        <br /> // Cool, we're learning!
      </Text>
    </Section>

    <Section title="Changing Variable Values">
      <Text>
        Just like in other programming languages, we can change and overwrite
        the value assigned in C++ variables as well! The only thing we have to
        do is to follow the same syntax as when declaring a variable with an
        assigned value using the assignment operator, but without typing in the
        data type anymore, like this syntax:
      </Text>
      <Code language={programmingLanguages.CPP}>variable_name = value;</Code>
      <Text>
        For example, when we want to update the age that was initially assigned
        to the variable, we can do it like this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\t\n\tint age = 4;\n\tstd::cout << "Current age: " << age << std::endl;\n\n\t// let's increase the age by 1\n\tage = 5;\n\tstd::cout << "Age a year after: " << age << std::endl;\n\n\t// let's try doing it once more!\n\tage = 6;\n\tstd::cout << "Age another year after: " << age << std::endl;\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n#include<iomanip>\n\nint main(void) {\n\t\n\tconst double PI = 3.1415926;\n\t\n\tstd::cout << "PI with only 2 decimal places: " << std::fixed << std::setprecision(2) << PI;\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
        }
        mainTextJsx={
          <>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              You can also declare constant variables as well, using the const
              keyword! Constant variables are special type of variables whose
              values can't be changed.
              <br />
              <br /> Declaring a constant variable using that follows this
              syntax:
            </Text>
            <Code language={programmingLanguages.CPP}>
              const data_type CONSTANT_NAME = value;
            </Code>
            <br />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              Usually, the naming of constants are in all capital letters to
              easily identify that the variable is indeed a constant. See this
              sample code below where we made a constant:
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
        In the above code, if we try to change the value of <code>PI</code>,
        we'll get an error. Try experimenting with it above!
        <br />
        <br /> There's another way to define constants in C++, and that is with
        the use of <strong>preprocess directives</strong>. Check this one below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n#include<iomanip>\n\n#define PI 3.1415926\n\nint main(void) {\n\t\n\tstd::cout << "PI with only 2 decimal places: " << std::fixed << std::setprecision(2) << PI;\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <Text>
        The code above works exactly the same as the previous one. The only
        difference is how we defined the constant <code>PI</code>!
      </Text>
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
            name and age.
            <br />
            <br /> Let's try that out by using variables! Set his age and first
            letter of his name, and put it together with some cliché
            introductory statements, like this:
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\t\n\tchar firstLetterOfName = 'C';\n\tint age = 4;\n\n\tstd::cout << "The first letter of my name is " << firstLetterOfName << " and I am " << age << " years old.";\n\n\treturn 0;\n}`,
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

export default Topic1;
