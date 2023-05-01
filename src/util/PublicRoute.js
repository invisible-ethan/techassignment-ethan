import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserEmail } from './util';
 
// handle the public routes
const PublicRoute = () => {
  return !getUserEmail() ? <Outlet /> : <Navigate to="/profile" />
}
 
export default PublicRoute;