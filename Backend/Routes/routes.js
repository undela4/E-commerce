const express=require('express');
const router=express.Router();
const {weather,gemini,image,audio}=require('../Controllers/Ai.js');
const Authenticate = require('../Controllers/Authentication.js');
const {getOTP,getotp}=require('../Controllers/getotp.js');
const {Mail}=require('../Controllers/Mail.js');
const {getproducts,get_by_category,get_by_id} = require('../Controllers/getproducts.js');
const {cartupdate,get_cart_items} = require('../Controllers/cartupdate.js');
const  {add_address,get_address,del_address} = require('../Controllers/Add_addresses.js');


//http://localhost:5000/v1/products
router.get('/products',getproducts);
//http://localhost:5000/v1/products
router.get('/products/:category',get_by_id);




//http://localhost:5000/v1/products/
router.post('/products/',get_by_category);

//http://localhost:5000/v1/sign_up
router.post('/sign_up',Authenticate.sign_up);
//http://localhost:5000/v1/sign_in
router.post('/sign_in',Authenticate.sign_in);
//http://localhost:5000/v1/verify
router.post('/verify',Authenticate.Auth);
//http://localhost:5000/v1/mail
router.post('/mail',getotp,Mail);

//http://localhost:5000/v1/get_cartList
router.post('/get_cartList',get_cart_items)


//http://localhost:5000/v1/address/add
router.post('/address/add',add_address)

//http://localhost:5000/v1/address/get
router.post('/address/get',get_address)

//http://localhost:5000/v1/address/del
router.post('/address/del',del_address)



//put routes

// http://localhost:5000/v1/forget_password
router.put('/forget_password',Authenticate.Forgetpassword);

// http://localhost:5000/v1/cartupdate
router.put('/cartupdate',cartupdate)









router.post('/weather',weather);
router.post('/gemini',gemini);
router.post('/img',image);
router.post('/audio',audio);
module.exports=router