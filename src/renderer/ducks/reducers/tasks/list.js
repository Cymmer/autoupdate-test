import { createAction, handleActions } from 'redux-actions';

export const types = {
  LIST_RESTART: 'TASKS/LIST_RESTART',
  LIST_SUCCESS: 'TASKS/LIST_SUCCESS',
};

export const initialState = {
  tasks: [],
};

const listReducer = handleActions(
  {
    [types.LIST_SUCCESS]: (state, { payload: { tasks } }) => ({
      ...state,
      tasks,
    }),

    [types.LIST_RESTART]: () => initialState,
  },
  initialState
);

export const actions = {
  listTasksSuccess: createAction(types.LIST_SUCCESS),
  listTasksRestart: createAction(types.LIST_RESTART),
};

export const selectors = {
  getTasks: (state) => state.listReducer.tasks,
};

export default listReducer;
