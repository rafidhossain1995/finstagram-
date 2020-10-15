import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import {AuthContext} from "../../providers/AuthContext"
import { apiURL } from "../../utility/apiURL"
import PostCard from "./PostCard"
import CreateComment from "../Comments/CreateComment"
import DisplayComment from "../Comments/CommentsIndex"
import "../../CSS/DisplayImage.css"

const DisplayImage =()=>{
    const API = apiURL()
    const {currentUser, token} = useContext(AuthContext)
    const [posts, setPosts] = useState([])

    let user_id = currentUser.id

    useEffect(() => {
            
        const createPosts= async () => {  
           
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
        createPosts();
    }, [API])

  
    
    
    const showPosts = posts.map((post)=>{
        debugger
        return(
           <div className="showPostDiv">

           <PostCard  
           username = {post.username}
           imageUrl={API + post.pictures}
           postContent={post.content}
           post_id={post.id}
            />
          
          
           </div>
        )
    })
    
    

    
    return(
      
       

         <div className="container">
            <div className="galleryDisplay">
                <div className="gallery-item" tabIndex="0">
                <div className="galleryImage">{showPosts}</div>
                
             
                </div>
            </div>
        </div>
        
    )
}
export default DisplayImage