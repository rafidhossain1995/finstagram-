import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {logout} from "../utility/firebaseFunction"
import {AuthContext} from "../providers/AuthContext"


export default function NavBar(params) {
    const currentUser = useContext(AuthContext)
    const display = ()=>{
        if(currentUser){
            return <button onClick= {logout}>logout</button>
        }else{
            return(
                <>
                <NavLink to ={"/signup"}>signup</NavLink>
                <NavLink to ={"/login"}>login</NavLink>
                
                </>
            )
        }
    }
    return(
        <nav>
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/users"}>Show All Users</NavLink>
            <button onClick = {logout}>Logout</button>
            {display()}
        </nav>
    )
};