import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store/store';
import apiSagas from '../api/saga';
import loginSagas from '../modules/authentication/sagas';
import { watchPushPathSaga } from '../routes/sagas/routeSaga';
import startup from '../modules/startup/sagas/startupSaga';

function* root() {
  yield fork(watchPushPathSaga);
  yield fork(startup);
  yield fork(apiSagas);
  yield fork(loginSagas);
}

const runRootSaga = () => sagaMiddleware.run(root);

export default runRootSaga;
