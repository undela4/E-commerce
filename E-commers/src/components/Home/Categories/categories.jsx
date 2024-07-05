import React from 'react';
import './categories.css';
import { useNavigate } from 'react-router-dom';
import useFetch_products from '../../../customeHooks/fetch_products';


const catadata=[
    {
        id:1,
        name:'mobile',
        img:'https://th.bing.com/th/id/OIG1.ZfYAdihv.6jTo8pjvo2o?w=270&h=270&c=6&r=0&o=5&dpr=1.1&pid=ImgGn'
    },
    {
        id:2,
        name:'laptop',
        img:"https://th.bing.com/th/id/OIG4.Tj5DS9KDQPskBHJt63tJ?w=270&h=270&c=6&r=0&o=5&dpr=1.1&pid=ImgGn"
    },
    {
        id:3,
        name:'smart_tv',
        img:'https://th.bing.com/th/id/OIG3.P7.Ty6ZMGIHxq0yQjLWt?w=270&h=270&c=6&r=0&o=5&dpr=1.1&pid=ImgGn'
    },
    {
        id:4,
        name:'accessories',
        img:'https://th.bing.com/th/id/OIG4.xErk.pSKTvzub.3DMOsq?w=270&h=270&c=6&r=0&o=5&dpr=1.1&pid=ImgGn'
    },


    
]


export default function Categories() {

    const nav=useNavigate();


  return (
    < div className="container-fluid-sm">
   <div className="ps-3 mt-5">
   <h2>Categories</h2>
   <h5 className='ms-3'>Electronics</h5>
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


