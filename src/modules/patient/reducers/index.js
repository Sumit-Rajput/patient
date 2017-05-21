import {
  GET_PATIENT,
  GET_PATIENT_SUCCESS,
  GET_PATIENT_FAILURE,
} from '../actions/patientListActions';
import {
  ADD_PATIENT,
  ADD_PATIENT_SUCCESS,
  ADD_PATIENT_FAILURE,
} from '../actions/addPatientAction';

const initialState = {
  isGettingPatient: false,
  list: [
    {
      firstName: 'Test',
      lastName: '123',
      dob: '13-09-1990',
      phone: '1234567890',
      id: '21321321',
    },
    {
      firstName: 'Test',
      lastName: '123',
      dob: '13-09-1990',
      phone: '1234567890',
      id: '2132321321',
    },
    {
      firstName: 'Test',
      lastName: '123',
      dob: '13-09-1990',
      phone: '1234567890',
      id: '213241321',
    },
    {
      firstName: 'Test',
      lastName: '123',
      dob: '13-09-1990',
      phone: '1234567890',
      id: '213221321',
    },
  ],
  isAddingPatient: false,
  error: '',
};

const patient = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PATIENT:
      return {
        ...state,
        isAddingPatient: true,
      };
    case ADD_PATIENT_SUCCESS:
      return {
        ...state,
        isAddingPatient: false,
        error: '',
      };
    case ADD_PATIENT_FAILURE:
      return {
        ...state,
        isAddingPatient: false,
        error: action.data.error_description,
      };
    case GET_PATIENT:
      return {
        ...state,
        isGettingPatient: true,
      };
    case GET_PATIENT_SUCCESS:
      return {
        ...state,
        isGettingPatient: false,
        list: action.data.patient,
        error: '',
      };
    case GET_PATIENT_FAILURE:
      return {
        ...state,
        isGettingPatient: false,
        error: action.data.error_description,
      };
    default:
      return state;
  }
};

export default patient;
