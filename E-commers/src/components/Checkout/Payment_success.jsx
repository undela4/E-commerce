import React from 'react'
import './payment_success.css'
import { FcOk } from "react-icons/fc";





export default function Payment_success() {
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
        <div className="mt-3">
            <button className="btn btn-warning">Return to Myorders</button>
        </div>
      
    </div>
  )
}
