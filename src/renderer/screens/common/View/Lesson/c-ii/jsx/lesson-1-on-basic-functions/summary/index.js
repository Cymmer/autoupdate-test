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
      <GlossaryList title="Declare, Define, Call">
        <GlossarySyntaxCard
          codes={['returnType functionName(parameterList);']}
          title="Declare"
        />
        <GlossarySyntaxCard
          codes={[
            `returnType functionName(dataType a, dataType b) {\n\t/* insert code here */ \n}`,
          ]}
          title="Define"
        />
        <GlossarySyntaxCard codes={[`functionName(arguments);`]} title="Call" />
      </GlossaryList>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="Declare, Define, Call">
          <GlossaryTermCard
            description="a variable naming style in which the first word of the variable name is all in lowercase, but all words after it are capitalized (like a camel’s back shape)"
            title="camelCase"
          />
        </GlossaryList>

        <GlossaryList title="Variable Scopes">
          <GlossaryTermCard
            description="also known as formal arguments, are used to determine what input variables the function is expected to accept"
            title="parameters"
          />
        </GlossaryList>
      </>
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
