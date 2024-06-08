import React,{useRef, useState} from 'react';
import './checkout.css';
import DeliveryAddressForm  from './DeliveryAddressForm';
import Summary from './Summary';
import Payment from './Payment';
import { useParams } from 'react-router-dom';
import Cartcard from '../cart/Cartcard';
import { data } from '../cart/Cartpage';
import { useNavigate } from 'react-router-dom';
import Detonator from './Detonator';


export default function Checkout(){

const [flag,setflag]=useState({display:'none'});
const [f,setf]=useState(false);
const [f1,setf1]=useState(false);
const nav=useNavigate();


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
const [address,setaddress]=useState(addres);
const {price}=useParams();

const r=useRef();
const r1=useRef();

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
              {
                    address.map((item)=>{
                        return(
                            <div key={item.id}>
                              <Address fullAddress={item.fullAddress} id={item.id}/>
                            </div>
                        )
                    })
                }
                <button className='btn' onClick={()=>setflag({display:'block'})}>+Add New address</button>
                <button className='btn btn-outline-warning' onClick={drop}>Delivery To this address</button>
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
            data.map((item)=>{
              return(
                <Cartcard key={item.id} img={item.img} title={item.title} description={item.description}
                quantity={item.quantity} price={item.price} del_price={item.del_price} flag={{display:'none'}}
                />
              )
            })
          }
                </div>

            </div>

            <hr></hr>
            <div className="d-flex gap-3">
              <button className='btn btn-warning' onClick={()=>nav('/payment_success',{replace:true})} >Place your order</button>
              <h2 className='text-danger'>Order total::</h2>
              <h2 className='text-danger'>₹{113}.00</h2>

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




function Address({fullAddress,id}){

const [selectedAddressId, setSelectedAddressId] = useState(null);

return(
        <div className="p-1">
            <div  className="address-item">
            <input type="radio" name="i"/>
            <p>{fullAddress}</p>
            </div>
        </div>
    )
}


