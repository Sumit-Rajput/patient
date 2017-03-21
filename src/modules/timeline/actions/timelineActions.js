import { getApiAction } from '../../../api/actions/apiActions';

export const GET_TIMELINE = 'GET_TIMELINE';
export const GET_TIMELINE_SUCCESS = 'GET_TIMELINE_SUCCESS';
export const GET_TIMELINE_FAILURE = 'GET_TIMELINE_FAILURE';

export const GET_NEXT_TIMELINE_SUCCESS = 'GET_NEXT_TIMELINE_SUCCESS';

export const getTimelineAction = () => (
  getApiAction({
    types: [GET_TIMELINE, GET_TIMELINE_SUCCESS, GET_TIMELINE_FAILURE],
    url: '/timeline',
  })
);

export const getNextTimelineAction = cursor => (
  getApiAction({
    types: [GET_TIMELINE, GET_NEXT_TIMELINE_SUCCESS, GET_TIMELINE_FAILURE],
    url: `/timeline?cursor=${cursor}`,
  })
);
