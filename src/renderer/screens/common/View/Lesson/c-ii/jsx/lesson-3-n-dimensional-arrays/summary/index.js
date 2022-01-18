import React from 'react';
import PropTypes from 'prop-types';
import { GlossaryList, GlossarySyntaxCard } from 'components';
import SummaryContainer from '../../../../Summary/Container';
import summaryTabs from '../../../../Summary/Container/constants/summaryTabs';

const Lesson3Summary = ({ lesson, baseRoute, baseLink, activeTab }) => (
  <SummaryContainer
    activeTab={activeTab}
    baseLink={baseLink}
    baseRoute={baseRoute}
    glossarySyntaxList={
      <>
        <GlossaryList title="2D Array">
          <GlossarySyntaxCard
            codes={['dataType arrayName[size1][size2];']}
            title="Declaration and Defining"
          />
          <GlossarySyntaxCard
            codes={['arrayName[size1][size2] = 1;']}
            title="Accessing and Defining 2D Array Elements"
          />
        </GlossaryList>

        <GlossaryList title="3D Array">
          <GlossarySyntaxCard
            codes={['dataType arrayName[size1][size2][size3];']}
            title="Declaration and Defining"
          />
          <GlossarySyntaxCard
            codes={['arrayName[size1][size2][size3] = 1;']}
            title="Accessing and Defining 3D Array Elements"
          />
        </GlossaryList>
      </>
    }
    lesson={lesson}
  />
);

Lesson3Summary.propTypes = {
  lesson: PropTypes.object.isRequired,
  baseRoute: PropTypes.string.isRequired,
  baseLink: PropTypes.string.isRequired,
  activeTab: PropTypes.oneOf([
    summaryTabs.SYNTAX.value,
    summaryTabs.TERMS.value,
  ]).isRequired,
};

export default Lesson3Summary;
