import React, { useState } from "react";
import { useInputs } from "../utility/InputHooks";
import { Link } from "react-router-dom";
import "../CSS/SignUp.css";
import axios from "axios";
import { signup } from "../utility/firebaseFunction";
import { signUp } from "react-bootstrap";

const SignUp = () => {
  localStorage.clear();
  const email = useInputs("");
  const fullname = useInputs("");
  const username = useInputs("");
  const password = useInputs("");
  const [userPic, setUserPic] = useState("");
  const [loading, setLoading] = useState("");
  console.log(email, fullname, username, password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:3000/users", {
        email: email.value,
        fullname: fullname.value,
        username: username.value,
        password: password.value,
        user_pic: userPic,
      });
      console.log(res);
      localStorage.setItem("currentUserID", res.data.user.id);
      window.location.href = "./";
    } catch (err) {
      console.log(err);
    }
    try {
      let res = await signup(email, password);
      await axios.post("http://localhost:3000/users", {
        id: res.user.uid,
        email,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const uploadPicture = async (e) => {
    const files = e.target.files;
    console.log(files);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "instagram_db");
    data.append("cloud_name", "dhlczyds5");
    setLoading(true);
    let res = await fetch(
      "https://api.cloudinary.com/v1_1/dhlczyds5/image/upload",
      {
        method: "Post",
        body: data,
      }
    );
    const file = await res.json();
    setUserPic(file.secure_url);
    setLoading(false);
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
                Sign Up To See Photo And Videos From Your Friends
              </p>
              <div className="sign-up-info">
                <form onClick={handleSubmit}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    {...email}
                  />

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    {...fullname}
                  />

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    {...username}
                  />

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    {...password}
                  />

                  <input type="file" 
                  onInput={uploadPicture} 
                  {...userPic}
                  />

                  <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    placeholder="signup"
                  />
                </form>
              </div>
              <p className="terms-conditions">
                {" "}
                By signing up, you agree to our Terms and Policy
              </p>
            </div>
            <div className="right-column-login text-center">
              <Link to="/login" className="button">
                Have An Account? SignIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
