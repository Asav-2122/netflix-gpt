import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const User = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    Cookies.remove("accessToken");

    navigate("/login");
  };
  return (
    <div>
      User
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
};

export default User;
