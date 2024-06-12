const mongoose = require('mongoose');


const products = new mongoose.Schema({
    
    key_img: { type: String, required: true },
    images: [{ type: String }],
    category: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    operating_system: { type: String, required: true },
    screen_size: { type: String, required: true },
    resolution: { type: String, required: true },
    ram: { type: String, required: true },
    storage: { type: String, required: true },
    battery_capacity: { type: String, required: true },
    camera: {
        front: { type: String},
        rear: { type: String}
    },
    processor: { type: String, required: true },
    dimensions: { type: String, required: true },
    weight: { type: String, required: true },
    color_options: [{ type: String, required: true }],
    network_technology: { type: String, required: true },
    sim_type: { type: String, required: true },
    additional_features: [{ type: String, required: true }],
    specifications: [{ type: String, required: true }]
});

module.exports = mongoose.model('products', products);
