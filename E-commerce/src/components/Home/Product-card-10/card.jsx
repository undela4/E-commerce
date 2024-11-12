import React from 'react';
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import './.css'
import Rating from '../../Review&Rating/Rating';
export default function Card({img,title,price,category,_id}) {

  const nav=useNavigate();
  return (
    <>
      <div className="col-3 card-container">

            <div className="card-img" onClick={()=>nav(`/product/${category}/${_id}`)}>
                <img src={img} alt="img"/>

            </div>
            <div className="card-content d-flex flex-column">
                        <div className="d-flex flex-column gap-2">
                           <Rating rate={3} />
                            <div><CiHeart className='fs-5' /> </div>
                            </div>
                        <h5 className='fw-bold' >{title}</h5>
                        <p className=''>Save 60%</p>
                        <div className="prices d-flex  gap-3">
                            <h5 className='text-dark'>₹{Math.floor(price)}</h5>
                        </div>

                    
                    </div>
                </div>
    </>

  )
}
