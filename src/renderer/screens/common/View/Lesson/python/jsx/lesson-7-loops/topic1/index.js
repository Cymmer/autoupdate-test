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

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="Counting"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        At this point, Cody is now able to freely "decide on his own" with your
        application on conditional statements! Now we shall move on to making
        repetitive movements and decisions. In search for the next mission, you
        turned to the second-last chapter of the manual, which read: <br />
        <br />
        "Being able to make decisions on its own is now easy with what you’ve
        learned so far, and I bet you’re thinking that he’s ready to blend in
        with humans now, but don’t you wonder how he can repeat something
        quickly? Until now, the only way you can program him to do so is by
        duplicating statements manually and it works just fine; just not when it
        has to be repeated a hundred times. To easily repeat statements requires
        our program to use a function in Python that can perform repetitions at
        a given condition, and that is what we call as loops. There are a lot of
        types of looping structures, though, and we will tackle the first one
        that deals with repeating steps for a fixed number of times:{' '}
        <strong>
          <i>for</i> loops
        </strong>
        ."
      </Text>
    }
  >
    <Section title="For Loop Syntax">
      <Text>
        Loops are like car wheels – they continue to turn around unless the
        driver steps on the brake when it arrives the destination, pauses for a
        stoplight, or suddenly stops when a dog unexpectedly walks in front of
        the car. On the same light, loops in Python work the same way like the
        wheels in which certain steps are done repeatedly until a certain
        condition is no longer met, or until a given sequence of numbers is
        finished.
        <br />
        <br /> There are two types of loops that are available in Python: the
        for loop and while loop. Each loop works differently in some ways and
        are used for different purposes as well. To start off, we shall talk
        about the first type – for loop. <br />
        <br />
        <strong>For loops</strong> repeat a given set of code until a sequence
        of numbers is finished. This works well when starting to count off from
        a certain number until another, and is commonly used when having to loop
        a set of instructions for a fixed number of times. <br />
        <br />
        For loop follows this syntax:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`for each_element in givenValue:\n\t# Lines of code`}
      </Code>
      <Text>
        Where the givenValue can be a group of text (string) or a range of
        numbers (range) and each_element represents each element belonging to
        the givenValue.
        <br />
        <br />
        For strings, when it is iterated in the for loop, the elements that are
        to be accessed from the string represent the characters present in the
        string, in increasing index position from 0 to the len(string) – 1.
        Therefore, in a string "Cody", for every call made until the end of the
        string, the element variable will be assigned with the value ‘C’, then
        ‘o’, then ‘d’, and finally, ‘y’. <br />
        <br />
        For example, when you want to cheer someone in a cliché way of shouting
        each letter of its name, you can do it in this way:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`name = "Cody"\n\nprint(name[0].upper() + "!")\nprint(name[1].upper() + "!")\nprint(name[2].upper() + "!")\nprint(name[3].upper() + "!")`}
      </Code>
      <Text>
        But with loops using string values, you can quickly do it this way, with
        lesser lines of code:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`name = "Cody"\n\nfor letters in name:\n\tprint(letters.upper() + "!")`}
      </Code>
      <Text>Efficient, ain’t it?</Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `name = "Cody"\n\nfor letters in name:\n\tprint(letters)`,
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
              Just like declaring variables, you can actually name the
              representation of elements in a loop whatever you want (and since
              it’s like variable declaration, you also have to take not of
              naming restrictions)! Just make sure that it would make sense in
              your code to know what it is about. <br />
              <br />
              So when you have a string containing a name on it and you want to
              loop through the letters belonging to it, you can name the element
              accessing representation anything, like a or b, like this:
            </Text>
            <Code language={programmingLanguages.PYTHON}>
              {`name = "Cody"\n\nfor a in name:\n\tprint(a)`}
            </Code>
            <Text>
              But for you to easily identify what you are trying to access when
              you read the code, you can use <strong>letters</strong> or{' '}
              <strong>c</strong> (short term for character) as the element
              accessor of the string instead! Either way, it works the same way
              with the other one. <br />
              <br />
              See for yourself!
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <Text>
        However, when the given value is a range of numbers, the element to be
        accessed per iteration represents the numbers given by the range()
        function. The range function can be used in three ways:
      </Text>
      <InfoList>
        <InfoCard
          info="Contains elements from 0 to end_num-1 (has an increment of 1 by default)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          title="range(end_num)"
        />
        <InfoCard
          additionalInfo="By default, the two ways of using the range function will always have an increment of 1. So, if you want to change how much it will increase (or even decrease), try using the next way of using the range function."
          info="Contains elements from start_num to end_num-1 (has an increment of 1 by default)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          title="range(start_num, end_num)"
        />
        <InfoCard
          info="Contains elements from start_num to end_num-1, incremented by n for every iteration"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          title="range(start_num, end_num, n)"
        />
      </InfoList>
      <br />
      <Text>
        To elaborate, when you want to count from 0 to 20, with an increment of
        2, you can work your way out by tiring yourself out copy-pasting 10
        lines of print statements like this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`print(0)\nprint(2)\nprint(4)\n…\nprint(20)`}
      </Code>
      <Text>
        But now, by using the range function and the for loop syntax, we can do
        it effortlessly like this!
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`for num in range(0,21,2):\n\tprint(num)`}
      </Code>
    </Section>

    <Section>
      <Text>
        Always remember that the end number of range() will not be included in
        the count, so for it to loop until 20, we add one to it instead. Hence,
        we used 21 as the ending number of the range function.
      </Text>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialCustomInput="Cody"
            initialSourceCodes={[
              {
                code: `word = input()\ntext = "" #use this to concatenate the letters in inner loop\nfor letters in word:\n\tfor i in range(3):\n\t\ttext += letters\nprint(text)`,
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
              You can also perform a loop inside a loop too! These are what we
              call as nested loops, where the inner loop(s) acts as an egg that
              is enclosed by the outer loop which acts as a nest to the inner
              loop(s).
              <br />
              <br /> This method is incredibly useful when testing two sequences
              of strings or numbers and performing operations on them.
              <br />
              <br /> It follows the following syntax:
            </Text>
            <Code language={programmingLanguages.PYTHON}>
              {`for each_element in givenValue:\n\t# Lines of code (optional)\n\tfor each_element in givenValue:\n\t\t# Lines of code\n\t\t# Lines of code`}
            </Code>
            <Text>
              This works just like a normal loop, but the difference is that the
              inner loop must be executed first before re-looping the outer
              loop. Therefore, the outer loop can only repeat the lines of code
              inside it when the inner loop is done executing its own. <br />
              <br />
              For example, let us try printing the letters of a word for three
              times and store it in a string to print it in just one line, like
              this:
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `for i in range(6):\n\tprint(i)\nelse:\n\tprint("The loop ends here.")`,
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
              When you want to execute some lines of code when the for loop’s
              condition becomes false, we can also use an else statement to do
              so! This is pretty useful when it is required to print out
              something to signify that it is the end of the code or when the
              code falsifies.
              <br />
              <br /> It follows the same syntax for a for loop, but with an
              additional else statement like this:
            </Text>
            <Code language={programmingLanguages.PYTHON}>
              {`for each_element in givenValue:\n\t# Lines of code\n\t# Lines of code\nelse:\n\t# Lines of code\n\t# Lines of code`}
            </Code>
            <Text>Try it out here!</Text>
          </>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Multiples of 5">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.MD}
          >
            Cody’s teacher handed out an assignment about identifying the
            multiples of 5 from 1 to 50. Now, I need you to make Cody’s math
            struggles a little easier to handle with your new knowledge on
            loops. <br />
            <br />
            To do that, we have to have loops, with conditions inside it! When
            Cody finds out that a number is a multiple of 5, he prints it.{' '}
            <br />
            <br />
            Let’s try this now!
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `for i in range(1,51):\n\tif i % 5 == 0:\n\t\tprint(i)`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
          <br />
          <Text>
            You could actually use the third way of using the range function and
            have an increment of 5, and it will also produce the same result!
            (and there are many more solutions, discover it!)
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `for i in range(5,51,5):\n\tprint(i)`,
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
