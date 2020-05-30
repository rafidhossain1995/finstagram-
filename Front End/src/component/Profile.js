import React, {useContext} from "react"
import {logout} from "../utility/firebaseFunction"
import {AuthContext} from "../providers/AuthContext"
import { NavLink } from "react-router-dom"

const Profile = ()=>{
    const {currentUser} = useContext(AuthContext)

    const displayButtons = ()=>{
        if(currentUser){
            return <button onClick = {logout}>Logout</button>
        }else{
            return (
                <>
                <NavLink to ={"/home"}>Home</NavLink>
                <NavLink to ={"/"}>Sign Up</NavLink>
                </>
            )
        }
    }
    return(
        <div>
            {displayButtons()}
        </div>
    )
}
export default Profile