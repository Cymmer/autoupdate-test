import { combineReducers } from 'redux';
import loginReducer, {
  actions as loginActions,
  selectors as loginSelectors,
  types as loginTypes,
} from './login';

const usersReducer = combineReducers({
  loginReducer,
});

export const types = {
  loginTypes,
};

export const actions = {
  loginActions,
};

export const selectors = {
  loginSelectors,
};

export default usersReducer;
