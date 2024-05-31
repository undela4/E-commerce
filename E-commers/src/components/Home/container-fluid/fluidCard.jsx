import React from 'react';
import { fluidcard } from '../../../assets/img';

export default function FluidCard() {
  return (
    <>
      <div className="containe">
        <div className="hero-section d-flex justify-content-between
        align-items-center gap-5">
            <div className="hero-section-left w-50 h-50 ml-5 accordion">
                <img src={fluidcard} className='w-100 h-100'></img>

            </div>
            <div className="hero-section-right w-50">
                <h6>SUMMER 2020</h6>
                <h1 className='fw-bold'>Part of the Neural Universe</h1>
                <p>We know how large objects will act, but things on a small scale.</p>
                  <div className="d-flex gap-5">

                    <button className='btn btn-success fw-bold'>BUY NOW</button>
                    <button className='btn btn-outline-success fw-bold'>READ MORE</button>

                    
                    </div> 
            </div>

        </div>
      </div>
    </>
  )
}
