import axios from "axios";

const api = axios.create({
  baseURL: "https://wemovies-seven.vercel.app/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
