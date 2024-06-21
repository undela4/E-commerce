import React,{useState, useEffect,useContext} from 'react';
import './card.css'
import Heart from '../../Review&Rating/Heart';
import { useNavigate } from 'react-router-dom';
import Rating from '../../Review&Rating/Rating';
import { UserContext } from '../../../Usecontext';



export default function Card({img,title,price,delprice,id,reviews}) 
{

const [avgr,setavgr]=useState(0);
function filter(){

  let a=0;
  reviews.map((i)=>{
    a+=i.rating;
  })    
  setavgr(Math.floor(a/reviews.length));

}

useEffect(()=>{
  if(reviews)
    filter();
},[reviews])

  const nav=useNavigate();
  const {ud}=useContext(UserContext);


  return (
    <>
    <div className="product-card-container">

          <div className="card-img" >
              <img src={img} alt="img" onClick={()=>nav(`./${id}`)} style={{cursor:"pointer"}}/>

          </div>
          <div className="card-content d-flex flex-column ">

                      <div className="d-flex justify-content-between">
                          <Rating rate={avgr} />
                          <div className="">
                            {
                           
                           ud &&(<Heart product_id={id} ud={ud}/>)

                            }

                          </div>
                         
                          </div>
                      <h5 className='fw-bold' style={{cursor:"pointer"}}  onClick={()=>nav(`./${id}`)}  >{title}</h5>
                      <p className=''>Save 60%</p>
                      <div className="prices d-flex  gap-3">
                          <h5 className='text-secondry'><del>₹ {delprice}</del></h5>
                          <h5 className='text-dark'>₹ {price}</h5>
                      </div>


                  </div>
              </div>
  </>


  )
}
