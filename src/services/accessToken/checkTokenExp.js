import jwt from 'jwt-decode';

const checkTokenExp = (token) => {
  const { exp } = jwt(token);
  return exp > Math.round(Date.now() / 1000);
};

export default checkTokenExp;
