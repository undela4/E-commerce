import React,{useState,useRef} from 'react';
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
import { Forget_password } from './Forget_password';


export default function Login() {

const [userdata,setuserdata]=useState({email:"",password:""});
const [forget_password_flag,set_forget_password_flag]=useState(false);


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
                Cookies.set('uId',result.data.data._id);

                dispatch(login());

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
    <div className="login-section container">
        <img src={login2} id="login-img" />
    {
        !forget_password_flag ? (<div className="login-right">
            <div className="mb-4">
            <h1>Login in to Exclusive</h1>
            <h6>Enter your details below</h6>
            </div>
            <div className=''>
                <InputFeild type="text" className="textFields" label="Enter your Email" 
                method={onchange} name="email" value={userdata.email}/> 

                <InputFeild type="password" className="textFields" label="Enter your Password"
                method={onchange} name="password" value={userdata.password} />

               <div className="controls">

                <div className="d-flex gap-4 justify-content-start">
                <a href="#" className='text-danger text-decoration-none ' onClick={()=>set_forget_password_flag(true)}> Forget Password ?</a>
                <a href="/signup" className='text-danger text-decoration-none '>Dont have account ?</a>
                </div>
               <Button variant='danger' onClick={onsubmit}>Login</Button> 

                

               </div>

            </div>
        </div>):(<Forget_password userdata={userdata} set={onchange} />)

    }
    </div>
    </>
  )
}






