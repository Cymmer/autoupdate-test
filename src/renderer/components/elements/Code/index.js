import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  prism,
  tomorrow,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  javascript,
  java,
  c,
  cpp,
  csharp,
  python,
  asm6502,
} from 'react-syntax-highlighter/dist/esm/languages/prism';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { getIsNightMode } from '../../../ducks';

import Text from '../Text';
import textTypes from '../Text/constants/textTypes';
import codeSizes from './constants/codeSizes';
import {
  languagePropTypes,
  programmingLanguages,
} from './constants/programmingLanguages';

SyntaxHighlighter.registerLanguage(programmingLanguages.JAVASCRIPT, javascript);
SyntaxHighlighter.registerLanguage(programmingLanguages.JAVA, java);
SyntaxHighlighter.registerLanguage(programmingLanguages.C, c);
SyntaxHighlighter.registerLanguage(programmingLanguages.CPP, cpp);
SyntaxHighlighter.registerLanguage(programmingLanguages.CSHARP, csharp);
SyntaxHighlighter.registerLanguage(programmingLanguages.PYTHON, python);
SyntaxHighlighter.registerLanguage(programmingLanguages.ASSEMBLY, asm6502);

const Code = ({
  size,
  label,
  children,
  className,
  codeClassName,
  language,
  showLineNumbers,
  isNightMode,
  id,
}) => (
  <div className={className} data-test="codeDiv" id={id}>
    {label && (
      <Text
        className={styles.Code_label}
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
        data-test="label"
        element="label"
        type={size === codeSizes.SM ? textTypes.BODY.SM : textTypes.BODY.MD}
      >
        {label}
      </Text>
    )}
    <SyntaxHighlighter
      className={cn(codeClassName, styles[`Code___${size}_text`])}
      data-test="highlighter"
      language={language}
      showLineNumbers={showLineNumbers}
      style={!isNightMode ? prism : tomorrow}
    >
      {children}
    </SyntaxHighlighter>
  </div>
);

Code.defaultProps = {
  label: null,
  className: null,
  id: null,
  codeClassName: null,
  language: 'text',
  size: codeSizes.SM,
  showLineNumbers: false,
};

Code.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  codeClassName: PropTypes.string,
  language: PropTypes.oneOf(languagePropTypes.concat(['text'])),
  size: PropTypes.oneOf([codeSizes.MD, codeSizes.SM]),
  showLineNumbers: PropTypes.bool,
  isNightMode: PropTypes.bool.isRequired,
};

const mapStateToProps = (store) => ({
  isNightMode: getIsNightMode(store),
});

export default connect(mapStateToProps, null)(Code);
