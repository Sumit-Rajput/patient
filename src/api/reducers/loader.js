import { START_LOADER, STOP_LOADER } from '../actions/loaderActions';

const initialState = {
  showLoader: false,
};

const loader = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADER:
      return {
        ...state,
        showLoader: true,
      };
    case STOP_LOADER:
      return {
        ...state,
        showLoader: false,
      };
    default:
      return state;
  }
};

export default loader;
