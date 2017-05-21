import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store/store';
import apiSagas from '../api/saga';
import { watchPushPathSaga } from '../routes/sagas/routeSaga';

function* root() {
  yield fork(watchPushPathSaga);
  yield fork(apiSagas);
}

const runRootSaga = () => sagaMiddleware.run(root);

export default runRootSaga;
