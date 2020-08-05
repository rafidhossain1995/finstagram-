import React, { useReducer } from "react"
import "../../CSS/HomePostCard.css"
import CreateComment from "../Comments/CreateComment"
import CommentsIndex from "../Comments/CommentsIndex"


const HomePostCard = ({homeImageUrl, postContent, username, post_id})=>{
    const handleStyle = {
        height:"75%",
        width:"75%",
        border: "2px solid black"
        
    }

    return(
        <div className="homePic">

        <div className="picture">
            <h3>{username}</h3>
            <img className="profilePictureImage" src={homeImageUrl} style={handleStyle}/>
            <h2>{postContent}</h2>
            <div className="iconz">
            {/* <h3 className="heart">heart</h3>
            <h3 className="comment">Comment</h3>
            <h3 className="follow">follow</h3> */}

            <br/>
             <CreateComment post_id={post_id}/>
            
            </div>
          

         </div>
          {/* <CreateComment/>
          <CommentsIndex/>  */}

            
        </div>

       
    )
}
export default HomePostCard