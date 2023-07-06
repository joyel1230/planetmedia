import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../micros/Logo";
import {
  HiOutlineShoppingBag,
  HiOutlineLogout,
  HiOutlineLogin,
} from "react-icons/hi";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/slices/user";
import { useSelector } from "react-redux";
import { State } from "../../../redux/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const user = useSelector((state: State) => state.userStore.user);
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="flex justify-between px-5 sm:px-10 items-center h-20 text-[#842A3A]">
      <Link to={"/shop"}>
        <span className="flex text-xs font-sans font-semibold items-center gap-1">
          <HiOutlineShoppingBag />
          <span>Shop</span>
        </span>
      </Link>
      <Logo color={true} />
      {user ? (
        <span
          className="flex text-xs font-sans font-semibold items-center gap-1 cursor-pointer"
          onClick={handleLogout}
        >
          <span>Logout</span>
          <HiOutlineLogout />
        </span>
      ) : (
        <span
          className="flex text-xs font-sans font-semibold items-center gap-1 cursor-pointer"
          onClick={() => naviagte("../login")}
        >
          <span>Login</span>
          <HiOutlineLogin />
        </span>
      )}
    </div>
  );
};

export default Navbar;
