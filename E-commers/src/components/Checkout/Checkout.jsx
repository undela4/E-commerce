import React,{useEffect, useRef, useState} from 'react';
import './checkout.css';
import DeliveryAddressForm  from './DeliveryAddressForm';
import Summary from './Summary';
import Payment from './Payment';
import { Address } from './Address';
import { useParams } from 'react-router-dom';
import Cartcard from '../cart/Cartcard';
import { useNavigate } from 'react-router-dom';
import Detonator from './Detonator';
import { get_cart_items } from '../cart/methods';
import { Fun } from '../cart/Cartpage';

const addres=[
  {
    "id": 1,
    "fullAddress": "John Doe, 123 Main St Apt 4B, New York, NY 10001, USA, Phone: 555-1234"
  },
  {
    "id": 2,
    "fullAddress": "Jane Smith, 456 Maple Ave Unit 12, Toronto, ON M4B 1B4, Canada, Phone: 555-5678"
  },
  {
    "id": 3,
    "fullAddress": "Albert Einstein, 789 Science Blvd, Munich, Bavaria 80331, Germany, Phone: 555-9012"
  }
]

export default function Checkout(){

const [flag,setflag]=useState({display:'none'});
const [f,setf]=useState(false);
const [f1,setf1]=useState(false);

const nav=useNavigate();

const [address,setaddress]=useState(addres);

const r=useRef();
const r1=useRef();





const {items,setitems,count,setcount,price,setprice}=Fun();

useEffect(()=>{

  get_cart_items(setitems,setcount,setprice);

  
},[])



function drop()
    {
       !f?(r.current.style.display="none"):(r.current.style.display="block");
       setf(!f);   
}

function drop2()
    {
       !f1?(r1.current.style.display="none"):(r1.current.style.display="block");
       setf1(!f1);   
}

return (
    <>
    <div className="containe">

    <div className="checkout mt-5 row">

        <div className="checkout-left col-sm-7">

            <div className="Address mb-5">
             <Detonator name="Your addresses" drop={drop} f={f}/>

              <div ref={r} style={{display:"block"}}  >
                
           { address.length!=0 &&<div className="">
            {
                    address.map((item,index)=>{
                      const ad=`${item.firstName},${item.houseNumber},
                      ${item.street},${item.city},${item.state},${item.postcode}`
                        return(
                            <div key={index}>
                              <Address fullAddress={ad} id={item._id}/>
                            </div>
                        )
                    })
                }
            </div>
      }


                <div className="mt-3 d-flex justify-content-between">
                <button className='btn' onClick={()=>setflag({display:'block'})}>+Add New address</button>
                <button className='btn btn-outline-warning' onClick={drop}>Delivery To this address</button>
                </div>

                 <div className="add" style={flag}>
                  <DeliveryAddressForm flag={[flag,setflag]} address={address} setaddress={setaddress} />
                 </div>
              </div>
            </div>

            <Payment/>

            <div className="review-items">

             <Detonator name="Review items and delivery" f={f1} drop={drop2}/>
                <div ref={r1} style={{display:'block'}} >
                {
            items.map((item,index)=>{
              return(
                <Cartcard key={index} img={item.key_img} title={item.model} description={item.description}
                quantity={count[index]} price={Math.round(item.price)} del_price={Math.round(item.price)+5000}
                 spec={`${item.ram} | ${item.storage} | ${item.processor} | Front : ${item.camera.front} | Rear : ${item.camera.rear}`}   flag={{display:'none'}}



                />
              )
            })
          } 
                </div>

            </div>

            <hr></hr>
            <div className="d-flex gap-3 justify-content-between">
             <div className="d-flex gap-3">
             <h2 className='text-danger'>Order total::</h2>
             <h2 className='text-danger'>₹ {price}.00</h2>
             </div>
              <button className='btn btn-warning' onClick={()=>nav('/payment_success')} >Place your order</button>


            </div>
            <hr></hr>

        </div>

        <div className="checkout-right col-sm-4">
            <Summary price={price}/>
        </div>

    </div>

</div>
 </>
  )
}







