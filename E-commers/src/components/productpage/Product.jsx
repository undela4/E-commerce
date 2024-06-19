import React,{useState,useEffect,useContext} from 'react';
import { useParams } from 'react-router-dom';
import './product.css'
import { RiArrowRightSLine } from "react-icons/ri";
import { Product1 } from './ProductDetails/ProductDetails';
import SimilarProducts from './ProductDetails/SimilarProducts';
import FrequentlyBroughtTogether from './ProductDetails/frequentlyBroughtTogether';
import { errorfunction, successfunction } from '../../tostify';
import { useNavigate } from 'react-router-dom';
import {fetch_by_id} from '../ProductListPage/fetch';
import { add_item_to_cart } from './ProductDetails/helpers';
import Rating from '../Review&Rating/Rating';
import Heart from '../Review&Rating/Heart';
import { UserContext } from '../../Usecontext';
import Cookies from 'js-cookie'



export default function Product()
{

const [product,setproduct]=useState();
const [img,setimg]=useState('');
const {ud,fun}=useContext(UserContext);
const {name,id}=useParams();
const nav=useNavigate();




function add_to_cart(flag)
{
 
 
  const id=Cookies.get('uId');
  if(id){
    add_item_to_cart(product._id)
    if(!flag)
      setTimeout(()=>nav('/cart'),1000)
  }
  else
    errorfunction("Please Login To Access All Features")

}




useEffect(()=>{

  fetch_by_id({_id:id},setproduct,setimg)
  fun();
  

},[]);


  return product ? (
    <>
    <div className="containe">
    <h5 className='mt-4 mb-5'><a href="/" className='text-decoration-none text-dark'>Home</a> <RiArrowRightSLine /> {name} <RiArrowRightSLine />{product.model}</h5>


        <div className="Product-card">

          <div className="Product-card-left">
            <div className="product-image">
            <img src={img} alt="img"/>
            </div>
            <div className="product-other-images d-flex gap-2 mt-2">
              {
                product.images.map((i,index)=>{
                  return(<img key={index} src={i}
                  onClick={()=>setimg(i)} />)
                })
              }
            </div>
          </div>
          
          <div className="Product-card-right">
            
            <h4>{product.brand} | {product.model}| {product.ram} |{product.storage} |{product.processor}</h4>
           
            <div className="d-flex gap-3 align-items-baseline">
             <Rating/>
              <div className=""><h6>(112)</h6></div>
            </div>
            <div className="d-flex gap-2"><h6><del>₹ {product.price+5000}</del></h6><h6>₹ {product.price}</h6><h6>(saved 70%)</h6></div>
            <div className="">
              <label htmlFor="sel1" className="form-label">Models</label>
              <select className="form-select" id="sel1" name="sellist1">
                <option>model-1</option>
                <option>model-2</option>
               
              </select>
            </div>

            {
            product&&(
            
            <div className="d-flex gap-3 align-items-center mt-3">

          <p className='fw-bold fs-3'>Colours:</p>

            {
              product.color_options.map((item)=>{
                return(
  
                 <div className="">
                   <div className="d-flex rounded-circle " key={item}
                   style={{backgroundColor:item,width:"30px",height:"30px",border:"2px solid black "}}>
                    </div>
                    <p>{item}</p>
                 </div>
                )
            
            
          })
        }
            </div>)
          }
          
            <div className="d-flex gap-5">
              <button className='btn btn-outline-info' onClick={()=>add_to_cart(true)}>Add To Cart</button>
              <button className='btn btn-info' onClick={()=>add_to_cart(false)}>Buy Now</button>
             {
              ud&&(<Heart product_id={id} ud={ud} />)
             }
            </div>
          
          </div>
        </div>

        <Product1 pdata={product}/>

        <SimilarProducts/>
        <FrequentlyBroughtTogether/>



    </div>

    </>
  ):(<center><h1 className='text-danger'>Loading.....</h1></center>)
}


