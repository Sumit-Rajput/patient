import * as React from 'react';
import { Route, Redirect } from 'react-router';
import {
  BASE_ROUTE,
  PATIENT_ADD_ROUTE,
  PATIENT_LIST_ROUTE,
} from './../constants/Routes';
import AddPatient from '../modules/addPatient/screens/AddPatient';
import PatientList from '../modules/patientList/screens/PatientList';
import App from './../containers/App';

export default (
  <Route path={BASE_ROUTE} component={App}>
    <Route path={PATIENT_ADD_ROUTE} component={AddPatient} />
    <Route path={PATIENT_LIST_ROUTE} component={PatientList} />
    <Redirect from="/*" to={PATIENT_ADD_ROUTE} />
  </Route>
);
