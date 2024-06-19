const users =require('../Models/users');
const admin = require('firebase-admin');

exports.upload_image = async(req,res) => {
    try{
        const _id = req.params.id;

        const file = req.files.file;
        // console.log(id,file);


        const bucket = admin.storage().bucket();
        const filename = `${`Profile_photos`}/${Date.now()}`;
        const fileUpload = bucket.file(filename);

        
        const downloadURL = await fileUpload.getSignedUrl({

            action: 'read',
            expires: '03-01-2026', 
        });
        const stream = fileUpload.createWriteStream({
            metadata: {
              contentType: file.mimetype
            }
          });
      

        const u=await users.updateOne({_id},{$set:{'photo':downloadURL[0]}});
        // console.log(u);

        stream.on('error', (err) => {
            console.error('File upload error:', err);
          res.send({status:false,msg:'File upload error.'});
          });


          const c=stream.on('finish', (e) => {
            req.imgurl=downloadURL,

            res.send({status:true,msg:'File upload Done.',img:downloadURL});
           
        });
        
            stream.end(file.data);
        




    }
    catch(err)
    {
        console.log(err.message);
        res.status(500).send({status:false,msg:err.message});
    }

}