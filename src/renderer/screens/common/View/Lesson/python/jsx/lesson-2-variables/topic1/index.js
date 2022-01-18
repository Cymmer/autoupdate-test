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

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="No Dead Airs"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Just a few days ago, your Cody acquired its human-like speaking ability!
        But what would happen if the robot is prompted to speak about common
        things, like its name? Wandering in thoughts, you took the manual from
        your side and began reading the second chapter. Starting off, it says:
        "Being able to speak is one thing that makes a robot close to being
        human, but to speak instantly on basic things like its name, age, or an
        answer to a yes/no question, without taking too much time for such a
        thing, takes your robot to the next level at being human-like. But this
        cannot be achieved by merely typing in the data manually (that’s
        exhausting, you know), so this calls for the help of the "containers" of
        data in Python – <strong>variables.</strong>"
      </Text>
    }
  >
    <Section title="Assignment Operator">
      <Text>
        Variables are objects that are used to store values. As an object, they
        act as containers or buckets where the data will be put into and stored.
        However, unlike other programming languages that can declare a variable
        without initializing it first, Python’s variables only exist if it is
        initialized by a value when declaring for the first time. Declaring a
        variable uses this kind of syntax:
      </Text>
      <Code language={programmingLanguages.PYTHON}>varName = value</Code>
      <Text>
        In the code above, varName refers to the variable name (which can be
        whatever as long as you stick to the rules of naming), followed by an
        equals sign (=), and finally the value that is to be stored into the
        variable. The single equal sign is the most important symbol when
        assigning a value to a variable, whichever data type it may be, because
        it is what assigns the value to a variable. In technical terms, we call
        it an <strong>assignment operator</strong>.
        <br />
        <br />
        To get a clearer view on how to declare variables, let us take this one
        for example:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`botName = "Cody"\nprint(botName)\nprint(botName)\nprint(botName)`}
      </Code>
      <Text>
        Also, as you can see, we can now reuse a variable as much as we want to!
        It is a very efficient way to use the same word over and over in
        different contexts without typing the word manually!
        <br />
        <br /> And what’s more, if you ever decide to change the name on
        thousand lines of code, you will only change the value of the variable,
        and not each statement now! Efficient, ain’t it?
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `botName = "Cody"\nprint("My name is", botName)\ndescription = "the cutest"\nprint(botName, description)`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            You can actually put together texts and variables on a print()
            statement! Just follow the same syntax when printing normal
            statements, and when you want to insert the value of the variable in
            your text, just put a comma after the text or number, and then the
            name of the variable afterwards. This works when putting together
            variables, too! <br />
            <br /> Just remember that printing variables using comma will
            generate a space on the text where the comma goes after. Try this
            out for example:
          </Text>
        }
      />
    </Section>

    <Section title="Redeclaration">
      <Text>
        Just like in other programming languages, we can change and overwrite
        the value of the variable too by redeclaring it!
        <br />
        <br /> To overwrite variable values, just follow the same syntax when
        declaring it for the first time, and remember to use the name of the
        existing variable for reassignment of values. <br />
        <br />
        Take this as an example:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`bot = "Cody"\nprint(bot)\n#now reassign the variable to a new value to change the value!\nbot = "Awesome Cody"\nprint(bot)`}
      </Code>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <>
            <Compiler
              initialSourceCodes={[
                {
                  code: `#this is a one-line comment\n#you can do this if you prefer hashtags to make comments\nbot = "Cody"\nprint(bot)\n\n''' but if you wish to do multi-line comments\nwithout typing in hashtags per line,\nutilize a pair of triple quotation marks\nlike these. '''`,
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
            />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              <br />
              Use these as guides to your code to document it and avoid
              confusion and rereading the code when you wish to use it again for
              long-term use in the future!
            </Text>
          </>
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            Do you know what the one-line sentence which start with a hashtag
            (#) do in the code we ran above? They are used as{' '}
            <strong>comments</strong> ! These are lines of code that will not be
            executed by the program, but serve a purpose for programmers to
            document their code for better maintenance. This will come in handy
            when you want to look at your code again and forget what it was
            supposed to do. Hence, with comments, you can easily read and
            identify what the code does, without much confusion!
            <br />
            <br />
            There are two ways to make comments in a program: Hashtags (#) for
            one-line comments and a pair of triple quotation marks (‘ or ") for
            multi-line messages.
            <br />
            <br /> To illustrate, here is a demonstration of how they work:
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
                code: `bot = "Cody"\nprint(bot)\nbot = 1234\nprint(bot)`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            What’s great about Python is that it does not restrict a variable to
            hold data types that are different from when it was initialized! So,
            even if you initialized it with a string value first, you can still
            reassign it to an integer, float, or even just a character without
            any errors!
            <br />
            <br /> Run this one to see Python’s data type flexibility shine!
          </Text>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="First Day of Class">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            Let’s think about the time when Cody will now be able to blend in
            with humans, and speak just like a human kid. Since children of its
            age (from the time it was created) needs to go to school, we need to
            let it prepare for its introductory message on the start of classes!
            <br />
            <br /> Let’s try that out by using variables! Set his name and age,
            and put it together with some cliché introductory statements, like
            this:
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `botName = "Cody"\nage = 5\nprint("My name is", botName, "and I am", age, "years old.")`,
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
                code: `botName = "Cody"\nage = 5\nprint("My name is %s and I am %d years old." % (botName, age))`,
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
