const getHeaders = (token) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  return token ? {
    Authorization: `Bearer ${token}`,
    ...headers,
  } : headers;
};

export default getHeaders;
