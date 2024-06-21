const products =require('../Models/product.js')

exports.getproducts= async(req,res)=>{
    
    try{
        
        const p= await products.find();
        res.status(200).send({status:true,data:p});

    }catch(err){
        res.status(200).send({status:false,Error:err.message});
    }

}

exports.get_by_category= async(req,res)=>{
    
    try{
        const category=req.body;

        const p= await products.find(category);
        res.status(200).send({status:true,data:p});

    }catch(err){
        res.status(200).send({status:false,Error:err.message});
    }

}

exports.get_by_id= async(req,res)=>{
    
    try{
        const category=req.params.category;
        const p= await products.find({category:category});
        res.status(200).send({status:true,data:p});

    }catch(err){
        res.status(200).send({status:false,Error:err.message});
    }

}