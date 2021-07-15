import axios from 'axios';

const api = axios.create({
  baseURL: process.env.EXPO_API,
});

export default api;
