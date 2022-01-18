import React from 'react';

import { Text } from 'components/elements';
import { textTypes } from 'components/elements/constants';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="Garbage Collection"
    titleJsx={
      <>
        <Text type={textTypes.BODY.MD}>
          You will notice the use of the keyword <code>new</code>.{' '}
          <code>new</code> is an operator that requests dynamic memory.{' '}
          <strong>Dynamic memory</strong> is memory allocated to the program
          during run-time (while the programming is running) as opposed to
          compile-time allocation (static allocation of memory like saying{' '}
          <code>int a</code>, <code>char ch</code> -- essentially allocating
          memory without the use of the operator <code>new</code>) which
          allocates memory when the source file is being compiled.
        </Text>
      </>
    }
  >
    <Section>
      <Text>
        C, and C++ have dynamic allocation of memory as well. C uses{' '}
        <code>malloc</code> and <code>calloc</code>. C++ uses the{' '}
        <code>new</code> operator as well. Dynamically allocating memory gets
        memory from the <strong>heap rather than the stack</strong>. This means
        that it is the responsibility of the program (meaning the programmer) to
        deallocate this memory by freeing it so that when the program
        terminates, the dynamic memory allocated to it may be given or may be
        allocated to other programs. When programs do not deallocate dynamic
        memory, <strong>memory leaks</strong> happen. These are memory that are
        no longer used by any program but cannot be allocated to other programs
        because they haven’t been freed. Deallocation of dynamic memory is done
        in C by using <code>free</code>, and <code>delete</code> in C++.
        <br />
        <br />
        Thankfully, we do not have to do this in Java. The{' '}
        <a
          href="https://www.infoworld.com/article/3272244/what-is-the-jvm-introducing-the-java-virtual-machine.html"
          rel="noreferrer"
          target="_blank"
        >
          Java Virtual Machine (JVM)
        </a>{' '}
        has its own garbage collection scheme. It is able to determine whether
        the dynamic memory in a certain program is still being used by it or not
        anymore. So when Java programs no longer use dynamically allocated
        memory, the Garbage Collector of Java automatically deallocates them,
        sending them back to the free store!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic2;
