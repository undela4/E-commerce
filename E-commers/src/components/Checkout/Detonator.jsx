import React from 'react'

import { FcOk } from "react-icons/fc";
import { FaMinusCircle } from "react-icons/fa";




export default function Detonator({name,drop,f}) {
  return (
    <div className="d-flex 
            justify-content-between
            align-items-baseline" onClick={drop}>
            <h4 >{name}</h4>
              <div className="fs-3" >
                    {
                        f?(<FcOk />):(<FaMinusCircle />)
                    
                    }
                </div>

              </div>
  )
}
