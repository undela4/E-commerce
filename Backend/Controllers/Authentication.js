const users=require('../Models/users.js');
const jwt =require ('jsonwebtoken');

exports.sign_up= async(req,res) => {
    try{
        const {username,email,password} = req.body;
        

        const user= await users.findOne({email})
        if(user){
            return res.status(201).send({'status':false,'msg':'User already exists'});
        }else{
            const r= await users.create({
                username,
                email,
                password,
                phoneNumber_1:"",
                phoneNumber_2:"",
                photo:"data:image/png;base64,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",
                addressList:[],
                wishList:[],
                myorder:[],
                cartList:[],
                
            });
            return res.status(200).send({'status':true,'data':r,'msg':'Success'});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send({'status':false,'msg':err.message});
    }
}



exports.sign_in = async(req,res) => {
    try{
        const {email,password}=req.body;
    
        const user= await users.findOne({email});
      
        if(user){
         
            if(user.password!==password){
                res.status(201).send({status:false,msg:"Incorrect password"});
            }
            else{
                const token=tokencreattion(user)
                // console.log(token);
                res.status(200).send({status:true,token:token,data:user,msg:"Login sucessfull"});
                }   
           
        
        }else{  
             res.status(200).send({status:false,msg:"User not exited"});

        }  
    }
    catch(err){
       
        res.send({Error:err.message});
    }
}


exports.Auth=async(req,res)=>{

    try{
        
        const {token}=req.body;

        if(!token)
        {
            res.status(200).send({status:false,msg:"Invalid token"});
        }else{
        const d=jwt.verify(token,"murali");
        req.user=d.user;
        // console.log(d);
        const user=await users.findOne({_id:d.user.UserId});
        // console.log(user)
        
        res.send({status:true,'data':user,msg:"User Varified"});
        
        }
    }
    catch(err){
        res.status(200).send({status:false,msg:"Token expaired",Error:err.message});

    }

}


exports.Forgetpassword=async(req,res)=>{

    try{
        
        const{email,password}=req.body;
        
            const body={
                password:password
            }
          const payload= await users.updateOne({email},{$set:body});
         
            if(payload.modifiedCount>=1) 
            {

              res.status(200).send({status:true,msg:"Password reset sucessfull"});
            }
            else{
                res.status(200).send({status:false,msg:"You given Previous Password"});
            }
 
    }
    catch(err){
        res.status(500).send({"msg":err.message});
    }
}

exports.EditProfile=async(req,res)=>{

    try{
        
        const{uId,data}=req.body;
        console.log(req.body)

          const payload= await users.updateOne({_id:uId},{$set:data});
         console.log(payload)
            if(payload.modifiedCount>=1) 
            {

              res.status(200).send({status:true,msg:"Profile updated sucessfully"});
            }
            else{
                res.status(200).send({status:false,msg:"You given Previous details"});
            }
 
    }
    catch(err){
        res.status(500).send({"msg":err.message});
    }
}

function tokencreattion(user)
{
    
    const payload={

        user:{
            username:user.username,
            UserId:user.id,
           
        }}
    const token=  jwt.sign(payload,"murali", { expiresIn:'1h' });

    return token;
}