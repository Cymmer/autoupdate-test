import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import { FunFactCard, InfoList, InfoCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic4 = () => (
  <TopicContainer
    image={IntroImage}
    number={4}
    title="Taking Inputs"
    titleJsx={
      <>
        <Text>Chiron says "Meet Scanner."</Text>
        <Code language={programmingLanguages.JAVA}>
          {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\t// Creates an object of Scanner\n\t\tScanner input = new Scanner(System.in);\n\n\t\t// Takes input, specifically an int, from the console\n\t\tint num = input.nextInt();\n\n\t\t// Takes input, specifically a string, from the console\n\t\tString name = input.nextLine();\n\n\t\t// Prints the inputted number\n\t\tSystem.out.println("The number is: " + num);\n\n\t\t// Prints the inputted string\n\t\tSystem.out.println("Your name is: " + name);\n\n\t\t// Closes the scanner\n\t\tinput.close();\n\t}\n}`}
        </Code>
      </>
    }
  >
    <Section>
      <Text>
        Whether you use the <code>scanf</code> or <code>cin</code> from C/C++,
        one thing is for sure before being able to use them. They are predefined
        functions from a library readily available for you. In Java, the magic
        word is <code>import</code> and packages are imported. In this case, the{' '}
        <code>java.util</code> package where the <code>Scanner</code> is found.
        <br />
        <br />
        Packages in Java are simply a way to put together a group of related
        classes and Java has quite a number of packages for your use. They will
        be introduced as we go along this journey (not all of them, there's just
        too many!).
        <br />
        <br />
        Check the table below for an array of all the things we can get with
        Scanner!
      </Text>
    </Section>

    <Section title="Scanner Methods">
      <InfoList>
        <InfoCard info="Reads an int value" title="nextInt()" />
        <InfoCard info="Reads a float value" title="nextFloat()" />
        <InfoCard info="Reads a double value" title="nextDouble()" />
        <InfoCard info="Reads a short value" title="nextShort()" />
        <InfoCard info="Reads a long value" title="nextLong()" />
        <InfoCard info="Reads a byte value" title="nextByte()" />
        <InfoCard info="Reads a boolean value" title="nextBoolean()" />
        <InfoCard info="Reads a string value" title="nextLine()" />
        <InfoCard
          info="Reads a word (a string without spaces)"
          title="next()"
        />
      </InfoList>
    </Section>

    <Section>
      <FunFactCard
        mainTextJsx={
          <Text>
            Values bigger than long values and double have a special place in
            Java? They are <code>BigInteger</code> and <code>BigDecimal</code>,
            respectively. Use them when you know the values you will need will
            go beyond <code>long</code> and <code>double</code>, respectively.
            And yes, <code>Scanner</code> has methods exactly for these two. And
            you guessed it again, they are <code>nextBigInteger()</code> and{' '}
            <code>nextBigDecimal()</code>.
          </Text>
        }
      />
    </Section>

    <Section>
      <Text>
        <br />
        Ready for a treat? Here is an actual program that does an actual labour
        (almost).
      </Text>
      <Compiler
        initialCustomInput="20"
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\n\t\tint km = input.nextInt();\n\n\t\tint m = km * 1000;\n\n\t\tSystem.out.println(km + " kilometers is equivalent to " + m + " meters.");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <Text>
        The text area below the code area is where you're supposed to type your
        input! Currently, there's a value in there 20. You can change it to any
        number you want. Just make sure it is an integer because in the code,
        it's looking for an integer (<code>input.nextInt()</code>). Don't be
        afraid to test it out.
      </Text>
    </Section>
    <Section>
      <Text>
        At this point, you are probably wondering what keyword <code>new</code>{' '}
        is seeing that you are new to Java. Hold your horses, we are going to
        get to that, that’s a promise (oh, this is from a different language!)
        <br />
        <br />
        Sometimes, we all crave for that ability to be able to control
        everything! Maybe we want to skip (not sessions from the training,
        unfortunately) certain lines or perhaps execute lines many times over.
        Java, of course, has control structures. And get this! One of them
        allows you to run forever!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic4;
