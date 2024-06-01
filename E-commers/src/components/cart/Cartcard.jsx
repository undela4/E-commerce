import React from 'react';

export default function Cartcard({img, title, description,quantity,price,del_price,method}){
    return (
  
      <>
      
      <hr></hr>
      <div className="cart-card">
  
        <div className="cart-card-left">
          <img src={img} />
        </div>
        <div className="cart-card-right w-100">
          
          <div className="d-flex justify-content-between heading">
          <h6>{title}</h6>
          
          <div className="d-flex gap-3">
            <del>
          <h5>₹ {del_price}</h5>
  
            </del>
          <h5>₹ {price}</h5>
          <input type="checkbox" />
  
          </div>
  
  
          </div>
  
          <p>In Stock</p>
          <p>{description}</p>
          <p>Eligible For Free Delivery</p>
          <p>Colours</p>
          <p>Spec</p>
  
          <div className="d-flex gap-3  align-items-baseline">
              <h6>Quantity:</h6>
              <div className="d-flex gap-3 fs-6 me-5">
                  <span> -</span>               
                  <span>1</span>
                  <span>+</span>
  
  
              </div>
              <button className='btn btn-outline-danger' onClick={()=>method()}>Delete</button>
              </div>
  
        </div>
      </div>
  
  
      </>
    )
  }
  