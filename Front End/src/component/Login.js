import React,{useState} from "react";
import { useInputs } from "../utility/InputHooks"
import {useHistory} from "react-router-dom"
import { Link } from "react-router-dom";
import "../CSS/Login.css";
import axios from "axios"
import {login} from "../utility/firebaseFunction"

const Login = () => {
  localStorage.clear();
  const history = useHistory()
  const email = useInputs("");
  const password = useInputs("");
 const [error, setError] = useState(false)

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // await axios.post(`${API}/api/users`, { id: res.user.uid, email });
    let res = await login(email, password)
    history.push("/profile");
  } catch (err) {}
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
                  <input type="text" className="form-control" placeholder="Username or Email" {...email}/>
              </div>
              <div className="form">
                  <input type="password"  className="form-control" placeholder="Password" {...password}/>
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
  debugger
  
};
export default Login;
