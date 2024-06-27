import React,{useEffect, useRef,useState,useContext} from 'react';
import InputFeild from '../Authentication/Login/InputFeild';
import { uploadimg } from './helpers';
import { UserContext } from '../../Usecontext';
import Loder from '../loder/Loder';

export default function Editprofile() {

    
    const r=useRef(null);
    const [s,sets]=useState({display:"none"});

    const [photo,setphoto]=useState('');
    const {ud,fun,loader}=useContext(UserContext);
    const [imgul,setimg]=useState(ud.photo);


// console.log(ud)

useEffect(()=>{

if(!ud)
    fun();

},[])




function onchange(e)
{
    setphoto(e.target.files[0]); 
    setimg(URL.createObjectURL(e.target.files[0]));
}

function ondubbleclick(){
    r.current.click();
    setTimeout(()=>{sets({display:"block"})},3000)
}

function onsubmit()
{

    uploadimg(photo);
    sets({display:"none"})

}



return loader ? (
        <div className="mt-5 p-3 d-flex flex-column">
            
            <center>
            <div className="profile-photo mb-5">
                
            <img src={ud.photo ? ud.photo : imgul} onDoubleClick={ondubbleclick}></img>
            
            <input ref={r} type="file" onChange={onchange} style={{display:"none"}} />
            <button className='btn btn-warning mt-3' style={s} onClick={onsubmit}>Upload</button>

            </div>
            </center>

            <div className="d-flex gap-5 w-100">
            <InputFeild label="First Name" defaultValue={ud.username}  className="w-50" />
            <InputFeild label="Last Name" className="w-50" />
            </div>
            <div className="d-flex gap-5">
            <InputFeild label="Email address"  defaultValue={ud.email}  className="w-50"/>
            <InputFeild label="Phone Number"  defaultValue={ud.phoneNumber_1}  className="w-50"/>
            </div>
            <button className='btn btn-warning mt-4'>Submit</button>


        </div>
      ):<center><Loder/></center>
}
