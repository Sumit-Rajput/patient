import { call, put, takeEvery } from 'redux-saga/effects';
import {
  getCall,
  postCall,
  deleteCall,
  shouldGetNewAccessToken,
  getRefreshToken,
} from '../apiInterface';
import { GET_API_ACTION, POST_API_ACTION, DELETE_API_ACTION } from '../actions/apiActions';
import { startLoaderAction, stopLoaderAction } from '../actions/loaderActions';
import { GET_NEW_TOKEN_SUCCESS } from '../../modules/authentication/actions/loginAction';

function* manageResponse(action, response) {
  if (response.error) {
    yield put({ type: action.types[2], data: response });
  } else {
    yield put({ type: action.types[1], data: response });
  }
}

function* checkRefreshToken() {
  const shouldGetNewToken = yield call(shouldGetNewAccessToken);

  if (shouldGetNewToken) {
    const requestBody = {
      refresh_token: getRefreshToken(),
      grant_type: 'refresh_token',
      client_id: 'MyClient',
      client_secret: 'MyClient',
    };
    const response = yield call(postCall, '/login', requestBody);

    yield put({ type: GET_NEW_TOKEN_SUCCESS, data: response });
  }
}

function* getApi(action) {
  yield call(checkRefreshToken);
  yield put(startLoaderAction());
  yield put({ type: action.types[0] });
  const response = yield call(getCall, action.url, action.body);
  yield call(manageResponse, action, response);
  yield put(stopLoaderAction());
}

function* postApi(action) {
  yield call(checkRefreshToken);
  yield put(startLoaderAction());
  yield put({ type: action.types[0] });
  const response = yield call(postCall, action.url, action.body);
  yield call(manageResponse, action, response);
  yield put(stopLoaderAction());
}

function* deleteApi(action) {
  yield call(checkRefreshToken);
  yield put(startLoaderAction());
  yield put({ type: action.types[0] });
  const response = yield call(deleteCall, action.url, action.body);
  yield call(manageResponse, action, response);
  yield put(stopLoaderAction());
}

export function* watchGetApi() {
  yield takeEvery(GET_API_ACTION, getApi);
}

export function* watchPostApi() {
  yield takeEvery(POST_API_ACTION, postApi);
}

export function* watchDeleteApi() {
  yield takeEvery(DELETE_API_ACTION, deleteApi);
}
