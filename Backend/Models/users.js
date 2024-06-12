const mongoose=require('mongoose');

const users = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        length:30
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        maxlength:10
    },
    phoneNumber_1:{
        type:Number,
        length:10
    },
    addressList:[
        {
        firstName:{type:String},
        lastName:{type:String},
        email:{type:String},
        country:{type:String},
        street:{type:String},
        houseNumber:{type:String},
        city:{type:String},
        state:{type:String},
        postcode:{type:Number},
        phoneNumber:{type:Number},
      }
      
      ]
    ,        
    watchList:{
        type:Array,
        default:[]
    },
    myorders:{
        type:Array,
        default:[]
    },
    cartList: [{
        id: { type: String, required: true,unique:true },
        count: { type: Number, required: true }
    }]
})



module.exports=mongoose.model("users",users);
