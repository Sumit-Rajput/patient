import { fork } from 'redux-saga/effects';
import {
  watchGetApi,
  watchPostApi,
  watchDeleteApi,
} from './apiSaga';

export default function* () {
  yield fork(watchGetApi);
  yield fork(watchPostApi);
  yield fork(watchDeleteApi);
}
