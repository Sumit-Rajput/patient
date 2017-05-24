
import database from '../../firebase';


export const actionTypes = {
  GET_PATIENTS_SUCCESS: 'GET_PATIENTS_SUCCESS',
  GET_PATIENTS_FAILURE: 'GET_PATIENTS_FAILURE',
  ADD_PATIENT_SUCCESS: 'ADD_PATIENT_SUCCESS',
  ADD_PATIENT_FAILURE: 'ADD_PATIENT_FAILURE',
};

function patienAddSuccess(res) {
  return {
    type: actionTypes.ADD_PATIENT_SUCCESS,
    payload: res,
  };
}

function patientAddFailure(err) {
  return {
    type: actionTypes.ADD_PATIENT_FAILURE,
    payload: err,
  };
}

function getPatientsListFailure(err) {
  return {
    type: actionTypes.GET_PATIENTS_FAILURE,
    payload: err,
  };
}

function getPatientsListSuccess(list) {
  return {
    type: actionTypes.GET_PATIENTS_SUCCESS,
    payload: list,
  };
}

export function addPatient(patienInfo) {
  return (dispatch) => {
    const nodeRef = database.ref('patients');
    const newNode = nodeRef.push();

    return newNode.set(patienInfo)
    .then((res) => {
      dispatch(patienAddSuccess(res));
    })
    .catch((err) => {
      dispatch(patientAddFailure(err));
    });
  };
}


export function getPatients() {
  return (dispatch) => {
    const nodeRef = database.ref('patients');
    const patientList = [];
    return nodeRef.on('value', (snap) => {
      snap.forEach((item) => {
        const itemVal = item.val();
        patientList.push(itemVal);
        return patientList;
      });
    })
    .then((list) => {
      dispatch(getPatientsListSuccess(list));
    })
    .catch((err) => {
      dispatch(getPatientsListFailure(err));
    });
  };
}
