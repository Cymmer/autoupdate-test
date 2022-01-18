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
        <GlossaryList
          notes={[
            "the value that we would test inside a while loop’s condition must be declared and initialized first to a value that will not falsify the condition first so the loop's body will be executed at least once",
          ]}
          title="While Loop"
        >
          <GlossarySyntaxCard
            codes={[
              `while(condition) {\n\t// line of code to be executed repeatedly while condition is true\n}`,
            ]}
            title="while()"
          />
        </GlossaryList>
        <GlossaryList title="Do...While Loop">
          <GlossarySyntaxCard
            codes={[
              `do {\n\t// line of code to be executed repeatedly while condition is true\n} while(condition);`,
            ]}
            title="do…while()"
          />
        </GlossaryList>
        <GlossaryList title="For Loop">
          <GlossarySyntaxCard
            codes={[
              `for(initialization; condition; incrementor/decrementor) {\n\t// to be executed repeatedly while condition is true\n}`,
            ]}
            title="for"
          />
        </GlossaryList>
        <GlossaryList title="Break and Continue">
          <GlossarySyntaxCard
            codes={[
              `for(initialization; condition; incrementor/decrementor) {\n\tif(condition) {\n\t\tbreak;\n\t}\n}`,
            ]}
            title="break"
          />
          <GlossarySyntaxCard
            codes={[
              `for(initialization; condition; incrementor/decrementor) {\n\tif(condition) {\n\t\tcontinue;\n\t}\n}`,
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
            description="a pre-checked loop used to execute lines of code inside it repeatedly until the condition becomes false"
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
            description="closely similar to the while() loop except that all of its parts (initialization, condition, and incrementor/decrementor) are placed in a one statement"
            title="for()"
          />
        </GlossaryList>
        <GlossaryList title="Break and Continue">
          <GlossaryTermCard
            description="used to stop a loop immediately even though the condition of the loop is still true"
            title="break"
          />
          <GlossaryTermCard
            description="used when we just want to ignore or skip an iteration and then go on with the loop until it ends"
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
