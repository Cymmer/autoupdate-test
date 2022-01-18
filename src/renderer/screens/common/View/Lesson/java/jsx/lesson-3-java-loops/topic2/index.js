import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { FunFactCard } from 'components';

import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="While Loop"
    titleJsx={
      <>
        <Code language={programmingLanguages.JAVA}>
          {`while(<condition>)\n\tstatement;`}
        </Code>
        <br />
        <Text type={textTypes.BODY.MD}>
          The code snippet above shows that it looks exactly like the
          if-statement you’ve met in the previous training. This time, instead
          of using the keyword <code>if</code>, <code>while</code> replaces it.
          This means{' '}
          <strong>that statement will be executed many times over</strong>, so
          long as the condition in the <code>while</code> evaluates to true. The
          statement here could be any valid Java statement like assignment
          statements with computations, if-statements, and what do you know,
          loops themselves!
        </Text>
      </>
    }
  >
    <Section>
      <Text>
        The version below does exactly the same thing as described above but
        this time it repeatedly executes multiple statements, hence the use of
        the curly braces to set the scope of iteration.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`while(<condition>) {\n\tstatement1;\n\tstatement2;\n\tstatement3;\n\t...\n\tstatementN;\n}`}
      </Code>
      <Text>
        Going back to the first solution to the problem that was introduced to
        us, we would need the upper bound <code>n</code> (which will come from
        the user) and also a variable to hold the initial value 1. We are going
        to call this, <code>iter</code> (short for iterator as it should iterate
        from 1 all the way to <code>n</code>). And finally, a <code>sum</code>{' '}
        where the result should be stored.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        int n = 0, iter = 1, sum = 0;
      </Code>
      <Text>
        Next step is to set up the <code>while</code>. Therefore, a condition
        must be constructed and that statement{' '}
        <strong>that would lead to break the iteration.</strong>
      </Text>
      <Code
        language={programmingLanguages.JAVA}
      >{`while(iter <= n) {\n\titer++;\n}`}</Code>
      <Text>
        Recall that <code>iter</code> begins in 1. And it has to turn to 2, then
        3, then 4, all the way to <code>n</code>. And <code>iter++</code>{' '}
        certainly does half the trick! Half only because the <code>while</code>{' '}
        would be responsible for repeating <code>iter++</code> many times over!
        And since we need <code>iter</code> to reach n, then the condition above
        is perfect! <code>iter</code> will be incremented one last time and that
        will make <code>iter</code> equal to <code>n + 1</code>. When this
        happens, <code>iter</code> is <strong>no longer</strong> {`<=`} n. The
        loop or iteration terminates!
        <br />
        <br />
        As you expected, we are not done yet. We have not computed for the{' '}
        <code>sum</code> yet. <code>sum</code> needs to accumulate value at
        iteration. By how much should <code>sum</code> accumulate? You guessed
        right! Whatever <code>iter</code> is! This is correct because, remember,{' '}
        <code>iter</code> begins in 1, then increments to 2, then 3, all the way
        to <code>n</code>. The exact same values we need to sum up!
        <br />
        <br />
        How, then, do we let <code>sum</code> accumulate by <code>iter</code>?
        See for yourself!
      </Text>
      <Code language={programmingLanguages.JAVA}>sum = sum + iter;</Code>
      <Text>
        What we are doing here is updating the value of <code>sum</code> (do not
        forget that = is an assignment operator - it exactly updates the value
        of the variable on the left-hand side of it, in this case{' '}
        <code>sum</code>
        ). What the right-hand side does is it takes the current value of{' '}
        <code>sum</code> and adds the value of <code>iter</code> to it. It is
        this result that is assigned to <code>sum</code> thereby updating its
        value. And this is exactly what accumulation means!
        <br />
        <br />
        Now, let’s put together the solution!
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`while(iter <= n)\n\titer++;\n\tsum = sum + iter;`}
      </Code>
      <Text>
        Observe what we have so far.
        <br />
        <br />
        First off, we wanted to repeat or iterate two statements. These are{' '}
        <code>iter++</code> and <code>sum = sum + iter</code>. But your
        suspicion is right again! Only <code>iter++</code> will be iterated and{' '}
        <code>sum = sum + iter</code> will only be executed when the{' '}
        <code>while</code> loop stops or breaks.
        <br />
        <br />
        What we need to do here is enclose the two statements in the{' '}
        <strong>pair of curly braces</strong>.
        <br />
        <br />
        Granting we did that already. There should be a second observable
        weirdness to our solution. Right on the money would-be hero! You keenly
        observed that <code>iter</code>, which is initially 1, is incremented
        the moment the loop begins iterating. So what gets added to the{' '}
        <code>sum</code> first is not 1, but 2!
        <br />
        <br />
        To fix this, we just need to interchange <code>iter++</code> and{' '}
        <code>sum = sum + iter</code>. This is how it should look now:
      </Text>
      <Compiler
        hasInput
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tint n = 0, iter = 1, sum = 0;\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tn = input.nextInt();\n\n\t\twhile(iter <= n) {\n\t\t\tsum = sum + iter ;\n\t\t\titer++;\n\t\t}\n\n\t\tSystem.out.println("The sum from 1 to " + n + " is " + sum + ".");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        <strong>Chiron side quest:</strong> Can you update the code above to
        print the value of <code>iter</code> as well after the while loop
        finishes executing?
      </Text>
      <br />
      <Text>
        <strong>Chiron highlights:</strong>
        <br />
        What the while construct does is it first checks the condition provided.
        If it evaluates to true, it then proceeds to execute all the statements
        in the while. When it reaches the last statement (in the sample above,{' '}
        <code>iter++</code>), execution goes back to the condition check. If the
        check evaluates to true, then it repeats the execution of the statements
        inside the loop. Repetition or iteration stops when the check finally
        evaluates to false. And in the sample above, that is when{' '}
        <code>iter</code> reaches <code>n + 1</code>. When this happens,
        execution of the program proceeds with the next statement right after
        the entire while. And in the sample above, the println statement.
        <br />
        <br />
        The alternative solution that was presented early on was to let{' '}
        <code>iter</code>
        begin from <code>n</code> and should reduce repeatedly by 1 until it
        finally reaches 1. Check it below:
      </Text>
      <Compiler
        hasInput
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tint n = input.nextInt();\n\t\tint iter = n, sum = 0;\n\n\t\twhile(iter > 0) {\n\t\t\tsum = sum + iter;\n\t\t\titer--;\n\t\t}\n\n\t\tSystem.out.println("The sum from 1 to " + n + " is " + sum + ".");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        <strong>Chiron side quest:</strong> Again, update the code above to
        print the value of <code>iter</code> as well after the iteration and
        explain the differences with the condition, and how <code>iter</code>{' '}
        was manipulated in the second version as opposed to the first.
      </Text>
      <br />
      <br />
      <FunFactCard
        childrenJsx={
          <>
            <Compiler
              initialCustomInput={`5\n3`}
              initialSourceCodes={[
                {
                  code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\t\tint a = input.nextInt();\n\t\tint b = input.nextInt();\n\n\t\tint prod = 0, counter = 0;\n\n\t\twhile(counter < b) { // when counter reaches b, then the iteration stops\n\t\t\tprod = prod + a; // prod accumulates value by whatever a is\n\t\t\tcounter++; // counter gets incremented by 1\n\t\t}\n\n\t\tSystem.out.println("The product of " + a + " and " + b + " is " + prod + ".");\n\t}\n}`,
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
            />
            <br />
            <Text>
              <strong>Chiron tidbit:</strong> It is best practice to document
              your code. It helps, Chiron swears by the gods in Mount Olympus!
            </Text>
          </>
        }
        mainTextJsx={
          <Text>
            Notice where <code>n</code>, <code>iter</code> and <code>sum</code>{' '}
            have been declared. In the first solution, when <code>n</code> was
            declared, we had to assign 0 to it because Java requires it to have
            an initial value. But its initial value should be whatever the user
            enters. So, declare it exactly where you need it. In this case, when
            scanning an input from the user!
            <br />
            <br />
            Recall that multiplication is simply{' '}
            <strong>repetitive addition</strong>. What is meant by this? Take 5
            * 3. This is essentially 5 + 5 + 5. Adding 5, 3 times.
            <br />
            <br />
            Check out the code below:
          </Text>
        }
      />
    </Section>

    <Section>
      <Text>
        <strong>Chiron sidequest:</strong> Check what this does!
      </Text>
      <Compiler
        initialCustomInput={`5\n3`}
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\t\tint a = input.nextInt();\n\t\tint b = input.nextInt();\n\n\t\tint pow = 1, counter = 0;\n\n\t\twhile(counter < b) { // when counter reaches b, then the iteration stops\n\t\t\tpow = pow * a; // pow accumulates by multiplying a to it\n\t\t\tcounter++; // counter gets incremented by 1\n\t\t}\n\n\t\tSystem.out.println(a + " raised to " + b + " is " + pow + ".");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        <strong>Chiron sidequest:</strong> Redo both multiplication via
        repetitive addition and power problems above that{' '}
        <strong>can now handle negative values as well</strong>. For the power
        problem, when the exponent is negative, display the answer simply as a
        fraction and not with floating point values.
        <br />
        <br />
      </Text>
    </Section>

    <Section>
      <Text>
        Another <strong>Chiron sidequest:</strong> What does this do?
      </Text>
      <Compiler
        initialCustomInput="100"
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\t\tint a = input.nextInt();\n\t\tint f = 1;\n\n\t\twhile(f <= a) { // when f reaches a, then the loop stops\n\t\t\tif(a % f == 0) // checks if a is divisible by f\n\t\t\t\tSystem.out.print(f + " "); // prints the factor f\n\t\t\tf++;\n\t\t}\n\t\tSystem.out.println();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <Text>
        It should be obvious that the program prints the factors of a given
        number including the factor 1 and the number itself.
        <br />
        <br />
        <strong>Chiron impresses:</strong> When <code>a</code> is 1 million, how
        many times will the loop iterate? Let us reduce this number. When{' '}
        <code>a</code> is 100, how many times will the loop iterate? Yes, 100
        times! <code>f</code> will go from 1 to 100! When looking for factors,
        it is not necessary to check all values from 1 to that number! There are
        definitely far fewer factors of a number than there are values from 1 to
        that number! Think of 100. How many factors are there for 100? Let’s
        list them but let's exclude 1 and 100 itself because we know these as
        factors already. They are 2, 4, 5, 10, 20, 25, 50. That's it! Definitely
        significantly fewer than 100 values!
        <br />
        <br />
        Excluding itself, what is the biggest <strong>possible</strong> factor
        of a given number? Right! Half the number! This suggests that we do not
        have to inspect values from 2 - 99 in our example. We can reduce the
        checks to reach only up until half 100 which is 50. But that's still a
        lot of numbers! Imagine if the number were 1,000,000! 500,000 is still a
        lot!
        <br />
        <br />
        Notice that we do not really need to reach 50, because if we know 2 is a
        factor of 100, then so is 100/2. Always remember that factors come in
        PAIRS!
        <br />
        <br />
        Let's do that again! Let's start listing them by pair!
        <ul>
          <li>2 and 50</li>
          <li>4 and 25</li>
          <li>5 and 20</li>
          <li>10 and 10 (well technically, just 10)</li>
        </ul>
        <br />
        At which value did we stop looking for factors? 10. And what is 10 in
        relation to 100? Perfect!{' '}
        <strong>It is the square root of 100 (10 * 10 or 102)!</strong>
        <br />
        <br />
        Now, let's have a look at the code below and see if Chiron was able to
        impress you!
      </Text>
      <Compiler
        initialCustomInput="100"
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\n\t\tint a = input.nextInt();\n\t\tint f = 2;\n\n\t\tSystem.out.print("1 " + a); // prints 1 and the number itself\n\t\twhile(f * f <= a){ // checks whether f is <= the square root of a\n\t\t\tif(a % f == 0)\n\t\t\t\tSystem.out.print(" " + f + " " + a / f); // prints the factor pair\n\t\t\tf++;\n\t\t}\n\t\tSystem.out.println();\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        <strong>Chiron sidequest:</strong> Try 100 and check the factors
        printed. Yes! 10 is displayed twice. Try and fix this. You can do it!
        (Hint: Use an if statement)
        <br />
        <br />
        <strong>Chiron continues to impress:</strong> Do you know what prime
        numbers are? They are positive numbers whose factors are 1 and itself
        only. The smallest being 2. Its only factors are 1 and itself, which is
        2. The first prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23, … And you
        guessed it, so far, there is no fixed pattern for prime numbers.
        <br />
        <br />
        Armed with the knowledge on looking for factors, determining whether a
        number is prime should be easy. It is going to look exactly like looking
        for factors (excluding 1 and itself) except that when we find one, we
        stop looking. We only need one confirmed factor and that would make the
        number not prime (composite). When no factor is found, then the number
        is prime.
        <br />
        <br />
        Check the code below:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\n\t\tint a = input.nextInt();\n\t\tint f = 2;\n\n\t\twhile(f * f <= a) { // square root limit\n\t\t\tif(a % f == 0) // checks if f is a factor\n\t\t\t\tbreak; // break automatically stops the loop\n\t\t\tf++;\n\t\t}\n\n\t\t/*\n\t\tfinal check to see if there were no factors\n\t\tnotice that when a does not have factors,\n\t\tf will be greater than the square root of a\n\t\t*/\n\t\tif(f * f > a)\n\t\t\tSystem.out.println(a + " is prime!");\n\t\telse\n\t\t\tSystem.out.println(a + " is composite since " + f + " and " + a / f + " are factors.");\n\t}\n}`}
      </Code>
      <Text>
        Problems like the primality check are perfect for boolean variables.
        Let’s redo the above and employ a boolean!
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\n\t\tint a = input.nextInt();\n\t\tint f = 2;\n\t\tboolean prime = true ; // assume a to be prime\n\n\t\twhile(f * f <= a) { // while f is <= to the square root of a\n\t\t\tif(a % f == 0) { // checks if f is a factor\n\t\t\t\tprime = false ; // set prime to false since a factor is found\n\t\t\t\tbreak ; // stop the loop\n\t\t\t}\n\t\t\tf++; // check next candidate factor\n\t\t}\n\n\t\t/*\n\t\tfinal check to see if there were no factors\n\t\tno need to check f, use boolean prime\n\t\t*/\n\t\tif(prime == true)\n\t\t\tSystem.out.println(a + " is prime!");\n\t\telse\n\t\t\tSystem.out.println(a + " is composite since " + f + " and " + a / f + " are factors.");\n\t}\n}`}
      </Code>
      <Text>
        <br />
        <br />
        <strong>Chiron impresses some more:</strong> Have a look at the code
        below and compare it with the one above. Check the last if-statement!
      </Text>
      <Compiler
        hasInput
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\n\t\tint a = input.nextInt();\n\t\tint f = 2;\n\t\tboolean prime = true ; // assume a to be prime\n\n\t\twhile(f * f <= a) { // while f is <= to the square root of a\n\t\t\tif(a % f == 0) { // checks if f is a factor\n\t\t\t\tprime = false ; // set prime to false since a factor is found\n\t\t\t\tbreak ; // stop the loop\n\t\t\t}\n\t\t\tf++; // check next candidate factor\n\t\t}\n\n\t\t/*\n\t\tfinal check to see if there were no factors\n\t\tno need to check f, use boolean prime\n\t\t*/\n\t\tif(prime)\n\t\t\tSystem.out.println(a + " is prime!");\n\t\telse\n\t\t\tSystem.out.println(a + " is composite since " + f + " and " + a / f + " are factors.");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
    </Section>
  </TopicContainer>
);

export default Topic2;
