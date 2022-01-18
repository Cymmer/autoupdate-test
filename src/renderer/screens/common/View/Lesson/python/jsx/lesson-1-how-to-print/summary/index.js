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
      <>
        <GlossaryList title="How To Talk">
          <GlossarySyntaxCard
            codes={[
              'print("string text")',
              "print('string text')",
              'print(number)',
            ]}
            title="print()"
          />
        </GlossaryList>
        <GlossaryList
          notes={[
            'these can be used anywhere inside the quotation marks of your print() function and can be used multiple times as well.',
          ]}
          title="When To Pause"
        >
          <GlossarySyntaxCard
            codes={['print("Hello \\t World!")']}
            title="\t"
          />
          <GlossarySyntaxCard
            codes={['print("Hello \\n World!")']}
            title="\n"
          />
          <GlossarySyntaxCard
            codes={['print("Hello \\\\ World!")']}
            title="\\"
          />
          <GlossarySyntaxCard
            codes={[`print('Hello \\'World\\'!')`]}
            title="\'"
          />
          <GlossarySyntaxCard
            codes={['print("Hello \\"World\\"!")']}
            title={`\\"`}
          />
        </GlossaryList>
        <GlossaryList title="Reading The Situation">
          <GlossarySyntaxCard
            codes={[`printf("%c" % 'letter/symbol')`]}
            title="%c"
          />
          <GlossarySyntaxCard
            codes={[`printf("%s" % 'string text')`]}
            title="%s"
          />
          <GlossarySyntaxCard codes={[`printf("%d" % integer)`]} title="%d" />
          <GlossarySyntaxCard codes={[`printf("%f" % decimal)`]} title="%f" />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="How To Talk">
          <GlossaryTermCard
            description="a built-in function in Python that allows the computer to output a certain text or number"
            title="print()"
          />
        </GlossaryList>
        <GlossaryList title="When To Pause">
          <GlossaryTermCard
            description="special characters characterized by a backslash (\) and letter or symbol beside it"
            title="escape sequences"
          />
        </GlossaryList>
        <GlossaryList title="Reading The Situation">
          <GlossaryTermCard
            description="a formatting specifier in a print() function that will be replaced by a value corresponding to its data type"
            title="placeholder"
          />
          <GlossaryTermCard
            description="a term in Python referring to a single letter (uppercase or lowercase) or a symbol (including a space character)"
            title="character"
          />
          <GlossaryTermCard
            description="a term in Python referring to a group of characters (word, sentence, etc.)"
            title="string"
          />
          <GlossaryTermCard
            description="a term in Python referring to whole numbers (positive, zero, negative)"
            title="integer"
          />
          <GlossaryTermCard
            description="a term used in Python referring to floating point values, which means numbers with decimals"
            title="float"
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
