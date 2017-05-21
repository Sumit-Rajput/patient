import { postApiAction } from '../../../api/actions/apiActions';

export const ADD_PATIENT = 'ADD_PATIENT';
export const ADD_PATIENT_SUCCESS = 'ADD_PATIENT_SUCCESS';
export const ADD_PATIENT_FAILURE = 'ADD_PATIENT_FAILURE';

export const addPatientAction = patient => (
  postApiAction({
    types: [ADD_PATIENT, ADD_PATIENT_SUCCESS, ADD_PATIENT_FAILURE],
    url: '/add',
    body: patient,
  })
);
