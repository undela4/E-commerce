const users =require('../Models/users');

exports.add_address = async(req,res) => {
    try{
        const email = req.body.email;
        const address = req.body.address;

        const user= await users.updateOne({email},{$push:{'addressList':address}});
        console.log(user);
        res.status(200).send({status:true,'msg':'Address added successfully'});
        
    }
    catch(err){
        console.error(err);
        res.status(500).send({status:false,'msg':err.message})
    }
}


exports.get_address = async(req,res) => {
    try{
        const email = req.body.email;

        const user= await users.findOne({email});
        console.log(user.addressList);
        res.status(200).send({status:true,'data':user.addressList});
        
    }
    catch(err){
        console.error(err);
        res.status(500).send({status:false,'msg':err.message})
    }
}

exports.del_address = async(req,res) => {
    try{
        const {email,id} = req.body;

        const user= await users.updateOne({email},{$pull:{'addressList':{_id:id } } });
        res.status(200).send({status:true,'msg':'Address deleted'});
        
    }
    catch(err){
        console.error(err);
        res.status(500).send({status:false,'msg':err.message})
    }
}