import React from "react";
import { useInputs } from "../utility/InputHooks";
import { Link } from "react-router-dom";
import "../CSS/SignUp.css";
import axios from "axios";
import {signup} from "../utility/firebaseFunction"

const SignUp = () => {
  localStorage.clear();
  const email = useInputs("");
  const fullname = useInputs("");
  const username = useInputs("");
  const password = useInputs("");
  console.log(email, fullname, username, password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   let res = await axios.post("http://localhost:3000/users", {
    //     email: email.value,
    //     fullname: fullname.value,
    //     username: username.value,
    //     password: password.value,
    //     user_pic: "",
    //   });
    //   console.log(res);
    //   localStorage.setItem("currentUserID", res.data.user.id)
    //   window.location.href = "./"
    // } catch (err) {
    //   console.log(err);
    // }
    try{
        let res = await signup(email, password)
        await axios.post("http://localhost:3000/users", {id: res.user.uid, email})
    }catch(err){
        console.log(err)
    }
  };
  return (
    <div id="wrapper">
      <div className="content">
        <div className="header">
          <img src="https://i.imgur.com/zqpwkLQ.png" />
        </div>
        <form onSubmit={handleSubmit} className="submit">
          <div className="l">
            <input
              type="text"
              placeholder="Email"
              className="email"
              {...email}
            />
            <div className="overlap-text">
              <input
                type="text"
                placeholder="fullname"
                className="fullname"
                {...fullname}
              />
              <br />
              <input
                type="text"
                placeholder="username"
                className="username"
                {...username}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                className="password"
                {...password}
              />
              <br />
            </div>
            <input type="submit" value="Sign Up" className="signup" />
            <br />
            <h3>Create an Account today!</h3>
          </div>
        </form>
      </div>
      <div className="newAccountDiv">
        <div className="sign-up">
          Have An Account?<h3>Sign In</h3>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
