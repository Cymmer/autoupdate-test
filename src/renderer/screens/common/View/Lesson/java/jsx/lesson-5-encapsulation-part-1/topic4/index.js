import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import { FunFactCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic4 = () => (
  <TopicContainer
    image={IntroImage}
    number={4}
    title="Overloaded Constructors"
    titleJsx={
      <Text>
        Let us now go to the overloaded constructor. The overloaded constructor
        is still a constructor. It will be used to construct an object by
        initializing the instance variables{' '}
        <strong>
          through values passed on to the overloaded constructor via the
          arguments
        </strong>
        . The arguments or parameters of the constructor are those that are
        placed in the pair of parentheses.
      </Text>
    }
  >
    <Section>
      <Text>
        Notice that the only Numbers we are able to create are, by default, 0.
        What if we want to create a Number object that represents 10, or 249 or
        -23? This is where the overloaded constructor will be useful. Inspect
        the code below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `class Main {\n\tpublic static void main(String args []){\n\t\tNumber n = new Number();\n\t\t\n\t\t// overloaded constructor calls\n\t\tNumber m = new Number(10);\n\t\tNumber o = new Number(249), p = new Number(-23);\n\n\t\t// to access member data or instance variables, the dot operator is used\n\t\tSystem.out.println("value: " + n.value);\n\t\tSystem.out.println("sign: " + n.sign);\n\t\tSystem.out.println("parity: " + n.parity);\n\t\tSystem.out.println("primality: " + n.primality);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `class Number {\n\t// instance variables\n\tint value;\n\tint sign;\n\tint parity;\n\tint primality;\n\n\tNumber() { // default constructor\n\t\tvalue = 0;\n\t\tsign = 0;\n\t\tparity = 0;\n\t\tprimality = 0;\n\t}\n\n\tNumber(int n) { // overload constructor, n is the argument or parameter and it is int\n\t\tvalue = n;\n\t\tsign = 0;\n\t\tparity = 0;\n\t\tprimality = 0;\n\t}\n}`,
            file_name: 'Number',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        In the overloaded constructor, value is now assigned <code>n</code>. And
        take a look at how <code>m</code>, <code>o</code>, <code>p</code> are
        created. Instead of leaving the pair of parentheses blank, integers 10,
        249, and -23 are passed on to the overloaded constructor.
        <br />
        <br />
        How does the compiler know which constructor to call? How is it able to
        distinguish between the two constructors? Yes! Through the argument list
        or parameter list. If it is empty, then the default constructor is
        invoked. If it is an integer, then the overloaded constructor that
        accepts an integer is invoked.
        <br />
        <br />
        But the overloaded constructor is far from done. Notice that apart from
        setting value to <code>n</code>, we have left the other attributes with
        the same value - all zeros! This should not be the case. These
        attributes are now dependent on value - which is no longer 0 as it was
        in the default constructor.
        <br />
        <br />
        <FunFactCard
          mainTextJsx={
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              It is called "overloaded" because the two constructors take the
              same name (name of the class) but take many configurations via the
              argument list.
            </Text>
          }
        />
        <br />
        <br />
        Come have a look at the edited overloaded constructor.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`class Number {\n\t// instance variables\n\tint value;\n\tint sign;\n\tint parity;\n\tint primality;\n\n\tNumber() { // default constructor\n\t\tvalue = 0;\n\t\tsign = 0;\n\t\tparity = 0;\n\t\tprimality = 0;\n\t}\n\n\tNumber(int n) { // overload constructor, n is the argument or parameter and it is int\n\t\tvalue = n;\n\n\t\t// the value of sign depends on the value passed in the constructor\n\t\tif(value < 0)\n\t\t\tsign = -1;\n\t\telse if(value > 0)\n\t\t\tsign = 1;\n\t\telse\n\t\t\tsign = 0;\n\n\t\t// the value of parity also depends on the value passed in the constructor\n\t\tif(value % 2 == 0)\n\t\t\tparity = 0;\n\t\telse\n\t\t\tparity = 1;\n\n\t\t// here is the hard part or long part\n\t\t// we need to check whether value is prime or not\n\t\t// which we know how to do but we only check\n\t\t// when value is positive\n\t\tif(value > 0) {\n\t\t\tboolean prime = true;\n\t\t\tfor(int cf = 2; prime && cf * cf <= value; cf++)\n\t\t\t\tif(value % cf == 0)\n\t\t\t\t\tprime = false;\n\n\t\t\tif(prime)\n\t\t\t\tprimality = 1;\n\t\t\telse\n\t\t\t\tprimality = 2;\n\t\t} else\n\t\t\tprimality = 0;\n\t}\n}`}
      </Code>

      <Text>
        Notice that the overloaded constructor is now "overloaded" with too many
        tasks:
        <ul>
          <li>the task of checking for sign</li>
          <li>the task of checking parity</li>
          <li>and finally the arduous task of checking primality</li>
        </ul>
        In Java, we can distribute these different tasks in different parts of
        the class. By doing so, it would be easier to spot and fix errors
        because they are now localized in one task. And it makes for a more
        modular approach.
        <br />
        <br />
        These tasks can be distributed to different methods! Apart from the fact
        that methods are responsible for defining the behavior of objects,
        methods are subroutines broken down from major routines performing
        different tasks.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic4;
