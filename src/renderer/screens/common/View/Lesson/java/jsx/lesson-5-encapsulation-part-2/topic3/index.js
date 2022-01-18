import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="Enumeration"
    titleJsx={
      <Text>
        You probably have noticed (inception much) that in our{' '}
        <code>Number</code> class, we had to remember what the different ints
        were used for <code>sign</code>, <code>parity</code>, and{' '}
        <code>primality</code>. And I bet you, you just went ahead and checked
        one of the previous codes to verify what 2 means for{' '}
        <code>primality</code>
        .
        <br />
        <br />
        In Java, there is a better way to implement. And that is to use an
        enumeration. <strong>Enumerations</strong> are used to represent named
        constants. What do we mean by named constants? Recall <code>sign</code>.
        We used 3 constants to represent positive, negative, and zero (1, -1,
        0). Instead of doing this, and always try to remember these constants,
        an enumeration can be defined to name these constants as POSITIVE,
        NEGATIVE, and ZERO.
        <br />
        <br />
        By convention, <strong>named constants are written in uppercase</strong>
        .
      </Text>
    }
  >
    <Section>
      <Text>
        Below are the enumerations for <code>sign</code>, <code>parity</code>,
        and <code>primality</code>.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`enum Sign {\n\tZERO, POSITIVE, NEGATIVE;\n}\nenum Parity {\n\tODD, EVEN;\n}\nenum Primality {\n\tNEITHER, PRIME, COMPOSITE;\n}`}
      </Code>
      <Text>
        When enumerations are implemented, it is as if new types of data are now
        available. In this case, they are <code>Sign</code>, <code>Parity</code>
        , and <code>Primality</code>.
        <br />
        <br />
        This will now allow us to change the definition of{' '}
        <code>class Number</code> as seen below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `enum Sign {\n\tZERO, POSITIVE, NEGATIVE;\n}\n\nenum Parity {\n\tODD, EVEN;\n}\n\nenum Primality {\n\tNEITHER, PRIME, COMPOSITE;\n}\n\nclass Number {\n\tprivate int value;\n\tprivate Sign sign;\n\tprivate Parity parity;\n\tprivate Primality primality;\n\n\tNumber() {\n\t\tvalue = 0;\n\t\tsign = Sign.ZERO;\n\t\tparity = Parity.EVEN;\n\t\tprimality = Primality.NEITHER;\n\t}\n\n\tNumber(int n) {\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\tprivate void signCheck() {\n\t\tif(value < 0)\n\t\t\tsign = Sign.NEGATIVE;\n\t\telse if(value > 0)\n\t\t\tsign = Sign.POSITIVE;\n\t\telse\n\t\t\tsign = Sign.ZERO;\n\t}\n\n\tprivate void parityCheck() {\n\t\tif(value % 2 == 0)\n\t\t\tparity = Parity.EVEN;\n\t\telse\n\t\t\tparity = Parity.ODD;\n\t}\n\n\tprivate void primalityCheck() {\n\t\tif(value > 0){\n\t\t\tboolean prime = true;\n\t\t\tfor(int cf = 2; prime && cf * cf <= value; cf++)\n\t\t\t\tif(value % cf == 0)\n\t\t\t\t\tprime = false;\n\t\t\tif(prime)\n\t\t\t\tprimality = Primality.PRIME;\n\t\t\telse\n\t\t\t\tprimality = Primality.COMPOSITE;\n\t\t} else\n\t\t\tprimality = Primality.NEITHER;\n\t}\n\n\tint getValue() {\n\t\treturn value;\n\t}\n\t\n\tSign getSign() {\n\t\treturn sign;\n\t}\n\t\n\tParity getParity() {\n\t\treturn parity;\n\t}\n\t\n\tPrimality getPrimality() {\n\t\treturn primality;\n\t}\n\n\tvoid setValue(int n) {\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\tvoid display() {\n\t\tSystem.out.println("value: " + value);\n\t\tSystem.out.println("sign: " + sign);\n\t\tSystem.out.println("parity: " + parity);\n\t\tSystem.out.println("primality: " + primality);\n\t\tSystem.out.println();\n\t}\n}`,
            file_name: 'Number',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tNumber n = new Number();\n\t\tNumber m = new Number(10);\n\t\tNumber o = new Number(249), p = new Number(-23);\n\n\t\tn.setValue(19);\n\n\t\tn.display();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        Some noticeable changes are the types for <code>sign</code>,{' '}
        <code>parity</code>, and <code>primality</code>. They are no longer
        ints. Instead, <code>sign</code> is of type <code>Sign</code>,{' '}
        <code>parity</code> is of type <code>Parity</code>, and finally,{' '}
        <code>primality</code> is of type <code>Primality</code>.
        <br />
        <br />
        The same changes should be made with the return type of the getters for{' '}
        <code>sign</code>, <code>parity</code>, and <code>primality</code>.
        <br />
        <br />
        Notice, as well, that instead of remembering what integer values were
        used for <code>sign</code>, <code>parity</code>, and{' '}
        <code>primality</code>, the enumerations can now be used. They are used
        by specifying the enumeration name, followed by the dot operator, and
        the desired named constant. They should look like this:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`sign = Sign.ZERO;\nparity = Parity.EVEN;\nprimality = Primality.NEITHER;`}
      </Code>
      <Text>
        <strong>Labour sidequest:</strong> Compile and run the source files
        above and inspect the output of the display method. What is printed on
        the console?
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic3;
