import React, { useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect, useLocation } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Login from "../pages/Login/Login";
import { AuthContext } from "./Authorization";
import Home from "../pages/Home/Home";
import Folders from "../pages/Folders/Folders";
import { UserContext } from "./UserContext";
import { FolderContext } from "./FolderContext";
import { getAuth } from "../api/config";
import NewFolders from "../pages/NewFolders/NewFolders";
import Folder from "../pages/Folder/Folder";

function Router() {
  const {authTokens, setAuthToken} = useContext(AuthContext);
  const userContext = useContext(UserContext);
  const folderContext = useContext(FolderContext);
  
  useEffect(() => {
    if (authTokens && !userContext.user) {
      getAuth("/user/personnal").then((res) => {
        if (!res.data || !res.data.folders) {
          setAuthToken()

        } else {
          userContext.setUser(res.data);
          folderContext.setFolders(res.data.folders);
        } 
        
        
      });
    }
  }, [authTokens]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          {authTokens ? <Redirect to="/home" /> : <Login />}
        </Route>
        <PrivateRoute path="/folders/new/:id?">
          <NewFolders />
        </PrivateRoute>
        <PrivateRoute path="/folders/:id">
          <Folder />
        </PrivateRoute>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/folders">
          <Folders />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
