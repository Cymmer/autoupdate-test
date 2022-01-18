import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Compiler } from 'components/elements';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="Some Collections in Java"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Recall the Inheritance Labour Chum on Students? You had to implement it
        using an array of Student objects. This seems like you have a
        "collection" of students. There is an array or a variety of Collections
        in Java. We are going to cover a few of them here.
      </Text>
    }
  >
    <Section title="List">
      <Text>
        Let's say you want to have a collection of objects. You want to arrange
        the objects where there is a first object, a second object, a third
        object, and so on and so forth. And you want to be able to add items
        into this collection in any position. You also want to be able to remove
        objects from any position. And lastly, you want to be able to get
        objects at a particular position.
        <br />
        <br />
        What you need is the <code>List</code>. Lists in Java are implemented
        through arrays, linked lists or vectors.
        <br />
        <br />
        What we are going to show and learn here is the one that uses the linked
        list.
        <br />
        <br />
        Let's begin by exploring the list. Let's work with a list of Strings for
        now.
      </Text>
    </Section>

    <Section title="Adding items to a List">
      <Text>Check the sample below.</Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `import java.util.List;\nimport java.util.LinkedList;\nimport java.util.Iterator;\n\npublic class Main {\n\tpublic static void main(String args[]) {\n\t\tList <String> list = new LinkedList <String>();\n\t\t\n\t\tfor(int i = 5; i < 40; i += 5)\n\t\t\tlist.add("" + i);\n\t\t\n\t\tlist.add(3, "" + 18);\n\t\tlist.add(5, "" + 249);\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        <code>List</code> in Java is an interface. Therefore we cannot create an
        instance of a <code>List</code>. <code>LinkedList</code>,{' '}
        <code>ArrayList</code>, <code>Vector</code> are some of the classes that
        implement it. So the sample above creates an instance of a{' '}
        <code>LinkedList</code>.
        <br />
        <br />
        You can create a <code>List</code> of any object. In our case, list is a
        List of String objects.
        <br />
        <br />
        Adding items into the list requires the add method. This adds the item
        at the end of the list. If you want to add an item at a specified
        location, there is an overloaded version of it that accepts the position
        and the object to be inserted at that position.
        <br />
        <br />
        Note that the first element is found in position 0. Very much like the
        positions of an array.
      </Text>
    </Section>

    <Section title="Traversing through the List">
      <Compiler
        initialSourceCodes={[
          {
            code: `import java.util.List;\nimport java.util.LinkedList;\nimport java.util.Iterator;\n\npublic class Main {\n\tpublic static void main(String args[]) {\n\t\tList <String> list = new LinkedList <String>();\n\t\t\n\t\tfor(int i = 5; i < 40; i += 5)\n\t\t\tlist.add("" + i);\n\t\t\n\t\tlist.add(3, "" + 18);\n\t\tlist.add(5, "" + 249);\n\t\t\n\t\tSystem.out.println("The elements of the list are: ");\n\t\tint i = 0;\n\t\tfor(Iterator <String> iter = list.iterator(); iter.hasNext(); i++) {\n\t\t\tString item = iter.next();\n\t\t\tSystem.out.println("Element " + i + ": " + item);\n\t\t}\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        When you want to go through and check the items of the list, you will
        need an <code>Iterator</code>. The <code>Iterator</code> allows the{' '}
        <code>List</code> to be traversed through.
        <br />
        <br />
        When declaring an <code>Iterator</code>, its "type" should be consistent
        with the type of the elements of the <code>List</code>. And in this
        case, it is <code>String</code>.<code>iterator()</code> is a method of a{' '}
        <code>List</code> that returns an iterator that is reference to the
        first element of list.
        <br />
        <br />
        You go through the next elements by using the <code>next()</code> method
        of <code>iterator.next()</code> does not only traverse to the next
        element, it also returns the current element.
        <br />
        <br />
        <code>hasNext()</code> returns a boolean value. It checks whether the
        list still has items left to be iterated through.
      </Text>
    </Section>

    <Section title="Removing an item from List">
      <Compiler
        initialSourceCodes={[
          {
            code: `import java.util.List;\nimport java.util.LinkedList;\nimport java.util.Iterator;\n\npublic class Main {\n\tpublic static void main(String args[]) {\n\t\tList <String> list = new LinkedList <String>();\n\t\t\n\t\tfor(int i = 5; i < 40; i += 5)\n\t\t\tlist.add("" + i);\n\t\tlist.add(3, "" + 18);\n\t\tlist.add(5, "" + 249);\n\t\t\n\t\tSystem.out.println("The elements of the list are: ");\n\t\tint i = 0;\n\t\tfor(Iterator <String> iter = list.iterator(); iter.hasNext(); i++){\n\t\t\tString item = iter.next();\n\t\t\tSystem.out.println("Element " + i + ": " + item);\n\t\t}\n\t\t\n\t\tlist.remove("18");\n\t\tlist.remove("30");\n\t\tlist.remove("20");\n\t\t\n\t\tSystem.out.println("The elements of the list after remove are: ");\n\t\ti = 0;\n\t\tfor(Iterator <String> iter = list.iterator(); iter.hasNext(); i++){\n\t\t\tString item = iter.next();\n\t\t\tSystem.out.println("Element " + i + ": " + item);\n\t\t}\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        Removing an item from list is as simple as invoking remove and passing
        the item that needs to removed or the position where the item is
        located.
      </Text>
    </Section>

    <Section title="Checking if an item is in the List">
      <Text>
        When you want check if an item is in the List, <code>contains()</code>{' '}
        is here to the rescue!
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `import java.util.List;\nimport java.util.LinkedList;\nimport java.util.Iterator;\n\npublic class Main {\n\tpublic static void main(String args[]) {\n\t\tList <String> list = new LinkedList <String>();\n\t\t\n\t\tfor(int i = 5; i < 40; i += 5)\n\t\t\tlist.add(""+ i);\n\t\t\n\t\tlist.add(3, "" + 18);\n\t\tlist.add(5, "" + 249);\n\t\t\n\t\tSystem.out.println("The elements of the list are: ");\n\t\tint i = 0;\n\t\tfor(Iterator <String> iter = list.iterator(); iter.hasNext(); i++) {\n\t\t\tString item = iter.next();\n\t\t\tSystem.out.println("Element " + i + ": " + item);\n\t\t}\n\t\t\n\t\tlist.remove("18");\n\t\tlist.remove("30");\n\t\tlist.remove("20");\n\t\tlist.remove(1);\n\t\tlist.remove(4);\n\t\t\n\t\tSystem.out.println("The elements of the list after remove are: ");\n\t\ti = 0;\n\t\tfor(Iterator <String> iter = list.iterator(); iter.hasNext(); i++) {\n\t\t\tString item = iter.next();\n\t\t\tSystem.out.println("Element " + i + ": " + item);\n\t\t}\n\t\t\n\t\tif(list.contains(18))\n\t\t\tSystem.out.println("Yes, it is in the list.");\n\t\telse\n\t\t\tSystem.out.println("Yes, it is not in the list.");\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
    </Section>

    <Section title="Stack">
      <Text>
        Another interesting collection is the Stack. Do you enjoy watching
        people who are so good at speed stacks?
        <br />
        <br />
        Or when you are in a buffet place, and you need a plate. There's lots of
        plates stacked up all over the buffet area!
        <br />
        <br />
        It is called a stack of plates because when you add plates on to the
        stack of plates, you put it on top of the stack. When you want to remove
        a plate from the stack of plates, you get the one on top. Of course, you
        can remove the plate found in the middle of the stack or even the one at
        the bottom. But why burden yourself right?
        <br />
        <br />
        The <code>Stack</code> in Java is just like the stack of plates. It
        inherits <code>Vector</code> and implements <code>List</code>.
      </Text>
    </Section>

    <Section title="Adding an item onto the Stack">
      <Text>
        Adding an item onto the <code>Stack</code> is called pushing an item.
        The the method to invoke is <code>push()</code>.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `import java.util.Stack;\nimport java.util.Iterator;\n\npublic class Main {\n\tpublic static void main(String args[]) {\n\t\tStack <Integer> s = new Stack<Integer>();\n\t\t\n\t\ts.push(20);\n\t\ts.push(19);\n\t\ts.push(187);\n\t\t\n\t\tfor(Iterator<Integer> iter = s.iterator(); iter.hasNext(); )\n\t\t\tSystem.out.println(iter.next());\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
    </Section>

    <Section title="Removing an item from the Stack">
      <Text>
        Removing an item from the <code>Stack</code> is called{' '}
        <strong>popping</strong> an item. The item that will be popped is the
        last item that was pushed or the most recent item the was pushed. That
        is why the <code>Stack</code> is called a{' '}
        <strong>Last-In-First-Out</strong> data structure.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `import java.util.Stack;\nimport java.util.Iterator;\n\npublic class Main {\n\tpublic static void main(String args[]) {\n\t\tStack <Integer> s = new Stack<Integer>();\n\t\t\n\t\ts.push(20);\n\t\ts.push(19);\n\t\ts.push(187);\n\t\ts.push(68);\n\t\t\n\t\tfor(Iterator<Integer> iter = s.iterator(); iter.hasNext(); )\n\t\t\tSystem.out.println(iter.next());\n\t\t\n\t\ts.pop();\n\t\ts.pop();\n\t\tSystem.out.println("After two pops: ");\n\t\tfor(Iterator<Integer> iter = s.iterator(); iter.hasNext(); )\n\t\t\tSystem.out.println(iter.next());\n\t}\n}`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.JAVA),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.JAVA,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.JAVA}
      />
      <br />
      <Text>
        When you run this code, you will notice that <code>68</code> and{' '}
        <code>187</code> are the ones that were removed.
      </Text>
    </Section>

    <Section title="Checking what the top element is">
      <Text>
        Checking what the top element is called peeking. And the method for this
        is <code>peek()</code>.
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `import java.util.Stack;\nimport java.util.Iterator;\n\npublic class Main {\n\tpublic static void main(String args[]) {\n\t\tStack <Integer> s = new Stack<Integer>();\n\t\t\n\t\ts.push(20);\n\t\ts.push(19);\n\t\ts.push(187);\n\t\ts.push(68);\n\t\t\n\t\tSystem.out.println("Top element: " + s.peek());\n\t}\n}`,
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
