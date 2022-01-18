import React from 'react';
import PropTypes from 'prop-types';
import { GlossaryList, GlossaryTermCard } from 'components';
import SummaryContainer from '../../../../Summary/Container';
import summaryTabs from '../../../../Summary/Container/constants/summaryTabs';

const Lesson5Summary = ({ lesson, baseRoute, baseLink, activeTab }) => (
  <SummaryContainer
    activeTab={activeTab}
    baseLink={baseLink}
    baseRoute={baseRoute}
    glossaryTermsList={
      <>
        <GlossaryList title="Recursion Cases">
          <GlossaryTermCard
            description="the condition that terminates or stops (halting condition) the recursion e.g return 0;"
            title="base case"
          />
          <GlossaryTermCard
            description="the recursive call with a different input that progressively gets closer to the base case e.g return functionName(var-1);"
            title="recursion case"
          />
        </GlossaryList>

        <GlossaryList title="Recursion Applications">
          <GlossaryTermCard
            description="also known as an execution stack, control stack, run-time stack, or machine stack; used to keep track of the point to which each active subroutine(function) should return control when it finishes executing"
            title="call stack"
          />
        </GlossaryList>

        <GlossaryList title="Function and Header Files">
          <GlossaryTermCard
            description="used to declare function prototypes out from the main C program"
            title="header files"
          />
        </GlossaryList>
      </>
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
