//import cloudinary modules
const cloudinary = require("cloudinary").v2;
const multer = require("multer")
const { CloudinaryStorage } = require("multer-storage-cloudinary")

// //configure cloudinary
// cloudinary.config({
//     cloud_name: 'djqbwmvjg',
//     api_key: '492171555336437',
//     api_secret: 'OO5HtI8g0gpuIZyjR3m1jXa9-KE'
// })


// //configure multjer-storage-cloudinary
// const clStorage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: async (req, file) => {
//         return {
//             folder: "vnr2021",
//             public_id: file.fieldname + '-' + Date.now()
//         }
//     }
// })

//configure cloudinary
cloudinary.config({
    cloud_name:'dh8amkhcf',
         api_key:'836138837284545',
    api_secret:'qSgpQFN_fgL96slh_ikboYN2CRM'
 })
 //configure multer-storage-cloudinary
 const clStorage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:async (req,file)=>{
        return{
              folder:"first",
             public_id:file.fieldname+'-'+Date.now()
        }

    }
 })


//configure multer
const multerObj = multer({ storage: clStorage })

module.exports=multerObj;