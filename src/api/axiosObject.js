import axios from "axios";

export const AxiosObject = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
