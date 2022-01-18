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
            'the eachElement in a for loop syntax can be represented by any character, symbol, or word.',
          ]}
          title="For Loop"
        >
          <GlossarySyntaxCard
            codes={[
              `for eachElement in givenValue:\n\t# line of code`,
              `for eachElement in givenValue:\n\t# line of code\nelse:\n\t# line of code`,
              `for eachElement in range(end_int):\n\t# line of code`,
              `for eachElement in range(start_int, end_int):\n\t# line of code`,
              `for eachElement in range(start_int, end_int, incrementor int):\n\t# line of code`,
            ]}
            title="for"
          />
        </GlossaryList>
        <GlossaryList
          notes={[
            'the value that we would test inside a while loop’s condition must be declared and initialized first to a random value (that will not falsify the condition first) to avoid error.',
          ]}
          title="While Loop"
        >
          <GlossarySyntaxCard
            codes={[
              `while condition:\n\t# line of code`,
              `while condition:\n\t# line of code\nelse:\n\t# line of code`,
            ]}
            title="while"
          />
        </GlossaryList>
        <GlossaryList title="Break and Continue">
          <GlossarySyntaxCard
            codes={[
              `for eachElement in givenValue:\n\tif condition:\n\t\tbreak`,
              `while condition:\n\tif condition:\n\t\tbreak`,
            ]}
            title="break"
          />
          <GlossarySyntaxCard
            codes={[
              `for eachElement in givenValue:\n\tif condition:\n\t\tcontinue`,
              `while condition:\n\tif condition:\n\t\tcontinue`,
            ]}
            title="continue"
          />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="For Loop">
          <GlossaryTermCard
            description="a function that allows certain steps to be done repeatedly until a certain condition is no longer met, or until a given sequence of numbers is finished"
            title="loops"
          />
          <GlossaryTermCard
            description="a loop that repeats a given set of code until a sequence of numbers is finished"
            title="for"
          />
        </GlossaryList>
        <GlossaryList title="While Loop">
          <GlossaryTermCard
            description="a loop used to execute lines of code inside it repeatedly until the condition becomes false"
            title="while"
          />
        </GlossaryList>
        <GlossaryList title="Break and Continue">
          <GlossaryTermCard
            description="used to stop a loop when it encounters a value that makes the condition false"
            title="break"
          />
          <GlossaryTermCard
            description="used when we just want to ignore or skip the value when it makes the condition false and then go on with the loop until it ends"
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
