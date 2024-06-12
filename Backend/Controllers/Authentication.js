const users=require('../Models/users.js');
const jwt =require ('jsonwebtoken');

exports.sign_up= async(req,res) => {
    try{
        const {username,email,password} = req.body;
        console.log(req.body);

        const user= await users.findOne({email})
        if(user){
            return res.status(201).send({'status':false,'data':'User already exists'});
        }else{
            const r= await users.create({
                username,
                email,
                password,
                phoneNumber_1:"",
                phoneNumber_2:"",
                address:[],
                watchList:[],
                myorder:[],
                cartList:[]  
                
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
                console.log(token);
                res.status(201).send({status:true,token:token,msg:"Login sucessfull"});
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
        if(!token){
            res.status(200).send({status:false,msg:"Invalid token"});
        }else{
        const d=jwt.verify(token,"murali");
        req.user=d.user;
            console.log(d)
        const user=await users.findOne({_id:d.user.id});
        
        res.send({status:true,msg:"User Varified"});
        
        }
    }
    catch(err){
        res.status(200).send({status:false,msg:"Token expaired",Error:err.message});

    }

}


exports.Forgetpassword=async(req,res)=>{

    try{
        
        const{email,password}=req.body;
        console.log(req.body);
        const user= await users.findOne({email});
        console.log(user);
        if(!user){
            res.status(200).send({msg:"User not exits"});
        }else{
            const body={
                password:password
            }
          const payload= await users.updateOne({email:user.email},{$set:body});
         
            if(payload.modifiedCount>=1) 
            {
              
              const token=  tokencreattion(user);
             
              res.status(200).send({status:true,token:token,msg:"Password reset sucessfull"});
            }
            else{
                res.status(200).send({status:false,msg:"You given Previous Password"});
            }

            }
    }
    catch(err){
        console.log(err.message);
        res.status(500).send({Error:err.message});
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