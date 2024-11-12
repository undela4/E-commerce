import React,{useState,useEffect, useContext} from 'react';
import { UserContext } from '../../Usecontext';
import './wishlist.css';
import { useNavigate } from 'react-router-dom';
import { Empty } from './Myorders';
import { RxCross1 } from "react-icons/rx";
import { fetch,remove } from './helpers';
import Loder from '../loder/Loder';
import { comma } from '../ProductListPage/ProductCart/.js';
export default function Wishlist() 
{

  const {ud}=useContext(UserContext);
  const nav=useNavigate();
  const [data,setdata]=useState(false);
  




useEffect(()=>{
    fetch(setdata,ud)
  },[])
    


  return data ?  (
<>
<h4 className='ms-5 fw-bold fs-1'>Wish List</h4>


    <div className="wishlist">
      
      <div className='murali'>
      {
        data.length!=0 ? data.map((e,index)=>{
          return(
          <>
            <hr></hr>
            <div key={index} className='wl-cart' >

            <div className="img" onClick={()=>nav(`/product/${e.category}/${e._id}`)}>
              <img src={e.key_img} alt=""  />
              <h5>{e.model}</h5>
            </div>

              <div className="details w-100">
                <h5><span>Price : </span>₹ {comma(Math.floor(e.price))}</h5>
                <h5><span>O.s : </span>{e.operating_system}</h5>
                <h5><span>Ram : </span>{e.ram}</h5>
                <h5><span>Storage : </span>{e.storage}</h5>

              </div>
           
         
            <div className="w-100">
              <h4>Specifications</h4>
            {
                e.specifications.map((i)=>{
                  return <h5>{i}</h5>
                })
              }
            </div>

              <div className="">
                <RxCross1 className='fs-2 text-danger ' onClick={()=>remove(ud,e._id)}/>
              </div>
            </div>

          </>

          )

        }):(<Empty text="No item added into wish list" />)
      }
    </div>
    </div>
    </>
  ):(<center><Loder/></center>)


}
