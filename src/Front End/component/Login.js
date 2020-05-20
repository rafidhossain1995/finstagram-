import React from "react"
import {useInputs} from "../utility/InputHooks"
import {Link} from "react-router-dom"
import "../CSS/Login.css"
// import axios from "axios"

const Login = ()=>{
    localStorage.clear()
    const userName = useInputs("")
    const password = useInputs("")

// const handleSubmit = async (e)=>{
//     e.preventDefault()
//     try{
//         let res = await axios.post("http://localhost:3000/users/login",{
//             userName:userName.value,
//             password: password.Value
//         })
//         console.log(res)
//         localStorage.setItem("currentUserID", res.data.user.id)
//         window.location.href = "./"
//     }catch(err){
//         console.log(err)
//     }
// }
    return(
        <div id="wrapper">
        <div className="content">
          <div className="header">
            <img src="https://i.imgur.com/zqpwkLQ.png" />
          </div>
          <div className="l">
            <input type="text" placeholder="Username" className="input-1" />
            <div className="overlap-text">
              <input type="password" placeholder="Password" className="input-2" />
             
            </div>
            <input type="button" value="Log in" className="btn" />
            <br/>
            <a>Forgot?</a>
          </div>
        </div>
        <div className="newAccountDiv">
          <div className="sign-up">
            Don't have an account?<a href="#">Sign up</a>
          </div>
        </div>
      </div>
    )
}
export default Login