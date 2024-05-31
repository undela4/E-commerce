
export const Overview = ({ product }) => {
    return (
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: {product.currency} {product.price}</p>
        <p>Category: {product.category}</p>
        <p>Brand: {product.brand}</p>
        <img src={product.image_url} alt={product.name} />
      </div>
    );
  };
  
  // Specifications Component
  export const Specifications = ({ specs }) => {
    return (
      <div>
        <h2>Specifications</h2>
        <p>Display: {specs.display}</p>
        <p>Connectivity: {specs.connectivity}</p>
        <p>Battery Life: {specs.battery_life}</p>
        <p>Charging Time: {specs.charging_time}</p>
        <p>Build Material: {specs.build_material}</p>
        <p>Strap Material: {specs.strap_material}</p>
        <p>Water Resistance: {specs.water_resistance}</p>
        <ul>
          {specs.features.map((feature, index) => (
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


import {useState} from 'react';
import data from '../data.js';

export function Product1(){

  const [f,setf]=useState(0);
  const compo=[<Overview product={data[0]}/>,<Specifications specs={data[1]}/>,<ReviewRatings ratings={data[2]}/>,<Questions faqs={data[3]} />]

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

