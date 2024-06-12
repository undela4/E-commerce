import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './productList.css'
import { cards } from '../Home/HomePage';
import { useParams } from 'react-router-dom';
import Card from './ProductCart/Card';
import { RiArrowRightSLine } from "react-icons/ri";
import { Outlet } from 'react-router-dom';
import { Dropdown } from './Dropdown';
import { useSelector,useDispatch } from 'react-redux';
import { add_products } from '../../Redux-Store/products';
// import {fetch} from './fetch';
import useFetch_products from '../../customeHooks/fetch_products';

export default function ProductLIst() 
{

const [pl,setpl]=useState(null);
const nav=useNavigate();
const {name}=useParams();
const [fetch]=useFetch_products();

useEffect(()=>{
    fetch(name,setpl);

},[])



const filters=[
    {id:1,
        name:"Price",
        items:["₹500-₹1000","₹1000-₹2000","₹2000-₹5000","₹5000 & Above"],
        type:"checkbox"

    },
    {id:2,
        name:"Brands",
        items:["Apple","Nothing","Samsung","Vivo","Google","Mi","Infinix","Realme","Poco","Lava","Oppo"],
        type:"checkbox"



    },
    {id:3,
        name:"Sort By",
        items:["Relevence","Popularity","Price--Low to High","price--High to Low","Newest First"],
        type:"radio"


    },

]
  

  return  pl ?(
    <>
    <div className='containe mb-5'>
      <h5 className='mt-4 mb-5'>Home <RiArrowRightSLine /> {name}</h5>

      <div className="product-layout row">

            <div className="product-filters col-3">
               {
                filters.map((e)=>{
                    return(
                      <Dropdown key={e._id} name={e.name} items={e.items} type={e.type}  pl={pl} seatpl={setpl} />   

                    )
                })

               } 

            </div>

            <div className="col-9">
                <div className="product-list " >
                {
                    pl.map((item,id)=>{
                    return(
                        
                        <div onClick={()=>nav(`./${item._id}`)}  key={id}>
                        <Card img={item.key_img} title={item.model}
                        category={item.category} price={item.price} delprice={item.delprice}
                        colors={item.colors}/>
                        </div>
                         
                    )

                    })
                }

                </div>
               
            </div>
                
                

      </div>


    </div>
<Outlet/>

    </>
  ):(<center><h1 className='text-danger'>Loading.........</h1></center>)


}






