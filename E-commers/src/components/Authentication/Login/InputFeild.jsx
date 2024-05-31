import React from 'react'

export default function InputFeild({label,type,method,name,value,className}) {
    return (
      <div className={`form-floating mb-3 ${className}`}>
     <input type={type} className="form-control" id="" value={value} onChange={method}  name={name} placeholder='enter'/>
     <label htmlFor="floatingInput" >{label}</label>
   </div>
  
    )
  }