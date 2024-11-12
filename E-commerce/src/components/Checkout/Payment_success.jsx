import React from 'react'
import './payment_success.css'
import { FcOk } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';





export default function Payment_success() {

    const nav=useNavigate();

  return (
    <div className='payment_success-cart'>
        <div className="payment_success-logo">
        <FcOk />
        </div>
        <div className="">
            <h5>Order #{'12365ds685'}</h5>
        </div>
        <div >
            <h3 className="fw-bold">Your payment was successful</h3>
        </div>
        <div className="description">
            <p>Thank you for your order at our site. Your product is delivered securely</p>
        </div>
        <div className="mt-3 d-flex gap-5">
            <button className="btn btn-warning" onClick={()=>nav('/',{replace:true}) }>Home</button>
            <button className="btn btn-warning" onClick={()=>nav('/account',{replace:true})} >Myorders</button>

        </div>
      
    </div>
  )
}
