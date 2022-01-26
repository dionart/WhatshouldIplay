import axios from 'axios';

const api = axios.create({
  baseURL: String(process.env.NEXT_PUBLIC_API_URL),
});

export default api;
