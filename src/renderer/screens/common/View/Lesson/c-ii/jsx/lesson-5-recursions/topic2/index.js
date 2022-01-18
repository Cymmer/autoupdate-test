import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import Infographic1 from './infographic1.png';
import Infographic2 from './infographic2.png';
import Infographic3 from './infographic3.png';
import Infographic4 from './infographic4.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';
import Image from '../../../../Image';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="Recursion Applications"
    titleJsx={
      <>
        <Text type={textTypes.HEADING.XS}>Multiplication via Addition</Text>
        <Text>
          Let’s have a look at the code below and trace the whole process.
        </Text>
        <Compiler
          initialSourceCodes={[
            {
              code: `#include<stdio.h>\n\nint times(int, int);\n\nint main() {\n\tprintf("%d\\n", times(5, 3));\n\n\treturn 0;\n}\n\nint times(int n, int m) {\n\tif(m == 1) {\n\t\treturn n;\n\t} else {\n\t\treturn n + times(n, m-1);\n\t}\n}`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
        />
        <br />
        <Text>Below is the stack trace of the call.</Text>
        <Code>
          {`times(5, 3)\nreturn 5 + times(5, 2)\nreturn 5 + return 5 + times(5, 1)\nreturn 5 + return 5 + return 5`}
        </Code>
      </>
    }
  >
    <Section>
      <Text>
        When <code>times()</code> is invoked, <code>n</code> is <code>5</code>{' '}
        and <code>m</code> is <code>3</code>. Since <code>m</code> is not{' '}
        <code>1</code>, it goes to the recursive call. It is supposed to return{' '}
        <code>5</code> plus something, but this something is a recursive call,
        so this has to be invoked and therefore the return is suspended.
        <br />
        <br />
        Invoking <code>times(5, 2)</code> will give us{' '}
        <code>return 5 + times(5, 1)</code>. Again, the <code>return</code> is
        suspended and <code>times(5, 1)</code> is invoked . Since <code>m</code>{' '}
        is now <code>1</code>, no recursive call is made and it simply returns{' '}
        <code>5</code> and execution cascades back to the suspended returns. How
        does C keep track of where to go back to?
        <br />
        <br />
        All function calls in C (recursive or otherwise) are placed in the{' '}
        <strong>call stack</strong>. Again, imagine stacking up plates. Plates
        are put on top the stack of plates and never below it or at the bottom.
        So the series of calls to times looks like the figure below.
      </Text>
      <Image alt="Call Stack 1" src={Infographic1} />
      <Text>
        The <code>return 5</code> at the top of the stack is the result of
        having to call <code>times(5, 1)</code>. After executing this{' '}
        <code>return 5</code>, the execution goes back to the part of the
        execution that invoked the <code>times(5, 1)</code>. This is found right
        below it as shown below.
      </Text>
      <Image alt="Call Stack 2" src={Infographic2} />
      <Text>
        This keeps on going until it reaches the part that started it all,{' '}
        <code>times(5,3)</code>.
      </Text>
      <Image alt="Call Stack 3" src={Infographic3} />
      <Image alt="Call Stack 4" src={Infographic4} />
      <Text>
        Let’s look at several recursion examples and evaluate how efficient the
        recursions for each problem are.
      </Text>
    </Section>

    <Section title="Power">
      <Text>
        As shown earlier, we execute all the processes that was called before
        returning to the first function call that started it all. Let’s look at
        a recursion example that deals with powers.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint power(int, int);\n\nint main() {\n\tprintf("%d", power(2, 4));\n\t\n\treturn 0;\n}\n\nint power(int x, int y) {\n\tif(y == 1) {\n\t\treturn x;\n\t} else {\n\t\treturn x * power(x, y-1);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        As an exercise, study this other version of power. This time, it does
        two recursive calls.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint power(int, int);\n\nint main() {\n\tprintf("%d", power(2, 16));\n\n\treturn 0;\n}\n\nint power(int x, int y) {\n\tif(y == 1) {\n\t\treturn x;\n\t} else {\n\t\tif(y % 2 == 0) {\n\t\t\treturn power(x, y/2) * power(x, y/2);\n\t\t} else {\n\t\t\treturn x * power(x, y/2) * power(x, y/2);\n\t\t}\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>And then finally, check this one last version.</Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint power(int, int);\n\nint main() {\n\tprintf("%d", power(2, 16));\n\n\treturn 0;\n}\n\nint power(int x, int y) {\n\tif(y == 1) {\n\t\treturn x;\n\t} else {\n\t\tif(y % 2 == 0) {\n\t\t\treturn power(x*x, y/2);\n\t\t} else {\n\t\t\treturn x * power(x*x, y/2);\n\t\t}\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Study the 3 different versions of the recursive power above and compare
        the number of multiplications performed.
      </Text>
    </Section>

    <Section title="Fibonacci">
      <Text>
        One of the naturally recursive problems out there is the Fibonacci
        elements. In fact, its very definition is recursive:
        <code>
          fib(n) = 1 if n = 1 or n = 2. It is defined as fib(n) = fib(n-1) +
          fib(n-2) when n {'>'} 2
        </code>
        .
      </Text>
      <Compiler
        initialCustomInput="8"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint fib(int);\n\nint main() {\n\tint x;\n\t\n\tscanf("%d", &x);\n\n\tprintf("%d", fib(x));\n\n\treturn 0;\n}\n\nint fib(int n) {\n\tif(n == 1 || n == 2) {\n\t\treturn 1;\n\t} else {\n\t\treturn fib(n-1) + fib(n-2);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
    </Section>

    <Section title="Decimal to Binary">
      <Text>
        Another problem that can be solved with recursion is the conversion of a
        decimal number to its binary form. See the code below:
      </Text>
      <Compiler
        initialCustomInput="15"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid decToBin(int);\n\nint main() {\n\tint x;\n\n\tscanf("%d", &x);\n\tdecToBin(x);\n\n\treturn 0;\n}\n\nvoid decToBin(int n) {\n\tif(n > 0) {\n\t\tdecToBin(n / 2);\n\t\tprintf("%d", n % 2);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        <code>decToBin</code> suspends (or holds off) the printing of the
        remainder. It does the recursive call first until the base case is
        reached. And then that’s the time when it starts printing the remainders
        going down the call stack.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic2;
