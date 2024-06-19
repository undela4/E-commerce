import React,{useState,useContext, useEffect} from 'react'
import './profile.css';
import Profilepic from './Profilepic';
import Editprofile from './Editprofile';
import Myorders from './Myorders';
import Myaddresses from './Myaddresses';
import Wishlist from './Wishlist';
import { UserContext } from '../../Usecontext';



const component = [<Editprofile/>,<Myorders/>,<Wishlist/>,<Myaddresses/>,<Wishlist/>];

export default function Profile() {

  const [f,setf]=useState(0);

  const {fun}=useContext(UserContext);

useEffect(()=>{
  fun();
},[])

  return (
    <>
     <div className="containe mt-5 mb-5">
      <div className="row m-0 gap-5">
        <div className="profile-left col-3">
          <Profilepic f={f} content_switch={setf} />
        
        </div>

        <div className="profile-right col-8">
         <div className="mt-5 ">
         {
            component[f]
          }
         </div>
        </div>

      </div>
     </div>
    </>
  )
}
