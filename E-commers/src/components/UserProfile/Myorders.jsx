import React ,{useEffect, useState} from 'react';
import './myorders.css';
import { get_orders,cancel_order } from './helpers';
import Loder from '../loder/Loder';
import { useNavigate } from 'react-router-dom';
import { comma } from '../ProductListPage/ProductCart/.js';
import Order from './Order.jsx';

export default function Myorders() {

  const [orders,setorders]=useState([]);
  const [f,setf]=useState(false);
  const [order,setorder]=useState([]);





useEffect(()=>{

  get_orders(setorders,setf);

},[])
  
  return f ? (

    <>
    <h4 className='ms-5 fw-bold fs-1'>My Orders</h4>
    <hr></hr>
    {
    order.length!=0 ? (<Order item={order}/>):(<>
    
    <div className="orders">

    { 
     orders.length!==0 ? (<Item orders={orders} setorder={setorder} /> )
     :(<Empty text="No Orders yet"/>)

    }

    </div>

    </>
    )
  }
    </>
  ):(<center><Loder/></center>)
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



export function Item({orders,setorder}){
  const nav=useNavigate();

 return(
  <>
  {
    orders.map((i,index)=>{
    return(
      <>
  <div className="order_item" key={index} onClick={()=>setorder((t)=>[...t,i])}>
  <div className="image" onClick={()=>nav(`/product/${i.category}/${i.product_id}`)}>
    <img src={i.img}/>
    <h5>{i.product_name}</h5>

  </div>

  <div className="details">
     <h5><span>Order id : </span>{i.order_id}</h5>
    <h5><span>Amount : </span>₹ {comma(Math.floor(i.amount))}</h5>
    <h5><span>Ordered Date : </span>{i.date_of_order.substring(0,10)}</h5>
  
  </div>
  <div className="p3">
  <h5><span>Status : </span><span className='text-danger'>{i.delivery_status}</span></h5>
  <h5><span>Delivery Date: </span>{i.delivery_date.substring(0,10)}</h5>
 
  </div>




  </div>
<hr></hr>

      </>
    )

  })
  }
</>
 )
}