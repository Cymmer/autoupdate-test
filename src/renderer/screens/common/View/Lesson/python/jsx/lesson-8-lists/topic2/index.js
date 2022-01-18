import React from 'react';

import { getFileName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { Text, Code, Compiler } from 'components/elements';
import { programmingLanguages } from 'components/elements/Code/constants';
import { textTypes } from 'components/elements/constants';

import { FunFactCard, InfoList, InfoCard } from 'components';
import IntroImage from './intro-image.png';

import TopicContainer from '../../../../Topic/Container';
import Section from '../../../../Section';

const Topic2 = () => (
  <TopicContainer
    image={IntroImage}
    number={2}
    title="Listing Skills"
    titleJsx={
      <Text type={textTypes.BODY.MD}>
        Cody now knows how to make a list of things like a normal human! But did
        you know that you can actually manipulate what’s inside a list? To know
        how to do it, you read the second topic of the last chapter of the
        manual which states: <br />
        <br /> "Lists are so dynamic that it can store values of different data
        types. But what’s even better than that is that we can also add, remove,
        replace, insert, and do many other manipulations to lists as well! This
        can be done by using some of the most{' '}
        <strong>basic list functions</strong> available in Python, and we’ll try
        to get familiar with it one by one."
      </Text>
    }
  >
    <Section title="Adding an Element to a List">
      <Text>
        Lists are so flexible that we can actually add more values into a list
        even after it was created and declared! There are three built-in Python
        functions that allow us to add a value to the list: append(), extend(),
        and insert(). When we want to add one value at the end of the list, we
        can use the append() function by following this syntax:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        list_name.append(value)
      </Code>
      <Text>
        For example, when we have a list of foods that are yellow in color, and
        we want to add "lemon" to the list, we can add it with this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`yellows = ["banana", "mango", "pineapple"]\nyellows.append("lemon")\n\nprint(yellows)`}
      </Code>
      <Text>
        But when we want to add one or more values in one line of code, we can
        use the extend() function to add it at the end of the list, like this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        list_name.extend([value1, value2, value3])
      </Code>
      <Text>
        Just remember that we should always enclose all values that we will add
        using the extend() function with a pair of square brackets, or else it
        will return an error. Hence, when we want to add 2 more items in the
        list of yellow-colored fruits, we must enclose it with square brackets,
        like this:
      </Text>
      <Code
        language={programmingLanguages.PYTHON}
      >{`yellows = ["banana", "mango", "pineapple"]\nyellows.extend(["lemon", "pears"])\n\nprint(yellows)`}</Code>
    </Section>

    <Section>
      <FunFactCard
        childrenJsx={
          <Compiler
            initialSourceCodes={[
              {
                code: `yellows = ["banana", "mango", "pineapple"]\nyellows.extend(24)\n\nprint(yellows)`,
                file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
                file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
              },
            ]}
            languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          />
        }
        mainTextJsx={
          <>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              If it happens that we add only one string value using the extend()
              function but it is not enclosed in square brackets at all, it will
              not have an error, but will instead treat each letter of the
              string as a single value put into the list, like this:
            </Text>
            <Code language={programmingLanguages.PYTHON}>
              {`yellows = ["banana", "mango", "pineapple"]\nyellows.extend("lemon")\n\nprint(yellows)`}
            </Code>
            <Text colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}>
              But if we add a single number that is not enclosed in square
              brackets into the list using this function, the extend() function
              will result to an error:
            </Text>
          </>
        }
      />
    </Section>

    <Section>
      <Text>
        Now, we know that we can use append() or extend() to add items at the
        end of the list, but when we want to add a value to a specific index
        position, we can use the insert() function!
        <br />
        <br /> To insert something in a list at a specified position, we follow
        this syntax:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        list_name.insert(index_position, value)
      </Code>
      <Text>
        Just remember that lists are arrays of values, and since they are
        arrays, accessing values work just like accessing characters in strings
        (which are arrays of characters), such that, the index position is given
        to each variable.
        <br />
        <br /> Hence, when we want to add "lemon" to the 1st index position of
        the list, we can do this:
      </Text>
      <Code
        language={programmingLanguages.PYTHON}
      >{`yellows = ["banana", "mango", "pineapple"]\nyellows.insert(1,"lemon")\n\nprint(yellows)`}</Code>
      <Text>
        You might be wondering why the inserted value was not placed in the
        beginning of the list. Never forget that index positioning for every
        array always starts with 0. So, if you’d like to insert your value to
        the beginning of the list, insert it at index position 0, like this:
      </Text>
      <Code
        language={programmingLanguages.PYTHON}
      >{`yellows = ["banana", "mango", "pineapple"]\nyellows.insert(0,"lemon")\n\nprint(yellows)`}</Code>
    </Section>

    <Section title="Removing List Values">
      <Text>
        If you can add and change an item in the list, you can also remove those
        that you don’t want to be part of the list anymore! There are four ways
        to do so: using remove(), del, pop(), and clear().
        <br />
        <br /> When you want to delete a specific item from a list, you can use
        remove() where you can indicate the specific item to be removed, like
        this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        list_name.remove(value)
      </Code>
      <Text>For example:</Text>
      <Code language={programmingLanguages.PYTHON}>
        {`yellows = ["banana", "mango", "pineapple"]\nyellows.remove("mango")\n\nprint(yellows)`}
      </Code>
      <Text>
        However, when you want to delete an item based on its index position,
        you can use the del keyword instead, like this:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        del list_name[index_position]
      </Code>
      <Text>
        Now, let us take a look at how it works when deleting a value via
        indices:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `yellows = ["banana", "mango", "pineapple"]\ndel yellows[1]\n\nprint(yellows)`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
      />
      <br />
      <Text>
        This keyword can also be used to entirely delete the existence of a
        list, when the need arises. To illustrate, let us try deleting the
        fruits list:
      </Text>
      <Compiler
        initialSourceCodes={[
          {
            code: `yellows = ["banana", "mango", "pineapple"]\ndel yellows\n\nprint(yellows[0])`,
            file_name: getFileName(GLOBALS.LANGUAGE_EXTENSIONS.PYTHON),
            file_extension: GLOBALS.LANGUAGE_EXTENSIONS.PYTHON,
          },
        ]}
        languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
      />
      <br />
      <Text>
        When you just want to simply remove the last item on the list,
        regardless of what it is, just use the pop() function and it will do the
        trick.
      </Text>
      <Code language={programmingLanguages.PYTHON}>list_name.pop()</Code>
      <Text>
        The popped value can also be printed out since the pop() function does
        not only remove it, but also return the value when called. Hence, we can
        output the removed value:
      </Text>
      <Code language={programmingLanguages.PYTHON}>
        {`yellows = ["banana", "mango", "pineapple"]\nprint(yellows.pop())`}
      </Code>
      <Text>
        And finally, when you want to empty the list (remove all values inside
        it), just use the clear() function to swipe all values out from the
        list.
      </Text>
      <Code language={programmingLanguages.PYTHON}>list_name.clear()</Code>
      <Text>For example:</Text>
      <Code language={programmingLanguages.PYTHON}>
        {`yellows = ["banana", "mango", "pineapple"]\nyellows.clear()\n\nprint(yellows)`}
      </Code>
    </Section>

    <Section title="Other Functions">
      <Text>
        There are a lot of available functions that can be used to manipulate
        lists, but here are a few others that might be useful in your future
        endeavors as a programmer:
      </Text>
      <InfoList>
        <InfoCard
          code={`nums = [3, 1, 2]\nprint(nums.sort())`}
          info="Sorts the list in ascending order"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="[1, 2, 3]"
          syntax={['list_name.sort()']}
          title="sort()"
        />
        <InfoCard
          code={`nums = [3, 1, 2]\nprint(nums.reverse())`}
          info="Reverses the order of items in the list"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="[2, 1, 3]"
          syntax={['list_name.reverse()']}
          title="reverse()"
        />
        <InfoCard
          code={`nums = [3, 1, 2]\nnums2 = nums.copy()\nprint(nums2)`}
          info="Returns a copy of the values inside the list"
          languageExtension={GLOBALS.LANGUAGE_EXTENSIONS.PYTHON}
          output="[3, 1, 2]"
          syntax={['list_name.copy()']}
          title="copy()"
        />
      </InfoList>
    </Section>
  </TopicContainer>
);

export default Topic2;
