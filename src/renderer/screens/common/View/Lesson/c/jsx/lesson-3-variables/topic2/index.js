import React from 'react';

import { getFileName, getLanguageId } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, InteractiveCompiler } from 'components/elements';
import { textTypes } from 'components/elements/constants';

import { FunFactCard, InfoList, InfoCard } from 'components';
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
        lies the answer which states: <br />
        <br />
        "Robots speak without lagging out when they have ready-to-use
        information stored in variables. But how would it identify what data is
        stored in those variables? This is why proper variable naming is
        important. With clear, distinct names, the robot and you as the
        programmer would not be confused anymore as to which variable to use. In
        C, we have to learn some <strong>naming conventions</strong>."
      </Text>
    }
  >
    <Section title="Limits">
      <Text>
        You can name a variable anything as long as it makes sense to you, but
        it would definitely be much better if it resembles what the data it
        holds is all about.
        <br />
        <br />
        <i>
          <strong>NO:</strong> a = 15, asd1 = "Cody"
          <br /> <strong>YES:</strong> age = 15, name = "Cody"
        </i>
        <br />
        <br />
        But when naming variables in C, there are restrictions and guidelines to
        follow in order to make the best out of it. Here are some that are worth
        mentioning:
        <br />
        <br />
        {`1) Variable names will only compose of letters, numbers, and/or a single
        symbol, underscore (_). Moreover, all names must always start with a
        letter or an underscore (A-Z, a-z, _).`}
        <br />
        <br />
        <i>
          <strong>NO:</strong> 1num, my+name, $Dollars
          <br /> <strong>YES:</strong> num1, my_name, Dollars, _Dollars
        </i>
        <br />
        <br />
        {`2) Avoid using lengthy names for a variable. As much as possible, just
        make sure that the first three letters of its name makes sense when you
        read it so that it will be easy to remember and easy to type as well.`}
        <br />
        <br />
        <i>
          <strong>NO:</strong> this_is_a_variable_for_my_name, anIntegerTracker,
          MyNaturalAge
          <br /> <strong>YES:</strong> myName, intTracker, myAge
        </i>
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <InteractiveCompiler
            initialSourceCodes={[
              {
                code: `#include<stdio.h>\n\nint main(void) {\n    char letter = 'c';\n    char Letter = 'C';\n    printf("%c is different from %c", letter, Letter);\n\n    return 0;\n}`,
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
            C is case-sensitive. In this sense, an uppercase letter and a
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
          code="varname"
          info="All words are in lowercase but connected directly"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          title="Flat Case"
        />
        <InfoCard
          code="varName"
          info="Uncapitalized first word, capitalized proceeding words (like a camel shape) and connected directly"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          title="Camel Case"
        />
        <InfoCard
          code="VarName"
          info="All words are capitalized and connected directly"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          title="Pascal Case"
        />
        <InfoCard
          code="var_name"
          info="All words are in lowercase and connected by an underscore (_)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          title="Snake Case"
        />
        <InfoCard
          code="VAR_NAME"
          info="All words are in uppercase and connected by an underscore (_)"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
          title="Macro Case"
        />
      </InfoList>
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
