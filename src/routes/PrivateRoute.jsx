import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ outlet }) => {
  let token = Cookies.get("accessToken");
  return (
    <>
      {token ? (
        outlet
      ) : (
        <Navigate to={"/login"} state={{ from: location.pathname }} />
      )}
    </>
  );
};

export default PrivateRoute;
