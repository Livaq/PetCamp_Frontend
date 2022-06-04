import jwt from 'jwt-decode';

const getTokenData = (token) => jwt(token);

export default getTokenData;
