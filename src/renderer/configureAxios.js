/* eslint-disable promise/no-return-wrap */
/* eslint-disable promise/no-promise-in-callback */
import axios from 'axios';
import { actions } from './ducks/reducers/users/login';
import config from './services/config';

export const configureAxios = (store) => {
  axios.defaults.baseURL = config.API_URL;
  axios.defaults.timeout = 0;
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  // add a request interceptor to all the axios requests
  // that are going to be made in the site. The purpose
  // of this interceptor is to verify if the access token
  // is still valid and renew it if needed and possible
  axios.interceptors.request.use(
    (requestConfig) => {
      // if the current request doesn't include the config's base
      // API URL, we don't attach the access token to its authorization
      // because it means it is an API call to a 3rd party service
      if (requestConfig.baseURL !== config.API_URL) {
        return requestConfig;
      }

      // Get access token from store for every api request
      const { accessToken } = store.getState().USERS.loginReducer;
      requestConfig.headers.authorization = accessToken
        ? `Bearer ${accessToken}`
        : null;

      return requestConfig;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (requestConfig) => requestConfig,
    (error) => {
      if (error.config && error.response) {
        // Unauthorized
        if (error.response.status === 401) {
          // Get refresh token when 401 response status
          const { refreshToken } = store.getState().USERS.loginReducer;

          if (!refreshToken) {
            store.dispatch(actions.loginRestart());
            return {};
          }

          // We are certain that the access token already expired.
          // We'll check if REFRESH TOKEN has also expired.
          return fetch(`${config.API_URL}/v3/tokens/access/verify/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              token: refreshToken,
            }),
          })
            .then((res) => res.json())
            .then((tokenStatus) => {
              if (tokenStatus?.code === 'token_not_valid') {
                // if the REFRESH TOKEN has already expired as well, logout the user
                // and throw an error to exit this Promise chain
                store.dispatch(actions.loginRestart());
                throw new Error('refresh token has already expired');
              }

              // If the REFRESH TOKEN is still active, renew the ACCESS TOKEN and the REFRESH TOKEN
              return fetch(`${config.API_URL}/v3/tokens/renew/`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  refresh: refreshToken,
                }),
              });
            })
            .then((res) => res.json())
            .then(({ access, refresh }) => {
              // store the NEW ACCESS TOKEN and NEW REFRESH TOKEN to the reducer
              store.dispatch(
                actions.loginUpdate({
                  access_token: access,
                  refresh_token: refresh,
                })
              );

              // Modify the Authorization Header using the NEW ACCESS TOKEN
              error.config.headers.authorization = access;
              return axios.request(error.config);
            })
            .catch(() => Promise.reject(error));
        }
        // Maintenance
        if (
          error.response.status === 503 &&
          error.response.data.is_maintenance === true &&
          !window.location.pathname.includes('/maintenance')
        ) {
          // redirect to maintenance screen
          window.location.href = '/maintenance';
        }
      } else if (error.config && !error.response) {
        const { isConnected } = store.getState().SETTINGS.internetReducer;

        if (isConnected) {
          error.response = {
            data: 'An error occurred while sending request to server.', // TODO: Update a message into more user-friendly way.
          };
        } else {
          error.response = {
            data: 'It seems you are not connected to a network.', // TODO: Update a message into more user-friendly way.
          };
        }
      }

      return Promise.reject(error);
    }
  );
};
