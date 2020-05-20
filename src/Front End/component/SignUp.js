import React, {useState} from "react"
import {useInputs} from "../utility/InputHooks"
import {Link} from "react-router-dom"
import "../CSS/SignUp.css"
// import axios from "axios"

const SignUp = ()=>{
    localStorage.clear()
    const email = useInputs("")
    const fullName = useInputs("")
    const userName = useInputs("")
    const password = useInputs("")
    const [userPic, setUserPic] = useState("")
    const [loading, setLoading] = useState("")

    // const handleSubmit = async (e)=>{
    //     e.preventDefault()
    //     try{
    //         let res = await axios.post("http://localhost:3000/users",{
    //             fullName: fullName.value,
    //             userName:userName.value,
    //             password:password.value,
    //             email:email.value,
    //             user_pic:userPic
    //         })
    //         localStorage.setItem("currentUserID", res.data.user.id)
    //         window.location.href = "./"

    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    return(
      <div className = "instagram">
          <div className = "sign-up-pic">
              <div className = "ig">
                  <div className = "instagram-info">
                      <h2>Instagram</h2>
                      <h3>Sign Up To See Photos And Videos Of Your Friends.</h3>
                      <button className = "facebook">Log In with FaceBook</button>
                      <p>--------or----------</p>          
                      <input className = "email" placeholder="Email"/> 
                      <br/>
                      <input className = "fullName" placeholder="Full Name"/>  
                      <br/>
                      <input className = "userName" placeholder="Username"/>  
                      <br/>
                      <input className = "password" placeholder="Password"/>   
                      <br/>
                      <button className="signup">Sign Up</button>             
                      <div className="already">
                      <div className = "sign-in">
                      <p>Have An Account? Sign In</p>
                      </div>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>
    )
}
export default SignUp
