import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const to = {
        pathname: "/",
        state: {
          from: props.location,
        },
      };
      if (auth.isAuthenticated()) return <Component {...props} />;
      else return <Redirect to={to} />;
    }}
  />
);

export default ProtectedRoute;
