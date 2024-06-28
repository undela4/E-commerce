import React,{useState, useEffect,useContext} from 'react';
import './card.css'
import Heart from '../../Review&Rating/Heart';
import { useNavigate } from 'react-router-dom';
import Rating from '../../Review&Rating/Rating';
import { UserContext } from '../../../Usecontext';



export default function Card({img,title,price,id,reviews,style}) 
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
    <div className="product-card-container"  style={style}>

          <div className="image_list" >
              <img src={img} alt="img" onClick={()=>nav(`./${id}`)} style={{cursor:"pointer"}}/>
          </div>
          
          <div className="card-content">
                      <div className="pName">
                      <h4 className='fw-500' style={{cursor:"pointer"}}  onClick={()=>nav(`./${id}`)}  >{title}</h4>
                      
                      </div>
                      <div className="d-flex gap-4">
                          <Rating rate={avgr} />
                          <div>
                            { ud &&(<Heart product_id={id} ud={ud}/>)}                    
                          </div>
                         
                      </div>
                      <p className=''>Save 60%</p>
                      <div className="prices d-flex  gap-3">
                          <h5 className='text-secondry'><del>₹ {Math.floor(price+5000)}</del></h5>
                          <h5 className='text-dark'>₹ {price}</h5>
                      </div>


          </div>

          </div>
  </>


  )
}
