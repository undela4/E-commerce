import React,{useState} from 'react';
import  './signup.css';
import InputFeild from '../Login/InputFeild';
import {Button} from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa";
import {login3} from  'D:/Projects/E-commers/E-commers/src/assets/img.js';
import { successfunction,errorfunction } from '../../../tostify';
import { clientValidation } from '../Login/helper';


export default function Signup(){


const init={username:"",email:"",password:"",confirmpassword:""};
const [userdata,setuserdata]=useState(init);


function onchange(e)
{
    setuserdata({...userdata,[e.target.name]:e.target.value});
}

function onsubmit(){
  if(clientValidation(userdata)){
    successfunction("Sign Up successfully Done");


  }
  setuserdata(init)
}


  return (
    <div className="login-section signup containe align-items-start mt-5">
    <img src={login3} id="sign-img" />

    <div className="login-right">
        <div className="mb-4">
        <h1>Create An Account</h1>
        <h6>Enter your details below</h6>

        </div>
        <div>
            <InputFeild type="text" className="textFields" label="Enter your name" 
            method={onchange} name="username" value={userdata.username}/> 

            <InputFeild type="password" className="textFields" label="Enter your email"
            method={onchange} name="email" value={userdata.email} />

            <InputFeild type="password" className="textFields" label="Password"
            method={onchange} name="password" value={userdata.password} />

            <InputFeild type="password" className="textFields" label="ConfirmPassword"
            method={onchange} name="confirmpassword" value={userdata.confirmpassword} />

           <div className="w-100 d-flex flex-column gap-2">
           <Button variant='danger' className="w-50" onClick={onsubmit}>Sign Up</Button> 
           <Button  variant="outline-light" className="w-50 text-dark border-dark"><FaGoogle />    Sign Up with google</Button> 

            <a href="/login" className='text-danger text-decoration-none '>
            <span>Alredy have account ? Login</span>

            </a>
           </div>

        </div>
    </div>
</div>
  )

  
}
