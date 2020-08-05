import React from "react"
import "../CSS/PostCard.css"
import CreateComment from "./CreateComment"
import DisplayComment from "./CommentsIndex"

const PostCard = ({imageUrl, postContent, post_id})=>{
    const handleStyle = {
        height:"300px",
        width:"300px",
        border: "2px solid black"
        
    }

    return(
        <div className="pic">

        <div className="picture">
            <img src={imageUrl} style={handleStyle}/>
            <h2>{postContent}</h2>
            <div className="iconz">
            <h3 className="heart">heart</h3>
            <h3 className="comment">Comment</h3>
            <h3 className="follow">follow</h3>

            <br/>
            
            </div>
          

         </div>

            
        </div>

       
    )
}
export default PostCard