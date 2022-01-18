import React from 'react';

import { Text, Code } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic3 = () => (
  <TopicContainer
    image={IntroImage}
    number={3}
    title="Functions and Header Files"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        A lot of the problems we have presented here already have built-in
        versions that come with the C compiler.
        <br />
        <br />
        We have seen some of these header files, namely the{' '}
        <code>{'<stdio.h>'}</code>, <code>{'<stdlib.h>'}</code>, and even{' '}
        <code>{'<string.h>'}</code> where the <code>strlen()</code> is found
        including <code>strcmp()</code> which does string comparison and{' '}
        <code>strcpy()</code> that does string copying, exactly the same string
        comparison and string copying we did in the review on strings. There’s{' '}
        <code>{'<ctype.h>'}</code> that contains available functions for
        characters like <code>isdigit()</code>, <code>toupper()</code> and{' '}
        <code>tolower()</code>, again exactly the same things we implemented in
        an earlier section. There is even a power function available from the{' '}
        <code>{'<math.h>'}</code> library called <code>pow()</code>.
        <br />
        <br />
        When creating programs in C, it is proper to separate the declaration of
        function prototypes from the main C program. And this is achieved by
        creating our own (programmer-defined) header files.
      </Text>
    }
  >
    <Section>
      <Text>
        Let’s re-use the problems on palindrome, fibonacci, swap, and the
        minimum and maximum on integer arrays.
        <br />
        <br />
        The following are the function definitions of the aforementioned
        problems:
      </Text>
    </Section>

    <Section title="Checking if a string is a palindrome">
      <Code language={programmingLanguages.C}>
        {`int isPalindrome(char st[]) {\n\tint length = strlen(st);\n\n\tint flag = 1;\n\n\tfor(\n\t\tint i = 0, j = length - 1;\n\t\ti < j;\n\t\ti++, j--\n\t) {\n\t\tif(st[i] != st[j]) {\n\t\t\tflag = 0;\n\t\t\tbreak;\n\t\t}\n\t}\n\n\treturn flag;\n}`}
      </Code>
    </Section>

    <Section title="Getting the nth term of the Fibonacci series">
      <Code language={programmingLanguages.C}>
        {`int fib(int n) {\n\tif(n == 1 || n == 2) {\n\t\treturn 1;\n\t} else {\n\t\treturn fib(n-1) + fib(n-2);\n\t}\n}`}
      </Code>
    </Section>

    <Section title="Swapping the contents of two integers">
      <Code language={programmingLanguages.C}>
        {`void swap(int *x, int *y){\n\tint tmp = *x;\n\t*x = *y;\n\t*y = tmp;\n}`}
      </Code>
    </Section>

    <Section title="Finding the minimum value in an array">
      <Code language={programmingLanguages.C}>
        {`int minimum(int A[], int size) {\n\tint min = A[0];\n\n\tfor(int i = 0; i < size; i++) {\n\t\tif(A[i] < min) {\n\t\t\tmin = A[i];\n\t\t}\n\t}\n\n\treturn min;\n}`}
      </Code>
    </Section>

    <Section title="Finding the maximum value in an array">
      <Code language={programmingLanguages.C}>
        {`int maximum(int A[], int size) {\n\tint max = A[0];\n\n\tfor(int i = 0; i < size; i++) {\n\t\tif(A[i] > max) {\n\t\t\tmax = A[i];\n\t\t}\n\t}\n\n\treturn max;\n}`}
      </Code>
    </Section>

    <Section>
      <Text>
        We need to save the above implementation in a header by creating a new
        file, say functions.h. In this case, we include{' '}
        <code>{'<string.h>'}</code> since we used it in the palindrome problem.
        Our functions.h file should look like the one below.
      </Text>
      <Code language={programmingLanguages.C}>
        {
          '// functions.h\nint isPalindrome(char st[]) {\n\tint length = strlen(st);\n\n\tint flag = 1;\n\n\tfor(\n\t\tint i = 0, j = length - 1;\n\t\ti < j;\n\t\ti++, j--\n\t) {\n\t\tif(st[i] != st[j]) {\n\t\t\tflag = 0;\n\t\t\tbreak;\n\t\t}\n\t}\n\n\treturn flag;\n}\n\nint fib(int n) {\n\tif(n == 1 || n == 2) {\n\t\treturn 1;\n\t} else {\n\t\treturn fib(n-1) + fib(n-2);\n\t}\n}\n\nvoid swap(int *x, int *y){\n\tint tmp = *x;\n\t*x = *y;\n\t*y = tmp;\n}\n\nint minimum(int A[], int size) {\n\tint min = A[0];\n\n\tfor(int i = 0; i < size; i++) {\n\t\tif(A[i] < min) {\n\t\t\tmin = A[i];\n\t\t}\n\t}\n\n\treturn min;\n}\n\nint maximum(int A[], int size) {\n\tint max = A[0];\n\n\tfor(int i = 0; i < size; i++) {\n\t\tif(A[i] > max) {\n\t\t\tmax = A[i];\n\t\t}\n\t}\n\n\treturn max;\n}'
        }
      </Code>
      <Text>
        To include it in the main function, instead of enclosing it with angle
        brackets, we enclose it with the double quotes as shown below.
      </Text>
      <Code language={programmingLanguages.C}>
        {
          '#include "functions.h"\n\nint main() {\n\tint a = 7, b = 23;\n\tint A[] = {4, 100, 2, -7, 19};\n\t\n\tprintf("%d\\n", isPalindrome("level"));\n\tprintf("%d\\n", isPalindrome("lever"));\n\t\n\tprintf("%d\\n", fib(0));\n\tprintf("%d\\n", fib(1));\n\tprintf("%d\\n", fib(4));\n\t\n\tswap(&a, &b);\n\tprintf("%d %d\\n", a, b);\n\t\n\tprintf("%d %d\\n", minimum(A, 5), maximum(A, 5));\n \n\treturn 0;\n}'
        }
      </Code>
      <Text>
        The main function and the <code>{'<functions.h>'}</code> header file
        should be in the same directory. When the header file is located
        elsewhere, include its file path in the double quotations.
        <br />
        <br />
        You may use relative path or absolute path.
        <br />
        <br />
        There you have it! Your very own header file! But in true C fashion,
        especially with large C programs, functions should not be defined in the
        header file. They should be implemented in separate C file. So this
        leaves the header files to <strong>
          contain only declarations
        </strong>{' '}
        (recall the function declarations) not just of functions but including
        macros as well.
        <br />
        <br />
        The <code>{'<functions.h>'}</code> should only contain the function
        prototypes/declarations as shown below.
      </Text>
      <Code language={programmingLanguages.C}>
        {
          'int isPalindrome(char*);\nint fib(unsigned int);\nvoid swap(int*, int*);\nint minimum(int*, int);\nint maximum(int*, int);'
        }
      </Code>
      <Text>
        The implementation of the function prototypes should be placed in a
        separate C file. This C file (let’s call this <code>functions.c</code>)
        should include the header file as shown below.
      </Text>
      <Code language={programmingLanguages.C}>
        {
          '// functions.c\n#include "functions.h"\n#include<string.h>\n\nint isPalindrome(char st[]) {\n\tint length = strlen(st);\n\n\tint flag = 1;\n\n\tfor(\n\t\tint i = 0, j = length - 1;\n\t\ti < j;\n\t\ti++, j--\n\t) {\n\t\tif(st[i] != st[j]) {\n\t\t\tflag = 0;\n\t\t\tbreak;\n\t\t}\n\t}\n\n\treturn flag;\n}\n\nint fib(int n) {\n\tif(n == 1 || n == 2) {\n\t\treturn 1;\n\t} else {\n\t\treturn fib(n-1) + fib(n-2);\n\t}\n}\n\nvoid swap(int *x, int *y){\n\tint tmp = *x;\n\t*x = *y;\n\t*y = tmp;\n}\n\nint minimum(int A[], int size) {\n\tint min = A[0];\n\n\tfor(int i = 0; i < size; i++) {\n\t\tif(A[i] < min) {\n\t\t\tmin = A[i];\n\t\t}\n\t}\n\n\treturn min;\n}\n\nint maximum(int A[], int size) {\n\tint max = A[0];\n\n\tfor(int i = 0; i < size; i++) {\n\t\tif(A[i] > max) {\n\t\t\tmax = A[i];\n\t\t}\n\t}\n\n\treturn max;\n}'
        }
      </Code>
      <Text>
        No changes should be made with the main C file as shown below.
      </Text>
      <Code language={programmingLanguages.C}>
        {
          '#include "functions.h"\n\nint main() {\n\tint a = 7, b = 23;\n\tint A[] = {4, 100, 2, -7, 19};\n\t\n\tprintf("%d\\n", isPalindrome("level"));\n\tprintf("%d\\n", isPalindrome("lever"));\n\t\n\tprintf("%d\\n", fib(0));\n\tprintf("%d\\n", fib(1));\n\tprintf("%d\\n", fib(4));\n\t\n\tswap(&a, &b);\n\tprintf("%d %d\\n", a, b);\n\t\n\tprintf("%d %d\\n", minimum(A, 5), maximum(A, 5));\n \n\treturn 0;\n}'
        }
      </Code>
      <Text>
        To avoid multiple inclusions of the same header file across a large C
        program (if this happens, i.e. <code>{'<functions.h>'}</code> is
        included twice in the same file, a compilation error happens. Recall
        that the preprocessor include, inserts the contents of the header file,
        hence the error), use the <code>#ifndef</code> preprocessor directive.
        This signals the include directive to only insert it when it has not
        been inserted yet. This is shown below.
      </Text>
      <Code language={programmingLanguages.C}>
        {
          '// functions.h\n#ifndef FUNCTIONS_HEADER\n#define FUNCTIONS_HEADER\n\nint palindrome(char*);\nint fibonacci(unsigned int);\nvoid swap(int*,int*);\nint minimum(int*,int);\nint maximum(int*,int);\n\n#endif'
        }
      </Code>
      <Text>
        The <code>functions.c</code> and <code>main.c</code> need no changes.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic3;
