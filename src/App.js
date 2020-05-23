import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"
import HomePage from "./Front End/component/HomePage.js"
import Login from "./Front End/component/Login"
import SignUp from "./Front End/component/SignUp"
import Profile from "./Front End/component/FeedPage/Profile"


function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path = {"/"}>
        <SignUp/>
      </Route>
      <Route path = {"/login"}>
        <Login/>
      </Route>
      
      <Route exact to path={"/Profile"}>
        <Profile/>
      </Route>

    </Switch>
    {/* <Profile/> */}
    </div>
  );
}

export default App;
