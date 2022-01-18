import React from 'react';

import { Text, Code } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="What are Arrays"
    titleJsx={
      <>
        <Text type={textTypes.BODY.MD}>
          So far, we are only able to store numbers in individual variables.
          What if we need a collection of numbers? Say, 20 numbers?
          <br />
          <br />
          Because we are in a gymnastics competition and there are 20 judges and
          the scores they give the gymnasts have to be recorded. Are we to use
          20 different variables?
          <br />
          <br />
          Sure we can! But start thinking. What if we need the average?
        </Text>
        <Code language={programmingLanguages.JAVA}>
          {`double sum = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 + s11 + s12 + s13 + s14 + s15 + s16 + s17 + s18 + s19 + s20;\ndouble ave = sum / 20;`}
        </Code>
        <Text>
          What if we need to drop the smallest score, and the highest score? Are
          we to check each of the 20 variables?
          <br />
          <br />
          For sure we can, again! But this would not be convenient, now would
          it?
        </Text>
      </>
    }
  >
    <Section title="Defining Arrays">
      <Text>
        There is a construct in Java called <strong>arrays</strong>.
        Essentially, they are a collection of entities. Like an array of gold
        jewelry, an array of red roses, an array of chocolates! In our case, an
        array of double values.
        <br />
        <br />
        This primitive array requires that the entities in the collection should
        be of the same type. Let us work with an array of integers first.
        <br />
        <br />
        There are two things we need to remember when working with primitive
        arrays in Java. First, it has to have a size. Second, it is always{' '}
        <strong>dynamically allocated</strong>. Check the declaration below:
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`int array1[];\nint[] array2;`}
      </Code>
      <Text>
        Both <strong>array1</strong> and <strong>array2</strong> are arrays of
        type <strong>int</strong>. The square brackets are used to declare an
        array in Java, either after the type or after the name. The Java
        convention (conventions are a set of guidelines for a specific
        programming language that recommend programming style, practices, and
        methods for each aspect of a program written in that language) is the
        declaration of <strong>array2</strong>.
        <br />
        <br />
        Recall that we mentioned that arrays have to have a size. We do that
        when we initialize the array. The samples above are not yet usable as
        they have not been initialized yet. How many elements can{' '}
        <strong>array1</strong> or <strong>array2</strong> contain? This is
        required before they are usable.
      </Text>
      <Code language={programmingLanguages.JAVA}>
        {`array1 = new int[5];\narray2 = new int[10];`}
      </Code>
      <Text>
        In the sample, <strong>array1</strong> can now contain up to a maximum
        of 5 ints. <strong>array2</strong> on the other can contain up to a
        maximum of 10 ints. Maximum because it is not required to fill them up
        to brim! And that is exactly the reason why you request the memory you
        exactly need. But more on these later!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic1;
