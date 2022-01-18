/**
 * Programming Languages / Syntaxes that are accepted by the
 * react-syntax-highlighter
 *
 * Check here for full list: https://conorhastings.github.io/react-syntax-highlighter/AVAILABLE_LANGUAGES_PRISM.html
 */

import GLOBALS from 'codechum-app-globals';

export const programmingLanguages = {
  ASSEMBLY: 'asm6502',
  BASH: 'bash',
  BASIC: 'basic',
  BATCH: 'batch',
  C: 'c',
  COFFEESCRIPT: 'coffeescript',
  CPP: 'cpp',
  CSHARP: 'csharp',
  CSP: 'csp',
  CSS: 'css',
  D: 'd',
  DART: 'dart',
  DJANGO: 'django',
  DOCKER: 'docker',
  ELIXIR: 'elixir',
  ELM: 'elm',
  GRAPHQL: 'graphql',
  HTTP: 'http',
  IO: 'io',
  JAVA: 'java',
  JAVASCRIPT: 'javascript',
  JSON: 'json',
  JSX: 'jsx',
  KOTLIN: 'kotlin',
  LESS: 'less',
  MARKDOWN: 'markdown',
  PERL: 'perl',
  PHP: 'php',
  POWERSHELL: 'powershell',
  PYTHON: 'python',
  R: 'r',
  SASS: 'sass',
  SCSS: 'scss',
  SQL: 'sql',
  TYPESCRIPT: 'typescript',
  VBNET: 'vbnet',
  VISUALBASIC: 'visualBasic',
};

export const languagePropTypes =
  Object.values(programmingLanguages).concat(null);

export const getSyntaxHighlighterLanguageFromExtension = (
  languageExtension
) => {
  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.C) {
    return programmingLanguages.C;
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.CSHARP) {
    return programmingLanguages.CSHARP;
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.CPP) {
    return programmingLanguages.CPP;
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.JAVA) {
    return programmingLanguages.JAVA;
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.PYTHON) {
    return programmingLanguages.PYTHON;
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.JAVASCRIPT) {
    return programmingLanguages.JAVASCRIPT;
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.ASSEMBLY) {
    return programmingLanguages.ASSEMBLY;
  }

  return 'text';
};

export default programmingLanguages;
