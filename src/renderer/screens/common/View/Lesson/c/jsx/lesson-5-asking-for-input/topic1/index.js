import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, InteractiveCompiler } from 'components/elements';
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
    title="Learn to Listen"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        After days of programming your Cody, it has finally mastered human
        speech! (with your code, of course) However, as what a human quote says,
        there is something better than speaking, and that is…what the fifth
        chapter is about, which you opened and read aloud: <br />
        <br />
        "Speaking is one great human ability, but in order to live a harmonious
        life together in the human world, it would be strange if every human
        would just talk and do nothing else, right? That is why, as social
        beings, there is also another important ability that lets them
        understand other human beings – listening. And luckily, we have just the
        thing that we need in C: the <strong>scanf() function</strong>."
      </Text>
    }
  >
    <Section title="The Syntax">
      <Text>
        The <strong>scanf()</strong> function works just like listening to
        another person in human sense, such that, it receives what the other
        person says. Similarly, in C, this function will allow the user to type
        in a specific data that is asked by the program. We shall also remember
        that since this is a standard input function, it will need the
        preprocessor directive, <code>{`#include<stdio.h>`}</code> for it to
        work.
        <br />
        <br />
        By convention, we must create a variable that will store the value to be
        inputted using the scanf() function. After creating the variable that
        will serve as the container, we can now use the scanf function by
        following this syntax:
      </Text>
      <Code language={programmingLanguages.C}>
        scanf("placeholder", &variableName);
      </Code>
      <Text>
        The syntax presented above looks like a printf() function using
        placeholders, right? It does actually function quite similarly, since
        the placeholder is dependent on the data type of the variable that it is
        representing. The biggest difference, however, is that the variable that
        is meant to replace the placeholder{' '}
        <strong>must have an ampersand (&)</strong> before typing in the
        variable name in order to store the inputted value to it.
        <br />
        <br />
        The ampersand symbol (&), also known as the{' '}
        <strong>address operator</strong>, plays the most important role in this
        process as it allows the scanf() function to access the address of the
        variable, locate it, and store the value that will inputted by the user
        into the variable.
        <br />
        <br />
        See this example below:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    // declare the variable to be used in the scanf function first\n    int num;\n\n    // and then use it in scanf() to receive the inputted value!\n    printf("Enter a number: ");\n    scanf("%d", &num);\n\n    // now let's see if the value is really stored inside the variable:\n    printf("The inputted number is %d", num);\n\n    return 0;\n}`,
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
        Upon running the code above, type in any integer value, press the ENTER
        key on your keyboard, and see the output.
      </Text>
      <br />
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    int num1;\n    char letter;\n\n    // put spaces in between %d and %c or in any placeholder when \n    // taking multiple inputs, ALWAYS.\n    printf("Enter a number and a letter (separate them by a space): ");\n    scanf("%d %c", &num1, &letter);\n\n    // let's see if it stored the values in the right variables\n    printf("Number: %d, Letter: %c", num1, letter);\n\n    return 0;\n}`,
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
              You can also take multiple inputs in one line using the scanf
              function! Well, it actually works just the same way, but with more
              than one placeholder and variables separated by space, like this
              syntax!
            </Text>
            <Code language={programmingLanguages.C}>
              scanf("placeholder1 placeholder2 placeholder3", &varname1,
              &varname2, &varname3);
            </Code>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              Taking multiple inputs in one line doesn't have to be of the same
              data type. Just don't forget to also type it with spaces too in
              the input area for the compiler to distinguish which is which, and
              oh, take note of the arrangement of inputs as well to avoid errors
              and miscalculations on your code!
              <br />
              <br />
              Moreover, if you are planning to take multiple inputs in one line,
              especially of data type int and char, always remember to put
              spaces in between its placeholders inside the scanf() function to
              avoid mistakenly storing values when inputting your code. Spaces
              are characters as well, so if we do not put a space to separate
              the two, the program might think that the character to be stored
              is the space that you inputted to separate with the former value,
              which might cause mistakes in your program. So, remember to put
              spaces to separate placeholders in your code, okay?
              <br />
              <br />
              Let's try it out with the code below:
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
            present to! <br />
            <br />
            To keep the real name as a secret when handing out presents, a code
            name is given to each person, which comprises of their favorite
            letter and the day they were born. And for this task, I want Cody to
            spearhead on this human-like celebration! <br />
            <br />
            Now, in order for Cody to ask for something, we use the scanf()
            function! But we are going to take on two things: a
            letter(character), and a number (integer).
            <br />
            <br />
            Now, let's try it out!
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    char letter;\n    int day;\n\n    printf("Enter your favorite letter: ");\n    scanf("%c", &letter);\n\n    printf("Enter the day you were born: ");\n    scanf("%d", &day);\n\n    printf("Your codename is: %c-%d", letter, day);\n\n    return 0;\n}`,
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
        <SampleProblemCard number={2} title="Quadratic Equation">
          <Text>
            In algebra, one of the basic things that a student has to know is to
            evaluate values, and this time, I want Cody to evaluate the value of
            y in a quadratic equation y = ax^2 + bx + c. <br />
            <br />
            Now, in order to solve this problem, we have to take four inputs
            from the user – the values of a, b, c, and x, respectively, in one
            line only, and it has to be an integer. <br />
            <br />
            I've already prepared a simple code for you. You think you can do
            better?
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n#include<math.h>\n\nint main(void) {\n    int a, b, c, x;\n\n    printf("Enter the values of a, b, c, and x: ");\n    scanf("%d %d %d %d", &a, &b, &c, &x);\n\n    int y = a*pow(x, 2) + b*x + c;\n\n    printf("%d", y);\n\n    return 0;\n}`,
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
