import React, { useState,useContext } from 'react'
import { BsCameraFill } from "react-icons/bs";
import {useRef} from 'react'
import userAuth from '../../customeHooks/userAuth';
import { UserContext } from '../../Usecontext';




export default function Profilepic({f,content_switch})
{
   
  const [u,Logout]=userAuth();
  const {ud,fun,loader}=useContext(UserContext);

    
function log(){
  Logout();
}


function cs(index)
{
    content_switch(index);
}


  return (
    <div className='profile-pic'>

      <div className="profile-photo mt-5">
        <img src={ud.photo}></img>

      </div>


      <div className="name mt-3"><h2>Undela Murali</h2></div>

      <div className="options">

        {
            ["Edit profile","My Orders","Wishlist","My Addresses"].map((i,index)=>{
                return(
                    <div key={index} style={{borderLeft:f===index? "4px solid blue": "none" }} >
                        <h4 onClick={()=>cs(index)}  style={{fontWeight:f===index ? "bold":"",color:f===index ? "black" : ""  }}>{i}</h4>
                    </div>
                )
            })
        }
        <h4 className='mt-4 ms-4 btn btn-danger fw-bold' onClick={log} >Logout</h4>
      </div>




    </div>
  )
}






