import React, { useState,useRef } from 'react'
import InputFeild from '../Authentication/Login/InputFeild';
import { FaMinusCircle } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa6";
import { FaAmazonPay } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import { FcOk } from "react-icons/fc";
export default function Payment(){
  
    const [f,setf]=useState(false);
    const r=useRef(null);


 function drop(){
    !f?(r.current.style.display="none"):(r.current.style.display="block");
       setf(!f);   

 }   


  return(
    <div className="payment-item">

      <div className="payment-title row" onClick={drop}>
      <h3 className='col-11 ms'>Payment Method</h3>
      <div className="fs-3 col-1" >
                    {
                        f?(<FcOk />):(<FaMinusCircle />)
                    
                    }
       </div>

      </div>

      <div ref={r} style={{display:'block'}}>
      <div className="p-4">
      <div className=" d-flex gap-3">
        <input type="radio" name="1"/>
        <h4>Debt Cart</h4>
      </div> 

        <div className="ms-3">
          <InputFeild label="Name on card"/>
          <InputFeild label="Card number"/>
          
        </div>
        <div className="d-flex gap-5 ms-3">
          <InputFeild label="Expairy Date" className="w-50"/>
          <InputFeild label="CVV" className="w-50"/>
        </div>
        <button className='btn btn-outline-success ms-3'>Submit</button>
      
      </div>
    <hr></hr>
    <div className="d-flex gap-3 ms-3">
      <input type="radio" name="1"/>
      <h4>UPI Apps </h4>
      <FaGooglePay className='fs-3'/>
      <FaAmazonPay className='fs-3'/>
      <SiPhonepe   className='fs-3'/>
      </div>
      <p>Google Pay,amezon Pay,Phone pay,Bharth Pay...,etc</p>
      <hr></hr>
      <div className="d-flex gap-3 ms-3">
      <input type="radio" name="1"/>
      <h4> Cash On Delivery </h4>
      </div>
      <p>Pay with cash upon delivery</p>
      
      </div>

    </div>
  )
}