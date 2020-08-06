import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {logout} from "../utility/firebaseFunction"
import {AuthContext} from "../providers/AuthContext"
import "../CSS/Navbar.css"
import Login from "./Login"



export default function NavBar(params) {
    

const { currentUser } = useContext(AuthContext);

	const displayButton = () => {
		if (currentUser) {
      return(
        <>
        <NavLink to={"/home"} className="home" >Home</NavLink> 
        <NavLink to = {"/profile"} className="profile"></NavLink>
        <button onClick={logout} className="logout">Logout</button>
        </>
      ) 
      
		} else {
      return(
        <NavLink to={"/login"}>Login</NavLink>
      )
			
    }
    
  };
  


    return(
    <>
    <nav className = "Nav">
      <div className = "menu">
       
        <div className = "brand">
            <div className = "logo">
            <div className="home-body">
            <NavLink to ={"/home"}className="instaLogo">Instagram</NavLink>
                  {displayButton()}
            </div>
              
            </div>
            
        </div>
      </div>
    </nav>
    
     
      </>
       
      
    )
};


  