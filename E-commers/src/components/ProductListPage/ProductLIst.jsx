import React from 'react';
import { useNavigate } from 'react-router-dom';
import './productList.css'
import { cards } from '../Home/HomePage';
import { useParams } from 'react-router-dom';
import Card from './ProductCart/Card';
import { RiArrowRightSLine } from "react-icons/ri";
import { Outlet } from 'react-router-dom';


export default function ProductLIst() 
{
    
const nav=useNavigate();
const {name}=useParams();

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
                      <Dropdown key={e.id} name={e.name} items={e.items} type={e.type}/>   

                    )
                })

               } 

            </div>

            <div className="col-9">
                <div className="product-list " >
                {
                    cards.map((item,key)=>{
                    return(
                        
                        <div onClick={()=>nav(`./${item.id}`)}  key={item.id}>
                        <Card img={item.img} title={item.title}
                        category={item.category} price={item.price} delprice={item.delprice}
                        colors={item.colors}/>
                        </div>
                         
                    )

                    })
                }

                </div>
                <hr></hr>
                <div className="product-list " >
                {
                    cards.map((item,key)=>{
                    return(
                        
                        <div onClick={()=>nav(`./${item.id}`)}  key={item.id}>
                        <Card img={item.img} title={item.title}
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



//left part filters
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Checkbox from './checkbox/checkbox';
import { useRef ,useState} from 'react';


function Dropdown({name,items,type})
{
    const r=useRef(null);
    const[flag,setflag]=useState(false);

    function drop()
    {
        console.log("Dropdown")
       !flag?(r.current.style.display="none"):(r.current.style.display="block");
       setflag(!flag);   
    }

    return(
        <div className="dropdown-items">

            <div className="d-flex 
            justify-content-between
            align-items-baseline">
                <h3>{name}</h3>
                <div className="fs-3" onClick={drop}>
                    {
                        flag?(<IoIosArrowDown />):(<IoIosArrowUp />)
                    
                    }
                </div>
            </div>

            <div ref={r} style={{display:"block"}} className='dropdown-list' >
               {
                items.map((item,index)=>{
                    return(
                        <div className="check" key={index}>
                        <input  type={type} /><span>{item}</span>

                        </div>
                    )
                })
                 
               }                
               
            </div>
           
        </div>
    )
}

