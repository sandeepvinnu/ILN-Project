// src/components/PrivateRoute.jsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../services/authService';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      AuthService.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
