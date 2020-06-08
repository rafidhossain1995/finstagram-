import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import {AuthContext} from "../providers/AuthContext"
import { apiURL } from "../utility/apiURL"
import PostCard from "./PostCard"
import Comments from "./Comments"
import "../CSS/DisplayImage.css"

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
        return(
           <div>

           <PostCard  
           username = {post.username}
           imageUrl={API + post.pictures}
           postContent={post.content}
          
            />
          
           </div>
        )
    })
    
    

    
    return(
      
       

         <div className="container">
            <div className="gallery">
                <div className="gallery-item" tabIndex="0">
                <div className="gallery-image">{showPosts}</div>
             
                </div>
            </div>
        </div>
        
    )
}
export default DisplayImage