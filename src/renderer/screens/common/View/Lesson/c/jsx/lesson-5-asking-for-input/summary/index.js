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
      <GlossaryList title="Input Syntax">
        <GlossarySyntaxCard
          codes={['scanf("placeholder", &variableName);']}
          title="input()"
        />
      </GlossaryList>
    }
    glossaryTermsList={
      <GlossaryList title="Input Syntax">
        <GlossaryTermCard
          description="built-in function in C used to prompt the user to type some value in the program"
          title="scanf()"
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
