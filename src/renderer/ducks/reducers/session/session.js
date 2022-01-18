import { createAction, handleActions } from 'redux-actions';

export const types = {
  SESSION_RESTART: 'SESSION/SESSION_RESTART',
  SESSION_UPDATE: 'SESSION/SESSION_UPDATE',
};

export const initialState = {
  syncCount: 0,
};

const sessionReducer = handleActions(
  {
    [types.SESSION_UPDATE]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),

    [types.SESSION_RESTART]: () => initialState,
  },
  initialState
);

export const actions = {
  sessionRestart: createAction(types.SESSION_RESTART),
  sessionUpdate: createAction(types.SESSION_UPDATE),
};

export const selectors = {
  getSyncCount: (state) => state.sessionReducer.syncCount,
};

export default sessionReducer;
