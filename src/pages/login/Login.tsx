import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate, useNavigate } from "react-router-dom";
import Logo from "../../components/micros/Logo";
import LoginForm from "../../components/login/Form";
import LoginImage from "../../components/login/LoginImage";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { validateToken } from "../../hooks/initialFetch";
import { loginUser } from "../../redux/slices/user";
import { useDispatch } from "react-redux";
import Loading from "../../components/loading/Loading";

const Login: React.FC = () => {
  const user = useSelector((state: State) => state.userStore.user);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      validateToken()
        .then((status) => {
          if (status) {
            dispatch(loginUser(localStorage.getItem("userAuth") || ""));
            navigate("/");
          } else {
            setloading(false);
          }
        })
        .catch((err) => {
          setloading(false);
          console.error(err);
        });
    } else {
      setloading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !user ? (
    <>
      <Helmet>
        <title>Pure Beauty Login</title>
        <meta name="description" content="Login page for Pure Beauty" />
        <link rel="canonical" href="/login" />
      </Helmet>
      {loading ? (
        <div className="h-screen">
          <Loading />
        </div>
      ) : (
        <div className="bg-[#842A3A] w-full h-screen flex justify-center lg:justify-between ">
          <div className="mt-10 ms-0 lg:ms-28">
            <div>
              <Logo color={false} />
              <LoginForm />
            </div>
          </div>
          <LoginImage />
        </div>
      )}
    </>
  ) : (
    <Navigate to={"/"} />
  );
};

export default Login;
