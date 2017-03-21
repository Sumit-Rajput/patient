function TokenManager(accessToken = '', refreshToken = '', expiresIn = '') {
  this.accessToken = accessToken;
  this.refreshToken = refreshToken;
  this.expiresIn = expiresIn;

  this.shouldGetNewAccessToken = () => {
    const currentDate = new Date();
    const currentDateMilliseconds = currentDate.getTime();

    const expiryDate = new Date(this.expiresIn);
    const expiryDateMilliseconds = expiryDate.getTime();

    const difference = expiryDateMilliseconds - currentDateMilliseconds;
    return difference < 960000;
  };
/* eslint-disable camelcase*/
  this.setToken = ({ access_token, refresh_token, expires_in }) => {
    this.accessToken = access_token;
    this.refreshToken = refresh_token;
    this.expiresIn = expires_in;
  };
  /* eslint-enable camelcase*/
}

const tokenManager = new TokenManager();

export default tokenManager;
