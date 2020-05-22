import React from "react";
import { useInputs } from "../utility/InputHooks";
import { Link } from "react-router-dom";
import "../CSS/Login.css";
import axios from "axios"

const Login = () => {
  localStorage.clear();
  const username = useInputs("");
  const password = useInputs("");

  const handleSubmit = async (e)=>{
      e.preventDefault()
      try{
          let res = await axios.post("http://localhost:3000/users/login",{
              username:username.value,
              password: password.Value
          })
          console.log(res)
          localStorage.setItem("currentUserID", res.data.user.id)
          window.location.href = "./"
      }catch(err){
          console.log(err)
      }
  }
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
                src="https://logodix.com/logo/836764.png"
                className="ig-logo"
              />
              <p className="description">
                Sign In To See Photo And Videos From Your Friends
              </p>
            
              <form onClick={handleSubmit}>
              <div className="form">
                  <input type="text" className="form-control" placeholder="Username or Email" {...username}/>
              </div>
              <div className="form">
                  <input type="text" className="form-control" placeholder="Password" {...password}/>
              </div>
              <input type="submit" className="btn btn-primary btn-block" placeholder="signin"/>
            </form>
            <p className="terms-conditions"> By signing up, you agree to our Terms and Policy</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
