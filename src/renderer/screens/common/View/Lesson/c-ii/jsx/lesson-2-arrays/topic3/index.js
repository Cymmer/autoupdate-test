import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import { FunFactCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="Strings"
    titleJsx={
      <>
        <Text>
          What we have seen so far are arrays of integers and double values. Is
          it possible to have an array of characters? Of course! Let’s start by
          checking the codes down below.
        </Text>
        <Compiler
          initialSourceCodes={[
            {
              code: `#include<stdio.h>\n\nint main() {\n\tchar st[5]; \n\n\tst[0] = 'h';\n\tst[1] = 'e';\n\tst[2] = 'l';\n\tst[3] = 'l';\n\tst[4] = 'o';\n\n\tprintf("%c %c %c %c %c\\n", st[0], st[1], st[2], st[3], st[4]);\n\n\treturn 0;\n}\n`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
        />
        <br />
        <Text>
          Simply change the data type of the array to char from int. Looking at
          the code above, we can see that an array of characters is no different
          from the array of ints except that the elements are characters and so
          they have to be enclosed in the single quotes. The format specifier
          used in the <code>printf()</code> is <code>%c</code> for character. An
          array of characters is called a <strong>string</strong>.
        </Text>
      </>
    }
  >
    <Section>
      <Text>Let’s take a look at the next piece of code down below.</Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tchar st[] = {'h', 'e', 'l', 'l', 'o'};\n\n\tprintf("%c %c %c %c %c\\n", st[0], st[1], st[2], st[3], st[4]);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        This is similar to initializing an array of integers but this time using
        character literals. The size of <code>message</code> here is 5.
        <br />
        <br />
        In C, there is a <code>%s</code> format specifier. This is used for
        strings only. Instead of printing the characters one by one in the
        <code>printf()</code> function, we can use <code>%s</code> and print the
        string as one entity. This is illustrated below.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tchar st1[] = {'h', 'e', 'l', 'l', 'o'};\n\tchar st2[5]; \n\n\tst2[0] = 'w';\n\tst2[1] = 'o';\n\tst2[2] = 'r';\n\tst2[3] = 'l';\n\tst2[4] = 'd';\n\tprintf("st1: %s\\nst2: %s\\n", st1, st2);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Upon running the code above, we should see some weird characters
        printed. Try this next one.
      </Text>
      <Compiler
        initialCustomInput="world"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tchar st1[] = "hello";\n\tchar st2[10];\n\n\t// scan a string and store it to 'st2'\n\tscanf("%s", st2); \n\n\tprintf("st1: %s\\nst2: %s\\n", st1, st2);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Notice that the weird unknown characters are no longer printed or
        displayed with st1 and st2. Take note of the <code>scanf()</code> as
        well. Recall that <code>scanf()</code> requires a memory location where
        the input has to be stored.
        <br />
        <br />
        The names of arrays (both numerical arrays and strings) hold the memory
        address of the first element of the array. In short, array names are
        pointers (this is will be discussed in detail on the next lesson). For
        now, suffice to say that pointers are types of data that can hold memory
        addresses only. Hence, the <code>scanf()</code> didn’t fail.
        <br />
        <br />
        Strings are a special kind of array. The <code>%s</code> format
        specifier in <code>printf()</code> looks for the{' '}
        <strong>string terminator character</strong> (a character that
        symbolizes the end of the string has been reached) so it knows when to
        stop printing. This string terminator is the <code>NULL</code> character
        represented by <code>'\0'</code>.
        <br />
        <br />
        Using the <code>%s</code> with scanf automatically adds{' '}
        <code>'\0'</code> at the end of the string. Declaring the string{' '}
        <code>st1</code> through a string literal (a sequence of characters
        enclosed in double quotes) also automatically inserts <code>\0</code> at
        the end of the string. As a consequence, the size of <code>st1</code> is
        6 instead of 5. The additional size is from the <code>'\0'</code>{' '}
        character.
        <br />
        <br />
        Knowing all this, by redoing it as demonstrated below, we can solve the
        problems that the additional element could cause.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tchar st1[] = {'h', 'e', 'l', 'l', 'o', '\\0'};\n\tchar st2[6]; \n\n\tst2[0] = 'w';\n\tst2[1] = 'o';\n\tst2[2] = 'r';\n\tst2[3] = 'l';\n\tst2[4] = 'd';\n\tst2[5] = '\\0';\n\tprintf("st1: %s\\nst2: %s\\n",st1, st2);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Notice that we intentionally increased the size of <code>st2</code> to 6
        so we can accommodate the string terminator. The same goes for{' '}
        <code>st1</code>.
        <br />
        <br />
        In an array of integers, we have to explicitly know the size of the
        array. With strings, it is possible to go through the elements one by
        one and when <code>'\0'</code> is encountered, we can stop. Also note
        that the size of the string may be 100 for instance, but the actual
        number of characters present in the string is less than 100. For
        example, look at the code below.
      </Text>
      <Code language={programmingLanguages.C}>
        {`#include<stdio.h>\n\nint main() {\n\tchar st1[20] = "hope";\n\tint i;\n\t\n\tfor(i = 0; i < 20; i++) {\n\t\tprintf("%c ", st1[i]);\n\t}\n\n\treturn 0;\n}\n`}
      </Code>
      <Text>
        Although the size of <code>st1</code> is 20, <code>"hope"</code> is only
        4 characters. What will <code>printf()</code> display from the supposed
        5th character all the way to the 20th?
        <br />
        <br />
        We will use <code>'\0'</code> to go through the string <code>st1</code>.
        Recall that when strings are taken from standard input or initialized
        with literal strings, the compiler inserts <code>'\0'</code> at the end
        of the string. So let’s use this information.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tchar st[20] = "hope";\n\tint i;\n\n\tfor(i = 0; st[i] != '\\0'; i++) {\n\t\tprintf("%c ", st[i]);\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        What the loop above does is it goes through the elements of the{' '}
        <code>st</code> and prints it one by one, stopping only when the
        character of <code>st</code> at index <code>i</code> is{' '}
        <code>'\0'</code>.
        <br />
        We call <code>i</code> (after the execution of the loop) the length of
        the string.
        <br />
        <br />
        Since <code>"hope"</code> is 4 letters long, then its length is 4. 20 on
        the other hand is the size of the <code>st</code> - the maximum capacity
        or maximum number of characters the string can contain. The last
        character of the string is found at index <code>length - 1</code>.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tchar st[20] = "hope";\n\tint i;\n\n\tfor(i = 0; st[i] != '\\0'; i++);\n\n\tprintf("The length of %s is %d.\\n", st, i);\n\t\t\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        There is a function called <code>strlen()</code> that accepts a string
        as an argument and returns the length of the string. It is found in the
        <code>string.h</code> library.
        <br />
        <br />
        See the example below where we use the <code>strlen()</code> function to
        get the length of the string, and then use this length to go through all
        the characters of the string:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n#include<string.h>\n\nint main() {\n\tchar st[20] = "hope";\n\tint length = strlen(st);\n\t\n\t// we go through from index 0 until\n\t// 'length - 1' of the string\n\tfor(int i = 0; i < length; i++) {\n\t\tprintf("%c ", st[i]);\n\t}\n\t\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Now, with our knowledge on how to get the length of the strings, let’s
        try a more advanced problem. Given a string, let’s count the occurrences
        of vowels.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n#include<string.h>\n\nint main() {\n\tchar st[20] = "hope";\n\tint length = strlen(st);\n\tint countOfVowels = 0;\n\n\tfor(int i = 0; i < length; i++) {\n\t\tif(\n\t\t\tst[i] == 'a' || \n\t\t\tst[i] == 'e' || \n\t\t\tst[i] == 'i' || \n\t\t\tst[i] == 'o' || \n\t\t\tst[i] == 'u'\n\t\t) {\n\t\t\tcountOfVowels++;\n\t\t}\n\t}\n\n\tprintf("There are %d vowels in %s.", countOfVowels, st);\n\t\t\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        This one below checks whether the string inputted is composed of digits
        only.
      </Text>
      <Compiler
        initialCustomInput="1424321"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tchar st[100];\n\n\t// this is a "flag" (or boolean) variable\n\t// which holds either 1 or 0. If its value\n\t// is 1, that means that all the characters\n\t// in the string are digits. If its value\n\t// is 0, that means that NOT ALL the characters\n\t// in the string are digits.\n\tint areAllDigits = 1;\n\n\t// scan for a string input\n\tscanf("%s", st);\n\n\tfor(int i = 0; st[i] != '\\0'; i++) {\n\t\t// if the current character is within '0' to '9',\n\t\t// let's continue so that the code below this\n\t\t// won't be performed\n\t\tif(st[i] >= '0' && st[i] <= '9') {\n\t\t\tcontinue;\n\t\t}\n\t\t\n\t\tareAllDigits = 0;\n\t\tbreak;\n\t}\n\n\t// in C, any number that is not 0 is considered true.\n\t// Hence, if 'areAllDigits' never changed (i.e. it has\n\t// always been 1), we don't need to do 'areAllDigits == 1'\n\t// because again, since it's not 0, it already means true\n\tif(areAllDigits) {\n\t\tprintf("%s is composed of digits only!\\n", st);\n\t} else {\n\t\tprintf("%s has characters other than digits!\\n", st);\n\t}\n\n\treturn 0;\n}\n`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        The argument <code>{`(st[i] >= '0' && st[i] <= '9')`}</code> checks if
        <code>st[i]</code> is any of the digits from <code>'0'</code> to{' '}
        <code>'9'</code>. Notice that the 0 and 9 are in between two' and that
        means that these are not int values but are char values. This works
        because characters have a set ASCII values based on the ASCII table, and
        anything with the value below <code>'0'</code>
        and above <code>'9'</code> is not a number.
        <br />
        <br />
        Instead of checking the non-digit characters one by one, and there are
        so many of them, we can simply check if the character is a digit. If it
        is, we do a <code>continue</code> so that the <code>areAllDigits</code>{' '}
        flag’s value won’t be changed to 0.
        <br />
        <br />
        <code>areAllDigits</code> above is used as a flag. Initially, it is
        assumed that st is composed of digits only. But once the solution
        encounters a non-digit, it sets <code>areAllDigits</code> to false and
        then breaks from the loop. Afterwards, it prints the appropriate
        message.
      </Text>
    </Section>

    <Section>
      <FunFactCard
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            You could also use the <code>isDigit()</code> function from the{' '}
            <code>ctype.h</code> library to check whether the character is a
            digit or not
          </Text>
        }
      />
    </Section>
  </TopicContainer>
);

export default Topic3;
