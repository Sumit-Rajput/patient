import { combineReducers } from 'redux';
import authentication from '../modules/authentication/reducers/authentication';
import timeline from '../modules/timeline/reducers/timeline';
import loader from '../api/reducers/loader';
import { LOGOUT } from '../modules/authentication/actions/loginAction';

const reducers = {
  authentication,
  timeline,
  loader,
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    return undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
