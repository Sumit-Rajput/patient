import { call, put, takeEvery } from 'redux-saga/effects';
import {
  apiCall,
  shouldGetNewAccessToken,
  getRefreshToken,
} from '../apiInterface';
import { API_ACTION } from '../actions/apiActions';
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
    const response = yield call(apiCall, '/login', 'POST', requestBody);

    yield put({ type: GET_NEW_TOKEN_SUCCESS, data: response });
  }
}

function* apiInterface(action) {
  try {
    yield call(checkRefreshToken);
    yield put(startLoaderAction());
    yield put({ type: action.types[0] });
    const response = yield call(apiCall, action.url, action.method, action.body);
    yield call(manageResponse, action, response);
    yield put(stopLoaderAction());
  } catch (e) {
    yield put({ type: action.types[2], data: e });
    yield put(stopLoaderAction());
  }
}

export default function* watchApi() {
  yield takeEvery(API_ACTION, apiInterface);
}
