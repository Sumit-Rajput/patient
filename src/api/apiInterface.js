import api from './api';
import getHeaders from './headers';

export const BASE_URL = 'http://localhost:5000';

export const getCompleteURL = url => `${BASE_URL}${url}`;

export const apiCall = (url, method, body) => api(
  getCompleteURL(url),
  method,
  getHeaders(),
  body,
);
