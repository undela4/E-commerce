
// const express = require('express');
// const multer = require('multer');
// const { spawn } = require('child_process');
// const path = require('path');
// const fs = require('fs');
// const cors = require('cors');



// const app = express();
// const upload = multer({ dest: 'uploads/' });
// app.use(cors())
// app.use(express.json());

// app.post('/api/vqa', upload.single('image'), (req, res) => {
//     const question = req.body.question;
//     const imagePath = req.file.path;
//     console.log(question);
//     console.log(imagePath);


//     const pythonProcess = spawn('python', ['./vqa.py', `r${imagePath}`, question]);

//     let scriptOutput = '';

//     pythonProcess.stdout.on('data', (data) => {
//         scriptOutput += data.toString();
//     });

//     pythonProcess.stderr.on('data', (data) => {
//         console.error(`stderr: ${data}`);
//     });

//     pythonProcess.on('close', (code) => {
//         console.log(`Python script exited with code ${code}`);
//         fs.unlink(imagePath, (err) => {
//             if (err) console.error(err);
//         });
//         if (code !== 0) {
//             return res.status(500).json({ error: 'Python script failed' });
//         }
//         res.json({ answer: scriptOutput.trim() });
//     });
// });

// app.listen(5000, () => {
//     console.log('Server started on http://localhost:5000');
// });


const express= require('express');
const app= express();


app.use(express.json());
const cors=require('cors');

require('dotenv').config()

app.use(cors(
    {
        origin:"*",
    }
));
const expressfile=require('express-fileupload');

app.use(expressfile({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));



const router=require('./Routes/routes.js');

app.use('/v1',router);

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(5000,()=>{console.log(`listening on port::${5000}`)});
