import React from "react"


const PostCard = ({user_id, imageUrl, postContent})=>{
    const handleStyle = {
        height:"300px",
        width:"300px",
        border: "2px solid black"
        
    }
    return(
        <div>
            <h3>{user_id}</h3>
            <div>
            <img src={imageUrl} style={handleStyle}/>
            </div>
            <h2>{postContent}</h2>
        </div>

        
    )
}
export default PostCard