import React from 'react'

export default function InputFeild({label,type,method,name,value,defaultValue,className}) {
    return (
      <div className={`form-floating mb-3 ${className}`}>
     <input type={type} className="form-control" id="" value={value} defaultValue={defaultValue} onChange={method}  name={name} placeholder='enter' required/>
     <label htmlFor="floatingInput" >{label}</label>
   </div>
  
    )
  }