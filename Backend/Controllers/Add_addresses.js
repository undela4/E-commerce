const users=require('../Models/users.js');

exports.add_address = async(req,res) => {
    try{
        const {_id,address}= req.body;

        const user= await users.updateOne({_id},{$push:{'addressList':address}});
        // console.log(user);
        res.status(200).send({status:true,'msg':'Address added successfully'});
        
    }
    catch(err){
        console.error(err);
        res.status(500).send({status:false,'msg':err.message})
    }
}


exports.get_address = async(req,res) => {
    try{
        const _id = req.body._id;

        const user= await users.findOne({_id});
        // console.log(user.addressList);
        res.status(200).send({status:true,'data':user.addressList});
        
    }
    catch(err){
        console.error(err);
        res.status(500).send({status:false,'msg':err.message})
    }
}

exports.del_address = async(req,res) => {
    try{
        const {_id,id} = req.body;

        const user= await users.updateOne({_id},{$pull:{'addressList':{_id:id } } });
        res.status(200).send({status:true,'msg':'Address deleted'});
        
    }
    catch(err){
        console.error(err);
        res.status(500).send({status:false,'msg':err.message})
    }
}