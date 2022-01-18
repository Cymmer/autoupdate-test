import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="Defining Arrays"
    titleJsx={
      <>
        <Text type={textTypes.HEADING.XS}>Review on Arrays</Text>
        <Text type={textTypes.BODY.MD}>
          Functions may also have arrays and/or strings as arguments. But before
          we head on to doing this, let’s have a full-on review on arrays.
          <br />
          <br />
          Prior to knowing anything about arrays, we were only able to store
          numbers as individual variables. What if we needed a collection of
          numbers? Let’s say we’re in a gymnastics competition and there are 20
          judges. The scores they give the gymnasts have to be recorded. Are we
          going to use 20 different variables? Sure we can! And then, we compute
          for the average score as shown below.
        </Text>
        <Code language={programmingLanguages.C}>
          {`double sum = s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20;\ndouble ave = sum/20;`}
        </Code>
      </>
    }
  >
    <Section>
      <Text>
        In a gymnastics competition, the lowest and highest scores the gymnasts
        get are dropped in computing for the average (“eliminates” bias). This
        means looking for the smallest score and the biggest score. Are we going
        to compare the 20 variables with each other?
        <br />
        <br />
        For sure we can, again! But is going to be very inconvenient to do this,
        wouldn’t it? The solution to this problem is to store the scores as one
        unit, very much like a set of numbers.
        <br />
        <br />
        There is a construct in C called <strong>arrays</strong>. Essentially,
        they are a <strong>collection</strong> of entities. Like an array of
        gold jewelry, an array of red roses, an array of chocolates! In our
        case, an array of double values (the scores gymnasts get are double
        values - both for difficulty and execution scores).
        <br />
        <br />
        This array requires that the entities in the collection should be of the
        same data type. Let us work with an array of integers first.
        <br />
        <br />
        Declaring an array of integers (or of any type) in C requires 2 things
        to distinguish it from an ordinary integer (or the corresponding type of
        the array). These are the <strong>square brackets</strong> (this tells
        the compiler that the identifier is an array), and the second is a
        <strong>constant positive integer</strong> that specifies the size of
        the array. The size tells the compiler how many{' '}
        <strong>elements</strong> or items the array (collection) can hold.
      </Text>
      <Code language={programmingLanguages.C}>
        {`// array1 can hold 5 ints\nint array1[5];\n\n// array2 can hold 10 ints\nint array2[10];`}
      </Code>
      <Text>
        In the sample, <code>array1</code> can now contain up to a maximum of 5
        ints. <code>array2</code> on the other can contain up to a maximum of 10
        ints. Maximum because it is not required to fill them up to the brim!
        When declaring arrays, make sure you allocate only what the solution
        needs so that memory is not wasted.
        <br />
        <br />
        Alright!
        <br />
        <br />
        We are now ready to use them. We illustrate this by using{' '}
        <code>array1</code>. Since <code>array1</code> has the capacity to hold
        a maximum of 5 ints, these 5 ints must be stored in a systematic manner.
        The items stored in arrays are called <strong>elements</strong>. And
        these elements are stored in <strong>sequential order</strong>. Storage
        locations in arrays are identified and referred to as{' '}
        <strong>indices</strong>. The indices of the arrays go from{' '}
        <code>0 </code> to <code>size-1</code>. In the case of{' '}
        <code>array1</code> here, the indices go from 0 to 4 (the size is 5 so 5
        - 1 is 4).
        <br />
        <br />
        This means that the first element is stored in index <code>0</code>, the
        second element in index <code>1</code>, the third in index{' '}
        <code>2</code>, the fourth in index <code>3</code> and finally, the 5th
        element in index <code>4</code>! Whew!
        <br />
        <br />
        The index cannot be less than 0, and it shouldn’t go beyond{' '}
        <code>size-1</code>. When we go beyond <code>size-1</code>, this is an
        index-out-of-bounds error. Remember that we only requested for 5
        integers in the case of <code>array1</code>.
        <br />
        <br />
        Therefore, the assignment <code>array1[5] = 17</code>; is problematic.
        This means we are accessing and changing the value of the 6th element of
        the array. But there is no 6th element since the size or the capacity of
        <code>array1</code> is just 5. <code>array1[10] = 17</code>; is
        problematic as well like the previous one.
        <br />
        <br />
        To access the elements in a particular index, indexing is used. This is
        through the use of the square brackets and specifying a valid index as
        shown below.
        <br />
        <br />
        <code>{`printf("%d %d %d %d %d\n", array1[0], array1[1],array1[2], array1[3], array1[4]);`}</code>
        <br />
        <br />
        The code above will display all the 5 elements of <code>array1</code> in
        one line. Notice, though, that the indices have a fixed pattern (they go
        from 0 to <code>size-1</code>, always). This means we can iterate
        through the elements of <code>array1</code> via indexing as demonstrated
        below.
      </Text>
      <Code
        language={programmingLanguages.C}
      >{`for(i = 0; i < 5; i++) {\n\tprintf("%d ",array1[i]);\n}`}</Code>
      <Text>
        Assigning values to the elements of the array requires indexing as well,
        with the use of the assignment operator, of course. This is shown below.
      </Text>
      <Code
        language={programmingLanguages.C}
      >{`array1[0] = 10;\narray1[1] = 96;\narray1[2] = -23;\narray1[3] = 0;\narray1[4] = array1[1] + array1[2];`}</Code>
      <Text>
        The values assigned as elements of the array may come from the standard
        input illustrated below.
        <br />
        <br />
        <code>scanf("%d%d", &array1[0], &array1[4]);</code>
        <br />
        <br />
        The code above asks for 2 integer inputs from the standard input and
        stores this as <code>array1</code>’s first and fifth elements.
        <br />
        <br />
        We may also iterate through the scanning of the elements of the array
        similar to what we did in the printing.
      </Text>
      <Code
        language={programmingLanguages.C}
      >{`for(i = 0; i < 5; i++)\n\tscanf("%d ", &array1[i]);`}</Code>
      <Text>
        Now that we know all of these, let’s get back to the gymnastics
        competition. Leggo!
      </Text>
      <Compiler
        initialCustomInput="10"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid square(int);\n\nint main() {\n\tint base, exp1, exp2, answer;\n\n\tscanf("%d", &base);\n\tprintf("Address of base in main(): %p\\n", &base);\n\n\tsquare(base);\n\n\treturn 0;\n}\n\nvoid square(int base) {\n\tprintf("Address of base in square(): %p\\n", &base);\n\n\tbase = base * base;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        As you can see, this is a shorter and more efficient code compared to
        the one we were planning to do earlier!
      </Text>
    </Section>

    <Section title="Searching in Arrays">
      <Text>
        We are almost done. In the gymnastics competition, one of the lowest
        scores and one of the highest scores are dropped from the computation of
        the final score of the gymnast. How do we search for the smallest
        element in an array? How do we search for the biggest element in an
        array?
        <br />
        <br />
        Before we head on and look for the smallest element in an array, one of
        the core problems discussed in problem solving is{' '}
        <strong>searching</strong>. Given a collection of data or an array of
        data, and search element <code>x</code>, we answer the question whether{' '}
        <code>x</code> is in the array or not.
        <br />
        <br />
        Let’s check the solution down below.
      </Text>
      <Compiler
        initialCustomInput={`57 23 31 10 40 45 70 65 88 90 23 11 49 69 50 12 31 50 100 88\n23`}
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint nums[20];\n\tint x;\n\n\t// this is a "flag" variable which tells us\n\t// if 'x' exists in the 'nums' array. 0 means\n\t// no, 1 means yes\n\tint exists = 0;\n\n\t// scan for 20 numbers and store them\n\t// all in the 'nums' array\n\tfor(int i = 0; i < 20; i++) {\n\t\tscanf("%d", &nums[i]);\n\t}\n\n\t// scan for the search item 'x', the value we're\n\t// going to look for in the array 'nums'\n\tscanf("%d", &x);\n\n\t// the strategy is to go through each of the values\n\t// in the 'nums' array\n\tfor(int i = 0; i < 20; i++) {\n\n\t\t// if the current number is equal to 'x', we set\n\t\t// the 'exists' flag to 1 and then exit from the\n\t\t// loop immediately\n\t\tif(nums[i] == x) {\n\t\t\texists = 1;\n\t\t\tbreak;\n\t\t}\n\t}\n\n\tif(exists == 1) {\n\t\tprintf("%d exists in the 'nums' array", x);\n\t} else {\n\t\tprintf("%d does not exist in the 'nums' array", x);\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Going back to the search for the <strong>lowest</strong> element, the
        same strategy is used in terms of going through all the elements in the
        array.
      </Text>
      <Compiler
        initialCustomInput="10 12 13.5 8 11.5 10 5 20 19.5 16 18.5 19.5 12 10 8.5 8.5 7 11 19 14.5"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tdouble scores[20];\n\tdouble lowest;\n\n\t// scan for 20 values and store them\n\t// in the 'scores' array\n\tfor(int i = 0; i < 20; i++) {\n\t\tscanf("%lf", &scores[i]);\n\t}\n\n\t// assume that the first score (the score\n\t// found at index 0) is the lowest score\n\tlowest = scores[0];\n\n\t// now, let's try to "beat" our current\n\t// lowest by checking if there is another\n\t// score that's smaller than it starting\n\t// from the second score (index 1)\n\tfor(int i = 1; i < 20; i++) {\n\n\t\t// if the current score is smaller than the current\n\t\t// lowest, it becomes the new lowest\n\t\tif(scores[i] < lowest) {\n\t\t\tlowest = scores[i];\n\t\t}\n\t}\n\n\tprintf("The lowest score from all the gymnasts scores is %lf.\\n", lowest);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <Text>
        The code above stores the lowest element in the array to the variable
        <code>lowest</code>.
        <br />
        <br />
        And it’s literally the same approach to find the{' '}
        <strong>biggest</strong> element!
      </Text>
      <Compiler
        initialCustomInput="10 12 13.5 8 11.5 10 5 20 19.5 16 18.5 19.5 12 10 8.5 8.5 7 11 19 14.5"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tdouble scores[20];\n\t// let's just change our variable's name\n\t// from 'lowest' to 'biggest'\n\tdouble biggest;\n\n\tfor(int i = 0; i < 20; i++) {\n\t\tscanf("%lf", &scores[i]);\n\t}\n\n\tbiggest = scores[0];\n\n\tfor(int i = 1; i < 20; i++) {\n\n\t\t// and instead of doing a lesser than here, let's\n\t\t// check if the current score is "greater than"\n\t\t// the current biggest\n\t\tif(scores[i] > biggest) {\n\t\t\tbiggest = scores[i];\n\t\t}\n\t}\n\n\t// of course, let's update our print message so that\n\t// our program would make sense 🙂\n\tprintf("The biggest score from all the gymnasts scores is %lf.\\n", biggest);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        In this version of the code, the biggest element in the array is stored
        in the variable <code>biggest</code>.
        <br />
        <br />
        Merging all these strategies in solving the gymnasts’ average score we
        have:
      </Text>
      <Compiler
        initialCustomInput="10 12 13.5 8 11.5 10 5 20 19.5 16 18.5 19.5 12 10 8.5 8.5 7 11 19 14.5"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tdouble scores[20];\n\tdouble sum = 0, average;\n\tdouble biggest, lowest;\n\n\tfor(int i = 0; i < 20; i++) {\n\t\tscanf("%lf", &scores[i]);\n\t}\n\n\t// compute for the sum\n\tfor(int i = 0; i < 20; i++) {\n\t\tsum = sum + scores[i];\n\t}\n\n\tlowest = scores[0];\n\tbiggest = scores[0];\n\n\t// this time, let's find the lowest and\n\t// the biggest together because we can 😉\n\tfor(int i = 1; i < 20; i++) {\n\t\tif(scores[i] < lowest) {\n\t\t\tlowest = scores[i];\n\t\t}\n\n\t\tif(scores[i] > biggest) {\n\t\t\tbiggest = scores[i];\n\t\t}\n\t}\n\n\t// now, to compute the average, we need to first\n\t// subtract the biggest and the lowest from the\n\t// overall sum ("eliminates" bias)\n\taverage = (sum - biggest - lowest) / 18;\n\n\tprintf("The average score of the gymnasts without the lowest and biggest is %lf.\\n", average);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <Text>
        The search for the lowest item and the biggest item are two separate
        tasks. But we can look for them “simultaneously” as shown above.
        However, do not place <code>if(scores[i] {`>`} biggest)</code> in an
        else statement. Again,{' '}
        <strong>they are independent of each other</strong>. If we did this,
        then the check for a new biggest item will only be executed when no new
        lowest item is found.
        <br />
        <br />
        We have finally finished writing the code for the gymnasts’ scores for
        the competition. Congratulations to the winners, and congrats to us too
        for finishing the code!
      </Text>
      <br />
    </Section>
  </TopicContainer>
);

export default Topic1;
