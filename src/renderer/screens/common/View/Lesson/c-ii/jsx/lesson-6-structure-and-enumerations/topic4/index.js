import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Compiler } from 'components/elements';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic4 = () => (
  <TopicContainer
    image={IntroImage}
    number={4}
    title="Applying enums"
    titleJsx={
      <>
        <Text>
          Now that we know how basic enums work, what if we now have multiple
          items, say the days of the week? What do we do? We can use enums for
          these situations as shown below.
        </Text>
        <Compiler
          initialSourceCodes={[
            {
              code: `#include<stdio.h>\n\ntypedef enum {Mon, Tue, Wed, Thu, Fri, Sat, Sun} day;\n\nint main() {\n\tday d = Tue;\n\n\tprintf("%d\\n", d);\n\n\treturn 0;\n}`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
        />
        <br />
      </>
    }
  >
    <Section>
      <Text>
        Notice that in creating <code>day</code>, the values inside the curlys
        are not assigned any other value unlike in boolean. If we do not
        initialize the values of an enumeration, automatically, they are
        assigned default values that{' '}
        <strong>
          go from 0 to the number of elements found in enum declaration
        </strong>
        .
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\ntypedef enum {Mon, Tue, Wed, Thu, Fri, Sat, Sun} day;\n\nint main() {\n\n\tprintf("%d %d %d %d %d %d %d\\n", Mon, Tue, Wed, Thu, Fri, Sat, Sun);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Again, the reason why we would want to use enums is for named constants.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic4;
