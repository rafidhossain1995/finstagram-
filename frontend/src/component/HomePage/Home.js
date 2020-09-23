import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import {AuthContext} from "../../providers/AuthContext"
import { apiURL } from "../../utility/apiURL"
import HomePostCard from "./HomePostCard"
import CreateComment from "../Comments/CreateComment"
// import post from "../../../../backend/Queries/post"
const Home =()=>{
    const API = apiURL()
    const {currentUser, token} = useContext(AuthContext)
    const [posts, setPosts] = useState([])
    const [username, setUsername] = useState([])




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
   
    
    const showPosts = posts.map((post)=>{
        return(
           <>
            {/* {post.username} */}
           <HomePostCard  
           username = {post.username}
           homeImageUrl={API + post.pictures}
           postContent={post.content}
           post_id = {post.id}
           profile_pic = {post.profile_pic}
           />
          
           </>
        )
    })

    
    return(
        // <div>{showPosts}</div>
        
        <div>
        <h1> Look at your friend's Posts </h1>
       
        {showPosts}
        
    
        </div>
    )
}
export default Home

