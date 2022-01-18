import React from 'react';

import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import {
  FunFactCard,
  SampleProblemList,
  SampleProblemCard,
  InfoList,
  InfoCard,
} from 'components';
import { getFileName } from 'codechum-app-utils';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="Making Decisions"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody is now able to speak and listen to humans, which means that he is
        now quite geared up to blend in to human society! But Cody is not
        fully-equipped though, since there are still a lot of things that it
        needs to learn, like making its own decisions based on certain
        circumstances. But how would it be possible for a robot to decide on its
        own? Looking for answers, you opened the instruction manual again and
        began reading the sixth chapter which wrote:
        <br />
        <br /> "Robots have the capacity to follow what the programmer has told
        it to do, but never the ability to decide solely without the
        programmer's guidance. However, there is one other way to make
        decision-making possible for robots to do, and that is by preparing a
        set of conditions on its program, given the situation that it is faced
        with. To be able to do that, we have to begin with exploring C++'s
        methods in making <b>conditional statements.</b>"
      </Text>
    }
  >
    <Section title="Introduction">
      <Text>
        Before we head on to the different types of conditional statements
        available in C++, we have to learn on some operators to be used first.
        <br />
        <br /> There are actually different kinds of operators in C++. To
        recall, we have already encountered the assignment operator (=) and the
        arithmetic operators (+, -, *, /, %).
        <br />
        <br /> However, there are two other important operators which will be
        widely used in making conditions in your program, and those are called
        conditional operators and logical operators.
      </Text>
    </Section>
    <Section title="Conditional Operators">
      <Text>
        <strong>Conditional operators</strong> are used to evaluate certain
        conditions if they are true or false. In C++, the supported conditional
        operators are the following:
      </Text>
      <InfoList>
        <InfoCard
          info="Returns <code>true</code> if value1 and value2 are equal. Note that this is different from the assignment operator"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          syntax={['value1 == value2']}
          title="=="
        />
        <InfoCard
          info="Returns <code>true</code> if value1 is greater than value2"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          syntax={['value1 > value2']}
          title=">"
        />
        <InfoCard
          info="Returns <code>true</code> if value1 is greater than or equal to value2"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          syntax={['value1 >= value2']}
          title=">="
        />
        <InfoCard
          info="Returns <code>true</code> if value1 is less than value2"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          syntax={['value1 < value2']}
          title="<"
        />
        <InfoCard
          info="Returns <code>true</code> if value1 is less than or equal to value2"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          syntax={['value1 <= value2']}
          title="<="
        />
        <InfoCard
          info="Returns <code>true</code> if value1 and value2 are not equal"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          syntax={['value1 != value2']}
          title="!="
        />
      </InfoList>
    </Section>
    <Section title="Logical Operators">
      <Text>
        On the other hand, <strong>logical operators</strong> are useful when we
        need to evaluate two or more conditions before a code is proven to be
        true or not. Here are the following:
      </Text>
      <InfoList>
        <InfoCard
          info="Returns <code>true</code> if the condition is false"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          syntax={['!condition']}
          title="!"
        />
        <InfoCard
          info="Returns <code>true</code> only if both conditions are true"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          syntax={['condition1 && condition2']}
          title="&&"
        />
        <InfoCard
          info="Returns <code>true</code> if at least one of the conditions is true"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          syntax={['condition1 || condition2']}
          title="||"
        />
      </InfoList>
    </Section>

    <Section title="The if() Syntax">
      <Text>
        Now that you already know about the conditional and logical operators,
        let's now proceed with the <code>if()</code> statement.
        <br />
        <br /> When you want to check some condition first before doing
        something, then the <code>if()</code> statement is right for the
        situation. <code>if()</code> statements are conditional statements that
        involve a condition to be met in order for the code inside it to be
        performed.
        <br />
        <br /> This type of conditional statement follows the following syntax:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`if(condition) {\n\t// code here will be performed if the 'condition'\n\t// is true. Otherwise, the code here will be ignored\n}`}
      </Code>
      <Text>
        Note that the line of code inside the curly braces of the{' '}
        <code>if()</code> statement will only be run if the condition put inside
        the parentheses is <code>true</code>; otherwise, it will just skip those
        lines of code. Moreover, we must also remember to put our conditions in
        parentheses or else, we will encounter an error in our code!
        <br />
        <br /> For now, as an example, see this program below that prints a
        statement if a condition passed is <code>true</code> (i.e. if{' '}
        <code>{`age < 18`}</code> is <code>true</code>):
      </Text>
      <Compiler
        initialCustomInput="17"
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tint age;\n\n\tstd::cin >> age;\n\n\tif(age < 18) {\n\t\tstd::cout << "Sorry, no beer for you yet, bud.";\n\t}\t\n\n\treturn 0;\n}\n`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        Try running the code above and see that the message was indeed printed
        because our input was 17 and 17 is less than 18.
        <br />
        <br /> Now try changing the input to something that is not less than 18,
        like 24 for example, and run the code again. This time, you'll see that
        the message isn't printed anymore because the condition is now false.
        <br />
        <br /> Which leads us to the question, what if we wanted to do something
        else if the <code>if()</code> statement's condition turns false, like an
        alternative? Watch out for another conditional statement in the next
        topic, and keep moving forward!
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <>
            <Compiler
              initialSourceCodes={[
                {
                  code: `#include<iostream>\n\nint main(void) {\n\tint a = 0, b = 2;\n\n\tif(a > b)\n\t\tstd::cout << "YES";\n\t\tstd::cout << "GREATER";\n\n\treturn 0;\n}\n`,
                  file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                  file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
                },
              ]}
              languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
            />
            <br />
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              Try running the code above and observe the output. As you can see,
              the message <strong>"GREATER"</strong> has been printed even
              though <strong>a</strong> was not greater than <strong>b</strong>.
              Again, that is because the only statement (or line of code)
              affected by the <strong>if()</strong> statement is the first print
              code, which is the <strong>{`std::cout << "YES";`}</strong>
            </Text>
          </>
        }
        mainTextJsx={
          <>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              You can actually remove the curly braces of the{' '}
              <strong>if()</strong> statement and it will work the same way!
              <br />
              <br /> But there's a catch to it though. The condition would only
              apply to the <strong>first line</strong> after the{' '}
              <strong>if()</strong> statement. If there are multiple lines of
              code that should be run only when the condition is true, then it
              is required to put those curly braces when you code, or else, the
              only statement that will be affected by the condition is the first
              line after it.
              <br />
              <br /> So it's good programming practice to always put curly
              braces no matter how many lines in order to avoid logical errors!
              <br />
              <br /> But for now, to illustrate what I just explained, take a
              look at this code below:
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="Only When It's Even">
          <Text>
            You set Cody's favorite number to be an even number. Then, in its
            class in math, they were tasked to find a classmate with the same
            type of favorite number and pair up with him/her for an activity.
            When it finds that one, it has to shout in uppercase letters, the
            words "I found you!". It's now time to test your knowledge on the
            past lessons we've covered in here.
            <br />
            <br /> For this task, we have to take the other person's favorite
            number and then evaluate if it is even. Only then will it be saying
            the phrase. This calls in for the combination of{' '}
            <strong>if()</strong> statements and the arithmetic and conditional
            operations!
            <br />
            <br /> I've prepared the code for you. Run it and see the magic
            happen!
          </Text>
          <Compiler
            initialCustomInput="4"
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tint faveNum;\n\t\n\tstd::cin >> faveNum;\n\t\n\t// this condition checks if 'faveNum' is an even number.\n\tif(faveNum % 2 == 0) {\n\t\tstd::cout << "I found you!.";\n\t}\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
          <br />
          <Text>
            Try running the code above. It should print the message as expected
            because the number 4 is an even number. Try changing it to an odd
            number like 5 or 7 and run it again. Obviously it won't print the
            message anymore because the condition becomes false.
            <br />
            <br /> <strong>Note:</strong> Doing <strong>% 2</strong> on an
            integer will result to <strong>0</strong> if the number is even. To
            understand why, recall that the <strong>%</strong> operator returns
            the <strong>remainder</strong> of the division, not the quotient.
            And dividing any even number by 2 will always result to a remainder
            of <strong>0</strong>.
            <br />
            <br /> On the other hand, dividing any odd number by 2 will always
            result to a remainder of <strong>1</strong>. Therefore, to check if
            a number is odd, you can just do <strong>num % 2 == 1</strong> or{' '}
            <strong>num % 2 != 0</strong>.
          </Text>
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic1;
