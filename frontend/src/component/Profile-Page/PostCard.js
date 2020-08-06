import React from "react"
import "../../CSS/PostCard.css"
import CreateComment from "../Comments/CreateComment"
import CommentsIndex from "../Comments/CommentsIndex"

const PostCard = ({imageUrl, postContent, username, post_id})=>{
    const handleStyle = {
        height:"75%",
        width:"75%",
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
            {/* <CreateComment post_id={post_id}/> */}
            <CommentsIndex post_id={post_id}/>  
            </div>
          

         </div>

            
        </div>

       
    )
}
export default PostCard