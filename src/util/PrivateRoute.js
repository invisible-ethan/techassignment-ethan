import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserEmail } from './util';
 
// handle the private routes
// if no login email, go to login page
const PrivateRoute= () => {
  return getUserEmail() ? <Outlet /> : <Navigate to="/login" />
}
 
export default PrivateRoute;