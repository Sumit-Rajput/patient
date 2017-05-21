import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import patient from '../modules/patient/reducers';
import loader from '../api/reducers/loader';

const reducers = {
  patient,
  loader,
  form: formReducer,
};

export default combineReducers(reducers);
