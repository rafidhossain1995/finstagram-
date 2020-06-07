import React, {useContext, useEffect,  useState} from "react"
import {AuthContext,} from "../providers/AuthContext"
import { NavLink } from "react-router-dom"
import NavBar from "./NavBar"
import axios from "axios"
import { apiURL } from "../utility/apiURL"
import "../CSS/Profile.css"
import firebase from "../firebase"
import {storage} from "../firebase"
import { useInputs } from "../utility/InputHooks"
import DisplayImage from "./DisplayImage"


    const Profile = ()=>{
        const [user, setUser] = useState([])
        const [url, setUrl] = useState("")
        const [progress, setProgress] = useState(0)
        const [error, setError] = useState("")
        const content = useInputs("")
        const[file, setFile] = useState([])
        const [postImage, setPostImagePath] = useState([])

        const API = apiURL()
        const {token} = useContext(AuthContext)
        const {currentUser} = useContext(AuthContext)
        let email = currentUser.email
        let user_id = currentUser.id
        

        useEffect(() => {
            
        const fetchData = async () => {  
           
                    let res = await axios({
                    method: "get", 
                    url: `${API}/users/singleUser/${email}`,
                    headers: {
                        'AuthToken': token
                    }
                })
                
            setUser(res.data.user);
        }
        fetchData();
    }, [API])

    
        const onSelectImage = (e)=>{
            e.preventDefault()
            setFile(e.target.files[0])
        }

        const handleNewPost = async (e)=>{ 
            try{
                e.preventDefault()
                const formData = new FormData()
                formData.append("allImages", file)
                formData.append("content", content.value)
                const config = {
                    headers:{
                        "content-type":"multipart/form-data",

                    }
                }
                let newPost = await axios.post(`${API}/posts/${user_id}`, formData, config)
                console.log(newPost.data)
                console.log("new post created")
                window.location.reload()
                

                

            }catch(err){
                console.log(err)
            }
        }
     
        
       

       
        return(

        <div className="form">
            <p>Hello {user.username} </p>

            <form onSubmit={handleNewPost}>

            <input className="file" type = "file" onChange={onSelectImage}/>
            <input className="content" type="text" {...content}/>
            <input type="submit"/>

            </form>
            <div className="posts"><DisplayImage/></div>
                   
        </div>
        )

    }
    export default Profile



    