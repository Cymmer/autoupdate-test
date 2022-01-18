import GLOBALS from 'codechum-app-globals';

export const generateInitialSourceCode = (languageId) => {
  if (languageId === GLOBALS.PROGRAMMING_LANGUAGE_IDS.JAVASCRIPT) {
    return GLOBALS.BOILERPLATES.JAVASCRIPT;
  }

  return '';
};
