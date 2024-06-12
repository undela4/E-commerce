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
        name:'Laptop',
        img:"https://th.bing.com/th/id/OIG4.Tj5DS9KDQPskBHJt63tJ?w=270&h=270&c=6&r=0&o=5&dpr=1.1&pid=ImgGn"
    },
    {
        id:3,
        name:'smart_tv',
        img:'https://th.bing.com/th/id/OIG3.P7.Ty6ZMGIHxq0yQjLWt?w=270&h=270&c=6&r=0&o=5&dpr=1.1&pid=ImgGn'
    },
    {
        id:4,
        name:'Accessories',
        img:'https://th.bing.com/th/id/OIG4.xErk.pSKTvzub.3DMOsq?w=270&h=270&c=6&r=0&o=5&dpr=1.1&pid=ImgGn'
    },


    
]


export default function Categories() {

    const nav=useNavigate();


  return (
    < div className="containe">
    <h2 className='mt-5'>Categories</h2>
    <h5>Electronics</h5>

    <div className="categories ">
        {
            catadata.map((item,index)=>{
                return(
                    <div className="category-item" key={index} onClick={()=>{ nav(`/product/${item.name}`);}}>
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                    </div>
                )
            })
        }


    </div>
    </div>
  )
}


