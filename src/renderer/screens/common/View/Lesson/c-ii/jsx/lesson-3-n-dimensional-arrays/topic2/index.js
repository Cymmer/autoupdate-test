import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="3D Arrays"
    titleJsx={
      <>
        <Code language={programmingLanguages.C}>
          {`#include<stdio.h>\n\nint main() {\n\tint m1[3][2][3] = {\n\t\t{\n\t\t\t{2, 3, 4},\n\t\t\t{1, 0, 5}\n\t\t},\n\t\t{\n\t\t\t{0, 2, 1},\n\t\t\t{2, 2, 2}\n\t\t},\n\t\t{\n\t\t\t{0, 0, 0}, \n\t\t\t{0, 0, 0}\n\t\t}\n\t};\n\n\treturn 0;\n}`}
        </Code>
        <br />
        <Text>
          <code>m1</code> is a 3D array. If you find it difficult to imagine how
          this looks, study the declaration above. <code>m1</code> actually has
          3 2x3 arrays. In relation to the matrix sample above, instead of
          having 3 separate 2x3 matrices, we simply incorporated them in one
          3x2x3 array.
        </Text>
      </>
    }
  >
    <Section>
      <Text>
        Now, let’s create a <code>display()</code> function for our 3D array{' '}
        <code>m1</code>:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid display(int[3][2][3]);\n\nint main() {\n\tint m1[3][2][3] = {\n\t\t{\n\t\t\t{2, 3, 4},\n\t\t\t{1, 0, 5}\n\t\t},\n\t\t{\n\t\t\t{0, 2, 1},\n\t\t\t{2, 2, 2}\n\t\t},\n\t\t{\n\t\t\t{0, 0, 0}, \n\t\t\t{0, 0, 0}\n\t\t}\n\t};\n\n\t// call the display function\n\tdisplay(m1);\n\n\treturn 0;\n}\n\nvoid display(int m[3][2][3]) {\n\tfor(int i = 0; i < 3; i++) {\n\t\tfor(int j = 0; j < 2; j++) {\n\t\t\tfor(int k = 0; k < 3; k++) {\n\t\t\t\tprintf("%d ", m[i][j][k]);\n\t\t\t}\n\t\t\tprintf("\\n");\n\t\t}\n\t\tprintf("\\n");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <Text>
        As you can see, since this is a 3D array, inside our{' '}
        <code>display()</code> function, we used 3 loops as well. The outermost
        loop iterates 3 times because the length of the outermost dimension of
        the array is 3. The middle loop iterates 2 times because the length of
        the middle dimension of the array is 2. Finally, the innermost loop
        iterates 3 times because the length of the innermost dimension of the
        array is 3.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic2;
