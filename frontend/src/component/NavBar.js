import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {logout} from "../utility/firebaseFunction"
import {AuthContext} from "../providers/AuthContext"
import "../CSS/Navbar.css"



export default function NavBar(params) {
    



    return(
        <nav>
            <NavLink to={"/home"} className="home" >Home</NavLink>
            <NavLink to={"/users"}>Show All Users</NavLink>
            <NavLink to = {"/profle"}>Profile</NavLink>
            <button onClick = {logout}>Logout</button>
        
        </nav>
    )
};