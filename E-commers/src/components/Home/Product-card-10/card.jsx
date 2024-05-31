import React from 'react';
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

export default function Card({img,title,category,price,delprice,colors}) {
  return (
    <>
      <div className="col-3 card-container">

            <div className="card-img">
                <img src={img} alt="img"/>

            </div>
            <div className="card-content d-flex flex-column ">
                        <div className="d-flex justify-content-between">
                            <div className="">
                                {
                                    [1,2,3,4,5].map((item)=>{
                                        return(<CiStar className='fs-5'/>)
                                    })
                                }
                            </div>
                            <div className="heart"><CiHeart className='fs-5' /> </div>
                           
                            </div>
                        <h5 className='fw-bold' >{title}</h5>
                        <p className=''>Save 60%</p>
                        <div className="prices d-flex  gap-3">
                            <h5 className='text-secondry'><del>₹{delprice}</del></h5>
                            <h5 className='text-dark'>₹{price}</h5>
                        </div>

                        <div className="colors d-flex gap-3 justify-content-center">

                        {
                            colors.map((color,index)=>{
                                return(

                                   
                                    <div className="rounded-circle" 
                                     style={{backgroundColor:color}}>
                                      
                                    </div>
                    
                                )
                            })
                        }
                        </div>
                       
                    </div>
                </div>
    </>

  )
}
