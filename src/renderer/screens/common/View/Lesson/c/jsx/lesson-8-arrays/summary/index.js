import React from 'react';
import PropTypes from 'prop-types';
import { GlossaryList, GlossarySyntaxCard, GlossaryTermCard } from 'components';
import SummaryContainer from '../../../../Summary/Container';
import summaryTabs from '../../../../Summary/Container/constants/summaryTabs';

const Lesson8Summary = ({ lesson, baseRoute, baseLink, activeTab }) => (
  <SummaryContainer
    activeTab={activeTab}
    baseLink={baseLink}
    baseRoute={baseRoute}
    glossarySyntaxList={
      <>
        <GlossaryList title="Ways to Make an Array">
          <GlossarySyntaxCard
            codes={[
              'data_type arrayName[size];',
              'data_type arrayName[size] = {val1, val2, val3};',
            ]}
            title="Array Declaration"
          />
        </GlossaryList>
        <GlossaryList title="Accessing Array Elements via Indices">
          <GlossarySyntaxCard
            codes={[
              'arrName[index_position];',
              'arrName[index_position] = value;',
            ]}
            title="Array Indexing"
          />
        </GlossaryList>
        <GlossaryList title="Traversing the Array">
          <GlossarySyntaxCard
            codes={[
              `for(int i = 0; i < size; i++) {\n\tscanf("%d", &arr[i]);\n}`,
            ]}
            title="Scanning Multiple Elements to an Array"
          />
          <GlossarySyntaxCard
            codes={[
              `for(int i = 0; i < size; i++) {\n\tprintf("%d", arr[i]);\n}`,
            ]}
            title="Printing Multiple Elements of an Array"
          />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="Ways to Make an Array">
          <GlossaryTermCard
            description="an ordered collection of values having the same data type"
            title="array"
          />
        </GlossaryList>
        <GlossaryList
          notes={[
            'a string’s index position will always start with 0 and end with len(str_var)-1.',
          ]}
          title="Accessing Array Elements via Indices"
        >
          <GlossaryTermCard
            description="position of a character element in a string "
            title="index position"
          />
        </GlossaryList>
      </>
    }
    lesson={lesson}
  />
);

Lesson8Summary.propTypes = {
  lesson: PropTypes.object.isRequired,
  baseRoute: PropTypes.string.isRequired,
  baseLink: PropTypes.string.isRequired,
  activeTab: PropTypes.oneOf([
    summaryTabs.SYNTAX.value,
    summaryTabs.TERMS.value,
  ]).isRequired,
};

export default Lesson8Summary;
