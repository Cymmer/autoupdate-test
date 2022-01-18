import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Compiler } from 'components/elements';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="Variable Scopes"
    titleJsx={
      <>
        <Text>
          Let’s zoom in on the use of <code>power()</code>. When functions have
          parameters and they are called or invoked, variables passed on the
          function as parameters are called <strong>actual parameters</strong>.
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
          In the above sample, the <code>y</code> and <code>z</code> that have
          been passed on to <code>power()</code>
          are called actual parameters. And so are <code>x</code> and{' '}
          <code>yRaisedToZ</code>. Looking at the definition of{' '}
          <code>power()</code> and seeing <code>base</code> and{' '}
          <code>exponent</code>, they are referred to as the{' '}
          <strong>formal parameters</strong>. They hold the values of the actual
          parameters.
        </Text>
      </>
    }
  >
    <Section>
      <Text>
        What we’re saying here is that <code>y</code> is different from{' '}
        <code>base</code>, and <code>z</code> is different from{' '}
        <code>exponent</code>. When we say different, what we mean is they are
        different allocations of <strong>memory</strong>. And therefore they
        reside in different <strong>addresses</strong> in the RAM.
        <br />
        <br />
        You know <strong>addresses</strong>. You have been using them in the
        <code>scanf()</code> statements. We can actually display these addresses
        as shown below.
      </Text>
      <Compiler
        initialCustomInput="4 3 2"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint power(int, int);\n\nint main() {\n\tint x, y, z;\n\tint yRaisedToZ, answer;\n\n\tscanf("%d", &x);\n\tscanf("%d", &y);\n\tscanf("%d", &z);\n\n\tprintf("Address of y: %p\\nAddress of z: %p\\n", &y, &z);\n\tyRaisedToZ = power(y, z);\n\n\treturn 0;\n}\n\nint power(int base, int exponent) {\n\tprintf("Address of base: %p\\nAddress of exponent: %p", &base, &exponent);\n\n\tint answer = base;\n\tfor(int i = 1; i < exponent; i++) {\n\t\tanswer = answer * base;\n\t}\n\n\treturn answer;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />

      <br />
      <Text>
        Compile and run the source. You will discover that the{' '}
        <strong>memory addresses</strong>
        of the actual parameters differ from the formal parameters. And this
        shows that, indeed, they are different entities stored in different
        locations of the RAM.
        <br />
        <br />
        The scopes of the variables <code>x</code>, <code>y</code>,{' '}
        <code>z</code>, and <code>answer</code> are <strong>local</strong> to{' '}
        <code>main()</code>. This means that they are only accessible inside
        main after they have been declared. This means that accessing them in
        <code>power()</code> will not work. Let’s try to use <code>y</code> and{' '}
        <code>z</code> in <code>power()</code>
        as shown below:
      </Text>
      <Compiler
        initialCustomInput="4 3 2"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint power(int, int);\n\nint main() {\n\tint x, y, z;\n\tint yRaisedToZ, answer;\n\n\tscanf("%d", &x);\n\tscanf("%d", &y);\n\tscanf("%d", &z);\n\n\tyRaisedToZ = power(y, z);\n\n\treturn 0;\n}\n\nint power(int base, int exponent) {\n\t// let's do something crazy!!\n\tprintf("y = %d and z = %d", y, z);\t\n\n\tint answer = base;\n\tfor(int i = 1; i < exponent; i++) {\n\t\tanswer = answer * base;\n\t}\n\n\treturn answer;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        For sure, a syntax error will be reported about the use of{' '}
        <code>y</code> and <code>z</code>. Again their scope is in main only.
        Outside the main, they do not exist.
        <br />
        <br />
        In a similar manner, the scopes of <code>base</code>,{' '}
        <code>exponent</code>, <code>i</code>, and <code>answer</code>, are only
        within <code>power()</code>.
        <br />
        <br />
        Outside power, they do not exist. The <code>answer</code> in{' '}
        <code>power()</code> is definitely not the same <code>answer</code>{' '}
        found in the <code>main()</code>. Again, this is easy to inspect by
        printing their addresses.
      </Text>
      <Compiler
        initialCustomInput="4 3 2"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint power(int, int);\n\nint main() {\n\tint x, y, z;\n\tint yRaisedToZ, answer;\n\n\tscanf("%d", &x);\n\tscanf("%d", &y);\n\tscanf("%d", &z);\n\n\tyRaisedToZ = power(y, z);\n\tanswer = power(x, yRaisedToZ);\n\n\tprintf("Address of answer in main(): %p\\n", &answer);\n\n\treturn 0;\n}\n\nint power(int base, int exponent) {\n\tint answer = base;\n\tfor(int i = 1; i < exponent; i++) {\n\t\tanswer = answer * base;\n\t}\n\n\tprintf("Address of answer in power(): %p\\n", &answer);\n\n\treturn answer;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
    </Section>

    <Section title="Passing Parameters by Value">
      <Text>
        What passing parameters by value means is that no matter what changes we
        apply to the formal parameters, the actual parameters remain unchanged.
        To understand this better, let’s introduce a function that squares the
        parameter below.
        <br />
        <br />
        Compile this source and run it. Enter 10 as input for <code>base</code>.
      </Text>
      <Compiler
        initialCustomInput="10"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid square(int);\n\nint main() {\n\tint base, exp1, exp2, answer;\n\n\tscanf("%d", &base);\n\tsquare(base);\n\n\tprintf("base: %d\\n",base);\n\n\treturn 0;\n}\n\nvoid square(int base) {\n\tbase = base * base;\n\tprintf("base in square(): %d\\n", base);\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        You’ll notice that inside <code>square()</code>, base was successfully
        squared. But when control of execution is returned to the{' '}
        <code>main()</code>, and <code>base</code> is printed again, we see{' '}
        <code>10</code>
        displayed.
        <br />
        <br />
        All we need to do to understand why this is the case is to check the
        memory addresses printed:
      </Text>
      <Compiler
        initialCustomInput="10"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid square(int);\n\nint main() {\n\tint base, exp1, exp2, answer;\n\n\tscanf("%d", &base);\n\tprintf("Address of base in main(): %p\\n", &base);\n\n\tsquare(base);\n\n\treturn 0;\n}\n\nvoid square(int base) {\n\tprintf("Address of base in square(): %p\\n", &base);\n\n\tbase = base * base;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        The <code>base</code> in the main is definitely not the{' '}
        <code>base</code> in <code>square()</code>. The <code>base</code> in
        <code>square()</code> is only a <strong>copy</strong> of{' '}
        <code>base</code> but it is not really the same <code>base</code>. The
        variable <code>base</code> that was manipulated in <code>square()</code>{' '}
        is <strong>local</strong> to <code>square()</code>.
        <br />
        <br />
        In a similar manner, the <code>base</code> in main() is local to main(),
        different from the <code>base</code> in <code>square()</code>. This is
        called passing parameters by value.
        <br />
        <br />
        You are probably wondering what <code>%p</code> is. It is a format
        specifier for pointers. Pointers are a kind of variable that can only
        hold memory addresses as value. Pointers will be discussed in a separate
        section.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic2;
