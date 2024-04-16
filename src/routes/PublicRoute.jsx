import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PublicRoute = () => {
  let token = true
  const location = useLocation();
  const to = location?.state?.from || "/home";
  console.log({ to })
  return (
    <>
      {token ? <Navigate to={to} /> : <Outlet />}
    </>
  )
}

export default PublicRoute