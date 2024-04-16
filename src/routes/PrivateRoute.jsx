import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRoute = ({ outlet }) => {
  let token = true
  return (
    <>
      {token ? outlet : <Navigate to={'login'} state={{ from: location.pathname }} />}
    </>
  )
}

export default PrivateRoute