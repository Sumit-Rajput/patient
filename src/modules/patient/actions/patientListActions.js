import { getApiAction } from '../../../api/actions/apiActions';

export const GET_PATIENT = 'GET_PATIENT';
export const GET_PATIENT_SUCCESS = 'GET_PATIENT_SUCCESS';
export const GET_PATIENT_FAILURE = 'GET_PATIENT_FAILURE';

export const getPatientListAction = () => (
  getApiAction({
    types: [GET_PATIENT, GET_PATIENT_SUCCESS, GET_PATIENT_FAILURE],
    url: '/patient',
  })
);
