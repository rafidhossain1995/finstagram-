import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import {AuthContext} from "../../providers/AuthContext"
import { apiURL } from "../../utility/apiURL"
import HomePostCard from "./HomePostCard"
import CreateComment from "../Comments/CreateComment"
import DisplayComment from "../Comments/CommentsIndex"
import "../CSS/DisplayImage.css"

const DisplayImage =()=>{
    const API = apiURL()
    const {currentUser, token} = useContext(AuthContext)
    const [homePosts, setHomePosts] = useState([])

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
                
            setHomePosts(res.data.payload);
            console.log(res.data)
        }
        createPosts();
    }, [API])
    
    
    const showHomePosts = homePosts.map((homePost)=>{
        return(
           <div>

           <HomePostCard  
           username = {homePost.username}
           homeImageUrl={API + homePost.pictures}
           postContent={homePost.content}
           profile_pic={homePost.profile_pic}  
            />
          
           </div>
        )

         
    })
    
    

    
    return(
      
       

         <div className="container">
            <div className="gallery">
                <div className="gallery-item" tabIndex="0">
                <div className="gallery-image">{showHomePosts}</div>
                
             
                </div>
            </div>
        </div>
        
    )
}
export default DisplayImage