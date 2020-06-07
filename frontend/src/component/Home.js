import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import {AuthContext} from "../providers/AuthContext"
import { apiURL } from "../utility/apiURL"
import PostCard from "./PostCard"

const Home =()=>{
    const API = apiURL()
    const {currentUser, token} = useContext(AuthContext)
    const [posts, setPosts] = useState([])



    useEffect(() => {
            
        const allPosts= async () => {  
           
                    let res = await axios({
                    method: "get", 
                    url: `${API}/posts/`,
                    headers: {
                        'AuthToken': token
                    }
                })
                
            setPosts(res.data.payload);
            console.log(res.data)
        }
        allPosts();
    }, [API])
    debugger
    
    const showPosts = posts.map((post)=>{
        return(
           <>

           <PostCard  
           username = {post.username}
           imageUrl={API + post.pictures}
            
            postContent={post.content}/>
          
           </>
        )
    })

    
    return(
        // <div>{showPosts}</div>
        <div>{showPosts}</div>
    )
}
export default Home

