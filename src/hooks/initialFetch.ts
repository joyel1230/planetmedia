import { AxiosResponse } from "axios";
import { getProducts, userAuth } from "../api/apiCall";

export const products = async () => {
  try {
    const response = (await getProducts()) as AxiosResponse;
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const validateToken = async () => {
  try {
    const status = await userAuth();
    if (status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
