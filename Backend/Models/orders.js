const mongoose = require('mongoose');


const orders=new mongoose.Schema(

        {
            order_id:{type:String},
            product_id:{type:String},
            amount:{type:Number},
            img:{type:String},
            date_of_order:{type:Date,default:Date.now},
            delivery_date: { 
                type: Date, 
                default: function() {
                    return new Date(Date.now() + 8 * 24 * 60 * 60 * 1000); // 8 days after date_of_order
                }
            },
            delivery_status:{type:String,default:"pending"}

        }
    )


module.exports=mongoose.model("orders",orders);

