import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const methodApi = async (method: string, url: string, data: object) => {
  let response;
  try {
    if (method === "post") {
      response = await api.post(url, data);
    } else if (method === "get") {
      response = await api.get(url, data);
    }
    return response;
  } catch (err) {
    const error = err as AxiosError;
    console.log(error.message);
    return error.response;
  }
};

api.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "userAuth"
    )}`;
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);
