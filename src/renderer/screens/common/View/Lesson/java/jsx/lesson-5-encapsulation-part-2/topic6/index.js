import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic6 = () => (
  <TopicContainer
    image={IntroImage}
    number={6}
    title="Static Variables"
    titleJsx={
      <>
        <Text type={textTypes.BODY.MD}>
          What if you want to keep track of the number of objects of a
          particular class that have been created in the program so far? How are
          you going to do it? Introducing an instance variable will not cut it.
          If you introduce an <code>int</code> counter to keep track of the
          count which you can do and monitor via the constructor (the only way
          objects can be created - as far as we know so far), this counter{' '}
          <strong>will be unique for each instance of the object</strong>.
          <br />
          <br />
          What we need here is a kind of storage that is{' '}
          <strong>common to all objects</strong> so that only one such variable
          exists even if there are plenty of objects. But this count should also
          be accessible to all the objects.
        </Text>
      </>
    }
  >
    <Section>
      <Text>Check the code below:</Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `public class MyObject {\n\tint itsValue;\n\tstatic int objectCount = 0;\n\n\tpublic MyObject() {\n\t\titsValue = 0;\n\t\tobjectCount++;\n\t}\n\n\tpublic MyObject(int x) {\n\t\titsValue = x;\n\t\tobjectCount++;\n\t}\n}`,
            file_name: 'MyObject',
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
          {
            code: `class Main {\n\tpublic static void main(String args[]) {\n\t\tSystem.out.println("MyObject count: " + MyObject.objectCount);\n\n\t\tMyObject m = new MyObject(), n = new MyObject(7);\n\n\t\tSystem.out.println("MyObject count: " + MyObject.objectCount);\n\n\t\tfor(int i = 0; i < 7; i++) {\n\t\t\tMyObject o = new MyObject();\n\t\t\tSystem.out.println("MyObject count: " + MyObject.objectCount);\n\t\t}\n\t\t\n\t\tMyObject o = new MyObject(10);\n\t\tSystem.out.println("MyObject count: " + MyObject.objectCount);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <Text>
        Compile and run this and see the result!
        <br />
        <br />
        <code>itsValue</code> is an instance variable. This means that for each
        object of type <code>MyObject</code> created,{' '}
        <strong>a unique memory is allocated for it.</strong>{' '}
        <code>objectCount</code> on the other hand is a static variable. This
        means that there is only one "instance" of <code>objectCount</code> for
        all objects of type <code>MyObject</code>.
        <br />
        <br />
        Notice where <code>objectCount</code> was initialized. And notice how{' '}
        <code>objectCount</code> was accessed. Still through the dot operator
        but not through an instance of <code>MyObject</code>. Not through m, n,
        nor o. Because <code>objectCount</code> is not an instance variable,{' '}
        <strong>there is no need for an instance of MyObject</strong> before it
        can be used (as shown in the first line of main).
        <br />
        <br />
        This is exactly the reason why the <code>main</code> method, in all our
        examples, are set to be static.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        public static void main (String args[])
      </Code>
      <Text>
        There must be a way to call the <code>main</code> method so we can run
        the Java program. If the <code>main</code> was an instance method, and
        therefore not <code>static</code>, we{' '}
        <strong>would have to create an instance of a class</strong> that holds
        the <code>main</code>
        method. But in one program, there has to be only one <code>
          main
        </code>{' '}
        method (no matter how many classes the program has). And remember, that
        the execution of a Java program begins in the <code>main</code> method.
        <br />
        <br />
        Set the <code>main</code> method to <code>static</code>, then the Java
        Runtime Environment can run the <code>main</code> method without
        creating an instance object but simply call MyObject.main(args) behind
        the scenes.
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic6;
