import React,{useState} from 'react';
import './login.css';
import { login2} from '../../../assets/img';

import {Button} from 'react-bootstrap';
import InputFeild from './InputFeild';
import { errorfunction, successfunction } from '../../../tostify';
import { clientValidation } from './helper';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import {useDispatch} from 'react-redux';
import { login } from '../../../Redux-Store/userSlice';


export default function Login() {

const [userdata,setuserdata]=useState({email:"",password:""});
const nav=useNavigate();
const dispatch = useDispatch();

function onchange(e)
{
    setuserdata({...userdata,[e.target.name]:e.target.value});
}

async function onsubmit(){
    if(clientValidation(userdata))
    {   
        try{
            const result=await axios.post('http://localhost:5000/v1/sign_in',userdata);
            if(result.data.status)
            {
                Cookies.set('token',result.data.token);
                dispatch(login())
                successfunction('Login Successfull');

                nav('/',{replace:true});
            }else{
                errorfunction(result.data.msg);
            }
        }
        catch(err){
            errorfunction(err.message);
            console.log(err.message);
        }
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




