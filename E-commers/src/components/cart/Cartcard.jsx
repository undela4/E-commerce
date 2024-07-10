import React from 'react';
import { useNavigate } from 'react-router-dom';
import { comma } from '../ProductListPage/ProductCart/.js';
export default function Cartcard({id,category,img, title,quantity,price,method,Increment,decrement,colors,spec,adf,flag}){
  
  const nav=useNavigate();
  
  return (
  
      <>
      
      <hr></hr>
      <div className="cart-card container" >
  
        <div className="cart-card-left" onClick={()=>nav(`/product/${category}/${id}`)}
          style={{cursor:"pointer"}}>
          <img src={img} />
        </div>

        <div className="cart-card-right">
          
          <div className="d-flex justify-content-between heading">
          <h6>{title}</h6>
          <h5>₹ {comma(price)}</h5>
          </div>
  
          <p style={flag} className='text-danger'>In Stock</p>

          <p>Eligible For Free Delivery</p>
          <p><span className='fw-bold'>Specifications</span>{spec} {adf}</p>
    
           <div  style={flag}>
           <div className="d-flex gap-3  align-items-baseline cart-quantity ">
              <h6>Quantity:</h6>
              <div className="d-flex gap-1 fs-6 me-5 align-items-baseline">
                
                  <button className='btn' onClick={()=>decrement()}>-</button>               
                  <span>{quantity}</span>
                  <button className='btn' onClick={()=>Increment()}>+</button>
  
  
              </div>
              <button className='btn btn-outline-danger' onClick={()=>method()}>Delete</button>
            </div>
           
           </div>
           
        
          
  
        </div>


      </div>
  
  
      </>
    )
  }
  