import React,{useState} from 'react'

import { RxCross1 } from "react-icons/rx";
import { del_address } from './helpers';

export function Address({fullAddress,id}){

const [selectedAddressId, setSelectedAddressId] = useState('');

function onchange(id)
{

    setSelectedAddressId(id);
}

console.log(selectedAddressId)
return(
        <div className="p-1">

            <div  className="address-item">
              <div className="">
            <input type="radio" onChange={()=>onchange(id)} name="i" />

              </div>
              <div className="w-100">
            <p>{fullAddress}</p>

              </div>
            <div className="justify-self-end p-3">

            <RxCross1 className='fs-3 text-danger fw-bold' onClick={()=>del_address(id)}/>

            </div>
            </div>

        </div>
    )
}