import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import User from "../components/User";
import { DefaultLayOut } from "../components/DefaultLayOut";
function DefaultRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route path="/" element={<PrivateRoute outlet={<DefaultLayOut />} />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="home" element={<Home />} />
            <Route path="user" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default DefaultRoutes;
