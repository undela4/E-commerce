const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const review = new Schema({
    user_id: { 
        type: Schema.Types.ObjectId, 
       
    },
    user_name: { 
        type: String, 
        required: true 
    },
    product_id: { 
        type: Schema.Types.ObjectId, 
        required: true 
    },
    product_name: { 
        type: String, 
        required: true 
    },
    product_brand: { 
        type: String, 
        required: true 
    },
    title: { 
        type: String, 
        default: '' 
    },
    description: { 
        type: String, 
        default: '' 
    },
    rating: { 
        type: Number, 
        min: 0, 
        max: 5, 
        default: 0 
    },
    photo: { 
        type: String, 
        default: '' 
    }
}, { timestamps: true });

module.exports = mongoose.model('review', review);

