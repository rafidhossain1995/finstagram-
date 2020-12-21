import React, {useState, useEffect, useContext} from "react"
import axios from "axios"
import {AuthContext} from "../../providers/AuthContext"
import { apiURL } from "../../utility/apiURL"
import "../../CSS/Comments.css"
import CreateComment from "../Comments/CreateComment"

const CommentsIndex = ({post_id})=>{
    // const handleStyle = {
    //     height:"50px",
    //     width:"250px",
    //     margintop: "5%"
        
    // }
    const API = apiURL()
    const {token} = useContext(AuthContext)
    const [comments, setComments] = useState([]);
    const [username, setUsername] = useState([])

    useEffect(()=>{
        const showComment = async()=>{
            let res = await axios({
                method: "get",
                url: `${API}/comments/${post_id}`,
                headers:{
                    'AuthToken': token
                }
            })
            setComments(res.data.body.comments)
            console.log(res.data)
        }
        showComment()
    },[API])
    
    const addComment = (comment)=>{
        setComments(previousComments=>{
            return(
                [...previousComments, comment]
            )
        })
    }
    // const addUsername=(comment)=>{
    //     setUsername(previousComment=>{
    //         return(
    //             [...previousComment, comment]
    //         )
    //     })
    // }
    
    const showAllComments = comments.map((comment)=>{
        return(
       
            <li> 
            {comment.username}: {comment.content}
            </li>
           
        )
        
    })
    
debugger

    return(
        <div className="containerComments">
            <ul className="comments-list">
            {showAllComments}
            </ul>
               
                <CreateComment post_id={post_id} addComment={addComment}/>
        </div>
    )
}
export default CommentsIndex
