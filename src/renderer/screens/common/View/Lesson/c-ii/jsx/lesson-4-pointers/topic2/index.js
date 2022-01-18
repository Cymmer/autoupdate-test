import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { FunFactCard } from 'components';
import IntroImage from './intro-image.png';

import Infographic from './infographic.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';
import Image from '../../../../Image';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="More On Pointers"
    titleJsx={
      <>
        <Text>
          Let’s see the relationship between pointers and arrays. We already
          know that the names of the arrays actually hold memory addresses as
          shown in an earlier section. That means that we can consider the name
          of the array as a pointer like this:
        </Text>
        <Compiler
          initialSourceCodes={[
            {
              code: `#include<stdio.h>\n\nint main() {\n\tint arr[] = {10, 13, 3, 71, 29};\n\n\tprintf("arr holds the address: %p\\n", arr);\n\tprintf("the value in the address held by arr: %d\\n", *arr);\n\n\treturn 0;\n}`,
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
        Observe the output after running the code. Indeed <code>arr</code> holds
        a memory. Dereferencing it shows that the value stored in the address it
        holds is 10, <strong>the first element of the array</strong>, proving
        that the name of the array holds the memory address of its first
        element.
        <br />
        <br />
        To illustrate this, let’s print the address of the first element of{' '}
        <code>arr</code> too.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint arr[] = {10, 13, 3, 71, 29}; \n\n\tprintf("arr holds the address: %p\\n", arr);\n\tprintf("address of arr[0]: %p\\n", &arr[0]);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Run the code and notice the same address held by <code>arr</code> and
        the actual address of <code>arr[0]</code>.
        <br />
        <br />
        Since <code>arr</code> is a pointer, what happens if it is assigned a
        new memory address? Let’s find out!
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint arr[] = {10, 13, 3, 71, 29};\n\tint dummy = 400; \n\n\t// what's going to happen here?\n\tarr = &dummy;\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        An error will be generated when the source code above is compiled. The
        error is exactly the assignment of a new memory address to{' '}
        <code>arr</code>. So, what gives?
        <br />
        <br />
        <code>arr</code> is implicitly a <code>const</code> pointer. Like any{' '}
        <code>const</code> identifier, its value cannot be modified or updated.
        The compiler does not allow this simply because it is associated with a
        collection of integers. If this were allowed by the compiler, going to
        the trouble of making an array and simply having it assigned at a later
        part defeats the very purpose of having declared it in the first place.
        <br />
        <br />
        To reiterate, arrays are constant pointers whose values can’t be
        changed.
        <br />
        <br />
        Now, moving on, notice that we were able to use indirection or
        dereferencing with the name of the array but only with the first element
        so far. Can we extend this with the rest of its elements? The answer to
        this question has to do with <strong>pointer arithmetic</strong>.
        Addition and subtraction is allowed with pointers, but they behave
        differently. Let’s see how they work with the code below!
      </Text>
      <Code language={programmingLanguages.C}>
        {`#include<stdio.h>\n\nint main() {\n\tint x = 10, y = 20, z = 30;\n\n\tprintf("addresses of x, y, and z: %p %p %p\\n", &x, &y, &z);\n\n\treturn 0;\n}`}
      </Code>
      <Text>
        Observe the differences in their addresses from the output.
        <br />
        <br />
        The addresses are written in <strong>hexadecimal</strong>. Notice that
        they differ by 4 units - 4 units because ints in C are by default{' '}
        <strong>4 bytes long</strong>. These 4 bytes are needed to be able to
        represent an int in C.
      </Text>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={<Image alt="Hexadecimal" src={Infographic} />}
        mainTextJsx={
          <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
            Hexadecimal values range from 0 - F, starting from 0 - 9 and A -F
            afterwards. See the chart below for their comparison:
          </Text>
        }
      />
    </Section>

    <Section>
      <Text>Let’s find out how pointer arithmetic works with this code:</Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint x = 10, y = 20;\n\tint *xptr = &x, *yptr = &y;\n\n\tprintf("xptr, yptr: %p %p\\n", xptr, yptr);\n\n\txptr = xptr - 2;\n\typtr = yptr + 1;\n\n\tprintf("xptr, yptr: %p %p\\n", xptr, yptr);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Here is the output when this code was first ran (again, the memory
        addresses may differ in your machines):
      </Text>
      <Code language={programmingLanguages.C}>
        {`xptr, yptr: 0x7ffd8bed2cdc 0x7ffd8bed2cd8\nxptr, yptr: 0x7ffd8bed2cd4 0x7ffd8bed2cdc`}
      </Code>
      <Text>
        We will focus on the last 4 hexadecimal digits of the addresses. When{' '}
        <code>2</code> was subtracted from <code>xptr</code>, <code>2x4</code>,
        which is <code>8</code>, was subtracted from <code>xptr</code> (4 is
        essentially the size of the type). When <code>yptr</code> was
        incremented by <code>1</code>, the value added to it was <code>4</code>{' '}
        (which again, is the size of the type).
        <br />
        <br />
        This is not that meaningful with individual pointers. In fact, this is
        dangerous. Because of the arithmetic on these individual pointers,
        memory addresses not allocated to the program may be inadvertently
        accessed and segmentation faults may occur.
        <br />
        <br />
        However, its use is natural with arrays, so let’s go back to arrays!
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint arr[] = {10, 13, 3, 71, 29};\n\n\tfor(int i = 0; i < 5; i++) {\n\t\tprintf("address of arr[%d]: %p\\n", i, &arr[i]);\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Printing the addresses of the each of the elements of the array arr
        gives us the following results.
      </Text>
      <Code>
        {`address of arr[0]: 0x7ffee86cc840\naddress of arr[1]: 0x7ffee86cc844\naddress of arr[2]: 0x7ffee86cc848\naddress of arr[3]: 0x7ffee86cc84c\naddress of arr[4]: 0x7ffee86cc850`}
      </Code>
      <Text>
        We still see differences of 4 units. This is the case since we are still
        working with integers.
        <br />
        <br />
        Since the name of the array is a pointer, then we can use pointer
        arithmetic to go through the elements of the array like this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint arr[] = {10, 13, 3, 71, 29};\n\n\tfor(int i = 0; i < 5; i++) {\n\t\tprintf("address of arr[%d]: %p\\n", i, arr+i);\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        The source above will give us the same result as the earlier sample.
        <br />
        <br />
        We may use indirection or dereferencing to access the values or data
        stored in the memory addresses, like this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint arr[] = {10, 13, 3, 71, 29};\n\n\tfor(int i = 0; i < 5; i++) {\n\t\tprintf("address of arr[%d]: %p\\n", i, arr+i);\n\t\tprintf("arr[%d]: %d\\n", i, *arr+i);\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>Let’s observe the output below:</Text>
      <Code>
        {`address of arr[0]: 0x7ffeee7fe840\narr[0]: 10\naddress of arr[1]: 0x7ffeee7fe844\narr[1]: 11\naddress of arr[2]: 0x7ffeee7fe848\narr[2]: 12\naddress of arr[3]: 0x7ffeee7fe84c\narr[3]: 13\naddress of arr[4]: 0x7ffeee7fe850\narr[4]: 14`}
      </Code>
      <Text>
        Only the first element (<code>arr[0]</code>) was retrieved properly. The
        rest seem to have added the values of <code>i</code> added to{' '}
        <code>arr[0]</code>. This tells us that indirection or dereferencing has
        higher precedence over the arithmetic operators. To achieve our goal, we
        have to group the arithmetic and dereference the resulting sum like
        this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint arr[] = {10, 13, 3, 71, 29};\n\n\tfor(int i = 0; i < 5; i++) {\n\t\tprintf("address of arr[%d]: %p\\n", i, arr+i);\n\t\t\n\t\t// group the arr+i with parentheses before\n\t\t// using the indirection operator\n\t\tprintf("arr[%d]: %d\\n", i, *(arr+i));\n\t}\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Looking at the results when you run the code, we now have the desired
        result.
      </Text>
    </Section>

    <Section title="Pointers in Functions">
      <Text>
        Alright, let’s try and apply this process to functions. Recall the
        maximum problem where we find the maximum element in an array:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint getMaximum(int*, int);\n\nint main() {\n\tint arr[] = {10, 13, 3, 71, 29};\n\tint maximum = getMaximum(arr, 5);\n\n\tprintf("The maximum element in arr: %d\\n", maximum);\n\n\treturn 0;\n}\n\nint getMaximum(int* A, int size) {\n\t// assume that the first element of the array\n\t// as the maximum element\n\tint max = *A;\n\n\tfor(int i = 1; i < size; i++) {\n\n\t\t// check if the current element of the array\n\t\t// is greater than the existing max. If it is\n\t\t// set this as the new max\n\t\tif(*(A+i) > max) {\n\t\t\tmax = *(A+i);\n\t\t}\n\t}\n\n\treturn max;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        The source above should give us <code>71</code> as the maximum element.
        <br />
        <br />
        The same process can be applied with strings as well! It would look like
        this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint countDigits(char*);\n\nint main() {\n\tchar str[] = "0x44bc";\n\tint count = countDigits(str);\n\n\tprintf("digit count in %s: %i\\n", str, count);\n\n\treturn 0;\n}\n\nint countDigits(char *st) {\n\tint count = 0;\n\n\twhile(*st != '\\0') {\n\t\tif(*st >= '0' && *st <= '9') {\n\t\t\tcount++;\n\t\t}\n\n\t\tst++;\n\t}\n\n\treturn count;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        What is interesting above is that we used pointer arithmetic with{' '}
        <code>st</code> (see the part where we do <code>st++</code>). Why was
        this allowed when what was passed to <code>countDigits</code> is an
        array of characters, all the while knowing that arrays of characters are
        const pointers?
        <br />
        <br />
        Let’s verify this first. Let’s check the code below, we simply added{' '}
        <code>str++</code> in the main function. Try running it.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint countDigits(char*);\n\nint main() {\n\tchar str[] = "0x44bc";\n\tint count = countDigits(str);\n\n\t// only changed made\n\tstr++;\n\n\tprintf("digit count in %s: %i\\n", str, count);\n\n\treturn 0;\n}\n\nint countDigits(char *st) {\n\tint count = 0;\n\n\twhile(*st != '\\0') {\n\t\tif(*st >= '0' && *st <= '9') {\n\t\t\tcount++;\n\t\t}\n\n\t\tst++;\n\t}\n\n\treturn count;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        We will get an error that <code>str++</code> is not allowed confirming
        that, indeed, <code>str</code> - an array of characters - is a{' '}
        <code>const</code> pointer.
        <br />
        <br />
        So what happened in <code>countDigits</code>? What was used in the
        function was not really <code>str</code>, but a <strong>copy</strong> of{' '}
        <code>str</code>! Let’s confirm this using the code:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint countDigits(char*);\n\nint main() {\n\tchar str[] = "0x44bc";\n\tint count = countDigits(str);\n\n\tprintf("address held by str: %p\\n", &str);\n\n\treturn 0;\n}\n\nint countDigits(char *st) {\n\tprintf("address held by st: %p\\n", &st);\n\n\tint count = 0;\n\n\twhile(*st != '\\0') {\n\t\tif(*st >= '0' && *st <= '9') {\n\t\t\tcount++;\n\t\t}\n\n\t\tst++;\n\t}\n\n\treturn count;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Notice that output shows two very different memory addresses, and yes,
        that is quite a good observation. Since pointers have to be declared,
        then memory is allocated to them and they are stored in some address as
        well. Therefore we can get their addresses via the address operator.
        <br />
        <br />
        As can be seen, the pointer was passed to the function by value. Let’s
        verify this as well with swap.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid swap(int*, int*);\n\nint main() {\n\tint a = 17, b = 31;\n\tint *aptr = &a, *bptr = &b;\n\n\tprintf("addresses of aptr and bptr: %p %p\\n", &aptr, &bptr);\n\tswap(aptr, bptr);\n\n\treturn 0;\n}\n\nvoid swap(int *x, int *y) {\n\tprintf("addresses of x and y: %p %p\\n", &x, &y);\n\n\tint tmp = *x;\n\t*x = *y;\n\t*y = tmp;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>Below is a sample of the actual output displayed:</Text>
      <Code>
        {`addresses of aptr and bptr: 0x7ffee272f848 0x7ffee272f840\naddresses of x and y: 0x7ffee272f818 0x7ffee272f810`}
      </Code>
      <Text>
        Observe that their addresses are different. We’re also able to notice
        that a pointer to an integer is 8 bytes long. This tells us that{' '}
        <strong>
          we can have pointers that hold memory addresses of pointers themselves
        </strong>
        :
      </Text>
      <Code language={programmingLanguages.C}>
        {`#include<stdio.h>\n\nint main() {\n\tint a = 17, b = 31;\n\tint *aptr = &a, *bptr = &b;\n\n\t// now, watch this!\n\tint **aptr_ptr = &aptr, **bptr_ptr = &bptr;\n\n\treturn 0;\n}`}
      </Code>
      <Text>
        To declare a pointer to a pointer, we use two <code>*</code> And we only
        assign addresses of pointers to them. Dereferencing them will give us
        the memory addresses held by the pointers (<code>aptr</code> and{' '}
        <code>bptr</code>) pointed to by pointers to pointers (
        <code>aptr_ptr</code> and <code>bptr_ptr</code>).
        <br />
        <br />
        Further dereferencing them will finally give us <code>a</code> and{' '}
        <code>b</code>. Let’s try to do that:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint a = 17, b = 31;\n\tint *aptr = &a, *bptr = &b;\n\tint **aptr_ptr = &aptr, **bptr_ptr = &bptr;\n\n\t// do double ** to print their values\n\tprintf("what are these values: %d %d\\n", **aptr_ptr, **bptr_ptr);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Note that this can be further extended, if need be.
        <br />
        <br />
        As a conclusion, we say that there truly isn’t passing by reference in
        C. Everything is passed by value. But by the use of pointers, passing by
        reference is somehow simulated to some extent.
        <br />
        <br />
        That ends our lesson on pointers!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic2;
