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
    title="Creating Data Types"
    titleJsx={
      <>
        <Text>
          <code>fraction</code> can now be used to declare variables. In the
          case below, <code>a</code>, <code>b</code>, and <code>c</code> are not
          integers, they are not characters, they are not strings.{' '}
          <code>a</code>, <code>b</code>, and <code>c</code> are{' '}
          <code>fraction</code>'s.
        </Text>
        <Code language={programmingLanguages.C}>
          {`#include<stdio.h>\n\nstruct fraction {\n\tint nume, deno;\n};\n\nint main() {\n\t// take a look at this, a new data type!\n\tstruct fraction a, b, c;\n\t\n\treturn 0;\n}`}
        </Code>
      </>
    }
  >
    <Section>
      <Text>
        The problem with this structure definition is that we keep prepending{' '}
        <code>fraction</code> with <code>struct</code>. To do away with this,
        use the keyword <code>typedef</code>. We use this to give a type a new
        name. We have a type <code>struct fraction</code>, and we want to rename
        it to just <code>fraction</code>. This is shown below.
      </Text>
      <Code language={programmingLanguages.C}>
        {`#include<stdio.h>\n\ntypedef struct {\n\tint nume, deno;\n} fraction;\n\n\nint main() {\n\t// now, it's much cleaner isn't it?\n\tfraction a, b, c;\n\t\n\treturn 0;\n}`}
      </Code>
      <Text>
        Notice that fraction is an aggregate of two components,{' '}
        <code>nume</code>, and <code>deno</code>. To access the components, the{' '}
        <strong>dot operator</strong> is used as shown below.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\ntypedef struct {\n\tint nume, deno;\n} fraction;\n\nint main() {\n\tfraction a, b, c;\n\t\n\ta.nume = 1;\n\ta.deno = 2;\n\n\tprintf("%d/%d\\n", a.nume, a.deno);\n\n\tb.nume = 5;\n\tb.deno = 3;\n\n\tprintf("%d/%d\\n", b.nume, b.deno);\n\n\tc.nume = 10;\n\tc.deno = 11;\n\n\tprintf("%d/%d\\n", c.nume, c.deno);\n\t\n\treturn 0;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        We may also set the numerator and denominator using <code>scanf()</code>{' '}
        if the values will come to the standard input:
      </Text>
      <Code language={programmingLanguages.C}>
        {`#include<stdio.h>\n\ntypedef struct {\n\tint nume, deno;\n} fraction;\n\nint main() {\n\tfraction a, b, c;\n\tscanf("%d%d", &a.nume, &a.deno);\n\tscanf("%d%d", &b.nume, &b.deno);\n\n\treturn 0;\n}`}
      </Code>
      <Text>
        Since we will print fractions from time to time let’s implement a
        function that displays the fraction.
      </Text>
      <Compiler
        initialCustomInput={`4 3\n5 4`}
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\ntypedef struct {\n\tint nume, deno;\n} fraction;\n\nvoid display(fraction);\n\nint main() {\n\tfraction a, b, c;\n\tscanf("%d%d", &a.nume, &a.deno);\n\tscanf("%d%d", &b.nume, &b.deno);\n\t\n\t// how cool is this!\n\tdisplay(a);\n\tprintf("\\n");\n\tdisplay(b);\n\n\treturn 0;\n}\n\nvoid display(fraction f) {\n\tprintf("%d/%d", f.nume, f.deno);\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Since <code>fraction</code> is a type of data (aggregate data),
        therefore we can have parameters of type <code>fraction</code> now.
        <br />
        <br />
        Now, if we can have it as a parameter, then by all means, we can have it
        as a return type as well. And this should solve our problem with the
        times function we had early on:
      </Text>
      <Compiler
        initialCustomInput={`4 3\n5 4`}
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\ntypedef struct {\n\tint nume, deno;\n} fraction;\n\nvoid display(fraction);\nfraction times(fraction, fraction);\n\nint main(){\n\tfraction a, b, c;\n\tscanf("%d%d", &a.nume, &a.deno);\n\tscanf("%d%d", &b.nume, &b.deno);\n\n\tdisplay(a);\n\tprintf(" * ");\n\tdisplay(b);\n\tprintf(" = ");\n\t\n\t// since times returns a fraction, a fraction must receive it\n\tc = times(a, b);\n\t\n\tdisplay(c);\n\n\treturn 0;\n}\n\nvoid display(fraction f) {\n\tprintf("%d/%d", f.nume, f.deno);\n}\n\nfraction times(fraction a, fraction b) {\n\tfraction prod;\n\n\tprod.nume = a.nume * b.nume;\n\tprod.deno = a.deno * b.deno;\n\n\treturn prod;\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Alright we got that working, but most of the time, if not always, we
        want the fraction to always be in its lowest term. To do this, we can
        implement a <code>simplify()</code> function that will accept a{' '}
        <code>fraction</code> and will return a simplified version of that{' '}
        <code>fraction</code>:
      </Text>
      <Compiler
        initialCustomInput={`4 3\n5 4`}
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\ntypedef struct {\n\tint nume, deno;\n} fraction;\n\nvoid display(fraction);\nfraction times(fraction, fraction);\nfraction simplify(fraction);\n\nint main() {\n\tfraction a, b, c;\n\tscanf("%d%d", &a.nume, &a.deno);\n\tscanf("%d%d", &b.nume, &b.deno);\n\n\tdisplay(a);\n\tprintf(" * ");\n\tdisplay(b);\n\tprintf(" = ");\n\tc = times(a, b);\n\tdisplay(c);\n\tprintf("\\n");\n\t\n\treturn 0;\n}\n\nvoid display(fraction f) {\n\tprintf("%d/%d", f.nume, f.deno);\n}\n\nfraction times(fraction a, fraction b) {\n\tfraction prod;\n\n\tprod.nume = a.nume * b.nume;\n\tprod.deno = a.deno * b.deno;\n\t\n\t// by calling the "simplify()" function here,\n\t// our "times()" function will always return\n\t// the simplified version of the product\n\treturn simplify(prod);\n}\n\nfraction simplify(fraction f) {\n\tint x = f.nume, y = f.deno, r;\n\tfraction s;\n\n\twhile(x % y > 0) {\n\t\tr = x % y;\n\t\tx = y;\n\t\ty = r;\n\t}\n\n\ts.nume = f.nume / y;\n\ts.deno = f.deno / y;\n\n\treturn s; \n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
      <Text>
        Recall that this simplification is essentially utilizing Euclidean’s
        algorithm for GCD. Everytime <code>times()</code> is invoked, it always
        returns a product that is in its lowest terms.
        <br />
        <br />
        What if we were to add 2 fractions? Recall that there is a need to look
        for the LCD or least common denominator.
        <br />
        <br />
        The least common denominator is essentially the least common multiple
        (LCM). Take 3 and 5, their least common multiple or their smallest
        common multiple is 15. Take 12 and 18, their LCM is 36. Recall that
        their GCD or greatest common divisor is 6.
        <br />
        <br />
        To get the LCM then, all we need to do is to{' '}
        <strong>
          multiply the two numbers and divide the product by the GCD
        </strong>
        ! Woah! See this below:
      </Text>
      <Compiler
        initialCustomInput={`4 3\n5 4`}
        initialSourceCodes={[
          {
            code: `#include<stdio.h>\n\ntypedef struct {\n\tint nume, deno;\n} fraction;\n\nvoid display(fraction);\nfraction add(fraction, fraction);\nfraction simplify(fraction);\nint gcd(int, int);\n\nint main() {\n\tfraction a, b, c;\n\tscanf("%d%d", &a.nume, &a.deno);\n\tscanf("%d%d", &b.nume, &b.deno);\n\n\tdisplay(a);\n\tprintf(" + ");\n\tdisplay(b);\n\tprintf(" = ");\n\tc = add(a,b);\n\tdisplay(c);\n\tprintf("\\n");\n\n\treturn 0;\n}\n\nint gcd(int x, int y){\n\tint r;\n\n\twhile(x%y>0){\n\t\tr = x % y;\n\t\tx = y;\n\t\ty = r;\n\t}\n\t\n\t// or you may return r\n\treturn y;\n}\n\nvoid display(fraction f) {\n\tprintf("%d/%d", f.nume, f.deno);\n}\n\nfraction add(fraction a, fraction b) {\n\tint lcd = (a.deno * b.deno) / gcd(a.deno, b.deno);\n\tfraction sum;\n\n\tsum.deno = lcd;\n\n\tsum.nume = ((lcd / a.deno) * a.nume) + ((lcd / b.deno) * b.nume);\n\n\treturn simplify(sum);\n}\n\nfraction simplify(fraction f) {\n\tint g = gcd(f.nume, f.deno);\n\tfraction s;\n\n\ts.nume = f.nume / g;\n\ts.deno = f.deno / g;\n\n\treturn s; \n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.C),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.C,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.C}
      />
      <br />
    </Section>
  </TopicContainer>
);

export default Topic2;
