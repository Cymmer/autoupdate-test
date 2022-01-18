import React from 'react';

import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import { getFileName } from 'codechum-app-utils';
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
        instruction manual to its final chapter and read:
        <br />
        <br />
        "You are finally close to preparing Cody for the human world and also
        close to being a real C++ programmer! Now, we shall talk of one of the
        most important concepts in C++ that will be instrumental in making
        efficient programs and in optimizing Cody to function better as a
        human-like kid. When humans want to jot down things and store them for
        reuse in the future, they often write it down as a list of items.
        Similarly, in order to store strings or numbers as a group in order, we
        have to get hold of C++'s flexible multi-container of values:{' '}
        <strong>arrays</strong>."
      </Text>
    }
  >
    <Section title="What's an Array?">
      <Text>
        As far as we have known, when we want to store multiple values of the
        same data type in a program, we can just have some remedy by making
        multiple variables to store each of them. However, it would be
        unimaginable to do so if we have to store a hundred of values in one
        sitting, right? What's more, it would also cause a big headache when
        maintaining the code when we have to change something from each of the
        values. This is where arrays enter the scene to solve this type of
        problem.
        <br />
        <br /> An <strong>array</strong> is basically an ordered collection of
        values having the same data type. It functions like a big container,
        which has sub-containers that store each value that is put inside it,
        and has a fixed size once declared in the program. Since it is an
        "ordered" collection of values, each value has its own "index positions"
        inside the array where it belongs to, with the position number starting
        from 0 until one less than the array size (array_size - 1), in ascending
        order.
        <br />
        <br /> Therefore, we can think of arrays as something like this one:
      </Text>
      <Image alt="Array Graph" src={Infographic} />
    </Section>

    <Section title="Making an Array">
      <Text>
        In C++, arrays are created by declaring it just like a normal variable,
        but with an addition of the array size beside the variable name. To
        illustrate, the most common way to make an array is by doing this:
      </Text>
      <Code language={programmingLanguages.CPP}>
        data_type arrayName[size];
      </Code>
      <Text>
        The data_type above is just the same data_type as of a normal variable
        (e.g. it can be <code>int</code>, <code>double</code>, <code>bool</code>
        , etc.). Similarly, the arrayName is also the same as of a normal
        variable. The only difference is the size part which basically indicates
        how many elements/items/values the array can hold. For example, the
        array in the code below has a size 5 so it can hold 5 elements.
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`#include<iostream>\n\nint main(void) {\n\t// we just declared an array here of size 5\n\tint myArray[5];\t\n\n\treturn 0;\n}`}
      </Code>
      <Text>
        Now, the array we declared above has no initial values (i.e. it has a
        size of 5 but initially, it is empty because there are no values inside
        it). You can also make an array and assign it with its initial values as
        well! Just put the values inside a pair of braces ({`{}`}) and separate
        it with commas (,), like this:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`#include<iostream>\n\nint main(void) {\n\t// we just declared an array here of size 5\n\t// but this time, with initial values\n\tint myArray[5] = {20, 24, 31, 22, 28};\t\n\n\treturn 0;\n}`}
      </Code>
      <Text>
        Note that the size of the array put inside the square brackets must
        always be a positive integer and the number of values to be put inside
        an array must not go beyond its size for good programming practice.
      </Text>
    </Section>

    <Section title="Data Types of an Array">
      <Text>
        Unlike other programming languages that allow data type flexibility on
        its arrays, C++ is data type-specific, meaning, all values that are put
        inside an array must be of the same data type as the array itself.
        <br />
        <br /> A C++ array can be an ordered group of numbers, with its data
        type either in <code>int</code>, <code>float</code>, or{' '}
        <code>double</code>. When initializing these values in an array, we can
        just simply write it as the normal array initialization, like these
        examples below:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`int numArr[10] = {-1, 2, -3, 4, -5, 6, -7, 8, -9, 0};\nfloat numArr2[5] = {3.14, 9,8, 10.5, 0.4, -23.23};`}
      </Code>
      <Text>
        On the other hand, arrays could also be an ordered group of characters,
        commonly known as a string, with data type <code>char</code>. Arrays of
        this data type can also be initialized using the same method as with
        numbers, only that each characters must be enclosed with single quotes,
        like this:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`char charArr[10] = {'C', 'o', 'd', 'y', '\\0'};`}
      </Code>
      <Text>But take a look at that last character above, what is that?</Text>
    </Section>

    <Section title="Strings">
      <Text>
        The <code>'\0'</code> you saw above is a{' '}
        <strong>null terminating character</strong>. But before we talk about
        it, let's talk about strings first.
        <br />
        <br /> A <strong>string</strong> is simply a sequence of characters. To
        create a string, we need to have multiple <code>char</code>'s or in
        other words, a <code>char</code> array.
        <br />
        <br /> Strings however are special because they need to have a{' '}
        <strong>null terminating character</strong> at the end. Basically, the
        null terminating character is a special type of character which
        represents the end of the string. Every time we create a string using
        the first method of creating a string (that is, using a{' '}
        <code>char</code> array), we need to add a null terminating character at
        the end. Always remember that!
        <br />
        <br /> Oh I said "first method" because there's a second method (and
        even a third!). The second method is still by using a <code>
          char
        </code>{' '}
        array but instead of manually adding all the characters, you just simply
        place the whole string content instead inside double quotes, like this:
      </Text>
      <Code language={programmingLanguages.CPP}>char name[10] = "Cody";</Code>
      <Text>
        With that method above, you don't need to add a null terminating
        character at the end because it'll be automatically added for you. Also,
        just to reiterate, with the second method, you need to use{' '}
        <strong>double quotes</strong>, not <strong>single quotes</strong>{' '}
        because single quotes are for characters, not strings.
        <br />
        <br /> Now there's a third method in C++ which involves another library,
        the <code>string</code> library.
      </Text>
    </Section>

    <Section title="The string Library">
      <Text>
        The <code>string</code> library contains functions that are related to
        strings (obviously!). To create a string using the string library, you
        need to include the library first before you can create one. Here's how
        it looks like:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`#include<string>\n\nint main(void) {\n\tstd::string name1 = "Cody";\n\tstd::string name2 = "Jude";\n\n\treturn 0;\n}`}
      </Code>
      <Text>
        As you can see, it's almost the same with the second method of creating
        a string (the one where we used the <code>char</code> array and used
        double quotes). So why do we nee to go through the hassle?
        <br />
        <br /> The reason is because there are a lot of other{' '}
        <b>helper functions</b> inside the <code>string</code> library that we
        can make use of to process the strings. Here are some of them:
      </Text>
      <br />
      <Text>
        <strong>int length()</strong>
        <br />
        <br /> Returns the length of a string. Example:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n#include<string>\n\nint main(void) {\n\tstd::string sentence = "CodeChum is awesome!";\n\t\n\tint length = sentence.length();\n\tstd::cout << length;\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        <strong>bool empty()</strong>
        <br />
        <br /> Checks whether the string is empty or not. Example:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n#include<string>\n\nint main(void) {\n\tstd::string sentence = "";\n\t\n\tif(sentence.empty() == true) {\n\t\tstd::cout << "The sentence is EMPTY";\n\t} else {\n\t\tstd::cout << "The sentence is NOT EMPTY";\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        <strong>int compare(string str2)</strong>
        <br />
        <br /> Compare two string objects. If the caller of the{' '}
        <code>compare</code> function is "less than" the passed second string{' '}
        <code>str2</code>, it will return <code>-1</code>. If it is "greater
        than" the passed second string <code>str2</code>, it will return{' '}
        <code>1</code>. If they're equal, it'll return <code>0</code>. This is a
        very helpful function in sorting strings or to check if strings are
        equal or not. Example:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n#include<string>\n\nint main(void) {\n\tstd::string word1 = "coding";\n\tstd::string word2 = "programming";\n\t\n\tif(word1.compare(word2) == -1) {\n\t\tstd::cout << "word1 is lesser than word2";\n\t} else if(word1.compare(word2) == 1) {\n\t\tstd::cout << "word1 is greater than word2";\n\t} else if(word1.compare(word2) == 0) {\n\t\tstd::cout << "word1 is equal to word2";\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        Try playing around the <code>compare</code> function in the sample code
        above by changing the values of <code>word1</code> and{' '}
        <code>word2</code>.
        <br />
        <br /> To end this section, we will talk about how to take user string
        inputs. So far, in all of the three methods above, what we've done is
        initialize them immediately after declaring them. But what if we take
        some string input/s, say for example, taking in the name of the user? We
        do it like this:
      </Text>
      <Compiler
        initialCustomInput="Cody"
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tstd::string name;\n\t\n\tstd::cin >> name;\n\n\tstd::cout << "Name: " << name;\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        Now, the code above works but it only works if the name or string input
        is one word. If the input consists of multiple words, it'll only take in
        the first word. To solve that issue, we use the <code>getline</code>{' '}
        function from the <code>string</code> library, just like this:
      </Text>
      <Compiler
        initialCustomInput="Cody Chum"
        initialSourceCodes={[
          {
            code: `#include<iostream>\n#include<string>\n\nint main(void) {\n\tstd::string name;\n\t\n\t// this will take in all the words of the input\n\tstd::getline(std::cin, name);\n\n\tstd::cout << "Name: " << name;\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
    </Section>
  </TopicContainer>
);

export default Topic1;
