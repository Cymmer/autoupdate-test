import React from 'react';
import { Link } from 'react-router-dom';

import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import { FunFactCard, SampleProblemList, SampleProblemCard } from 'components';
import { getFileName } from 'codechum-app-utils';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="Learn to Listen"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        After days of programming your Cody, it has finally mastered human
        speech! (with your code, of course) However, as what a human quote says,
        there is something better than speaking, and that is…what the fifth
        chapter is about, which you opened and read aloud:
        <br />
        <br /> "Speaking is one great human ability, but in order to live a
        harmonious life together in the human world, it would be strange if
        every human would just talk and do nothing else, right? That is why, as
        social beings, there is also another important ability that lets them
        understand other human beings – listening. And luckily, we have just the
        thing that we need in C++: the <strong>std::cin function</strong>."
      </Text>
    }
  >
    <Section title="The Syntax">
      <Text>
        The <code>std::cin</code> function works just like listening to another
        person in human sense, such that, it receives what the other person
        says.
        <br />
        <br /> Similarly, in C++, this function will allow the user to type in
        or input a specific data that is asked by the program. We shall also
        remember that since this is a standard input function, it will need the
        preprocessor directive, <code>{`#include<iostream>`}</code> for it to
        work.
        <br />
        <br /> By convention, we must create a variable that will store the
        value to be inputted using the <code>std::cin</code> function. After
        creating the variable that will serve as the container, we can now use
        the <code>std::cin</code> function by following this syntax:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`std::cin >> variable_name;`}
      </Code>
      <Text>
        The syntax presented above looks like a <code>std::cout</code> function
        except that the arrows are going the other direction. Recall that{' '}
        <code>std::cout</code> looks like this:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`std::cout << variable_name;`}
      </Code>
      <Text>
        The difference between the two, however, is that <code>std::cin</code>{' '}
        gets a value from the user and stores it to the variable while{' '}
        <code>std::cout</code> gets the value of the variable and prints/outputs
        it to the screen.
        <br />
        <br /> On most compilers that have terminals to run the code real-time,
        the <code>std::cin</code> function will only end once the user pushes
        the ENTER key in the keyboard and then proceed to the next lines of
        code. However, CodeChum's coding environment works differently, since
        our compiler requires you to type in your custom inputs first in the
        input area before you run the code for it to work as you expect it to
        be.
        <br />
        <br /> To explain further on CodeChum's input mechanism, here's a simple
        guide example on how it works:
      </Text>
      <Compiler
        initialCustomInput="24"
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\t// declare the variable to be used in the std::cin function first\n\tint num;\n\n\t// and then use it in std::cin to receive the inputted value\n\tstd::cin >> num;\n\n\t// now let's see if the value is really stored inside the variable\n\tstd::cout << "The inputted number is: " << num;\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        Try changing the value in the Custom Input above and run the code again.
        You should see that the output also changed based on the new value you
        placed on the Custom Input. Cool right?
        <br />
        <br /> If you want to experiment and explore on CodeChum's way of taking
        inputs, you can write your own code that takes some inputs in our{' '}
        <Link target="_blank" to="/playground">
          Playground!
        </Link>
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialCustomInput="20 24 J"
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tint num1, num2;\n\tchar letter1;\n\n\t// let's take in two integer inputs\n\tstd::cin >> num1 >> num2;\n\t\n\t// and a char input\n\tstd::cin >> letter1;\n\n\t// now let's print all the values we just inputted\n\tstd::cout << "Number1: " << num1 << std::endl;\n\tstd::cout << "Number2: " << num2 << std::endl;\n\tstd::cout << "Letter1: " << letter1 << std::endl;\n\n\treturn 0;\n}`,
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
              You can also take multiple inputs in one line using the{' '}
              <strong>std::cin</strong> function! Well, it actually works just
              the same way, but with more than one variable like this:
            </Text>
            <Code language={programmingLanguages.CPP}>
              {`std::cin >> variable_name1 >> variable_name2 >> variable_name3;`}
            </Code>
            <br />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              Taking multiple inputs in one line doesn't have to be of the same
              data type. Just don't forget to also type it with spaces too in
              the input area for the compiler to distinguish which is which. And
              oh, take note of the arrangement of inputs as well to avoid errors
              and miscalculations on your code!
              <br />
              <br /> Let's try applying this with the code below:
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Code Names">
          <Text>
            Have you ever heard of Manito Manita? On Christmas parties, human
            kids like to give presents to their classmates but to give some
            mystery and surprise, they like to randomly select who they give a
            present to!
            <br />
            <br /> To keep the real name as a secret when handing out presents,
            a code name is given to each person, which comprises of their
            favorite letter and the day they were born. And for this task, I
            want Cody to spearhead on this human-like celebration!
            <br />
            <br /> Now, in order for Cody to ask for something, we use the{' '}
            <strong>std::cin</strong> function! But we are going to take on two
            things: a letter (character), and a number (integer).
            <br />
            <br /> Now, let's try it out!
          </Text>
          <Compiler
            initialCustomInput={`C\n4`}
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tchar letter;\n\tint num;\n\t\n\tstd::cin >> letter >> num;\n\n\tstd::cout << "Your codename is: " << letter << "-" << num;\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
        </SampleProblemCard>
        <SampleProblemCard number={2} title="Quadratic Equation">
          <Text>
            In algebra, one of the basic things that a student has to know is to
            evaluate values, and this time, I want Cody to evaluate the value of
            y in a quadratic equation y = ax^2 + bx + c.
            <br />
            <br /> Now, in order to solve this problem, we have to take four
            inputs from the user – the values of a, b, c, and x, respectively,
            in one line only, and it has to be an integer.
            <br />
            <br /> I've already prepared a simple code for you. Take a look
            this:
          </Text>
          <Compiler
            initialCustomInput="1 2 -1 2"
            initialSourceCodes={[
              {
                code: `#include<iostream>\n#include<cmath>\n\nint main(void) {\n\tint a, b, c, x;\n\n\tstd::cin >> a >> b >> c >> x;\n\n\tint y = (a * pow(x, 2)) + (b * x) + c;\n\n\tstd::cout << y;\n\n\treturn 0;\n}`,
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
