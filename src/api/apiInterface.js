import api from './api';
import getHeaders from './headers';
import tokenManager from './tokenManager';

const BASE_URL = 'http://localhost:5000';

const getCompleteURL = url => `${BASE_URL}${url}`;

const apiCall = (url, method, body) => api(
  getCompleteURL(url),
  method,
  getHeaders(tokenManager.accessToken),
  body,
);

const setToken = tokenManager.setToken;
const shouldGetNewAccessToken = tokenManager.shouldGetNewAccessToken;
const getRefreshToken = tokenManager.refreshToken;

export {
  apiCall,
  setToken,
  shouldGetNewAccessToken,
  getRefreshToken,
};
