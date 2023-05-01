import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserEmail } from './util';
 
// handle the private routes
const PrivateRoute= () => {
  return getUserEmail() ? <Outlet /> : <Navigate to="/login" />
}
 
export default PrivateRoute;