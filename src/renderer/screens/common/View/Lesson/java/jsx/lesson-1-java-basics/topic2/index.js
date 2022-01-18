import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import { FunFactCard, InfoList, InfoCard } from 'components';
import IntroImage from './intro-image.png';
import Compile from './compile.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';
import Image from '../../../../Image';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="Primitive Data Types"
    titleJsx={
      <>
        <Text>
          In the code below, the first print, prints the <strong>string</strong>{' '}
          49, and the second print prints the <strong>number</strong> 49.
        </Text>
        <br />
        <Compiler
          initialSourceCodes={[
            {
              code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tSystem.out.println("49");\n\t\tSystem.out.println(49);\n\t}\n}`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
        />
        <br />
        <br />
        <Text>
          Like in C/C++, expressions (we will fully define expressions in a
          later section of this Chiron) are punctuated with{' '}
          <strong>semicolons</strong> ( ; ).
          <br />
          <br />
          Since you now know how to print on the console, it would be exciting
          to get data or input from the console. But before this, let us learn
          the different types of data in Java. Luke didn’t get his lightsaber on
          day 1!
        </Text>
      </>
    }
  >
    <Section title="Data Types">
      <Text>
        Java is a <strong>strongly-typed programming language</strong>. This
        means that you cannot put or assign or store different types of data
        together. Truly, you cannot compare apples and oranges. Fit Jabba the
        Hutt into Jar Jar Binks we cannot!
        <br />
        <br />
        Let us begin with the primitives. Sit down and take a feast on what the
        table has to offer (ambrosia, err not)!
      </Text>
      <InfoList>
        <InfoCard
          info="Characters, including non-printable. Size: 16 bits (0 to 65535)"
          title="char"
        />
        <InfoCard info="true or false. Size: 1 bit" title="boolean" />
        <InfoCard
          info="Network packets. Size: 8 bits (-128 to 127)"
          title="byte"
        />
        <InfoCard
          info="Whole numbers. Size: 32 bits (-2,147,483,648 to 2,147,483,647)"
          title="int"
        />
        <InfoCard
          info="Smaller than int. Size: 16 bits (-32,768 to 32,767)"
          title="short"
        />
        <InfoCard
          info="Larger than int. Size: 64 bits (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)"
          title="long"
        />
        <InfoCard
          info="Numbers with floating points. Size: 32 bits (Sufficient for storing 6 to 7 decimal digits)"
          title="float"
        />
        <InfoCard
          info="Larger numbers with floating points. Size: 64 bits (Sufficient for storing 15 decimal digits)"
          title="double"
        />
      </InfoList>
      <br />
      <br />
    </Section>

    <Section title="Variables">
      <Text>
        Now that we know what kinds of primitive data we can use in Java, let’s
        start using them!
        <br />
        <br />
        Data should be stored in some <strong>identifier</strong> or{' '}
        <strong>variable</strong>. It is a way for us to be able to refer to the
        data whenever we need to retrieve them or manipulate them. How do we
        name variables or identifiers? A rose by any other name would smell as
        sweet. That’s from Shakespeare!
        <br />
        <br />
        Identifiers in Java are used not just for variables but for naming
        methods, classes, packages, and interfaces as well. They should be
        composed of alphanumeric characters (A-Z, a-z, 0-9), the dollar sign
        ($), and the underscore (_). They{' '}
        <strong>cannot begin with any of the digits</strong> but if you really
        want to, then <strong>you can prepend it with the underscore</strong>(
        <code>_9ball</code>, ok, that still doesn’t begin with a digit!). They
        can be as long as you want them to be. But I am sure you wouldn’t be
        naming your identifiers as long as{' '}
        <code>supercalifragilisticexpialidocious</code> now would you?
        <br />
        <br />
        Always remember that identifiers are <strong>case-sensitive</strong> and
        to name them as descriptive of what they represent as possible.
        <br />
        <br />
        <code>Main</code>, <code>main</code>, and <code>args</code> are
        identifiers you met in our previous code samples including{' '}
        <code>String</code>, a predefined class name.
        <br />
        <br />
        I believe you are now ready for variables. Before you can start using
        them, you have to declare variables. You are telling the Java compiler:
        <br />
        <br />
        “Hey, I want to have storage for data this big, and I am naming it{' '}
        {`<variable_name>`}, so do not be a stranger, ok?” <br />
        <br />
        Format:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`<data_type> <variable_name>`};
      </Code>
      <Text>
        When you want to declare more than one variable of the same type, you do
        not have to separate them in different lines. All you need to do is to{' '}
        <strong>comma separate the variable names</strong> like{' '}
        <code>letter</code> and <code>digit</code>
        in the sample below.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`int num1;\nfloat num2;\ndouble num3;\nchar letter, digit;\nboolean flag;`}
      </Code>
    </Section>

    <Section>
      <FunFactCard
        mainTextJsx={
          <>
            <Text>
              Did you know that Java is both a compiled and an interpreted
              language? Python is interpreted and C/C++ are compiled. But Java
              is both!
            </Text>
            <Image alt="Compiling process" src={Compile} />
            <Text>
              Java’s compiler (javac) converts your java files (source files)
              into Java Bytecodes (.class files) and this is fed into the Java
              Runtime Environment (Java Virtual Machine - installed in all
              computers!)
            </Text>
          </>
        }
      />
    </Section>
  </TopicContainer>
);

export default Topic2;
