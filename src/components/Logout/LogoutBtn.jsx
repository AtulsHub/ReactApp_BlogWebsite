import React from "react";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

const LogoutBtn = ({ isLogin }) => {
  const logoutHandler = () => {
    const dispatch = useDispatch();
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };
  return (
    <button
      className="inline-block hover:bg-blue-600 rounded-full px-3 py-2"
      onClick={logoutHandler}
    >
      LOGOUT
    </button>
  );
};

export default LogoutBtn;
