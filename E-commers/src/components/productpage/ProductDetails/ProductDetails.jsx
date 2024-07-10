import {useState} from 'react';
import { comma } from '../../ProductListPage/ProductCart/.js';

export const Overview = ({ product }) => {
  
    return (

      <div>
        <h2 className='name'>{product.model}</h2>
        <div className="fs-4 name">
        <p>{product.description}</p>
        <p >Price: <span className='fw-bold'>₹ {comma(Math.floor(product.price))}</span></p>
        <p >Brand: <span className='fw-bold'>{product.brand}</span></p>
        </div>

        <div className="d-flex row">
          <div className="col-md-5"  data-aos="fade-up" data-aos-duration="1200" >
           <img className="w-100" src={product.key_img} alt={product.name} />
          </div>
          {
            product.operating_system ? (<div className="col-md-6 about">
              <p>➡️Operating_system  :  <span>{ product.operating_system}</span></p>
              <p>➡️Ram :  <span>{product.ram}</span></p>
              <p>➡️Storage : <span>{product.storage}</span></p>
              <p>➡️Battery :<span>{product.battery_capacity}</span></p>
              <p>➡️Network : <span>{product.network_technology}</span></p>
              <p>➡️weight:  <span>{product.weight}</span></p>
  
      
  
            </div>):( <ul>
            {product.additional_features.map((feature, index) => (
            <li key={index} className='fs-4'>{feature}</li>
          ))}
          </ul>)

          }
       
        </div>

      </div>
    );
  };
  
  // Specifications Component
export const Specifications = ({ specs }) => {
    return (
      <div className='fs-4 p-3'>

        <h2>Specifications</h2>
       {
          specs.screen_size&&( <div className="">
          <p>Display: {specs.screen_size}</p>
          <p>Resolution: {specs.resolution}</p>
          <p>battery_capacity: {specs.battery_capacity}</p>
          <p>processor: {specs.processor}</p>
          <p>dimensions: {specs.dimensions}</p>
          <p>weight: {specs.weight}</p>
          <h4>Other </h4>
          </div>)
       }
       

        {
        specs.sim_type&&  <p>sim_type: {specs.sim_type}</p>

        }
        <ul>
          {specs.additional_features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
           {specs.specifications.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    );
  };
  

  // Questions Component
 export const Questions = ({ faqs }) => {
    return (
      <div>
        <h2>Questions</h2>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index}>
              <p><strong>Q: {faq.question}</strong></p>
              <p>A: {faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };


import data from '../data.js';
import { ReviewRatings } from './Ratings&Revies.jsx';
export function Product1({pdata}){

  const [f,setf]=useState(0);
  const compo=[<Overview product={pdata}/>,<Specifications specs={pdata}/>,<ReviewRatings product_id={pdata._id}/>,<Questions faqs={data[1]} />]

  return(
    <>
    <div className="Product-details">

      <div className="Product-details-index">
        {
         ["Overview", "Specification","Reviews","Quations"].map((i,index)=>{
          return(
            <div key={index} className='under-line' style={{borderBottom:f===index? "4px solid blue": "none"}} >
            <h6 style={{fontWeight:f===index ? "bold":""}} className="p-index" onClick={()=>{setf(index)}}>{i}</h6>

            </div>
    )
         })
        }
      </div>

      <div className="product-content">

       {
         compo[f]
       }

      </div>

    </div>
    </>
  )
}

