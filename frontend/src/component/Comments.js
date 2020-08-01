import React, {useState, useEffect, useContext} from "react"
import {useInputs} from "../utility/InputHooks"
import axios from "axios"
import {AuthContext} from "../providers/AuthContext"
import { apiURL } from "../utility/apiURL"
import "../CSS/Comments.css"



const Comments = ({post_id})=>{
const API = apiURL()
const {token} = useContext(AuthContext)
const{currentUser} = useContext(AuthContext)
let email = currentUser.email
let user_id = currentUser.id
const [photoComments, setPhotoComments] = useState([]);
 const [comment, setComment] = useState("");

 const handleComment = async (e)=>{
        try{
            let data = {
                post_id: post_id,
                commenters_id: user_id,
                content: e.target.value,


            }
            let res = await axios({
                method:'post',
                url:`${API}/comments/${post_id}/${user_id}`,
                headers:{
                    'AuthToken': token
                },
                body: JSON.stringify(data)
            })
        }catch(err){
            console.log(err)
        }
    }
    

    return(
        <>
        <input type="text" className="comment-box"/>
        <button onclick={handleComment}>Post Your Comment</button>
       </>
        
        
        
    )
}

export default Comments