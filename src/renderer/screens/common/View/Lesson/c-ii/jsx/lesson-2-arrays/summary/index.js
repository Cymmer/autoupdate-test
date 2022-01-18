import React from 'react';
import PropTypes from 'prop-types';
import { GlossaryList, GlossarySyntaxCard, GlossaryTermCard } from 'components';
import SummaryContainer from '../../../../Summary/Container';
import summaryTabs from '../../../../Summary/Container/constants/summaryTabs';

const Lesson2Summary = ({ lesson, baseRoute, baseLink, activeTab }) => (
  <SummaryContainer
    activeTab={activeTab}
    baseLink={baseLink}
    baseRoute={baseRoute}
    glossarySyntaxList={
      <>
        <GlossaryList title="Defining Arrays">
          <GlossarySyntaxCard
            codes={[
              'dataType arrayName[size];',
              'dataType arrayName[size] = {element1,element2,...,element(size-1)};',
            ]}
            title="Declaring and Defining"
          />
          <GlossarySyntaxCard
            codes={['arrayName[n]', 'arrayName[n] = 1;']}
            title="Accessing and Defining Array Elements"
          />
        </GlossaryList>

        <GlossaryList title="Strings">
          <GlossarySyntaxCard
            codes={['char arrayName[size]']}
            title="Declaring a String"
          />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="Defining Arrays">
          <GlossaryTermCard
            description="the location of an element in an array; array indices start from 0 to (arraySize-1), so an array with size 10 will have indexes from 0 to 9"
            title="array index"
          />
        </GlossaryList>

        <GlossaryList title="Strings">
          <GlossaryTermCard description="placeholder for strings" title="%s" />
          <GlossaryTermCard
            description="header file for string related functions like strlen() and strcmp()"
            title="string.h"
          />
        </GlossaryList>
      </>
    }
    lesson={lesson}
  />
);

Lesson2Summary.propTypes = {
  lesson: PropTypes.object.isRequired,
  baseRoute: PropTypes.string.isRequired,
  baseLink: PropTypes.string.isRequired,
  activeTab: PropTypes.oneOf([
    summaryTabs.SYNTAX.value,
    summaryTabs.TERMS.value,
  ]).isRequired,
};

export default Lesson2Summary;
