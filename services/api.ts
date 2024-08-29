import axios from 'axios';

const URL = process.env.EXPO_PUBLIC_API_URL;
const TOKEN = process.env.EXPO_PUBLIC_TOKEN;

const API = axios.create({
  baseURL: `https://${TOKEN}.${URL}`,
});

export { API };
