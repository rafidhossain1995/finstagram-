import React, { useState } from "react";
import { useInputs } from "../utility/InputHooks"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../CSS/SignUp.css";
import axios from "axios";
import { signup } from "../utility/firebaseFunction";
import { apiURL } from "../utility/apiURL";
const API = apiURL();

const SignUp = () => {
  localStorage.clear();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userPic, setUserPic] = useState("");
  const [loading, setLoading] = useState("");
  const history = useHistory();
  console.log(email,username, password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {    
        let res = await signup(email, password);
        await axios.post(`${API}/users`, {id: res.user.uid, email, username, password });
    } catch (err) {
      console.log(err)
    }
  };



  const uploadPicture = async (e) => {
    const files = e.target.files;

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
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />


                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.currentTarget.value)}
                  />

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />

                  <input type="file" onInput={uploadPicture} {...userPic} />

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
