import { languages } from 'prismjs/components/prism-core';
import path from 'path';
import GLOBALS from 'codechum-app-globals';

export const convertLanguageExtensionToMonacoMode = (languageExtension) => {
  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.C) {
    return 'c';
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.CPP) {
    return 'cpp';
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.CSHARP) {
    return 'csharp';
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.JAVA) {
    return 'java';
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.PYTHON) {
    return 'python';
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.JAVASCRIPT) {
    return 'javascript';
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.ASSEMBLY) {
    return null;
  }

  return languageExtension;
};

export const convertLanguageExtensionToMobileEditorMode = (
  languageExtension
) => {
  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.C) {
    return languages.c;
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.CPP) {
    return languages.cpp;
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.CSHARP) {
    return languages.csharp;
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.JAVA) {
    return languages.java;
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.PYTHON) {
    return languages.python;
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.JAVASCRIPT) {
    return languages.js;
  }

  if (languageExtension === GLOBALS.LANGUAGE_EXTENSIONS.ASSEMBLY) {
    return languages.asm6502;
  }

  return languageExtension;
};

// utility functions to make the monaco editor react package work
// https://www.npmjs.com/package/@monaco-editor/react#for-electron-users

const ensureFirstBackSlash = (str) =>
  str.length > 0 && str.charAt(0) !== '/' ? `/${str}` : str;

export const uriFromPath = (_path) => {
  const pathName = path.resolve(_path).replace(/\\/g, '/');
  return encodeURI(`file://${ensureFirstBackSlash(pathName)}`);
};
