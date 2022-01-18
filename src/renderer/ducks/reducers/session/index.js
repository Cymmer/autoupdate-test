import { combineReducers } from 'redux';
import playgroundReducer, {
  types as playgroundTypes,
  actions as playgroundActions,
  selectors as playgroundSelectors,
} from './playground';
import notificationReducer, {
  types as notificationTypes,
  actions as notificationActions,
  selectors as notificationSelectors,
} from './notification';
import sessionReducer, {
  types as sessionTypes,
  actions as sessionActions,
  selectors as sessionSelectors,
} from './session';

const tagsReducer = combineReducers({
  playgroundReducer,
  notificationReducer,
  sessionReducer,
});

export const types = {
  playgroundTypes,
  notificationTypes,
  sessionTypes,
};

export const actions = {
  playgroundActions,
  notificationActions,
  sessionActions,
};

export const selectors = {
  playgroundSelectors,
  notificationSelectors,
  sessionSelectors,
};

export default tagsReducer;
