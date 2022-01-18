import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic5 = () => (
  <TopicContainer
    image={IntroImage}
    number={5}
    title="Methods"
    titleJsx={
      <Text>
        How do we construct a method in Java?
        <br /> We give it a name, very much like how we name variables in Java.
        Then add the pair of parentheses to its name, very much the constructor.
        But unlike the constructor,{' '}
        <strong>its name must be different from the class name</strong>. One
        more thing, the method must have a return type.
        <br />
        <br />
        Remember that you make a method to do a certain task for you. This task
        may result in a computer value, very much like how functions in algebra
        behave. Take for instance f(x) = x + 7. f(x) performs a task. It adds 7
        to whatever x is. This is the result. This result must have a type
        because it is data. If x were an int, then x + 7 would be an int. If x
        were a double, then x + 7 would be a double. That is what we mean by
        return type. If this were too much, recall the <code>
          nextInt()
        </code>, <code>nextDouble()</code> of <code>Scanner</code>, and{' '}
        <code>charAt(int)</code>. <code>nextInt()</code> is a method. It returns
        an int. <code>nextDouble()</code> is a method. It returns a double.{' '}
        <code>charAt(int)</code> is a method that accepts an integer (very much
        like f(x)) and returns a character found in the desired position of a
        string. Hence their return types are int, double, and char respectively.
      </Text>
    }
  >
    <Section>
      <Text>
        If and when the methods are not going to return any result of whatever
        form, then we set it to <code>void</code>. Yes. You have seen this with
        the <code>main</code> method! And yes, the <code>main</code> is a
        method! We are getting closer and closer to cracking the mystery of the{' '}
        <code>main</code> - which we have left unsolved in Chiron’s training!
        <br />
        <br />
        Going back to the methods we were tasked to do, methods follow this
        template:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`<return_type> methodName(<argument - parameter - list>)`}
      </Code>
      <Text>
        The return type can be any valid Java data type, including object types
        both from Java libraries and user-defined ones (classes that you
        construct).
        <br />
        <br />
        We need three methods then. One for sign, another for parity, and
        finally another for primality. And let’s call them{' '}
        <code>signCheck</code>, <code>parityCheck</code>,{' '}
        <code>primalityCheck</code>.
        <br />
        <br />
        Let’s begin:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`class Number {\n\t// instance variables\n\tint value;\n\tint sign;\n\tint parity;\n\tint primality;\n\n\tNumber() { // default constructor\n\t\tvalue = 0;\n\t\tsign = 0;\n\t\tparity = 0;\n\t\tprimality = 0;\n\t}\n\n\tNumber(int n) { // overloaded constructor, n is the argument or parameter and it is int\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\t// checks and assigns appropriate sign\n\tvoid signCheck() {\n\t\tif(value < 0)\n\t\t\tsign = -1;\n\t\telse if(value > 0)\n\t\t\tsign = 1;\n\t\telse\n\t\t\tsign = 0;\n\t}\n\n\t// checks and assigns appropriate parity\n\tvoid parityCheck() {\n\t\tif(value % 2 == 0)\n\t\t\tparity = 0;\n\t\telse\n\t\t\tparity = 1;\n\t}\n\n\t// checks and assigns appropriate primality\n\tvoid primalityCheck() {\n\t\tif(value > 0) {\n\t\t\tboolean prime = true;\n\t\t\tfor(int cf = 2; prime && cf * cf <= value; cf ++)\n\t\t\t\tif(value % cf == 0)\n\t\t\t\t\tprime = false;\n\t\t\tif(prime)\n\t\t\t\tprimality = 1;\n\t\t\telse\n\t\t\t\tprimality = 2;\n\t\t} else\n\t\t\tprimality = 0;\n\t}\n}`}
      </Code>
      <Text>
        Again, to highlight, the instance variables are{' '}
        <strong>
          visible and accessible in all the constructors and methods of a class
        </strong>
        . This means that in our sample above, <code>value</code>,{' '}
        <code>sign</code>, <code>parity</code>, and <code>primality</code> are
        visible and accessible in the methods <code>signCheck()</code>,{' '}
        <code>parityCheck()</code>, and
        <code>primalityCheck()</code>.
        <br />
        <br />
        More formally, we say that the scope of instance variables is inside the
        entire class, i.e. within the pair of curly braces that enclose the
        class definition.
        <br />
        <br />
        Notice also that the methods <code>signCheck()</code>,{' '}
        <code>parityCheck()</code>, and <code>primalityCheck()</code> were
        invoked in the overloaded constructor where we need them.
        <br />
        <br />
        This is what happens when we invoke or call methods. Let’s focus on the
        this alone:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`Number(int n) { // overloaded constructor, n is the argument or parameter and it is int\n\tvalue = n;\n\tsignCheck();\n\tparityCheck();\n\tprimalityCheck();\n}`}
      </Code>
      <Text>
        Invoking or calling a method is done by using its name and passing the
        necessary arguments or parameters if needed.
        <br />
        <br />
        It means that the control of the program is transferred to the method
        that is called or invoked. After assigning <code>n</code> to{' '}
        <code>value</code>, program control will transfer to method{' '}
        <code>signCheck()</code> as this is what is to be executed next.
        Statements in <code>signCheck()</code> will be executed in the entirety
        of its scope. Once done, program control will be transferred back to
        where the method was invoked, in this case, the overloaded constructor.
        It will proceed and execute the next statement which is another method
        call, <code>parityCheck()</code>. Once <code>parityCheck()</code>{' '}
        finishes execution, control will go back to the overloaded constructor
        and execute <code>primalityCheck()</code>. <code>primalityCheck()</code>{' '}
        will finish execution and control will return to the overload
        constructor and finally, the overloaded constructor is done as the
        closing curly brace is encountered. Whew!
      </Text>
    </Section>

    <Section>
      <Text>
        At this point, focus will be given to accessing member data or instance
        variables. Check the main below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tNumber n = new Number();\n\t\tNumber m = new Number(10);\n\t\tNumber o = new Number(249), p = new Number(-23);\n\t\tSystem.out.println("value: " + n.value);\n\t\tSystem.out.println("sign: " + n.sign);\n\t\tSystem.out.println("parity: " + n.parity);\n\t\tSystem.out.println("primality: " + n.primality);\n\n\t\tvalue = 10;\n\t\tsign = 0;\n\t\tparity = 1;\n\t\tprimality = 0;\n\t}\n}`,
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
        When this is compiled, errors are reported (4 to be exact). Notice that{' '}
        <code>value</code>, <code>sign</code>, <code>parity</code>, and{' '}
        <code>primality</code> have been accessed in the main method and have
        been assigned the corresponding values seen. Inside the main method,{' '}
        <strong>they do not exist</strong>. Notice how they were not declared.
        They cannot be directly accessed from the main or from any part of the
        code outside class <code>Number</code>. The scopes of <code>value</code>
        , <code>sign</code>, <code>parity</code>, and <code>primality</code> are
        within class <code>Number</code>.
        <br />
        <br />
        But since we have Number instances (Number objects named <code>
          n
        </code>, <code>m</code>, <code>o</code>, and
        <code>p</code>), it is these objects that have <code>value</code>,{' '}
        <code>sign</code>, <code>parity</code>, and <code>primality</code>. And
        because they are different instances of Number, then all of them have
        these instance variables. To access them, we appropriately use the{' '}
        <strong>dot operator</strong>.
        <br />
        <br />
        Check the corrected access below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `class Main {\n\tpublic static void main(String args []){\n\t\tNumber n = new Number();\n\t\tNumber m = new Number(10);\n\t\tNumber o = new Number(249), p = new Number(-23);\n\n\t\t// to access member data or instance variables, the dot operator is used\n\t\tSystem.out.println("value: " + n.value);\n\t\tSystem.out.println("sign: " + n.sign);\n\t\tSystem.out.println("parity: " + n.parity);\n\t\tSystem.out.println("primality: " + n.primality);\n\n\t\tn.value = 10;\n\t\tn.sign = 0;\n\t\tn.parity = 1;\n\t\tn.primality = 0;\n\n\t\tSystem.out.println("value: " + n.value);\n\t\tSystem.out.println("sign: " + n.sign);\n\t\tSystem.out.println("parity: " + n.parity);\n\t\tSystem.out.println("primality: " + n.primality);\n\t}\n}`,
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
      <Text>
        Notice that we keep on printing information about the{' '}
        <code>Number</code> objects created. This calls for a method to be
        constructed for the Number class. See the updated code below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tNumber n = new Number();\n\t\tNumber m = new Number(10);\n\t\tNumber o = new Number(249), p = new Number(-23);\n\n\t\t// to access member data or instance variables, the dot operator is used\n\t\tn.display();\n\t\tm.display();\n\t\to.display();\n\t\tp.display();\n\n\t\tn.value = 10;\n\t\tn.sign = 0;\n\t\tn.parity = 1;\n\t\tn.primality = 0;\n\n\t\tn.display();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `class Number {\n\t// instance variables\n\tint value;\n\tint sign;\n\tint parity;\n\tint primality;\n\n\tNumber() { // default constructor\n\t\tvalue = 0;\n\t\tsign = 0;\n\t\tparity = 0;\n\t\tprimality = 0;\n\t}\n\n\tNumber(int n) { // overloaded constructor, n is the argument or parameter and it is int\n\t\tvalue = n;\n\t\tsignCheck();\n\t\tparityCheck();\n\t\tprimalityCheck();\n\t}\n\n\tvoid signCheck() {\n\t\tif(value < 0)\n\t\t\tsign = -1;\n\t\telse if(value > 0)\n\t\t\tsign = 1;\n\t\telse\n\t\t\tsign = 0;\n\t}\n\n\tvoid parityCheck() {\n\t\tif(value % 2 == 0)\n\t\t\tparity = 0;\n\t\telse\n\t\t\tparity = 1;\n\t}\n\n\tvoid primalityCheck() {\n\t\tif(value > 0) {\n\t\t\tboolean prime = true;\n\t\t\tfor(int cf = 2; prime && cf * cf <= value; cf++)\n\t\t\t\tif(value % cf == 0)\n\t\t\t\t\tprime = false;\n\t\t\tif(prime)\n\t\t\t\tprimality = 1;\n\t\t\telse\n\t\t\t\tprimality = 2;\n\t\t} else\n\t\t\tprimality = 0;\n\t}\n\n\tvoid display() {\n\t\tSystem.out.println("value: " + value);\n\t\tSystem.out.println("sign: " + sign);\n\t\tSystem.out.println("parity: " + parity);\n\t\tSystem.out.println("primality: " + primality);\n\t\tSystem.out.println();\n\t}\n}\n\n`,
            file_name: 'Number',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        Not only do we have access to member data but we also have access to the
        methods as well. And to call or invoke them, the{' '}
        <strong>dot operator</strong> is used as shown in the code above when{' '}
        <code>display()</code> was invoked for the 4 <code>Number</code>{' '}
        objects. Since all these objects are <code>Numbers</code>, then all 4 of
        them have the <code>display</code> method as well.
        <br />
        <br />
        <strong>Labour reminds:</strong> when invoking or calling methods, do
        not forget the pair of parentheses <strong>()</strong>.
        <br />
        <br />
        This brings us to beg the question. Is it possible to invoke{' '}
        <code>signCheck()</code>, <code>parityCheck()</code>, and{' '}
        <code>primalityCheck()</code> as well? The answer is a definite yes!
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`n.signCheck();\nm.parityCheck();\no.primalityCheck();`}
      </Code>
      <Text>
        But what does this achieve? Take the <code>Number</code> object{' '}
        <code>m</code> for instance. Its <code>value</code> is 10. When{' '}
        <code>m</code> was constructed, notice that the overloaded constructor
        was automatically invoked. And all the check methods were invoked from
        the overloaded constructor.
        <br />
        <br />
        Calling <code>m.signCheck()</code> does not do anything except set the{' '}
        <code>sign</code>, again, which was already set. There must be a way to
        force the three check methods to not be accessible outside{' '}
        <code>Number</code> altogether!
        <br />
        <br />
        This is not the only problem we have at hand. Notice that{' '}
        <code>value</code> is accessible allowing clients to change value at any
        given point in time. This refers to the lines below found in the main
        method.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`n.value = 10;\nn.sign = 0;\nn.parity = 1;\nn.primality = 1;`}
      </Code>
      <Text>
        When this is allowed, then there is no way to make sure that the{' '}
        <code>sign</code>, <code>parity</code>, and <code>primality</code> are
        all consistent with the <code>value</code>. In the snippet of code
        above, the value is 10. But the <code>sign</code> is set to 0 when it
        should be set to 1. The same can be said of <code>parity</code>, 10 is
        even, so <code>parity</code> should have been set to 0. And finally,{' '}
        <code>primality</code> was wrongly set to 1 when 10 is definitely not
        prime.
        <br />
        <br />
        Is it possible, then,{' '}
        <strong>
          to hide certain data, certain methods from the clients of the class
        </strong>
        ? And you guessed it. Of course there is! We call them access
        specifiers. Stay tuned!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic5;
