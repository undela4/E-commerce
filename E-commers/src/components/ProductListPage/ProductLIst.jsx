import React, { useEffect, useState,useContext } from 'react';
import './productList.css'
import { useParams } from 'react-router-dom';
import Card from './ProductCart/Card';
import { RiArrowRightSLine } from "react-icons/ri";
import { Dropdown } from './Dropdown';
import useFetch_products from '../../customeHooks/fetch_products';
import { UserContext } from '../../Usecontext';
import Loder from '../loder/Loder';

export default function ProductLIst() 
{

const [pl,setpl]=useState();


const {name}=useParams();
const [fetch]=useFetch_products();

const {fun}=useContext(UserContext);


useEffect(()=>{

    fetch(name,setpl);
    fun();
    
},[])




const filters=[

    {id:1,
        name:"Price",
        items:["₹ 25000 - ₹ 35000","₹ 35000 - ₹ 40000","₹ 40000 - ₹ 50000","₹ 50000 - ₹ 70000","₹ 70000 - ₹ 200000"],
        type:"checkbox"

    },
    {id:2,
        name:"Brands",
        items:["Apple","Nothing","Samsung","Vivo","Google","Mi","Infinix","Realme","Poco","Lava","Oppo"],
        items_2:[
            "OnePlus",
            "Xiaomi",
            "Mi 189.34cm (75 inches) Q1 Series 4K Ultra HD Smart QLED TV L75M6-ESG (Metallic Grey)",
            "Sony",
            "TCL",
            "Vizio",
            "Hisense",
            "Panasonic",
            "Philips",
            "Toshiba"
          ],
          
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
                        filters.map((e,index)=>{
                            return(
                            <Dropdown key={index} Key={index} name={e.name} items={e.items} type={e.type}  pl={pl} setpl={setpl} />   

                            )
                        })

                    } 

                    </div>

                    <div className="col-9">
                        <div className="product-list" >
                        {
                           pl.length!=0 ? pl.map((item,index)=>{
                            return(
                                
                                <div   key={index}> 
                                <Card img={item.key_img} title={item.model} id={item._id}
                                category={item.category} price={item.price} delprice={item.delprice}
                                colors={item.colors}/>
                                </div>
                                
                            )

                            }) :(<NotFound/>)
                        }

                        </div>
                    
                    </div>
                        
                        

            </div>


            </div>
    
    </>
  ):(<center><Loder/></center>)


}




function NotFound(){
    return(
        <div className="not_found">
                <div className="">
                    <img src="https://tradibha.com/images/empty_cart.png"></img>
                </div>
        </div>
    )
}
