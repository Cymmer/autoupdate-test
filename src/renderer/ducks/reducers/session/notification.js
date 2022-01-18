import { createAction, handleActions } from 'redux-actions';

export const types = {
  NOTIFICATION_RESTART: 'SESSION/NOTIFICATION_RESTART',
  NOTIFICATION_UPDATE: 'SESSION/NOTIFICATION_UPDATE',
};

export const initialState = {
  isExpiringStatusShown: false,
};

const notificationReducer = handleActions(
  {
    [types.NOTIFICATION_UPDATE]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),

    [types.NOTIFICATION_RESTART]: () => initialState,
  },
  initialState
);

export const actions = {
  notificationRestart: createAction(types.NOTIFICATION_RESTART),
  notificationUpdate: createAction(types.NOTIFICATION_UPDATE),
};

export const selectors = {
  getIsExpiringStatusShown: (state) =>
    state.notificationReducer.isExpiringStatusShown,
};

export default notificationReducer;
