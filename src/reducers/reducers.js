import { combineReducers } from 'redux';
import patient from '../modules/patient/reducers';

const reducers = {
  patient,
};

export default combineReducers(reducers);
