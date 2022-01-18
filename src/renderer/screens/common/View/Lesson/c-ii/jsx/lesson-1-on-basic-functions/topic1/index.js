import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import { FunFactCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="Declare, Define, and Call"
    titleJsx={
      <>
        <Text>
          Before we dive in and learn about functions, let’s take a look at this
          problem first. The problem is asking us to solve for{' '}
          <strong>x^(y^z)</strong>.This problem requires us to solve y^z first
          (so we store the result in <strong>res</strong>), and then compute for{' '}
          <strong>xres</strong>.
          <br />
          <br />
          Let’s take a look at the solution down below.
        </Text>
        <Compiler
          initialCustomInput="4 3 2"
          initialSourceCodes={[
            {
              code: `#include<stdio.h>\n\n// problem: (x^(y^z))\n\nint main() {\n\tint x, y, z;\n\tint yRaisedToZ;\n\tint answer;\n\t\n\t// scans for 3 integers\n\tscanf("%d", &x);\n\tscanf("%d", &y);\n\tscanf("%d", &z);\n\t\n\t// computes for y^z\n\tyRaisedToZ = 1;\n\tfor(int i = 0; i < z; i++) {\n\t\tyRaisedToZ = yRaisedToZ * y;\n\t}\n\n\t// computes for x^yRaisedToZ\n\tanswer = 1;\n\tfor(int i = 0; i < yRaisedToZ; i++) {\n\t\tanswer = answer * x;\n\t}\n\n\tprintf("%d^(%d^%d) = %d\\n", x, y, z, answer);\n}`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
        />
        <br />
        <Text>
          The two for loops do exactly the same thing. Both loops compute for
          some base raised to some exponent.
          <br />
          <br />
          Now, we ask the question: is there a way to{' '}
          <strong>
            code the power computation once, and just re-use it when we need it
            again
          </strong>{' '}
          ? The answer to that question is a resounding yes!
        </Text>
      </>
    }
  >
    <Section title="Functions!">
      <Text>
        You have seen and used functions already. <code>printf()</code>,{' '}
        <code>scanf()</code>, <code>strlen()</code>, and even the{' '}
        <code>main()</code>, they are all functions, so how do we construct or
        implement them?
        <br />
        <br />
        If a program needs to model a solution, most of the time the tasks
        involved are numerous and large (think of string comparison and magnify
        that ten- or even a hundred fold!).
        <br />
        <br />
        It is always best to decompose the solution into smaller pieces of code.
        In other words, these numerous and large tasks are delegated to these
        smaller pieces of code called <strong>modules</strong>.
        <br />
        <br />
        Since these modules are smaller, they are more manageable resulting in
        better program maintenance. Errors are now easier to fix because they
        will occur locally in the different modules of the program. There is no
        need to look at a really long program written in the <code>
          main()
        </code>{' '}
        function only. These modules are implemented in C using functions.
        <br />
        <br />
        Once modules are implemented in functions, all the program has to do is
        to use them. And when the program needs a module many times, there is no
        need to rewrite code as many times. The program can use the module as
        many times as it needs.
        <br />
        <br />
        For example, <code>pow()</code> is a function from the built-in library{' '}
        <code>math.h</code> and we can use it as many times as we want. See the
        example below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n#include<math.h>\n\nint main() {\n\t// pow() is a math.h which computes \n\t// the value of numbers with exponents\n\tint result1 = pow(2, 3); \n\tprintf("%d\\n", result1);\n\n\tint result2 = pow(4, 2);\n\tprintf("%d\\n", result2);\n\n\tint result3 = pow(5, 5);\n\tprintf("%d\\n", result3);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        We just described the benefits of functions:
        <ol>
          <li>modularity</li>
          <li>code reuse</li>
        </ol>
        Before a function can be used, it has to be declared and defined first.
        <br />
        <br />
        <strong>Declaring</strong> functions follows the template below:
        <br />
        <code>returnType functionName(parameterList);</code>
        <br />
        <br />
        Function declarations are usually placed before the main function. Some
        samples are:
        <ol>
          <li>
            <code>int func1(int, int)</code>
            <ul>
              <li>
                name of function: <code>func1</code>
              </li>
              <li>
                parameters or arguments: two parameters as arguments both are{' '}
                <code>int</code>
              </li>
              <li>
                return type: an <code>int</code>
              </li>
            </ul>
          </li>
          <li>
            <code>int func2()</code>
            <ul>
              <li>
                name of function: <code>func2</code>
              </li>
              <li>parameters or arguments: none</li>
              <li>
                return type: an <code>int</code>
              </li>
            </ul>
          </li>
          <li>
            <code>int func2()</code>
            <ul>
              <li>
                name of function: <code>func3</code>
              </li>
              <li>parameters or arguments: none</li>
              <li>
                return type: <code>void</code> or none
              </li>
            </ul>
          </li>
        </ol>
        In naming your functions, the same rule applies as in naming your
        variables/identifiers:
        <ol>
          <li>It should start with a letter or the underscore character.</li>
          <li>
            It can be followed by a series of alphanumeric characters including
            the underscore as well.
          </li>
          <li>
            It cannot contain special characters and operators and the space
            character.
          </li>
          <li>There is no limit on the length of the name of the function.</li>
        </ol>
        This are exactly the same rules for naming a variable or identifier.
        <br />
        <br />
        The only thing that distinguishes a function from a variable is the{' '}
        <strong>pair of parenthesis</strong> that follows after its name
        regardless whether it accepts arguments/parameters or not.
      </Text>
    </Section>

    <Section>
      <FunFactCard
        mainTextJsx={
          <Text>
            You cannot have your function have the same name as the predefined
            functions of the header files you’re using. Examples of these
            predefined functions are <code>printf()</code> and{' '}
            <code>scanf()</code> which are already defined in the{' '}
            <code>stdio.h</code> header file. You also cannot have another
            <code>main()</code> function in your main code.
          </Text>
        }
      />
    </Section>

    <Section>
      <Text>
        Name your functions as descriptive of what they do as possible. If your
        function is to contain more than one word, you can write the first word
        in lowercase then capitalize the first letters only of the succeeding
        words. This convention is called the <strong>camelCase</strong> naming
        convention.
        <br />
        <br />
        For example:
        <br />
        <code>void functionOne()</code>
        <br />
        <code>void anotherFunctionOne()</code>
        <br />
        <br />
        This is just a convention. You will not encounter any syntax errors if
        you are not going to follow this convention.
        <br />
        <br />
        The following are the parts of the function and their corresponding
        descriptions:
        <ol>
          <li>
            Name of the function
            <ul>
              <li>used for calling or for invoking it</li>
            </ul>
          </li>
          <li>
            Parameter list (or argument list)
            <ul>
              <li>
                can contain zero or more elements. There is no limit to this
                number
              </li>
              <li>
                if the function is not going to contain any parameter, leave it
                blank or use void
              </li>
              <li>
                the parentheses are required even if the function will not
                contain any parameter
              </li>
              <li>
                the parameter list or the argument list is used to pass
                information or data to the function
              </li>
              <li>it is a way of communicating to the module</li>
              <li>
                for example, when using <code>sqrt(double)</code> (square root
                function) from <code>math.h</code>, the parameter inside the
                function should contain a double.
              </li>
            </ul>
          </li>
          <li>
            Return type
            <ul>
              <li>
                is any of the available data types in C like{' '}
                <strong>int</strong>, <strong>double</strong>,{' '}
                <strong>float</strong>,<strong>char</strong>, an{' '}
                <strong>array</strong> (pointer) of the available data types in
                C, or a user-defined data type (enums and structures - discussed
                at the last section)
              </li>
              <li>
                if the parameter list is used to pass information or let other
                functions, including the main, to communicate to the function,
                the return (type) is used by the function to send back a message
                (data or information) to the caller of the function.
              </li>
            </ul>
          </li>
        </ol>
        Let’s use <code>sqrt(double)</code> as an example again. The return type
        is a double. And the function returns the length of the square root of
        the number in the argument list. Using <code>sqrt()</code> somehow
        provided for a communication between the main function and the{' '}
        <code>sqrt()</code> function.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n#include<math.h>\n\nint main() {\n\tdouble squareRootOf25 = sqrt(25);\n\tprintf("%.0lf", squareRootOf25);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        If a function is not to return anything, we use void as its return type.
        This type of function is sometimes referred to as a{' '}
        <strong>procedure</strong>.
        <br />
        <br />
        <strong>Defining</strong> the function means giving it behavior. A
        declaration is not enough. The function is of no use if it does not have
        any definition. This is the part where we code the function’s behavior.
        We can <strong>initialize</strong> our functions before the{' '}
        <code>main()</code>
        function but we <strong>define</strong> them after the{' '}
        <code>main()</code> function like the example below.
      </Text>
      <Code
        language={programmingLanguages.C}
      >{`#include<stdio.h>\n\n// function declaration\nint func1(int, int);\t\n\nint main() {\n\treturn 0;\n}\n\n// function definition\nint func1(int a, int b) { \n\t/* insert code here */\n}`}</Code>
      <Text>
        Take note of the difference. The function declaration is just saying
        that we’re going to create a function named <code>func1</code> that
        accepts two integer parameters and returns a value of type integer. On
        the other hand, the function definition is where we actually implement
        the behavior of the function.
        <br />
        <br />
        Copy the function template exactly as how it was declared. But for the
        function definition, the parameters must have names this time. Because
        that’s the only way we can retrieve information, via the identifier.
        <br />
        <br />
        Let’s put some definition into the function.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\n// function declaration\nint sum(int, int); \n\nint main() {\n\treturn 0;\n}\n\n// function definition\nint sum(int a, int b) { \n\tint answer = a + b;\n\t\n\t// this returns the value of answer \n\t// to where the function was called\n\treturn answer;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Since the return type of <code>sum</code> is an <code>int</code>, then a
        value of the same type must be returned by the function through the use
        of the keyword <code>return</code>
        followed by the identifier (or value) with the same type as the return
        type. In the case above, it is valid to return <code>answer</code>{' '}
        because it is of type <code>int</code> as well. Whenever the return is
        executed, the control of execution exits from the function.
        <br />
        <br />
        Compile the source code above and run it. Notice that nothing happens.
        This should be obvious since there is nothing in the main function
        except for the <code>return 0;</code>.
        <br />
        <br />
        What we are trying to say here is that just because we have declared and
        defined the function doesn’t mean it gets executed. Control of the flow
        of execution must be explicitly transferred to it. And we do this by
        <strong>invoking</strong> or <strong>calling</strong> the function.
        <br />
        <br />
        <strong>Calling</strong> the function is done by using its name and
        passing the required arguments or parameters if there are any. A
        function can be called in the main function or in some other function or
        even inside itself (we call this a recursive call).
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid display();\n\nint main() {\n\tprintf("Before calling display().\\n");\n\n\t// calling the display function\n\tdisplay();\n\t\n\tprintf("After calling display().\\n");\n\n\treturn 0;\n}\n\nvoid display() {\n\tprintf("You are inside display().\\n");\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        In the case above, no argument was passed since the function{' '}
        <code>display()</code> does not accept any parameter. When the program
        is run, the following steps happened:
        <ol>
          <li>
            <code>"Before calling display()."</code> is displayed.
          </li>
          <li>
            Then <code>display()</code> is called. When this happens, the
            control of the execution is transferred to it. This means that the{' '}
            <code>printf()</code>
            statement after the call to <code>display()</code> will be executed
            only when
            <code>display()</code> terminates and control is given back to the{' '}
            <code>main()</code>
            function
          </li>
          <li>
            Finally, it proceeds to the execution of the program by executing
            the <code>printf()</code> statement in the <code>main()</code> which
            displays <code>"After calling display()."</code>.
          </li>
        </ol>
        Let’s try to evaluate more examples.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid display(int);\n\nint main() {\n\t// calling display\n\tdisplay(3);\n\n\treturn 0;\n}\n\nvoid display(int n){\n\tprintf("You are inside display().\\n");\n\tprintf("You passed the value %d.", n);\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        In this example, a value <code>3</code> was passed as an argument since{' '}
        <code>display()</code>
        requires a parameter (an int). This may not always be a literal value.
        It may be a variable as well as long as its type is int.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include <stdio.h>\n\nint display(int);\n\nint main(){\n\t// calling display\n\tint temp = display(3);\n\tprintf("temp = %d\\n", temp);\n\n\treturn 0;\n}\n\nint display(int n) {\n\tprintf("You are inside display().\\n");\n\tprintf("You passed the value %d.\\n", n);\n\n\treturn n * n;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Since <code>display()</code> in this example returns an int, a variable
        of the same type as that of the function’s return type must receive the
        value. In this case, the receiving variable is <code>temp</code> which
        is a variable with the same data type (an int) as the return type.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint display(int);\n\nint main() {\n\t// calling display\n\tdisplay(3);\n\t\n\t// !!! we can't do this anymore since\n\t// we didn't receive the return value\n\t// of display(3) !!!\n\t// printf("temp = %d\\n", temp);\n\t\n\treturn 0;\n}\n\nint display(int n) {\n\tprintf("You are inside display().\\n");\n\tprintf("You passed the value %d.\\n", n);\n\treturn n * n;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        If the value returned by the function is not received by a variable, no
        syntax error will be encountered. But this defeats the purpose of
        letting functions return values. And this would render the printf
        statement in the main after the <code>display()</code> call not usable.
        <br />
        <br />
        We may also directly call the <code>display()</code> inside the{' '}
        <code>printf()</code> since it returns an int.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint display(int);\n\nint main() {\n\t// calling display from inside the printf\n\tprintf("Value returned by display(3) = %d\\n", display(3)); \n}\n\nint display(int n) {\n\tprintf("You are inside display().\\n");\n\tprintf("You passed the value %d.\\n", n);\n\treturn n * n;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        We have to make sure that the format specifier in the{' '}
        <code>printf()</code> matches the return type of the function. This can
        only be done when the function is non-void.
        <br />
        The above example demonstrates how parameter passing and returning
        values can be used to let the functions communicate with each other in
        an efficient manner.
        <br />
        <br />
        Alright!!
        <br />
        <br />
        We are now ready to do <code>x^(y^z)</code>. We need to implement a
        power function that accepts 2 integers as parameters, the base and
        exponent, and have it return the result.
      </Text>
      <Compiler
        initialCustomInput="4 3 2"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint power(int, int);\n\nint main() {\n\tint x, y, z;\n\tint yRaisedToZ, answer;\n\n\tscanf("%d", &x);\n\tscanf("%d", &y);\n\tscanf("%d", &z);\n\n\tyRaisedToZ = power(y, z);\n\tanswer = power(x, yRaisedToZ);\n\n\tprintf("%d^(%d^%d) = %d\\n", x, y, z, answer);\n\n\treturn 0;\n}\n\nint power(int base, int exponent) {\n\tint answer = base;\n\tfor(int i = 1; i < exponent; i++) {\n\t\tanswer = answer * base;\n\t}\n\n\treturn answer;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        We only implemented one power function but it can be called many times
        over. As shown above, power is called twice. Once for the computing{' '}
        <code>y^z</code>, and another for computing <code>x^yRaisedToZ</code>.
        <br />
        <br />
        Now that we’re familiar with how to <strong>declare</strong>,{' '}
        <strong>define</strong>, and <strong>call</strong> functions, we can now
        write working codes cleanly and efficiently.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic1;
