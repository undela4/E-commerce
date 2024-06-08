const express=require('express');
const router=express.Router();
const {weather,gemini,image,audio}=require('../Controllers/Ai.js');


router.post('/weather',weather);
router.post('/gemini',gemini);
router.post('/img',image);
router.post('/audio',audio);






module.exports=router