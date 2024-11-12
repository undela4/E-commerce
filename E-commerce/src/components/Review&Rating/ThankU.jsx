import React from 'react'
import { FcOk } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

export default function ThankU() {
    const nav=useNavigate();
  return (
    <div className='payment_success-cart'>
    <div className="payment_success-logo">
    <FcOk />
    </div>
    <div className="">
    </div>
    <div >
        <h3 className="fw-bold">Thank You for Your Review!.</h3>
    </div>
    <div className="description">
        <p> We appreciate your feedback, {'Undela'}! Your review helps us improve our products.</p>
    </div>
    <div className="mt-3 d-flex gap-5">
        <button className="btn btn-warning" onClick={()=>nav('/',{replace:true}) }>Home</button>
        <button className="btn btn-warning" onClick={()=>nav('/account',{replace:true})} >Profile</button>

    </div>
  
</div>

  )
}
