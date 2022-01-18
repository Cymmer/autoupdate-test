import React from 'react';
import PropTypes from 'prop-types';
import { GlossaryList, GlossarySyntaxCard, GlossaryTermCard } from 'components';
import SummaryContainer from '../../../../Summary/Container';
import summaryTabs from '../../../../Summary/Container/constants/summaryTabs';

const Lesson6Summary = ({ lesson, baseRoute, baseLink, activeTab }) => (
  <SummaryContainer
    activeTab={activeTab}
    baseLink={baseLink}
    baseRoute={baseRoute}
    glossarySyntaxList={
      <>
        <GlossaryList title="Creating Datatypes">
          <GlossarySyntaxCard
            codes={[`typedef struct {\n\t//insert code here\n} structName;`]}
            title="struct Syntax"
          />
          <GlossarySyntaxCard
            codes={[`structName var;`]}
            title="struct Varaiable Declaration"
          />
          <GlossarySyntaxCard
            codes={[
              `// refers to the value of the component x of the the variable var\nvar.x`,
            ]}
            title="Accessing dataType Components"
          />
          <GlossarySyntaxCard
            codes={[`var.component1 = value;`]}
            title="Defining Components"
          />
        </GlossaryList>

        <GlossaryList title="Applying enums">
          <GlossarySyntaxCard
            codes={[
              `typedef enum {content1, content2,..., contentN} enumName;`,
            ]}
            title="enum Syntax"
          />
          <GlossarySyntaxCard
            codes={[`enumName var;`]}
            title="enum Varaiable Declaration"
          />
          <GlossarySyntaxCard
            codes={[`var = content1;`]}
            title="enum Varaiable Initialization"
          />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="The struct Datatype">
          <GlossaryTermCard
            description="keyword that enables the creation of user-defined types"
            title="struct"
          />
        </GlossaryList>

        <GlossaryList title="The enum Datatype">
          <GlossaryTermCard
            description="used to assign “names” to constant values through an enum datatype"
            title="enum"
          />
        </GlossaryList>
      </>
    }
    lesson={lesson}
  />
);

Lesson6Summary.propTypes = {
  lesson: PropTypes.object.isRequired,
  baseRoute: PropTypes.string.isRequired,
  baseLink: PropTypes.string.isRequired,
  activeTab: PropTypes.oneOf([
    summaryTabs.SYNTAX.value,
    summaryTabs.TERMS.value,
  ]).isRequired,
};

export default Lesson6Summary;
