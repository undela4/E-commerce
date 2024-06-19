import React,{useEffect, useState} from 'react';
import {get_address} from '../Checkout/helpers.js';
import { Address } from '../Checkout/Address.jsx';
import DeliveryAddressForm from '../Checkout/DeliveryAddressForm.jsx';







export default function Myaddresses(){


const [address,setaddress]=useState(null);
const [flag,setflag]=useState({display:'none'});



useEffect(()=>{
    get_address(setaddress)

},[flag])

  return address ? (
    <div className='d-flex flex-column gap-4 p-4'>
    
    <h3>My Delivery Addresses</h3>
    { address.length!=0 &&<div className="">
            {
                    address.map((item,index)=>{
                      const ad=`${item.firstName},${item.houseNumber},
                      ${item.street},${item.city},${item.state},${item.postcode}`
                        return(
                            <div key={index}>
                              <Address fullAddress={ad} id={item._id}   flag={false}/>
                            </div>
                        )
                    })
                }
            </div>
           }

        <div className="">
            <button className="btn btn-warning" onClick={()=>{setflag({display:'block'})}}>Add New Address</button>
        </div>

        <div className="add" style={flag} >
            <DeliveryAddressForm flag={[flag,setflag]} address={address} setaddress={setaddress} />
        </div>
 

    </div>

  ):(<center className='mt-5'><h1 className='text-danger'>Loading ...</h1></center>)
}
