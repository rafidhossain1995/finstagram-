import React from "react"
import "../CSS/PostCard.css"


const PostCard = ({imageUrl, postContent})=>{
    const handleStyle = {
        height:"300px",
        width:"300px",
        border: "2px solid black"
        
    }
    debugger
    return(
        <div className="pic">

        <div className="picture">
            <img src={imageUrl} style={handleStyle}/>
            <h2>{postContent}</h2>

         </div>
            
        </div>

       
    )
}
export default PostCard