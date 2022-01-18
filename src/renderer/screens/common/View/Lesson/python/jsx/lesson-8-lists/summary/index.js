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
        <GlossaryList title="How To Make a List">
          <GlossarySyntaxCard
            codes={[
              'listName = [value1, value2, value3]',
              'listName = []',
              'listName = list()',
              'listName = input().split',
            ]}
            title="List Declaration"
          />
        </GlossaryList>
        <GlossaryList title="List Functions">
          <GlossarySyntaxCard
            codes={[
              'listName.append(value)',
              'listName.extend([value1, value2])',
              'listName.insert(index, value)',
            ]}
            title="Adding List Elements"
          />
          <GlossarySyntaxCard
            codes={[
              'listName.remove(value)',
              'listName.pop()',
              'del listName[index]',
              'del listName',
              'listName.clear()',
            ]}
            title="Removing List Elements"
          />
          <GlossarySyntaxCard codes={['listName.sort()']} title="sort()" />
          <GlossarySyntaxCard
            codes={['listName.reverse()']}
            title="reverse()"
          />
          <GlossarySyntaxCard codes={['listName.copy()']} title="copy()" />
        </GlossaryList>
        <GlossaryList title="Loops and Lists">
          <GlossarySyntaxCard
            codes={['var = [expression for each_Element in listName]']}
            title="List Comprehension"
          />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="How To Make a List">
          <GlossaryTermCard
            description="an ordered collection of values, or an array of values, to be specific"
            title="list"
          />
        </GlossaryList>
        <GlossaryList title="Loops and Lists">
          <GlossaryTermCard
            description="a comprehensive or short-hand version of a list and loop combination when it comes to manipulating values"
            title="List comprehension"
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
