import { postApiAction } from '../../../api/actions/apiActions';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const GET_NEW_TOKEN = 'GET_NEW_TOKEN';
export const GET_NEW_TOKEN_SUCCESS = 'GET_NEW_TOKEN_SUCCESS';
export const GET_NEW_TOKEN_FAILURE = 'GET_NEW_TOKEN_FAILURE';

export const GOT_TOKEN = 'GOT_TOKEN';

export const LOGOUT = 'LOGOUT';

export const login = (username, password) => (
  postApiAction({
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE],
    url: '/login',
    body: {
      username,
      password,
      grant_type: 'password',
      client_id: 'MyClient',
      client_secret: 'MyClient',
    },
  })
);

export const logoutAction = () => ({
  type: LOGOUT,
});
