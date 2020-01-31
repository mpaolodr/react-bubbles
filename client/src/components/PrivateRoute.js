import React from "react";
import { Route, Redirect } from "react-router-dom";

// import getToken function from utils
import { getToken } from "../utils/axiosWithAuth";

const PrivateRoute = props => {
  const { component: Component, ...rest } = props;

  const token = getToken();

  return (
    <Route
      {...rest}
      render={props => {
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
