import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="Getters and Setters"
    titleJsx={
      <>
        <Text>
          Methods can be constructed/implemented to provide access to certain
          information. Methods that allow the access - meaning let clients have
          a peek or look at the values of the private member data - are called{' '}
          <strong>getters/accessors</strong>. And, conventionally, they follow
          the format below:
        </Text>
        <Code language={programmingLanguages.JAVA}>
          {`<return_type> get<memberDataName>();`}
        </Code>
      </>
    }
  >
    <Section>
      <Text>
        For the private member data of class Number, the accessors should look
        like this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `class Number {\n\tprivate int value;\n\tprivate int sign;\n\tprivate int parity;\n\tprivate int primality;\n\n\tNumber() { // default constructor\n\t\tvalue = 0;\n\t\tsign = 0;\n\t\tparity = 0;\n\t\tprimality = 0;\n\t}\n\n\tNumber(int n) { // overload constructor, n is the argument or parameter and it is int\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\tprivate void signCheck() {\n\t\tif(value < 0)\n\t\t\tsign = -1;\n\t\telse if(value > 0)\n\t\t\tsign = 1;\n\t\telse\n\t\t\tsign = 0;\n\t}\n\n\tprivate void parityCheck() {\n\t\tif(value % 2 == 0)\n\t\t\tparity = 0;\n\t\telse\n\t\t\tparity = 1;\n\t}\n\n\tprivate void primalityCheck() {\n\t\tif(value > 0) {\n\t\t\tboolean prime = true;\n\t\t\tfor(int cf = 2; prime && cf * cf <= value; cf ++)\n\t\t\t\tif(value % cf == 0)\n\t\t\t\t\tprime = false;\n\t\t\tif(prime)\n\t\t\t\tprimality = 1;\n\t\t\telse\n\t\t\t\tprimality = 2;\n\t\t} else\n\t\t\tprimality = 0;\n\t}\n\n\tint getValue() {\n\t\treturn value;\n\t}\n\t\n\tint getSign() {\n\t\treturn sign;\n\t}\n\t\n\tint getParity() {\n\t\treturn parity;\n\t}\n\t\n\tint getPrimality() {\n\t\treturn primality;\n\t}\n\n\tvoid display() {\n\t\tSystem.out.println("value: " + value);\n\t\tSystem.out.println("sign: " + sign);\n\t\tSystem.out.println("parity: " + parity);\n\t\tSystem.out.println("primality: " + primality);\n\t\tSystem.out.println();\n\t}\n}`,
            file_name: 'Number',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tNumber n = new Number();\n\t\tNumber m = new Number(10);\n\t\tNumber o = new Number(249), p = new Number(-23);\n\t\t\n\t\tSystem.out.println("Value: " + n.getValue());\n\t\tSystem.out.println("Sign: " + n.getSign());\n\t\tSystem.out.println("Parity: " + n.getParity());\n\t\tSystem.out.println("Primality: " + n.getPrimality());\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <Text>
        Since the instance variables are all ints, then the return types of
        accessors are all ints as well.
        <br />
        <br />
        Accessors are also called getter methods.
      </Text>
    </Section>

    <Section>
      <Text>
        There is now an access to the private member data but there is still no
        way to change the value of a <code>Number</code> object.
        <br />
        <br />
        To do this, mutators have to be implemented.{' '}
        <strong>Mutators or setter methods</strong>, provide a way for clients
        to be able to change the values of private member data. That is why they
        are called <strong>mutators</strong>.
        <br />
        <br />
        Conventionally, they follow the follow the format below:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`<return_type> set<memberDataName>(<data_type> <varname>);`}
      </Code>
      <Text>
        For the class <code>Number</code> we need to ask the question though. Is
        there a need to implement setter methods for all the private member
        data? Notice that <code>sign</code>, <code>parity</code>, and{' '}
        <code>primality</code> are all dependent on the <code>value</code> of a{' '}
        <code>Number</code>
        object.
        <br />
        <br />
        This tells us that only a setter method for <code>value</code> should be
        provided. And it goes without saying that{' '}
        <strong>
          it is not necessary to provide getters and setters for all private
          member data.
        </strong>
        <br />
        <br />
        Check the complete set of accessors and mutators for the class Number
        below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `class Number {\n\tprivate int value;\n\tprivate int sign;\n\tprivate int parity;\n\tprivate int primality;\n\n\tNumber() {\n\t\tvalue = 0;\n\t\tsign = 0;\n\t\tparity = 0;\n\t\tprimality = 0;\n\t}\n\n\tNumber(int n) {\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\tprivate void signCheck() {\n\t\tif(value < 0)\n\t\t\tsign = -1;\n\t\telse if(value > 0)\n\t\t\tsign = 1;\n\t\telse\n\t\t\tsign = 0;\n\t}\n\n\tprivate void parityCheck() {\n\t\tif(value % 2 == 0)\n\t\t\tparity = 0;\n\t\telse\n\t\t\tparity = 1;\n\t}\n\n\tprivate void primalityCheck() {\n\t\tif(value > 0) {\n\t\t\tboolean prime = true;\n\t\t\tfor(int cf = 2; prime && cf * cf <= value; cf ++)\n\t\t\t\tif(value % cf == 0)\n\t\t\t\t\tprime = false;\n\t\t\tif(prime)\n\t\t\t\tprimality = 1;\n\t\t\telse\n\t\t\t\tprimality = 2;\n\t\t} else\n\t\t\tprimality = 0;\n\t}\n\n\tint getValue() {\n\t\treturn value;\n\t}\n\t\n\tint getSign() {\n\t\treturn sign;\n\t}\n\t\n\tint getParity() {\n\t\treturn parity;\n\t}\n\t\n\tint getPrimality() {\n\t\treturn primality;\n\t}\n\n\tvoid setValue(int n) {\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\tvoid display() {\n\t\tSystem.out.println("value: " + value);\n\t\tSystem.out.println("sign: " + sign);\n\t\tSystem.out.println("parity: " + parity);\n\t\tSystem.out.println("primality: " + primality);\n\t\tSystem.out.println();\n\t}\n}`,
            file_name: 'Number',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tNumber n = new Number();\n\t\tNumber m = new Number(10);\n\t\tNumber o = new Number(249), p = new Number(-23);\n\n\t\t// updates the value of n to 19\n\t\tn.setValue(19);\n\n\t\tn.display();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        Most of the time, the return type of setters are set to be{' '}
        <code>void</code>. Since all they do is set the values of the desired
        member data. <br />
        <br />
        But sometimes, changing the values of member data is not as simple as
        assigning values to them. Perhaps, before any changes can be made, some
        checks are in order. This is similar to changing the passwords of your
        social media accounts. Before any change is made, the current password
        is asked. If the current password is supplied correctly, then the change
        is effected. Otherwise, the change is unsuccessful. Setters need to
        report this - whether the needed change was executed successfully or
        not. Hence, some setters need to have boolean values for a return type.
        The setters will return true for a successful change, false otherwise.
        But setters are not limited to returning just boolean values. They can
        return any valid Java or user-defined type.
        <br />
        <br />
        Back to <code>Number</code>. It is important to note that the data type
        of the argument or parameter in the setter method{' '}
        <strong>should match that of the desired member data</strong>. In the{' '}
        <code>Number</code> class, <code>value</code> is an int and therefore,
        the argument <strong>n</strong> should be an int as well.
        <br />
        <br />
        Once the <code>value</code> of a <code>Number</code> object changes,
        most definitely, changes should be made to <code>sign</code>,{' '}
        <code>parity</code>, and <code>primality</code>. This is exactly the
        reason why the 3 check methods had to be invoked. Doing so will make{' '}
        <code>sign</code>, <code>parity</code>, and <code>primality</code>{' '}
        consistent with the <code>value</code> of the <code>Number</code>{' '}
        object.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic2;
