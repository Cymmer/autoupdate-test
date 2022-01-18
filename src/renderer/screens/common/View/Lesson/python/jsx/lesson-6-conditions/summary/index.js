import React from 'react';
import PropTypes from 'prop-types';
import { GlossaryList, GlossarySyntaxCard, GlossaryTermCard } from 'components';
import SummaryContainer from '../../../../Summary/Container';
import summaryTabs from '../../../../Summary/Container/constants/summaryTabs';

const Lesson6Summary = ({ lesson, baseRoute, baseLink, activeTab }) => (
  <SummaryContainer
    activeTab={activeTab}
    baseLink={baseLink}
    baseRoute={baseRoute}
    glossarySyntaxList={
      <>
        <GlossaryList
          notes={[
            'the lines of code inside all conditional statements (like  this if statement) must always be properly indented inside the conditional statement.',
          ]}
          title="If Syntax"
        >
          <GlossarySyntaxCard
            codes={[`if condition:\n\t# line of code`]}
            title="if"
          />
        </GlossaryList>
        <GlossaryList
          notes={[
            'an else statement cannot function without an if statement before it.',
          ]}
          title="Else Syntax"
        >
          <GlossarySyntaxCard
            codes={[`if condition:\n\t# line of code\nelse:\n\t# line of code`]}
            title="if:else"
          />
        </GlossaryList>
        <GlossaryList title="Elif Syntax">
          <GlossarySyntaxCard
            codes={[
              `if condition:\n\t# line of code\nelif condition:\n\t# line of code`,
              `if condition:\n\t# line of code\nelif condition:\n\t# line of code\nelif condition:\n\t# line of code\nelse:\n\t# line of code`,
            ]}
            title="if:elif"
          />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="If Syntax">
          <GlossaryTermCard
            description="a conditional statement that involves only one condition to be met in order for the code inside it to be performed"
            title="if"
          />
        </GlossaryList>
        <GlossaryList title="Else Syntax">
          <GlossaryTermCard
            description="a conditional statement that is used to perform lines of code when the condition of the if() statement before it returns false"
            title="else"
          />
        </GlossaryList>
        <GlossaryList title="Elif Syntax">
          <GlossaryTermCard
            description="a conditional statement that is used to test a value for another condition if the if statement’s condition is not met"
            title="elif"
          />
        </GlossaryList>
      </>
    }
    lesson={lesson}
  />
);

Lesson6Summary.propTypes = {
  lesson: PropTypes.object.isRequired,
  baseRoute: PropTypes.string.isRequired,
  baseLink: PropTypes.string.isRequired,
  activeTab: PropTypes.oneOf([
    summaryTabs.SYNTAX.value,
    summaryTabs.TERMS.value,
  ]).isRequired,
};

export default Lesson6Summary;
