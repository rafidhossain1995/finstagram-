import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./component/Login"
import SignUp from "./component/SignUp";
import AuthProvider from "../src/providers/AuthContext"
import Profile from "./component/Profile"

import Users from "./component/Users"

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Switch>
        <Route exact path={"/"}>
          <SignUp />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>

        <Route path="/users">
          <Users />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

      </Switch>
    </AuthProvider>

    </div>
  );
}

export default App;
