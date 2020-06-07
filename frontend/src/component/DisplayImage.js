import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import {AuthContext} from "../providers/AuthContext"
import { apiURL } from "../utility/apiURL"
import PostCard from "./PostCard"

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
           <>

           <PostCard  
           username = {post.username}
           imageUrl={API + post.pictures}
            postContent={post.content}
                
            />
          
           </>
        )
    })
    

    
    return(
        // <div>{showPosts}</div>
        <div>{showPosts}</div>
        // <div>
        //     {imageUrl}
        //     {postContent}
        // </div>
    )
}
export default DisplayImage