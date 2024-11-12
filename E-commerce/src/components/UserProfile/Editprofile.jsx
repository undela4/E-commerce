import React,{useEffect, useRef,useState,useContext} from 'react';
import InputFeild from '../Authentication/Login/InputFeild';
import { uploadimg,EditeProfile } from './helpers';
import { UserContext } from '../../Usecontext';
import Loder from '../loder/Loder';
import { clientValidation } from '../Authentication/Login/helper';
// import { ConsoleSqlOutlined } from '@ant-design/icons';

export default function Editprofile(){

    
    const r=useRef(null);
    const [s,sets]=useState({display:"none"});
    const [eud,seteud]=useState({'username':'','email':'','phoneNumber_1':''});
    const [photo,setphoto]=useState('');
    const {ud,fun,loader}=useContext(UserContext);
    const [imgul,setimg]=useState(ud.photo);

console.log(eud)

useEffect(()=>{
if(!ud)
    fun();
else{
    seteud({'username':ud.username,'email':ud.email,'phoneNumber_1':ud.phoneNumber_1})
}
},[])




function onchange(e)
{
    setphoto(e.target.files[0]); 
    setimg(URL.createObjectURL(e.target.files[0]));
}
function feildchange(e){
    seteud({...eud,[e.target.name]:e.target.value})

}
function formSubmit(){
   {
        EditeProfile(eud);
    }
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

            <div className="d-flex gap-5 w-100 justify-content-center">
            <InputFeild label="User name" defaultValue={ud.username} name="username" method={feildchange}  className="w-25 text-center" />
            </div>
            <div className="d-flex gap-5">
            <InputFeild label="Email address" defaultValue={ud.email} name="email"  method={feildchange} className="w-50"/>
            <InputFeild label="Phone Number" type="number" defaultValue={ud.phoneNumber_1} name="phoneNumber_1" method={feildchange} className="w-50"/>
            </div>
            <div className="d-flex justify-content-center">
            <button className='btn btn-warning mt-4 w-75' onClick={formSubmit}>Submit</button>

            </div>

        </div>
      ):<center><Loder/></center>
}
