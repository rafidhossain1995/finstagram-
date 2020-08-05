import React, {useContext, useEffect,  useState} from "react"
import {AuthContext,} from "../../providers/AuthContext"
import { NavLink } from "react-router-dom"
import NavBar from "../NavBar"
import axios from "axios"
import { apiURL } from "../../utility/apiURL"
import "../../CSS/Profile.css"
import firebase from "../../firebase"
import {storage} from "../../firebase"
import { useInputs } from "../../utility/InputHooks"
import DisplayImage from "./DisplayImage"
import CreateComment from "../Comments/CreateComment"
import DisplayComment from "../Comments/CommentsIndex"


    const Profile = ()=>{
        const [user, setUser] = useState([])
        const [url, setUrl] = useState("")
        const [progress, setProgress] = useState(0)
        const [error, setError] = useState("")
        const content = useInputs("")
        const[file, setFile] = useState([])
        // const [postImage, setPostImagePath] = useState([])

        const API = apiURL()
        const {token} = useContext(AuthContext)
        const {currentUser} = useContext(AuthContext)
        let email = currentUser.email
        let user_id = currentUser.id
        

        useEffect(() => {
            
        const fetchData = async () => {  
           
                    let res = await axios({
                    method: "get", 
                    url: `${API}/users/singleUser/${email}`,
                    headers: {
                        'AuthToken': token
                    }
                })
                
            setUser(res.data.user);
        }
        fetchData();
    }, [API])

    
        const onSelectImage = (e)=>{
            e.preventDefault()
            setFile(e.target.files[0])
        }

        const handleNewPost = async (e)=>{ 
            try{
                e.preventDefault()
                const formData = new FormData()
                formData.append("allImages", file)
                formData.append("content", content.value)
                const config = {
                    headers:{
                        "content-type":"multipart/form-data",

                    }
                }
                let newPost = await axios.post(`${API}/posts/${user_id}`, formData, config)
                console.log(newPost.data)
                console.log("new post created")
                window.location.reload()
                // see if app still works if it doesn't have to reload. 
                

                

            }catch(err){
                console.log(err)
            }
        }
        debugger
        
       

       
        return(

  

            <div className="container">
                <div className="profile-pic">
                    
                    
                <img src={user.profile_pic} className="profile-img"/>
                </div>

				<h1 className="profile-user-name">{user.username}</h1>
                <form onSubmit={handleNewPost} className="profile-user-settings">


			    <input className="file" placeholder= "hello" type = "file" onChange={onSelectImage}/>
                <input placeholder = "Enter Caption" className="content" type="text" {...content}/>
                <button type="submit" className="btn profile-edit-btn">Add Picture</button>

			    </form>

                <div className="profile-stats">

				<ul>
					<li><span className="profile-stat-count">164</span> posts</li>
					<li><span className="profile-stat-count">188</span> followers</li>
					<li><span className="profile-stat-count">206</span> following</li>

				</ul>

            <div className="profile-content">
			<h2><span className="profile-real-name">Welcome To</span> {user.username}'s finstagram account!</h2>
			</div>

            <DisplayImage/>
           
            
            
			
            </div>
             
            </div>

        
       
        )

    }
    export default Profile