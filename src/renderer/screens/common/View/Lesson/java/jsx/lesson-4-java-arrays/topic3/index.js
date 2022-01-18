import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="Accessing Elements"
    titleJsx={
      <>
        <Text type={textTypes.BODY.MD}>
          Again, this is what we have so far:
        </Text>
        <Code language={programmingLanguages.JAVA}>
          {`array1 = new int[5];\narray2 = new int[10];`}
        </Code>
        <Text>
          We have allocated memory to them, and we are now ready to use them. We
          illustrate this by using <code>array1</code>. Since{' '}
          <code>array1</code> has the capacity to hold a maximum of 5 ints,
          these 5 ints must be stored in a systematic manner. The items stored
          in arrays are called <strong>elements</strong>.
          <br />
          <br />
          These elements are stored in sequential order. Storage locations in
          arrays are identified and referred to via <strong>indices</strong>.
          The indices of the arrays go from 0 to <code>size - 1</code>. In the
          case of <code>array1</code> here, the indices go from 0 to 4.
          <br />
          <br />
          This means that the first element is stored in index 0, the second
          element in index 1, the third in index 2, the fourth in index 3 and
          finally, the fifth element in index 4! Whoah!
          <br />
          <br />
          To access the elements in a particular index, indexing is used. This
          is through the use of the square bracket and specifying a valid index
          as shown below.
        </Text>
        <Code language={programmingLanguages.JAVA}>
          System.out.println(array1[0]+ " " + array1[1]+ " " + array1[2]+ " " +
          array1[3]+ " " + array1[4]);
        </Code>
        <Text>
          What the code snippet above does is it prints all the 5 elements of{' '}
          <code>array1</code>.
        </Text>
      </>
    }
  >
    <Section>
      <Text>
        Assigning values to the elements of the array requires indexing as well.
        With the use of the assignment operator, of course. As shown below.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`array1[0] = 10;\narray1[1] = 96;\narray1[2] = -23;\narray1[3] = 0;\narray1[4] = array1[1] + array1[2];`}
      </Code>
      <Text>
        Of course, as you expected, the values can come from the terminal via
        some Scanner as shown below.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`array1[0] = input.nextInt();\narray1[1] = input.nextInt();\n\nfor(int i = 2; i < 5; i++)\n\tarray1[i] = input.nextInt();`}
      </Code>
      <Text>
        And because the index in an integer and the positions of the elements of
        the array are stored in a sequential manner, an iterator may be used as
        shown above.
        <br />
        <br />
        You are now ready to do actual work on arrays. Recall the gymnastics
        competition where there are 20 judges and the scores they give the
        gymnasts have to be recorded? Let’s simulate the computation of the
        average!
        <br />
        <br />
        <strong>Chiron impresses:</strong> check the code below
      </Text>
      <Compiler
        initialCustomInput="5 3 4 10 3 2 1 7 8.5 8 9 10 10 1 2.5 3.5 4 2 1 1"
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\n\t\tdouble[] scores = new double[20];\n\t\tdouble sum = 0, average;\n\n\t\tfor(int i = 0; i < 20; i++)\n\t\t\tscores[i] = input.nextDouble();\n\n\t\tfor(int i = 0; i < 20; i++)\n\t\t\tsum = sum + scores[i];\n\t\taverage = sum / 20;\n\n\t\tSystem.out.println("The average score of the gymnast is: " + average);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        We are almost done. In gymnastics competition, one of the lowest scores
        and one of the highest scores are dropped or are not included in the
        computation of the final score of the gymnast.
        <br />
        <br />
        <strong>Chiron sidequest:</strong> Check the code below where the lowest
        score is searched. Update the code below to also search for the highest
        score and finally, compute the average score (do not forget that 2
        scores, the lowest and the highest, have been dropped or are not
        included in the computation of the average score).
      </Text>
      <Compiler
        initialCustomInput="5 3 4 10 3 2 1 7 8.5 8 9 10 10 1 2.5 3.5 4 2 1 1"
        initialSourceCodes={[
          {
            code: `import java.util.Scanner;\n\nclass Main {\n\tpublic static void main(String args[]) {\n\t\tScanner input = new Scanner(System.in);\n\n\t\tdouble[] scores = new double[20];\n\t\tdouble sum = 0, average, lowest;\n\t\t\n\t\tfor(int i = 0; i < 20; i++)\n\t\t\tscores[i] = input.nextDouble();\n\t\t\n\t\tlowest = scores[0]; // assume the first element to be the lowest score\n\t\t\n\t\t// then start looking for scores that might be lesser than the current lowest\n\t\t// if this is found, then it becomes the new lowest score\n\t\tfor(int i = 1; i < 20; i++) {\n\t\t\tif(scores[i] < lowest) // checks if a score is smaller than the current lowest\n\t\t\t\tlowest = scores[i]; // if this is the case, then a new lowest is found\n\t\t}\n\n\t\tSystem.out.println("The lowest score is: " + lowest);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
    </Section>
  </TopicContainer>
);

export default Topic3;
