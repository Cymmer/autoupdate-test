import React from 'react';
import PropTypes from 'prop-types';
import { GlossaryList, GlossarySyntaxCard, GlossaryTermCard } from 'components';
import SummaryContainer from '../../../../Summary/Container';
import summaryTabs from '../../../../Summary/Container/constants/summaryTabs';

const Lesson4Summary = ({ lesson, baseRoute, baseLink, activeTab }) => (
  <SummaryContainer
    activeTab={activeTab}
    baseLink={baseLink}
    baseRoute={baseRoute}
    glossarySyntaxList={
      <GlossaryList title="Intro to Pointers">
        <GlossarySyntaxCard
          codes={['dataType *variableName;', 'dataType *variableName = &var;']}
          title="Declaration and Defining Pointers"
        />
        <GlossarySyntaxCard
          codes={['printf("%p", &var);', 'printf("%p", ptr);']}
          title="%p"
        />
      </GlossaryList>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="Intro to Pointers">
          <GlossaryTermCard
            description="used to indicate pointer variables"
            title="Asterisk (*)"
          />
          <GlossaryTermCard
            description="used to refer to a variable’s address (e.g. &var refers to the address of var)"
            title="Ampersand (&)"
          />
          <GlossaryTermCard
            description="placeholder for pointer variables"
            title="%p"
          />
          <GlossaryTermCard
            description="means empty and is only usable in pointers; int *var = NULL means that the pointer var does not point anywhere"
            title="NULL"
          />
        </GlossaryList>

        <GlossaryList title="More on Pointers">
          <GlossaryTermCard
            description="a number system made up of 16 symbols (base 16); starts with 0-9 and then A-F"
            title="hexadecimal"
          />
        </GlossaryList>
      </>
    }
    lesson={lesson}
  />
);

Lesson4Summary.propTypes = {
  lesson: PropTypes.object.isRequired,
  baseRoute: PropTypes.string.isRequired,
  baseLink: PropTypes.string.isRequired,
  activeTab: PropTypes.oneOf([
    summaryTabs.SYNTAX.value,
    summaryTabs.TERMS.value,
  ]).isRequired,
};

export default Lesson4Summary;
