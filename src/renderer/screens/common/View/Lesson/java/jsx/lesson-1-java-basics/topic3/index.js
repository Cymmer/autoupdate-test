import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import { InfoList, InfoCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="Operators"
    titleJsx={
      <Text>
        Now that we are able to store data in variables, what can we do with
        them? How can we manipulate them? Check the table below to see what’s
        being served, and hopefully this does not make you hungry from the
        training you are getting from Chiron!
      </Text>
    }
  >
    <Section title="Arithmetic Operators">
      <Text>
        Let’s start with the arithmetic operators (this means we use them with
        numerical data):
      </Text>
      <InfoList>
        <InfoCard info="Addition" syntax={['a + b']} title="+" />
        <InfoCard info="Subtraction" syntax={['a - b']} title="-" />
        <InfoCard info="Multiplication" syntax={['a * b']} title="*" />
        <InfoCard info="Division" syntax={['a / b']} title="/" />
        <InfoCard info="Modulo (remainder)" syntax={['a % b']} title="%" />
        <InfoCard
          info="Increment (a = a + 1)"
          syntax={['a++', '++a']}
          title="++"
        />
        <InfoCard
          info="Decrement (a = a - 1)"
          syntax={['a--', '--a']}
          title="--"
        />
      </InfoList>
    </Section>

    <Section title="Assignment Operators">
      <Text>This time, let’s checkout the assignment operators:</Text>
      <InfoList>
        <InfoCard code="a = 49" info="Assigns 49 to a" title="=" />
        <InfoCard
          code="a += 10"
          info="Assigns the sum of a and 10 to a(a = a + 10)"
          title="+="
        />
        <InfoCard
          code="a -= 10"
          info="Assigns the difference of a and 10 to a (a = a - 10)"
          title="-="
        />
        <InfoCard
          code="a *= 10"
          info="Assigns the product of a and 10 to a (a = a * 10)"
          title="*="
        />
        <InfoCard
          code="a /= 10"
          info="Assigns the quotient of a and 10 to a (a = a / 10)"
          title="/="
        />
        <InfoCard
          code="a %= 10"
          info="Assigns the remainder of a and 10 to a (a = a % 10)"
          title="%="
        />
      </InfoList>
      <br />
    </Section>
    <Section>
      <Text>For now, let’s focus on these only.</Text>
      <Code language={programmingLanguages.JAVA}>
        {`class Main {\n\tpublic static void main(String args[]) {\n\t\tint num;\n\t\tSystem.out.println(num);\n\n\t\tnum = 34;\n\t\tSystem.out.println(num);\n\n\t\tnum--;\n\t\tSystem.out.println(num);\n\n\t\tnum += 45;\n\t\tSystem.out.println(num);\n\n\t\tnum++;\n\t\tSystem.out.println(num);\n\n\t\tnum = num % 17;\n\t\tSystem.out.println(num);\n\n\t\tnum %= 2;\n\t\tSystem.out.println(num);\n\t}\n}`}
      </Code>
      <Text>
        When printing variables, there is no need to enclose them in double
        quotes. If we do this:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        System.out.println("num");
      </Code>
      <Text>
        then what will be printed out would be the string literal "num" and not
        the value stored in the variable <code>num</code>. When we do not
        initialize the variables in Java, the compiler will complain with an
        error telling us that the variable might not have been initialized. In
        this scenario, Java forces the variables to be initialized first before
        they can be used.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`class Main {\n\tpublic static void main(String args[]) {\n\t\tint num = 0;\n\t\tSystem.out.println(num);\n\n\t\tnum = 34;\n\t\tSystem.out.println(num);\n\n\t\tnum--;\n\t\tSystem.out.println(num);\n\n\t\tnum += 45;\n\t\tSystem.out.println(num);\n\n\t\tnum++;\n\t\tSystem.out.println(num);\n\n\t\tnum = num % 17;\n\t\tSystem.out.println(num);\n\n\t\tnum %= 2;\n\t\tSystem.out.println(num);\n\t}\n}`}
      </Code>
      <Text>
        The sample code above also demonstrates that Java allows for declaration
        at the same time definition. This means that a variable can be assigned
        an initial value while it is being declared as seen above (see{' '}
        <code>int num = 0;</code>).
        <br />
        <br /> This time, check the sample code, run it and articulate what your
        observations are.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tint num = 0;\n\t\tSystem.out.println(num = 34);\n\t\tSystem.out.println(num--);\n\t\tSystem.out.println(num + 45);\n\t\tSystem.out.println(num += 45);\n\t\tSystem.out.println (++num);\n\t\tSystem.out.println(num %= 17);\n\t\tSystem.out.println(num %= 2);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>And now, it is about time to test your "character"!</Text>
      <Code language={programmingLanguages.JAVA}>
        {`class Main {\n\tpublic static void main(String args[]) {\n\t\tchar letter = 'a', digit = '0';\n\n\t\tSystem.out.println("letter is: " + letter);\n\t\tSystem.out.println("digit is: " + digit);\n\t}\n}`}
      </Code>
      <Text>
        As you might have expected, characters are{' '}
        <strong>enclosed in single quotes</strong>. Plus some bonus! To separate
        string literals from values of identifiers, use the <strong>+</strong>{' '}
        operator (also known as a <strong>concatenation operator</strong> - more
        on this when we work with strings).
      </Text>
    </Section>

    <Section>
      <Text>
        Quick Chiron check again! Notice that the sample code below will produce
        an error. And you are right! It is adding <code>'Z'</code> to the
        variable <code>letter</code>. But also notice that assigning numbers to
        variables of type char is allowed (see <code>letter = 65;</code> and{' '}
        <code>digit = 53;</code>). The reason for that is when you add a
        character and an integer, the result might be an integer that has a
        greater value than the maximum allowable value in a <code>char</code>{' '}
        data type and you might lose some information.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tchar letter = 'a', digit = '0';\n\n\t\tletter = 65;\n\t\tdigit = 53;\n\n\t\tSystem.out.println("letter is: " + letter);\n\t\tSystem.out.println("digit is: " + digit);\n\t\tletter = letter + 'Z';\n\t\tSystem.out.println("letter is: " + letter);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
    </Section>

    <Section>
      <Text>
        Here’s to hoping that your mind is not floating elsewhere! Check this
        out. When you compile this, you should see a compilation error.
        Specifically on <code>num2</code>.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tdouble num1 = 17.4;\n\t\tfloat num2 = 99.9;\n\t\tint num3 = 103;\n\t\tSystem.out.println("num1: " + num1 + "\\nnum2: " + num2 + "\\nnum3: " + num3);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>The one below should now compile:</Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tdouble num1 = 17.4;\n\t\tfloat num2 = 99.9f;\n\t\tint num3 = 103;\n\t\t\n\t\tSystem.out.println("num1: " + num1 + "\\nnum2: " + num2 + "\\nnum3: " + num3);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        There should be something new in the println arguments: the{' '}
        <code>\n</code> (a newline escape character).
        <br />
        <br />
        A side quest: Discover all other escape characters in Java. And yet
        another side quest: try assigning the different nums with each other and
        record all observations when compiling and running them!
        <br />
        <br />
        With all this new information, there is still nothing about how to get
        input from the console.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic3;
