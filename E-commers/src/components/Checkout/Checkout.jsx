import React,{useEffect, useRef, useState} from 'react';
import './checkout.css';
import DeliveryAddressForm  from './DeliveryAddressForm';
import Summary from './Summary';
import Payment from './Payment';
import { Address } from './Address';
import Cartcard from '../cart/Cartcard';
import { useNavigate } from 'react-router-dom';
import Detonator from './Detonator';
import { get_cart_items } from '../cart/methods';
import { Fun } from '../cart/Cartpage';
import { errorfunction } from '../../tostify';
import { create_order } from './helpers';
import Loder from '../loder/Loder';
import { comma } from '../ProductListPage/ProductCart/.js';


export default function Checkout(){

  
const [flag,setflag]=useState({display:'none'});
const [f,setf]=useState(false);

const [f1,setf1]=useState(false);
const nav=useNavigate();

const [address,setaddress]=useState([]);
const [selectedAddressId, setSelectedAddressId] = useState('');
const [loader,setloader] = useState(false)


const r=useRef();
const r1=useRef();





const {items,setitems,count,setcount,price,setprice}=Fun();

useEffect(()=>{

  get_cart_items(setitems,setcount,setprice,setloader);

  
},[])




async function place_order()
{

  if(selectedAddressId!==''){
    const orders=[];
    items.map((item)=>{
      const data={
        "product_id":item._id,
        "product_name":item.model,
        "amount":item.price,
        "img":item.key_img,
        "Address_id":selectedAddressId,
        "category":item.category
      }
      orders.push(data);
  
    })
    create_order(orders)
    nav('/payment_success')



  }else{
    errorfunction("Please select address")
  }
  


}

function drop()
    {
      if(selectedAddressId!==''){
       !f?(r.current.style.display="none"):(r.current.style.display="block");
       setf(!f);   
      }else{
        errorfunction("Please select address")
      }
}

function drop2()
    {
       !f1?(r1.current.style.display="none"):(r1.current.style.display="block");
       setf1(!f1);   
}


return loader ? (
    <>
    <div className="container">

    <div className="checkout mt-5 row">

        <div className="checkout-left col-md-7">

            <div className="Address mb-5">

             <Detonator name="Your addresses" drop={drop} f={f}/>

              <div ref={r} style={{display:"block"}}  >
                
           { address.length!=0 ? <div className="">
            {
                    address.map((item,index)=>{
                      const ad=`${item.firstName},${item.houseNumber},
                      ${item.street},${item.city},${item.state},${item.postcode}`
                        return(
                            <div key={index}>
                              <Address fullAddress={ad} id={item._id}  flag={true} setSelectedAddressId={setSelectedAddressId}/>
                            </div>
                        )
                    })
                }
            </div>:(<center><h4 className='text-danger'>Loading...</h4></center>)
           }


                <div className="mt-3 d-flex justify-content-between">
                <button className='btn' onClick={()=>setflag({display:'block'})}>+Add New address</button>
                <button className='btn btn-outline-warning' onClick={drop}>Delivery To this address</button>
                </div>

                 <div className="add" style={flag} >
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
                 spec={`${item.ram} | ${item.storage} | ${item.processor} `} asf={item.additional_features}   flag={{display:'none'}}



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
             <h2 className='text-danger'>₹ {comma(price)}.00</h2>
             </div>
              <button className='btn btn-warning' onClick={place_order} >Place your order</button>


            </div>
            <hr></hr>

        </div>

        <div className="checkout-right col-sm-4">
            <Summary price={price}/>
        </div>

    </div>

</div>
 </>
  ):(<center><Loder/></center>)
}







