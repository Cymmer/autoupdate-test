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
        <GlossaryList
          notes={[
            'in this context, str means "string" and char means "character". Both abbreviations are used in Python on other functions as well (to be discussed in the later lessons).',
          ]}
          title="How To Talk"
        >
          <GlossarySyntaxCard
            codes={['"text1" in "text2"', '"text1" in str_var']}
            title="in"
          />
          <GlossarySyntaxCard
            codes={['len("text")', 'len("str_var")']}
            title="len()"
          />
          <GlossarySyntaxCard
            codes={['"text".upper()', 'str_var.upper()']}
            title=".upper()"
          />
          <GlossarySyntaxCard
            codes={['"text".lower()', 'str_var.lower()']}
            title=".lower()"
          />
          <GlossarySyntaxCard
            codes={[
              '"text".replace("part of text", "new text")',
              'str_var.replace("part of var text", "new text")',
            ]}
            title=".replace()"
          />
          <GlossarySyntaxCard
            codes={[
              '"char joiner".join("text")',
              '"char joiner".join(str_var)',
            ]}
            title=".join()"
          />
          <GlossarySyntaxCard
            codes={['"text".strip()', 'str_var.strip()']}
            title=".strip()"
          />
          <GlossarySyntaxCard
            codes={[
              '"text".split()',
              'str_var.split()',
              '"text".split("char separator")',
              'str_var.split("char separator")',
            ]}
            title=".split()"
          />
        </GlossaryList>
        <GlossaryList
          notes={[
            'when doing negative indexing, the index number will always start with -1 and end with –(len(str_var)).',
          ]}
          title="Accessing String Elements"
        >
          <GlossarySyntaxCard
            codes={['str_var[whole int]', 'str_var[negative int]']}
            title="string indexing"
          />
          <GlossarySyntaxCard
            codes={[
              'str_var[whole int start: whole int end]',
              'str_var[negative int end: negative int start]',
            ]}
            title="string slicing"
          />
        </GlossaryList>
        <GlossaryList
          notes={[
            'when we add strings together, it will directly be combined without spaces, so if you like to have one in between the strings you want to combine, you have to type it out (e.g. " " or "text1 ").',
          ]}
          title="String Concatenation"
        >
          <GlossarySyntaxCard
            codes={[
              'var = "text1" + "text2"',
              'var = str_var1 + str_var2',
              'print("text1" + "text2")',
              'print(string_var1 + string_var2)',
            ]}
            title="string concatenation"
          />
          <GlossarySyntaxCard
            codes={[
              'var = "text" * integer',
              'var = str_var * integer',
              'print("text"*integer)',
              'print(str_var*integer)',
            ]}
            title="string multiplication"
          />
        </GlossaryList>
      </>
    }
    glossaryTermsList={
      <>
        <GlossaryList title="Basic String Functions">
          <GlossaryTermCard
            description="arrays or group of characters and/or symbols that make up a word, phrase, or a message as a whole"
            title="string"
          />
        </GlossaryList>
        <GlossaryList
          notes={[
            "a string's index position will always start with 0 and end with len(str_var)-1.",
          ]}
          title="Accessing String Elements"
        >
          <GlossaryTermCard
            description="position of a character element in a string"
            title="index position"
          />
        </GlossaryList>
        <GlossaryList
          notes={[
            'you cannot concatenate variables that are int and string using this way. You need to use some other way to convert the int variable into a string (and you can find that out on the next lessons).',
          ]}
          title="String Concatenation"
        >
          <GlossaryTermCard
            description="combining two or more strings into one whole string, using a plus sign (+), symbol for addition"
            title="string concatenation"
          />
          <GlossaryTermCard
            description="repeating a string for a number of times using an asterisk sign (*), symbol for multiplication"
            title="string multiplication"
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
