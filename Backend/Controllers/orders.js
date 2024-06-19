const users = require("../Models/users");



exports.createOrder =async (req,res)=>{

    try{
        const {_id,data}=req.body;

        const u=await users.updateOne({_id},{$push:{'myorders':data}})
       
        res.status(200).send({status:true,msg:"Order Placed successfully"})

    }catch(err)
    {
        console.log(err);
        res.status(500).send({status:false,msg:err.message});
    }

}

exports.getOrders =async (req,res)=>{
    try{
        
        const {_id}=req.body;
        const u=await users.findOne({_id});
        res.status(200).send({status:true,data:u.myorders,msg:"Order Placed successfully"})

    }
    catch(err){
        console.log(err);
        res.status(500).send({status:false,Error:err.message});
    }
}

exports.cancelOrder =async (req,res)=>{
    try{

        const {_id,oid}=req.body;
        console.log(req.body)
        const u= await users.updateOne({_id},{$pull:{'myorders':{_id:oid}} });
        console.log(u);
        res.status(200).send({status:true,msg:"Order Canceled successfully"});

    }catch(err){
        console.log(err);
        res.status(500).send({status:false,msg:err.message});
    }
}