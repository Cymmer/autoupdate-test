import React from 'react';
import PropTypes from 'prop-types';
import { GlossaryList, GlossarySyntaxCard, GlossaryTermCard } from 'components';
import SummaryContainer from '../../../../Summary/Container';
import summaryTabs from '../../../../Summary/Container/constants/summaryTabs';

const Lesson3Summary = ({ lesson, baseRoute, baseLink, activeTab }) => (
  <SummaryContainer
    activeTab={activeTab}
    baseLink={baseLink}
    baseRoute={baseRoute}
    glossarySyntaxList={
      <>
        <GlossaryList title="Variable Declaration">
          <GlossarySyntaxCard
            codes={['data_type varName;', 'data_type varName = value;']}
            title="variable declaration"
          />
          <GlossarySyntaxCard
            codes={['// single-line comments', '/* multi-line comments */']}
            title="C comments"
          />
          <GlossarySyntaxCard
            codes={['const VARNAME = value;', '#define VARNAME value']}
            title="constants"
          />
        </GlossaryList>
        <GlossaryList
          notes={[
            'these are merely variable naming styles that you can use in C. However, when you choose a naming style, remember to always stick to that style and maintain naming consistency!',
          ]}
          title="Naming Conventions"
        >
          <GlossarySyntaxCard
            codes={['data_type varnamenumber1 = value;']}
            title="Flat Case"
          />
          <GlossarySyntaxCard
            codes={['data_type varNameNumber1 = value;']}
            title="Camel Case"
          />
          <GlossarySyntaxCard
            codes={['data_type VarNameNumber1 = value;']}
            title="Pascal Case"
          />
          <GlossarySyntaxCard
            codes={['data_type var_name_number_1 = value;']}
            title="Snake Case"
          />
          <GlossarySyntaxCard
            codes={['data_type VAR_NAME_NUMBER_1 = value;']}
            title="Macro Case"
          />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="Variable Declaration">
          <GlossaryTermCard
            description="objects/containers in C that are used to store values"
            title="variable"
          />
          <GlossaryTermCard
            description="refer to the single equal sign (=) which is used to assign a value to a variable"
            title="assignment operator"
          />
        </GlossaryList>
        <GlossaryList title="Naming Conventions">
          <GlossaryTermCard
            description="a variable naming style in which all words in the name are in lowercase but is directly connected"
            title="Flat Case"
          />
          <GlossaryTermCard
            description="a variable naming style in which the first word of the variable name is all in lowercase, but all words after it are capitalized (like a camel’s back shape)"
            title="Camel Case"
          />
          <GlossaryTermCard
            description="a variable naming style in which all words in a variable name all capitalized and directly connected"
            title="Pascal Case"
          />
          <GlossaryTermCard
            description="a variable naming style in which all words in a variable name are in lowercase but connected by an underscore (_)"
            title="Snake Case"
          />
          <GlossaryTermCard
            description="a variable naming style in which all words in a variable name are in uppercase and connected by an underscore (_)"
            title="Macro Case"
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
