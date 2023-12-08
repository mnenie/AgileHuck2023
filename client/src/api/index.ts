import axios from 'axios'

export const API: string = 'http://localhost:8080/api'

const $api = axios.create({
  withCredentials:true,
  baseURL: API,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
});

export default $api;