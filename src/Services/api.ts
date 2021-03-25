import axios from 'axios';

const api = axios.create({
  baseURL: 'http://backendcrt7.crtsistemas.com.br/',
});

export default api;
