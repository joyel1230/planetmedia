import React from "react";
import App from "../App";
import Blogs from "../pages/blogs/Blogs";
import { RouteObject } from "react-router-dom";
import Shop from "../pages/shop/Shop";
import Login from "../pages/login/Login";
import Error from "../pages/Error";
import { Provider } from "react-redux";
import store from "../redux/store";
import SingleBlog from "../pages/blogs/SingleBlog";

export const userRoutes: RouteObject = {
  path: "/",
  element: (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  errorElement: <Error />,
  children: [
    {
      path: "/",
      element: <Blogs />,
    },
    {
      path: "/blog/:id",
      element: <SingleBlog />,
    },
  ],
};
export const userShop: RouteObject = {
  path: "/shop",
  element: (
    <Provider store={store}>
      <Shop />
    </Provider>
  ),
};
export const userLogin: RouteObject = {
  path: "/login",
  element: (
    <Provider store={store}>
      <Login />
    </Provider>
  ),
};
