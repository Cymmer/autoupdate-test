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
    title="Constructors"
    titleJsx={
      <Text>
        Before an instance of a class can be created, there is a special method
        that creates this instance. It is called a constructor. The constructor
        takes the name of the class. It is a special method because it looks
        like a method but it does not have any return type (more on this in a
        while). <br />
        <br />
        Inside the constructor, the member data or instance variables are
        initialized. We only need to answer the question, "When objects of type
        Number are created, what should be their default state?" There are 2
        types of constructors, the default and the overloaded. We will begin
        with the default constructor.
      </Text>
    }
  >
    <Section>
      <Text>
        Let’s check the updated class <code>Number</code>, this time with the
        constructor.
        <br />
        <br />
        By default any instance of <code>Number</code> will:
        <ul>
          <li>represent the integer 0</li>
          <li>it is neither positive nor negative so the sign is set to 0</li>
          <li>it is even so its parity is 0</li>
          <li>and it is neither composite nor prime so its primality is 0</li>
        </ul>{' '}
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`class Number {\n\t// instance variables\n\tint value;\n\tint sign;\n\tint parity;\n\tint primality;\n\n\tNumber() { // default constructor\n\t\tvalue = 0;\n\t\tsign = 0;\n\t\tparity = 0;\n\t\tprimality = 0;\n\t}\n}`}
      </Code>
      <Text>
        Again, constructors <strong>always take the name of the class</strong>{' '}
        that is why we named it <code>Number</code>. To differentiate it from
        the class declaration, a pair of parentheses is added to it, without
        anything inside them (as illustrated above). It is also important to
        note that instance variables are accessible inside the constructor. The{' '}
        <code>value</code>, <code>sign</code>, <code>parity</code>, and{' '}
        <code>primality</code> that are set in the constructor are exactly the{' '}
        <code>value</code>, <code>sign</code>, <code>parity</code>, and{' '}
        <code>primality</code> declared as instance variables. These instance
        variables are also accessible in the other methods of{' '}
        <code>Number</code> (which we will see in a bit).
        <br />
        <br />
        Let’s test our <code>class Number</code>.
      </Text>
      <Code
        language={programmingLanguages.JAVA}
      >{`class Number {\n\t// instance variables\n\tint value;\n\tint sign;\n\tint parity;\n\tint primality;\n\n\tNumber() { // default constructor\n\t\tvalue = 0;\n\t\tsign = 0;\n\t\tparity = 0;\n\t\tprimality = 0;\n\t}\n\n\tpublic static void main(String args[]) {\n\t\t// Creating an instance of a Number\n\t\t// Number is the class\n\t\t// n is an object of type Number\n\t\tNumber n = new Number();\n\n\t\t// to access member data or instance variables, the dot operator is used\n\t\tSystem.out.println("value: " + n.value);\n\t\tSystem.out.println("sign: " + n.sign);\n\t\tSystem.out.println("parity: " + n.parity);\n\t\tSystem.out.println("primality: " + n.primality);\n\t}\n}`}</Code>
      <br />
      <Text>
        It is always good practice to put the main in a separate class. And put
        each class in its own file. Like the one below (and from here onwards,
        we will follow this convention):
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\t// Creating an instance of a Number\n\t\t// Number is the class\n\t\t// n is an object of type Number\n\t\tNumber n = new Number();\n\n\t\t// to access member data or instance variables, the dot operator is used\n\t\tSystem.out.println("value: " + n.value);\n\t\tSystem.out.println("sign: " + n.sign);\n\t\tSystem.out.println("parity: " + n.parity);\n\t\tSystem.out.println("primality: " + n.primality);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `class Number {\n\t// instance variables\n\tint value;\n\tint sign;\n\tint parity;\n\tint primality;\n\n\tNumber() { // default constructor\n\t\tvalue = 0;\n\t\tsign = 0;\n\t\tparity = 0;\n\t\tprimality = 0;\n\t}\n}`,
            file_name: 'Number',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <Text>
        <strong>Labour reminder:</strong> Always remember to name the Java files
        the same as their class names as shown above.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic3;
