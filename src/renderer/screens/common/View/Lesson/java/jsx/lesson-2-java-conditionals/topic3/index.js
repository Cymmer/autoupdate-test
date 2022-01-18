import React from 'react';

import { Text, Code } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { FunFactCard } from 'components';
import IntroImage from './intro-image.png';
import NotTable from './not-table.png';
import OrTable from './or-table.png';
import AndTable from './and-table.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';
import Image from '../../../../Image';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="Compound Conditions and Logical Operators"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Logical operators make it possible for multiple conditions to be
        combined depending on the result you desire! There are essentially{' '}
        <strong>three logical operators</strong> in Java, and these are the
        NOT(!), AND (&&), and OR (||).
        <br />
        <br />
        These operators take in boolean values as operators. Check the truth
        tables below.
      </Text>
    }
  >
    <Section title="Logical Operators">
      <Text>
        The not (!) operator is a unary logical operator and simply negates its
        value as shown below:
      </Text>
      <Image alt="Not Table" src={NotTable} />
      <br />
      <br />
      <Text>
        The OR (||) operator is a binary logical operator and returns true if{' '}
        <strong>at least one of the operands is true</strong>, false otherwise.
      </Text>
      <Image alt="Or Table" src={OrTable} />
      <br />
      <br />
      <Text>
        The AND (&&) operator is a binary logical operator and returns true when
        <strong>all the operands are true</strong>, false otherwise.
      </Text>
      <Image alt="And Table" src={AndTable} />
      <br />
      <br />
      <Text>
        Armed with this new knowledge, we can now improve our solutions to the
        digit and letter problems.
        <br />
        <br />
        <strong>The digits:</strong>
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tchar digit = input.next().charAt(0);\n\n\t\tif(digit == '0' || digit == '1' || digit == '2' || digit == '3' ||\n\t\t   digit == '4' || digit == '5' || digit == '6' || digit == '7' ||\n\t\t   digit == '8' || digit == '9')\n\t\t\tSystem.out.println(digit + " is a digit.");\n\t\telse\n\t\t\tSystem.out.println(digit + " is not a digit.");\n\t}\n}`}
      </Code>
      <Text>Or a better solution would be:</Text>
      <Code language={programmingLanguages.JAVA}>
        {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tchar digit = input.next().charAt(0);\n\n\t\tif(digit >= 48 && digit <= 57)\n\t\t\tSystem.out.println(digit + " is a digit.");\n\t\telse\n\t\t\tSystem.out.println(digit + " is not a digit.");\n\t}\n}`}
      </Code>
      <Text>
        <strong>The uppercase and lowercase letters:</strong>
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tchar ch = input.next().charAt(0);\n\n\t\tif(ch >= 65 && ch <= 90)\n\t\t\tSystem.out.println(ch + " is an uppercase letter.");\n\t\telse if(ch >= 97 && ch <= 122)\n\t\t\t\tSystem.out.println(ch + " is a lowercase letter.");\n\t\telse\n\t\t\tSystem.out.println(ch + " is not a letter at all.");\n\t}\n}`}
      </Code>
      <Text>
        But what if you are not familiar with the ASCII codes? No worries. You
        can use the characters themselves. Why? Because they are 16-bit values.
        That means they are numbers!
        <br />
        <br />
        Check the new solution below.
      </Text>
      <Text>
        <strong>The digits (revised):</strong>
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tchar digit = input.next().charAt(0);\n\n\t\tif(digit >= '0' && digit <= '9')\n\t\t\tSystem.out.println(digit + " is a digit.");\n\t\telse\n\t\t\tSystem.out.println(digit + " is not a digit.");\n\t}\n}`}
      </Code>
      <Text>
        <strong>The uppercase and lowercase letters (revised):</strong>
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tchar ch = input.next().charAt(0);\n\n\t\tif(ch >= 'A' && ch <= 'Z')\n\t\t\tSystem.out.println(ch + " is an uppercase letter.");\n\t\telse\n\t\t\tif(ch >= 'a' && ch <= 'z')\n\t\t\t\tSystem.out.println(ch + " is a lowercase letter.");\n\t\telse\n\t\t\tSystem.out.println(ch + " is not a letter at all.");\n\t}\n}`}
      </Code>
      <Text>
        And if you were simply checking whether <code>ch</code> is a letter,
        check this one below:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tchar ch = input.next().charAt(0);\n\n\t\tif(ch >= 'A' && ch <= 'Z' || ch >= 'a' && ch <= 'z')\n\t\t\tSystem.out.println(ch + " is a letter.");\n\t\telse\n\t\t\tSystem.out.println(ch + " is not a letter at all.");\n\t}\n}`}
      </Code>
      <Text>
        Notice that the solution above mixes the logical operators. Here, we can
        see that && has higher precedence than ||. You can also use the
        parentheses to group conditions just like this one:
      </Text>
      <Code
        language={programmingLanguages.JAVA}
      >{`if((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))`}</Code>
      <Text>
        This did not change the meaning of the previous version{' '}
        <strong>
          but employ the use of parentheses every time you wish to group
          compound conditions and let the || be executed first like the one
          below:
        </strong>
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`if((ch == 'A' || ch == 'a') && (digit == '4' || digit <= '8'))`}
      </Code>
      <Text>
        In the case of the above, the ||s will be checked first and the
        resulting boolean values will be ANDed. Whew! That was a close call.
        Uncle Hades, almost.
      </Text>
    </Section>
    <Section>
      <FunFactCard
        mainTextJsx={
          <Text>
            Single | and single & are also used as logical operators in Java.
            They behave very much like the || and the &&. There’s a difference
            though. || and && have short-circuit behaviors. For the ||, when the
            first condition is true, the second condition is no longer checked
            since it will not matter, anyway. Remember, with ||,{' '}
            <strong>if at least one condition is true</strong>, then the entire
            compound condition evaluates to true. The same can be said of &&. If
            the first condition is false, then the second condition is no longer
            checked, since, again, it will not matter. Remember, with &&,{' '}
            <strong>when at least one condition is false</strong>, then the
            entire compound condition evaluates to false. For | and &, no such
            short-circuit behavior exists.
          </Text>
        }
      />
    </Section>
  </TopicContainer>
);

export default Topic3;
