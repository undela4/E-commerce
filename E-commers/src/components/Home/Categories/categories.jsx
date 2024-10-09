import React from 'react';
import './categories.css';
import { useNavigate } from 'react-router-dom';
import useFetch_products from '../../../customeHooks/fetch_products';

import {MOBILE,ACCESSORIES,TV,LAPTOP} from '../../../assets/img.js'


const catadata=[
    {
        id:1,
        name:'mobile',
        img:MOBILE
    },
    {
        id:2,
        name:'laptop',
        img:LAPTOP
    },
    {
        id:3,
        name:'smart_tv',
        img:TV
    },
    {
        id:4,
        name:'accessories',
        img:ACCESSORIES
    },


    
]


export default function Categories() {

    const nav=useNavigate();


  return (
    < div className="container-sm-fluid">
   <div className="ps-3 mt-5 names">
   <h2>Categories</h2>
   </div>

    <div className="categories" data-aos="flip-right">
        {
            catadata.map((item,index)=>{
                return(
                    <div data-aos="flip-left" key={index}  className='d-flex flex-column align-items-center'>
                    <div className="category-iteM" onClick={()=>{ nav(`/product/${item.name}`);}}>
                        <img src={item.img}  />
                    </div>
                    <h4 className='text-center'>{item.name}</h4>
                    </div>
                    

                )
            })
        }


    </div>
    </div>
  )
}


