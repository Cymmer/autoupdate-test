import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic5 = () => (
  <TopicContainer
    image={IntroImage}
    number={5}
    title="Strings"
    titleJsx={
      <>
        <Text type={textTypes.BODY.MD}>
          The reason why strings have not been discussed yet is because strings
          are objects in Java. And that is why we had to postpone it a bit.
          <br />
          <br />
          <strong>Strings</strong> are used to hold data that involve more than
          one character. Samples would be names, exactly the names that we need
          for the <code>Person</code> Labour check below. Strings can be
          constructed in two ways. The first one is by assigning a literal
          string to it:
        </Text>
        <Code language={programmingLanguages.JAVA}>
          {`String <stringVariableName> = "<literal_string>";`}
        </Code>
        <Text>The other one is through the new operator:</Text>
        <Code language={programmingLanguages.JAVA}>
          {`String <stringVariableName> = new String("<literal_string>");`}
        </Code>
      </>
    }
  >
    <Section>
      <Text>Check the a sample main that works with strings below:</Text>
      <Compiler
        initialCustomInput={`I love CodeChum!\nWohoo!`}
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\npublic class Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\n\t\tString st1 = "This is a sample string";\n\n\t\tString st2 = input.nextLine(); // gets an entire line including spaces\n\n\t\tString st3 = input.next(); // gets a word only (no spaces included)\n\n\t\tSystem.out.println("st1: " + st1 + " length: " + st1.length());\n\t\tSystem.out.println("st2: " + st2 + " length: " + st2.length());\n\t\tSystem.out.println("st3: " + st3 + " length: " + st3.length());\n\n\t\tchar ch = st1.charAt(6);\n\t\tSystem.out.println("character at index 6 of st1: " + st1.charAt(6));\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        Since strings are objects then they have operations or methods. One of
        these is the length. It returns the number of characters found in the
        string. To access a character at a specific index, the method is{' '}
        <code>charAt(int)</code> as shown above. The first character of a string
        is found at index 0.
        <br />
        <br />
        Note that String objects in Java are <strong>immutable</strong>. This
        means that there is no way to replace the characters in a given string
        object.{' '}
        <i>
          Read on{' '}
          <a
            href="https://docs.oracle.com/javase/7/docs/api/java/lang/StringBuffer.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            StringBuffer
          </a>{' '}
          and see how this is related to String
        </i>
        .
      </Text>
    </Section>
    <Section>
      <Text>
        <strong>Still a Labour side trip:</strong> Let’s count how many
        lowercase vowels the string has.
      </Text>
      <Compiler
        initialCustomInput="I love CodeChum!"
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\npublic class Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\t\t\n\t\t// read a string\n\t\tString st = input.nextLine();\n\t\t\n\t\t// since we haven't started counting yet, the\n\t\t// initial vowel count is 0\n\t\tint vowelCount = 0;\n\t\t\n\t\t// we loop through all the indices of the string starting\n\t\t// from index 0 up to index length - 1 (hence, i < len)\n\t\tfor(int i = 0, len = st.length(); i < len; i++) {\n\t\t\t\n\t\t\t// get the current character at the current index\n\t\t\tchar ch = st.charAt(i);\n\t\t\t\n\t\t\t// check if the current character is either of the vowels\n\t\t\t// if it is, increase the vowel count by 1\n\t\t\tif(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')\n\t\t\t\tvowelCount++;\n\t\t}\n\t\t\n\t\t// output the total number of vowels\n\t\tSystem.out.println("Number of vowels in " + st + ": " + vowelCount);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        This time, let’s check whether the string is composed of digits only.
      </Text>
      <Compiler
        initialCustomInput="12388223K23312"
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\npublic class Main {\n\tpublic static void main(String [] args){\n\t\tScanner input = new Scanner(System.in);\n\t\t\n\t\t// read a string\n\t\tString st = input.nextLine();\n\t\t\n\t\t// we assume that a current string is only\n\t\t// composed of digits\n\t\tboolean digitsOnly = true;\n\t\t\n\t\t// and then we try to disprove that by going through\n\t\t// all of its characters and finding a non-digit\n\t\t// character\n\t\tfor(int i = 0, len = st.length(); i < len; i++) {\n\t\t\tchar ch = st.charAt(i);\n\t\t\t\n\t\t\t// if the current character is not between the\n\t\t\t// character '0' and '9', then it is not a digit\n\t\t\tif(!(ch >= '0' && ch <= '9')) {\n\t\t\t\tdigitsOnly = false;\n\t\t\t\t\n\t\t\t\t// it is very important that if we already found\n\t\t\t\t// a non-digit character, we immediately break\n\t\t\t\t// from the loop because there is no point in\n\t\t\t\t// going through the rest of the characters of\n\t\t\t\t// the string\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t\t\n\t\tif(digitsOnly)\n\t\t\tSystem.out.println(st + " is composed of digits only.");\n\t\telse\n\t\t\tSystem.out.println(st + " has characters other than digits.");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
    </Section>

    <Section>
      <Text>
        Labour side trip done! For now, these information are enough to handle
        the strings we need for <code>Person</code>.
        <br />
        <br />
        Check the initial version of class <code>Person</code> here:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public class Person {\n\tString firstName;\n\tString middleName;\n\tString lastName;\n\tchar gender;\n\tint age;\n\tint height;\n\tint weight;\n}`}
      </Code>
      <Text>
        <strong>Labour sidequest:</strong> Improve the initial class{' '}
        <code>Person</code> below. You are to:
        <ul>
          <li>
            determine the different access modifiers for each of the attributes
            of a <code>Person</code>
          </li>
          <li>determine the constructor/s</li>
          <li>
            redo <code>gender</code> and create an enumeration for it.
          </li>
          <li>
            create enumerations for <code>age</code> as well (underage, legal
            age - 21 and above)
          </li>
          <li>
            add a BMI status instance variable and create an enumeration for it
            (underweight, normal weight, overweight, obese)
          </li>
          <li>
            create getters and setters depending on the access modifiers of the
            attributes have been defined
          </li>
          <li>
            create a method that checks whether a <code>Person</code> may join a
            full marathon. A person may join a full marathon only when his BMI
            is normal and he is of legal age.
          </li>
        </ul>{' '}
        Once you're done improving the <code>Person</code> class, play around
        with it inside the main method in Main.java.
        <br />
        <br />
        Don't skip this one, you only get better at this by practicing. Go
        forth!
        <br />
        <br />
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class Person {\n\tString firstName;\n\tString middleName;\n\tString lastName;\n\tchar gender;\n\tint age;\n\tint height;\n\tint weight;\n}`,
            file_name: 'Person',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `public class Main {\n\tpublic static void main(String args[]) {\n\t\t\n\t\t// play around with the Person class you\n\t\t// made by creating instances of it\n\t\t\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
    </Section>
  </TopicContainer>
);

export default Topic5;
