import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../hoc/Authorization";

function PrivateRoute({ children, location, ...rest }) {
  const authTokens = useContext(AuthContext).authTokens;

  return (
    <Route {...rest}>
      {authTokens ? (
        children
      ) : (
        <Redirect to={{ pathname: "/login", state: { referer: location } }} />
      )}
    </Route>
  );
}

export default PrivateRoute;
