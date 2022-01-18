import { createAction, handleActions } from 'redux-actions';

export const types = {
  INTERNET_RESTART: 'SETTINGS/INTERNET_RESTART',
  INTERNET_UPDATE: 'SETTINGS/INTERNET_UPDATE',
};

export const initialState = {
  isConnected: true,
};

const internetReducer = handleActions(
  {
    [types.INTERNET_UPDATE]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),

    [types.INTERNET_RESTART]: () => initialState,
  },
  initialState
);

export const actions = {
  internetSettingsRestart: createAction(types.INTERNET_RESTART),
  internetSettingsUpdate: createAction(types.INTERNET_UPDATE),
};

export const selectors = {
  getIsConnected: (state) => state.internetReducer.isConnected,
};

export default internetReducer;
