import React,{useState} from "react";
import { useInputs } from "../utility/InputHooks"
import {useHistory} from "react-router-dom"
import { Link } from "react-router-dom";
import "../CSS/Login.css";
import axios from "axios"
import {login} from "../utility/firebaseFunction"

import { apiURL } from "../utility/apiURL";
const API = apiURL();

export default function Login(){
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const [error, setError] = useState(false)
 console.log(email, password)

 const handleSubmit = async (e) => {
  e.preventDefault();
    try {
      await login(email, password)
      history.push("/home"); 
    } catch (err) {
      alert("username or password... SIke you woulda thought i was gonna tell you which one huh")
    }
  
};

  return (
    <div className="main">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      />
      <div className="container">
        <div className="row">
          <div className="instagram">
            <img
              src="https://miro.medium.com/max/701/1*gbGs4B0o65vGY6AeruKCdw.jpeg"
              className="ig-pic"

            />
          </div>

          <div className="instagram">
            <div className="right-column text-center">
              <img
                src="https://see.fontimg.com/api/renderfont4/YdKj/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/Rmluc3RhZ3JhbQ/countryside.png"
                className="ig-logo"
              />
              <p className="description">
                Sign In To See Photo And Videos From Your Friends
              </p>
            
              <form onSubmit={handleSubmit}>
              <div className="form">
                  <input type="text" className="form-control" value = {email} placeholder="Email"  onChange={(e) => setEmail(e.currentTarget.value)}/>
              </div>
              <div className="form">
                  <input type="password"  className="form-control" value = {password} placeholder="Password"  onChange={(e) => setPassword(e.currentTarget.value)}/>
              </div>
              <input type="submit" className="btn btn-primary btn-block" placeholder="signin"/>
            </form>
            <div className="right-column-login text-center">
            <Link to="/" className="button">New? Sign Up</Link>
            </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
   
  );

  
};
