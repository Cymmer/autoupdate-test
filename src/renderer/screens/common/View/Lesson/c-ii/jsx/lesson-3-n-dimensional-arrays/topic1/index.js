import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { FunFactCard } from 'components';
import IntroImage from './intro-image.png';
import Matrix from './matrix.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';
import Image from '../../../../Image';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="2D Arrays"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Have you played tic-tac-toe or chess? These games have boards. For
        tic-tac-toe, it is a 3x3 board and for chess, it is 8x8. The question is
        how can we create these boards using arrays?
        <br />
        <br />
        These entities cannot be represented by a single array, but we can have
        multiple single arrays to handle these constructs. For instance, we can
        have 3 arrays with size 3 each to represent a 3x3 board. In a similar
        manner, we can have 8 arrays with size 8 each
      </Text>
    }
  >
    <Section>
      <Text>
        This is called a <strong>2-dimensional array</strong>. Initializing 2D
        arrays can be done like this:
      </Text>
      <Code language={programmingLanguages.C}>
        {`#include<stdio.h>\n\nint main() {\n\tint tictactoeBoard[3][3];\n\tint chessBoard[8][8];\n\n\treturn 0;\n}`}
      </Code>
      <Text>
        <code>tictactoeBoard</code> is a 2D array. We say it has 3 rows and 3
        columns. In total, it has 9 elements.
        <br />
        <br />
        <code>chessBoard</code> is a 2D array. We say it has 8 rows and 8
        columns. In total, it has 64 elements.
        <br />
        <br />
        The 2D arrays can also be initialized while assigning values to them
        like this:
      </Text>
      <Code
        language={programmingLanguages.C}
      >{`#include<stdio.h>\n\nint main() {\n\tint matrix[2][3] = {{2, 3, 4}, {1, 0, 5}};\n\n\treturn 0;\n}`}</Code>
      <Text>
        <code>matrix</code> has 2 rows and 3 columns, and has a total of 6
        elements. Notice how the elements were initialized. We have 2
        collections (arrays) with size 3 each.
        <br />
        <br />
        To access and manipulate the 2D array, we go through the elements by row
        then by column, or by column then by row. This one below is going
        through the elements by row first (with the outer loop) and then going
        through the columns of each of the rows (with the inner loop). The
        example below shows how we can traverse through the 2D array.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint matrix[2][3] = {{2, 3, 4}, {1, 0, 5}};\n\n\tfor(int i = 0; i < 2; i++) {\n\t\tfor(int j = 0; j < 3; j++) {\n\t\t\tprintf("%d ", matrix[i][j]);\n\t\t}\n\n\t\tprintf("\\n");\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Like a regular array, the first element is found in index 0. For a 2D
        array, the first element is found in index 0 as well. But this element
        is an entire array (or at least the address of the first element of the
        first array). Therefore, a second index is needed.
        <br />
        <br />
        Again, the outer loop goes from one row to the next and the inner loop
        goes through the columns of each of the rows.
        <br />
        <br />
        The sample code below prints the starting addresses of the rows of the
        matrix.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint matrix[2][3] = {{2, 3, 4}, {1, 0, 5}};\n\n\tprintf("%p\\n", matrix[0]);\n\tprintf("%p\\n", matrix[1]);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>The expected output should be something like:</Text>
      <Code>{`0x7ffeedd97840\n0x7ffeedd9784c`}</Code>
      <Text>
        It won’t exactly be the same because everytime you run the program, it
        will allocate different addresses but if you carefully study the two
        addresses, their difference is 12 units (recall hexadecimal
        subtraction). This is because the first row needs 12 bytes to
        accommodate its 3 elements (each element is 4 bytes so 3 x 4 bytes is
        12).
        <br />
        <br />
        Let’s work on an actual problem on matrix, that is matrix addition.
        Let’s see an example:
      </Text>
      <Image alt="Matrix Addition" src={Matrix} />
      <Text>
        Essentially, the addition was done row by row. The following code below
        adds two matrices:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint m1[2][3] = {{2, 3, 4}, {1, 0, 5}};\n\tint m2[2][3] = {{0, 2, 1}, {2, 2, 2}};\n\n\t// this matrix holds the answer\n\tint ans[2][3];\n\n\t// go through each of the rows of the\n\t// two matrices to be added\n\tfor(int i = 0; i < 2; i++) {\n\n\t\t// for each of the rows, go through\n\t\t// each of their columns\n\t\tfor(int j = 0; j < 3; j++) {\n\n\t\t\t// add them both and store the result\n\t\t\t// in the correct position in the\n\t\t\t// 'ans' array\n\t\t\tans[i][j] = m1[i][j] + m2[i][j];\n\t\t}\n\t}\n\n\t// print the contents of the first matrix\n\tfor(int i = 0; i < 2; i++) {\n\t\tfor(int j = 0; j < 3; j++) {\n\t\t\tprintf("%d ", m1[i][j]);\n\t\t}\n\t\tprintf("\\n");\n\t}\n\n\tprintf("+\\n");\n\n\t// print the contents of the second matrix\n\tfor(int i = 0; i < 2; i++) {\n\t\tfor(int j = 0; j < 3; j++) {\n\t\t\tprintf("%d ", m2[i][j]);\n\t\t}\n\t\tprintf("\\n");\n\t}\n\n\tprintf("=\\n");\n\n\t// print the contents of the answer matrix\n\tfor(int i = 0; i < 2; i++) {\n\t\tfor(int j = 0; j < 3; j++) {\n\t\t\tprintf("%d ", ans[i][j]);\n\t\t}\n\t\tprintf("\\n");\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        The code above works but it can definitely be improved. Did you notice
        that the way we print the 3 matrices (<code>m1</code>, <code>m2</code>,{' '}
        <code>ans</code>) are all the same?
        <br />
        <br />
        How could we possibly improve this code? That’s right! With functions!
        <br />
        <br />
        Shown below is the updated code that uses a <code>
          displayMatrix
        </code>{' '}
        function. Observe how to make a function that accepts a matrix as a
        parameter:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid display(int[2][3]);\n\nint main() {\n\tint m1[2][3] = {{2, 3, 4}, {1, 0, 5}};\n\tint m2[2][3] = {{0, 2, 1}, {2, 2, 2}};\n\n\t// this matrix holds the answer\n\tint ans[2][3];\n\n\t// go through each of the rows of the\n\t// two matrices to be added\n\tfor(int i = 0; i < 2; i++) {\n\n\t\t// for each of the rows, go through\n\t\t// each of their columns\n\t\tfor(int j = 0; j < 3; j++) {\n\n\t\t\t// add them both and store the result\n\t\t\t// in the correct position in the\n\t\t\t// 'ans' array\n\t\t\tans[i][j] = m1[i][j] + m2[i][j];\n\t\t}\n\t}\n\n\t// print the contents of the first matrix\n\tdisplay(m1);\n\n\tprintf("+\\n");\n\n\t// print the contents of the second matrix\n\tdisplay(m2);\n\n\tprintf("=\\n");\n\n\t// print the contents of the answer matrix\n\tdisplay(ans);\n\n\treturn 0;\n}\n\nvoid display(int m[2][3]) {\n\tfor(int i = 0; i < 2; i++) {\n\t\tfor(int j = 0; j < 3; j++) {\n\t\t\tprintf("%d ", m[i][j]);\n\t\t}\n\t\tprintf("\\n");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>How awesome is that!</Text>
    </Section>

    <Section>
      <FunFactCard
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            When implementing functions that accept 2D arrays as parameters, the
            number of columns of the matrix is required but the number of rows
            is optional.
          </Text>
        }
      />
      <br />
      <Text>
        This can be extended to having a 3-dimensional (3D) array: an array
        within an array within an array. This means that this array has 3
        subscripts and actually, this can even be extended further with as many
        as you like! However, it is usually recommended to just limit to a 3D
        array so that it won’t be difficult to trace and fix your code in case
        something wrong happens.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic1;
