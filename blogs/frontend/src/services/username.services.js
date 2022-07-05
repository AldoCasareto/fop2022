import axios from 'axios';

const baseUrl = '/api/login';

export const usernameLogIn = async (credentials) => {
  const res = await axios.post(baseUrl, credentials);
  return res.data;
};
