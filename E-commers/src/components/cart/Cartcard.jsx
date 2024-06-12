import React from 'react';


export default function Cartcard({img, title, description,quantity,price,del_price,method,Increment,decrement,colors,spec,adf,flag}){
  return (
  
      <>
      
      <hr></hr>
      <div className="cart-card" >
  
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
          <input type="checkbox" style={flag}/>
  
          </div>
  
  
          </div>
  
          <p style={flag} className='text-danger'>In Stock</p>
          <p>{description}</p>

          <p>Eligible For Free Delivery</p>

          {
            colors&&(<div className="d-flex gap-3">

          <p className='fw-bold'>Colours:</p>

            {
              colors.map((item)=>{
                return(
  
                  <div className="d-flex" key={item}
                   style={{backgroundColor:item}}>
                   <p style={flag}>{item}</p>
  
                    </div>
                )
            
            
          })
        }
            </div>)
          }
          
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
  