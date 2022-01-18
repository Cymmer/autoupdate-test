import React from 'react';
import PropTypes from 'prop-types';
import { GlossaryList, GlossarySyntaxCard, GlossaryTermCard } from 'components';
import SummaryContainer from '../../../../Summary/Container';
import summaryTabs from '../../../../Summary/Container/constants/summaryTabs';

const Lesson7Summary = ({ lesson, baseRoute, baseLink, activeTab }) => (
  <SummaryContainer
    activeTab={activeTab}
    baseLink={baseLink}
    baseRoute={baseRoute}
    glossarySyntaxList={
      <>
        <GlossaryList title="While Loop">
          <GlossarySyntaxCard
            codes={[
              `while(condition) {\n\t// code to be executed repeatedly while\n\t// the condition is still true\n}`,
            ]}
            title="while()"
          />
        </GlossaryList>
        <GlossaryList title="Do...While Loop">
          <GlossarySyntaxCard
            codes={[
              `do {\n\t// code will be executed at least once and will\n\t// be executed repeatedly while the condition is still true\n} while (condition);`,
            ]}
            title="do…while()"
          />
        </GlossaryList>
        <GlossaryList title="For Loop">
          <GlossarySyntaxCard
            codes={[
              `for(initialization; condition; increment/decrement){\n\t// code to be executed repeatedly while\n\t// the condition is still true\n}`,
            ]}
            title="for"
          />
        </GlossaryList>
        <GlossaryList title="Break and Continue">
          <GlossarySyntaxCard
            codes={[
              `for(initialization; condition; increment/decrement) {\n\tif(condition) {\n\t\t// immediately terminates the loop even though\n\t\t// the condition is still true\n\t\tbreak;\n\t}\n}`,
            ]}
            title="break"
          />
          <GlossarySyntaxCard
            codes={[
              `for(initialization; condition; increment/decrement) {\n\tif(condition) {\n\t\t// if the condition is true, it will immediately\n\t\t// go to the increment/decrement section of the loop\n\t\tcontinue;\n\t}\n}`,
            ]}
            title="continue"
          />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="While Loop">
          <GlossaryTermCard
            description="a loop used to execute lines of code inside it repeatedly until the condition becomes false"
            title="while()"
          />
        </GlossaryList>
        <GlossaryList title="Do...While Loop">
          <GlossaryTermCard
            description="serve the same purpose as the while() loop, but guarantees that the code shall be executed at least once before testing the condition"
            title="do…while()"
          />
        </GlossaryList>
        <GlossaryList title="For Loop">
          <GlossaryTermCard
            description="works the same as when using a while() loop to loop through a definite number of times while incrementing inside it, but this type of loop makes that code simpler, with all of its conditions put in just one statement."
            title="for()"
          />
          <GlossaryTermCard
            description="the first part of the for loop that initializes the counter variable"
            title="initialization"
          />
          <GlossaryTermCard
            description="the second part of the for loop that sets the condition that needs to be true to continue executing the code inside the loop"
            title="condition"
          />
          <GlossaryTermCard
            description="the third part of the for loop that increments/decrements the counter variable of the loop"
            title="increment / decrement"
          />
        </GlossaryList>

        <GlossaryList title="Break and Continue">
          <GlossaryTermCard
            description="used to immediately stop a loop even if the condition is still true"
            title="break"
          />
          <GlossaryTermCard
            description="used to skip an iteration of a loop"
            title="continue"
          />
        </GlossaryList>
      </>
    }
    lesson={lesson}
  />
);

Lesson7Summary.propTypes = {
  lesson: PropTypes.object.isRequired,
  baseRoute: PropTypes.string.isRequired,
  baseLink: PropTypes.string.isRequired,
  activeTab: PropTypes.oneOf([
    summaryTabs.SYNTAX.value,
    summaryTabs.TERMS.value,
  ]).isRequired,
};

export default Lesson7Summary;
