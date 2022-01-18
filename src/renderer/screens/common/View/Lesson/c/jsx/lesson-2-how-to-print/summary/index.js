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
        <GlossaryList
          notes={[
            'to use input/output functions in C, like printf(), we have to include the stdio.h library, hence, we have to type in #include<stdio.h> as one of the preprocessor directives in our program.',
          ]}
          title="Print Syntax"
        >
          <GlossarySyntaxCard
            codes={['printf("string text");']}
            title="printf()"
          />
        </GlossaryList>
        <GlossaryList
          notes={[
            'these can be used anywhere inside the quotation marks of your printf() function and can be used multiple times as well.',
          ]}
          title="Escape Sequences"
        >
          <GlossarySyntaxCard
            codes={['printf("Hello\\tWorld!");']}
            title="\t"
          />
          <GlossarySyntaxCard
            codes={['printf("Hello\\nWorld!");']}
            title="\n"
          />
          <GlossarySyntaxCard
            codes={['printf("Hello\\\\World!");']}
            title="\\"
          />
          <GlossarySyntaxCard
            codes={['printf("Hello\\"World!");']}
            title='\"'
          />
        </GlossaryList>
        <GlossaryList title="Placeholders">
          <GlossarySyntaxCard
            codes={['printf("%c", ‘letter/symbol’);']}
            title="%c"
          />
          <GlossarySyntaxCard
            codes={['printf("%s", "string text");']}
            title="%s"
          />
          <GlossarySyntaxCard codes={['printf("%d", integer);']} title="%d" />
          <GlossarySyntaxCard
            codes={['printf("%ld", long integer);']}
            title="%ld"
          />
          <GlossarySyntaxCard codes={['printf("%f", float);']} title="%f" />
          <GlossarySyntaxCard
            codes={['printf("%f", double float);']}
            title="%lf"
          />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="Print Syntax">
          <GlossaryTermCard
            description="a built-in function in C that allows the computer to output a certain text or number"
            title="printf()"
          />
        </GlossaryList>
        <GlossaryList title="Escape Sequences">
          <GlossaryTermCard
            description="special characters characterized by a backslash (\) and letter or symbol beside it"
            title="escape sequences"
          />
        </GlossaryList>
        <GlossaryList title="Placeholders">
          <GlossaryTermCard
            description="a formatting specifier in a printf() function that will be replaced by a value corresponding to its data type"
            title="placeholder"
          />
          <GlossaryTermCard
            description="shortened C term for character; refers to a single letter (uppercase or lowercase) or a symbol (including white space)"
            title="char"
          />
          <GlossaryTermCard
            description="shortened C term for integer; refers to whole numbers (positive, zero, negative)"
            title="int"
          />
          <GlossaryTermCard
            description="shortened C term for floating-point values; means numbers with decimals"
            title="float"
          />
          <GlossaryTermCard
            description="means bigger numbers with bigger decimals"
            title="double"
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
