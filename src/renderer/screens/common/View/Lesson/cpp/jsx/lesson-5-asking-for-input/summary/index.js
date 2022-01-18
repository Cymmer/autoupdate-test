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
          codes={['std::cin >> variable_name;']}
          title="Single Input"
        />
        <GlossarySyntaxCard
          codes={['std::cin >> variable1 >> variable2 >> variableN;']}
          title="Multiple Inputs"
        />
      </GlossaryList>
    }
    glossaryTermsList={
      <GlossaryList title="Input Syntax">
        <GlossaryTermCard
          description="Built-in function in C++ used to prompt the user to input/type some value in the program."
          title="std::cout"
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
