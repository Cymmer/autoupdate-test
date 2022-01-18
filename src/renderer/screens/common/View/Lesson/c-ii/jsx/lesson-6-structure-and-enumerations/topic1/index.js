import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="The struct Data Type"
    titleJsx={
      <>
        <Text>
          Let’s recall the previous problem on fractions. We had to ask for the
          inputs using 4 digits. Let’s create a function that takes in 4
          integers considered as two fractions and perform multiplication on
          them.
        </Text>
        <Compiler
          initialSourceCodes={[
            {
              code: `#include<stdio.h>\n\nvoid times(int, int, int, int);\n\nint main() {\n\ttimes(1, 2, 5, 3);\n\n\treturn 0;\n}\n\nvoid times(int n1, int d1, int n2, int d2) {\n\tint n = n1 * n2;\n\tint d = d1 * d2;\n\n\tprintf("The answer is: %d/%d.\\n", n, d);\n}`,
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
        Notice that the <code>times()</code> function printed the result on the
        console. What if some other function would be needing the result of this
        multiplication for future computations? How do we let{' '}
        <code>times()</code> return{' '}
        <strong>both the numerator and denominator</strong>?
      </Text>
      <Code language={programmingLanguages.C}>
        {`void times(int n1, int d1, int n2, int d2) {\n\tint n = n1 * n2;\n\tint d = d1 * d2;\n\t\n\t// can we do this??\n\treturn n;\n\treturn d;\n}`}
      </Code>
      <Text>
        The above solution does not quite cut it. It returns an <code>int</code>{' '}
        (not ints). When the statement return n is reached, the function
        terminates and control of execution will be given back to whichever
        function has called <code>times()</code>. This means that{' '}
        <code>return d</code> is an unreachable statement. Again, that’s what
        return essentially does, it terminates the function.
        <br />
        <br />
        But worry not!
        <br />
        <br />
        There is a construct in C that allows for related data to be aggregated
        or combined together to form a new type of entity/data. Like in this
        case, the numerator and denominator should represent one entity, and
        that is a fraction. This is what the <code>struct</code> in C does.
        Aggregating together related data in one entity through the{' '}
        <code>struct</code> keyword allows programs to{' '}
        <strong>construct user-defined types</strong>. Yes, <code>struct</code>,
        in effect, creates new types of data.
      </Text>
      <Code language={programmingLanguages.C}>
        {`struct fraction {\n\tint nume, deno;\n};`}
      </Code>
      <Text>
        What we have done above is construct a structure called{' '}
        <code>fraction</code>. And ultimately, we created a new type of data.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic1;
