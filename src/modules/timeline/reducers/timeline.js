import {
  GET_TIMELINE,
  GET_TIMELINE_SUCCESS,
  GET_TIMELINE_FAILURE,
  GET_NEXT_TIMELINE_SUCCESS,
} from '../actions/timelineActions';

const initialState = {
  isGettingTimeline: false,
  feed: [],
  cursor: '',
  isMoreAvailable: true,
};

const timeline = (state = initialState, action) => {
  switch (action.type) {
    case GET_TIMELINE:
      return {
        ...state,
        isGettingTimeline: true,
      };
    case GET_TIMELINE_SUCCESS:
      return {
        ...state,
        isGettingTimeline: false,
        feed: action.data.feeds,
        cursor: action.data.cursor,
        isMoreAvailable: action.data.isMoreAvailable,
      };
    case GET_TIMELINE_FAILURE:
      return {
        ...state,
        isGettingTimeline: false,
      };
    case GET_NEXT_TIMELINE_SUCCESS:
      return {
        ...state,
        isGettingTimeline: false,
        feed: (state.feed || []).concat((action.data.feeds || [])),
        cursor: action.data.cursor,
        isMoreAvailable: action.data.isMoreAvailable,
      };
    default:
      return state;
  }
};

export default timeline;
