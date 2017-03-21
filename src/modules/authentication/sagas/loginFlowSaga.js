/* global localStorage:true*/
/* eslint no-undef: "error"*/
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_SUCCESS, LOGOUT, GET_NEW_TOKEN_SUCCESS } from '../actions/loginAction';
import { pushPath } from '../../../routes/actions/routeActions';
import { TIMELINE_ROUTE, LOGIN_ROUTE } from '../../../constants/Routes';
import { setToken } from '../../../api/apiInterface';
import {
  ACCESS_TOKEN_STORAGE_KEY,
  REFRESH_TOKEN_STORAGE_KEY,
  TOKEN_EXPIRY,
} from '../../../constants/constants';

const setDataToLocalStorage = ({ access_token, refresh_token, expires_in }) => {
  localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, access_token);
  localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, refresh_token);
  localStorage.setItem(TOKEN_EXPIRY, expires_in);
};

const removeDataFromLocalStorage = () => {
  localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
  localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
  localStorage.removeItem(TOKEN_EXPIRY);
};

export function* loginSuccess(action) {
  yield call(setDataToLocalStorage, action.data);
  yield call(setToken, action.data);
  yield put(pushPath(TIMELINE_ROUTE));
}

export function* refreshTokenSuccess(action) {
  yield call(setDataToLocalStorage, action.data);
  yield call(setToken, action.data);
}

export function* logout() {
  yield call(removeDataFromLocalStorage);
  yield call(setToken, {});

  yield put(pushPath(LOGIN_ROUTE));
}

export function* watchLogin() {
  yield takeEvery(LOGIN_SUCCESS, loginSuccess);
}

export function* watchRefreshToken() {
  yield takeEvery(GET_NEW_TOKEN_SUCCESS, loginSuccess);
}

export function* watchLogout() {
  yield takeEvery(LOGOUT, logout);
}
