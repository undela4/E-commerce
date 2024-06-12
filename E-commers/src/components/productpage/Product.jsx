import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './product.css'
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { RiArrowRightSLine } from "react-icons/ri";
import { Product1 } from './ProductDetails/ProductDetails';
import SimilarProducts from './ProductDetails/SimilarProducts';
import FrequentlyBroughtTogether from './ProductDetails/frequentlyBroughtTogether';
import { successfunction } from '../../tostify';
import {fetch_by_id} from '../ProductListPage/fetch';
import { add_item_to_cart } from './ProductDetails/helpers';


export default function Product()
{


const [product,setproduct]=useState(null);
const [img,setimg]=useState('');


const {name,id}=useParams();

useEffect(()=>{

  fetch_by_id({_id:id},setproduct,setimg)

  },[]);


  return product?(
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
              <div className="">
              {
                  [1,2,3,4,5].map((item,index)=>{
                      return(<CiStar key={index} className='fs-4'/>)
                  })
              }
              </div>
              <div className=""><h6>(112 ratings)</h6></div>
            </div>
            <div className="d-flex gap-2"><h6><del>₹ {product.price+5000}</del></h6><h6>₹ {product.price}</h6><h6>(saved 70%)</h6></div>
            <div className="">
              <label htmlFor="sel1" className="form-label">Models</label>
              <select className="form-select" id="sel1" name="sellist1">
                <option>model-1</option>
                <option>model-2</option>
               
              </select>
            </div>
            <div className="d-flex gap-2  align-items-baseline">
            <h4>Quantity:</h4>
            <div className="d-flex gap-3 fs-4 quantity">
                <span>-</span>               
                <span>1</span>
                <span>+</span>


            </div>

            </div>
            <div className="d-flex gap-5">
              <button className='btn btn-outline-info' onClick={()=>add_item_to_cart(product._id)}>Add To Cart</button>
              <button className='btn btn-info'>Buy Now</button>
              <CiHeart className='fs-1'/>
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


