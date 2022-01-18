import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, InteractiveCompiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { FunFactCard, SampleProblemList, SampleProblemCard } from 'components';
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
        to your queries, you turned to the third topic of the current lesson
        which states: <br />
        <br />
        "You now know that while() and do…while() loops are used when you want
        to repeat something up until it falsifies the condition, but when you
        want to loop through a sequence of numbers in either ascending or
        ascending order, we need some other loop to do the trick. This calls for
        the help of C's one last type of loop structure – the{' '}
        <strong>for() loops</strong>."
      </Text>
    }
  >
    <Section title="For Loop Syntax">
      <Text>
        A <strong>for() loop</strong> works the same as when using a while()
        loop to loop through a definite number of times while incrementing
        inside it, but this type of loop makes that code simpler, with all of
        its required parts put in just one statement.
        <br />
        <br />
        Just like the while() loop, a for() loop requires you to use a counter
        variable, which is incremented for each loop iteration. Hence, we shall
        first declare a <strong>counter variable</strong>, and since its purpose
        is to count, it has to be an integer at all times. Hence:
      </Text>
      <Code language={programmingLanguages.C}>int counterVar;</Code>
      <Text>
        The counter variable can be set to any name, but most counter variables
        use at least a letter to represent it, like <code>i</code>,{' '}
        <code>index</code>, <code>counter</code>, or a shorter term for counter,{' '}
        <code>ctr</code>.
        <br />
        <br />
        It then follows a syntax like this one:
      </Text>
      <Code language={programmingLanguages.C}>
        {`for(initialization; condition; incrementor/decrementor) {\n\t// line of code to be executed repeatedly while condition is still true\n\t// line of code to be executed repeatedly while condition is still true\n}`}
      </Code>
      <Text>
        The first statement inside the for() loop's parentheses is used to
        initialize the counter variable by assigning it to a number that will
        serve as the starting point of the loop. Upon entering the loop, this
        initialization{' '}
        <strong>will only happen once in the entire execution.</strong> It
        usually looks like this syntax below:
      </Text>
      <Code language={programmingLanguages.C}>counterVar = startingNum;</Code>
      <Text>
        The second statement will serve as the stopper of the loop, as it gives
        out the condition that has to stay true for the loop to work, until it
        falsifies the condition. This part is basically the same as the
        condition in a while() loop. However, usually, the value that it tests
        per loop iteration is the counter variable that we used for the loop and
        it's usually compared by a number that will serve as the ending point of
        the loop. Moreover, since it is indeed a condition, just like
        conditional statements, it makes use of conditional operators (see
        Lesson 4) for the condition to work, like this one:
      </Text>
      <Code
        language={programmingLanguages.C}
      >{`counterVar <= endingNum;`}</Code>
      <Text>
        Now, the last part of the statement inside the parentheses of a for()
        loop is the most important part of the loop for it to avoid looping
        forever because of a static (or non-changing) counter variable value,
        and that is what the incrementor does. In this statement, all we have to
        do is to increase or decrease the value of the counter variable for it
        to get closer to the value set in the condition, and finally terminate
        the loop. Since it is an incrementor/decrementor, it usually utilizes
        the increment/decrement operators that was discussed in the previous
        chapter. For example, if we want to increase the counter variable value
        by 1, we can use this kind of syntax:
      </Text>
      <Code language={programmingLanguages.C}>counterVar++</Code>
      <Text>
        Always remember that all of the statements inside the for() loop's
        parentheses, except the incrementor/decrementor, end with a semicolon.
        If another symbol is to be put by mistake in place of the semicolon, it
        will instead generate an error, so always keep that in mind, okay?
      </Text>
    </Section>

    <Section>
      <Text>
        Now that we have understood how it works, let us see how a for() loop
        makes the code more efficient than we thought it could be!
        <br />
        <br />
        For example, when you wish to print all even numbers from 10 to 100, you
        can achieve the result by typing in the printf() function repeatedly and
        you have to memorize the even numbers, too:
      </Text>
      <Code language={programmingLanguages.C}>
        {`printf("10\\n");\nprintf("12\\n");\nprintf("14\\n");\nprintf("16\\n");\nprintf("18\\n");\nprintf("20\\n");\nprintf("22\\n");\nprintf("24\\n");\nprintf("26\\n");\nprintf("28\\n");\nprintf("30\\n");\nprintf("32\\n");\nprintf("34\\n");\nprintf("36\\n");\nprintf("38\\n");\nprintf("40\\n");\nprintf("42\\n");\nprintf("44\\n");\nprintf("46\\n");\nprintf("48\\n");\nprintf("50\\n");\nprintf("52\\n");\nprintf("54\\n");\nprintf("56\\n");\nprintf("58\\n");\nprintf("60\\n");\nprintf("62\\n");\nprintf("64\\n");\nprintf("66\\n");\nprintf("68\\n");\nprintf("70\\n");\nprintf("72\\n");\nprintf("74\\n");\nprintf("76\\n");\nprintf("78\\n");\nprintf("80\\n");\nprintf("82\\n");\nprintf("84\\n");\nprintf("86\\n");\nprintf("88\\n");\nprintf("90\\n");\nprintf("92\\n");\nprintf("94\\n");\nprintf("96\\n");\nprintf("98\\n");\nprintf("100\\n");`}
      </Code>
      <Text>
        Phew! That's a lot of code! Imagine if instead of 10 to 100, it's 10 to
        100,000,000, when would you be finished typing all of that?
        <br />
        <br /> But with a for() loop, what used to be a million lines of
        printf() statements, can now be reduced to just something, like this!
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int ctr;\n\n    for(ctr = 10; ctr <= 100; ctr++) {\n        if(ctr % 2 == 0) {\n            printf("%d\\n", ctr);\n        }\n    }\n\n    return 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            programming_language: {
              id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
            },
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <Text>
        So cool right?! We can even improve that further. As we all know, even
        numbers are separated by intervals of 2. What we can do instead in the
        incrementor part is that instead of increasing the <code>ctr</code>{' '}
        value by 1, we increase it by 2, like this:
      </Text>

      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int ctr;\n\n    for(ctr = 10; ctr <= 100; ctr += 2) {\n        if(ctr % 2 == 0) {\n            printf("%d\\n", ctr);\n        }\n    }\n\n    return 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            programming_language: {
              id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
            },
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />

      <Text>
        And since this time, it is guaranteed that <code>ctr</code> will always
        be an even number because it starts at 10 and is being increased by 2
        every time, we can just remove the if() statement where we check if{' '}
        <code>ctr</code> is even:
      </Text>

      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    int ctr;\n\n    for(ctr = 10; ctr <= 100; ctr += 2) {\n        printf("%d\\n", ctr);\n    }\n\n    return 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            programming_language: {
              id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
            },
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />

      <Text>Efficient, ain't it?</Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    for(int ctr = 10; ctr <= 100; ctr += 2) {\n        printf("%d\\n", ctr);\n    }\n\n    return 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
                programming_language: {
                  id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
                },
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          />
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            In the latest version of C (that is currently used in CodeChum), you
            can actually just declare and initialize your counter variable in
            the for() loop's parentheses! Just remember that the counter
            variable will always be an integer, so just put an int before the
            counter variable name, and initialize it to the starting value that
            you want to, like this!
          </Text>
        }
      />
    </Section>

    <Section>
      <Text>
        There are two common ways to loop a for() loop: in ascending order, or
        in descending order.
        <br />
        <br />
        If you wish to loop in <strong>ascending order</strong>, the value you
        initialize to the counter variable must be of lesser value than the
        value you give to the condition.
        <br />
        <br />
        Moreover, the conditional operators you can use are those involving the
        less than sign({`<`}), and that but paired with an equal sign ({`<=`}).
        The increment operator shall also be limited to addition (+) and
        multiplication (*) to increase the counter variable's value.
        <br />
        <br />
      </Text>
      <Text>
        For example, when we want to print from 1 to 10, we should do this:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    for(int i = 1; i <= 10; i++) {\n        printf("%d\\n", i);\n    }\n\n    return 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            programming_language: {
              id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
            },
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <Text>
        However, when you want to loop it in <strong>descending order</strong>,
        the counter variable must be initialized to a value greater than the
        value in the condition statement, and it shall only use either the
        greater than({`>`}) or the greater-than-or-equal-to ({`>=`}) conditional
        operators.
        <br />
        <br />
        Moreover, it shall only use decrement operators involving subtraction
        (-) and division (/) to decrease the value of the initialized counter
        variable for every iteration.
        <br />
        <br />
        Hence, if we would like to print from 10 to 1 instead, we can do this:
      </Text>
      <InteractiveCompiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main(void) {\n    for(int i = 10; i >= 1; i--) {\n        printf("%d\\n", i);\n    }\n\n    return 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            programming_language: {
              id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
            },
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
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
            <br />
            To do that, we have to have loops, with conditions inside it! When
            Cody finds out that a number is a multiple of 5, he prints it.
            <br />
            <br />
            Let's try this now!
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    for(int i = 0; i <= 50; i++) {\n        if(i % 5 == 0) {\n            // if i divided by 5 has 0 remainder, it's a multiple of 5\n            printf("%d\\n", i);\n        }\n    }\n\n    return 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
                programming_language: {
                  id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
                },
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          />
          <br />
          <Text>
            But hang on. We're programmers and we always find better ways to
            solve problems! So we improve our code by just having an increment
            of 5 for every iteration and directly print it for a cleaner code,
            like this:
          </Text>
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    for(int i = 0; i <= 50; i += 5) {\n        printf("%d\\n", i);\n    }\n\n    return 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
                programming_language: {
                  id: getLanguageId(GLOBALS.LANGUAGE_EXTENSIONS.C),
                },
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          />
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic3;
