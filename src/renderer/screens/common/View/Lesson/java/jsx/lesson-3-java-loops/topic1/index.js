import React from 'react';

import { Text } from 'components/elements';
import { textTypes } from 'components/elements/constants';

import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic1 = () => (
  <TopicContainer
    image={IntroImage}
    number={1}
    title="What Are Loops"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        When you want to perform addition of two numbers, this should be easy,
        right? Or even 10 numbers. But what if you are to add the numbers from 1
        to some upper bound <code>n</code> (it is also assumed that you do not
        know the formula for this - :D)? Let us say <code>n</code> is 7. Then
        you have 2 options. Add the numbers 1, 2, 3, 4, 5, 6, 7. Or add the
        numbers from 7 this time then 6, 5, 4, 3, 2, 1. There must be a way to
        handle a variable that begins with some value and, step-by-step, this
        variable increases by 1. Then this gets repeated many times over until
        it reaches some upper bound which, in our case, is 7. Or alternatively,
        we can start from 7, and reduce this value by 1, step-by-step until it
        reaches 1.
      </Text>
    }
  >
    <Section title="Types of Loops">
      <Text>
        What we have seen here is that we repeat addition (or subtraction) - the
        same statement - many times over and at some point this repetition has
        to stop. This is what we call an iteration (or a loop). And Java has 4
        forms of this loop construct. And they are the following:
        <ul>
          <li>while loop</li>
          <li>for loop</li>
          <li>do-while loop</li>
          <li>
            for-each loop (but we will skip this for now - but we will get back
            to this when we discuss arrays in Java)
          </li>
        </ul>
        <br />
        <br />
        No matter what kind of loop construct, they always have the same major
        components, and these are:
        <ul>
          <li>
            a condition that checks whether the repetition still needs to be
            executed.
            <ul>
              <li>
                And your hunch is correct! Betcha thinking of the conditions
                that you encountered in the if-statements. These are the same
                conditions that we are talking about here.
              </li>
            </ul>
          </li>
          <li>
            an expression or statement that changes the value of the variable
            used in the condition above.
            <ul>
              <li>
                It is important to note that this change should eventually lead
                to breaking the cycle or loop. And this will happen exactly when
                the condition will evaluate to false.
              </li>
            </ul>
          </li>
        </ul>
        <br />
        <br />
        By now, you should have discovered that so long as the condition in the
        loop construct is true, the repetition or iteration goes on. And finally
        stops until the condition evaluates to false.
        <br />
        <br />
        Chiron says dive right in and meet the while loop!
      </Text>
    </Section>
  </TopicContainer>
);

export default Topic1;
