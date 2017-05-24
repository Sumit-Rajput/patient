import {
  actionTypes,
} from '../actions';

export type Patient = {
  firstName: string;
  lastName: string;
  age: Number;
  dob: Date;
  notes: string;
  phone: Number;
  gender: string;
}

const initialState = {
  patientList: [],
};

const patients = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PATIENTS_SUCCESS:
      return {
        ...state,
        patientList: [
          ...state.patientList,
          ...action.payload,
        ],
      };
    case actionTypes.ADD_PATIENT_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default patients;
