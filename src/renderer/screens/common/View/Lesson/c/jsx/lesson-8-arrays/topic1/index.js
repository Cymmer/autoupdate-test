import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, InteractiveCompiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { FunFactCard } from 'components';
import IntroImage from './intro-image.png';
import Infographic from './infographic.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';
import Image from '../../../../Image';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="How to Make an Array"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody has learned a lot of things that humans usually do – from speaking,
        to listening, to mastering strings and numbers, deciding for itself, and
        even on repeating things efficiently. But to complete the package of
        skills that will allow him to become perfectly ready to blend into human
        society, he has to learn one last basic concept. You then opened the
        instruction manual to its final chapter and read: <br />
        <br />
        "You are finally close to preparing Cody for the human world and also
        close to being a real C programmer! Now, we shall talk of one of the
        most important concepts in C that will be instrumental in making
        efficient programs and in optimizing Cody to function better as a
        human-like kid. When humans want to jot down things and store them for
        reuse in the future, they often write it down as a list of items.
        Similarly, in order to store strings or numbers as a group in order, we
        have to get hold of C's flexible multi-container of values:{' '}
        <strong>arrays</strong>."
      </Text>
    }
  >
    <Section title="What's an Array?">
      <Text>
        As far as we have known, when we want to store multiple values of the
        same data type in a program, we can just have some remedy by making
        multiple variables to store each of them. For example, if we want to
        store 100 values, then we need to create 100 variables. <br />
        <br />
        However, it would be unimaginable to do so if we have to store a hundred
        of values in one sitting, right? What's more, it would also cause a big
        headache when maintaining the code when we have to change something from
        each of the values. This is where arrays enter the scene to solve this
        type of problem.
        <br />
        <br />
        An <strong>array</strong> is basically an ordered collection of values
        having the same data type. It functions like a big container, which has
        sub-containers that store each value that is put inside it, and has a
        fixed size once declared in the program. Since it is an ''ordered"
        collection of values, each value has its own index positions inside the
        array where it belongs to, with the position number starting from 0
        until one less than the array size (last_index = array_size - 1), in
        ascending order.
        <br />
        <br />
        Therefore, we can think of arrays as something like this one:
      </Text>
      <Image alt="Array Graph" src={Infographic} />
      <Text>
        As you can see, in the above array, its size is 8, its first index is 0,
        and its last index is 7 (again, last_index = array_size - 1, therefore,
        last_index = 8 - 1).
      </Text>
    </Section>

    <Section title="Making an Array">
      <Text>
        In C, arrays are created by declaring it just like a normal variable,
        but with an addition of the array size beside the variable name. To
        illustrate, the most common way to make an array is by doing this:
      </Text>
      <Code language={programmingLanguages.C}>data_type arrayName[size];</Code>
      <Text>
        So for example, if you want to create an integer array that can hold 5
        values, you can do so like this:
      </Text>
      <Code language={programmingLanguages.C}>int myArray[5];</Code>
      <Text>
        However, you can also make an array and assign it with its initial
        values as well! Just put the values inside a pair of braces ({}) and
        separate it with commas (,). Going back to the integer array above, if
        we want to set initial values, we can do it like this:
      </Text>
      <Code language={programmingLanguages.C}>
        {`int myArray[5] = {4, -2, -10, 4, 0};`}
      </Code>
      <Text>
        Note that the size of the array put inside the square brackets must
        always be a positive integer and the number of values to be put inside
        an array <strong>must not go beyond its size</strong>.
      </Text>
    </Section>

    <Section title="Data Types of an Array">
      <Text>
        Unlike other programming languages that allow data type flexibility on
        its arrays, C is data type-specific, meaning, all values that are put
        inside an array must be of the same data type as the array itself.
        <br />
        <br />A C array can be an ordered group of numbers, with its data type
        either in int, long int, float, or double. When initializing these
        values in an array, we can just simply write it as the normal array
        initialization, like these examples below:
      </Text>
      <Code language={programmingLanguages.C}>
        {`int numArr[10] = {-1, 2, -3, 4, -5, 6, -7, 8, -9, 0};\nfloat numArr2[5] = {3.14, 9,8, 10.5, 0.4, -23.23};`}
      </Code>
      <Text>
        On the other hand, arrays could also be an ordered group of characters,
        commonly known as a string, with data type char. Arrays of this data
        types can also be initialized using the same method as with numbers,
        only that each characters must be enclosed with single quotes, like
        this:
      </Text>
      <Code language={programmingLanguages.C}>
        {`char stringArr[10] = {'C','o','d','y'};`}
      </Code>
      <Text>
        However, since these are considered strings, it could also be
        initialized by simply assigning it to a string of text{' '}
        <strong>enclosed with double quotes</strong> and it will work the same
        way as the former, like this:
      </Text>
      <Code language={programmingLanguages.C}>
        char stringArr[10] = "Cody";
      </Code>
      <Text>
        The size of the char array above is just its max capacity. Hence, it can
        hold strings with lesser lengths than the size. It is important to take
        good notice of this in order to prevent errors.
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <>
            <InteractiveCompiler
              initialSourceCodes={[
                {
                  code: `#include<stdio.h>\n\nint main(void) {\n    char fullName[200];\n\n    printf("Enter your full name: ");\n    fgets(fullName, 200, stdin);\n\n    puts(fullName);\n\n    return 0;\n}`,
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
                  programming_language: {
                    id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
                  },
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
            />
            <br />
            <Text>
              Since both are still standard input and output functions, these
              also require the preprocessor directive, #include{`<stdio.h>`}.
            </Text>
          </>
        }
        mainTextJsx={
          <>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              For strings (array of characters), there are two special input and
              output functions that are made just for this data type. These are
              fgets (a.k.a file-get-string) and puts (a.k.a put-string).
              <br />
              <br />
              The input function, <strong>fgets()</strong>, specializes in
              taking string inputs. This helps take care of the errors that
              might happen when using scanf() for getting the string, especially
              when the text you type in contains spaces. fgets() follows this
              syntax:
            </Text>
            <Code language={programmingLanguages.C}>
              fgets(arrName, size, stdin);
            </Code>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              In here, fgets() need to have three things inside its parentheses:
              the array name, its allocated size, and how it's going to be taken
              as; in this case, it's stdin(standard input) which meant using the
              keyboard for taking in the string value.
              <br />
              <br />
              <strong>puts()</strong>, on the other hand, is an output function
              made especially for string values, as it would directly print out
              the entire string inside the array just by putting in the name of
              the array inside its parentheses. However, it also allows direct
              string printing just like printf(). puts() follows this syntax:
            </Text>
            <Code language={programmingLanguages.C}>
              {`puts(arrName);\nputs("string text");`}
            </Code>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              The only difference between printf() and puts() when printing out
              strings, is that puts() generates a new line after the end of the
              string it prints out by default, and you can't use placeholders or
              type anything else inside the puts() function.
              <br />
              <br />
              To test out these amazing string functions for input and output,
              let's try using those in real code, like this code below. Type
              your full name and press the ENTER key on your keyboard.
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <>
            <InteractiveCompiler
              initialSourceCodes={[
                {
                  code: `#include<stdio.h>\n#include<string.h>\n\nint main(void) {\n    char fullName[200];\n\n    printf("Enter your full name: ");\n    fgets(fullName, 200, stdin);\n\n    // since you can't type anything else using puts(), \n    // you can print something else together with the array this way\n    // using printf():\n    printf("\\nFull name: %s", fullName);\n    printf("Length: %d", strlen(fullName));\n\n    return 0;\n}`,
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
              As you have noticed in the code above, we used printfs and the
              string's placeholder: %s. This comes in handy when we want to
              combine messages with strings in one single print statements.
            </Text>
          </>
        }
        mainTextJsx={
          <>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              If an array is a string, you can also get its length by simply
              using the function strlen()! This is a string function found in
              the {'<string.h>'} library that allows you to generate the length
              of the string array! It follows this syntax:
            </Text>
            <Code language={programmingLanguages.C}>strlen(arrName);</Code>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              Just remember to put in <code>#include{`<string.h>`}</code>{' '}
              together with the other preprocessor directives that you need in
              order for this function to work. There are a whole lot more that
              this library can give you, so go ahead and search for other
              functions inside this library, too! Maybe it'll come in handy
              soon.
              <br />
              <br />
              Let's try this code to see how strlen() works!
            </Text>
          </>
        }
      />
    </Section>
  </TopicContainer>
);

export default Topic1;
