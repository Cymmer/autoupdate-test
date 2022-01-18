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
            codes={['var = num + num', 'print(num+num)']}
            title="Addition"
          />
          <GlossarySyntaxCard
            codes={['var = num-num', 'print(num-num)']}
            title="Subtraction"
          />
          <GlossarySyntaxCard
            codes={['var = num*num', 'print(num*num)']}
            title="Multiplication"
          />
          <GlossarySyntaxCard
            codes={['var = num/num', 'print(num/num)']}
            title="Normal Division"
          />
          <GlossarySyntaxCard
            codes={['var = num//num', 'print(num//num)']}
            title="Floor Division"
          />
          <GlossarySyntaxCard
            codes={['var = int%int', 'print(int%int)']}
            title="Modulo"
          />
          <GlossarySyntaxCard
            codes={['var = int**int', 'print(int**int)']}
            title="Exponent"
          />
        </GlossaryList>
        <GlossaryList
          notes={[
            'to use these functions, we have to import the math library in our program, hence we need to type in import math on top of our code in Python.',
          ]}
          title="Basic Math Functions"
        >
          <GlossarySyntaxCard
            codes={['import math']}
            title="importing math library"
          />
          <GlossarySyntaxCard codes={['math.abs(int)']} title="abs()" />
          <GlossarySyntaxCard codes={['math.fabs(float)']} title="fabs()" />
          <GlossarySyntaxCard codes={['math.sqrt(num)']} title="sqrt()" />
          <GlossarySyntaxCard codes={['math.floor(num)']} title="floor()" />
          <GlossarySyntaxCard codes={['math.ceil(num)']} title="ceil()" />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="Basic Arithmetic Operators">
          <GlossaryTermCard
            description="Divides the left operand by the right operand (with 6 decimals, regardless if the result is a whole number)"
            title="Normal Division"
          />
          <GlossaryTermCard
            description="Divides the left operand by the right operand and rounds it down to return an integer"
            title="Floor Division"
          />
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
            description="an order of operations to be followed when solving for mathematical operations in Python with the following order: parentheses -> exponent -> multiplication/division/modulo -> addition/subraction"
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
