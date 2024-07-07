import React from 'react';
import Card from './card';
import './.css'


export default function ProductCard({data}) {


  return (
    <>
      <div className="container">
        <div className="product-card">
            <Heading/>

            <div className="cards mb-5">
            {
            data.map((item,index)=>{
            return(
                <Card img={item.key_img} title={item.brand} _id={item._id}
                category={item.category} price={item.price}
                colors={item.colors} key={index} className="d-flex" />
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
                <h6>Problems trying to resolve the conflict between... </h6>

            </div> 
    )
}