import React,{useState,useEffect} from 'react';
import { get_reviews } from './helpers';
import Loder from '../../loder/Loder';  
import Rating from '../../Review&Rating/Rating';
import './review.css'


export const ReviewRatings = ({ product_id}) => {

const [reviews,setreviews]=useState([]);
const [avgr,setavgr]=useState(0);
const [f,setf]=useState(false);

useEffect(()=>{

  get_reviews(setreviews,setf,product_id);
  let avg_rating=0;
  reviews.map((i)=>{
    avg_rating=avg_rating+i.rating;
  })    
  setavgr(Math.round(avg_rating/reviews.length));

},[f]);


return f ?  (
    <>
        <h2 className='mb-5'>Reviews & Ratings</h2>
      <div className='reviews' >
        {
             reviews.length!=0 ?  ( <div>
             <div className="d-flex gap-5 mb-5">
             <div className="">
             <h4>Average Rating: {avgr}</h4>
             <Rating rate={avgr}/>
             </div>
             <h4>Total Reviews: {reviews.length}</h4>
     
             </div>
             <hr></hr>
             {
                reviews.map((item,index)=>{
                     return(
                         <div className="p-3" key={index}>
                             <div className="user-icon">
                                 <div className="user-logo"><p>{item.user_name.substring(0,1)}</p></div>
                                 <h4>{item.user_name}</h4>
                             </div>
                             <div className="d-flex gap-3 mb-1">
                                 <Rating rate={item.rating}/>
                                 <h5> Review on : {item.createdAt.substring(0,10)} , {item.createdAt.substring(11,19)}</h5>
                             </div>
                             <div className="w-75">
                             <h4>{item.title}</h4> 
                             <p>{item.description}</p>
                             </div>
                             <div className="w-50">
                                 <img src={item.photo} />
                             </div>
                            
                         <hr></hr>
                         </div>
                     )
                 }) 
             }
             </div>):(<EmptyReviews/>)
        }        
       

      </div>
      </>

    ):(<Loder/>);
  };
  
  
function EmptyReviews(){
    return(
        <div>
            <h3 className='text-danger'>No Reviews Yet To This Product</h3>

            <img src="https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-8044861-6430770.png?f=webp"/>
        </div>
    )
}