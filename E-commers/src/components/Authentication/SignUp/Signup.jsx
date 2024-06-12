import React,{useState} from 'react';
import  './signup.css';
import InputFeild from '../Login/InputFeild';
import {Button} from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa";
import { login3 } from '../../../assets/img';
import { successfunction,errorfunction } from '../../../tostify';
import { clientValidation,sign_up } from '../Login/helper';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Signup(){

const nav=useNavigate();
const init={username:"",email:"",password:"",confirmpassword:""};
const [userdata,setuserdata]=useState(init);


function onchange(e)
{
  setuserdata({...userdata,[e.target.name]:e.target.value});
}

async function onsubmit()
{
  if(clientValidation(userdata))
    {
      try{
        const result=await axios.post('http://localhost:5000/v1/sign_up',userdata);
        if(result.data.status)
        { 
        successfunction("Signup Success");
        nav('/login')  
        }
        else{
          errorfunction(result.data.msg);
        }

    }
    catch(err){
        console.log(err);
        errorfunction('Something went wrong');
    }
     
   }
      
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
