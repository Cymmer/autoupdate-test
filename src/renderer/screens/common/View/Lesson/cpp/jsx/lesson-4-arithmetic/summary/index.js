import React from 'react';
import PropTypes from 'prop-types';
import { GlossaryList, GlossarySyntaxCard, GlossaryTermCard } from 'components';
import { programmingLanguages } from 'components/elements/constants';
import SummaryContainer from '../../../../Summary/Container';
import summaryTabs from '../../../../Summary/Container/constants/summaryTabs';

const Lesson4Summary = ({ lesson, baseRoute, baseLink, activeTab }) => (
  <SummaryContainer
    activeTab={activeTab}
    baseLink={baseLink}
    baseRoute={baseRoute}
    glossarySyntaxList={
      <>
        <GlossaryList title="Basic Arithmetic Operators">
          <GlossarySyntaxCard
            codes={['result = num1 + num2;\nresult += num;']}
            title="Addition"
          />
          <GlossarySyntaxCard
            codes={['result = num1 - num2;\nresult -= num;']}
            title="Subtraction"
          />
          <GlossarySyntaxCard
            codes={['result = num1 * num2;\nresult *= num;']}
            title="Multiplication"
          />
          <GlossarySyntaxCard
            codes={['result = num1 / num2;\nresult /= num;']}
            title="Division"
          />
          <GlossarySyntaxCard
            codes={['result = num1 % num2;\nresult %= num;']}
            title="Modulo"
          />
          <GlossarySyntaxCard
            codes={['result++;\nresult--;']}
            title="Increment/ Decrement Operators"
          />
        </GlossaryList>
        <GlossaryList
          notes={[
            'To use these functions, we have to import the cmath library in our program, hence we need to type in `#include<cmath>` on top of our code in C++.',
          ]}
          title="Basic Math Functions"
        >
          <GlossarySyntaxCard
            codes={['#include<cmath>']}
            language={programmingLanguages.CPP}
            title="including math library"
          />
          <GlossarySyntaxCard
            codes={[
              'Returns the value of the left operand (base) raised to the power of the right operand (exponent).',
            ]}
            title="pow(base, exponent)"
          />
          <GlossarySyntaxCard
            codes={['Returns the square root of a number.']}
            title="sqrt(num)"
          />
          <GlossarySyntaxCard
            codes={[
              'Rounds down a number to the largest integer less than or equal to the number.',
            ]}
            title="floor(num)"
          />
          <GlossarySyntaxCard
            codes={[
              'Rounds down a number to the largest integer less than or equal to the number.',
            ]}
            title="ceil(num)"
          />
          <GlossarySyntaxCard
            codes={['Returns the absolute, positive value of num.']}
            title="fabs(float)"
          />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="Basic Arithmetic Operators">
          <GlossaryTermCard
            description="Divides left operand by right operand and returns the remainder"
            title="Modulo"
          />
        </GlossaryList>
        <GlossaryList title="Order of Precedence">
          <GlossaryTermCard
            description="The order of operations to be followed when solving for mathematical operations in C++ with the following order: `parentheses -> multiplication/division/modulo -> addition/subtraction`. For operations having the same precedence, we begin solving from the first operator of the same precedence on the left side, and on to the right."
            title="Order of Precedence"
            // description="an order of operations to be followed when solving for mathematical operations in C with the following order: parentheses -> multiplication/division/modulo -> addition/subtraction"
          />
        </GlossaryList>
      </>
    }
    lesson={lesson}
  />
);

Lesson4Summary.propTypes = {
  lesson: PropTypes.object.isRequired,
  baseRoute: PropTypes.string.isRequired,
  baseLink: PropTypes.string.isRequired,
  activeTab: PropTypes.oneOf([
    summaryTabs.SYNTAX.value,
    summaryTabs.TERMS.value,
  ]).isRequired,
};

export default Lesson4Summary;
