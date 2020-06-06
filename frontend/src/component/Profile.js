import React, {useContext, useEffect,  useState} from "react"
import {AuthContext,} from "../providers/AuthContext"
import { NavLink } from "react-router-dom"
import NavBar from "./NavBar"
import axios from "axios"
import { apiURL } from "../utility/apiURL"
import "../CSS/Profile.css"
import firebase from "../firebase"
import {storage} from "../firebase"

    const Profile = ()=>{
        const [user, setUser] = useState([])
        const [profilePic, setProfilePic] = useState(null)
        const [url, setUrl] = useState("")
        const [progress, setProgress] = useState(0)
        const [error, setError] = useState("")
        const API = apiURL()
        const {token} = useContext(AuthContext)
        const {currentUser} = useContext(AuthContext)
        let email = currentUser.email

        useEffect(() => {
        const fetchData = async () => {  
            debugger   
                    let res = await axios({
                    method: "get", 
                    url: `${API}/users/singleUser/${email}`,
                    headers: {
                        'AuthToken': token
                    }
                })
                debugger
            setUser(res.data.user);
        }
        fetchData();
    }, [API])

        const handleChange =(e)=>{
            const file = e.target.files[0]
            if(file){
                const fileType = file["type"]
                const isImage = ["image/gif", "image/jpeg", "image/png"]

                if(isImage.includes(fileType)){
                    setError("")
                    setProfilePic(file)
                } else{
                    setError("Please Select an Image")
                }

            }else{
                
            }
        }

        const handleUpdate = ()=>{
            if(profilePic){
               let storageRef = firebase.storage().ref('profile_pictures/' + profilePic.name).put(profilePic)
               storageRef.on("state_changed", snapshot=>{
                   const progress = Math.round(
                       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                   )
                   setProgress(progress)
               },
               error=>{
                    setError(error)
               },
                ()=>{
   
                    firebase.storage().ref("profile_pictures")
                    .child(profilePic.name)
                    .getDownloadURL()
                    .then(url =>{
                        console.log(url)
                    })
               }
               
               )
                
            }else{
                setError("Error please choose an image to upload")
            }
        }
        

       
        return(

        <div className="form">
            <p>Hello {user.email} </p>

            <div>
            <input className="file" type = "file" onChange={handleChange}/>
            <button onClick = {handleUpdate}>Upload Profile</button>
            </div>


            <div style = {{height:"100px"}}>
                {progress > 0 ? <progress value={progress} max ="100"/>: ""}
                 <p style={{color:"red"}}> {error} </p>
            </div>
                   
        </div>
        )

    }
    export default Profile



    // const Profile = ()=>{
//     const [user, setUser] = useState([])
//     const [profile_Pic, setProfile_Pic] = useState()
 
//     const API = apiURL()
//     const {token} = useContext(AuthContext)
//     const {currentUser} = useContext(AuthContext)
//     let email = currentUser.email
 
//     useEffect(() => {
//         const fetchData = async () => {  
//             debugger   
//                     let res = await axios({
//                     method: "get", 
//                     url: `${API}/users/singleUser/${email}`,
//                     headers: {
//                         'AuthToken': token
//                     }
//                 })
//                 debugger
//             setUser(res.data.user);
//         }
//         fetchData();
//     }, [API])

//     const profilePicUpload = async () => {
//         let storageRef = firebase.storage().ref('profile_pictures/' + profile_Pic.name)
//         let upload = storageRef.put(profile_Pic);
//         let url;
//         upload.on('state_changed', snapshot => {
//         }, error => {
//             console.log(error);
//             throw error;
//         },async  () => {
//             url = await upload.snapshot.ref.getDownloadURL();
            
//         })
//     }

//     const handleSubmit = async(e)=>{
//         e.preventDefault()
//         try{
//             if(profile_Pic){
//                 await profilePicUpload()
//             }else{
//                 console.log("error")
//             }
//         }catch(err){
//             console.log(err)
//         }
//     }

//     const handlePicUpload = (e)=>{
//         setProfile_Pic(e.target.files[0])
//     }

   
//     return(  
//     <form className = "form" onSubmit = {handleSubmit}>
//         <label htmlFor ="profilePicture" className = "profile-Pic">Profile Picture </label>
//          <input type = "file" name="profilePic" accept = ".png, ,jpg, .jpeg" onChange = {handlePicUpload}/>
//          <div className="setting">
//             <p>{user.email}</p>
//         </div>

        
        
//     </form>
        
      
  
//    )
  
// }
// export default Profile


/* <>
<form className="signUpForm" onSubmit={handleSubmit}>
    <label for="profilePic" className="formLabel">Profile Picture: (Optional)</label>
     <input type="file" name="profilePic" accept=".png, .jpg, .jpeg" onChange={handlePicUpload}/>
</form>
</>

<div className="container">
        <div className="profile-page">
            <div className="profile-image">
                <img src="data:image/jpeg;base64,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"/>
            </div>
        

        <div className="setting">
            <p>{user.email}</p>
        </div>
                    <div className="stats">
                        <ul>
                        <li><span className="count">0</span> posts</li>
					    <li><span className="count">0</span> followers</li>
					    <li><span className="count">0</span> following</li>
                        </ul>
                    </div>
                <div className="profile-description">
                    <p>Hi I'm {user.username}, Welcome To my Finstagram! </p>
                </div>

        </div>
            <div className="gallery">
                <div className = "gallery-image">
                <img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                </div>
                <div className="gallery">
                <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                </div>
                <div className="gallery">
                <img src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                </div>
                <div className="gallery">
                <img src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                </div>
                
            </div>
            
           
    </div> */
