import React from 'react';
import Card from './card';
import './.css'

import {productCoverImg, fh1,fh2,fh4,fh5,fh6,fh7,fh8 } from '../../../assets/img';

export default function ProductCard({data}) {


  return (
    <>
      <div className="containe">
        <div className="product-card">
            <Heading/>

            <div className="cards row">
            {
            data.map((item,index)=>{
            return(
                <Card img={item.img} title={item.title}
                category={item.category} price={item.price} delprice={item.delprice}
                colors={item.colors} key={index}/>
            )

            })
        }

            </div>
        

        </div>
      </div>
    </>
  )
}




function Heading(){
    return(
        <div className="product-heading">
                <h5>Featured Products</h5>
                <h3>BESTSELLER PRODUCTS</h3>
                <h6>Problems trying to resolve the conflict between </h6>

            </div> 
    )
}