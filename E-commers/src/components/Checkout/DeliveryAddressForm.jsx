import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputFeild from '../Authentication/Login/InputFeild';
import { add_address ,get_address} from './helpers';
import { clientValidation } from '../Authentication/Login/helper';
export default function DeliveryAddressForm({flag,address,setaddress}){
  
const data={
  firstName: '',
  lastName: '',
  email:'',
  country: '',
  street: '',
  houseNumber: '',
  city: '',
  state: '',
  postcode: '',
  phoneNumber: '',
}

const [formData, setFormData] = useState(data);
  
  const { firstName, lastName,email, country, street, houseNumber, city, state, postcode, phoneNumber } = formData;

  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if(clientValidation(formData)){
      add_address(formData);
      flag[1]({display:'none'});

    }
    // setFormData(data);

  };

  useEffect(()=>{
    get_address(setaddress);

  },[])

  
  return  (
    <div className="container mt-5 p-3">
        <div className="mb-4">
        <h2>Shipping Address</h2>
      <h6>Select the address that matches our card or payment</h6>

        </div>
      
      <div className="address">
       <InputFeild label="First Name" type="text"  method={handleChange} name="firstName" value={firstName} className="In"/>
       <InputFeild label="Last Name" type="text" method={handleChange} name="lastName" value={lastName} className="In"/>
      </div>
      <div className="address">
       <InputFeild label="Email Address" type="text"  method={handleChange} name="email" value={email} className="In"/>
       <InputFeild label="Country / Region " type="text" method={handleChange} name="country" value={country} className="In"/>
      </div>
      <div className="address">
       <InputFeild label="Street" type="text"  method={handleChange} name="street" value={street} className="In"/>
       <InputFeild label="Apt,H.No .any" type="text" method={handleChange} name="houseNumber" value={houseNumber} className="In"/>
      </div>
      <div className="address">
       <InputFeild label="City" type="text"  method={handleChange} name="city" value={city} className="In"/>
       <InputFeild label="State" type="text" method={handleChange} name="state" value={state} className="In"/>
       <InputFeild label="postal Code" type="number" method={handleChange} name="postcode" value={postcode} className="In"/>
      </div>
      <InputFeild label="phone" type="number" method={handleChange} name="phoneNumber" value={phoneNumber} className="w-50"/>

      <button className='btn btn-info w-25' onClick={handleSubmit}>Continue to delivery</button>


    </div>
  );
};