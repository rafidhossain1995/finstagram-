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
import PostsList from "./PostsList"
import CreateComment from "../Comments/CreateComment"
import CommentsIndex from "../Comments/CommentsIndex"



    const Profile = ()=>{
        const [user, setUser] = useState([])
        const [url, setUrl] = useState("")
        const [progress, setProgress] = useState(0)
        const [error, setError] = useState("")
        const content = useInputs("")
        const[file, setFile] = useState([])
        const[pics, setPics] = useState([])
        const [submitted, setSubmitted] = useState(null)
        const API = apiURL()
        const {currentUser, token} = useContext(AuthContext)
        const [posts, setPosts] = useState([])
        let user_id = currentUser.id
        // const [postImage, setPostImagePath] = useState([])
        let email = currentUser.email
        

        useEffect(() => {
            
        const fetchData = async () => {  
            try{
                let res = await axios({
                    method: "get", 
                    url: `${API}/users/singleUser/${email}`,
                    headers: {
                        'AuthToken': token
                    }
                })
                
            setUser(res.data.user);    
            }catch(err){
                console.log(err)
            }      
        }
        fetchData();
        fetchPosts()
    }, [API, submitted]) 
    // line 53 is effect's the dependancy array

    // const addPost = (post)=>{
    //     setPics(previousPost=>{
    //         return(
    //             [...previousPost, post]
    //         )
    //     })
    // }
        const onSelectImage = (e)=>{
            e.preventDefault()
            setFile(e.target.files[0])
        }

        const addPost = async (e)=>{ 
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
                setSubmitted(true)
                // debugger
                // addPost(newPost.data.post["pictures"] && newPost.data.post["content"])
                // window.location.reload()
                // see if app still works if it doesn't have to reload. 
                

                

            }catch(err){
                console.log(err)
            }
        }
        debugger
        
        const fetchPosts= async () => {    
            let res = await axios({
                method: "get", 
                url: `${API}/posts/${user_id}`,
                headers: {
                    'AuthToken': token
                    }
            })
            setPosts(res.data.payload);
            console.log(res.data)
        }
        fetchPosts();   

       
        return(

  
            
            <div className="profileContainer">
                <div className="profile-pic">
                    
                    
                <img src={user.profile_pic} className="profile-img"/>
                </div>

				<h1 className="profile-user-name">{user.username}</h1>
                <form onSubmit={addPost} className="profileUserSettings">

                <h1 className="postPicsHere">Post Your Pictures Here!</h1>
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

            <PostsList posts={posts}/>
            
           
            
            
			
            </div>
             
            </div>

        
       
        )

    }
    export default Profile