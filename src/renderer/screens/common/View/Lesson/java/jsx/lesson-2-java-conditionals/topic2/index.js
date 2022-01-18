import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { FunFactCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="If-Else Statements"
    titleJsx={
      <>
        <Text type={textTypes.BODY.MD}>
          And when we want to execute some statements when the conditions in the
          if evaluate to a false statement, we use the{' '}
          <strong>if-else statement</strong>, exactly like the one below.
        </Text>
        <Code language={programmingLanguages.JAVA}>
          {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tint km = input.nextInt();\n\t\tint m = 0;\n\n\t\tif(km > 0) {\n\t\t\tm = km * 1000;\n\t\t\tSystem.out.println(km + " kilometers is equivalent to " + m + " meters.");\n\t\t} else {\n\t\t\tSystem.out.println(km + " is not a positive number.");\n\t\t}\n\t}\n}`}
        </Code>
      </>
    }
  >
    <Section>
      <Text>You can even write a chain of if-else statements!</Text>
      <Code language={programmingLanguages.JAVA}>
        {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tint num = input.nextInt();\n\n\t\tif(num > 0)\n\t\t\tSystem.out.println(num + " is a positive integer.");\n\t\telse if(num < 0)\n\t\t\tSystem.out.println(num + " is a negative integer.");\n\t\telse if(num == 0)\n\t\t\tSystem.out.println(num + " is neither positive nor negative integer.");\n\t}\n}`}
      </Code>
      <Text>
        But when you look at the sample above, the last if statement is not
        necessary. If an integer is not positive nor negative, then it could
        only mean one thing! It is the integer zero. So we can remove the last
        if statement like the one below.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tint num = input.nextInt();\n\n\t\tif(num > 0)\n\t\t\tSystem.out.println(num + " is a positive integer.");\n\t\telse if(num < 0)\n\t\t\t\tSystem.out.println(num + " is a negative integer.");\n\t\telse\n\t\t\tSystem.out.println(num + " is neither positive nor negative integer.");\n\t}\n}`}
      </Code>
      <Text>
        You can even nest them! No, not the bird kind. But an if-statement
        within an if statement.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tint num = input.nextInt();\n\n\t\tif(num >= 0) {\n\t\t\tint r = num % 2;\n\t\t\tif(r == 0)\n\t\t\t\tSystem.out.println(num + " is even.");\n\t\t\telse\n\t\t\t\tSystem.out.println(num + " is odd.");\n\t\t}\n\t}\n}`}
      </Code>
    </Section>

    <Section>
      <FunFactCard
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            You can put an entire arithmetic expression in the condition part of
            the if-statement. The nested if-statement of the solution above may
            then be rewritten as <code>if(num % 2 == 0)</code> and you may omit
            the assignment of <code>num % 2</code> to <code>r</code>. What it
            will do is it will compute for <code>num % 2</code> first and then
            compare the result to <code>0</code>. This shows that the arithmetic
            operators have higher precedence over the relational operators.{' '}
            <strong>
              Use this only when you will not need the result to an operation in
              a later portion of your code
            </strong>
            .
          </Text>
        }
      />
    </Section>

    <Section>
      <Text>
        What if you want to check whether the character you entered is a digit?
        How are you going to do it? Will you subscribe to the solution below?
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tchar digit = input.next().charAt(0);\n\n\t\tif(digit == '0')\n\t\t\tSystem.out.println(digit + " is a digit!");\n\t\telse if(digit == '1')\n\t\t\t\tSystem.out.println(digit + " is a digit!");\n\t\telse if(digit == '2')\n\t\t\t\tSystem.out.println(digit + " is a digit!");\n\t\telse if(digit == '3')\n\t\t\t\tSystem.out.println(digit + " is a digit!");\n\t\telse if(digit == '4')\n\t\t\t\tSystem.out.println(digit + " is a digit!");\n\t\telse if(digit == '5')\n\t\t\t\tSystem.out.println(digit + " is a digit!");\n\t\telse if(digit == '6')\n\t\t\t\tSystem.out.println(digit + " is a digit!");\n\t\telse if(digit == '7')\n\t\t\t\tSystem.out.println(digit + " is a digit!");\n\t\telse if(digit == '8')\n\t\t\t\tSystem.out.println(digit + " is a digit!");\n\t\telse if(digit == '9')\n\t\t\t\tSystem.out.println(digit + " is a digit!");\n\t\telse\n\t\t\tSystem.out.println(digit + " is not a digit!");\n\t}\n}`}
      </Code>
      <Text>
        We know that there are 10 digits and they go from <code>'0'</code> to{' '}
        <code>'9'</code>. And notice that for every condition we have, they all
        say the same thing (at least for the 10 of them). Is there a way to
        improve our solution?
        <br />
        <br />
        <strong>Chiron Tidbit:</strong>
        <br />
        Notice that there is no <code>nextChar()</code> method for the Scanner.
        What we used instead is the <code>next()</code> method, which takes in a
        word - a string with no spaces in it. <code>next()</code> will return a
        string. And using the method <code>charAt(0)</code> gives us the
        character at index 0 (or in other words, the first character of the
        word), the character we need since the user is expected to enter just a
        character.
        <br />
        <br />
        Now, what if we ask the user to enter a character and check whether this
        character is a letter from the English alphabet? Recall that there are
        26 letters! 2 sets of this because - uppercase and lowercase. What are
        we going to do? No, what are you going to do?
        <br />
        <br />
        Notice that characters are 16 bits long and that is why we can assign
        numbers to them (read:{' '}
        <a href="https://www.ascii-code.com/" rel="noreferrer" target="_blank">
          ASCII codes
        </a>
        , including the extended ones). The ASCII codes for the digits go from
        48 to 57. The uppercase letters go from 65 to 90 and the lowercase
        letters from 97 to 122. You can then use this information!
        <br />
        <br />
        Check this guy here:
      </Text>
      <Compiler
        hasInput
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tchar ch = input.next().charAt(0);\n\n\t\tif(ch >= 65) {\n\t\t\tif(ch <= 90)\n\t\t\t\tSystem.out.println(ch + " is an uppercase letter.");\n\t\t\telse if(ch >= 97) {\n\t\t\t\t\tif(ch <= 122)\n\t\t\t\t\t\tSystem.out.println(ch + " is a lowercase letter.");\n\t\t\t\t\telse\n\t\t\t\t\t\tSystem.out.println(ch + " is not a lowercase letter.");\n\t\t\t\t} else\n\t\t\t\tSystem.out.println(ch + " is not a letter at all.");\n\t\t} else\n\t\t\tSystem.out.println(ch + " is not a letter at all.");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        If you carefully look at the conditions (nested all the way to 3
        levels), they simply check a range ([65,90] and [97,122]). Is there an
        easier way to do this?
        <br />
        <br />
        Chiron brings you to{' '}
        <strong>compound conditions and logical operators</strong>!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic2;
