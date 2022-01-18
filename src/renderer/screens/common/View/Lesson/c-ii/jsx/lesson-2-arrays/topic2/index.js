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
    title="Sorting"
    titleJsx={
      <>
        <Text>
          On these next few codes, we will be working with an array with size 5
          for convenience. Let’s compile and run each of the codes below and
          observe what’s happening. We will also initialize the array with
          literal ints. The codes below should be ready to be run and tested so
          let’s dive right in!
        </Text>
        <Compiler
          initialSourceCodes={[
            {
              code: `#include<stdio.h>\n\nint main() {\n\tint arr[] = {23, 12, 9, 68, -2};\n\tint indexOfMin = 0;\n\n\tfor(int i = 1; i < 5; i++) {\n\t\tif(arr[i] < arr[indexOfMin]) {\n\t\t\tindexOfMin = i;\n\t\t}\n\t}\n\n\tprintf("The smallest item/element in the array is %d.\\n", arr[indexOfMin]);\n\n\treturn 0;\n}`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
        />
      </>
    }
  >
    <Section>
      <Text>
        The line <code>{`int arr[] = {23, 12, 9, 68, -2}`}</code>; initializes
        the array with the corresponding elements enclosed in the curly braces.
        The first int, <code>23</code>, is stored in <code>arr[0]</code>,{' '}
        <code>12</code> in <code>arr[1]</code>, <code>-2</code> in{' '}
        <code>arr[4]</code>. We did mention in an earlier section that apart
        from the square brackets, a size is required in declaring an array.
        Leaving the array size is allowed{' '}
        <strong>only when there is initialization</strong> (or there are preset
        default values). The number of items listed inside the curly braces is
        the size of the array. In the case above, the size of the array is 5.
        <br />
        <br />
        We still can put the size if we wish to, like this:{' '}
        <code>{`int arr[5] = {23, 12, 9, 68, -2};`}</code>.
        <br />
        <br />
        This is also possible:{' '}
        <code>{`int arr[10] = {23, 12, 9, 68, -2};`}</code>. This would mean
        that the size of the array is 10, but only the first 5 elements are
        initialized, the next 5 are not.
        <br />
        <br />
        This, though, is problematic:{' '}
        <code>{`int arr[3] = {23, 12, 9, 68, -2};`}</code>. The size of the
        array is set to 3 but there are 5 listed items.
        <br />
        <br />
        The code above should look familiar. It is searching for the smallest
        item in the array. And this information is stored in{' '}
        <code>indexOfMin</code>. But unlike our original version of finding the
        smallest item in an array, what is stored in <code>indexOfMin</code> is
        the index of the minimum element and not the element itself.
        <br />
        <br />
        Look, <code>indexOfMin</code> is initially <code>0</code> (instead of{' '}
        <code>arr[0]</code>) and is only used for indexing. In the code above,
        the purpose of <code>indexOfMin</code> is to store the index where the
        smallest element is stored, not the value of the smallest element.
        That’s why we should use <code>{`if(arr[i] < arr[indexOfMin])`}</code>{' '}
        instead of <code>{`if(arr[i] < indexOfMin)`}</code>.
        <br />
        <br />
        When displaying the smallest item in the array, we should also use:
      </Text>
      <Code language={programmingLanguages.C}>
        {`printf("The smallest item/element in the array is %d.\\n", arr[indexOfMin]);`}
      </Code>
      <Text>instead of the line:</Text>
      <Code
        language={programmingLanguages.C}
      >{`printf("The smallest item/element in the array is %d.\\n", indexOfMin);`}</Code>
      <Text>Let’s carefully observe the code below.</Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint arr[] = {23, 12, 9, 68, -2};\n\tint indexOfMin;\n\tint temp;\n\n\t// SECTION 1\n\t// - search for the index of the smallest number\n\tindexOfMin = 0;\n\tfor(int i = 1; i < 5; i++) {\n\t\tif(arr[i] < arr[indexOfMin]) {\n\t\t\tindexOfMin = i;\n\t\t}\n\t}\n\tprintf("The smallest item/element in the array is %d.\\n", arr[indexOfMin]);\n\t// END OF SECTION 1\n\n\n\t// SECTION 2\n\t// - swapping of arr[0] and arr[indexOfMin]\n\ttemp = arr[0];\n\tarr[0] = arr[indexOfMin];\n\tarr[indexOfMin] = temp;\n\t// END OF SECTION 2\n\n\n\t// SECTION 3\n\t// - printing of the latest contents of the 'arr' array\n\tfor(int i = 0; i < 5; i++) {\n\t\tprintf("%d ", arr[i]);\n\t}\n\tprintf("\\n");\n\t// END OF SECTION 3\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Running the program should result in the display of{' '}
        <code>-2 12 9 68 23</code>. Essentially, what the code above is doing is
        finding the smallest item from among the 5 items which is{' '}
        <code>-2</code>. Once this is found, it is swapped with the first
        element of the array, which, in this case, is <code>23</code>.
        <br />
        <br />
        Again, let’s carefully study the code below. It’s a bit long but
        basically, <strong>SECTION 1 - 3</strong> is just the same code from
        above:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint arr[] = {23, 12, 9, 68, -2};\n\tint indexOfMin;\n\tint temp;\n\n\t// SECTION 1\n\t// - search for the index of the smallest number\n\tindexOfMin = 0;\n\tfor(int i = 1; i < 5; i++) {\n\t\tif(arr[i] < arr[indexOfMin]) {\n\t\t\tindexOfMin = i;\n\t\t}\n\t}\n\t// END OF SECTION 1\n\n\n\t// SECTION 2\n\t// - swapping of arr[0] and arr[indexOfMin]\n\ttemp = arr[0];\n\tarr[0] = arr[indexOfMin];\n\tarr[indexOfMin] = temp;\n\t// END OF SECTION 2\n\n\n\t// SECTION 3\n\t// - printing of the latest contents of the 'arr' array\n\tfor(int i = 0; i < 5; i++) {\n\t\tprintf("%d ", arr[i]);\n\t}\n\tprintf("\\n");\n\t// END OF SECTION 3\n\n\n\t// SECTION 4\n\t// - searching for the smallest item from among the \n\t// 4 elements from index 1 to 4 (this time, we don't\n\t// include the element in index 0)\n\tindexOfMin = 1;\n\tfor(int i = 2; i < 5; i++) {\n\t\tif(arr[i] < arr[indexOfMin]) {\n\t\t\tindexOfMin = i;\n\t\t}\n\t}\n\t// END OF SECTION 4\n\n\n\t// SECTION 5\n\t// - swapping of arr[1] and arr[indexOfMin]\n\ttemp = arr[1];\n\tarr[1] = arr[indexOfMin];\n\tarr[indexOfMin] = temp;\n\t// END OF SECTION 5\n\n\n\t// SECTION 6\n\t// - printing of the latest contents of the 'arr' array\n\tfor(int i = 0; i < 5; i++) {\n\t\tprintf("%d ", arr[i]);\n\t}\n\tprintf("\\n");\n\t// END OF SECTION 6\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Running the program above should result in the final display of{' '}
        <code>-2 9 12 68 23</code>. The smallest item from among the 4 items
        left is <code>9</code>. Once this is found, it is swapped with the
        second element of the array, which, in this case, is <code>12</code>.
        <br />
        <br />
        Getting it? Not yet? Okay, once more, let’s carefully study the code
        below. Again, <strong>SECTION 1 - 6</strong> is just the same code from
        above:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint arr[] = {23, 12, 9, 68, -2};\n\tint indexOfMin;\n\tint temp;\n\n\t// SECTION 1\n\t// - search for the index of the smallest number\n\tindexOfMin = 0;\n\tfor(int i = 1; i < 5; i++) {\n\t\tif(arr[i] < arr[indexOfMin]) {\n\t\t\tindexOfMin = i;\n\t\t}\n\t}\n\t// END OF SECTION 1\n\n\n\t// SECTION 2\n\t// - swapping of arr[0] and arr[indexOfMin]\n\ttemp = arr[0];\n\tarr[0] = arr[indexOfMin];\n\tarr[indexOfMin] = temp;\n\t// END OF SECTION 2\n\n\n\t// SECTION 3\n\t// - printing of the latest contents of the 'arr' array\n\tfor(int i = 0; i < 5; i++) {\n\t\tprintf("%d ", arr[i]);\n\t}\n\tprintf("\\n");\n\t// END OF SECTION 3\n\n\n\t// SECTION 4\n\t// - searching for the smallest item from among the \n\t// 4 elements from index 1 to 4 (this time, we don't\n\t// include the element in index 0)\n\tindexOfMin = 1;\n\tfor(int i = 1; i < 5; i++) {\n\t\tif(arr[i] < arr[indexOfMin]) {\n\t\t\tindexOfMin = i;\n\t\t}\n\t}\n\t// END OF SECTION 4\n\n\n\t// SECTION 5\n\t// - swapping of arr[1] and arr[indexOfMin]\n\ttemp = arr[1];\n\tarr[1] = arr[indexOfMin];\n\tarr[indexOfMin] = temp;\n\t// END OF SECTION 5\n\n\n\t// SECTION 6\n\t// - printing of the latest contents of the 'arr' array\n\tfor(int i = 0; i < 5; i++) {\n\t\tprintf("%d ", arr[i]);\n\t}\n\tprintf("\\n");\n\t// END OF SECTION 6\n\n\n\t// SECTION 7\n\t// - searching for the smallest item from among the \n\t// 3 elements from index 2 to 4 (this time, we don't\n\t// include the elements in index 0 and 1)\n\tindexOfMin = 2;\n\tfor(int i = 3; i < 5; i++) {\n\t\tif(arr[i] < arr[indexOfMin]) {\n\t\t\tindexOfMin = i;\n\t\t}\n\t}\n\t// END OF SECTION 7\n\n\n\t// SECTION 8\n\t// - swapping of arr[2] and arr[indexOfMin]\n\ttemp = arr[2];\n\tarr[2] = arr[indexOfMin];\n\tarr[indexOfMin] = temp;\n\t// END OF SECTION 8\n\n\n\t// SECTION 9\n\t// - printing of the latest contents of the 'arr' array\n\tfor(int i = 0; i < 5; i++) {\n\t\tprintf("%d ", arr[i]);\n\t}\n\tprintf("\\n");\n\t// END OF SECTION 9\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Running the program above should result in the final display of{' '}
        <code>-2 9 12 68 23</code>. The smallest item from among the 3 items
        left is <code>12</code>. Once this is found, it is swapped with the
        third element of the array, which, in this case, is <code>12</code> (it
        got swapped with itself).
        <br />
        <br />
        Just a little bit more and we’re done! <strong>SECTION 1 - 9</strong> is
        just the same code from above:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint arr[] = {23, 12, 9, 68, -2};\n\tint indexOfMin;\n\tint temp;\n\n\t// SECTION 1\n\t// - search for the index of the smallest number\n\tindexOfMin = 0;\n\tfor(int i = 1; i < 5; i++) {\n\t\tif(arr[i] < arr[indexOfMin]) {\n\t\t\tindexOfMin = i;\n\t\t}\n\t}\n\t// END OF SECTION 1\n\n\n\t// SECTION 2\n\t// - swapping of arr[0] and arr[indexOfMin]\n\ttemp = arr[0];\n\tarr[0] = arr[indexOfMin];\n\tarr[indexOfMin] = temp;\n\t// END OF SECTION 2\n\n\n\t// SECTION 3\n\t// - printing of the latest contents of the 'arr' array\n\tfor(int i = 0; i < 5; i++) {\n\t\tprintf("%d ", arr[i]);\n\t}\n\tprintf("\\n");\n\t// END OF SECTION 3\n\n\n\t// SECTION 4\n\t// - searching for the smallest item from among the \n\t// 4 elements from index 1 to 4 (this time, we don't\n\t// include the element in index 0)\n\tindexOfMin = 1;\n\tfor(int i = 1; i < 5; i++) {\n\t\tif(arr[i] < arr[indexOfMin]) {\n\t\t\tindexOfMin = i;\n\t\t}\n\t}\n\t// END OF SECTION 4\n\n\n\t// SECTION 5\n\t// - swapping of arr[1] and arr[indexOfMin]\n\ttemp = arr[1];\n\tarr[1] = arr[indexOfMin];\n\tarr[indexOfMin] = temp;\n\t// END OF SECTION 5\n\n\n\t// SECTION 6\n\t// - printing of the latest contents of the 'arr' array\n\tfor(int i = 0; i < 5; i++) {\n\t\tprintf("%d ", arr[i]);\n\t}\n\tprintf("\\n");\n\t// END OF SECTION 6\n\n\n\t// SECTION 7\n\t// - searching for the smallest item from among the \n\t// 3 elements from index 2 to 4 (this time, we don't\n\t// include the elements in index 0 and 1)\n\tindexOfMin = 2;\n\tfor(int i = 3; i < 5; i++) {\n\t\tif(arr[i] < arr[indexOfMin]) {\n\t\t\tindexOfMin = i;\n\t\t}\n\t}\n\t// END OF SECTION 7\n\n\n\t// SECTION 8\n\t// - swapping of arr[2] and arr[indexOfMin]\n\ttemp = arr[2];\n\tarr[2] = arr[indexOfMin];\n\tarr[indexOfMin] = temp;\n\t// END OF SECTION 8\n\n\n\t// SECTION 9\n\t// - printing of the latest contents of the 'arr' array\n\tfor(int i = 0; i < 5; i++) {\n\t\tprintf("%d ", arr[i]);\n\t}\n\tprintf("\\n");\n\t// END OF SECTION 9\n\n\n\t// SECTION 10\n\t// - searching for the smallest item from among the \n\t// 2 elements from index 3 to 4 (this time, we don't\n\t// include the elements in index 0, 1, and 2)\n\tindexOfMin = 3;\n\tfor(int i = 4; i < 5; i++) {\n\t\tif(arr[i] < arr[indexOfMin]) {\n\t\t\tindexOfMin = i;\n\t\t}\n\t}\n\t// END OF SECTION 10\n\n\n\t// SECTION 11\n\t// - swapping of arr[3] and arr[indexOfMin]\n\ttemp = arr[3];\n\tarr[3] = arr[indexOfMin];\n\tarr[indexOfMin] = temp;\n\t// END OF SECTION 11\n\n\n\t// SECTION 12\n\t// - printing of the latest contents of the 'arr' array\n\tfor(int i = 0; i < 5; i++) {\n\t\tprintf("%d ", arr[i]);\n\t}\n\tprintf("\\n");\n\t// END OF SECTION 12\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Running the program above should result in the final display of{' '}
        <code>-2 9 12 23 68</code>. The smallest item from among the last 2
        items left is <code>23</code>. Once this is found, it is swapped with
        the fourth element of the array, which, in this case, is <code>68</code>
        .
        <br />
        <br />
        Initially, the order of the elements in the array was{' '}
        <code>23 12 9 68 -2</code>, and was eventually rearranged to{' '}
        <code>-2 9 12 23 68</code>. The items are now arranged from the smallest
        to the largest element. This is called <strong>sorting</strong>!
        Specifically, this is <strong>selection sort</strong>. Aptly called so,
        since at each step,{' '}
        <strong>
          the smallest item is selected and placed in its correct position
        </strong>{' '}
        in terms of the sorted order.
        <br />
        <br />
        This is the reason why the search area gets reduced every time.
        Initially, the search area was composed of the 5 elements in the array.
        Once the smallest is swapped with the first element, the search for the
        next smallest element is reduced to the last 4 elements (index 1 to 4).
        We no longer include the first element, since we know it is already the
        smallest item and it is now stored in the correct position in terms of
        the sorted order. This same process occurs on the next iterations until
        the array is finally sorted from smallest to largest.
        <br />
        <br />
        But obviously, our solution is not that elegant at all. What we can
        deduce from our solution is that the searching for the smallest item,
        the swapping and the display are repeated many times over. We can then
        extend this to n elements in general and not just 5.
        <br />
        <br />
        You might have noticed that <code>indexOfMin</code> started with 0 and
        in the last round of the searching and swapping, it is 3. We didn’t
        proceed with the last element since the solution will not have anything
        to compare it with (it is the last element, after all).
        <br />
        <br />
        We can simulate this by having an iterator that goes from 0 to 3. And at
        each iteration, <code>indexOfMin</code> is set to the iterator. For each
        iteration, a search for the minimum is executed. This search always
        <strong>begins from the next element</strong> from where the iterator
        is, all the way to the last element.
        <br />
        <br />
        Alright! Deep breath! Let’s do this!
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint arr[] = {23, 12, 9, 68, -2};\n\tint indexOfMin;\n\tint temp;\n\n\t// the integer i here is the iterator mentioned\n\t// above which starts from 0 and goes until 3\n\tfor(int i = 0; i < 4; i++) {\n\n\t\t// assume that the smallest item is found in index i\n\t\tindexOfMin = i;\n\n\t\t// search for the smallest\n\t\t// In here, the integer j is initialize to the\n\t\t// iterator plus 1 (i + 1)\n\t\tfor(int j = i+1; j < 5; j++) {\n\t\t\tif(arr[j] < arr[indexOfMin]) {\n\t\t\t\tindexOfMin = j;\n\t\t\t}\n\t\t}\n\n\t\t// swap the smallest with the current\n\t\t// iterator (integer i)\n\t\ttemp = arr[i];\n\t\tarr[i] = arr[indexOfMin];\n\t\tarr[indexOfMin] = temp;\n\n\t\t// now, print the current elements of the array\n\t\tfor(int i = 0; i < 5; i++) {\n\t\t\tprintf("%d ", arr[i]);\n\t\t}\n\t\tprintf("\\n");\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Awesome! We’ve significantly reduced the lines of code above just
        because we used a loop!
        <br />
        <br />
        Alright, moving even further, we mentioned that we can extend this to{' '}
        <code>n</code> elements so let’s do just that! This time, the{' '}
        <code>n</code> elements will come from the user.
      </Text>
      <Compiler
        initialCustomInput="1 2 5 3 2 4 10 9 4 6"
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\t// let's set n to 10\n\tint n = 10;\n\n\tint arr[n];\n\tint indexOfMin;\n\tint temp;\n\n\t// scan for n elements from the user\n\tfor(int i = 0; i < n; i++) {\n\t\tscanf("%d", &arr[i]);\n\t}\n\n\tfor(int i = 0; i < n-1; i++) {\n\t\tindexOfMin = i;\n\n\t\tfor(int j = i+1; j < n; j++) {\n\t\t\tif(arr[j] < arr[indexOfMin]) {\n\t\t\t\tindexOfMin = j;\n\t\t\t}\n\t\t}\n\n\t\ttemp = arr[i];\n\t\tarr[i] = arr[indexOfMin];\n\t\tarr[indexOfMin] = temp;\n\n\t\tfor(int i = 0; i < n; i++) {\n\t\t\tprintf("%d ", arr[i]);\n\t\t}\n\t\tprintf("\\n");\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        This last code is the more efficient and generalized version of the one
        we tried doing during the first parts of the lesson. See how different
        the pieces of code are and how efficient this one is compared to the
        earlier ones.
        <br />
        <br />
        That was quite a long and arduous task but hopefully you understood it!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic2;
