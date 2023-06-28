import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return props.loggedIn ? <Component {...props} /> : <Navigate to='/' replace />
}
export default ProtectedRoute;

// <Route>
    //   {props.loggedIn ? <Component {...props} /> : <Navigate to='/' replace />}
    // </Route>