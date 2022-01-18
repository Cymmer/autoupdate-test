import React from 'react';

import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';
import GLOBALS from 'codechum-app-globals';

import { FunFactCard, InfoList, InfoCard } from 'components';
import { getFileName } from 'codechum-app-utils';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="How Should I Name You?"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        You finally learned how to declare variables, and that takes Cody one
        step closer towards a more natural way of speaking! But when you become
        forgetful about what you did in your code, how would you be able to
        properly identify what variables to use when the need arises? Looking
        for answers, you turned to the next page of the manual again, and there
        lies the answer which states:
        <br />
        <br /> "Robots speak without lagging out when they have ready-to-use
        information stored in variables. But how would it identify what data is
        stored in those variables? This is why proper variable naming is
        important. With clear, distinct names, the robot and you as the
        programmer would not be confused anymore as to which variable to use. In
        C++, we have to learn some <strong>naming conventions</strong>."
      </Text>
    }
  >
    <Section title="Variable Naming Restrictions">
      <Text>
        You can name a variable anything as long as it makes sense to you, but
        it would definitely be much better if it explains what the data it holds
        is all about. For example:
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`// Not good:\nint a = 15;\nbool asd1 = false;\n\n// Good:\nint age = 15;\nbool isAdult = false;`}
      </Code>
      <Text>
        But when naming variables in C++, there are restrictions and guidelines
        to follow in order to make the best out of it. Here are some that are
        worth mentioning:
        <br />
        <br />
        {`1) Variable names will only compose of letters, numbers, and/or a single 
        symbol, underscore (_). Moreover, all names must always start with a 
        letter or an underscore (A-Z, a-z, _).`}
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`// Not okay (will result to errors):\nint 1num, my+age, $Dollars;\n\n// Okay:\nint num1, my_age, Dollars, _Dollars;`}
      </Code>
      <Text>
        {`2) Avoid using lengthy names for a variable. As much as possible, just 
        make sure that the first three letters of its name makes sense when you 
        read it so that it will be easy to remember and easy to type as well.`}
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`// Not good:\nint this_is_a_number, my_actual_age;\n\n// Good:\nint num, age;`}
      </Code>
      <Text>
        {`3) On the other hand, also avoid using very short names for a variable 
        that it won't make sense the first time you read them.`}
      </Text>
      <Code language={programmingLanguages.CPP}>
        {`// Not good:\nint s, a;\n\n// Good:\nint num, age;`}
      </Code>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `#include<iostream>\n\nint main(void) {\n\tint age = 20;\n\tint AGE = 24;\n\tint aGe = 31;\n\n\tstd::cout << "Age in small letters: " << age << std::endl;\n\tstd::cout << "Age starting with a capital letter: " << AGE << std::endl;\n\tstd::cout << "Age in weird casing: " << aGe << std::endl;\n\n\treturn 0;\n}`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.CPP),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.CPP,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          />
        }
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            C++ is case-sensitive. In this sense, an uppercase letter and a
            lowercase letter are treated as two different characters!
            <br />
            <br /> Don't believe me? Try this one to see it for yourself (take a
            good look at the name of the variables)!
          </Text>
        }
      />
    </Section>

    <Section title="Naming Styles">
      <Text>
        If there are rules and guidelines, then there are also different styles
        in naming variables! Feel free to use the style that best fits the data
        you will store in a variable. Here are a few common styles used:
      </Text>
      <InfoList>
        <InfoCard
          code={`int variablename;\nbool anothervariablename;`}
          info="All words are in lowercase but connected directly. Examples:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          title="Flat Case"
        />
        <InfoCard
          code={`int variableName;\nbool anotherVariableName;`}
          info="Uncapitalized first word, capitalized proceeding words (like a camel shape) and connected directly. Examples:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          title="Camel Case"
        />
        <InfoCard
          code={`int VariableName;\nbool AnotherVariableName;`}
          info="All words are capitalized and connected directly. Examples:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          title="Pascal Case"
        />
        <InfoCard
          code={`int variable_name;\nbool another_variable_name;`}
          info="All words are in lowercase and connected by an underscore (_). Examples:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          title="Snake Case"
        />
        <InfoCard
          code={`int VARIABLE_NAME;\nbool ANOTHER_VARIABLE_NAME;`}
          info="All words are in uppercase and connected by an underscore (_). This casing is often used in constants. Examples:"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.CPP}
          title="Macro Case"
        />
      </InfoList>
      <br />
      <br />
      <Text>
        Whichever style you choose to use when naming variables, just stick to
        that one style to avoid confusion and to observe naming consistency,
        okay?
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic2;
