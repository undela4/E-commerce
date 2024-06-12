import {useState} from 'react';


export const Overview = ({ product }) => {
  
    return (

      <div>
        <h1>{product.model}</h1>
        <div className="fs-4">
        <p>{product.description}</p>
        <p>Price: <span className='fw-bold'>₹ {product.price}</span></p>
        <p>Brand: <span className='fw-bold'>{product.brand}</span></p>
        </div>
        <div className="d-flex align-items-center">
          <div className="w-50">
           <img className="w-75" src={product.key_img} alt={product.name} />

          </div>
          <div className="about">
            <p>Operating_system  :  <span>{ product.operating_system}</span></p>
            <p>Ram :  <span>{product.ram}</span></p>
            <p>Storage : <span>{product.storage}</span></p>
            <p> Battery :  <span>{product.battery_capacity}</span></p>
            <p>Network :  <span>{product.network_technology}</span></p>
          </div>
        </div>
      </div>
    );
  };
  
  // Specifications Component
export const Specifications = ({ specs }) => {
    return (
      <div className='fs-4'>
        <h2>Specifications</h2>
        <p>Display: {specs.screen_size}</p>
        <p>Resolution: {specs.resolution}</p>
        <p>battery_capacity: {specs.battery_capacity}</p>
        <p>processor: {specs.processor}</p>
        <p>dimensions: {specs.dimensions}</p>
        <p>weight: {specs.weight}</p>
        <p>sim_type: {specs.sim_type}</p>
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
  
  // ReviewRatings Component
  export const ReviewRatings = ({ ratings }) => {
    return (
      <div>
        <h2>Reviews & Ratings</h2>
        <p>Average Rating: {ratings.average_rating}</p>
        <p>Total Reviews: {ratings.total_reviews}</p>
        <ul>
          {ratings.reviews.map((review, index) => (
            <li key={index}>
              <p><strong>{review.username}</strong> (Rating: {review.rating})</p>
              <p>{review.review}</p>
            </li>
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

export function Product1({pdata}){

  const [f,setf]=useState(0);
  const compo=[<Overview product={pdata}/>,<Specifications specs={pdata}/>,<ReviewRatings ratings={data[2]}/>,<Questions faqs={data[3]} />]

  return(
    <>
    <div className="Product-details">

      <div className="Product-details-index">
        {
         ["Overview", "Specification","Review & Ratings","Quations"].map((i,index)=>{
          return(
            <div key={index} className='under-line' style={{borderBottom:f===index? "4px solid blue": "none" }} >
            <h5 onClick={()=>{setf(index)}}>{i}</h5>

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

