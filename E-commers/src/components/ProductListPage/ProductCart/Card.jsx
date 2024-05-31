import React from 'react';
import './card.css'
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { cards } from '../../Home/HomePage';

export default function Card({img,title,category,price,delprice}) {

  return (
    <>
    <div className="product-card-container">

          <div className="card-img">
              <img src="https://th.bing.com/th/id/OIG2.GgBge09xvlJo5fUN7Ybj?w=270&h=270&c=6&r=0&o=5&dpr=1.1&pid=ImgGn" alt="img"/>

          </div>
          <div className="card-content d-flex flex-column ">
                      <div className="d-flex justify-content-between">
                          <div className="">
                              {
                                  [1,2,3,4,5].map((item ,index)=>{
                                      return(<CiStar className='fs-5' key={index}/>)
                                  })
                              }
                          </div>
                          <div className=""><CiHeart className='fs-5' /> </div>
                         
                          </div>
                      <h5 className='fw-bold' >{title}</h5>
                      <p className=''>Save 60%</p>
                      <div className="prices d-flex  gap-3">
                          <h5 className='text-secondry'><del>₹{delprice}</del></h5>
                          <h5 className='text-dark'>₹{price}</h5>
                      </div>

                  </div>
              </div>
  </>


  )
}
