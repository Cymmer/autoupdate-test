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
        <GlossaryList title="If Syntax">
          <GlossarySyntaxCard
            codes={[
              `if(condition) {\n\t// line of code to be executed if condition is true\n}`,
            ]}
            title="if()"
          />
        </GlossaryList>
        <GlossaryList
          notes={[
            'an else statement cannot function without an if statement before it.',
          ]}
          title="Else Syntax"
        >
          <GlossarySyntaxCard
            codes={[
              `if(condition) {\n\t// line of code to be executed if condition is true\n} else {\n\t// line of code to be executed if condition is false\n}`,
            ]}
            title="if() else"
          />
        </GlossaryList>
        <GlossaryList title="Else If Syntax">
          <GlossarySyntaxCard
            codes={[
              `if(condition1) {\n\t// line of code to be executed if condition1 is true\n} else if(condition2) {\n\t// line of code to be executed if condition1 is false and condition2 is true\n} else {\n\t// line of code\n}`,
            ]}
            title="if() else"
          />
        </GlossaryList>
        <GlossaryList
          notes={[
            'the switch statement’s cases must always contain a break keyword inside it to ensure that when one condition is tested true, it will stop running the code there and exit the switch statement.',
          ]}
          title="Switch Statement"
        >
          <GlossarySyntaxCard
            codes={[
              `switch(varName) {\n\tcase val1:\n\t\t// line of code\n\t\tbreak;\n\tcase val2:\n\t\t// line of code\n\t\tbreak;\n}`,
            ]}
            title="switch"
          />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="If Syntax">
          <GlossaryTermCard
            description="a conditional statement that involves only one condition to be met in order for the code inside it to be performed"
            title="if()"
          />
        </GlossaryList>
        <GlossaryList title="Else Syntax">
          <GlossaryTermCard
            description="a conditional statement that is used to perform lines of code when the condition of the preceding if() statement returns false"
            title="else"
          />
        </GlossaryList>
        <GlossaryList title="Else If Syntax">
          <GlossaryTermCard
            description="a conditional statement that is used to test a value for another condition if the if statement’s condition is not met"
            title="else if()"
          />
        </GlossaryList>
        <GlossaryList title="Switch Syntax">
          <GlossaryTermCard
            description='a special conditional statement in C that works by comparing the value to the alternative values of each "case"'
            title="switch statement"
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
