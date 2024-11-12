import React, { useEffect, useState,useContext } from 'react';
import { Outlet } from 'react-router-dom';
import './productList.css'
import { useParams } from 'react-router-dom';
import Card from './ProductCart/Card';
import { RiArrowRightSLine } from "react-icons/ri";
import { Dropdown } from './Dropdown';
import useFetch_products from '../../customeHooks/fetch_products';
import useFetchReview from '../../customeHooks/FetchReview';
import { UserContext } from '../../Usecontext';
import Loder from '../loder/Loder';
import { useSelector } from 'react-redux';


export default function ProductLIst() 
{

const [pl,setpl]=useState();

const {name,id}=useParams();
const [fetch]=useFetch_products();
const [Fetch_reviews]=useFetchReview();
const {reviews}=useSelector(state=>state.review_slice);
const {fun}=useContext(UserContext);


useEffect(()=>{
    fetch(name,setpl);
    fun();
    Fetch_reviews();
},[])


const filters=[

    {id:1,
        name:"Price",
        items:{"mobile":["₹ 25000 - ₹ 35000","₹ 35000 - ₹ 40000","₹ 40000 - ₹ 50000","₹ 50000 - ₹ 70000","₹ 70000 - ₹ 200000"],
            "smart_tv":["₹ 25000 - ₹ 35000","₹ 35000 - ₹ 40000","₹ 40000 - ₹ 50000","₹ 50000 - ₹ 70000","₹ 70000 - ₹ 200000"],
            "laptop":["₹ 25000 - ₹ 35000","₹ 35000 - ₹ 40000","₹ 40000 - ₹ 50000","₹ 50000 - ₹ 70000","₹ 70000 - ₹ 200000"],
            "accessories":["₹ 25000 - ₹ 35000","₹ 35000 - ₹ 40000","₹ 40000 - ₹ 50000","₹ 50000 - ₹ 70000","₹ 70000 - ₹ 200000"]

        },
        type:"checkbox"

    },
    {id:2,
        name:"Brands",
        items:{"mobile":["Apple","Nothing","Samsung","Vivo","Google","Mi","Infinix","Realme","Poco","Lava","Oppo"],
        "smart_tv":[
            "OnePlus",
            "Xiaomi",
            "Sony",
            "TCL",
            "Vizio",
            "Hisense",
            "Panasonic",
            "Philips",
            "Toshiba"
          ],
          "laptop":["Apple","MSI","Samsung","Dell","Lenovo","Acer","Microsoft","Razer","HP","Asus"],
          "accessories":["Apple","Logitech","Samsung","Dell","Sony","realme","OnePlus","boAt","Bose","Anker"]
        }
          ,
          
        type:"checkbox"

    },
    {id:3,
        name:"Sort By",
        items:{"mobile":["Price--Low to High","price--High to Low"],
            "smart_tv":["Price--Low to High","price--High to Low"],
            "laptop":["Price--Low to High","price--High to Low"],
            "accessories":["Price--Low to High","price--High to Low"]
        },
        type:"radio"


    },

]


  return  pl ?( 
    <>
    {
        !id ? (<div className='container mb-5'>
            <h5 className='mt-4 mb-5 text-capitalize'>Home <RiArrowRightSLine /> {name}</h5>

            <div className="product-layout row">

                    <div className="product-filters col-md-3">
                    {
                        filters.map((e,index)=>{
                            return(
                            <Dropdown key={index} Key={index} name={e.name} items={e.items[`${name}`]} type={e.type}  pl={pl} setpl={setpl} />   

                            )
                        })

                    } 

                    </div>

                    <div className="col-md-9">
                        <div className="product-list" >
                        {
                           pl.length!=0 ? pl.map((item,index)=>{

                                const t=reviews.filter((i)=>i.product_id===item._id);

                            return(
                                
                                <div   key={index}> 
                                <Card img={item.key_img} title={item.model} id={item._id} reviews={t}
                                category={item.category} price={item.price}
                                colors={item.colors} />

                                </div>
                                
                            )

                            }) :(<NotFound/>)
                        }

                        </div>
                    
                    </div>
                        
                        

            </div>


     </div>) :<Outlet/>

    }
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
