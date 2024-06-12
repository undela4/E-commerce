const otp = require('otp-generator');
const users=require('../Models/users.js');


exports.getOTP=async(req,res,next)=>{
    try{

        const{email,type}=req.body;
        console.log(email,type);
        const user=await users.findOne({email});
        console.log(user);


        if(user && type){

            res.status(200).send({status:false,msg:"User alredy exited"});
        }
        else{
        
         if(!user && !type){
            res.status(200).send({status:false,msg:"User not found"});
         }
         else{
            const t=otp.generate(4, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
            req.app.locals.OTP=t;
            next();
         }
    }
    
    }catch(err){
        res.status(500).send({msg:"",Error:err.message});
    }
}

exports.getotp=async(req,res,next)=>{
    try{

        const{email}=req.body;
        
        const user=await users.findOne({email});
        console.log(user);
        if(!user){
            
            res.status(200).send({status:false,msg:"User Not exited"});
        }
        else{
     const t=otp.generate(4, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
    req.app.locals.OTP=t;
    next();
    }
    
    }catch(err){
        res.status(500).send({msg:"",Error:err.message});
    }

}