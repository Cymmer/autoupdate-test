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
    title="Intro To Pointers"
    titleJsx={
      <>
        <Text>
          Now what exactly are pointers?
          <br />
          <br />
          For starters, let's investigate the function{' '}
          <code>void swap(int, int)</code> below and and run it:
        </Text>
        <Compiler
          initialSourceCodes={[
            {
              code: `#include<stdio.h>\n\nvoid swap(int, int);\n\nint main() {\n\tint x = 7, y = 11;\n\tprintf("Inside main:\\n x is %d and y is %d BEFORE calling swap.\\n", x, y);\n\n\tswap(x,y);\n\n\tprintf("Inside main:\\n x is %d and y is %d AFTER calling swap.\\n", x, y);\n\n\treturn 0;\n}\n\nvoid swap(int x, int y) {\n\tint temp = x;\n\n\tprintf("Inside swap:\\n x is %d and y is %d BEFORE swapping.\\n", x, y);\n\n\tx = y;\n\ty = temp;\n\n\tprintf("Inside swap:\\n x is %d and y is %d AFTER swapping.\\n", x, y);\n}`,
              file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
              file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
            },
          ]}
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
        />
        <br />
        <Text>
          Run the code and observe the output. From what we've learned before,
          we know that the <code>x</code> and <code>y</code> in the{' '}
          <code>main()</code> are not the same <code>x</code> and <code>y</code>{' '}
          in the <code>swap()</code> function. Therefore, what was swapped were
          the <code>x</code> and <code>y</code> in <code>swap()</code> but not
          the x<code>x</code> and <code>y</code> of <code>main()</code>.
        </Text>
      </>
    }
  >
    <Section>
      <Text>
        Now, let's observe the code below which attempts to swap the first
        element of an array of length 5 to its last element:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid swapFirstAndLast(int[5]);\n\nint main() {\n\tint arr[5] = {2, 3, 5, 7, 11};\n\n\tprintf("Inside main:\\n arr[0] is %d and arr[4] is %d before calling swapFirstAndLast.\\n", arr[0], arr[4]);\n\n\tswapFirstAndLast(arr);\n\t\n\tprintf("Inside main:\\n arr[0] is %d and arr[4] is %d after calling swapFirstAndLast.\\n", arr[0], arr[4]);\n\n\treturn 0;\n}\n\nvoid swapFirstAndLast(int A[5]){\n\tint temp = A[0];\n\tA[0] = A[4];\n\tA[4] = temp;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Before diving into what happened, let's take a quick detour for a bit.
        Yes, that is one way to pass an array to a function: by declaring the
        argument as an array. We also have the option to not include the size as
        was done above and instead, do it like this:
      </Text>
      <Code language={programmingLanguages.C}>
        {`void swapFirstAndLast(int A[]){\n\tint temp = A[0];\n\tA[0] = A[4];\n\tA[4] = temp;\n}`}
      </Code>
      <Text>
        We can have 2 observations here. In the first version where a size was
        included in the declaration of the argument, the function will always
        expect an array with size 5, and this is not flexible.
        <br />
        <br />
        What if we have an array that is smaller or bigger in size? Then we
        wouldn't be able to use this function because we are assuming here that
        the size of the array is just 5.
        <br />
        <br />
        To understand this better, let's recall the searching for the minimum in
        an array and let's implement that as a function. It should look like
        this:
      </Text>
      <Code language={programmingLanguages.C}>
        {`int minimum(int A[5]) {\n\t// assume that the first element is the minimum\n\tint min = A[0];\n\n\tfor(int i = 0; i < 5; i++) {\n\n\t\t// if the current element is less than the minimum,\n\t\t// we set that as the new minimum\n\t\tif(A[i] < min) {\n\t\t\tmin = A[i];\n\t\t}\n\t}\n\n\treturn min;\n}`}
      </Code>
      <Text>
        What if we have an array that has more than 5 elements and we want to
        search for the minimum element in the array? We cannot use the current
        implementation of the minimum.
        <br />
        <br />
        This is one problem we have when dealing with an array of integers. If
        we were dealing with a string, then it would have been easy since there
        is a <code>strlen()</code> function that gets the actual length of a
        string.
        <br />
        <br />
        So, what do we do to let the function know the size of the array? There
        is no way around it but to explicitly pass to the function the size of
        the array as an additional argument or parameter as shown below:
      </Text>
      <Code language={programmingLanguages.C}>
        {`int minimum(int A[], int size) {\n\t// assume that the first element is the minimum\n\tint min = A[0];\n\n\tfor(int i = 0; i < size; i++) {\n\n\t\t// if the current element is less than the minimum,\n\t\t// we set that as the new minimum\n\t\tif(A[i] < min) {\n\t\t\tmin = A[i];\n\t\t}\n\t}\n\n\treturn min;\n}`}
      </Code>
      <Text>
        And this one below is the updated version of the{' '}
        <code>swapFirstAndLast()</code>:
      </Text>
      <Code language={programmingLanguages.C}>
        {`void swapFirstAndLast(int A[], int size) {\n\tint tmp = A[0];\n\tA[0] = A[size-1];\n\tA[size-1] = tmp;\n}`}
      </Code>
      <Text>
        In the code above, the int <code>size</code> is used to determine the
        size of the array in the first parameter.
        <br />
        <br />
        To drive the point of passing a string (showing that we don't need to
        pass a <code>size</code> parameter), let's recall the palindrome problem
        and check the function below:
      </Text>
      <Code language={programmingLanguages.C}>
        {`int isPalindrome(char st[]) {\n\t// we just used \`strlen\` function here\n\t// to get the length/size of the string\n\tint length = strlen(st);\n\n\t// a flag variable (1 - palindrome, 0 - not a palindrome)\n\tint flag = 1;\n\n\tfor(\n\t\tint i = 0, j = length - 1;\n\t\ti < j;\n\t\ti++, j--\n\t) {\n\t\tif(st[i] != st[j]) {\n\t\t\tflag = 0;\n\t\t\tbreak;\n\t\t}\n\t}\n\n\treturn flag;\n}`}
      </Code>
      <Text>
        There is no need to pass an additional argument to represent the size of
        the array of characters, a.k.a. string. Now, going back to the{' '}
        <code>swapFirstAndLast()</code>, the second observation is that after
        the termination of the function and control is returned back to the
        main, the first and last elements of <code>arr</code> have been
        successfully swapped! What has happened? To answer this, we are going to
        go back to the <code>%p</code> format specifier. Recall that we use this
        format specifier to print memory addresses. Let's look at the code below
        and see <code>%p</code> in action!
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid swapFirstAndLast(int[5]);\n\nint main() {\n\tint arr[5] = {2, 3, 5, 7, 11};\n\tprintf("The memory address of arr inside main: %p\\n", arr);\n\n\tswapFirstAndLast(arr);\n\n\treturn 0;\n}\n\nvoid swapFirstAndLast(int A[5]) {\n\tint tmp = A[0];\n\tA[0] = A[4];\n\tA[4] = tmp;\n\tprintf("The memory address of A inside swapFirstAndLast: %p\\n", A);\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        The output will not be exactly the same everytime your run the code but
        it would look something like this:
      </Text>
      <Code>
        {`The memory address of arr inside main: 0x7ffee26fb830\nThe memory address of A inside swapFirstAndLast: 0x7ffee26fb830`}
      </Code>
      <Text>
        Two things must be noticed here. The first one is the use of{' '}
        <code>%p</code> with the array name without having to use the address
        (&) operator. This means that both <code>arr</code> and <code>A</code>{' '}
        hold memory addresses as values. In fact, they hold the memory address
        of the first element of the array. We will come back to this at the
        later part of the section.
        <br />
        <br />
        What the code above has shown us is that when we want the function to be
        able to modify the original value of the variable argument,{' '}
        <strong>we pass its address, not its value</strong>. By doing so, we are
        able to refer to the original variable passed to the function and{' '}
        <strong>not simply a local copy of it</strong>.
        <br />
        <br />
        Now, how do we pass memory addresses to functions?
      </Text>
    </Section>

    <Section title="Pointers!">
      <Text>
        How do we declare pointers? Similar to regular variables, it has to have
        a type and name. What differentiates it from a regular variable is that
        its name has to be prepended with the * character as shown in the
        examples below:
      </Text>
      <Code language={programmingLanguages.C}>
        {`int *ptr1;\nint *ptr2, *ptr3;\nint *ptr4, x, y;`}
      </Code>
      <Text>
        <code>ptr1</code> is a pointer. And not just any pointer but a pointer
        to an integer. This means it can only hold memory addresses as values
        but only memory addresses of variables of type int.
        <br />
        <br />
        When you want to declare multiple pointers of the same type, separate
        them by commas, making sure that the variable name is prepended with *
        as illustrated through <code>ptr3</code>. We can also pass pointers
        along with regular variables as shown in the third example where{' '}
        <code>ptr4</code> is a pointer to an int but <code>x</code> and{' '}
        <code>y</code> are regular integer variables.
        <br />
        <br />
        How do we assign values to pointers? We use the address operator{' '}
        <code>&</code> like this:
      </Text>
      <Code language={programmingLanguages.C}>
        {`int x = 13, y = 19;\nint *x_ptr, *y_ptr;\n\nx_ptr = &x;\ny_ptr = &y;`}
      </Code>
      <Text>
        Since <code>x</code> and <code>y</code> are integers, and{' '}
        <code>x_ptr</code> and <code>y_ptr</code> are pointers to integers, then
        we can assign the memory addresses of <code>x</code> and <code>y</code>{' '}
        to <code>x_ptr</code> and <code>y_ptr</code> respectively. We say that{' '}
        <code>x_ptr</code> holds the memory address of <code>x</code> and{' '}
        <code>y_ptr</code> holds the memory address of <code>y</code>. We can
        also say that <code>x_ptr</code> points to <code>x</code>, and{' '}
        <code>y_ptr</code> points to <code>y</code>.
        <br />
        <br />
        Another way of doing this is by assigning the pointers during the
        declaration, like this:
      </Text>
      <Code language={programmingLanguages.C}>
        {`int x = 13, y = 19;\nint *x_ptr = &x, *y_ptr = &y;\n`}
      </Code>
      <Text>
        Let us verify if we were able to successfully assign the memory
        addresses of <code>x</code> and <code>y</code> to <code>x_ptr</code> and{' '}
        <code>y_ptr</code> respectively. To do this, let's run the code below.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint x = 13, y = 19;\n\tint *x_ptr = &x, *y_ptr = &y;\n\n\tprintf("address of x: %p\\t address of y: %p\\n", &x, &y);\n\tprintf("value of x_ptr: %p\\t value of y_ptr: %p\\n", x_ptr, y_ptr);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        The output would look something like this but again, it won't be exactly
        the same because you might get a different set of memory addresses.
        However, you can see that the address of <code>x</code> matches the
        value of <code>x_ptr</code> and the address of <code>y</code> matches
        the value of <code>y_ptr</code>.
      </Text>
      <Code>
        {`address of x: 0x7ffcf6979a3c\t address of y: 0x7ffcf6979a38\nvalue of x_ptr: 0x7ffcf6979a3c\t value of y_ptr: 0x7ffcf6979a38`}
      </Code>
      <Text>
        We may also assign a pointer to another pointer as long as they are of
        the same type as shown below:
      </Text>
      <Code language={programmingLanguages.C}>
        {`#include<stdio.h>\n\nint main() {\n\tint x = 13, y = 19;\n\tint *x_ptr = &x, *y_ptr = &y;\n\n\tprintf("value of x_ptr: %p\\t value of y_ptr: %p\\n", x_ptr, y_ptr);\n\n\t// take a look at this line of code\n\tx_ptr = y_ptr;\n\n\tprintf("value of x_ptr: %p\\t value of y_ptr: %p\\n",x_ptr,y_ptr);\n\n\treturn 0;\n}`}
      </Code>
      <Text>
        Notice that both <code>x_ptr</code> and <code>y_ptr</code> hold the same
        memory address. And that is the memory address of <code>y</code>. Or we
        can say they now both point to <code>y</code>.
      </Text>
    </Section>

    <Section title="Playing with Pointers">
      <Text>
        Now, what can we do to pointers? To be able to answer this, we introduce
        a unary operator called the{' '}
        <strong>dereferencing or indirection operator</strong>. This operator is
        the <code>*</code>. It is used differently as with declaring pointers.
        Let's look at this bit of code:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint x = 13, y = 19;\n\tint *x_ptr = &x, *y_ptr = &y;\n\n\tprintf("value of x_ptr: %p\\t value of y_ptr: %p\\n", x_ptr, y_ptr);\n\tprintf("value in the address held by x_ptr: %d\\nvalue in the address held by y_ptr: %d\\n", *x_ptr, *y_ptr);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        We now see a 3rd use of the <code>*</code>. First, it was only the
        binary operator times (or multiplication). Then we used it to declare
        pointers. And now, we are using it to access the value stored in the
        address held by a pointer. Compiling and running it should display
        something like the following:
      </Text>
      <Code>
        {`value of x_ptr: 0x7ffdf7073abc\t value of y_ptr: 0x7ffdf7073ab8\nvalue in the address held by x_ptr: 13\nvalue in the address held by y_ptr: 19`}
      </Code>
      <Text>
        We can use the indirection to change or modify the value as well, like
        this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint x = 13;\n\tint *x_ptr = &x;\n\n\tprintf("original value of x is %d\\n", x);\n\n\t*x_ptr = -954;\n\n\tprintf("new value of x is %d", x);\n\t\t\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        <code>*x_ptr = -103</code> means that we want to update the value stored
        in the memory address held by <code>x_ptr</code> to -<code>-103</code> .
        We are NOT changing the value of the pointer <code>x_ptr</code> but the
        value located in the memory address held by it.
        <br />
        <br />
        In a similar manner, if we update the value of <code>x</code>, the
        corresponding change should be observable with <code>x_ptr</code>. Let's
        try just that with this code:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint x = 13;\n\tint *x_ptr = &x;\n\n\tprintf("original value in the address of x_ptr is %d\\n", *x_ptr);\n\n\tx = 429;\n\n\tprintf("new value in the address of x_ptr is %d", *x_ptr);\n\t\t\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        We have been mentioning that pointers can only hold memory addresses.
        Let's compile the code below and check the warning displayed.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\n\tint x = 13, y = 19;\n\tint *x_ptr = &x, *y_ptr = &y;\n\n\t// ????\n\tx_ptr = 10;\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        What <code>x_ptr = 10</code> does is assign the memory address{' '}
        <code>10</code> to <code>x_ptr</code>. But what is memory address{' '}
        <code>10</code>? What is stored in that address? The simple answer is we
        do not know. We do not even know which program that memory address is
        assigned to. Recall that each program running in the system is given
        memory allocation that only it has access to. Memory addresses not
        within the scope of the program should not be accessed by the program.
        <br />
        <br />
        The warning you will get should be similar to{' '}
        <code>
          "incompatible integer to pointer conversion assigning to int * from
          int"
        </code>
        .
        <br />
        <br />
        If we try and update the value in address <code>10</code>, we would get
        an error.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include <stdio.h>\n\nint main(){\n\tint x = 13, y = 19;\n\tint *x_ptr = &x, *y_ptr = &y;\n\n\tx_ptr = 10;\n\t\n\t// by doing this below, we basically\n\t// set the value at address 10 to 249\n\t*x_ptr = 249;\n\n\tprintf("value stored in the address held by x_ptr: %d", *x_ptr);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        A segmentation fault run-time error must be had. This is what good
        operating systems do, making sure that programs attempting to modify
        values of memory addresses not allocated to them are aborted.
        <br />
        <br />
        When we're working with pointers it is always best to make sure that the
        pointers are initialized upon declaration. If and when no memory address
        may be assigned to it yet, there is a{' '}
        <strong>symbolic memory address</strong> that may be assigned to the
        pointer. This is address <code>0</code>. The caveat though is nothing is
        stored in address <code>0</code> and nothing can be updated in address{' '}
        <code>0</code>. Here's an application of the address <code>0</code>:
      </Text>
      <Code language={programmingLanguages.C}>
        {`#include<stdio.h>\n\nint main() {\n\tint *x_ptr = 0, *y_ptr = 0;\n\n\tprintf("value of x_ptr: %p\\t value of y_ptr: %p\\n", x_ptr, y_ptr);\n\n\treturn 0;\n}`}
      </Code>
      <Text>
        An alternative is by using <code>NULL</code> instead of <code>0</code>.
        When we say that <code>NULL</code> is a symbolic memory address{' '}
        <code>0</code>, this means that we cannot assign values to the pointer
        like the one below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nint main() {\n\tint *x_ptr = NULL, *y_ptr = NULL;\n\n\tprintf("value of x_ptr: %p\\t value of y_ptr: %p\\n", x_ptr, y_ptr);\n\n\t*x_ptr = 107;\n\n\tprintf("value in the address held by x_ptr: %d\\n", *x_ptr);\n\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Compiling and running the code above will result in a Segmentation fault
        run-time error. Again, there is <strong>nothing</strong> in address{' '}
        <code>0</code>. It is not an actual usable memory address, so be careful
        when using it!
        <br />
        <br />
        After learning all about pointers, it's now time for us to solve swap
        problem:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid swap(int*, int*);\n\nint main() {\n\tint x = 11, y = 23;\n\n\tprintf("x: %d\\ty: %d\\n", x, y);\n\t\n\t// pass the addresses of x and y here,\n\t// NOT THEIR VALUES\n\tswap(&x, &y);\n\t\n\tprintf("x: %d\\ty: %d\\n", x, y);\n\n\treturn 0;\n}\n\nvoid swap(int *x, int *y){\n\tint tmp = *x;\n\t*x = *y;\n\t*y = tmp;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        To have the function accept a pointer, we declare the arguments or the
        parameters as a pointer as shown in <code>swap()</code>. Since both{' '}
        <code>x</code> and <code>y</code> are pointers, therefore, setting the
        value to <code>tmp</code> to the value stored in the memory address held
        by <code>x</code> needs the indirection operator.
        <br />
        <br />
        To verify that we were able to pass the correct addresses, let's print
        them using this new piece of code:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid swap(int*, int*);\n\nint main() {\n\tint x = 11, y = 23;\n\n\tprintf("Inside main:\\n addresses of x and y: %p %p\\n", &x, &y);\n\tswap(&x, &y);\n\n\treturn 0;\n}\n\nvoid swap(int *x, int *y){\n\tprintf("Inside swap:\\n addresses of x and y: %p %p\\n", x, y);\n\n\tint tmp = *x;\n\t*x = *y;\n\t*y = tmp;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        We may use temporary pointers to the addresses of x and y rather than
        use their addresses directly and pass them to the function. Applying
        this concept, we can rewrite the code like this:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\nvoid swap(int*, int*);\n\nint main() {\n\tint x = 11, y = 23;\n\tint *x_ptr = &x, *y_ptr = &y;\n\n\tprintf("x: %d\\ty: %d\\n", x, y);\n\t\n\t// pass the pointers here instead\n\tswap(x_ptr, y_ptr);\n\t\n\tprintf("x: %d\\ty: %d\\n", x, y);\n\n\treturn 0;\n}\n\nvoid swap(int *x, int *y){\n\tint tmp = *x;\n\t*x = *y;\n\t*y = tmp;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Running the code above should have the same output as before.
        <br />
        <br />
        It's good practice to use pointers in passing parameters to functions if
        the intention is for the function{' '}
        <strong>to modify the values of the parameters</strong>. We can simply
        pass them by value if that is not the case.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic1;
