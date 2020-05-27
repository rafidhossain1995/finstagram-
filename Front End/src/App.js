import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./component/Login"
import SignUp from "./component/SignUp";

import Users from "./component/Users"

function App() {
  return (
    <div className="App">
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
      </Switch>

    </div>
  );
}

export default App;
