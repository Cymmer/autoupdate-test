/* eslint-disable camelcase */
import { isTeacherFreeUser } from 'codechum-app-utils';
import moment from 'moment';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import programmingLanguagesReducer, {
  selectors as programmingLanguagesSelectors,
} from './reducers/programmingLanguages';
import sessionReducer, {
  selectors as sessionSelectors,
} from './reducers/session';
import settingsReducer, {
  selectors as settingsSelectors,
} from './reducers/settings';
import usersReducer, {
  selectors as usersSelectors,
  types as usersTypes,
} from './reducers/users';

// -----------------------------------------------------------------------------
// ROUTER NAMES
const ROUTER = 'ROUTER';
const USERS = 'USERS';
const PROGRAMMING_LANGUAGES = 'PROGRAMMING_LANGUAGES';
const SETTINGS = 'SETTINGS';
const SESSION = 'SESSION';

// -----------------------------------------------------------------------------
// REDUCER
const appReducer = combineReducers({
  [ROUTER]: routerReducer,
  [USERS]: usersReducer,
  [PROGRAMMING_LANGUAGES]: programmingLanguagesReducer,
  [SETTINGS]: settingsReducer,
  [SESSION]: sessionReducer,
});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === usersTypes.loginTypes.LOGIN_RESTART) {
    localStorage.removeItem('persist:codechum-desktop-v1');
    newState = undefined;
  }
  return appReducer(newState, action);
};
export default rootReducer;

// -----------------------------------------------------------------------------
// PUBLIC SELECTORS

// settings
export const getIsNightMode = (store) =>
  settingsSelectors.uiSelectors.getIsNightMode(store[SETTINGS]);
export const getAnswerTaskLayout = (store) =>
  settingsSelectors.uiSelectors.getAnswerTaskLayout(store[SETTINGS]);

export const getServerMillisecondsOffset = (store) =>
  settingsSelectors.timeSelectors.getServerMillisecondsOffset(store[SETTINGS]);
export const getServerDateTime = (store) =>
  moment().add(getServerMillisecondsOffset(store), 'milliseconds');

export const getIsConnected = (store) =>
  settingsSelectors.internetSelectors.getIsConnected(store[SETTINGS]);

// users
export const getUser = (store) =>
  usersSelectors.loginSelectors.getUser(store[USERS]);
export const getAccessToken = (store) =>
  usersSelectors.loginSelectors.getAccessToken(store[USERS]);
export const getRefreshToken = (store) =>
  usersSelectors.loginSelectors.getRefreshToken(store[USERS]);
export const getIsFreeUser = (store) =>
  isTeacherFreeUser(getUser(store), getServerDateTime(store));

// programming languages
export const getProgrammingLanguages = (store) =>
  programmingLanguagesSelectors.listSelectors.getProgrammingLanguages(
    store[PROGRAMMING_LANGUAGES]
  );

// session
export const getPlaygroundResult = (store) => {
  const cachedResult = sessionSelectors.playgroundSelectors.getResult(
    store[SESSION]
  );

  // if expiry date is today, do not return the cached result
  const now = getServerDateTime(store);
  if (cachedResult && now.isAfter(cachedResult.expiryDateTime)) {
    return null;
  }

  return cachedResult;
};
export const getIsExpiringStatusShown = (store) =>
  sessionSelectors.notificationSelectors.getIsExpiringStatusShown(
    store[SESSION]
  );
export const getSyncCount = (store) =>
  sessionSelectors.sessionSelectors.getSyncCount(store[SESSION]);
