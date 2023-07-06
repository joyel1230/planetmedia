import { configureStore } from "@reduxjs/toolkit";
import products, { ProductState } from "./slices/products";
import user, { UserState } from "./slices/user";
export interface State{
    productStore:ProductState,
    userStore:UserState
}

const store = configureStore({
  reducer: {
    productStore: products,
    userStore:user
  },
});

export default store;
