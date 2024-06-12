import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Price({price,items})
{
 const nav=useNavigate();

  return(
  <>
  <div className="price">
    <div className="flex">
    <h6>Subtotal</h6>
    <h6>₹ {price}</h6>
    </div>
    <div className="flex">
    <h6>Shipping Fee</h6>
    <h6>₹ {0}</h6>


    </div>
    <p>Delivery to  <span>Inimerla</span></p>

    <div className="total">
    <h6>Total</h6>
    <h6>₹ {price}</h6>
    </div>
    <div className="proceed">
      <button className='btn btn-warning w-100 fw-bold' onClick={()=>nav(`/checkout/`)}>Proceed to checkout</button>
    </div>

  </div>
  </>
  )
}

