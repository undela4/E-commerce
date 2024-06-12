const mongoose = require('mongoose');   

const MongooDB=()=>{
    try{
    mongoose.connect('mongodb://localhost:27017/E-commers')
        .then(()=>{console.log("MongoDb connected.")});
    
    }
    catch(err){
        console.log(err);
    }
}
module.exports = MongooDB;


