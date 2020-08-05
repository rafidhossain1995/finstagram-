import React from "react"
import "../../CSS/PostCard.css"
import CreateComment from "../Comments/CreateComment"
import DisplayComment from "../Comments/CommentsIndex"

const PostCard = ({imageUrl, postContent, username})=>{
    const handleStyle = {
        height:"100px",
        width:"100px",
        border: "2px solid black"
        
    }

    return(
        <div className="pic">

        <div className="picture">
            <h3>{username}</h3>
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