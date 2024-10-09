const mongoose = require('mongoose');   

const MongooDB=()=>{
    try{
    mongoose.connect('mongodb+srv://muraliundela369:Murali%402004@cluster0.onsel64.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(()=>{console.log("MongoDb connected.")});
    
    }
    catch(err){
        console.log(err);
    }
}
module.exports = MongooDB;


