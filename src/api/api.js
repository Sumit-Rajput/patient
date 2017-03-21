/* global fetch:true*/
/* eslint no-undef: "error"*/

function statusHelper(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(response);
}

const api = (url, method, headers, body) => (
  fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
    mode: 'cors',
  })
    .then(statusHelper)
    .catch(error => error)
    .then(response => response.json())
);

export default api;
