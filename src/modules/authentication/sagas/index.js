import { fork } from 'redux-saga/effects';
import {
  watchLogin,
  watchRefreshToken,
  watchLogout,
} from './loginFlowSaga';

export default function* () {
  yield fork(watchLogin);
  yield fork(watchRefreshToken);
  yield fork(watchLogout);
}
