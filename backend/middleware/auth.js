const admin = require("../firebase")

const checkFirebaseToken= async(req, res, next)=>{
    try{
        const token = req.headers.authtoken
        console.log(token)
        const decodedToken = await admin.auth().verifyIdToken(token)
        const uid = decodedToken.uid
        req.user_id = uid
        next()

    }catch(err){
        console.log("Code Broke", err)
        res.status(401).json({message: "no authenticated user"})
    }
}


module.exports = {
    checkFirebaseToken
}