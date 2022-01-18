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
        <GlossaryList title="std::cout syntax">
          <GlossarySyntaxCard
            codes={[
              '#include<iostream>\n\nint main(void) {\n\t\n\tstd::cout << "Hello";\n\tstd::cout << 5;\n\n\treturn 0;\n}',
            ]}
            title="std::cout syntax"
          />
        </GlossaryList>
        <GlossaryList title="Escape Sequences">
          <GlossarySyntaxCard
            codes={['std::cout << "Hello\\tWorld";']}
            title="\t"
          />
          <GlossarySyntaxCard
            codes={['std::cout << "Hello\\nWorld";']}
            title="\n"
          />
          <GlossarySyntaxCard
            codes={['std::cout << "Hello \\\\ World";']}
            title="\\"
          />
          <GlossarySyntaxCard
            codes={['std::cout << "\\"Hello World\\"";']}
            title='\"'
          />
        </GlossaryList>
        <GlossaryList
          description="Determines how many decimal places of a decimal number to display. Example code below formats the value <code>100.5345</code> to only 2 decimal places:"
          title="std::fixed and std::setprecision"
        >
          <GlossarySyntaxCard
            codes={[
              '#include<iostream>\n#include<iomanip>\n\nint main(void) {\n\tstd::cout << std::fixed << std::setprecision(2) << 100.5345;\n\n\treturn 0;\n}',
            ]}
            title="std::fixed and std::setprecision"
          />
        </GlossaryList>
        <GlossaryList
          description='A substitute for `\n`. Example code below prints "Hello World" in 3 different lines:'
          title="std::endl"
        >
          <GlossarySyntaxCard
            codes={[
              '#include<iostream>\n\nint main(void) {\n\tstd::cout << "Hello World" << std::endl;\n\tstd::cout << "Hello World" << std::endl;\n\tstd::cout << "Hello World" << std::endl;\n\n\treturn 0;\n}',
            ]}
            title="std::endl"
          />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="">
          <GlossaryTermCard
            description="A function from the <iostream> library that can be used to output something to the screen."
            title="std::cout"
          />
          <GlossaryTermCard
            description="Special characters characterized by a backslash (\) and letter or symbol beside it"
            title="Escape Sequences"
          />
          <GlossaryTermCard
            description='A function that changes the default formatting of the numbers that are printed to "fixed-point notation". This is usually used before <code>std::setprecision</code>'
            title="std::fixed"
          />
          <GlossaryTermCard
            description="A function from the <iomanip> library that sets the number of decimal places to be printed. This needs a single integer (whole number) value to work."
            title="std::setprecision()"
          />
          <GlossaryTermCard
            description="A substitute for \n."
            title="std::endl"
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
