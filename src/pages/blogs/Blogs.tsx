import React from "react";
import Header from "../../components/micros/Header";
import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import AllBlogs from "../../components/blog/AllBlogs";

const Blogs = () => {
  const user = useSelector((state: State) => state.userStore.user);
  const backgroundImageUrl = "url('/blogbg.png')";
  return user ? (
    <>
      <Helmet>
        <title>Pure Beauty Blogs</title>
        <meta name="description" content="Blog page for Pure Beauty" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Header title="Blogs" />
      <div>
        <AllBlogs />
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: backgroundImageUrl }}
        >
        <div className="bg-[#210006] w-full h-full opacity-50"></div>
        </div>
      </div>
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default Blogs;
