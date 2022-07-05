import axios from 'axios';

const baseUrl = '/api/blogs';

let token = null;

export const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

export const createBlog = async (newBlog) => {
  const config = { headers: { Authorization: token } };
  const res = await axios.post(baseUrl, newBlog, config);
  return res.data;
};
