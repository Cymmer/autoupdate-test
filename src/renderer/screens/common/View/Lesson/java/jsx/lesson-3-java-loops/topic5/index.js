import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';
import Chessboard from './chessboard.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';
import Image from '../../../../Image';

const Topic5 = () => (
  <TopicContainer
    image={IntroImage}
    number={5}
    title="Nested Loop"
    titleJsx={
      <>
        <Text type={textTypes.BODY.MD}>
          As was mentioned earlier, the statements in loops can be loops
          themselves! This is what we call a nested loop! Ever seen a
          chessboard?
        </Text>
        <Image alt="Chessboard" src={Chessboard} />
      </>
    }
  >
    <Section>
      <Text>
        You are to print all the cells of a chess board. Instead of using the
        letters from a to h, the numbers from 1 to 8 will be utilized. <br />
        So when printing cell a3, print 13 instead. 75 instead of g5. The
        resulting printed cells should look like this:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`1-8 2-8 3-8 4-8 5-8 6-8 7-8 8-8\n1-7 2-7 3-7 4-7 5-7 6-7 7-7 8-7\n1-6 2-6 3-6 4-6 5-6 6-6 7-6 8-6\n1-5 2-5 3-5 4-5 5-5 6-5 7-5 8-5\n1-4 2-4 3-4 4-4 5-4 6-4 7-4 8-4\n1-3 2-3 3-3 4-3 5-3 6-3 7-3 8-3\n1-2 2-2 3-2 4-2 5-2 6-2 7-2 8-2\n1-1 2-1 3-1 4-1 5-1 6-1 7-1 8-1`}
      </Code>
      <Text>
        We know this involves repetition. We need some variable that goes from 1
        to 8. That is easy. And another one that goes from 8 down to 1.
        <br />
        <br />
        <strong>Chiron sidequest:</strong> Check the code below and fix it so it
        gives the desired result!
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tfor(int i = 1; i <= 8; i++) {\n\t\t\tfor(int j = 8; j >=1; j--) {\n\t\t\t\tSystem.out.print(j + "-" + i + " ");\n\t\t\t}\n\t\t\tSystem.out.println();\n\t\t}\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <Text>To help you fix it, let’s take look at this first:</Text>
      <Code language={programmingLanguages.JAVA}>
        {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tfor(int i = 1; i <= 3; i++) {\n\t\t\tfor(int j = 1; j <= 5; j++) {\n\t\t\t\tSystem.out.print(i + "-" + j + " ");\n\t\t\t}\n\t\t\tSystem.out.println();\n\t\t}\n\t}\n}`}
      </Code>
      <Text>
        Notice that there is a for-loop inside another for-loop. This is called
        a nested-loop as was said earlier. <br />
        <br />
        There is an inner loop and an outer loop. The inner loop is the one
        where you can find the <code>j</code>. The one with the <code>i</code>{' '}
        is the outer loop. What this means is that the inner loop will be
        iterated 3 times (since <code>i</code> goes from 1 to 3). Again, this
        means that the inner loop will be executed 3 times. And each time it is
        executed, the <code>j</code> goes from 1 to 5. <code>j</code> will go
        from 1 to 5, 3 times in total! Once when <code>i</code> is 1, another
        when <code>i</code> to 2, and finally a third time when <code>i</code>{' '}
        is 3. At each iteration of <code>i</code>, <code>j</code> gets reset to
        1.
        <br />
        <br />
        It should give you the output below:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`1-1 1-2 1-3 1-4 1-5 // when i = 1\n2-1 2-2 2-3 2-4 2-5 // when i = 2\n3-1 3-2 3-3 3-4 3-5 // when i = 3`}
      </Code>
    </Section>
    <Section>
      <Text>
        <strong>Chiron impresses:</strong> Recall the primality check problem?
        What if we change it to displaying all prime numbers less than{' '}
        <code>n</code>? Here, we are given a number <code>n</code>, say, 10.
        What are the prime numbers less than 10? These are 2, 3, 5, and 7. The
        easiest solution to this problem is to go from 2 all the way to 10 and
        check if any of these numbers are prime. We already know how to check if
        a certain number is prime or not. We also know how to generate numbers
        from 1 to some upper bound <code>n</code>. Knowing these, it should now
        be easy to solve this problem.
        <br />
        <br />
        And you guessed it again! For each number that is generated, check
        whether this is prime or not. And exactly! This needs a nested loop!
        <br />
        <br />
        Generating the numbers from 2 to n-1 easily look like this:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`for(int cp = 2; cp < n ; cp++) // cp is short for candidate prime`}
      </Code>
      <Text>
        Then for each of these candidate primes, we need to check whether they
        are prime or not.
        <br />
        <br />
        Recall that checking whether a number is prime or not, candidate factors
        are generated, beginning with 2. This tells us, the use of a for-loop is
        appropriate. Since the for-loop has an initializer, it would then be
        easy to reset the candidate factors back to 2. We will utilize the
        boolean prime that we saw early on. It should look like this:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`boolean prime = true;\nfor(int cf = 2; prime && cf * cf <= cp; cf++) { // notice the use of compound condition\n\tif(cp % cf == 0)\n\t\tprime = false; // the break is not used because of the compound condition\n}`}
      </Code>
      <Text>
        Now that these are setup. There is only one thing left to do. To print
        <code>cp</code> if it is prime. The solution should look like this:
      </Text>
      <Compiler
        hasInput
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\t\tint n = input.nextInt();\n\n\t\tfor(int cp = 2; cp < n; cp++) { // cp is short for candidate prime\n\t\t\tboolean prime = true; // prime gets reset for each candidate prime\n\t\t\tfor(int cf = 2; prime && cf * cf <= cp; cf++) { // notice the use of compound condition\n\t\t\t\tif(cp % cf == 0)\n\t\t\t\t\tprime = false; // the break is not used because of the compound condition\n\t\t\t}\n\t\t\tif(prime)\n\t\t\t\tSystem.out.println(cp);\n\t\t}\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
    </Section>
  </TopicContainer>
);

export default Topic5;
