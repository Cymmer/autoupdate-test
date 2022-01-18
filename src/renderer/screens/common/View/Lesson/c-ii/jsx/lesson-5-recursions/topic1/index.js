import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="Recursion Cases"
    titleJsx={
      <>
        <Text>
          Remember when we were first talking about functions? There was a
          mention that a function can be called inside itself.
          <br />
          <br />
          This is called a <strong>recursive call</strong> – a call to itself.
          Take a look at the code below. Compile and run it and observe what
          happens.
        </Text>
        <Compiler
          initialSourceCodes={[
            {
              code: `#include<stdio.h>\n\nvoid display();\n\nint main() {\n\tdisplay();\n\n\treturn 0;\n}\n\nvoid display() {\n\tprintf("display()\\n");\n\n\t// watch this call to myself!\n\tdisplay();\n}\n`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
        />
        <br />
        <Text>
          You probably have expected it. An infinite loop occurred.{' '}
          <code>display()</code> was printed on the console infinitely many
          times. This occurred because when <code>display()</code> was invoked
          in the main function, it calls <code>display()</code> inside it. To
          avoid such an encounter, we need to write the recursive function
          properly.
        </Text>
      </>
    }
  >
    <Section>
      <Text>
        Recall that solutions or algorithms should be composed of a{' '}
        <strong>finite set</strong> of instructions or commands, but in this
        case, it goes on forever.
        <br />
        <br />
        To ensure that the recursive function terminates, there are two parts to
        it:
        <ul>
          <li>the base case</li>
          <li>the recursive case</li>
        </ul>
        <br />
        <br />
        The <strong>base case</strong> defines the condition that terminates or
        stops (halting condition) the recursion. The{' '}
        <strong>recursive case</strong> is the recursive call with a different
        input that progressively gets closer to the base case.
      </Text>
      <Code showLineNumbers language={programmingLanguages.C}>
        {`void display(int n) {\n\tif(n > 0) {\n\t\tprintf("display()\\n");\n\t\tdisplay(n-1);\n\t}\n}\n`}
      </Code>
      <Text>
        <strong>Line 2</strong> gives you a clue as to what the base case is.
        The stopping condition, then, is when <code>n</code> has been reduced to{' '}
        <code>0</code> (i.e. <code>n</code> is not greater than <code>0</code>{' '}
        anymore). <strong>Line 4</strong> is the recursive case. It is the
        recursive call with a different input in the argument. As you may have
        noticed, that difference will eventually lead to the base case.
        <br />
        <br />
        Let’s call this in the <code>main()</code>, and pass <code>5</code> for{' '}
        <code>n</code>. Trace time!
      </Text>
      <Code>
        {`display(5) - call in the main\nn: 5\ndisplay()\ndisplay(4)\nn: 4\ndisplay()\ndisplay(3)\nn: 3\ndisplay()\ndisplay(2)\nn: 2\ndisplay()\ndisplay(1)\nn: 1\ndisplay()\ndisplay(0)\nn: 0\n--stop--`}
      </Code>
      <Text>
        Be careful when defining the recursive case to avoid an infinite
        recursion.
        <br />
        <br />
        Let’s check the code below.
      </Text>
      <Code language={programmingLanguages.C}>
        {`void display(int n) {\n\tif(n > 0) {\n\t\tprintf("display()\\n");\n\t\tdisplay(n--);\n\t}\n}`}
      </Code>
      <Text>
        How different will this behave from the one above? While at it, check
        this other one below.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid display(int);\n\nint main() {\n\tdisplay(5);\n\treturn 0;\n}\n\nvoid display(int n) {\n\tif(n > 0) {\n\t\tprintf("Black, this week's color!\\n");\n\t\tdisplay(--n);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        This code’s base case is <code>n {'>'} 0</code> and we can see that
        through successive recursive calls, the recursive case --n makes sure
        that eventually, n will reach 0 and thus terminating the recursion.
        <br />
        <br />
        What about this one?
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid display();\n\nint main() {\n\tdisplay(5);\n\treturn 0;\n}\n\nvoid display() {\n\tint n = 5;\n\n\tif(n > 0) {\n\t\tprintf("Black, this week's color!\\n");\n\t\tn--;\n\t\tdisplay();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        The display above most definitely will not terminate. Although{' '}
        <code>n</code> is decremented, when the recursive call is executed,{' '}
        <code>n</code> is reset back to <code>5</code>. This means it never
        reaches <code>0</code>, and therefore <code>n</code> is always greater
        than <code>0</code>.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic1;
