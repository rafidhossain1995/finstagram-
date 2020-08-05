const db = require("../DB/index");
const upload = require("./imageUploader")

const addProfilePic = async (req, res, next) => {
    try{
      upload(req, res, err=>{
        try{
          const {users_profile_pic_id} = req.params
          let profile_picture= '/uploads/' + req.file.filename
          db.one(`INSERT INTO profile_pic (users_profile_pic_id, profile_picture, time) VALUES($1, $2, $3) RETURNING *`, [users_profile_pic_id, profile_picture, time])
          .then(done=>{
            console.log('then');
            res.status(200).json({
              status:'success',
              post: done,
              message: 'created profil_picture'
            })
          })
        }catch(err){
          console.log(err)
          next(err)
        }
      })
    }catch(err){
      console.log(err)
       next(err)
    }
  
    
  }



module.exports = {addProfilePic}