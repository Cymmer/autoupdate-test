import { createAction, handleActions } from 'redux-actions';

export const types = {
  LIST_RESTART: 'PROGRAMMING_LANGUAGES/LIST_RESTART',
  LIST_SUCCESS: 'PROGRAMMING_LANGUAGES/LIST_SUCCESS',
};

export const initialState = {
  programmingLanguages: null,
};

const listReducer = handleActions(
  {
    [types.LIST_SUCCESS]: (state, { payload: { programmingLanguages } }) => ({
      ...state,
      programmingLanguages,
    }),

    [types.LIST_RESTART]: () => initialState,
  },
  initialState
);

export const actions = {
  listProgrammingLanguagesSuccess: createAction(types.LIST_SUCCESS),
  listProgrammingLanguagesRestart: createAction(types.LIST_RESTART),
};

export const selectors = {
  getProgrammingLanguages: (state) => state.listReducer.programmingLanguages,
};

export default listReducer;
