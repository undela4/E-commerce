const express= require('express');
const app= express();
app.use(express.json());//body parsing
const cors=require('cors');
app.use(cors(
    {
        origin:"*",
    }
));
require('dotenv').config()

const expressfile=require('express-fileupload');

app.use(expressfile({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));



const router=require('./Routes/routes.js');

app.use('/v1',router);

const MongooDB=require("./Configurations/mongoDB.js")
MongooDB();

app.get('/',(req,res)=>{
    res.send('Hello World');
});


app.listen(5000,()=>{console.log(`listening on port::${5000}....`)});
