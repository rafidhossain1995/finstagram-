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
			return <button onClick={logout}>Logout</button>;
		} else {
			return (
				<>
			<Login/>
				</>
			);
		}
	};


    return(
    <>
    <nav className = "Nav">
      <div className = "menu">
       
        <div className = "brand">
            <div className = "logo">
            <div className="home-body">
            <NavLink to ={"/home"}className="insta-logo">Instagram</NavLink>
                <NavLink to={"/home"} className="home" >Home</NavLink>
                <NavLink to={"/users"} className="community">Show All Users</NavLink>
                <NavLink to = {"/profile"} className="profile">Profile</NavLink>
                
                <button className="logout" onClick = {logout}>Logout</button>  
      
            </div>
              
            </div>
            
        </div>
      </div>
    </nav>
    
     
      </>
       
      
    )
};


  