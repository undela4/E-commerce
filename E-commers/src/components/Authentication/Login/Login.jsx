import React,{useState} from 'react';
import './login.css';
import { login2} from '../../../assets/img';

import {Button} from 'react-bootstrap';
import InputFeild from './InputFeild';
import { successfunction } from '../../../tostify';
import { clientValidation } from './helper';
import { useNavigate } from 'react-router-dom';


export default function Login() {

const [userdata,setuserdata]=useState({email:"",password:""});
const nav=useNavigate();

function onchange(e)
{
    console.log(userdata);
    setuserdata({...userdata,[e.target.name]:e.target.value});

}

function onsubmit(){
    if(clientValidation(userdata))
    {
        successfunction("Login successfully Done");
        nav('/')
    }
    setuserdata({email:"",password:""})

}

  return (
    <>
    <div className="login-section containe">
        <img src={login2} id="login-img" />

        <div className="login-right">
            <div className="mb-4">
            <h1>Login in to Exclusive</h1>
            <h6>Enter your details below</h6>
            </div>
            <div className=''>
                <InputFeild type="text" className="textFields" label="Enter your Email" 
                method={onchange} name="email" value={userdata.email}/> 

                <InputFeild type="password" className="textFields" label="Enter your Password"
                method={onchange} name="password" value={userdata.password} />

               <div className="d-flex gap-5 mt-4 align-items-baseline">
               <Button variant='danger' onClick={onsubmit}>Login</Button> 
                <a href="#" className='text-danger text-decoration-none '> Forget Password ?</a>
               </div>

            </div>
        </div>
    </div>
    </>
  )
}




