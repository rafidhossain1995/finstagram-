import React, { useReducer } from "react"
import "../../CSS/HomePostCard.css"
import CreateComment from "../Comments/CreateComment"
import CommentsIndex from "../Comments/CommentsIndex"


const HomePostCard = ({homeImageUrl, postContent, username, post_id, profile_pic})=>{
    const handleStyles = {
        height:"75%",
        width:"100%"
        // border: "2px solid black"
        
    }

    return(
        <div className="homePic">

        <div className="picture">
            <div className="postheader">
                <img className="profile-P" src={profile_pic}/>
                <h1 className="usernames">{username}</h1>
            </div>
            <img className="profilePictureImage" src={homeImageUrl} style={handleStyles}/>
            <div className="comment-section">
                <h2 className="caption">{postContent}</h2>
                <CommentsIndex post_id={post_id}/> 
            </div>

         </div>
        </div>

       
    )
}
export default HomePostCard