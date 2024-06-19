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
    photo:{type:String},
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
    wishList:[String],

    myorders:[
        {
            order_id:{type:String,default:"ORD0000369"},
            product_id:{type:String},
            product_name:{type:String},
            amount:{type:Number},
            img:{type:String},
            category:{type:String},
            date_of_order:{type:Date,default:Date.now},
            delivery_date: { 
                type: Date, 
                default: function() {
                    return new Date(Date.now() + 8 * 24 * 60 * 60 * 1000); // 8 days after date_of_order
                }
            },
            delivery_status:{type:String,default:"pending"},
            Address_id:{type:String}

        }
    ],
    cartList:[{
        id:{type:String},
        count:{type:Number}
    }]



})



module.exports=mongoose.model("users",users);
