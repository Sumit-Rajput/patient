export const GET_API_ACTION = 'GET_API_ACTION';
export const POST_API_ACTION = 'POST_API_ACTION';
export const DELETE_API_ACTION = 'DELETE_API_ACTION';

export const getApiAction = body => ({
  type: GET_API_ACTION,
  ...body,
});

export const postApiAction = body => ({
  type: POST_API_ACTION,
  ...body,
});

export const deleteApiAction = body => ({
  type: DELETE_API_ACTION,
  ...body,
});
