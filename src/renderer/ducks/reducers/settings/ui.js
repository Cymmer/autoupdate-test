import { createAction, handleActions } from 'redux-actions';
import GLOBALS from 'codechum-app-globals';

export const types = {
  UI_RESTART: 'SETTINGS/UI_RESTART',
  UI_UPDATE: 'SETTINGS/UI_UPDATE',
};

export const initialState = {
  isNightMode: false,
  answerTaskLayout: GLOBALS?.ANSWER_TASK_LAYOUTS?.SIDE_BY_SIDE,
};

const uiReducer = handleActions(
  {
    [types.UI_UPDATE]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),

    [types.UI_RESTART]: () => initialState,
  },
  initialState
);

export const actions = {
  uiSettingsRestart: createAction(types.UI_RESTART),
  uiSettingsUpdate: createAction(types.UI_UPDATE),
};

export const selectors = {
  getIsNightMode: (state) => state.uiReducer.isNightMode,
  getAnswerTaskLayout: (state) => state.uiReducer.answerTaskLayout,
};

export default uiReducer;
