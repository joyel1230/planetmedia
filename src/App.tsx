import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import Footer from "./components/layouts/footer/Footer";
import { useDispatch } from "react-redux";
import { addProducts } from "./redux/slices/products";
import { products, validateToken } from "./hooks/initialFetch";
import { loginUser } from "./redux/slices/user";
import Loading from "./components/loading/Loading";
import { useSelector } from "react-redux";
import { State } from "./redux/store";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((state: State) => state.userStore.user);
  useEffect(() => {
    products()
      .then((res) => {
        dispatch(addProducts(res));
      })
      .catch((err) => {
        console.error(err);
      });
    if (!user) {
      validateToken()
        .then((status) => {
          if (status) {
            dispatch(loginUser(localStorage.getItem("userAuth") || ""));
            setloading(false);
          } else {
            navigate("/login");
          }
        })
        .catch((err) => {
          navigate("/login");
          console.error(err);
        });
    } else {
      setloading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="flex flex-col justify-between">
        {loading ? (
          <div className="h-screen">
            <Loading />
          </div>
        ) : user ? (
          <>
            <Navbar />
            <Outlet />
            <Footer />
          </>
        ) : (
          <Navigate to={"/login"} />
        )}
      </div>
    </>
  );
};

export default App;
