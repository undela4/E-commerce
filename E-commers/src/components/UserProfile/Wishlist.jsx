import React,{useState,useEffect, useContext} from 'react';
import { UserContext } from '../../Usecontext';
import axios from 'axios';
import './wishlist.css';
import { useNavigate } from 'react-router-dom';
import { Empty } from './Myorders';

export default function Wishlist() 
{

  const {ud}=useContext(UserContext);
  const nav=useNavigate();
  const [data,setdata]=useState(false);
  



 async function fetch(){
  try{

    const result=await axios.get('http://localhost:5000/v1/products');
    if(result.data.status){

      const r=result.data.data;
      const p= await ud.wishList;

      const t=r.filter((item)=>p.includes(item._id) )
      setdata(t);

    }
    
  }
  catch(err){
    console.log(err);
  }

 } 

useEffect(()=>{
    if(!data)fetch()
  },[])
    

console.log(data)

  return data ?  (
<>
<h4 className='ms-5 fw-bold fs-1'>Wish List</h4>

    <div className="wishlist">
      
      <div className='murali'>
      {
        data.length!=0 ? data.map((e,index)=>{
          return(
            
            <div key={index} className='wl-cart' >

            <div className="img" onClick={()=>nav(`/product/${e.category}/${e._id}`)}>
              <img src={e.key_img} alt=""  />
              <h5>{e.model}</h5>
            </div>

              <div className="details w-100">
                <h5><span>Price : </span>₹ {e.price}</h5>
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

            </div>


          )

        }):(<Empty text="No item added into wish list" />)
      }
    </div>
    </div>
    </>
  ):(<center><h2 className='text-danger'>Loading .....</h2></center>)


}
