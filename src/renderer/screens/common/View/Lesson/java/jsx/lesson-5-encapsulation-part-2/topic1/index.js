import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="Access Modifiers"
    titleJsx={
      <>
        <Text>
          Access modifiers/specifiers allow classes to choose which member data
          and methods should be accessible and which should not be accessible.
          <br />
          <br />
          These are <code>package</code>, <code>private</code>,{' '}
          <code>public</code>, and <code>protected</code>.
          <br />
          <br />
          Recall during Chiron’s training when you first heard of package? It
          was when <code>Scanner</code> was first introduced to you.
        </Text>
        <Code language={programmingLanguages.JAVA}>
          {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\t// Creates an object of Scanner\n\t\tScanner input = new Scanner(System.in);\n\n\t\t// Takes input, specifically an int, from the console\n\t\tint num = input.nextInt();\n\n\t\t// Prints the input number\n\t\tSystem.out.println("The number is: " + num);\n\n\t\t// Closes the scanner\n\t\tinput.close();\n\t}\n}`}
        </Code>
        <Text>
          <code>util</code> is the package where <code>Scanner</code> is found.
        </Text>
      </>
    }
  >
    <Section>
      <Text>
        When the access specifier is not specified when a class is implemented,
        its default access specifier is <code>package</code>.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`// the default access modifier of this class is package\nclass Number {\n\t// the default access modifiers of these is package\n\tint value;\n\tint sign;\n\tint parity;\n\tint primality;\n}`}
      </Code>
      <Text>
        The default access given to <code>value</code>, <code>sign</code>,{' '}
        <code>parity</code>, and <code>primality</code> is <code>package</code>.
        This means that as long as the classes (in our case, Number.java and
        Main.java) are in the same directory (package), then access is allowed.
        But if these two classes are in different directories, access is not
        allowed. Heck, <code>Number</code> will even be an unknown class.
        <br />
        <br />
        For now, we want to intentionally deny the access to the instance
        variables, including the 3 check methods. We do this by simply
        specifying their access as private using the keyword, wait for it,{' '}
        <code>private</code> as shown below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `class Number {\n\t// instance variables\n\tprivate int value;\n\tprivate int sign;\n\tprivate int parity;\n\tprivate int primality;\n\n\tNumber() { // default constructor\n\t\tvalue = 0;\n\t\tsign = 0;\n\t\tparity = 0;\n\t\tprimality = 0;\n\t}\n\n\tNumber(int n) { // overload constructor, n is the argument or parameter and it is int\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\tprivate void signCheck() {\n\t\tif(value < 0)\n\t\t\tsign = -1;\n\t\telse if(value > 0)\n\t\t\tsign = 1;\n\t\telse\n\t\t\tsign = 0;\n\t}\n\n\tprivate void parityCheck() {\n\t\tif(value % 2 == 0)\n\t\t\tparity = 0;\n\t\telse\n\t\t\tparity = 1;\n\t}\n\n\tprivate void primalityCheck() {\n\t\tif(value > 0) {\n\t\t\tboolean prime = true;\n\t\t\tfor(int cf = 2; prime && cf * cf <= value; cf ++)\n\t\t\t\tif(value % cf == 0)\n\t\t\t\t\tprime = false;\n\t\t\tif(prime)\n\t\t\t\tprimality = 1;\n\t\t\telse\n\t\t\t\tprimality = 2;\n\t\t}\n\t\telse\n\t\t\tprimality = 0;\n\t}\n\n\tvoid display() {\n\t\tSystem.out.println("value: " + value);\n\t\tSystem.out.println("sign: " + sign);\n\t\tSystem.out.println("parity: " + parity);\n\t\tSystem.out.println("primality: " + primality);\n\t\tSystem.out.println();\n\t}\n}`,
            file_name: 'Number',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tNumber n = new Number();\n\t\tNumber m = new Number(10);\n\t\tNumber o = new Number(249), p = new Number(-23);\n\n\t\tn.display();\n\t\tm.display();\n\t\to.display();\n\t\tp.display();\n\n\t\tn.value = 10;\n\t\tn.sign = 0;\n\t\tn.parity = 1;\n\t\tn.primality = 0;\n\n\t\tn.display();\n\t\tn.signCheck();\n\t\tm.parityCheck();\n\t\to.primalityCheck();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        Compile the source files above and check the errors! Yes, there are
        errors.
        <br />
        <br />
        The errors all say that the instance variables and the check methods{' '}
        <strong>have private access.</strong>
        <br />
        <br />
        By setting the access to <code>private</code>, the check methods can no
        longer be invoked or called by clients. But there is also no way for
        clients to access and change the value of a <code>Number</code> object
        (except through the <code>display</code> which is not that useful
        because there is no way to manipulate the value of a <code>Number</code>{' '}
        object). This is problematic. But a problem that has a solution.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic1;
