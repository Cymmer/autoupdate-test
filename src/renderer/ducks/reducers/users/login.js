import { createAction, handleActions } from 'redux-actions';

export const types = {
  LOGIN_UPDATE: 'USERS/LOGIN_UPDATE',
  LOGIN_RESTART: 'USERS/LOGIN_RESTART',
};

export const initialState = {
  user: {},
  accessToken: null,
  refreshToken: null,
};

const loginReducer = handleActions(
  {
    [types.LOGIN_UPDATE]: (
      state,
      {
        payload: {
          user,
          access_token: accessToken,
          refresh_token: refreshToken,
        },
      }
    ) => ({
      ...state,
      user: user || state.user,
      accessToken: accessToken || state.accessToken,
      refreshToken: refreshToken || state.refreshToken,
    }),

    [types.LOGIN_RESTART]: () => initialState,
  },
  initialState
);

export const actions = {
  loginUpdate: createAction(types.LOGIN_UPDATE),
  loginRestart: createAction(types.LOGIN_RESTART),
};

export const selectors = {
  getUser: (state) => state.loginReducer.user,
  getAccessToken: (state) => state.loginReducer.accessToken,
  getRefreshToken: (state) => state.loginReducer.refreshToken,
};

export default loginReducer;
