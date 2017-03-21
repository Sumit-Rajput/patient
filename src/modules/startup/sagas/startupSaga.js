/* global localStorage:true*/
/* eslint no-undef: "error"*/
import { put } from 'redux-saga/effects';
import {
  ACCESS_TOKEN_STORAGE_KEY,
  REFRESH_TOKEN_STORAGE_KEY,
  TOKEN_EXPIRY,
} from '../../../constants/constants';
import { LOGIN_SUCCESS } from '../../authentication/actions/loginAction';

/* eslint-disable camelcase*/
function* startup() {
  const access_token = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
  const refresh_token = localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);
  const expires_in = localStorage.getItem(TOKEN_EXPIRY);

  if (access_token) {
    yield put({ type: LOGIN_SUCCESS, data: { access_token, refresh_token, expires_in } });
  }
}
/* eslint-enable camelcase*/

export default startup;
