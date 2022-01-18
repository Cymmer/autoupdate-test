import React from 'react';
import PropTypes from 'prop-types';
import { GlossaryList, GlossarySyntaxCard, GlossaryTermCard } from 'components';
import SummaryContainer from '../../../../Summary/Container';
import summaryTabs from '../../../../Summary/Container/constants/summaryTabs';

const Lesson1Summary = ({ lesson, baseRoute, baseLink, activeTab }) => (
  <SummaryContainer
    activeTab={activeTab}
    baseLink={baseLink}
    baseRoute={baseRoute}
    glossarySyntaxList={
      <GlossaryList title="The C Structure">
        <GlossarySyntaxCard
          codes={[`#include<stdio.h>\n\nint main(void) {\n\treturn 0;\n}`]}
          title="Basic main() program"
        />
      </GlossaryList>
    }
    glossaryTermsList={
      <GlossaryList title="The C Structure">
        <GlossaryTermCard
          description="the main part of code that is called by the compiler to execute the program"
          title="main() function"
        />
        <GlossaryTermCard
          description="returns the exit status of the program. 0 usually means, success"
          title="return 0;"
        />
        <GlossaryTermCard
          description="contains built-in functions that we can use in making our own programs"
          title="library"
        />
      </GlossaryList>
    }
    lesson={lesson}
  />
);

Lesson1Summary.propTypes = {
  lesson: PropTypes.object.isRequired,
  baseRoute: PropTypes.string.isRequired,
  baseLink: PropTypes.string.isRequired,
  activeTab: PropTypes.oneOf([
    summaryTabs.SYNTAX.value,
    summaryTabs.TERMS.value,
  ]).isRequired,
};

export default Lesson1Summary;
