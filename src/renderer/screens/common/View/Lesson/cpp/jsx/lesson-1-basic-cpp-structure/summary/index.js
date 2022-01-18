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
      <GlossaryList title="The Basic C++ Structure">
        <GlossarySyntaxCard
          codes={[
            '#include<libraryname> \n \nint main(void) { \n\t \n\treturn 0; \n}',
          ]}
          title="The basic C++ structure:"
        />
      </GlossaryList>
    }
    glossaryTermsList={
      <GlossaryList title="The Basic C++ Structure">
        <GlossaryTermCard
          description="These are 'toolboxes' which contains functions that we could use in our program. C++ has a lot of built-in header files."
          title="Header files"
        />
        <GlossaryTermCard
          description="The <b>entrypoint</b> (or the 'door') in our program."
          title="main() function"
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
