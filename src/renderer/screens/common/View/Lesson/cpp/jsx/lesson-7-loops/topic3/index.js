import React from 'react';

import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import { FunFactCard, SampleProblemList, SampleProblemCard } from 'components';
import { getFileName } from 'codechum-app-utils';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="Counting"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Your Cody already knows how to repeat things until the condition becomes
        false, but how about repeating things until a given sequence is
        finished? Sure, a while() loop can do that, but is there really no other
        type of loop that simplifies that action? Eager to figure out the answer
        to your queries, you turned to the third chapter of the current lesson
        which states:
        <br />
        <br /> "You now know that while() and do…while() loops are used when you
        want to repeat something up until the condition becomes false, but when
        you want to loop through a sequence of numbers in either ascending or
        ascending order, we need some other loop to do the trick. This calls for
        the help of C++'s one last type of loop structure – the{' '}
        <strong>for() loops</strong>."
      </Text>
    }
  >
    <Section title="For Loop Syntax">
      <Text>
        A <strong>for() loop</strong> works the same as when using a while()
        loop to loop through a definite number of times while incrementing
        inside it, but this type of loop makes that code simpler, with all of
        its conditions put in just one statement.
        <br />
        <br /> Just like the while() loop, a for() loop requires you to use a
        counter variable, which is incremented/decremented for each loop
        iteration. Hence, we shall first declare a counter variable, and since
        its purpose is to count, it has to be an integer at all times. Something
        like this:
      </Text>
      <Code language={programmingLanguages.CPP}>int ctr;</Code>
      <Text>
        The counter variable can be set to any name, but most counter variables
        use at least a letter to represent it, like <code>i</code>,{' '}
        <code>a</code>, <code>c</code>, or a shorter term for counter,{' '}
        <code>ctr</code>, just like the one above.
        <br />
        <br /> It then follows a syntax like this one:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`for(initialization; condition; increment/decrement) {\n\t// code to be executed repeatedly, while the\n\t// 'condition' is still true\n}`}
      </Code>
      <Text>
        The first statement inside the for() loop's parentheses is used to
        initialize the counter variable by assigning it to a number that will
        serve as the starting point of the loop. Upon entering the loop, this
        initialization <strong>will only happen once</strong> in the entire
        execution. It looks something like this:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`int ctr;\n\nfor(ctr = 1; condition; increment/decrement) {\n\t// code to be executed repeatedly, while the\n\t// 'condition' is still true\n}`}
      </Code>
      <Text>
        In C++, the code above can actually be simplified into something like
        this:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`for(int ctr = 1; condition; increment/decrement) {\n\t// code to be executed repeatedly, while the\n\t// 'condition' is still true\n}`}
      </Code>
      <Text>
        But be careful though, in the updated code above, the <code>ctr</code>{' '}
        only exists <strong>inside the loop</strong>. For example, if you print
        the value of <code>ctr</code> after the loop, you'll get an error:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`for(int ctr = 1; condition; increment/decrement) {\n\t// code to be executed repeatedly, while the\n\t// 'condition' is still true\n}\n\n// ERROR!\nstd::cout << ctr;`}
      </Code>
      <Text>
        The second statement will serve as the stopper of the loop, as it gives
        out the condition that has to stay true for the loop to work, until it
        becomes false. It's basically almost the same as the{' '}
        <strong>while loop</strong>.
        <br />
        <br /> Usually, the value that it has to test per loop iteration is the
        counter variable that we used for the loop and it is usually compared by
        a number that will serve as the ending point of the loop.
        <br />
        <br /> Moreover, since it is indeed a condition, just like conditional
        statements, it makes use of conditional operators (see Lesson 6) for the
        condition to work, like this one:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`int ctr;\n\nfor(ctr = 1; ctr <= 5; increment/decrement) {\n\t// code to be executed repeatedly, while the\n\t// 'condition' is still true\n}`}
      </Code>
      <Text>
        The loop above will continue executing while <code>ctr</code> is less
        than or equal to <code>5</code>. And that is where the
        increment/decrement section is needed.
        <br />
        <br /> The last part of the statement inside the parentheses of a for()
        loop is the most important part of the loop for it to avoid looping
        forever. In this statement, all we have to do is to increase or decrease
        the value of the counter variable for it to get closer to the value set
        in the condition, and finally terminate the loop.
        <br />
        <br /> Usually, it utilizes the increment/decrement operators that was
        discussed in the previous chapter. For example, if we want to increase
        the counter, <code>ctr</code> variable, value by 1, we can use this kind
        of syntax:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`int ctr;\n\nfor(ctr = 1; ctr <= 5; ctr++) {\n\t// code to be executed repeatedly, while the\n\t// 'condition' is still true\n}`}
      </Code>
      <Text>
        Always remember that all of the statements inside the for() loop's
        parentheses, except the increment/decrement,{' '}
        <stong>end with a semicolon</stong>. If another symbol is to be put by
        mistake in place of the semicolon, it will instead generate an error, so
        always keep that in mind, okay?
        <br />
        <br /> So, this works well when you want your program to count off from
        a certain number to another, and it is commonly used when we want to
        loop a set of instructions for a fixed number of times.
        <br />
        <br /> Now that we have understood how it works, let us see how a for()
        loop makes the code more efficient than we thought it could be!
        <br />
        <br /> For example, when you wish to print all even numbers from 10 to
        20, you can achieve the result by typing in the <code>
          std::cout
        </code>{' '}
        function repeatedly and you have to memorize the even numbers, too:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`std::cout << 10 << std::endl;\nstd::cout << 12 << std::endl;\nstd::cout << 14 << std::endl;\nstd::cout << 16 << std::endl;\nstd::cout << 18 << std::endl;\nstd::cout << 20 << std::endl;`}
      </Code>
      <Text>
        But with a for() loop, what used to be 5 lines of <code>std::cout</code>{' '}
        statements, can now be reduced to just one, like this!
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`for(int ctr = 10; ctr <= 20; ctr++) {\n\t// we only print the even numbers\n\tif(ctr % 2 == 0) {\n\t\tstd::cout << ctr << std::endl;\n\t}\n}`}
      </Code>
      <Text>
        Now the code above can still be improved. Remember that even numbers are
        separated by 2. That means instead of increasing the <code>ctr</code> by
        one with the <code>ctr++</code>, we can just increase it by 2 instead
        like this:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`for(int ctr = 10; ctr <= 20; ctr += 2) {\n\t// now, we don't have to check if the current value\n\t// of ctr is even because it is already guaranteed\n\t// that it is even because it is being increased by 2's\n\tstd::cout << ctr << std::endl;\n}`}
      </Code>
      <Text>Efficient, ain't it?</Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Code
            language={programmingLanguages.CPP}
          >{`for(initialization; condition; increment/decrement) {\n\t\n\tfor(initialization; condition; increment/decrement) {\n\n\t}\n\n}`}</Code>
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            You can also perform a loop inside a loop too! These are what we
            call as <strong>nested loops</strong>, where the inner loop(s) acts
            as an "egg" that is enclosed by the outer loop that acts as a "nest"
            to the inner loop(s).
            <br />
            <br /> In C++, it is usually treated like a table, where the outer
            loop is usually referred to as the row, and the inner loop, the
            column.
            <br />
            <br /> It follows the following syntax:
          </Text>
        }
      />
      <br />
      <Text>
        This works just like a normal loop, but the difference is that the inner
        loop must be executed first before re-looping the outer loop. Therefore,
        the outer loop can only repeat the lines of code inside it when the
        inner loop is done executing its own.
        <br />
        <br /> For example, let us try making a 6x6 rectangle using asterisks!
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tfor(int row = 1; row <= 6; row++) {\n\n\t\tfor(int col = 1; col <= 6; col++) {\n\t\t\tstd::cout << "*";\n\t\t}\n\t\t\n\t\tstd::cout << "\\n";\n\t}\t\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        This technique is incredibly useful when making two-dimensional patterns
        using C++.
      </Text>
    </Section>

    <Section>
      <Text>
        So far, we've only tried looping in an <strong>ascending order</strong>,
        with the help of the increment operators. Let's now try creating
        something in <strong>descending order</strong>.
        <br />
        <br /> When we want too loop in descending order, the counter variable
        must be initialized to a value greater than the value in the condition
        statement, and it usually uses either the greater than ({`>`}) or the
        greater-than-or-equal-to ({`>=`}) conditional operators.
        <br />
        <br /> Moreover, it usually uses the decrement operators involving
        subtraction (-) and division (/) to decrease the value of the
        initialized counter variable for every iteration.
        <br />
        <br /> Hence, if we would like to print from 10 to 1 instead, we can do
        this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tfor(int ctr = 10; ctr >= 1; ctr--) {\n\t\tstd::cout << ctr << std::endl;\n\t}\t\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        Understanding this concept will help you get more familiar with using
        for() loops in your code, so feel free to practice executing for() loops
        for better learning through experience, okay?
      </Text>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Multiples of 5">
          <Text>
            Cody's teacher handed out an assignment about identifying the
            multiples of 5 from 0 to 50. Now, I need you to make Cody's math
            struggles a little easier to handle with your new knowledge on
            loops.
            <br />
            <br /> To do that, we have to have loops, with conditions inside it!
            When Cody finds out that a number is a multiple of 5, he prints it.
            <br />
            <br /> Let's try this now!
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tfor(int ctr = 0; ctr <= 50; ctr++) {\n\n\t\t// we only print the values that are divisible by 5\n\t\tif(ctr % 5 == 0) {\n\t\t\tstd::cout << ctr << std::endl;\n\t\t}\n\t}\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
          <br />
          <Text>
            To improve the code above, you could actually just have an increment
            of 5 for every iteration and directly print, like this:
          </Text>
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tfor(int ctr = 0; ctr <= 50; ctr += 5) {\n\t\tstd::cout << ctr << std::endl;\n\t}\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic3;
