import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Icon() {
    const nav=useNavigate();
  return (
    <div>
      <FaUserAlt  className='fs-2' onClick={()=>nav('/account')}/>
    </div>
  )
}
