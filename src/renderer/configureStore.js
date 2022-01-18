import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage';
import rootReducer from './ducks/index';

export const configureStore = () => {
  // create middlewares
  const history = createHashHistory();

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = applyMiddleware(routerMiddleware(history));

  // create a persist version of the reducer
  const persistConfig = {
    key: 'codechum-desktop',
    storage,
    stateReconciler: hardSet,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  // create store
  const store = createStore(persistedReducer, composeEnhancers(middleware));

  return store;
};
