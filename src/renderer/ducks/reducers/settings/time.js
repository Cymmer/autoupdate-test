import { createAction, handleActions } from 'redux-actions';

export const types = {
  TIME_RESTART: 'SETTINGS/TIME_RESTART',
  TIME_UPDATE: 'SETTINGS/TIME_UPDATE',
};

export const initialState = {
  serverMillisecondsOffset: 0,
};

const timeReducer = handleActions(
  {
    [types.TIME_UPDATE]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),

    [types.TIME_RESTART]: () => initialState,
  },
  initialState
);

export const actions = {
  timeSettingsRestart: createAction(types.TIME_RESTART),
  timeSettingsUpdate: createAction(types.TIME_UPDATE),
};

export const selectors = {
  getServerMillisecondsOffset: (state) =>
    state.timeReducer.serverMillisecondsOffset,
};

export default timeReducer;
