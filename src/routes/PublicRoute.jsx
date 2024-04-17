import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PublicRoute = () => {
  let token = false
  const location = useLocation();
  const to = location?.state?.from || "/home";
  return (
    <>
      {token ? <Navigate to={to} /> : <Outlet />}
    </>
  )
}

export default PublicRoute