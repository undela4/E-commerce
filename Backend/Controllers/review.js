const review =require("../Models/reviews");
const admin = require('firebase-admin');

exports.addReview = async (req,res)=>{
    try{
        const {data,img}=req.body;
        
        const r=await review.create({

            "user_id":data.user_id,
            "user_name":data.user_name,
            "product_id":data.product_id,
            "product_name":data.product_name,
            "product_brand":data.product_brand,
            "title":data.title,
            "description":data.description,
            "rating":data.rating,
            "photo":img
          
        
        });
        res.status(200).send({status:true,msg:"review added successfully"});

    }catch(err){
        res.status(200).send({status:false,Error:err.message});
    }
}

exports.upload = async (req,res)=>{

try{

    const file=req.files.file
    const bucket = admin.storage().bucket();
    const filename = `${`review_photos`}/${Date.now()}`;
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
  


    stream.on('error', (err) => {
        console.error('File upload error:', err);
      res.send({status:false,msg:'File upload error.'});
      });


      const c=stream.on('finish', (e) => {
        req.imgurl=downloadURL,
        res.send({status:true,msg:'File upload Done.',img:downloadURL});
       
    });
    
        stream.end(file.data);
}catch(err){
    console.error(err);
    res.status(500).send({status:false,msg:err.message});
}

}

exports.getReviews= async(req, res)=>{
    try{
        
        const reviews=await review.find();
        res.status(200).send({status:true,data:reviews});

    }
    catch(err)
    {
        console.log(err.message);
        res.status(500).send({status:false,Error:err.message});
    }
}