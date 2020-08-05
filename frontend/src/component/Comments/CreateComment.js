import React, {useState, useContext} from "react"
import axios from "axios"
import {AuthContext} from "../../providers/AuthContext"
import { apiURL } from "../../utility/apiURL"
import "../../CSS/Comments.css"
import CommentsIndex from "./CommentsIndex"


const CreateComment = ({post_id})=>{
    const API = apiURL()
    const {token} = useContext(AuthContext)
    const [comment, setComment] = useState("");
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let res = await axios({
            method:"post",
            url: `${API}/comments/${post_id}`,
            data: {content: comment},
            headers:{
                'AuthToken': token,
                
            }
        })
        window.location.reload()
    }
 
   

    return(
        <form onSubmit= {handleSubmit}>
        <input type="text" className="comment-box" value={comment} onChange={(e)=>setComment(e.target.value)}/>
        <button>Post Your Comment</button>
         <CommentsIndex post_id={post_id}/>    
       </form>
        
        
        
    )
}

export default CreateComment