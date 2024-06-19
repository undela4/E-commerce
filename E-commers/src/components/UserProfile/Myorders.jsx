import React ,{useEffect, useState} from 'react';
import './myorders.css';
import { get_orders,cancel_order } from './helpers';
import Loder from '../loder/Loder';
import { useNavigate } from 'react-router-dom';



export default function Myorders() {

  const [orders,setorders]=useState([]);
  const [f,setf]=useState(false);

  const nav=useNavigate();

function cancelorder(oid)
{
  if (confirm("Sure you want to cancel the Order ?") == true) {
    cancel_order(oid);
  }
}


useEffect(()=>{

  get_orders(setorders,setf);

},[])
  
  return f ? (
    <>
    <h4 className='ms-5 fw-bold fs-1'>My Orders</h4>

    <div className="orders">

    { 
     orders.length!==0 ? ( orders.map((i,index)=>{
        return(
          
      <div className="order_item" key={index}>

      <div className="image" onClick={()=>nav(`/product/${i.category}/${i.product_id}`)}>
        <img src={i.img}/>
        <h5>{i.product_name}</h5>

      </div>

      <div className="details">
         <h5><span>Order id : </span>{i.order_id}</h5>
        <h5><span>Amount : </span>₹ {i.amount}</h5>
        <h5><span>Ordered Date : </span>{i.date_of_order}</h5>
      
      </div>
      <div className="p3">
      <h5><span>Status : </span><span className='text-danger'>{i.delivery_status}</span></h5>
      <h5><span>Delivery Date: </span>{i.delivery_date}</h5>
      <div className="cancel">
        <button className='btn btn-outline-danger' onClick={()=>cancelorder(i._id)}>Cancel</button>
      </div>
      </div>

    </div>
      
        )
     })):(<Empty text="No Orders yet"/>)

    }

    </div>

    </>
  ):(<Loder/>)
}


export function Empty({text}){
  return(
<center>
<div className="">
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/search-not-found-8291000-6632131.png?f=webp" />
      <h2 className='text-danger'>{text}</h2>
    </div>
</center>
  )
}