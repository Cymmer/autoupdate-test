import React from 'react';
import PropTypes from 'prop-types';
import { GlossaryList, GlossarySyntaxCard, GlossaryTermCard } from 'components';
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
            codes={['var = num + num;', 'var += num;']}
            title="Addition"
          />
          <GlossarySyntaxCard
            codes={['var = num - num;', 'var -= num;']}
            title="Subtraction"
          />
          <GlossarySyntaxCard
            codes={['var = num * num;', 'var *= num;']}
            title="Multiplication"
          />
          <GlossarySyntaxCard
            codes={['var = num / num;', 'var /= num;']}
            title="Normal Division"
          />
          <GlossarySyntaxCard
            codes={['var = int % int;', 'var %= int;']}
            title="Modulo"
          />
          <GlossarySyntaxCard
            codes={['var++', 'var--']}
            title="Increment Operators"
          />
        </GlossaryList>
        <GlossaryList
          notes={[
            'to use these functions, we have to import the math.h library in our program, hence we need to type in #include<math.h> on top of our code in C.',
          ]}
          title="Basic Math Functions"
        >
          <GlossarySyntaxCard
            codes={['#include <math.h>']}
            title="including math library"
          />
          <GlossarySyntaxCard codes={['fabs(float);']} title="fabs()" />
          <GlossarySyntaxCard codes={['sqrt(num);']} title="sqrt()" />
          <GlossarySyntaxCard codes={['pow(base, exponent);']} title="pow()" />
          <GlossarySyntaxCard codes={['floor(num);']} title="floor()" />
          <GlossarySyntaxCard codes={['ceil(num);']} title="ceil()" />
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
        <GlossaryList
          notes={[
            'for operations having the same precedence, we begin solving from the first operator of the same precedence on the left side, and on to the right.',
          ]}
          title="Order of Precedence"
        >
          <GlossaryTermCard
            description="an order of operations to be followed when solving for mathematical operations in C with the following order: parentheses -> multiplication/division/modulo -> addition/subtraction"
            title="Order of Precedence"
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
