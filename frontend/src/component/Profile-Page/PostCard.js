import React from "react"
import "../../CSS/PostCard.css"
import CreateComment from "../Comments/CreateComment"
import CommentsIndex from "../Comments/CommentsIndex"

const PostCard = ({username, imageUrl, postContent, post_id})=>{
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
            {/* <CommentsIndex post_id={post_id}/>   */}
            </div>
          

         </div>

            
        </div>

       
    )
}
export default PostCard


// import React, { useReducer } from "react"
// import "../../CSS/HomePostCard.css"
// import CreateComment from "../Comments/CreateComment"
// import CommentsIndex from "../Comments/CommentsIndex"


// const PostCard = ({homeImageUrl, postContent, username, post_id, profile_pic})=>{
//     const handleStyles = {
//         height:"75%",
//         width:"100%"
//         // border: "2px solid black"
        
//     }

//     return(
//         <div className="homePic">

//         <div className="picture">
//             <div className="postheader">
//                 <img className="profile-P" src={profile_pic}/>
//                 <h1 className="usernames">{username}</h1>
//             </div>
//             <img className="profilePictureImage" src={homeImageUrl} style={handleStyles}/>
//             <div className="comment-section">
//                 <h2 className="caption">{postContent}</h2>
//                 <CommentsIndex post_id={post_id}/> 
//             </div>

//          </div>
//         </div>

       
//     )
// }
// export default PostCard