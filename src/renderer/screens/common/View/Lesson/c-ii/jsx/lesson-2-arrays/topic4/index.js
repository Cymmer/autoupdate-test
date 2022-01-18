import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Compiler } from 'components/elements';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';
import Infographic1 from './infographic-1.png';
import Infographic2 from './infographic-2.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';
import Image from '../../../../Image';

const Topic4 = () => (
  <TopicContainer
    image={IntroImage}
    number={4}
    title="Problem Solving With Arrays"
    titleJsx={
      <>
        <Text type={textTypes.HEADING.XS}>
          'Palindrome' is not a Palindrome
        </Text>
        <Text type={textTypes.BODY.MD}>
          When a string is spelled backwards and it produces the same string, it
          is called a <strong>palindrome</strong>. In order for this to be
          solved, two indices have to be used: one that starts from the left
          (index 0) that continually increases and the other starts from the
          right (index <code>length-1</code>) that continually decreases.
          <br />
          <br />
          We check whether the characters at these indices are the same
          character. If they are not, then obviously it is not a palindrome. The
          loop terminates and displays the appropriate message. If the
          characters are the same, we check further if the next characters match
          as well. This repeats until the first half of characters are checked
          against the second half of characters. Then and only then can we
          conclude that the string is a palindrome.
        </Text>
      </>
    }
  >
    <Section>
      <Compiler
        initialCustomInput="madam"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n#include<string.h>\n\nint main() {\n\tchar st[100];\n\t\n\t// assume that st is a palindrome (1 - palindrome, 0 - not a palindrome)\n\tint isPalindrome = 1;\n\n\t// scan for the string\n\tscanf("%s",st);\n\tint length = strlen(st);\n\n\tfor(\n\t\t// i is the left index while\n\t\t// j is the right index\n\t\tint i = 0, j = length-1; \n\t\ti < j; \n\t\ti++, j--\n\t) {\n\t\t\n\t\t// if the character at the left is not the\n\t\t// same with the character at the right,\n\t\t// then this is not a palindrome so we set the\n\t\t// 'isPalindrome' flag to 0 and break from the loop\n\t\tif(st[i] != st[j]) {\n\t\t\tisPalindrome = 0;\n\t\t\tbreak;\n\t\t}\n\n\t}\n\n\tif(isPalindrome) {\n\t\tprintf("%s is a palindrome.\\n", st);\n\t} else {\n\t\tprintf("%s is not a palindrome\\n", st);\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Let’s use this code to check some words and find out if they’re a
        palindrome or not!
        <br />
        <br />
        First off is the word 'LEVEL'.
      </Text>
      <Image alt="LEVEL" src={Infographic1} />
      <Text>
        Based on the trace above, when <code>i</code> is now equal to{' '}
        <code>j</code>, the iteration or loop terminates. Notice that when this
        is the case, we are inspecting the same character. There is, then, no
        need to check this. This is always the case when the length of the
        palindrome is odd, which is the case for the word 'LEVEL' which, as
        we’ve seen by using the code above, is a palindrome.
        <br />
        <br />
        Next up is the word 'HANNAH'
      </Text>
      <Image alt="HANNAH" src={Infographic2} />
      <Text>
        In a similar manner, the trace above terminates when{' '}
        <code>{`i < j`}</code> evaluates to false. This happens when{' '}
        <code>i</code> and <code>j</code> cross values as shown in the image
        above. This always happens when the length of the palindrome is even. As
        can be seen, 'HANNAH' is also a palindrome!
      </Text>
    </Section>

    <Section title="He is Mi and I am Yu (String Comparison)">
      <Text>
        One of the most common string operations is to compare whether two
        strings are the same string. This is especially helpful with username
        and password authentications. The username and password in the database
        must match the username and password provided by the user as inputs.
        <br />
        <br />
        This is accomplished through character by character comparison. It is
        not as straightforward as comparing two numbers where the equality check
        is simply used. It should be also obvious that two strings with
        different lengths are never the same string. Check out our solution
        below.
      </Text>
      <Compiler
        initialCustomInput={`dummystring\ndummystring`}
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n#include<string.h>\n\nint main(){\n\tchar st1[50], st2[50];\n\t\n\t// areEqual is a flag variable again\n\tint areEqual = 1;\n\n\tscanf("%s%s", st1, st2);\n\n\tint length1 = strlen(st1);\n\tint length2 = strlen(st2);\n\n\tif (length1 == length2) {\n\t\t// if they have the same length, we now check\n\t\t// if all characters are equal. Also note that\n\t\t// in the condition below, we can either use\n\t\t// 'i < length1' or 'i < length2' because they\n\t\t// are just the same\n\t\tfor(int i = 0; i < length1; i++) {\n\n\t\t\t// if the current characters of both strings\n\t\t\t// are not equal, set the flag to 0 and break\n\t\t\t// immediately because they are not equal\n\t\t\tif (st1[i] != st2[i]) {\n\t\t\t\tareEqual = 0;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t} else {\n\t\tareEqual = 0;\n\t}\n\n\n\tif(areEqual) {\n\t\tprintf("They are the same string!\\n");\n\t} else {\n\t\tprintf("They are not the same string!\\n");\n\t}\n\t\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
    </Section>

    <Section title="The ol’ Switcheroo">
      <Text>Let’s start by trying to run the code down below.</Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tchar st1[50] = "Hello Philippines";\n\tchar st2[50] = "and Hello World!";\n\n\tst1 = st2;\n\n\tprintf("%s %s\\n", st1, st2);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        It is expected that we will get an "unassignable" error. Copying one
        string to another has to be done character by character. This also means
        that we have to make sure that the source string is shorter in size
        (capacity and not length of the string) than the destination string.
        These issues are resolved in the working example down below.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\t// the source string\n\tchar st1[50] = "Hello Philippines";\n\n\t// the destination string\n\tchar st2[50];\n\t\n\tint i;\n\tfor(i = 0; st1[i] != '\\0'; i++) {\n\t\tst2[i] = st1[i];\n\t}\n\n\t// never forget the string terminator at\n\t// the end of the string\n\tst2[i] = '\\0'; \n\n\tprintf("%s is copied from %s.\\n", st2, st1);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Now that we know how the basics of character and int arrays, we can now
        move on to pointers!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic4;
