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
    title="Java Main"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Like any demigod, you train! So let us learn some basic Java Syntax!
        <br />
        <br />
        Like in C/C++, Java requires a main function. But unlike in C/C++, it
        has to be enclosed in a <strong>class</strong>. For now accept this a
        gospel truth, young padawan!
        <br />
        <br />
        Wait, are you a young padawan or are you a demigod, you might ask. Do
        not fret.
        <br />
        Who says you can’t be all?
      </Text>
    }
  >
    <Section title="Your First Program">
      <Code language={programmingLanguages.JAVA}>
        {`class Main {\n\tpublic static void main(String args[]) {\n\t\tSystem.out.println("Hello World! Hello Chiron!");\n\t}\n}`}
      </Code>
      <Text>
        Again, for now accept the above code as gospel truth. This means the
        keywords <code>class</code>, <code>public</code>, <code>static</code>,
        and <code>void</code> may seem to be unfamiliar (sometimes we feel
        empty).
        <br />
        <br />
        There you go. Your first Java program! The main function or in Java
        parlance, the <code>main</code> method, accepts an array of arguments.
        We will deal with this in a while.
      </Text>
    </Section>
    <Section title="How to Print">
      <Text>
        To be able to print on the console, we use{' '}
        <code>System.out.println</code> to print a <strong>line</strong> on the
        console. If you know C, then this is your <code>printf</code> or in C++,
        your <code>cout</code>.
        <br />
        <br />
        Again, we will deal with what <code>System</code> and <code>out</code>{' '}
        are in a bit.
        <br />
        <br />
        We enclose in double quotes the literal strings we want printed on the
        console.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`class Main {\n\tpublic static void main(String args[]) {\n\t\tSystem.out.println("Hello World! Hello Chiron!");\n\t}\n}`}
      </Code>
      <Text>
        Using <code>System.out.print</code> will do the same thing except it
        will print the enclosed literal string without the new line character.
        To be clearer (seek the Oracle - nah) check and run the two codes below:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tSystem.out.println("Hello World!");\n\t\tSystem.out.println("Hello Chiron!");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Compiler
        initialSourceCodes={[
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tSystem.out.print("Hello World!");\n\t\tSystem.out.print("Hello Chiron!");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
    </Section>
  </TopicContainer>
);

export default Topic1;
