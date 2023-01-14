import axios from 'axios';

export const BASE_API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,  
});

export const clientConfig = process.env.REACT_APP_CLIENT;
export const clientSecret = process.env.REACT_APP_CLIENT_SECRET;