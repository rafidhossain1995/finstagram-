import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import {AuthContext} from "../providers/AuthContext"
import { apiURL } from "../utility/apiURL"
import PostCard from "./PostCard"

const DisplayImage =()=>{
    const API = apiURL()
    const {currentUser, token} = useContext(AuthContext)
    const [posts, setPosts] = useState([])

    useEffect(() => {
            
        const createPosts= async () => {  
           
                    let res = await axios({
                    method: "get", 
                    url: `${API}/posts`,
                    headers: {
                        'AuthToken': token
                    }
                })
                
            setPosts(res.data.payload);
            console.log(res.data)
        }
        createPosts();
    }, [API])
    debugger
    
    const showPosts = posts.map((post)=>{
        return(
           <>

           <PostCard  
           username = {post.user_id}
           imageUrl={API + post.pictures}
            
            postContent={post.content}/>
          
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