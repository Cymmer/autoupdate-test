import { combineReducers } from 'redux';
import internetReducer, {
  actions as internetActions,
  selectors as internetSelectors,
  types as internetTypes,
} from './internet';
import timeReducer, {
  actions as timeActions,
  selectors as timeSelectors,
  types as timeTypes,
} from './time';
import uiReducer, {
  actions as uiActions,
  selectors as uiSelectors,
  types as uiTypes,
} from './ui';

const settingsReducer = combineReducers({
  uiReducer,
  timeReducer,
  internetReducer,
});

export const types = {
  uiTypes,
  timeTypes,
  internetTypes,
};

export const actions = {
  uiActions,
  timeActions,
  internetActions,
};

export const selectors = {
  uiSelectors,
  timeSelectors,
  internetSelectors,
};

export default settingsReducer;
