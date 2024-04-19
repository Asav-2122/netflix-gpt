import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
const PublicRoute = () => {
  let token = Cookies.get("accessToken");
  const location = useLocation();
  const to = location?.state?.from || "/home";
  return <>{token ? <Navigate to={to} /> : <Outlet />}</>;
};

export default PublicRoute;
