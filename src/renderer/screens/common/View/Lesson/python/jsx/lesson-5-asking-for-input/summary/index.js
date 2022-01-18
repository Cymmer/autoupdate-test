import React from 'react';
import PropTypes from 'prop-types';
import { GlossaryList, GlossarySyntaxCard, GlossaryTermCard } from 'components';
import SummaryContainer from '../../../../Summary/Container';
import summaryTabs from '../../../../Summary/Container/constants/summaryTabs';

const Lesson5Summary = ({ lesson, baseRoute, baseLink, activeTab }) => (
  <SummaryContainer
    activeTab={activeTab}
    baseLink={baseLink}
    baseRoute={baseRoute}
    glossarySyntaxList={
      <>
        <GlossaryList
          notes={['an input() function generates a string value by default.']}
          title="Input() Syntax"
        >
          <GlossarySyntaxCard codes={['var = input()']} title="input()" />
          <GlossarySyntaxCard
            codes={[
              'var = char(input())',
              'var = str(input())',
              'var = int(input())',
              'var = float(input())',
            ]}
            title="typecasting"
          />
        </GlossaryList>
        <GlossaryList title="Multiple Inputs on One Line">
          <GlossarySyntaxCard
            codes={['var1, var2 = input().split']}
            title="multiple value input()"
          />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <GlossaryList
        notes={[
          'by convention, the input() function must always be assigned to a variable upon using it, to store the inputted value into that variable.',
        ]}
        title="Input() Syntax"
      >
        <GlossaryTermCard
          description="built-in function in Python used to prompt the user to type some value in the program"
          title="input()"
        />
      </GlossaryList>
    }
    lesson={lesson}
  />
);

Lesson5Summary.propTypes = {
  lesson: PropTypes.object.isRequired,
  baseRoute: PropTypes.string.isRequired,
  baseLink: PropTypes.string.isRequired,
  activeTab: PropTypes.oneOf([
    summaryTabs.SYNTAX.value,
    summaryTabs.TERMS.value,
  ]).isRequired,
};

export default Lesson5Summary;
