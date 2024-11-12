import React,{useState,useRef} from 'react';
import './login.css';``
import InputFeild from './InputFeild';
import { errorfunction, successfunction } from '../../../tostify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Forget_password({userdata,set})
{

   const [_1,set_1]=useState(true);
   const [_2,set_2]=useState(false);

   const [_3,set_3]=useState(true);
   const [_4,set_4]=useState(false);

   const [cotp,set_cotp]=useState('');
   const [sotp,set_sotp]=useState('');

   const navigate=useNavigate();

   const r=useRef();




   
  async function send_otp()
  {
    
    r.current.setAttribute("disabled", "true");
    await axios.post('https://e-commers-application.onrender.com/v1/mail',{email:userdata.email,"type":false}).then((r)=>{

        if(r.data.status)
          {
            set_sotp(r.data.otp);
            console.log(r.data.otp);
            set_1(false)
            set_2(true);
            successfunction("Otp sent successfully");
          }
          else{
            errorfunction(r.data.msg);
           
          }
    
       }).catch((err)=>{console.log(err)})
     

  } 

  function submit(){

    if(cotp==sotp){
        set_3(false);
        set_4(true);
    }
    else{
        errorfunction("Otp not matched");
    }
    
  } 

  async function reset_password()
  {
    console.log(userdata);
    if(userdata.password==userdata.Confirmpassword)
    {
        axios.put(`https://e-commers-application.onrender.com/v1/forget_password`,
            {"email":userdata.email,"password":userdata.password}).then((r)=>{
                if(r.data.status)
                    {
                    successfunction(r.data.msg);
                    navigate('/');
                }
                else{
                    errorfunction(r.data.msg);
                }


            }).catch((err)=>{console.log(err)});
        

    }else{
        errorfunction("Password not matched");

    }


    
  } 

    return(
        <div className="forget_password">
            <div className="mb-3">
                <h3>Forget Password</h3>
            </div>
            
            {
                _3&&<div className="">

            {
                    _1&&(<div className="">
                                <InputFeild label="Enter your Email" value={userdata.email} name="email" method={set} />
                                <button ref={r} className='btn btn-outline-warning'  onClick={send_otp}>Send OTP</button>
                        </div>)        
            }
                {
                    _2&& ( <div className="">
                                <InputFeild label="Enter OTP" value={cotp} method={(e)=>set_cotp(e.target.value)} />
                                <button className='btn btn-outline-warning' onClick={submit}>Submit</button>
                        </div>)
                }
                </div>

            }

         {
             _4&&( <div className="">
               <InputFeild label="Enter new password" value={userdata.password} name="password" method={set} />
               <InputFeild label="Confirm password" value={userdata.Confirmpassword} name="Confirmpassword" method={set}/>
               <button className='btn btn-outline-success' onClick={reset_password} >Reset Password</button>
           </div>)


         }

        </div>
        )
}