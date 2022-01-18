import checkPropTypes from 'check-prop-types';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '../configureStore';

// eslint-disable-next-line
export const checkProps = ({ propTypes, name }, expectedProps) => {
  const propsErrors = checkPropTypes(propTypes, expectedProps, 'props', name);
  return propsErrors;
};

/**
 * wraps a component with the Redux store and React Router's
 * MemoryRouter. In addition, if there's an initialization
 * function for the store passed, this initializes the store
 *
 * @param {Object} component - the component to be wrapped
 * @param {Function} initializeStore - the initialize function for the store
 * @param {String[]} initialMemoryRouterEntries - an array of initial memory router entries
 * @return {Object} the wrapped component
 */
export const wrapWithStoreAndRouter = (
  component,
  storeInitializationFunctions,
  initialMemoryRouterEntries = []
) => {
  const store = configureStore();

  if (
    storeInitializationFunctions &&
    Array.isArray(storeInitializationFunctions)
  ) {
    storeInitializationFunctions.forEach((f) => {
      store.dispatch(f());
    });
  }

  const memoryRouterProps = {};
  if (initialMemoryRouterEntries.length) {
    memoryRouterProps.initialEntries = initialMemoryRouterEntries;
  }

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MemoryRouter {...memoryRouterProps}>{component}</MemoryRouter>
      </Provider>
    </QueryClientProvider>
  );
};
