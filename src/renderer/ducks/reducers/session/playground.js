import { createAction, handleActions } from 'redux-actions';
import moment from 'moment';

export const types = {
  PLAYGROUND_UPDATE: 'SESSION/PLAYGROUND_UPDATE',
  PLAYGROUND_RESTART: 'SESSION/PLAYGROUND_RESTART',
};

export const initialState = {
  result: null,
};

const playgroundReducer = handleActions(
  {
    [types.PLAYGROUND_UPDATE]: (state, { payload: { result } }) => ({
      ...state,
      result: result
        ? {
            ...result,
            expiryDateTime: moment().add(1, 'days'),
          }
        : state.result,
    }),

    [types.PLAYGROUND_RESTART]: () => initialState,
  },
  initialState
);

export const actions = {
  playgroundUpdate: createAction(types.PLAYGROUND_UPDATE),
  playgroundRestart: createAction(types.PLAYGROUND_RESTART),
};

export const selectors = {
  getResult: (state) => state.playgroundReducer.result,
};

export default playgroundReducer;
