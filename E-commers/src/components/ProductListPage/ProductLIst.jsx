import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './productList.css'
import { cards } from '../Home/HomePage';
import { useParams } from 'react-router-dom';
import Card from './ProductCart/Card';
import { RiArrowRightSLine } from "react-icons/ri";
import { Outlet } from 'react-router-dom';
import { Dropdown } from './Dropdown';
import {data} from '../../../Data/Mobile_data.js';
import { smart_tv } from '../../../Data/Smart_tv.js';



export default function ProductLIst() 
{
const [products,setprodutes]=useState([]);
const nav=useNavigate();
const {name}=useParams();

useEffect(()=>{
    switch(name){
        case "Mobile":
            setprodutes(data);
            break;
        case "Tv":
            setprodutes(smart_tv);
            break;
        default:
            setprodutes(data);
            break;
    }

},[]);


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

  return (
    <>
    <div className='containe mb-5'>
      <h5 className='mt-4 mb-5'>Home <RiArrowRightSLine /> {name}</h5>

      <div className="product-layout row">

            <div className="product-filters col-3">
               {
                filters.map((e)=>{
                    return(
                      <Dropdown key={e.id} name={e.name} items={e.items} type={e.type}  products={products} setprodutes={setprodutes} />   

                    )
                })

               } 

            </div>

            <div className="col-9">
                <div className="product-list " >
                {
                    products.map((item,id)=>{
                    return(
                        
                        <div onClick={()=>nav(`./${item.id}`)}  key={item.id}>
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
  )

}






