import { call, put, takeEvery } from 'redux-saga/effects';
import { apiCall } from '../apiInterface';
import { API_ACTION } from '../actions/apiActions';
import { startLoaderAction, stopLoaderAction } from '../actions/loaderActions';

function* manageResponse(action, response) {
  if (response.error) {
    yield put({ type: action.types[2], data: response });
  } else {
    yield put({ type: action.types[1], data: response });
  }
}

function* apiInterface(action) {
  try {
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
