import { combineReducers } from 'redux';
import listReducer, {
  types as listTypes,
  actions as listActions,
  selectors as listSelectors,
} from './list';

const programmingLanguagesReducer = combineReducers({
  listReducer,
});

export const types = {
  listTypes,
};

export const actions = {
  listActions,
};

export const selectors = {
  listSelectors,
};

export default programmingLanguagesReducer;
