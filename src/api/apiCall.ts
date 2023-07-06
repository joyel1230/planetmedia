import { AxiosError } from "axios";
import { userRoute } from "../const/routes";
import { methodApi } from "./config";

interface Credentials {
  username: string;
  password: string;
}

export const getProducts = async () => {
  const data = {
    params: {
      consumer_key: process.env.REACT_APP_CONSUMER_KEY,
      consumer_secret: process.env.REACT_APP_CONSUMER_SECRET,
    },
  };
  try {
    const response = await methodApi("get", userRoute.products, data);
    return response;
  } catch (err) {
    const error = err as AxiosError;
    console.error(error);
    return error.response;
  }
};

export const userAuth = async () => {
  try {
    const response = await methodApi("get", userRoute.posts, {});
    return response?.status;
  } catch (err) {
    const error = err as AxiosError;
    console.error(error);
    return error.response?.status;
  }
};

export const postLogin = async (data: Credentials) => {
  try {
    const response = await methodApi("post", userRoute.login, data);
    return response;
  } catch (err) {
    const error = err as AxiosError;
    console.error(error);
    return error.response;
  }
};

export const getPosts = async () => {
  try {
    const response = await methodApi("get", userRoute.posts, {});
    return response;
  } catch (err) {
    const error = err as AxiosError;
    console.error(error);
    return error.response;
  }
};

export const getPost = async (id:number) => {
  try {
    const response = await methodApi("get", `${userRoute.posts}/${id}`, {});
    return response;
  } catch (err) {
    const error = err as AxiosError;
    console.error(error);
    return error.response;
  }
};
