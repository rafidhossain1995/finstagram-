import React, {useState, useEffect, useContext} from "react"
import axios from "axios"
import {AuthContext} from "../../providers/AuthContext"
import { apiURL } from "../../utility/apiURL"
import "../../CSS/Comments.css"

const CommentsIndex = ({post_id})=>{
    const handleStyle = {
        height:"50px",
        width:"250px",
        margintop: "5%"
        
    }
    const API = apiURL()
    const {token} = useContext(AuthContext)
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        const showComment = async()=>{
            let res = await axios({
                method: "get",
                url: `${API}/comments/${post_id}`,
                headers:{
                    'AuthToken': token
                }
            })
            debugger
            setComments(res.data.body.comments)
            console.log(res.data)
        }
        showComment()
    },[API])
    

    const showAllComments = comments.map((comment)=>{
        return(
        <ul className="ul" style={handleStyle}>
            <li> 
            {comment.username}: {comment.content}
            </li>
           
        </ul>
        )
        
    })



    return(
        <div className="containerComments">
            <div className="gallery">
                <div className="gallery-item" tabIndex="0">
                <div className="gallery-image" key="comment">{showAllComments}</div>
                </div>
            </div>
        </div>
    )
}
export default CommentsIndex