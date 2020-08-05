import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./component/Login"
import SignUp from "./component/SignUp";
import AuthProvider from "./providers/AuthContext"
import Profile from "../src/component/Profile-Page/Profile"
import NavBar from "./component/NavBar"
import Home from "./component/HomePage/Home";


import Users from "./component/Users"
import {AuthRoute, ProtectedRoute} from "./utility/routesUtil"

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <NavBar />
      <Switch>
        <AuthRoute exact path={"/"}>
          <SignUp />
        </AuthRoute>

        <AuthRoute path={"/login"}>
          <Login />
        </AuthRoute>

        <ProtectedRoute path="/users">
          <Users />
        </ProtectedRoute>

        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>

        <ProtectedRoute path="/home">
          <Home />
        </ProtectedRoute>

      </Switch>
    </AuthProvider>

    </div>
  );
}

export default App;
