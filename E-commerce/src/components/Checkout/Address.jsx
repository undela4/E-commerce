import React,{useState} from 'react'

import { RxCross1 } from "react-icons/rx";
import { del_address } from './helpers';

export function Address({fullAddress,id ,flag ,setSelectedAddressId}){



function onchange(id)
{
    setSelectedAddressId(id);
}


return(
        <div className="p-1">

            <div  className="address-item d-flex align-items-baseline gap-4">
              <div className="">
                { flag&&<input type="radio" onChange={()=>onchange(id)} name="i" />}
          
              </div>
              <div>
              <p>{fullAddress}</p>
              </div>
            <div className="justify-self-end p-3 cross">

            <RxCross1 className='fs-3 text-danger fw-bold' onClick={()=>del_address(id)}/>

            </div>
            </div>

        </div>
    )
}