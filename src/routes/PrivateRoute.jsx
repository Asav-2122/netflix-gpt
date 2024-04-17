import React from 'react'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({ outlet }) => {
  let token = false
  return (
    <>
      {token ? outlet : <Navigate to={'/login'} state={{ from: location.pathname }} />}
    </>
  )
}

export default PrivateRoute