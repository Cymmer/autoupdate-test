import React from 'react';

import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import { SampleProblemList, SampleProblemCard } from 'components';
import { getFileName } from 'codechum-app-utils';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="If Not That, Then What?"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody's getting better at making decisions, eh? But there is still more
        than what you have already learned when making decisions, and that is,
        when you encounter multiple options at the same time. Looking for
        answers, you found yourself looking at the third chapter of the book:
        <br />
        <br /> "Your robot's now able to answer things when faced with a
        condition that can be either true or false, but what can it do when it
        is faced with more than one condition and only one has to be met? This
        calls for the help of one other conditional statement that offers the
        option of having another condition if the <code>if()</code> statement's
        condition is false – C++'s <code>else if()</code> statement."
      </Text>
    }
  >
    <Section title="The Else If syntax">
      <Text>
        <code>else if()</code> statements are conditional statements that are
        used to put another condition if the <code>if()</code> statement's
        condition is not met.
        <br />
        <br /> It quite functions like an <code>if()</code> statement as it can
        also have a condition of its own, but it is also like an{' '}
        <code>else</code> statement that needs an <code>if()</code> statement
        before it. Therefore, <code>else if()</code> statements cannot exist
        without a preceding <code>if()</code> statement.
        <br />
        <br /> It follows the following syntax:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`if(condition1) {\n\t// code to be executed if condition1 is true\n} else if(condition2) {\n\t// code to be executed if condition2 is true\n} else {\n\t// code to be executed if condition1 and condition2 are false\n}`}
      </Code>
      <Text>
        However, <code>else if()</code> statements can function well without an
        <code>else</code> statement after it, and can even be used multiple
        times when we need to have multiple conditions, like this syntax:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`if(condition1) {\n\n} else if(condition2) {\n\n} else if(condition3) {\n\n} else if(condition4) {\n\n} else if(conditionN) {\n\n}`}
      </Code>
      <Text>
        <code>else if()</code> statements are best used when faced with a
        problem that needs to be evaluated over several conditions, such as
        evaluating if an integer is positive, negative, or zero. In this
        problem, an if-else statement would not be enough as there is another
        case to be handled, which is zero because it is neither negative nor
        positive. Hence, we have to utilize the use of <code>else if()</code>{' '}
        statements for it, like this:
      </Text>
      <Compiler
        hasInput
        initialCustomInput="-5"
        initialSourceCodes={[
          {
            code: `#include<iostream>\n\nint main(void) {\n\tint num;\n\t\n\tstd::cin >> num;\n\n\tif(num > 0) {\n\t\tstd::cout << "Positive";\n\t} else if(num < 0) {\n\t\tstd::cout << "Negative";\n\t} else {\n\t\tstd::cout << "Zero";\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
      />
      <br />
      <Text>
        Remember that the condition inside an <code>else if()</code> statement
        will only be evaluated if the previous condition from an{' '}
        <code>if()</code> or a preceding <code>else if()</code> (if such exists)
        statement is false. By understanding this concept, we can now avoid
        repeating conditions that were already eliminated by the previous
        conditions given.
        <br />
        <br /> For example, take a look at this code below:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`#include<iostream>\n\nint main(void) {\n\tint num;\n\t\n\tstd::cin >> num;\n\n\tif(num >= 10) {\n\t\tstd::cout << "Greater than 10";\n\t} else if(num < 10 && num > 5) {\n\t\tstd::cout << "Greater than 5 but lesser than 10";\n\t} else {\n\t\tstd::cout << "Lesser than 5";\n\t}\n\n\treturn 0;\n}`}
      </Code>
      <Text>
        As you can see, the condition in the <code>else if()</code> is not the
        best one because it is <strong>redundant</strong>. Again, the{' '}
        <code>else if()</code> is only checked if the previous <code>if()</code>{' '}
        or <code>else if()</code> is false. In the code above, the condition in
        the first <code>if()</code> is <code>{`num >= 10`}</code>. If that is
        false, therefore even without checking, we already know that{' '}
        <code>num</code> is definitely <code>{`< 10`}</code> (anything that is
        not <code>{`>= 10`}</code> is <code>{`< 10`}</code> right?)
        <br />
        <br /> A better code therefore would look like this:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`#include<iostream>\n\nint main(void) {\n\tint num;\n\t\n\tstd::cin >> num;\n\n\tif(num >= 10) {\n\t\tstd::cout << "Greater than 10";\n\t} else if(num > 5) { // take a look at this updated condition\n\t\tstd::cout << "Greater than 5 but lesser than 10";\n\t} else {\n\t\tstd::cout << "Lesser than 5";\n\t}\n\n\treturn 0;\n}`}
      </Code>
      <Text>
        By understanding that concept, we would now be able to make better
        conditions through these conditional statements.
      </Text>
    </Section>

    <Section>
      <SampleProblemList>
        <SampleProblemCard number={1} title="The Largest One">
          <Text>
            Today, we need to find out the largest number among all three
            numbers that are to be given by the user. To do that, we have to use
            a lot of conditions, which calls for the help of{' '}
            <strong>else if()</strong> statements! We also need to make use of
            the logical operators we've learned in the previous lessons.
            <br />
            <br />
            I've laid out a simple code for you already. Try it out and see!
          </Text>
          <Compiler
            hasInput
            initialCustomInput="5 10 3"
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tint a, b, c;\n\t\n\tstd::cin >> a >> b >> c;\n\t\n\tif(a >= b && a >= c) {\n\t\tstd::cout << "Largest: " << a;\n\t} else if(b >= a && b >= c) {\n\t\tstd::cout << "Largest: " << b;\n\t} else {\n\t\tstd::cout << "Largest: " << c;\n\t}\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
          <br />
          <Text>
            There is also another way to solve this problem by using single{' '}
            <strong>if()</strong> statements only (without any else{' '}
            <strong>if()</strong>'s)! Just assume that one of them is the
            largest value and then compare them one by one. Check this improved
            version below:
          </Text>
          <Compiler
            hasInput
            initialCustomInput="5 10 3"
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tint a, b, c;\n\t\n\tstd::cin >> a >> b >> c;\n\t\n\t// we assume that one of them is the largest\n\t// In this case, we assumed that a is the largest\n\tint largest = a;\n\t\n\t// then we check the other numbers if they are greater\n\t// than the existing largest, one by one. We start,\n\t// by checking b against the existing largest\n\tif(b > largest) {\n\t\tlargest = b;\n\t}\n\n\t\n\t// then we continue by checking c against the existing\n\t// largest, regardless if it was a or b\n\tif(c > largest) {\n\t\tlargest = c;\n\t}\n\n\tstd::cout << "Largest: " << largest;\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
          <br />
          <Text>
            The second code is better because if the problem is updated to
            comparing 4 or 5 or even 6 numbers, it's very to update; we just add
            more <strong>if()</strong> statements! Compared to the previous
            version, we need to add a lot of <strong>else if()</strong> and we
            need to compare each number to every other number, one by one.
            Imagine the inefficiency!
          </Text>
        </SampleProblemCard>
      </SampleProblemList>
    </Section>
  </TopicContainer>
);

export default Topic3;
