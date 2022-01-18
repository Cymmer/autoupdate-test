import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="For Loop"
    titleJsx={
      <>
        <Text type={textTypes.BODY.MD}>
          This time, let us meet for. May the for be with you!
          <br />
          <br />
          It achieves the same thing as the while, executing statements
          repeatedly. Here is how it looks like:
        </Text>
        <Code language={programmingLanguages.JAVA}>
          {`for(<initializer>; <condition>; <iterator>)\n\tstatement;`}
        </Code>
        <Text>
          As seen above, there are 3 components to the for-loop. The first one
          is the initializer. This is executed only once at the start of the
          loop. Even when the loop will iterate a million times, the initializer
          will be executed once, hence its name. The <strong>condition</strong>{' '}
          behaves exactly as how the condition in the while behaves. The{' '}
          <strong>iterator</strong> is where you’d put the <code>iter++</code>{' '}
          found in the <strong>while</strong> sample before. You usually put
          statements that eventually lead to breaking the loop and other forms
          of iterators including all forms of accumulation. Notice that the sole
          purpose of the iterator part is to perform updates on certain
          variables used in the loop.
        </Text>
      </>
    }
  >
    <Section>
      <Text>
        Based on the while sample (answering the same problem that was presented
        at the beginning of this section), the for-loop version would look like
        this:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`for(int iter = 1; iter <= n; iter++)\n\tsum = sum + iter;`}
      </Code>
      <Text>
        Notice the similarities we have between the while-loop and the for-loop.
        We see the same condition, the same <code>sum</code> accumulation, and
        the same increment on <code>iter</code>. As you can see, though,{' '}
        <code>iter</code> was declared in the initializer of the for-loop. What
        this means is that <code>iter</code>{' '}
        <strong>only exists inside the for-loop</strong>. Outside the for-loop{' '}
        <code>iter</code> does not exist. We call this the scope of{' '}
        <code>iter</code> and we say that the scope of <code>iter</code> is only
        within the for-loop.
        <br />
        <br />
        So, now that that is out of the way, this is how the for-loop works.
        First, the initializer gets executed. Then the condition is checked.
        When this evaluates to false, the for-loop, like in the while-loop,
        stops. When the condition evaluates to true, it then executes the
        statement <code>sum = sum + iter</code>. It goes and executes the
        statements found in the iterator part of the for-loop, which, in this
        case, is <code>iter++</code>. Then execution goes back to the condition
        and checks whether it still evaluates to true. This repetition stops
        when the condition finally evaluates to false.
        <br />
        <br />
        The first solution to the summation problem using the for-loop should
        look like this:
      </Text>
      <Compiler
        hasInput
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\n\t\tint n = input.nextInt();\n\t\tint sum = 0;\n\n\t\tfor(int iter = 1; iter <= n; iter++)\n\t\t\tsum = sum + iter;\n\n\t\tSystem.out.println("The sum from 1 to " + n + " is " + sum + ".");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        <strong>Chiron side quest:</strong> Print the value of <code>iter</code>{' '}
        after the loop, right before printing the final <code>sum</code>. What
        happens? <br />
      </Text>
    </Section>
    <Section>
      <Text>
        If we declared <code>iter</code> together with <code>sum</code> like in
        the while-loop version, then it would look like this:
      </Text>
      <Compiler
        hasInput
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\n\t\tint n = input.nextInt();\n\t\tint iter = 1, sum = 0;\n\n\t\tfor(; iter <= n; iter++)\n\t\t\tsum = sum + iter;\n\n\t\tSystem.out.println("The sum from 1 to " + n + " is " + sum + ".");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        This tells you that the initializer may be left empty.
        <br />
        <br />
        <strong>Chiron side quest:</strong> With this new version, print{' '}
        <code>iter</code> <strong>right before</strong> printing the final{' '}
        <code>sum</code>. What have you observed?
        <br />
        <br />
        You can even do this with the for-loop:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\n\t\tint n = input.nextInt();\n\t\tint iter = 1, sum = 0;\n\n\t\tfor(; iter <= n;) {\n\t\t\tsum = sum + iter;\n\t\t\titer++;\n\t\t}\n\n\t\tSystem.out.println("The sum from 1 to " + n + " is " + sum + ".");\n\t}\n}`}
      </Code>
      <Text>
        Now, this looks more like the while-loop ha!
        <br />
        <br />
        <strong>Chiron side quest:</strong> Try executing this (and run after
        it!):
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tint iter = 1, sum = 0;\n\n\t\tfor(;;)\n\t\t\tSystem.out.println(iter++);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />

      <Text>
        What does this tell you?
        <br />
        <br />
        <strong>Chiron side quest:</strong> Try this one too:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tint iter = 1, sum = 0;\n\n\t\tfor(;;)\n\t\t\tSystem.out.println(iter++);\n\n\t\tSystem.out.println("This line will be printed after the loop stops.");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        What did you discover in this quest?
        <br />
        <br />
        Yet another <strong>Chiron sidequest</strong> and the one after this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tint iter = 1, sum = 0;\n\n\t\tfor(;;) {\n\t\t\tSystem.out.println(iter++);\n\t\t\tbreak;\n\t\t}\n\n\t\tSystem.out.println("This line will be printed after the loop stops.");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <Compiler
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tint iter = 1, sum = 0;\n\n\t\tfor(;; iter++){\n\t\t\tif(iter % 3 == 0)\n\t\t\t\tcontinue;\n\t\t\tSystem.out.println(iter);\n\t\t\tif(iter == 31)\n\t\t\t\tbreak;\n\t\t}\n\n\t\tSystem.out.println("This line will be printed after the loop stops.");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
    </Section>
  </TopicContainer>
);

export default Topic3;
