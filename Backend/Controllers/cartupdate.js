const users=require('../Models/users.js');
const products=require('../Models/product.js');

exports.cartupdate= async (req,res)=>{
    try{

        const {_id,data}=req.body; 
        // console.log(req.body);
        const user=await users.findOne({_id});
        
        if (!user) {
            return res.status(404).send({ status: false, message: 'User not found' });
        }
    
        const itemIndex = user.cartList.findIndex(item => item.id === data.id);
        console.log("Item index:", itemIndex);

        if (data.count===0) {
            if (itemIndex !== -1) {
                user.cartList.splice(itemIndex, 1);
                await user.save();
                return res.status(200).send({ status: true, data: user, msg: "Item removed from cart" });
            } else {
                return res.status(404).send({ status: false, msg: 'Item not found in cart' });
            }
        }
    
        if (itemIndex !== -1) {
            console.log("Current count:", user.cartList[itemIndex].count);
            user.cartList[itemIndex].count = data.count;
            await user.save();
        } else {
            user.cartList.push(data);
            await user.save();
        }

        // console.log("Updated cartList:", user.cartList);

        await user.save();

        res.status(200).send({status:true,data:user,msg:"Cart Updated"});
     

    }
    catch(err){
         console.log(err.message);
         res.status(500).send({status:false,Error:err.message});
    }

}


exports.get_cart_items= async(req,res)=>{
    try{

        const {_id}=req.body;
        const user=await users.findOne({_id});
        if(!user)
            {
            return res.status(404).send({status:false,msg:"User not found"});
        }
        const cartList=user.cartList;
        // console.log(cartList);
        
        const a=[];
        const b=[];

        cartList.filter((i)=>{a.push(i.id); b.push(i.count)})
        // console.log(a);
        const items=await products.find({ _id: {$in:a} })
        // console.log(items);

        res.status(200).send({status:true,data:{items:items,count:b},msg:"Cart Items"});
    }
    catch(err){
        console.log(err.message);
        res.status(500).send({status:false,Error:err.message});
    }


} 

exports.ClearCart = async(req,res)=>{
    try{
        const _id=req.body._id
        const u= await users.updateOne({_id:_id},{$set:{'cartList':[]}});
        console.log(u)
        res.status(200).send({status:true,msg:"Cart Cleared"});

    }catch(err){
        console.log(err.message);
        res.status(500).send({status:false,Error:err.message});
    }
}