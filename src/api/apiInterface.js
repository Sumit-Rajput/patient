import api from './api';
import getHeaders from './headers';
import tokenManager from './tokenManager';

const BASE_URL = 'http://localhost:5000';

const getCompleteURL = url => `${BASE_URL}${url}`;

const getCall = (url, body) => api(
  getCompleteURL(url),
  'GET',
  getHeaders(tokenManager.accessToken),
  body,
);

const postCall = (url, body) => api(
  getCompleteURL(url),
  'POST',
  getHeaders(tokenManager.accessToken),
  body,
);

const deleteCall = (url, body) => api(
  getCompleteURL(url),
  'DELETE',
  getHeaders(tokenManager.accessToken),
  body,
);

const setToken = tokenManager.setToken;
const shouldGetNewAccessToken = tokenManager.shouldGetNewAccessToken;
const getRefreshToken = tokenManager.refreshToken;

export {
  getCall,
  postCall,
  deleteCall,
  setToken,
  shouldGetNewAccessToken,
  getRefreshToken,
};
