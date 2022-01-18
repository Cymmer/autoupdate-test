import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Compiler } from 'components/elements';
import { textTypes } from 'components/elements/constants';

import { InfoList, InfoCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="If Statements"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        What if the user entered a value less than 1 in the kilometer-meter
        problem earlier? This clearly shows a complete disregard to the
        instructions set. Not a good character for a soon-to-be hero!
        <br />
        <br />
        Perhaps there might be a way to skip the conversion process when the
        input happens to be less than 1 (since the instructions specify a
        positive integer).
        <br />
        <br />
        Well, check right in.
      </Text>
    }
  >
    <Section title="Relational Operators">
      <Compiler
        initialCustomInput="-7"
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tint km = input.nextInt();\n\t\tint m = 0;\n\n\t\tif(km > 0)\n\t\t\tm = km * 1000;\n\n\t\tSystem.out.println(km + " kilometers is equivalent to " + m + " meters.");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <br />
      <Text>
        That is what you call a conditional statement! Like most of the labours
        of Hercules, there were conditions before he could reap any of the
        rewards of the labours!
        <br />
        <br />
        And what you have here is the “if conditional statement”, aptly named
        because it needs a conditional statement to work with the aid of the
        relational operators.
        <br />
        <br />
        These relational operators return a boolean value (either{' '}
        <code>true</code> or <code>false</code>) that depends entirely on the
        truthfulness of the conditional statement. The following are the
        different relational operators in Java.
      </Text>
      <br />
      <InfoList>
        <InfoCard info="Greater than" title=">" />
        <InfoCard info="Less than" title="<" />
        <InfoCard info="Greater than or equal" title=">=" />
        <InfoCard info="Less than or equal" title="<=" />
        <InfoCard info="Equal" title="==" />
        <InfoCard info="Not equal" title="!=" />
      </InfoList>
      <br />
      <Text>
        But the code sample above is still problematic. When the user enters any
        value less than 1, the program{' '}
        <strong>still prints the equivalence statement</strong>. What we want to
        do is to skip that as well, since there was no conversion at all.
        <br />
        <br />
        Take a look at this one:
      </Text>
      <Compiler
        initialCustomInput="-7"
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\n\t\tScanner input = new Scanner(System.in);\n\n\t\tint km = input.nextInt();\n\t\tint m = 0;\n\n\t\tif(km > 0) {\n\t\t\tm = km * 1000;\n\t\t\tSystem.out.println(km + " kilometers is equivalent to " + m + " meters.");\n\t\t}\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <Text>
        The solution is simply to enclose the two statements in the pair of
        curly braces.
        <br />
        <br />
        <strong>Chiron Tip:</strong>
        <br /> When multiple statements are to be executed given a conditional
        statement evaluating to true (circumstance),{' '}
        <strong>enclose them in the pair of curly braces</strong>. We can even
        include the declaration of the variable <code>m</code> in the if
        statement as we only need <code>m</code> inside that scope (meaning, we
        only use the variable <code>m</code> inside the if statement).
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic1;
