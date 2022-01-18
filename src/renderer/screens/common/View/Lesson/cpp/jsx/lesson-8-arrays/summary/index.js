import React from 'react';
import PropTypes from 'prop-types';
import { GlossaryList, GlossarySyntaxCard, GlossaryTermCard } from 'components';
import { programmingLanguages } from 'components/elements/constants';
import SummaryContainer from '../../../../Summary/Container';
import summaryTabs from '../../../../Summary/Container/constants/summaryTabs';

const Lesson8Summary = ({ lesson, baseRoute, baseLink, activeTab }) => (
  <SummaryContainer
    activeTab={activeTab}
    baseLink={baseLink}
    baseRoute={baseRoute}
    glossarySyntaxList={
      <>
        <GlossaryList title="How to Make an Array">
          <GlossarySyntaxCard
            codes={[`data_type arrayName[size];`]}
            title="Array Declaration (without initialization)"
          />
          <GlossarySyntaxCard
            codes={[
              `int arrayName[3] = {1, 2, 3};\nchar arrayName[3] = {'a', 'b', 'c'};\nbool arrayName[3] = {true, false, true};`,
            ]}
            language={programmingLanguages.CPP}
            title="Array Declaration (with initialization)"
          />
          <GlossarySyntaxCard
            codes={[
              `// method 1\nchar word1[5] = {'C', 'o', 'd', 'y', '\\0'};\n\n// method 2\nchar word2[5] = "Cody";\n\n// method 3\n#include<string>\n\nstd::string word3 = "Cody";`,
            ]}
            language={programmingLanguages.CPP}
            title="Strings"
          />
          <GlossarySyntaxCard
            codes={[
              `std::string str1 = "Hello";\nstd::string str2 = "World";\n\n// get length of string\nint lengthOfStr1 = str1.length();\n\n// check if string is empty\nbool isEmpty = str2.empty();\n\n// compare two strings\nint result = str1.compare(str2);\n\n// take string user inputs with spaces\nstd::getline(std::cin, str1);`,
            ]}
            language={programmingLanguages.CPP}
            title="String Library Functions"
          />
        </GlossaryList>
        <GlossaryList title="An Array Element">
          <GlossarySyntaxCard
            codes={[`arrName[index_position];`]}
            title="Accessing an Element"
          />
          <GlossarySyntaxCard
            codes={[`arrName[index_position] = some_value;`]}
            title="Setting an Element"
          />
        </GlossaryList>
        <GlossaryList title="Traversing the Array">
          <GlossarySyntaxCard
            codes={[
              `for(int i = 0; i < size_of_array; i++) {\n\tstd::cin >> arr[i];\n}`,
            ]}
            language={programmingLanguages.CPP}
            title="Adding Items to the Array"
          />
          <GlossarySyntaxCard
            codes={[
              `for(int i = 0; i < size_of_array; i++) {\n\tarr[i] = new_value;\n}`,
            ]}
            language={programmingLanguages.CPP}
            title="Array Manipulation via Loops"
          />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="How to Make an Array">
          <GlossaryTermCard
            description="an ordered collection of values having the same data type"
            title="array"
          />
          <GlossaryTermCard
            description="a sequence of characters"
            title="string"
          />
          <GlossaryTermCard
            description="contains functions that are related to strings"
            title="string library"
          />
        </GlossaryList>
        <GlossaryList title="An Array Element">
          <GlossaryTermCard
            description="are the corresponding positions of the elements of an array (starts at 0 and ends at array_size - 1)"
            title="indices (index for singular)"
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
