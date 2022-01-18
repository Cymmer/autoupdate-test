/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

import { configureAxios } from './configureAxios';
import { configureStore } from './configureStore';
import './scss/normalize.global.scss';


const store = configureStore();
configureAxios(store);

const queryClient = new QueryClient();

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </PersistGate>
  </Provider>,

  document.getElementById('root')
);
