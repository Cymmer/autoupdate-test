import React from 'react';

import { Text, Code } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic4 = () => (
  <TopicContainer
    image={IntroImage}
    number={4}
    title="For-Each Array Traversal"
    titleJsx={
      <>
        <Text type={textTypes.BODY.MD}>
          There was a mention on for-each in the loop constructs in Java. They
          are usually used with arrays. Instead of using iterators and indices,
          for-each might prove more efficient. See the sample below:
        </Text>
        <Code language={programmingLanguages.JAVA}>
          {`import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\n\t\tdouble[] scores = new double[20];\n\t\tdouble sum = 0, average, lowest;\n\n\t\tfor(int i = 0; i < 20; i++)\n\t\t\tscores[i] = input.nextDouble();\n\n\t\tlowest = scores[0]; // assume the first element to be the lowest score\n\n\t\t// then start looking for scores that might be lesser than the current lowest\n\t\t// if this is found, then it becomes the new lowest score\n\n\t\tfor(double score : scores) {\n\t\t\tif(score < lowest)\n\t\t\t\tlowest = score;\n\t\t}\n\n\t\tSystem.out.println("The lowest score is: " + lowest);\n\t}\n}`}
        </Code>
      </>
    }
  >
    <Section>
      <Text>
        Each element in the <code>scores</code> array is assigned to the
        variable <code>score</code> (this should be of the same data type as the
        elements of the <code>scores</code> array).
        <br />
        <br />
        Well, it might have taken quite a while with sidequests, Chums, and what
        with Chiron trying to impress, but congratulations and salutations are
        in order!
        <br />
        <br />
        You are now ready for your Labours!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic4;
