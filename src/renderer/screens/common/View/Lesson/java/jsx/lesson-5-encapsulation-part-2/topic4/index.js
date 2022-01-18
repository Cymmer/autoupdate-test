import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic4 = () => (
  <TopicContainer
    image={IntroImage}
    number={4}
    title="Packages"
    titleJsx={
      <Text>
        Back to access specifiers!
        <br />
        <br />
        As mentioned earlier, when the access is not specified for a member data
        or method, its default access specifier is <code>package</code>. A
        closer look at packages is in order.
        <br />
        <br />
        In Java, packages are used to group together related classes. When you
        start building more complex Java projects, a systematic and efficient
        way of arranging all the files must be available. And packages are the
        answer.
      </Text>
    }
  >
    <Section>
      <Text>
        There are two types of packages in Java, the built-in packages provided
        by the Java SDK, and the user-defined packages. So far, the only package
        you have encountered is the <code>java.util</code> package where{' '}
        <code>Scanner</code> is found. As you progress and conquer all the
        Labours, more built-in packages will be utilized.
        <br />
        <br />
        Packages are simply directories where related classes are stored.{' '}
        <code>Scanner</code> is not the only class found in the{' '}
        <code>java.util</code> package. Some of them are <code>Calendar</code>,{' '}
        <code>Date</code>, <code>Random</code>, <code>Timer</code>, and many
        other classes.
      </Text>
    </Section>

    <Section>
      <Text>
        How are packages built? Let us organize our files first. Since you are
        currently in the Encapsulation Labour, create a package called{' '}
        <code>encapsulation</code>.{' '}
        <strong>
          But do not do this through the file system of your computer.
        </strong>{' '}
        Implement this through packages.
        <br />
        <br />
        Check the code below.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`package encapsulation;\n\nenum Sign {\n\tZERO, POSITIVE, NEGATIVE;\n}\n\nenum Parity {\n\tODD, EVEN;\n}\n\nenum Primality {\n\tNEITHER, PRIME, COMPOSITE;\n}\n\nclass Number {\n\tprivate int value;\n\tprivate Sign sign;\n\tprivate Parity parity;\n\tprivate Primality primality;\n\n\tNumber() {\n\t\tvalue = 0;\n\t\tsign = Sign.ZERO;\n\t\tparity = Parity.EVEN;\n\t\tprimality = Primality.NEITHER;\n\t}\n\n\tNumber(int n) {\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\tprivate void signCheck() {\n\t\tif(value < 0)\n\t\t\tsign = Sign.NEGATIVE;\n\t\telse if(value > 0)\n\t\t\t\tsign = Sign.POSITIVE;\n\t\telse\n\t\t\tsign = Sign.ZERO;\n\t}\n\n\tprivate void parityCheck() {\n\t\tif(value % 2 == 0)\n\t\t\tparity = Parity.EVEN;\n\t\telse\n\t\t\tparity = Parity.ODD;\n\t}\n\n\tprivate void primalityCheck() {\n\t\tif(value > 0) {\n\t\t\tboolean prime = true;\n\t\t\tfor(int cf = 2; prime && cf * cf <= value; cf++)\n\t\t\t\tif(value % cf == 0)\n\t\t\t\t\tprime = false;\n\t\t\tif(prime)\n\t\t\t\tprimality = Primality.PRIME;\n\t\t\telse\n\t\t\t\tprimality = Primality.COMPOSITE;\n\t\t} else\n\t\t\tprimality = Primality.NEITHER;\n\t}\n\n\tint getValue() {\n\t\treturn value;\n\t}\n\n\tSign getSign() {\n\t\treturn sign;\n\t}\n\n\tParity getParity() {\n\t\treturn parity;\n\t}\n\n\tPrimality getPrimality() {\n\t\treturn primality;\n\t}\n\n\tvoid setValue(int n) {\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\tvoid display(){\n\t\tSystem.out.println("value: " + value);\n\t\tSystem.out.println("sign: " + sign);\n\t\tSystem.out.println("parity: " + parity);\n\t\tSystem.out.println("primality: " + primality);\n\t\tSystem.out.println();\n\t}\n}`}
      </Code>
      <Text>The only new piece of code above is the line:</Text>
      <Code language={programmingLanguages.JAVA}>package encapsulation;</Code>
      <Text>
        When compiling Number.java, a directory called encapsulation is created.
        And when you inspect it, Number.class is found there. That is what the
        keyword package does. Every time you create new classes and these
        classes are related to Number, then include package encapsulation. All
        the compiled .class files will be stored in the directory encapsulation.
        <br />
        <br />
        <strong>Labour Sidequest:</strong> Your Number.java and Main.java file
        should still remain in their current directory (they should be in the
        same directory). Run the code below and check what it reports.
        <br />
        <br />
        <Compiler
          initialSourceCodes={[
            {
              code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tNumber n = new Number();\n\t\tNumber m = new Number(10);\n\t\tNumber o = new Number(249), p = new Number(-23);\n\n\t\tn.setValue(19);\n\n\t\tn.display();\n\t}\n}`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
            },
            {
              code: `package encapsulation;\n\nenum Sign {\n\tZERO, POSITIVE, NEGATIVE;\n}\n\nenum Parity {\n\tODD, EVEN;\n}\n\nenum Primality {\n\tNEITHER, PRIME, COMPOSITE;\n}\n\nclass Number {\n\tprivate int value;\n\tprivate Sign sign;\n\tprivate Parity parity;\n\tprivate Primality primality;\n\n\tNumber() {\n\t\tvalue = 0;\n\t\tsign = Sign.ZERO;\n\t\tparity = Parity.EVEN;\n\t\tprimality = Primality.NEITHER;\n\t}\n\n\tNumber(int n) {\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\tprivate void signCheck() {\n\t\tif(value < 0)\n\t\t\tsign = Sign.NEGATIVE;\n\t\telse if(value > 0)\n\t\t\tsign = Sign.POSITIVE;\n\t\telse\n\t\t\tsign = Sign.ZERO;\n\t}\n\n\tprivate void parityCheck() {\n\t\tif(value % 2 == 0)\n\t\t\tparity = Parity.EVEN;\n\t\telse\n\t\t\tparity = Parity.ODD;\n\t}\n\n\tprivate void primalityCheck() {\n\t\tif(value > 0){\n\t\t\tboolean prime = true;\n\t\t\tfor(int cf = 2; prime && cf * cf <= value; cf++)\n\t\t\t\tif(value % cf == 0)\n\t\t\t\t\tprime = false;\n\t\t\tif(prime)\n\t\t\t\tprimality = Primality.PRIME;\n\t\t\telse\n\t\t\t\tprimality = Primality.COMPOSITE;\n\t\t} else\n\t\t\tprimality = Primality.NEITHER;\n\t}\n\n\tint getValue() {\n\t\treturn value;\n\t}\n\t\n\tSign getSign() {\n\t\treturn sign;\n\t}\n\t\n\tParity getParity() {\n\t\treturn parity;\n\t}\n\t\n\tPrimality getPrimality() {\n\t\treturn primality;\n\t}\n\n\tvoid setValue(int n) {\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\tvoid display() {\n\t\tSystem.out.println("value: " + value);\n\t\tSystem.out.println("sign: " + sign);\n\t\tSystem.out.println("parity: " + parity);\n\t\tSystem.out.println("primality: " + primality);\n\t\tSystem.out.println();\n\t}\n}`,
              file_name: 'Number',
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
        />
        <br />
        <br />
        You should see an error that says that the <code>Main</code> cannot
        access class <code>Number</code> and that the file does not contain{' '}
        <code>class Number</code>. Redo Main.java by importing the{' '}
        <code>Number</code> class from package <code>encapsulation</code>. Check
        the code below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `import encapsulation.Number;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tNumber n = new Number();\n\t\tNumber m = new Number(10);\n\t\tNumber o = new Number(249), p = new Number(-23);\n\n\t\tn.setValue(19);\n\n\t\tn.display();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `package encapsulation;\n\nenum Sign {\n\tZERO, POSITIVE, NEGATIVE;\n}\n\nenum Parity {\n\tODD, EVEN;\n}\n\nenum Primality {\n\tNEITHER, PRIME, COMPOSITE;\n}\n\nclass Number {\n\tprivate int value;\n\tprivate Sign sign;\n\tprivate Parity parity;\n\tprivate Primality primality;\n\n\tNumber() {\n\t\tvalue = 0;\n\t\tsign = Sign.ZERO;\n\t\tparity = Parity.EVEN;\n\t\tprimality = Primality.NEITHER;\n\t}\n\n\tNumber(int n) {\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\tprivate void signCheck() {\n\t\tif(value < 0)\n\t\t\tsign = Sign.NEGATIVE;\n\t\telse if(value > 0)\n\t\t\tsign = Sign.POSITIVE;\n\t\telse\n\t\t\tsign = Sign.ZERO;\n\t}\n\n\tprivate void parityCheck() {\n\t\tif(value % 2 == 0)\n\t\t\tparity = Parity.EVEN;\n\t\telse\n\t\t\tparity = Parity.ODD;\n\t}\n\n\tprivate void primalityCheck() {\n\t\tif(value > 0){\n\t\t\tboolean prime = true;\n\t\t\tfor(int cf = 2; prime && cf * cf <= value; cf++)\n\t\t\t\tif(value % cf == 0)\n\t\t\t\t\tprime = false;\n\t\t\tif(prime)\n\t\t\t\tprimality = Primality.PRIME;\n\t\t\telse\n\t\t\t\tprimality = Primality.COMPOSITE;\n\t\t} else\n\t\t\tprimality = Primality.NEITHER;\n\t}\n\n\tint getValue() {\n\t\treturn value;\n\t}\n\t\n\tSign getSign() {\n\t\treturn sign;\n\t}\n\t\n\tParity getParity() {\n\t\treturn parity;\n\t}\n\t\n\tPrimality getPrimality() {\n\t\treturn primality;\n\t}\n\n\tvoid setValue(int n) {\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\tvoid display() {\n\t\tSystem.out.println("value: " + value);\n\t\tSystem.out.println("sign: " + sign);\n\t\tSystem.out.println("parity: " + parity);\n\t\tSystem.out.println("primality: " + primality);\n\t\tSystem.out.println();\n\t}\n}`,
            file_name: 'Number',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        Since <code>Number</code> class was compiled into the package
        encapsulation, it has to be imported. To import <code>Number</code>, use
        the keyword <code>import</code> and the package name{' '}
        <code>encapsulation</code>
        followed by the dot operator and finally <code>Number</code>. What this
        says is that the <code>Main</code> is going to use <code>Number</code>{' '}
        and this <code>Number</code> class is not defined in this file but can
        be found in the package <code>encapsulation</code>.
        <br />
        <br />
        Compile the code above this time.
        <br />
        <br />
        The compiler will still report an error. The error says that{' '}
        <code>Number</code> is not public in <code>encapsulation</code> and
        cannot be accessed outside the package.
        <br />
        <br />
        Recall that when there are no access specifiers, it defaults to package.
        This means that they can be accessed only in the package. And since the{' '}
        <code>Main</code> class is not found in package{' '}
        <code>encapsulation</code>, <code>Main</code> does not have access to{' '}
        <code>Number</code>.
        <br />
        <br />
        No, no! Do not transfer Main in the encapsulation directory nor package
        Main in encapsulation! Main can remain in its current location. What
        needs to be done is to <strong>specify the access of Number</strong>.
        Yes, member data and methods are not the only entities for which access
        can be specified! Classes as well!
        <br />
        <br />
        You might have gotten a clue from the compilation error.{' '}
        <code>Number</code> is not public in encapsulation. So all we need to do
        is specify the <code>class Number</code> to be public by using the
        keyword, wait for it, <code>public</code>!
        <br />
        <br />
        Check this out:
      </Text>
      <Code
        language={programmingLanguages.JAVA}
      >{`public class Number {`}</Code>
      <Text>
        Simply add <code>public</code> before the keyword class and this is good
        to go.
        <br />
        <br />
        <strong>Labour sidequest:</strong> Update the code above and run it
        again.
        <br />
        <br />
        Oh snaps! The compiler suddenly complains about 6 errors in Main! But
        all the errors are the same! The constructors, setValue, and display are
        only accessible inside the package! If we invoked all the getters, the
        same error will be reported too! What would you do then?
        <br />
        <br />
        Great! Set the constructors and the methods we want accessible outside
        the package to <code>public</code>!
        <br />
        <br />
        This how it should look now:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `package encapsulation;\n\nenum Sign {\n\tZERO, POSITIVE, NEGATIVE;\n}\n\nenum Parity {\n\tODD, EVEN;\n}\n\nenum Primality {\n\tNEITHER, PRIME, COMPOSITE;\n}\n\npublic class Number {\n\tprivate int value;\n\tprivate Sign sign;\n\tprivate Parity parity;\n\tprivate Primality primality;\n\n\tpublic Number() {\n\t\tvalue = 0;\n\t\tsign = Sign.ZERO;\n\t\tparity = Parity.EVEN;\n\t\tprimality = Primality.NEITHER;\n\t}\n\n\tpublic Number(int n) {\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\tprivate void signCheck() {\n\t\tif(value < 0)\n\t\t\tsign = Sign.NEGATIVE;\n\t\telse if(value > 0)\n\t\t\tsign = Sign.POSITIVE;\n\t\telse\n\t\t\tsign = Sign.ZERO;\n\t}\n\n\tprivate void parityCheck() {\n\t\tif(value % 2 == 0)\n\t\t\tparity = Parity.EVEN;\n\t\telse\n\t\t\tparity = Parity.ODD;\n\t}\n\n\tprivate void primalityCheck() {\n\t\tif(value > 0){\n\t\t\tboolean prime = true;\n\t\t\tfor(int cf = 2; prime && cf * cf <= value; cf++)\n\t\t\t\tif(value % cf == 0)\n\t\t\t\t\tprime = false;\n\t\t\tif(prime)\n\t\t\t\tprimality = Primality.PRIME;\n\t\t\telse\n\t\t\t\tprimality = Primality.COMPOSITE;\n\t\t} else\n\t\t\tprimality = Primality.NEITHER;\n\t}\n\n\tint getValue() {\n\t\treturn value;\n\t}\n\t\n\tSign getSign() {\n\t\treturn sign;\n\t}\n\t\n\tParity getParity() {\n\t\treturn parity;\n\t}\n\t\n\tPrimality getPrimality() {\n\t\treturn primality;\n\t}\n\n\tpublic void setValue(int n) {\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\tpublic void display() {\n\t\tSystem.out.println("value: " + value);\n\t\tSystem.out.println("sign: " + sign);\n\t\tSystem.out.println("parity: " + parity);\n\t\tSystem.out.println("primality: " + primality);\n\t\tSystem.out.println();\n\t}\n}`,
            file_name: 'Number',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `import encapsulation.Number;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tNumber n = new Number();\n\t\tNumber m = new Number(10);\n\t\tNumber o = new Number(249), p = new Number(-23);\n\n\t\tn.setValue(19);\n\n\t\tn.display();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <Text>
        No other changes are needed for Main.java.
        <br />
        <br />
        The member data may be set as public as well,{' '}
        <strong>if this is the intention</strong>, but for the{' '}
        <code>Number</code> class, we are keeping them private!
        <br />
        <br />
        So far, what we have going for the <code>Number</code> object is its
        state, described by <code>value</code>, <code>sign</code>,{' '}
        <code>parity</code>, and <code>primality</code>. And for its behavior,
        it has the setter and different getters, and the <code>display()</code>
        method.
        <br />
        <br />
        Let’s improve <code>Number</code>. What else can we do with a number?
        With an integer to be specific. Let’s choose a few. Perhaps the number
        can be squared. We can include negation as well and the binary
        operations that would yield integers as a result, i.e. addition,
        subtraction, multiplication.
        <br />
        <br />
        For squaring, call it <code>square</code>. There is no additional input
        needed so this method will not have any arguments. The same goes for
        negation. Call it <code>negate</code>. Check the methods below:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`// this will square the current value of a Number\npublic void square() {\n\t// squaring value\n\tvalue = value * value;\n\t\n\t// this means that the other attributes have to be updated\n\t// squaring an integer will always yield to a positive integer\n\tsign = Sign.POSITIVE \n\t\n\t// squaring an integer always results in a positive integer\n\t// squaring an integer automatically makes the new number factorable\n\t// so there is not need to check primality, automatically it is composite\n\tprimality = Primality.COMPOSITE;\n\t\n\t// squaring will not change parity\n\t// if you square an odd number, the result is odd\n\t// if you square an even number, the result is even\n}\n\n// negating the number reverses the sign\npublic void negate() { \n\t\n\t//if the number is zero, then negation cannot be applied\n\t//so it is important to do the operation only when the number is not 0\n\tif(value != 0) {\n\t\t// negation\n\t\tvalue = value * -1;\n\t\t\n\t\tif(sign == Sign.POSITIVE) {\n\t\t\t// the sign is flipped to negative\n\t\t\tsign = Sign.NEGATIVE;\n\t\t\t\n\t\t\t// a negative number is neither prime nor composite\n\t\t\tprimality = Primality.NEITHER;\n\t\t\t\n\t\t\t// negation does not change the parity\n\t\t} else {\n\t\t\t// the sign is flipped to positive\n\t\t\tsign = Sign.POSITIVE;\n\t\t\t\n\t\t\t// since the number is negative, negating it makes it positive\n\t\t\t// this means that primality must be updated\n\t\t\t// this is easy since there is a private method for this\n\t\t\tprimalityCheck();\n\t\t}\n\t}\n}`}
      </Code>
      <Text>
        For addition, subtraction, and multiplication, it is a different story.
        Since these are binary operations (they need two operands, in this case,
        2 <code>Numbers</code> to operate on) the methods for them will need
        arguments. And you guessed it! They need a <code>Number</code> object.
        And their return types are not void but the result in the form of a
        Number object.
        <br />
        <br />
        Labour Check: inspect the addition, subtraction, and multiplication
        below.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public Number add(Number n) {\n\tNumber sum = new Number();\n\tsum.setValue(value + n.getValue());\n\treturn sum;\n}\n\npublic Number subtract(Number n) {\n\tNumber diff = new Number();\n\tdiff.setValue(value - n.getValue());\n\treturn diff;\n}\n\npublic Number times(Number n) {\n\tNumber prod = new Number();\n\tprod.setValue(value * n.getValue());\n\treturn prod;\n}`}
      </Code>
      <Text>
        Alternatively, since there is an overloaded constructor, this will be
        used instead of <code>setValue</code>. Check it below:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public Number add(Number n) {\n\tNumber sum = new Number(value + n.getValue());\n\treturn sum;\n}\n\npublic Number subtract(Number n ) {\n\tNumber diff = new Number(value - n.getValue());\n\treturn diff;\n}\n\npublic Number times(Number n ) {\n\tNumber prod = new Number(value * n.getValue());\n\treturn prod;\n}`}
      </Code>
      <Text>
        Notice that there is only one reason as to why the different{' '}
        <code>Number</code> objects have been declared: so there is a holder for
        the results of the operations. But then, they are useless, since they
        are returned right away. Check the updated versions below:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`public Number add(Number n) {\n\treturn new Number(value + n.getValue());\n}\n\npublic Number subtract(Number n) {\n\treturn new Number(value - n.getValue());\n}\n\npublic Number times(Number n) {\n\treturn new Number(value * n.getValue());\n}\n`}
      </Code>
      <Text>
        And there you have it! You have conquered the Encapsulation Labour! You
        have slayed it, demi-god!
        <br />
        <br />
        <strong>Encapsulation</strong> is essentially the ability of an
        object-oriented programming language to wrap data and methods that act
        on these data in one single unit. In Java’s case, in one single class!
        It also provides for a way to hide certain information or data and even
        methods from other classes or any entity outside the class or outside
        the package. And this is achieved via access specifiers or access
        modifiers public, private, the default package, and protected (which
        will be discussed in the Inheritance Labour).
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic4;
