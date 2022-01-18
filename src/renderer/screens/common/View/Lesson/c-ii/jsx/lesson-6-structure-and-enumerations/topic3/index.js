import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="The enum Data Type"
    titleJsx={
      <>
        <Text>
          Notice how we have been using <strong>flags</strong> in our solutions
          but they have always been integers. Our flags have always been boolean
          in nature. This means that they only take two values, <code>0</code>{' '}
          or <code>1</code>. True or False. Is there a way to create this in C?
          But of course! We can do this by using the <code>enum</code> keyword.
        </Text>
        <Code language={programmingLanguages.C}>
          {`typedef enum { \n\ttrue = 1, \n\tfalse = 0 \n} boolean;`}
        </Code>
      </>
    }
  >
    <Section>
      <Text>
        Essentially, <code>enums</code> also allow us to create new types of
        data. But unlike structures, enumerations are mainly used to assign
        “names” to constant values like how we have been using flags with 0 or
        1. Check out the sample code below. It is easy enough to remember that{' '}
        <code>0</code> is false and <code>1</code> is true.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\ntypedef enum {\n\ttrue = 1, \n\tfalse = 0\n} boolean;\n\nboolean isEven(int);\n\nint main() {\n\tprintf("%d", isEven(22));\n\t\n\treturn 0;\n}\n\nboolean isEven(int n) {\n\tboolean flag;\n\t\n\tif(n % 2 == 0) {\n\t\tflag = true;\n\t} else {\n\t\tflag = false;\n\t}\n\t\n\treturn flag;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
    </Section>
  </TopicContainer>
);

export default Topic3;
