import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "./navbar";
export const DefaultLayOut = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    Cookies.remove("accessToken");

    navigate("/login");
  };
  return (
    <div>
      <Navbar />
      {/* <button onClick={handleLogOut}>LogOut</button> */}
      <Outlet />
    </div>
  );
};
