const users =require('../Models/users');


exports.add_item = async(req,res) => {
    try{
      const _id=req.body._id;
      const pid=req.body.pid
      
      const u= await users.updateOne({_id},{$push:{'wishList':pid}})
      // console.log(u)
      res.status(200).send({status:true,'msg':'Item added to wishlist'});

    }catch(err){
        console.log(err);
    }

}

exports.del_item = async(req,res) => {
    try{
      const{_id,pid}=req.body;
      
        console.log(req.body)
      const u= await users.updateOne({_id},{$pull:{'wishList':pid}})

      // console.log(u)

      res.status(200).send({status:true,'msg':'Item deleted in wishlist'});

    }catch(err){
        console.log(err);
    }

}
