import React, { useEffect, useState } from 'react'
import './Product-details.css';
import Card from '../../ProductListPage/ProductCart/Card';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function SimilarProducts({name}){
  

const {products}=useSelector(state=>state.productSlice);
const {reviews}=useSelector(state=>state.review_slice);
const [similardata,setsimilardata]=useState([])
const nav=useNavigate();


useEffect(()=>{
  setsimilardata(products.slice(0,5))
},[])


  return (
    <div className='similar-products'>
        <h2>Similar Products</h2>
        <div className="similar-products-list p-3">
                {
                    similardata.map((item,index) => {

                          const t=reviews.filter((i)=>i.product_id===item._id);

                        return (
                          <div className="" key={index} onClick={()=>nav(`/product/${name}/${item._id}`)} >

                                <Card img={item.key_img} title={item.model} id={item._id} reviews={t}
                                category={item.category} price={item.price} delprice={item.delprice}
                                colors={item.colors}
                                style={{flexDirection:"column"}} />


                          </div>
                            
                        )
                    })
                }
        </div>
    </div>
  )
}
