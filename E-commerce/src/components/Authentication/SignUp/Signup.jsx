import React,{useState} from 'react';
import  './signup.css';
import '../Login/login.css'
import InputFeild from '../Login/InputFeild';
import {Button} from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa";
import { login3 } from '../../../assets/img';
import { successfunction,errorfunction } from '../../../tostify';
import { clientValidation} from '../Login/helper';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Signup(){

const nav=useNavigate();

const init={username:"",email:"",password:"",confirmpassword:""};
const [userdata,setuserdata]=useState(init);

const [cotp,set_cotp]=useState('');
const [sotp,set_sotp]=useState('');

const [otpflag,setotpflag]=useState(false);

function onchange(e)
{
  setuserdata({...userdata,[e.target.name]:e.target.value});
}


async function getotp(){

  try{

   await axios.post('https://e-commers-application.onrender.com/v1/mail',{email:userdata.email,"type":true,"name":userdata.username}).then((r)=>{

    if(r.data.status)
      {
        set_sotp(r.data.otp);
        successfunction("Otp sent successfully");
        return true;
      }
      else{
        errorfunction(r.data.msg);
        nav('/login')
        return false;
      }

   })
 
  }
  catch(err)
  {
    console.log(err);
  }

}

async function otp_check(){

  if(cotp===sotp){
    await axios.post('https://e-commers-application.onrender.com/v1/sign_up',userdata).then((result)=>{
      if(result.data.status)
      { 
      successfunction("Signup Success");
      nav('/login')  

      }
      else{
        errorfunction(result.data.msg);
        set_cotp('');
      }
     })
  }
  else{
    errorfunction('OTP not match');
    return false
  }

}

function otp_resend(){
  
  successfunction("Otp Resended check your Email Inbox ");
  getotp();

}


async function onsubmit()
{

  if(userdata.password!=userdata.confirmpassword){
    errorfunction('Password and Confirm Password not match');
    return;
  }

  if(clientValidation(userdata))
  {
     
    getotp();
    setotpflag(true);
     
   }
      

}


return (
    <div className="signup container align-items-start mt-5">
    <img src={login3} id="sign-img" />

{
   !otpflag ? (<div className="login-right">
        <div className="mb-4">
        <h1>Create An Account</h1>
        <h6>Enter your details below</h6>

        </div>
        <div>
            <InputFeild type="text" className="textFields" label="Enter your name" 
            method={onchange} name="username" value={userdata.username}/> 

            <InputFeild type="email" className="textFields" label="Enter your email"
            method={onchange} name="email" value={userdata.email} />

            <InputFeild type="password" className="textFields" label="Password"
            method={onchange} name="password" value={userdata.password} />

            <InputFeild type="password" className="textFields" label="ConfirmPassword"
            method={onchange} name="confirmpassword" value={userdata.confirmpassword} />

           <div className="w-100 d-flex flex-column gap-3 mt-5 controls">

           <Button variant='danger' className="w-100" onClick={onsubmit}>Sign Up</Button> 
           <Button  variant="outline-light" className="w-100 text-dark border-dark"><FaGoogle />    Sign Up with google</Button> 

            <a href="/login" className='text-danger text-decoration-none '>
            <span>Alredy have account ? Login</span>
            </a>
           </div>

        </div>
    </div> ): (<Otpcart otp={cotp} setotp={set_cotp} otp_check={otp_check} otp_resend={otp_resend} />)

}

</div>
  )

}



function Otpcart({otp,setotp,otp_check,otp_resend})
{



  return (

    <div className="otp-card">

        <div className="mb-3">
          <h3>OTP Sent To Your Mail</h3>
        </div>
      <InputFeild label="Enter OTP"  value={otp} method={(e)=>setotp(e.target.value)}  />
      <button className='btn btn-outline-success mt-2 ' onClick={otp_check} >Submit</button>
      <button className='btn btn-outline-danger mt-2 ' onClick={otp_resend} >Resend</button>

    </div>

    )
}
