import React from "react"
import "../../CSS/PostCard.css"
import CreateComment from "../Comments/CreateComment"
import DisplayComment from "../Comments/CommentsIndex"

const PostCard = ({imageUrl, postContent, username, post_id})=>{
    const handleStyle = {
        height:"200px",
        width:"200px",
        border: "2px solid black"
        
        
    }

    return(
        <div className="pic">

        <div className="picture">
            <h3>{username}</h3>
            <img className="pix" src={imageUrl} style={handleStyle}/>
            <h4>{postContent}</h4>
            <div className="iconz">
           

            <br/>
            <CreateComment post_id={post_id}/>
            </div>
          

         </div>

            
        </div>

       
    )
}
export default PostCard